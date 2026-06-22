/* Thema 41: Contractions – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Contractions",
  "intro": "Kontraktionen (contractions) sind verkürzte Formen, bei denen zwei Wörter mit einem Apostroph zusammengezogen werden.",
  "explain": "<h2>Kurz erklärt</h2><ul><li><b>Contractions</b> ziehen zwei Wörter mit einem <b>Apostroph (')</b> zusammen, z. B. <span class=\"ex\">I am → I'm</span>.</li><li>Bei Verneinungen wird oft <b>not</b> verkürzt: <span class=\"ex\">do not → don't</span>, <span class=\"ex\">cannot → can't</span>.</li><li>Auch Hilfsverben werden gekürzt: <span class=\"ex\">she will → she'll</span>, <span class=\"ex\">they have → they've</span>, <span class=\"ex\">he is → he's</span>.</li><li>Achtung bei Sonderformen: <span class=\"ex\">will not → won't</span> und <span class=\"ex\">shall not → shan't</span>.</li><li>Kontraktionen sind eher <b>informell</b> (gesprochene Sprache, E-Mails an Freunde); in formellen Texten schreibt man oft die Vollform.</li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Which contraction is correct for \"I am\"?",
      "optionen": [
        "I'm",
        "Im'",
        "I'am"
      ],
      "richtig": 0,
      "erklaerung": "Bei \"I am\" ersetzt der Apostroph das \"a\": I'm."
    },
    {
      "type": "mc",
      "frage": "What is the correct contraction of \"will not\"?",
      "optionen": [
        "willn't",
        "won't",
        "willnot"
      ],
      "richtig": 1,
      "erklaerung": "\"will not\" hat die Sonderform won't und nicht *willn't."
    },
    {
      "type": "mc",
      "frage": "Choose the correct sentence.",
      "optionen": [
        "She's got two cats.",
        "She'is got two cats.",
        "Shes got two cats."
      ],
      "richtig": 0,
      "erklaerung": "\"she has\" wird zu she's; der Apostroph steht für das fehlende \"ha\"."
    },
    {
      "type": "gap",
      "frage": "We ___ have any milk left, so let's go shopping. (do not)",
      "richtig": [
        "don't",
        "do not"
      ],
      "erklaerung": "\"do not\" wird zur Kurzform don't; beide Schreibweisen sind korrekt."
    },
    {
      "type": "gap",
      "frage": "Sorry, I ___ come to your party tomorrow. (cannot)",
      "richtig": [
        "can't",
        "cannot",
        "can not"
      ],
      "erklaerung": "\"cannot\" wird zu can't; die getrennte Form \"can not\" ist ebenfalls möglich."
    },
    {
      "type": "gap",
      "frage": "They ___ already finished their homework. (have)",
      "richtig": [
        "'ve",
        "have"
      ],
      "erklaerung": "\"they have\" wird zu they've; hier passt die Kurzform 've oder die Vollform have."
    },
    {
      "type": "gap",
      "frage": "He ___ be here at six o'clock. (will)",
      "richtig": [
        "'ll",
        "will"
      ],
      "erklaerung": "\"he will\" wird zu he'll; akzeptiert sind die Kurzform 'll und die Vollform will."
    },
    {
      "type": "transform",
      "frage": "Use a contraction: \"It is raining outside.\"",
      "richtig": [
        "It's raining outside.",
        "It's raining outside"
      ],
      "erklaerung": "\"it is\" wird zur Kurzform it's: It's raining outside."
    },
    {
      "type": "transform",
      "frage": "Use a contraction: \"They are not at home.\"",
      "richtig": [
        "They aren't at home.",
        "They're not at home.",
        "They aren't at home",
        "They're not at home"
      ],
      "erklaerung": "Es gibt zwei Möglichkeiten: They aren't at home oder They're not at home."
    },
    {
      "type": "transform",
      "frage": "Write the full form (no contraction): \"We won't tell anyone.\"",
      "richtig": [
        "We will not tell anyone.",
        "We will not tell anyone"
      ],
      "erklaerung": "won't ist die Kontraktion von will not: We will not tell anyone."
    },
    {
      "type": "transform",
      "frage": "Use a contraction: \"I have not seen this film.\"",
      "richtig": [
        "I haven't seen this film.",
        "I've not seen this film.",
        "I haven't seen this film",
        "I've not seen this film"
      ],
      "erklaerung": "Möglich sind I haven't seen this film oder I've not seen this film."
    }
  ]
};
