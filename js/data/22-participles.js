/* Thema 22: Participles – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Participles",
  "intro": "Partizipien (participles) sind Verbformen, die als Adjektiv, in Zeitformen oder in verkürzten Sätzen verwendet werden.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Das <b>present participle</b> endet auf <b>-ing</b> und beschreibt eine aktive Handlung: <span class=\"ex\">a crying baby</span>, <span class=\"ex\">The film was boring.</span></li><li>Das <b>past participle</b> ist die 3. Verbform (oft <b>-ed</b>, oder unregelmäßig) und ist meist passiv: <span class=\"ex\">a broken window</span>, <span class=\"ex\">I was bored.</span></li><li>Wichtig: <b>-ing</b> = es löst ein Gefühl aus, <b>-ed</b> = man fühlt es selbst: <span class=\"ex\">The news was shocking.</span> vs. <span class=\"ex\">I was shocked.</span></li><li><b>Participle clauses</b> verkürzen Sätze: <span class=\"ex\">Feeling tired, she went to bed.</span> statt <span class=\"ex\">Because she felt tired, …</span></li><li>Past participles bilden <b>Perfekt</b> und <b>Passiv</b>: <span class=\"ex\">I have finished.</span>, <span class=\"ex\">The letter was written.</span></li></ul>",
  "questions": [
    {
      "type": "gap",
      "frage": "The ___ boy started to cry. (cry)",
      "richtig": [
        "crying"
      ],
      "erklaerung": "Present participle (-ing) beschreibt aktiv: das Kind weint."
    },
    {
      "type": "mc",
      "frage": "Choose the correct participle: I saw a ___ window in the old house.",
      "optionen": [
        "breaking",
        "broken",
        "break"
      ],
      "richtig": 1,
      "erklaerung": "Past participle 'broken' beschreibt passiv den Zustand des Fensters."
    },
    {
      "type": "gap",
      "frage": "Look at that ___ dog! It runs so fast. (run)",
      "richtig": [
        "running"
      ],
      "erklaerung": "Present participle 'running' beschreibt eine aktive Handlung des Hundes."
    },
    {
      "type": "mc",
      "frage": "The film was really ___.",
      "optionen": [
        "bored",
        "boring",
        "bore"
      ],
      "richtig": 1,
      "erklaerung": "'-ing'-Partizip beschreibt die Wirkung (der Film löst Langeweile aus)."
    },
    {
      "type": "gap",
      "frage": "I felt very ___ after the long meeting. (tire)",
      "richtig": [
        "tired"
      ],
      "erklaerung": "'-ed'-Partizip beschreibt das eigene Gefühl (man ist müde)."
    },
    {
      "type": "mc",
      "frage": "We bought some ___ vegetables at the market.",
      "optionen": [
        "freezing",
        "frozen",
        "freeze"
      ],
      "richtig": 1,
      "erklaerung": "Past participle 'frozen' (tiefgekühlt) beschreibt den Zustand des Gemüses."
    },
    {
      "type": "gap",
      "frage": "The ___ leaves covered the whole garden. (fall)",
      "richtig": [
        "fallen"
      ],
      "erklaerung": "Past participle von 'fall' ist unregelmäßig: 'fallen'."
    },
    {
      "type": "transform",
      "frage": "Bilde das Present Participle (-ing-Form) des Verbs 'write'.",
      "richtig": [
        "writing"
      ],
      "erklaerung": "Bei 'write' fällt das stumme -e weg: writing."
    },
    {
      "type": "gap",
      "frage": "There was a lot of ___ news on TV today. (excite)",
      "richtig": [
        "exciting"
      ],
      "erklaerung": "'-ing'-Partizip beschreibt die Nachricht, die Aufregung verursacht."
    },
    {
      "type": "mc",
      "frage": "The children were ___ about the trip.",
      "optionen": [
        "exciting",
        "excited",
        "excite"
      ],
      "richtig": 1,
      "erklaerung": "'-ed'-Partizip beschreibt das Gefühl der Kinder (sie sind aufgeregt)."
    },
    {
      "type": "gap",
      "frage": "He showed me a beautifully ___ box. (paint)",
      "richtig": [
        "painted"
      ],
      "erklaerung": "Past participle 'painted' beschreibt passiv die bemalte Schachtel."
    },
    {
      "type": "mc",
      "frage": "___ a noise, the cat ran away.",
      "optionen": [
        "Hear",
        "Heard",
        "Hearing"
      ],
      "richtig": 2,
      "erklaerung": "Present participle leitet einen Nebensatz ein: 'Als sie ein Geräusch hörte'."
    },
    {
      "type": "gap",
      "frage": "The story was so ___ that I couldn't stop reading. (interest)",
      "richtig": [
        "interesting"
      ],
      "erklaerung": "'-ing'-Partizip: Die Geschichte ist interessant (löst Interesse aus)."
    },
    {
      "type": "transform",
      "frage": "Verbinde mit einem Present Participle: 'She sat on the sofa. She watched TV.' (Beginne mit 'She sat on the sofa, ...')",
      "richtig": [
        "She sat on the sofa, watching TV.",
        "She sat on the sofa watching TV."
      ],
      "erklaerung": "Zwei gleichzeitige Handlungen werden mit '-ing' verbunden."
    },
    {
      "type": "gap",
      "frage": "I was ___ by the difficult instructions. (confuse)",
      "richtig": [
        "confused"
      ],
      "erklaerung": "'-ed'-Partizip beschreibt mein Gefühl (ich bin verwirrt)."
    },
    {
      "type": "mc",
      "frage": "The ___ glass on the floor was dangerous.",
      "optionen": [
        "breaking",
        "broke",
        "broken"
      ],
      "richtig": 2,
      "erklaerung": "Past participle 'broken' beschreibt das zerbrochene Glas (Zustand)."
    },
    {
      "type": "transform",
      "frage": "Verkürze den Relativsatz mit Partizip: 'The man who is standing at the door is my uncle.'",
      "richtig": [
        "The man standing at the door is my uncle."
      ],
      "erklaerung": "Aktiver Relativsatz wird zum Present Participle: 'standing'."
    },
    {
      "type": "transform",
      "frage": "Verkürze den Relativsatz mit Partizip: 'The letter that was written by Tom arrived today.'",
      "richtig": [
        "The letter written by Tom arrived today."
      ],
      "erklaerung": "Passiver Relativsatz wird zum Past Participle: 'written'."
    },
    {
      "type": "gap",
      "frage": "___ in 1990, the bridge is now very old. (build)",
      "richtig": [
        "Built"
      ],
      "erklaerung": "Past participle 'built' mit passiver Bedeutung: 'die gebaut wurde'."
    },
    {
      "type": "mc",
      "frage": "The results were ___; nobody had expected them.",
      "optionen": [
        "surprising",
        "surprised",
        "surprise"
      ],
      "richtig": 0,
      "erklaerung": "'-ing'-Partizip: Die Ergebnisse sind überraschend (lösen Überraschung aus)."
    },
    {
      "type": "gap",
      "frage": "___ what to do, she asked her teacher for help. (not know)",
      "richtig": [
        "Not knowing"
      ],
      "erklaerung": "Verneintes Present Participle: 'not' steht vor dem '-ing'."
    },
    {
      "type": "transform",
      "frage": "Verbinde mit Past Participle: 'The house was destroyed by the storm. It was rebuilt last year.' (Beginne mit 'Destroyed by the storm, ...')",
      "richtig": [
        "Destroyed by the storm, the house was rebuilt last year."
      ],
      "erklaerung": "Past Participle drückt den Grund/das vorherige Geschehen passiv aus."
    },
    {
      "type": "gap",
      "frage": "After ___ his homework, he went out to play. (finish)",
      "richtig": [
        "finishing"
      ],
      "erklaerung": "Nach Präposition 'after' steht die '-ing'-Form (Gerundium/Partizip)."
    },
    {
      "type": "mc",
      "frage": "___ the report, the manager left the office.",
      "optionen": [
        "Having finished",
        "Finishing",
        "Finished"
      ],
      "richtig": 0,
      "erklaerung": "Perfect Participle 'Having finished' zeigt, dass die Handlung vorher abgeschlossen war."
    },
    {
      "type": "transform",
      "frage": "Forme um mit Perfect Participle: 'Because she had lost her keys, she couldn't get in.' (Beginne mit 'Having ...')",
      "richtig": [
        "Having lost her keys, she couldn't get in.",
        "Having lost her keys, she could not get in."
      ],
      "erklaerung": "Perfect Participle 'Having lost' ersetzt den vorzeitigen Grund-Nebensatz."
    },
    {
      "type": "gap",
      "frage": "The ___ road was closed for two days. (flood)",
      "richtig": [
        "flooded"
      ],
      "erklaerung": "Past participle 'flooded' beschreibt passiv die überflutete Straße."
    },
    {
      "type": "mc",
      "frage": "With the door ___, we could finally see inside.",
      "optionen": [
        "opening",
        "opened",
        "open"
      ],
      "richtig": 1,
      "erklaerung": "Past participle in der 'with + Objekt + Partizip'-Konstruktion (passiv: die Tür wurde geöffnet)."
    },
    {
      "type": "transform",
      "frage": "Forme um mit Perfect Participle (Passiv): 'After it had been repaired, the car worked perfectly.' (Beginne mit 'Having been ...')",
      "richtig": [
        "Having been repaired, the car worked perfectly."
      ],
      "erklaerung": "Perfect Participle Passiv: 'Having been repaired' drückt das vorzeitige, passive Geschehen aus."
    },
    {
      "type": "gap",
      "frage": "___ all his money, he had to walk home. (spend)",
      "richtig": [
        "Having spent"
      ],
      "erklaerung": "Perfect Participle 'Having spent' zeigt die vorzeitige, abgeschlossene Handlung an."
    },
    {
      "type": "mc",
      "frage": "Generally ___, British weather is unpredictable.",
      "optionen": [
        "speaking",
        "spoken",
        "spoke"
      ],
      "richtig": 0,
      "erklaerung": "Feste Wendung mit Present Participle: 'generally speaking' (allgemein gesprochen)."
    },
    {
      "type": "transform",
      "frage": "Verkürze den Relativsatz mit Partizip: 'The students who are learning English meet on Mondays.'",
      "richtig": [
        "The students learning English meet on Mondays."
      ],
      "erklaerung": "Aktiver Relativsatz wird zum Present Participle: 'learning'."
    }
  ]
};
