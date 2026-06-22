/* Thema 28: Past perfect – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Past perfect",
  "intro": "Das Past Perfect (had + Partizip Perfekt) beschreibt die Vorvergangenheit: eine Handlung, die vor einer anderen Handlung in der Vergangenheit abgeschlossen war.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Das <b>Past Perfect</b> bildest du mit <b>had</b> + <b>Past Participle</b> (3. Form): <span class=\"ex\">She had finished her work before noon.</span></li><li>Es zeigt, dass etwas <b>vor</b> einem anderen Ereignis in der Vergangenheit passiert ist: <span class=\"ex\">When we arrived, the train had already left.</span></li><li>Die Kurzform ist <b>'d</b> (had); Verneinung mit <b>hadn't</b> / <b>had not</b>: <span class=\"ex\">I hadn't seen that film before.</span></li><li>Oft zusammen mit <b>before</b>, <b>after</b>, <b>already</b>, <b>just</b>, <b>by the time</b> und <b>when</b>: <span class=\"ex\">After he had eaten, he went out.</span></li><li>Frage: <b>Had</b> + Subjekt + Partizip: <span class=\"ex\">Had you ever been there before?</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Which sentence uses the past perfect correctly?",
      "optionen": [
        "She had finished her homework before dinner.",
        "She has finished her homework before dinner.",
        "She had finish her homework before dinner."
      ],
      "richtig": 0,
      "erklaerung": "Past perfect = had + Past Participle (finished)."
    },
    {
      "type": "mc",
      "frage": "The past perfect is formed with ___ + past participle.",
      "optionen": [
        "have",
        "had",
        "was"
      ],
      "richtig": 1,
      "erklaerung": "Das Past perfect bildet man mit 'had' fuer alle Personen."
    },
    {
      "type": "gap",
      "frage": "When we arrived at the cinema, the film ___ (already / start).",
      "richtig": [
        "had already started"
      ],
      "erklaerung": "Vorzeitige Handlung: had + Past Participle, 'already' steht zwischen had und Partizip."
    },
    {
      "type": "gap",
      "frage": "She ___ (live) in Berlin for ten years before she moved to Munich.",
      "richtig": [
        "had lived"
      ],
      "erklaerung": "Past perfect fuer Dauer vor einem Punkt in der Vergangenheit."
    },
    {
      "type": "mc",
      "frage": "Choose the correct sentence.",
      "optionen": [
        "After he had eaten, he went out.",
        "After he have eaten, he went out.",
        "After he had eat, he went out."
      ],
      "richtig": 0,
      "erklaerung": "Nach 'after' steht oft Past perfect fuer die fruehere Handlung."
    },
    {
      "type": "gap",
      "frage": "I couldn't pay because I ___ (forget) my wallet at home.",
      "richtig": [
        "had forgotten"
      ],
      "erklaerung": "Der Grund liegt zeitlich vor dem 'couldn't pay'."
    },
    {
      "type": "transform",
      "frage": "Bilde die Verneinung im Past perfect: 'They had seen the email.'",
      "richtig": [
        "They had not seen the email.",
        "They hadn't seen the email."
      ],
      "erklaerung": "Verneinung: had not / hadn't + Past Participle."
    },
    {
      "type": "mc",
      "frage": "Which is the negative form of 'He had called her'?",
      "optionen": [
        "He hadn't called her.",
        "He didn't had called her.",
        "He hasn't called her."
      ],
      "richtig": 0,
      "erklaerung": "Verneinung mit hadn't (had not) + Partizip."
    },
    {
      "type": "gap",
      "frage": "By the time the guests arrived, we ___ (clean) the whole house.",
      "richtig": [
        "had cleaned"
      ],
      "erklaerung": "'By the time' + Vergangenheit verlangt oft Past perfect fuer die abgeschlossene Vorhandlung."
    },
    {
      "type": "mc",
      "frage": "Complete: 'The train ___ when we reached the platform.'",
      "optionen": [
        "had already left",
        "has already left",
        "had already leave"
      ],
      "richtig": 0,
      "erklaerung": "Vorzeitig zur Ankunft: had already left."
    },
    {
      "type": "gap",
      "frage": "___ you ever ___ (be) to London before that trip?",
      "richtig": [
        "Had ... been",
        "Had you ever been"
      ],
      "erklaerung": "Frage im Past perfect: Had + Subjekt + Past Participle (been)."
    },
    {
      "type": "transform",
      "frage": "Mache eine Frage daraus: 'She had finished the report.'",
      "richtig": [
        "Had she finished the report?"
      ],
      "erklaerung": "Frage: Had + Subjekt + Past Participle?"
    },
    {
      "type": "gap",
      "frage": "He told me that he ___ (never / drive) a car before.",
      "richtig": [
        "had never driven"
      ],
      "erklaerung": "In indirekter Rede wird Past Simple oft zu Past perfect; 'driven' ist das Partizip."
    },
    {
      "type": "mc",
      "frage": "Which sentence is correct?",
      "optionen": [
        "I had wrote three letters.",
        "I had written three letters.",
        "I had writed three letters."
      ],
      "richtig": 1,
      "erklaerung": "Das Partizip von 'write' ist 'written'."
    },
    {
      "type": "gap",
      "frage": "After she ___ (take) the medicine, she felt much better.",
      "richtig": [
        "had taken"
      ],
      "erklaerung": "Fruehere Handlung mit 'after': had taken (Partizip von take)."
    },
    {
      "type": "transform",
      "frage": "Setze ins Past perfect: 'They build a new bridge.'",
      "richtig": [
        "They had built a new bridge."
      ],
      "erklaerung": "had + built (Partizip von build)."
    },
    {
      "type": "gap",
      "frage": "We were hungry because we ___ (not / eat) all day.",
      "richtig": [
        "had not eaten",
        "hadn't eaten"
      ],
      "erklaerung": "Verneintes Past perfect: had not/hadn't + eaten."
    },
    {
      "type": "mc",
      "frage": "Choose the correct verb form: 'The shop was closed because the owner ___ ill.'",
      "optionen": [
        "had fallen",
        "had fell",
        "has fallen"
      ],
      "richtig": 0,
      "erklaerung": "Partizip von 'fall' ist 'fallen'."
    },
    {
      "type": "gap",
      "frage": "I didn't recognise her because she ___ (cut) her hair short.",
      "richtig": [
        "had cut"
      ],
      "erklaerung": "'cut' ist unregelmaessig: had cut (Partizip = cut)."
    },
    {
      "type": "transform",
      "frage": "Verbinde mit 'when' und Past perfect: 'I lost my keys. Then I went home.' (Beginne mit 'When I got home, ...')",
      "richtig": [
        "When I got home, I had lost my keys.",
        "When I got home, I had already lost my keys."
      ],
      "erklaerung": "Die fruehere Handlung (Schluessel verlieren) steht im Past perfect."
    },
    {
      "type": "gap",
      "frage": "By 2010, they ___ (already / sell) their old apartment.",
      "richtig": [
        "had already sold"
      ],
      "erklaerung": "'sell' -> 'sold'; 'already' zwischen had und Partizip."
    },
    {
      "type": "mc",
      "frage": "Which sentence correctly contrasts past perfect and past simple?",
      "optionen": [
        "When I called, she had already gone to bed.",
        "When I called, she has already gone to bed.",
        "When I had called, she went already to bed."
      ],
      "richtig": 0,
      "erklaerung": "Die fruehere Handlung 'gone to bed' steht im Past perfect, der spaetere 'called' im Past Simple."
    },
    {
      "type": "gap",
      "frage": "He felt nervous because he ___ (not / prepare) for the interview.",
      "richtig": [
        "had not prepared",
        "hadn't prepared"
      ],
      "erklaerung": "Grund vor dem Gefuehl: verneintes Past perfect."
    },
    {
      "type": "transform",
      "frage": "Forme in indirekte Rede um (Past perfect): Direkt: She said, 'I have met him before.' (Beginne mit 'She said that ...')",
      "richtig": [
        "She said that she had met him before."
      ],
      "erklaerung": "Present perfect wird in indirekter Rede zu Past perfect: had met."
    },
    {
      "type": "gap",
      "frage": "No sooner ___ (the plane / take off) than the storm began.",
      "richtig": [
        "had the plane taken off"
      ],
      "erklaerung": "Nach 'No sooner' am Satzanfang folgt Inversion: had + Subjekt + Partizip."
    },
    {
      "type": "mc",
      "frage": "Complete: 'Hardly ___ the door when the phone rang.'",
      "optionen": [
        "had I closed",
        "I had closed",
        "did I close"
      ],
      "richtig": 0,
      "erklaerung": "Nach 'Hardly' am Satzanfang steht Inversion im Past perfect: had I closed."
    },
    {
      "type": "gap",
      "frage": "It was the most beautiful place I ___ (ever / visit).",
      "richtig": [
        "had ever visited"
      ],
      "erklaerung": "Nach Superlativ in Vergangenheit nutzt man oft 'had ever' + Partizip."
    },
    {
      "type": "transform",
      "frage": "Schreibe den Satz mit 'before' um: 'First she read the contract. Then she signed it.' (Beginne mit 'She signed the contract ...')",
      "richtig": [
        "She signed the contract after she had read it.",
        "She signed the contract after she had read it carefully."
      ],
      "erklaerung": "Die fruehere Handlung (read) steht nach 'after' im Past perfect."
    },
    {
      "type": "gap",
      "frage": "If I had known you were coming, I ___ (bake) a cake. — Welche Form steht in der if-Lücke? Ergänze die if-Lücke: 'If I ___ (know), I would have helped.'",
      "richtig": [
        "had known"
      ],
      "erklaerung": "Im Conditional Type 3 steht im if-Satz das Past perfect: had known."
    },
    {
      "type": "mc",
      "frage": "Choose the correct third conditional sentence.",
      "optionen": [
        "If they had left earlier, they would have caught the train.",
        "If they would have left earlier, they had caught the train.",
        "If they have left earlier, they would catch the train."
      ],
      "richtig": 0,
      "erklaerung": "Type 3: if + Past perfect, would have + Partizip."
    },
    {
      "type": "gap",
      "frage": "She wished she ___ (not / say) those words at the meeting.",
      "richtig": [
        "had not said",
        "hadn't said"
      ],
      "erklaerung": "Nach 'wish' fuer Bedauern in der Vergangenheit steht das Past perfect."
    }
  ]
};
