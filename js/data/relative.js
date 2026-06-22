/* ============================================================
   Modul 3: Relativsätze & Konjunktionen
   Aufbau identisch zu den anderen Daten-Dateien.
   ============================================================ */

const QUIZ_DATA = {
  title:  "Relativsätze & Konjunktionen",
  badge:  "Modul 3",
  intro:  "who/which/that/whose, defining vs. non-defining und Bindewörter.",

  explain: `
    <h2>Kurz erklärt</h2>
    <ul>
      <li><b>who</b> Personen, <b>which</b> Sachen, <b>that</b> beides (nur defining),
        <b>whose</b> Besitz.
        <span class="ex">the man who… / the book which… / the girl whose…</span></li>
      <li><b>Defining</b> (notwendig, kein Komma) vs. <b>non-defining</b>
        (Zusatzinfo, mit Kommas, kein „that“).
        <span class="ex">My brother, who lives in Rome, is a chef.</span></li>
      <li><b>although / though</b> + Satz, <b>despite / in spite of</b> + Nomen/-ing.
        <span class="ex">Although it rained… / Despite the rain…</span></li>
      <li><b>because</b> + Satz, <b>because of</b> + Nomen.</li>
      <li><b>however</b> leitet einen neuen Satz ein (oft mit Semikolon/Punkt).</li>
    </ul>`,

  questions: [
    {
      type: "mc",
      frage: "The woman ___ lives next door is a doctor.",
      optionen: ["which", "who", "whose"],
      richtig: 1,
      erklaerung: "Person → who. (which nur für Sachen)"
    },
    {
      type: "mc",
      frage: "That's the car ___ I want to buy.",
      optionen: ["who", "whose", "that"],
      richtig: 2,
      erklaerung: "Sache, defining → that (oder which)."
    },
    {
      type: "gap",
      frage: "I met a girl ___ brother is a famous actor.",
      richtig: ["whose"],
      erklaerung: "Besitz (ihr Bruder) → whose."
    },
    {
      type: "mc",
      frage: "___ it was raining, we went for a walk.",
      optionen: ["Despite", "Although", "Because"],
      richtig: 1,
      erklaerung: "Gegensatz + ganzer Satz → Although. (Despite + Nomen)"
    },
    {
      type: "mc",
      frage: "We stayed at home ___ the bad weather.",
      optionen: ["because", "although", "because of"],
      richtig: 2,
      erklaerung: "Grund + Nomen („the bad weather“) → because of."
    },
    {
      type: "transform",
      frage: "Verbinde mit „who“: „The man called the police. He saw the accident.“",
      richtig: [
        "The man who saw the accident called the police.",
        "The man, who saw the accident, called the police."
      ],
      erklaerung: "Relativsatz mit who einschieben: The man who saw the accident called the police."
    },
    {
      type: "mc",
      frage: "My sister, ___ is 24, works in Berlin.",
      optionen: ["that", "who", "which"],
      richtig: 1,
      erklaerung: "Non-defining (mit Kommas) für Person → who. „that“ ist hier nicht erlaubt."
    },
    {
      type: "gap",
      frage: "___ of the traffic, I was late. (Grund + Nomen)",
      richtig: ["Because"],
      erklaerung: "„Because of“ + Nomen. Am Satzanfang groß: Because of the traffic…"
    },
    {
      type: "mc",
      frage: "It was a hard exam. ___, almost everyone passed.",
      optionen: ["However", "Despite", "Although"],
      richtig: 0,
      erklaerung: "Neuer Satz mit Gegensatz → However, …"
    },
    {
      type: "transform",
      frage: "Mit „despite“ statt „although“: „Although he was tired, he kept working.“",
      richtig: [
        "Despite being tired, he kept working.",
        "Despite his tiredness, he kept working.",
        "In spite of being tired, he kept working."
      ],
      erklaerung: "despite + -ing/Nomen: Despite being tired, he kept working."
    },
    {
      type: "mc",
      frage: "The hotel ___ we stayed was very clean.",
      optionen: ["which", "where", "who"],
      richtig: 1,
      erklaerung: "Ort → where (= in which)."
    },
    {
      type: "gap",
      frage: "This is the book ___ changed my life. (Sache, defining)",
      richtig: ["that", "which"],
      erklaerung: "Sache, defining → that oder which sind beide richtig."
    }
  ]
};
