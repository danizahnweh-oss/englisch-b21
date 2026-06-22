/* Thema 27: Present Perfect – nur Inhalt, Logik steckt in quiz.js. */
const QUIZ_DATA = {
  title: "Present perfect",
  intro: "have/has + Partizip: Bezug zur Gegenwart, Zeitpunkt egal.",
  explain: `
    <h2>Kurz erklärt</h2>
    <ul>
      <li><b>Form:</b> have/has + 3. Verbform (Partizip).
        <span class="ex">I have seen / she has gone</span></li>
      <li>Handlung mit <b>Bezug zur Gegenwart</b>, Zeitpunkt unwichtig.
        <span class="ex">I have lost my key. (= jetzt weg)</span></li>
      <li><b>since</b> = Startpunkt, <b>for</b> = Zeitdauer.
        <span class="ex">since 2019 · for three years</span></li>
      <li>Signalwörter: <b>ever, never, already, yet, just, so far</b>.</li>
      <li>Fester Vergangenheits-Zeitpunkt (yesterday, last year) → kein Present Perfect, sondern Past Simple.</li>
    </ul>`,
  questions: [
    { type: "mc", frage: "I ___ in London since 2019.",
      optionen: ["live", "have lived", "am living"], richtig: 1,
      erklaerung: "„since“ (Startpunkt) → Present Perfect: have lived." },
    { type: "mc", frage: "She has worked here ___ five years.",
      optionen: ["since", "for", "from"], richtig: 1,
      erklaerung: "„five years“ = Zeitdauer → for. (since + Zeitpunkt)" },
    { type: "gap", frage: "Have you ever ___ (be) to Spain?",
      richtig: ["been"], erklaerung: "ever + Present Perfect, Partizip von be = been." },
    { type: "gap", frage: "I ___ (not / see) John today. Is he ill?",
      richtig: ["haven't seen", "have not seen"],
      erklaerung: "„today“ ist noch nicht vorbei → Present Perfect: haven't seen." },
    { type: "mc", frage: "___ you finished your homework yet?",
      optionen: ["Did", "Have", "Are"], richtig: 1,
      erklaerung: "yet + Present Perfect-Frage: Have you finished…?" },
    { type: "transform", frage: "Mach daraus Present Perfect: „I finish my homework.“",
      richtig: ["I have finished my homework.", "I've finished my homework."],
      erklaerung: "have/has + Partizip: I have finished my homework." },
    { type: "mc", frage: "We ___ to Italy last summer.",
      optionen: ["have gone", "went", "have been"], richtig: 1,
      erklaerung: "„last summer“ = fester Zeitpunkt → Past Simple: went (nicht Present Perfect)." },
    { type: "gap", frage: "How long ___ you ___ (know) her?",
      richtig: ["have known", "have you known"],
      erklaerung: "Zustand seit Vergangenheit bis jetzt → have you known." },
    { type: "mc", frage: "I've known her ___ we were children.",
      optionen: ["for", "since", "during"], richtig: 1,
      erklaerung: "„we were children“ ist ein Startpunkt → since." },
    { type: "transform", frage: "Verneine im Present Perfect: „They have arrived.“",
      richtig: ["They haven't arrived.", "They have not arrived."],
      erklaerung: "have + not + Partizip: They haven't arrived." }
  ]
};
