/* Thema 35: Reported speech – indirekte Rede mit backshift. */
const QUIZ_DATA = {
  title: "Reported speech",
  intro: "Indirekte Rede: Die Zeit rückt eine Stufe zurück (backshift).",
  explain: `
    <h2>Kurz erklärt</h2>
    <ul>
      <li><b>backshift:</b> Die Zeitform geht eine Stufe zurück.
        <span class="ex">"I am tired." → He said he was tired.</span></li>
      <li>Present Perfect & Past Simple → <b>Past Perfect</b>.
        <span class="ex">"I have / I did" → he had …</span></li>
      <li><b>will → would</b>, <b>can → could</b>, <b>must → had to</b>.</li>
      <li><b>say</b> ohne Person, <b>tell</b> mit Person.
        <span class="ex">She said … / She told me …</span></li>
      <li>Auch Zeit-/Ortwörter verschieben sich: <b>now→then, today→that day, here→there, yesterday→the day before</b>.</li>
    </ul>`,
  questions: [
    { type: "mc", frage: "She ___ me that she was busy.",
      optionen: ["said", "told", "asked"], richtig: 1,
      erklaerung: "Mit Person (me) → tell: She told me…" },
    { type: "mc", frage: "He ___ that he was hungry.",
      optionen: ["said", "told", "told to"], richtig: 0,
      erklaerung: "Ohne Person → say: He said that…" },
    { type: "transform", frage: "Indirekte Rede: He said: „I am cooking dinner.“",
      richtig: ["He said he was cooking dinner.", "He said that he was cooking dinner."],
      erklaerung: "Present Continuous → Past Continuous: He said he was cooking dinner." },
    { type: "transform", frage: "Indirekte Rede: She said: „I have finished my work.“",
      richtig: ["She said she had finished her work.", "She said that she had finished her work."],
      erklaerung: "Present Perfect → Past Perfect: She said she had finished her work." },
    { type: "mc", frage: "He said he ___ visit us the next day.",
      optionen: ["will", "would", "shall"], richtig: 1,
      erklaerung: "will → would in der indirekten Rede." },
    { type: "transform", frage: "Indirekte Rede: Tom: „I bought a car yesterday.“",
      richtig: ["Tom said he had bought a car the day before.",
                "Tom said that he had bought a car the day before.",
                "Tom said he had bought a car the previous day."],
      erklaerung: "Past Simple → Past Perfect, yesterday → the day before." },
    { type: "mc", frage: "She asked me where I ___.",
      optionen: ["live", "lived", "am living"], richtig: 1,
      erklaerung: "Frage in indirekter Rede, backshift Present → Past: where I lived." },
    { type: "gap", frage: "„I can swim.“ → He said he ___ swim.",
      richtig: ["could"], erklaerung: "can → could." },
    { type: "transform", frage: "Indirekte Rede: Anna: „I will call you tomorrow.“",
      richtig: ["Anna said she would call me the next day.",
                "Anna said that she would call me the next day.",
                "Anna said she would call me the following day."],
      erklaerung: "will → would, tomorrow → the next day." },
    { type: "mc", frage: "He told me he ___ the film already.",
      optionen: ["saw", "has seen", "had seen"], richtig: 2,
      erklaerung: "Present Perfect/Past → Past Perfect: had seen." }
  ]
};
