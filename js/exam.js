/* ============================================================
   exam.js – Abschlussprüfung.
   Liest den Fragenpool (window.EXAM_BANK aus js/data/exam-bank.js),
   lässt die Länge wählen, mischt zufällig, baut daraus QUIZ_DATA
   und lädt dann die normale Übungslogik (quiz.js) nach.

   quiz.js wird NICHT angefasst – die Prüfung ist nur ein anderer
   Weg, QUIZ_DATA zu füllen.
   ============================================================ */

(function () {
  "use strict";

  var BANK = window.EXAM_BANK || [];
  var root = document.getElementById("quiz");
  var introEl = document.getElementById("topic-intro");

  if (!BANK.length) {
    root.innerHTML = '<p>Fragenpool konnte nicht geladen werden. ' +
      'Wurde <code>js/data/exam-bank.js</code> erzeugt? ' +
      '(<code>node build-bank.js</code>)</p>';
    return;
  }

  // Wie viele verschiedene Themen stecken im Pool?
  var themen = {};
  BANK.forEach(function (q) { themen[q.topicId] = true; });
  var themenAnzahl = Object.keys(themen).length;

  // ---- Fisher–Yates: Liste zufällig mischen --------------------
  function mische(arr) {
    var a = arr.slice();
    for (var k = a.length - 1; k > 0; k--) {
      var j = Math.floor(Math.random() * (k + 1));
      var tmp = a[k]; a[k] = a[j]; a[j] = tmp;
    }
    return a;
  }

  // ---- Auswahl bauen: n Fragen, möglichst breit gestreut -------
  // Erst pro Thema eine Frage (Reihenfolge der Themen zufällig),
  // dann mit weiteren Zufallsfragen auf n auffüllen. So ist bei
  // kleiner Länge trotzdem fast jedes Thema vertreten.
  function auswahl(n) {
    if (n >= BANK.length) return mische(BANK);

    var nachThema = {};
    BANK.forEach(function (q) {
      (nachThema[q.topicId] = nachThema[q.topicId] || []).push(q);
    });

    var gewaehlt = [];
    var genommen = new Set();

    // eine Frage je Thema (Themen in zufälliger Reihenfolge)
    var ids = mische(Object.keys(nachThema));
    for (var x = 0; x < ids.length && gewaehlt.length < n; x++) {
      var pool = mische(nachThema[ids[x]]);
      gewaehlt.push(pool[0]);
      genommen.add(pool[0]);
    }

    // Rest mit beliebigen, noch nicht genommenen Fragen auffüllen
    var rest = mische(BANK).filter(function (q) { return !genommen.has(q); });
    for (var y = 0; gewaehlt.length < n && y < rest.length; y++) {
      gewaehlt.push(rest[y]);
    }

    return mische(gewaehlt);   // am Ende nochmal durchmischen
  }

  // ---- Prüfung starten: QUIZ_DATA setzen + quiz.js laden -------
  function starten(n) {
    var fragen = auswahl(n).map(function (q) {
      // Kopie, damit der Pool unverändert bleibt; Thema ans
      // Feedback hängen, ohne die Frage selbst zu verraten.
      var k = Object.assign({}, q);
      var tag = '<em class="exam-topic">[' + q.topic + ']</em>';
      k.erklaerung = (q.erklaerung ? q.erklaerung + ' ' : '') + tag;
      return k;
    });

    window.QUIZ_DATA = {
      title: "Abschlussprüfung",
      intro: fragen.length + " Fragen aus allen Grammatik-Themen.",
      explain: '<h2>Abschlussprüfung</h2><ul>' +
        '<li>' + fragen.length + ' zufällige Fragen aus ' + themenAnzahl + ' Themen.</li>' +
        '<li>Multiple Choice, Lückentext und Umformen – gemischt.</li>' +
        '<li>Nach jeder Antwort siehst du die Lösung und das Thema dazu.</li>' +
        '<li>Neue Mischung? Seite neu laden und wieder starten.</li>' +
        '</ul>',
      questions: fragen
    };

    if (introEl) introEl.textContent = window.QUIZ_DATA.intro;
    root.innerHTML = "";   // Startbildschirm weg

    var logic = document.createElement("script");
    logic.src = "js/quiz.js";
    document.body.appendChild(logic);
  }

  // ---- Startbildschirm: Länge wählen --------------------------
  function startbildschirm() {
    var laengen = [
      { n: 15, label: "Kurz",   sub: "15 Fragen" },
      { n: 30, label: "Mittel", sub: "30 Fragen" },
      { n: 50, label: "Lang",   sub: "50 Fragen" },
      { n: BANK.length, label: "Alles", sub: BANK.length + " Fragen" }
    ];

    var box = document.createElement("div");
    box.className = "exam-start";
    box.innerHTML =
      '<p class="exam-start__lead">' + BANK.length + ' Fragen aus ' + themenAnzahl +
      ' Themen warten. Wähle, wie lang deine Prüfung sein soll:</p>';

    var grid = document.createElement("div");
    grid.className = "exam-start__grid";

    laengen.forEach(function (o) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "exam-len";
      b.innerHTML = '<span class="exam-len__t">' + o.label + '</span>' +
                    '<span class="exam-len__s">' + o.sub + '</span>';
      b.addEventListener("click", function () { starten(o.n); });
      grid.appendChild(b);
    });

    box.appendChild(grid);
    root.replaceChildren(box);
  }

  startbildschirm();
})();