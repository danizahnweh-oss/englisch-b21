/* Thema 25: Past tenses – Simple Past, Past Continuous, Past Perfect. */
const QUIZ_DATA = {
  title: "Past tenses",
  intro: "Simple Past, Past Continuous und Past Perfect im Überblick.",
  explain: `
    <h2>Kurz erklärt</h2>
    <ul>
      <li><b>Simple Past</b>: abgeschlossen, mit Zeitpunkt.
        <span class="ex">I played tennis yesterday.</span></li>
      <li><b>Past Continuous</b> (was/were + -ing): Verlauf in der Vergangenheit.
        <span class="ex">While I was cooking, the phone rang.</span></li>
      <li><b>Past Perfect</b> (had + Partizip): das „Davor“ in der Vergangenheit.
        <span class="ex">The train had left before we arrived.</span></li>
      <li>Typische Kombination: längere Handlung (Continuous) + kurze (Simple Past).</li>
    </ul>`,
  questions: [
    { type: "gap", frage: "When I was young, I ___ (play) tennis every weekend.",
      richtig: ["played"], erklaerung: "Regelmäßig & abgeschlossen → Simple Past: played." },
    { type: "gap", frage: "I ___ (see) her at the station yesterday.",
      richtig: ["saw"], erklaerung: "Unregelmäßiges Verb, Simple Past von see = saw." },
    { type: "mc", frage: "While she ___ dinner, the phone rang.",
      optionen: ["cooked", "was cooking", "had cooked"], richtig: 1,
      erklaerung: "Verlauf, der unterbrochen wird → Past Continuous: was cooking." },
    { type: "mc", frage: "By the time we arrived, the train ___.",
      optionen: ["already left", "had already left", "has already left"], richtig: 1,
      erklaerung: "Vergangenheit vor der Vergangenheit → Past Perfect: had already left." },
    { type: "gap", frage: "What ___ you ___ (do) when the accident happened?",
      richtig: ["were doing", "were you doing"],
      erklaerung: "Verlauf zu einem Zeitpunkt → Past Continuous: were you doing." },
    { type: "mc", frage: "They ___ to the cinema last night.",
      optionen: ["go", "went", "have gone"], richtig: 1,
      erklaerung: "„last night“ = fester Zeitpunkt → Simple Past: went." },
    { type: "transform", frage: "Mach daraus Past Perfect: „She finished her work, then she went home.“",
      richtig: ["She had finished her work before she went home.",
                "After she had finished her work, she went home."],
      erklaerung: "Frühere Handlung → Past Perfect: She had finished her work before she went home." },
    { type: "gap", frage: "He didn't come because he ___ (miss) the bus.",
      richtig: ["had missed", "missed"],
      erklaerung: "Grund liegt davor → Past Perfect: had missed (auch Simple Past oft akzeptiert)." },
    { type: "mc", frage: "I was tired because I ___ all day.",
      optionen: ["worked", "had worked", "was working"], richtig: 1,
      erklaerung: "Ursache vor dem Zustand → Past Perfect: had worked." },
    { type: "transform", frage: "Ins Simple Past: „I write a letter.“",
      richtig: ["I wrote a letter."], erklaerung: "Unregelmäßig: write → wrote." }
  ]
};
