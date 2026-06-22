/* ============================================================
   quiz.js – die Übungslogik für ALLE Module.
   Du schreibst diese Datei nur einmal. Sie liest die Variable
   QUIZ_DATA (kommt aus js/data/<modul>.js) und baut daraus
   das komplette Quiz: Fragen, Feedback, Punkte, Abschluss.

   Damit eine neue Übung dazukommt, fasst du diese Datei NICHT an
   – du fügst nur einen Eintrag in der passenden data-Datei hinzu.
   ============================================================ */

(function () {
  "use strict";

  // Sicherheitsnetz: ohne Daten kein Quiz.
  if (typeof QUIZ_DATA === "undefined") {
    console.error("QUIZ_DATA fehlt – wurde die data-Datei vor quiz.js geladen?");
    return;
  }

  const NAME    = "Nadja";          // Name der Lernenden – wird überall persönlich genutzt
  const data    = QUIZ_DATA;
  const fragen  = data.questions;
  const root    = document.getElementById("quiz");
  const SPEICHER = "best:" + data.title;   // Schlüssel für localStorage

  // ---- Zustand (merkt sich, wo wir gerade sind) --------------
  let i        = 0;   // aktuelle Frage (0 = erste)
  let punkte   = 0;
  let richtig  = 0;   // Anzahl richtiger Antworten
  let streak   = 0;   // richtige in Folge
  let beste    = 0;   // höchste Streak in diesem Durchlauf
  let beantwortet = false;  // ist die aktuelle Frage schon beantwortet?

  // ---- kleine Helfer ----------------------------------------
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls)  n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };

  // Antworten vergleichbar machen: Kleinschreibung, Leerzeichen
  // normalisieren, Schluss-Satzzeichen und krumme Apostrophe weg.
  const norm = (s) => String(s)
    .toLowerCase()
    .replace(/[’‘`]/g, "'")
    .replace(/\s+/g, " ")
    .replace(/[.!?]+$/, "")
    .trim();

  // richtige Antwort als Liste erlaubter Varianten zurückgeben
  const erlaubt = (f) => Array.isArray(f.richtig) ? f.richtig : [f.richtig];

  // ============================================================
  // 1) Erklär-Box + Quiz-Gerüst einmal aufbauen
  // ============================================================
  function aufbauen() {
    // Erklärung
    if (data.explain) {
      const box = el("section", "explain", data.explain);
      root.before(box);
    }

    // Statusleiste (Punkte / Streak / Fortschritt)
    const status = el("div", "statusbar");
    status.innerHTML = `
      <span class="chip">Frage <span class="num" id="q-now">1</span> / ${fragen.length}</span>
      <span class="chip">Punkte: <span class="num" id="q-score">0</span></span>
      <span class="chip streak">Serie: <span class="num" id="q-streak">0</span> 🔥</span>`;
    const bar = el("div", "progress", '<span id="q-bar"></span>');

    root.appendChild(status);
    root.appendChild(bar);
    root.appendChild(el("div", "", '<div id="q-card"></div>'));

    frageZeigen();
  }

  // ============================================================
  // 2) Eine Frage anzeigen (je nach Typ verschieden)
  // ============================================================
  function frageZeigen() {
    beantwortet = false;
    const f = fragen[i];
    const card = el("div", "question");

    const typLabel = { mc: "Multiple Choice", gap: "Lückentext", transform: "Umformen" }[f.type] || "Aufgabe";
    card.appendChild(el("div", "q-type", typLabel));
    card.appendChild(el("div", "q-text", f.frage));

    if (f.type === "mc") {
      const opts = el("div", "options");
      f.optionen.forEach((text, idx) => {
        const b = el("button", "option", text);
        b.type = "button";
        b.addEventListener("click", () => mcPruefen(idx, opts));
        opts.appendChild(b);
      });
      card.appendChild(opts);
    } else {
      // gap + transform: ein Textfeld + Prüf-Knopf
      const inp = el("input", "answer-input");
      inp.type = "text";
      inp.id = "q-input";
      inp.placeholder = f.type === "gap" ? "Antwort eintippen…" : "Ganzen Satz eintippen…";
      inp.autocomplete = "off";
      inp.autocapitalize = "off";
      inp.spellcheck = false;
      inp.addEventListener("keydown", (e) => { if (e.key === "Enter") textPruefen(); });
      card.appendChild(inp);

      const actions = el("div", "actions");
      const check = el("button", "btn", "Prüfen");
      check.id = "q-check";
      check.addEventListener("click", textPruefen);
      actions.appendChild(check);
      card.appendChild(actions);
    }

    // Feedback-Platzhalter + (versteckter) Weiter-Knopf
    card.appendChild(el("div", "feedback", '<div id="q-fb-inner"></div>'));
    const next = el("div", "actions");
    const nb = el("button", "btn ghost", i + 1 < fragen.length ? "Weiter →" : "Auswertung →");
    nb.id = "q-next";
    nb.style.display = "none";
    nb.addEventListener("click", weiter);
    next.appendChild(nb);
    card.appendChild(next);

    const slot = document.getElementById("q-card");
    slot.replaceChildren(card);

    // Fokus aufs Feld, damit man sofort tippen kann
    const inp = document.getElementById("q-input");
    if (inp) inp.focus();

    statusAktualisieren();
  }

  // ============================================================
  // 3) Antworten prüfen
  // ============================================================
  function mcPruefen(gewaehlt, optsBox) {
    if (beantwortet) return;
    const f = fragen[i];
    const buttons = optsBox.querySelectorAll(".option");
    buttons.forEach((b) => (b.disabled = true));

    const istRichtig = gewaehlt === f.richtig;
    buttons[f.richtig].classList.add("correct");
    if (!istRichtig) buttons[gewaehlt].classList.add("wrong");

    auswerten(istRichtig, f);
  }

  function textPruefen() {
    if (beantwortet) return;
    const f = fragen[i];
    const inp = document.getElementById("q-input");
    const eingabe = norm(inp.value);
    if (!eingabe) { inp.focus(); return; }   // leer? nichts tun

    const istRichtig = erlaubt(f).some((r) => norm(r) === eingabe);
    inp.disabled = true;
    inp.classList.add(istRichtig ? "correct" : "wrong");
    const check = document.getElementById("q-check");
    if (check) check.disabled = true;

    auswerten(istRichtig, f);
  }

  // gemeinsame Auswertung für alle Typen
  function auswerten(istRichtig, f) {
    beantwortet = true;
    const fb = root.querySelector(".feedback");
    const inner = document.getElementById("q-fb-inner");

    if (istRichtig) {
      richtig++;
      streak++;
      beste = Math.max(beste, streak);
      // Punkte: Grundwert + Bonus für lange Serie
      const bonus = streak >= 3 ? 5 : 0;
      punkte += 10 + bonus;
      fb.className = "feedback good show";
      inner.innerHTML =
        `<span class="tag">Richtig${bonus ? ", " + NAME : ""}!</span> ` +
        (bonus ? `<span class="spark">🔥 Serie ${streak} (+${bonus} Bonus)</span><br>` : "") +
        `<span class="why">${f.erklaerung || ""}</span>`;
    } else {
      streak = 0;
      fb.className = "feedback bad show";
      const loesung = erlaubt(f)[0];
      inner.innerHTML =
        `<span class="tag">Nicht ganz.</span> ` +
        `<span class="sol">Richtig: ${f.type === "mc" ? f.optionen[f.richtig] : loesung}</span><br>` +
        `<span class="why">${f.erklaerung || ""}</span>`;
    }

    const nb = document.getElementById("q-next");
    nb.style.display = "inline-block";
    nb.focus();
    statusAktualisieren();
  }

  // ============================================================
  // 4) Weiter / nächste Frage oder Abschluss
  // ============================================================
  function weiter() {
    i++;
    if (i < fragen.length) {
      frageZeigen();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      abschluss();
    }
  }

  function statusAktualisieren() {
    document.getElementById("q-now").textContent    = Math.min(i + 1, fragen.length);
    document.getElementById("q-score").textContent  = punkte;
    document.getElementById("q-streak").textContent = streak;
    const beantwortetAnzahl = beantwortet ? i + 1 : i;
    document.getElementById("q-bar").style.width =
      Math.round((beantwortetAnzahl / fragen.length) * 100) + "%";
  }

  // ============================================================
  // 5) Abschluss-Screen mit Prozent-Ring
  // ============================================================
  function abschluss() {
    const prozent = Math.round((richtig / fragen.length) * 100);

    // bisherige Bestleistung laden / speichern (localStorage)
    let rekord = 0;
    try { rekord = parseInt(localStorage.getItem(SPEICHER) || "0", 10); } catch (e) {}
    const neuerRekord = punkte > rekord;
    if (neuerRekord) { try { localStorage.setItem(SPEICHER, String(punkte)); } catch (e) {} }

    let nachricht;
    if (prozent === 100)      nachricht = `Perfekt, ${NAME}! Alles richtig. 🏆`;
    else if (prozent >= 80)   nachricht = `Stark, ${NAME}! Sitzt fast komplett.`;
    else if (prozent >= 60)   nachricht = `Gut gemacht, ${NAME}. Dranbleiben!`;
    else                      nachricht = `Übung macht den Meister, ${NAME}. Nochmal?`;

    const res = el("section", "result");
    res.innerHTML = `
      <h2>Geschafft, ${NAME}!</h2>
      <div class="ring" style="--p:${prozent}"><b>${prozent}%</b></div>
      <p class="msg">${nachricht}</p>
      <p class="sub">${richtig} von ${fragen.length} richtig · ${punkte} Punkte ·
        längste Serie ${beste} 🔥</p>
      <p class="sub">${neuerRekord ? "🎉 Neue Bestpunktzahl!" : "Bestpunktzahl: " + Math.max(rekord, punkte)}</p>
      <div class="actions" style="justify-content:center">
        <button class="btn" id="q-again">Nochmal üben</button>
        <a class="btn ghost" href="index.html">Zur Übersicht</a>
      </div>`;

    document.getElementById("q-card").replaceChildren(res);
    document.getElementById("q-bar").style.width = "100%";
    document.getElementById("q-again").addEventListener("click", neustart);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function neustart() {
    i = 0; punkte = 0; richtig = 0; streak = 0; beste = 0; beantwortet = false;
    frageZeigen();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---- los geht's -------------------------------------------
  aufbauen();
})();
