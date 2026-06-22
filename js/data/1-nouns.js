/* Thema 1: Nouns – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Nouns",
  "intro": "Substantive (nouns) sind Wörter für Personen, Dinge, Orte und Begriffe und können zählbar oder unzählbar, im Singular oder Plural stehen.",
  "explain": "<h2>Kurz erklärt</h2><ul><li><b>Nouns</b> bezeichnen Personen, Dinge, Orte oder Ideen: <span class=\"ex\">a teacher, a city, freedom</span></li><li><b>Countable nouns</b> kann man zählen und in den Plural setzen: <span class=\"ex\">one book, two books</span></li><li><b>Uncountable nouns</b> haben meist keinen Plural und kein <b>a/an</b>: <span class=\"ex\">water, information, money</span></li><li>Den <b>Plural</b> bildet man oft mit <b>-s/-es</b>, aber es gibt unregelmäßige Formen: <span class=\"ex\">child – children, man – men</span></li><li><b>Proper nouns</b> (Eigennamen) schreibt man groß: <span class=\"ex\">London, Anna, Monday</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Which word is an uncountable noun?",
      "optionen": [
        "apple",
        "milk",
        "book"
      ],
      "richtig": 1,
      "erklaerung": "\"Milk\" ist unzählbar: Man sagt nicht \"two milks\". \"Apple\" und \"book\" sind zählbar."
    },
    {
      "type": "mc",
      "frage": "Choose the correct plural: \"I have three ___ in my garden.\"",
      "optionen": [
        "childs",
        "children",
        "childrens"
      ],
      "richtig": 1,
      "erklaerung": "\"Child\" hat den unregelmäßigen Plural \"children\" (ohne zusätzliches -s)."
    },
    {
      "type": "mc",
      "frage": "Which sentence is correct?",
      "optionen": [
        "I need an information.",
        "I need some information.",
        "I need many informations."
      ],
      "richtig": 1,
      "erklaerung": "\"Information\" ist unzählbar: kein \"a/an\", kein Plural. Man verwendet \"some information\"."
    },
    {
      "type": "gap",
      "frage": "There are five ___ (woman) waiting outside.",
      "richtig": [
        "women"
      ],
      "erklaerung": "\"Woman\" wird im Plural zu \"women\" (unregelmäßig, mit Lautwechsel)."
    },
    {
      "type": "gap",
      "frage": "Be careful! There are two sharp ___ (knife) on the table.",
      "richtig": [
        "knives"
      ],
      "erklaerung": "Nomen auf -fe wie \"knife\" bilden den Plural oft mit -ves: knife – knives."
    },
    {
      "type": "gap",
      "frage": "We saw a lot of ___ at the zoo. (Plural von \"mouse\")",
      "richtig": [
        "mice"
      ],
      "erklaerung": "\"Mouse\" hat den unregelmäßigen Plural \"mice\"."
    },
    {
      "type": "gap",
      "frage": "How much ___ do you have in your wallet? (countable or uncountable: Geld)",
      "richtig": [
        "money"
      ],
      "erklaerung": "\"Money\" ist unzählbar; deshalb steht es im Singular und mit \"how much\"."
    },
    {
      "type": "transform",
      "frage": "Schreibe im Plural: \"This box is empty.\"",
      "richtig": [
        "These boxes are empty.",
        "These boxes are empty"
      ],
      "erklaerung": "\"Box\" endet auf -x, daher Plural mit -es: boxes. \"This\" wird zu \"These\", \"is\" zu \"are\"."
    },
    {
      "type": "transform",
      "frage": "Schreibe im Plural: \"The city has a big library.\"",
      "richtig": [
        "The cities have big libraries.",
        "The cities have big libraries"
      ],
      "erklaerung": "Nomen auf Konsonant + y bilden den Plural mit -ies: city – cities, library – libraries. \"a\" entfällt im Plural."
    },
    {
      "type": "transform",
      "frage": "Schreibe im Singular: \"Those men are my friends.\"",
      "richtig": [
        "That man is my friend.",
        "That man is my friend"
      ],
      "erklaerung": "\"Men\" wird im Singular zu \"man\", \"friends\" zu \"friend\". Auch \"Those\" und \"are\" werden angepasst."
    }
  ]
};
