/* Thema 2: Plural forms – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Plural forms",
  "intro": "Im Englischen bildet man den Plural der meisten Nomen mit -s, aber es gibt viele wichtige Sonderformen und unregelmäßige Pluralformen.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Die meisten Nomen bilden den Plural mit <b>-s</b>: <span class=\"ex\">car → cars, book → books</span>.</li><li>Nach <b>-s, -ss, -sh, -ch, -x</b> hängt man <b>-es</b> an: <span class=\"ex\">box → boxes, watch → watches</span>.</li><li>Konsonant + <b>-y</b> wird zu <b>-ies</b>: <span class=\"ex\">city → cities</span>; Vokal + y bleibt: <span class=\"ex\">boy → boys</span>.</li><li>Es gibt <b>unregelmäßige</b> Formen: <span class=\"ex\">man → men, child → children, foot → feet, mouse → mice</span>.</li><li>Manche Nomen sind gleich oder enden auf <b>-ves</b>: <span class=\"ex\">sheep → sheep, knife → knives, leaf → leaves</span>.</li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "What is the plural of \"book\"?",
      "optionen": [
        "books",
        "bookes",
        "books'"
      ],
      "richtig": 0,
      "erklaerung": "Regelmäßiger Plural: einfach -s anhängen."
    },
    {
      "type": "gap",
      "frage": "I have two ___ (dog) at home.",
      "richtig": [
        "dogs"
      ],
      "erklaerung": "Regelmäßiger Plural mit -s."
    },
    {
      "type": "transform",
      "frage": "Put into the plural: \"a car\".",
      "richtig": [
        "cars"
      ],
      "erklaerung": "Regelmäßiger Plural ohne Artikel: cars."
    },
    {
      "type": "gap",
      "frage": "There are many ___ (apple) in the basket.",
      "richtig": [
        "apples"
      ],
      "erklaerung": "Regelmäßiger Plural mit -s."
    },
    {
      "type": "transform",
      "frage": "Put into the plural: \"a table\".",
      "richtig": [
        "tables"
      ],
      "erklaerung": "Regelmäßiger Plural ohne Artikel: tables."
    },
    {
      "type": "mc",
      "frage": "What is the plural of \"bus\"?",
      "optionen": [
        "buss",
        "buses",
        "busies"
      ],
      "richtig": 1,
      "erklaerung": "Nach -s wird -es angehängt: buses."
    },
    {
      "type": "gap",
      "frage": "She washed all the ___ (dish) after dinner.",
      "richtig": [
        "dishes"
      ],
      "erklaerung": "Nach -sh wird -es angehängt: dishes."
    },
    {
      "type": "mc",
      "frage": "What is the plural of \"box\"?",
      "optionen": [
        "boxs",
        "boxes",
        "boxies"
      ],
      "richtig": 1,
      "erklaerung": "Nach -x wird -es angehängt: boxes."
    },
    {
      "type": "gap",
      "frage": "We saw three ___ (church) in the old town.",
      "richtig": [
        "churches"
      ],
      "erklaerung": "Nach -ch wird -es angehängt: churches."
    },
    {
      "type": "transform",
      "frage": "Put into the plural: \"a tomato\".",
      "richtig": [
        "tomatoes"
      ],
      "erklaerung": "Manche Wörter auf -o bekommen -es: tomatoes."
    },
    {
      "type": "mc",
      "frage": "What is the plural of \"baby\"?",
      "optionen": [
        "babys",
        "babies",
        "babyes"
      ],
      "richtig": 1,
      "erklaerung": "Konsonant + y: y wird zu -ies: babies."
    },
    {
      "type": "gap",
      "frage": "There are five ___ (city) in this region.",
      "richtig": [
        "cities"
      ],
      "erklaerung": "Konsonant + y wird zu -ies: cities."
    },
    {
      "type": "mc",
      "frage": "What is the plural of \"boy\"?",
      "optionen": [
        "boies",
        "boys",
        "boyes"
      ],
      "richtig": 1,
      "erklaerung": "Vokal + y: nur -s anhängen: boys."
    },
    {
      "type": "transform",
      "frage": "Put into the plural: \"a key\".",
      "richtig": [
        "keys"
      ],
      "erklaerung": "Vokal + y: nur -s anhängen: keys."
    },
    {
      "type": "mc",
      "frage": "What is the plural of \"leaf\"?",
      "optionen": [
        "leafs",
        "leaves",
        "leafes"
      ],
      "richtig": 1,
      "erklaerung": "-f wird zu -ves: leaves."
    },
    {
      "type": "gap",
      "frage": "The thieves stole two expensive ___ (knife).",
      "richtig": [
        "knives"
      ],
      "erklaerung": "-fe wird zu -ves: knives."
    },
    {
      "type": "transform",
      "frage": "Put into the plural: \"a wolf\".",
      "richtig": [
        "wolves"
      ],
      "erklaerung": "-f wird zu -ves: wolves."
    },
    {
      "type": "mc",
      "frage": "What is the plural of \"child\"?",
      "optionen": [
        "childs",
        "childes",
        "children"
      ],
      "richtig": 2,
      "erklaerung": "Unregelmäßiger Plural: children."
    },
    {
      "type": "gap",
      "frage": "Three ___ (man) and two women were waiting outside.",
      "richtig": [
        "men"
      ],
      "erklaerung": "Unregelmäßig: man wird zu men."
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
      "erklaerung": "Unregelmäßig durch Vokalwechsel: feet."
    },
    {
      "type": "gap",
      "frage": "The dentist checked all my ___ (tooth).",
      "richtig": [
        "teeth"
      ],
      "erklaerung": "Unregelmäßiger Plural: teeth."
    },
    {
      "type": "transform",
      "frage": "Put into the plural: \"this mouse\".",
      "richtig": [
        "these mice"
      ],
      "erklaerung": "this wird zu these, mouse wird unregelmäßig zu mice."
    },
    {
      "type": "mc",
      "frage": "Which sentence is correct?",
      "optionen": [
        "There are two sheeps in the field.",
        "There are two sheep in the field.",
        "There are two sheepes in the field."
      ],
      "richtig": 1,
      "erklaerung": "sheep hat dieselbe Form im Singular und Plural."
    },
    {
      "type": "gap",
      "frage": "We caught three big ___ (fish) at the lake.",
      "richtig": [
        "fish",
        "fishes"
      ],
      "erklaerung": "fish bleibt meist unverändert; fishes ist möglich für verschiedene Arten."
    },
    {
      "type": "mc",
      "frage": "What is the plural of \"crisis\"?",
      "optionen": [
        "crisises",
        "crises",
        "crisi"
      ],
      "richtig": 1,
      "erklaerung": "Griechischer Ursprung: -is wird zu -es: crises."
    },
    {
      "type": "gap",
      "frage": "The scientist studied several different ___ (phenomenon).",
      "richtig": [
        "phenomena"
      ],
      "erklaerung": "Griechischer Plural: phenomenon wird zu phenomena."
    },
    {
      "type": "transform",
      "frage": "Put the underlined word into the plural: \"The analysis was difficult.\"",
      "richtig": [
        "The analyses were difficult.",
        "The analyses were difficult"
      ],
      "erklaerung": "analysis wird zu analyses; was wird zu were."
    },
    {
      "type": "mc",
      "frage": "Choose the correct sentence.",
      "optionen": [
        "My trousers is too long.",
        "My trousers are too long.",
        "My trouser are too long."
      ],
      "richtig": 1,
      "erklaerung": "trousers ist nur Plural und braucht 'are'."
    },
    {
      "type": "gap",
      "frage": "The news ___ (be) very surprising this morning.",
      "richtig": [
        "was",
        "is"
      ],
      "erklaerung": "news sieht plural aus, ist aber Singular (unzählbar): was/is."
    },
    {
      "type": "transform",
      "frage": "Put into the plural: \"a passer-by\".",
      "richtig": [
        "passers-by"
      ],
      "erklaerung": "Bei zusammengesetzten Nomen wird das Hauptwort zum Plural: passers-by."
    },
    {
      "type": "mc",
      "frage": "What is the correct plural of \"mother-in-law\"?",
      "optionen": [
        "mother-in-laws",
        "mothers-in-law",
        "mother-in-law"
      ],
      "richtig": 1,
      "erklaerung": "Das Hauptnomen wird zum Plural: mothers-in-law."
    },
    {
      "type": "gap",
      "frage": "The two ___ (criterion) for the award are talent and effort.",
      "richtig": [
        "criteria"
      ],
      "erklaerung": "Griechischer Plural: criterion wird zu criteria."
    }
  ]
};
