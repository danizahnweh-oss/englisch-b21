/* Thema 12: Relative pronouns and clauses. */
const QUIZ_DATA = {
  title: "Relative pronouns and clauses",
  intro: "who/which/that/whose/where und der Unterschied defining vs. non-defining.",
  explain: `
    <h2>Kurz erklärt</h2>
    <ul>
      <li><b>who</b> Personen, <b>which</b> Sachen, <b>that</b> beides (nur defining),
        <b>whose</b> Besitz, <b>where</b> Ort.
        <span class="ex">the man who… / the book which… / the girl whose…</span></li>
      <li><b>Defining</b> (notwendig, kein Komma): sagt, <i>welche</i> Person/Sache.
        <span class="ex">The book that I bought is great.</span></li>
      <li><b>Non-defining</b> (Zusatzinfo, mit Kommas, kein „that“):
        <span class="ex">My brother, who lives in Rome, is a chef.</span></li>
      <li>In defining clauses kann das Objekt-Pronomen wegfallen.
        <span class="ex">the film (that) I saw</span></li>
    </ul>`,
  questions: [
    { type: "mc", frage: "The woman ___ lives next door is a doctor.",
      optionen: ["which", "who", "whose"], richtig: 1,
      erklaerung: "Person → who. (which nur für Sachen)" },
    { type: "mc", frage: "That's the car ___ I want to buy.",
      optionen: ["who", "whose", "that"], richtig: 2,
      erklaerung: "Sache, defining → that (oder which)." },
    { type: "gap", frage: "I met a girl ___ brother is a famous actor.",
      richtig: ["whose"], erklaerung: "Besitz (ihr Bruder) → whose." },
    { type: "mc", frage: "My sister, ___ is 24, works in Berlin.",
      optionen: ["that", "who", "which"], richtig: 1,
      erklaerung: "Non-defining (mit Kommas) für Person → who. „that“ ist hier verboten." },
    { type: "mc", frage: "The hotel ___ we stayed was very clean.",
      optionen: ["which", "where", "who"], richtig: 1,
      erklaerung: "Ort → where (= in which)." },
    { type: "gap", frage: "This is the book ___ changed my life. (Sache, defining)",
      richtig: ["that", "which"], erklaerung: "Sache, defining → that oder which." },
    { type: "transform", frage: "Verbinde mit „who“: „The man called the police. He saw the accident.“",
      richtig: ["The man who saw the accident called the police.",
                "The man, who saw the accident, called the police."],
      erklaerung: "Relativsatz einschieben: The man who saw the accident called the police." },
    { type: "mc", frage: "She's the teacher ___ helped me a lot.",
      optionen: ["which", "who", "whose"], richtig: 1,
      erklaerung: "Person → who." },
    { type: "gap", frage: "The house ___ we live in is very old. (welches Pronomen für Sache?)",
      richtig: ["which", "that"], erklaerung: "Sache, defining → which oder that." },
    { type: "transform", frage: "Lass das Pronomen weg (defining): „This is the film that I saw.“",
      richtig: ["This is the film I saw."],
      erklaerung: "In defining clauses kann das Objekt-Pronomen wegfallen: the film I saw." }
  ]
};
