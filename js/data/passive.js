/* ============================================================
   Modul 2: Passive & Reported Speech
   Aufbau identisch zu tenses.js. Nur der Inhalt ist anders.
   ============================================================ */

const QUIZ_DATA = {
  title:  "Passive & Reported Speech",
  badge:  "Modul 2",
  intro:  "Passiv in verschiedenen Zeiten und die indirekte Rede (backshift).",

  explain: `
    <h2>Kurz erklärt</h2>
    <ul>
      <li><b>Passiv</b> = Form von <b>be</b> + Partizip. Wer es tut, ist egal oder unbekannt.
        <span class="ex">The house was built in 1900.</span></li>
      <li>Zeit steckt im <b>be</b>:
        <span class="ex">is made · was made · has been made · will be made</span></li>
      <li><b>Reported Speech:</b> Zeit rückt eine Stufe zurück (backshift).
        <span class="ex">"I am tired" → He said he was tired.</span></li>
      <li><b>say</b> ohne Person, <b>tell</b> mit Person.
        <span class="ex">She said (that)… / She told me (that)…</span></li>
      <li>Auch <b>here→there, now→then, today→that day</b> verschieben sich.</li>
    </ul>`,

  questions: [
    {
      type: "mc",
      frage: "The bridge ___ in 1932.",
      optionen: ["was built", "is built", "has built"],
      richtig: 0,
      erklaerung: "Abgeschlossen mit Jahreszahl → Passiv Past Simple: was built."
    },
    {
      type: "transform",
      frage: "Aktiv → Passiv: „They clean the office every day.“",
      richtig: ["The office is cleaned every day."],
      erklaerung: "Present Simple Passiv = is/are + Partizip: The office is cleaned every day."
    },
    {
      type: "mc",
      frage: "Choose the correct verb: She ___ me that she was busy.",
      optionen: ["said", "told", "asked"],
      richtig: 1,
      erklaerung: "Mit Person (me) → tell: She told me…"
    },
    {
      type: "gap",
      frage: "This song ___ (write) by a famous band.",
      richtig: ["was written"],
      erklaerung: "Passiv Vergangenheit: was + Partizip „written“ → was written."
    },
    {
      type: "transform",
      frage: "Indirekte Rede: He said: „I am cooking dinner.“",
      richtig: ["He said he was cooking dinner.", "He said that he was cooking dinner."],
      erklaerung: "Present Continuous → Past Continuous: He said he was cooking dinner."
    },
    {
      type: "mc",
      frage: "A new hospital ___ next year.",
      optionen: ["will build", "will be built", "is built"],
      richtig: 1,
      erklaerung: "Zukunft Passiv = will be + Partizip: will be built."
    },
    {
      type: "transform",
      frage: "Indirekte Rede: She said: „I have finished my work.“",
      richtig: ["She said she had finished her work.", "She said that she had finished her work."],
      erklaerung: "Present Perfect → Past Perfect: She said she had finished her work."
    },
    {
      type: "gap",
      frage: "Many languages ___ (speak) in India.",
      richtig: ["are spoken"],
      erklaerung: "Mehrzahl, Gegenwart, Passiv → are + Partizip „spoken“: are spoken."
    },
    {
      type: "mc",
      frage: "He said he ___ visit us the next day.",
      optionen: ["will", "would", "shall"],
      richtig: 1,
      erklaerung: "„will“ wird in der indirekten Rede zu „would“."
    },
    {
      type: "transform",
      frage: "Indirekte Rede: Tom: „I bought a car yesterday.“",
      richtig: [
        "Tom said he had bought a car the day before.",
        "Tom said that he had bought a car the day before.",
        "Tom said he had bought a car the previous day."
      ],
      erklaerung: "Past Simple → Past Perfect, yesterday → the day before: Tom said he had bought a car the day before."
    },
    {
      type: "gap",
      frage: "The letter ___ (already / send). It's on its way.",
      richtig: ["has already been sent"],
      erklaerung: "Present Perfect Passiv = has been + Partizip: has already been sent."
    },
    {
      type: "mc",
      frage: "She asked me where I ___.",
      optionen: ["live", "lived", "am living"],
      richtig: 1,
      erklaerung: "Frage in indirekter Rede, backshift Present→Past: where I lived."
    }
  ]
};
