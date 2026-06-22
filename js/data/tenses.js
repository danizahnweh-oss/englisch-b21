/* ============================================================
   Modul 1: Tenses (Zeitformen)
   Diese Datei enthält NUR Inhalt – keine Logik.
   quiz.js liest die Variable QUIZ_DATA und baut daraus das Quiz.

   Jede Frage ist ein Objekt. Es gibt drei Typen:
   - "mc"        Multiple Choice  -> optionen[], richtig = Index (0,1,2)
   - "gap"       Lückentext       -> richtig = Wort  (oder Liste erlaubter Wörter)
   - "transform" Umformen         -> richtig = ganzer Satz (oder Liste)
   "erklaerung" erscheint nach der Antwort als Hinweis.
   ============================================================ */

const QUIZ_DATA = {
  title:  "Tenses",
  badge:  "Modul 1",
  intro:  "Present Perfect vs. Past Simple, Verlaufsformen und Zukunft.",

  // Kurze Erklärung über dem Quiz (HTML erlaubt)
  explain: `
    <h2>Kurz erklärt</h2>
    <ul>
      <li><b>Past Simple</b> = abgeschlossene Handlung mit Zeitpunkt.
        <span class="ex">I saw her yesterday.</span></li>
      <li><b>Present Perfect</b> = Bezug zur Gegenwart, Zeitpunkt egal.
        <span class="ex">I have seen this film (already).</span></li>
      <li><b>since</b> = Startpunkt, <b>for</b> = Zeitdauer – beide mit Present Perfect.
        <span class="ex">since 2019 / for three years</span></li>
      <li><b>Continuous</b> betont den Verlauf.
        <span class="ex">She is working / was working.</span></li>
      <li><b>Zukunft:</b> <b>will</b> (Spontanes/Vorhersage), <b>going to</b> (Plan/Absicht),
        <b>Present Continuous</b> (feste Verabredung).</li>
    </ul>`,

  questions: [
    {
      type: "mc",
      frage: "I ___ in London since 2019.",
      optionen: ["live", "have lived", "am living"],
      richtig: 1,
      erklaerung: "Mit „since“ (Startpunkt) steht Present Perfect: have lived."
    },
    {
      type: "mc",
      frage: "We ___ to Italy last summer.",
      optionen: ["have gone", "went", "have been"],
      richtig: 1,
      erklaerung: "„last summer“ ist ein fester Zeitpunkt in der Vergangenheit → Past Simple: went."
    },
    {
      type: "gap",
      frage: "Look! It ___ (rain). Take an umbrella.",
      richtig: ["is raining", "'s raining"],
      erklaerung: "Gerade jetzt im Verlauf → Present Continuous: is raining."
    },
    {
      type: "mc",
      frage: "She has worked here ___ five years.",
      optionen: ["since", "for", "from"],
      richtig: 1,
      erklaerung: "„five years“ ist eine Zeitdauer → for. (since + Zeitpunkt)"
    },
    {
      type: "gap",
      frage: "When I was young, I ___ (play) tennis every weekend.",
      richtig: ["played"],
      erklaerung: "Regelmäßig in der Vergangenheit, abgeschlossen → Past Simple: played."
    },
    {
      type: "mc",
      frage: "Don't call at 8 – we ___ dinner then.",
      optionen: ["will have", "will be having", "have"],
      richtig: 1,
      erklaerung: "Verlauf zu einem Zeitpunkt in der Zukunft → Future Continuous: will be having."
    },
    {
      type: "transform",
      frage: "Mach daraus Present Perfect: „I finish my homework.“",
      richtig: ["I have finished my homework.", "I've finished my homework."],
      erklaerung: "Present Perfect = have/has + Partizip: I have finished my homework."
    },
    {
      type: "mc",
      frage: "Look at those clouds! It ___ rain.",
      optionen: ["will", "is going to", "rains"],
      richtig: 1,
      erklaerung: "Vorhersage aus sichtbaren Anzeichen → going to: is going to rain."
    },
    {
      type: "gap",
      frage: "I ___ (not / see) John today. Is he ill?",
      richtig: ["haven't seen", "have not seen"],
      erklaerung: "„today“ ist noch nicht vorbei, Bezug zur Gegenwart → Present Perfect: haven't seen."
    },
    {
      type: "mc",
      frage: "By the time we arrived, the train ___.",
      optionen: ["already left", "had already left", "has already left"],
      richtig: 1,
      erklaerung: "Vergangenheit vor der Vergangenheit → Past Perfect: had already left."
    },
    {
      type: "transform",
      frage: "Aktiv → Zukunft mit „will“: „They build a new school.“",
      richtig: ["They will build a new school.", "They'll build a new school."],
      erklaerung: "will + Grundform: They will build a new school."
    },
    {
      type: "gap",
      frage: "How long ___ you ___ (know) her?",
      richtig: ["have known", "have you known"],
      erklaerung: "Zustand seit Vergangenheit bis jetzt → Present Perfect: have you known."
    }
  ]
};
