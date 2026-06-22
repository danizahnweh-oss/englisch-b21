/* Thema 30: Passive voice – Passivbildung in verschiedenen Zeiten. */
const QUIZ_DATA = {
  title: "Passive voice",
  intro: "Form von be + Partizip. Wichtig ist die Handlung, nicht wer sie tut.",
  explain: `
    <h2>Kurz erklärt</h2>
    <ul>
      <li><b>Bildung:</b> passende Form von <b>be</b> + Partizip (3. Verbform).
        <span class="ex">The house was built in 1900.</span></li>
      <li>Die Zeit steckt im <b>be</b>:
        <span class="ex">is made · was made · has been made · will be made</span></li>
      <li>Wer es tut, ist oft unwichtig oder unbekannt – sonst mit <b>by</b>.
        <span class="ex">The song was written by a famous band.</span></li>
      <li>Aktiv → Passiv: Objekt wird Subjekt.
        <span class="ex">They clean the office. → The office is cleaned.</span></li>
    </ul>`,
  questions: [
    { type: "mc", frage: "The bridge ___ in 1932.",
      optionen: ["was built", "is built", "has built"], richtig: 0,
      erklaerung: "Abgeschlossen mit Jahreszahl → Passiv Past Simple: was built." },
    { type: "transform", frage: "Aktiv → Passiv: „They clean the office every day.“",
      richtig: ["The office is cleaned every day."],
      erklaerung: "Present Simple Passiv = is/are + Partizip: The office is cleaned every day." },
    { type: "gap", frage: "This song ___ (write) by a famous band.",
      richtig: ["was written"], erklaerung: "Passiv Vergangenheit: was + written." },
    { type: "mc", frage: "A new hospital ___ next year.",
      optionen: ["will build", "will be built", "is built"], richtig: 1,
      erklaerung: "Zukunft Passiv = will be + Partizip: will be built." },
    { type: "gap", frage: "Many languages ___ (speak) in India.",
      richtig: ["are spoken"], erklaerung: "Mehrzahl, Gegenwart, Passiv → are spoken." },
    { type: "gap", frage: "The parcel ___ (already / send). It's on its way.",
      richtig: ["has already been sent"],
      erklaerung: "Present Perfect Passiv = has been + Partizip: has already been sent." },
    { type: "mc", frage: "English ___ all over the world.",
      optionen: ["speaks", "is spoken", "is speaking"], richtig: 1,
      erklaerung: "Present Simple Passiv: is spoken." },
    { type: "transform", frage: "Aktiv → Passiv: „Someone stole my bike.“",
      richtig: ["My bike was stolen.", "My bike was stolen by someone."],
      erklaerung: "Past Simple Passiv: My bike was stolen. (steal → stolen)" },
    { type: "mc", frage: "The room ___ at the moment.",
      optionen: ["is cleaning", "is being cleaned", "is cleaned"], richtig: 1,
      erklaerung: "Verlauf jetzt, Passiv → is being cleaned." },
    { type: "transform", frage: "Aktiv → Passiv: „Shakespeare wrote this play.“",
      richtig: ["This play was written by Shakespeare."],
      erklaerung: "Urheber wichtig → mit by: This play was written by Shakespeare." }
  ]
};
