/* Thema 2: Plural forms – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Plural forms",
  "intro": "Im Englischen bildet man den Plural der meisten Nomen mit -s, aber es gibt viele wichtige Sonderformen und unregelmäßige Pluralformen.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Die meisten Nomen bilden den Plural mit <b>-s</b>: <span class=\"ex\">car → cars, book → books</span>.</li><li>Nach <b>-s, -ss, -sh, -ch, -x</b> hängt man <b>-es</b> an: <span class=\"ex\">box → boxes, watch → watches</span>.</li><li>Konsonant + <b>-y</b> wird zu <b>-ies</b>: <span class=\"ex\">city → cities</span>; Vokal + y bleibt: <span class=\"ex\">boy → boys</span>.</li><li>Es gibt <b>unregelmäßige</b> Formen: <span class=\"ex\">man → men, child → children, foot → feet, mouse → mice</span>.</li><li>Manche Nomen sind gleich oder enden auf <b>-ves</b>: <span class=\"ex\">sheep → sheep, knife → knives, leaf → leaves</span>.</li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "What is the correct plural of \"child\"?",
      "optionen": [
        "childs",
        "children",
        "childes"
      ],
      "richtig": 1,
      "erklaerung": "\"child\" ist eine unregelmäßige Form: der Plural lautet \"children\"."
    },
    {
      "type": "mc",
      "frage": "Choose the correct plural: \"There are three ___ in the garden.\" (mouse)",
      "optionen": [
        "mouses",
        "mice",
        "mouse"
      ],
      "richtig": 1,
      "erklaerung": "\"mouse\" hat die unregelmäßige Pluralform \"mice\"."
    },
    {
      "type": "mc",
      "frage": "Which plural form is correct?",
      "optionen": [
        "two knifes",
        "two knives",
        "two knifs"
      ],
      "richtig": 1,
      "erklaerung": "Nomen auf -fe wie \"knife\" bilden den Plural meist mit -ves: \"knives\"."
    },
    {
      "type": "gap",
      "frage": "I bought two ___ for breakfast. (tomato)",
      "richtig": [
        "tomatoes"
      ],
      "erklaerung": "\"tomato\" endet auf -o und nimmt im Plural -es: \"tomatoes\"."
    },
    {
      "type": "gap",
      "frage": "She has very small ___. (foot)",
      "richtig": [
        "feet"
      ],
      "erklaerung": "\"foot\" ist unregelmäßig: der Plural ist \"feet\"."
    },
    {
      "type": "gap",
      "frage": "There are many big ___ in the city. (church)",
      "richtig": [
        "churches"
      ],
      "erklaerung": "Nach -ch hängt man -es an: \"church\" → \"churches\"."
    },
    {
      "type": "gap",
      "frage": "We saw three ___ on the farm. (sheep)",
      "richtig": [
        "sheep"
      ],
      "erklaerung": "\"sheep\" hat dieselbe Form im Singular und Plural: \"sheep\"."
    },
    {
      "type": "gap",
      "frage": "The two ___ are best friends. (lady)",
      "richtig": [
        "ladies"
      ],
      "erklaerung": "Konsonant + y wird zu -ies: \"lady\" → \"ladies\"."
    },
    {
      "type": "transform",
      "frage": "Setze in den Plural: \"This box is empty.\"",
      "richtig": [
        "These boxes are empty.",
        "These boxes are empty"
      ],
      "erklaerung": "\"box\" → \"boxes\" (-es nach -x); \"this\" → \"these\" und \"is\" → \"are\"."
    },
    {
      "type": "transform",
      "frage": "Setze in den Plural: \"The man is reading a book.\"",
      "richtig": [
        "The men are reading books.",
        "The men are reading books",
        "The men are reading the books.",
        "The men are reading the books"
      ],
      "erklaerung": "\"man\" → \"men\" (unregelmäßig), \"book\" → \"books\"; das Verb wird zu \"are reading\"."
    },
    {
      "type": "transform",
      "frage": "Setze in den Plural: \"A leaf fell from the tree.\"",
      "richtig": [
        "Leaves fell from the tree.",
        "Leaves fell from the tree",
        "Leaves fell from the trees.",
        "Leaves fell from the trees"
      ],
      "erklaerung": "\"leaf\" → \"leaves\" (-f wird zu -ves); der unbestimmte Artikel \"a\" entfällt im Plural."
    }
  ]
};
