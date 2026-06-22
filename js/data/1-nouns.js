/* Thema 1: Nouns – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Nouns",
  "intro": "Substantive (nouns) sind Wörter für Personen, Dinge, Orte und Begriffe und können zählbar oder unzählbar, im Singular oder Plural stehen.",
  "explain": "<h2>Kurz erklärt</h2><ul><li><b>Nouns</b> bezeichnen Personen, Dinge, Orte oder Ideen: <span class=\"ex\">a teacher, a city, freedom</span></li><li><b>Countable nouns</b> kann man zählen und in den Plural setzen: <span class=\"ex\">one book, two books</span></li><li><b>Uncountable nouns</b> haben meist keinen Plural und kein <b>a/an</b>: <span class=\"ex\">water, information, money</span></li><li>Den <b>Plural</b> bildet man oft mit <b>-s/-es</b>, aber es gibt unregelmäßige Formen: <span class=\"ex\">child – children, man – men</span></li><li><b>Proper nouns</b> (Eigennamen) schreibt man groß: <span class=\"ex\">London, Anna, Monday</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Which form is the correct plural of \"book\"?",
      "optionen": [
        "books",
        "bookes",
        "book's"
      ],
      "richtig": 0,
      "erklaerung": "Regelmäßiger Plural: einfach -s anhängen."
    },
    {
      "type": "gap",
      "frage": "I have two ___ (cat) at home.",
      "richtig": [
        "cats"
      ],
      "erklaerung": "Regelmäßiger Plural mit -s."
    },
    {
      "type": "mc",
      "frage": "Choose the correct plural: \"box\".",
      "optionen": [
        "boxs",
        "boxes",
        "boxen"
      ],
      "richtig": 1,
      "erklaerung": "Nach -x wird -es angehängt."
    },
    {
      "type": "transform",
      "frage": "Setze in den Plural: \"a bus\".",
      "richtig": [
        "buses",
        "busses"
      ],
      "erklaerung": "Nach -s wird -es angehängt (busses ist seltene Nebenform)."
    },
    {
      "type": "transform",
      "frage": "Setze in den Plural: \"a tomato\".",
      "richtig": [
        "tomatoes"
      ],
      "erklaerung": "Viele Wörter auf -o bilden den Plural mit -es."
    },
    {
      "type": "mc",
      "frage": "What is the plural of \"city\"?",
      "optionen": [
        "citys",
        "cities",
        "cityes"
      ],
      "richtig": 1,
      "erklaerung": "Konsonant + y: y wird zu i, dann -es."
    },
    {
      "type": "gap",
      "frage": "My sister has five ___ (baby).",
      "richtig": [
        "babies"
      ],
      "erklaerung": "Konsonant + y wird zu -ies."
    },
    {
      "type": "mc",
      "frage": "Choose the correct plural: \"boy\".",
      "optionen": [
        "boies",
        "boys",
        "boyes"
      ],
      "richtig": 1,
      "erklaerung": "Vokal + y: nur -s anhängen, kein i."
    },
    {
      "type": "gap",
      "frage": "We saw two ___ (man) in the garden.",
      "richtig": [
        "men"
      ],
      "erklaerung": "Unregelmäßiger Plural: man wird zu men."
    },
    {
      "type": "transform",
      "frage": "Setze in den Plural: \"one child\".",
      "richtig": [
        "children"
      ],
      "erklaerung": "Unregelmäßiger Plural: child wird zu children."
    },
    {
      "type": "mc",
      "frage": "What is the plural of \"foot\"?",
      "optionen": [
        "foots",
        "feet",
        "feets"
      ],
      "richtig": 1,
      "erklaerung": "Unregelmäßiger Plural: foot wird zu feet."
    },
    {
      "type": "gap",
      "frage": "The dentist checked all my ___ (tooth).",
      "richtig": [
        "teeth"
      ],
      "erklaerung": "Unregelmäßiger Plural: tooth wird zu teeth."
    },
    {
      "type": "mc",
      "frage": "Choose the correct plural: \"leaf\".",
      "optionen": [
        "leafs",
        "leaves",
        "leafes"
      ],
      "richtig": 1,
      "erklaerung": "Wörter auf -f/-fe: f wird oft zu -ves."
    },
    {
      "type": "gap",
      "frage": "He cut the bread with two sharp ___ (knife).",
      "richtig": [
        "knives"
      ],
      "erklaerung": "-fe wird zu -ves."
    },
    {
      "type": "mc",
      "frage": "What is the plural of \"sheep\"?",
      "optionen": [
        "sheep",
        "sheeps",
        "sheepes"
      ],
      "richtig": 0,
      "erklaerung": "sheep ist im Singular und Plural gleich."
    },
    {
      "type": "gap",
      "frage": "There are many ___ (fish) in this lake.",
      "richtig": [
        "fish",
        "fishes"
      ],
      "erklaerung": "fish bleibt meist gleich; fishes nur für verschiedene Arten."
    },
    {
      "type": "mc",
      "frage": "Which noun is uncountable?",
      "optionen": [
        "apple",
        "water",
        "chair"
      ],
      "richtig": 1,
      "erklaerung": "water ist unzählbar; man sagt nicht \"two waters\" im Standardgebrauch."
    },
    {
      "type": "gap",
      "frage": "I need some ___ (information) about the trip.",
      "richtig": [
        "information"
      ],
      "erklaerung": "information ist unzählbar und hat keinen Plural."
    },
    {
      "type": "mc",
      "frage": "Complete: \"How much ___ do you need?\"",
      "optionen": [
        "money",
        "moneys",
        "monies"
      ],
      "richtig": 0,
      "erklaerung": "money ist unzählbar, kein -s nach \"how much\"."
    },
    {
      "type": "transform",
      "frage": "Bilde den Genitiv (Possessiv): \"the bike of Tom\".",
      "richtig": [
        "Tom's bike"
      ],
      "erklaerung": "Bei Personen: 's für den Besitz."
    },
    {
      "type": "gap",
      "frage": "This is my ___ (parents) house.",
      "richtig": [
        "parents'"
      ],
      "erklaerung": "Plural auf -s bekommt nur einen Apostroph nach dem s."
    },
    {
      "type": "mc",
      "frage": "Choose the correct form: \"the ___ toys\" (more than one child).",
      "optionen": [
        "childrens'",
        "children's",
        "childrens"
      ],
      "richtig": 1,
      "erklaerung": "children ist schon Plural, daher 's."
    },
    {
      "type": "transform",
      "frage": "Bilde den Genitiv: \"the office of the manager\".",
      "richtig": [
        "the manager's office",
        "The manager's office"
      ],
      "erklaerung": "Person im Singular: 's anhängen."
    },
    {
      "type": "gap",
      "frage": "The ___ (women) changing room is on the left.",
      "richtig": [
        "women's"
      ],
      "erklaerung": "women ist unregelmäßiger Plural, daher 's."
    },
    {
      "type": "mc",
      "frage": "Which is correct?",
      "optionen": [
        "a piece of advice",
        "an advice",
        "two advices"
      ],
      "richtig": 0,
      "erklaerung": "advice ist unzählbar; man zählt mit \"a piece of\"."
    },
    {
      "type": "gap",
      "frage": "Could you give me two ___ of bread? (slice)",
      "richtig": [
        "slices"
      ],
      "erklaerung": "bread ist unzählbar; man zählt mit Mengeneinheiten wie slices."
    },
    {
      "type": "mc",
      "frage": "What is the plural of \"crisis\"?",
      "optionen": [
        "crisises",
        "crises",
        "crisis"
      ],
      "richtig": 1,
      "erklaerung": "Lateinisch/griechisch: -is wird zu -es (crises)."
    },
    {
      "type": "transform",
      "frage": "Setze in den Plural: \"this phenomenon\".",
      "richtig": [
        "these phenomena"
      ],
      "erklaerung": "Unregelmäßiger Plural griechischen Ursprungs: phenomenon -> phenomena."
    },
    {
      "type": "gap",
      "frage": "The news ___ (be) very surprising this morning.",
      "richtig": [
        "is",
        "was"
      ],
      "erklaerung": "news sieht plural aus, ist aber unzählbar und steht im Singular."
    },
    {
      "type": "mc",
      "frage": "Choose the correct verb: \"The police ___ looking for the thief.\"",
      "optionen": [
        "is",
        "are",
        "was"
      ],
      "richtig": 1,
      "erklaerung": "police ist ein Sammelbegriff und steht mit Pluralverb."
    },
    {
      "type": "transform",
      "frage": "Setze in den Plural: \"a mouse ran across the floor\".",
      "richtig": [
        "mice ran across the floor",
        "Mice ran across the floor"
      ],
      "erklaerung": "Unregelmäßiger Plural: mouse -> mice; Verb \"ran\" bleibt gleich."
    }
  ]
};
