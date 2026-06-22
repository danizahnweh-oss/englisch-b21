/* Thema 41: Contractions – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Contractions",
  "intro": "Kontraktionen (contractions) sind verkürzte Formen, bei denen zwei Wörter mit einem Apostroph zusammengezogen werden.",
  "explain": "<h2>Kurz erklärt</h2><ul><li><b>Contractions</b> ziehen zwei Wörter mit einem <b>Apostroph (')</b> zusammen, z. B. <span class=\"ex\">I am → I'm</span>.</li><li>Bei Verneinungen wird oft <b>not</b> verkürzt: <span class=\"ex\">do not → don't</span>, <span class=\"ex\">cannot → can't</span>.</li><li>Auch Hilfsverben werden gekürzt: <span class=\"ex\">she will → she'll</span>, <span class=\"ex\">they have → they've</span>, <span class=\"ex\">he is → he's</span>.</li><li>Achtung bei Sonderformen: <span class=\"ex\">will not → won't</span> und <span class=\"ex\">shall not → shan't</span>.</li><li>Kontraktionen sind eher <b>informell</b> (gesprochene Sprache, E-Mails an Freunde); in formellen Texten schreibt man oft die Vollform.</li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Which is the correct contraction of \"I am\"?",
      "optionen": [
        "I'm",
        "Im",
        "I're"
      ],
      "richtig": 0,
      "erklaerung": "\"I am\" wird zu \"I'm\" zusammengezogen (Apostroph statt \"a\")."
    },
    {
      "type": "mc",
      "frage": "Choose the contraction for \"you are\".",
      "optionen": [
        "youre",
        "you're",
        "your"
      ],
      "richtig": 1,
      "erklaerung": "\"You are\" = \"you're\". \"Your\" ist ein Possessivpronomen."
    },
    {
      "type": "gap",
      "frage": "\"He is my brother.\" Short form: \"___ my brother.\"",
      "richtig": [
        "He's"
      ],
      "erklaerung": "\"He is\" wird zu \"He's\"."
    },
    {
      "type": "mc",
      "frage": "What is the contraction of \"it is\"?",
      "optionen": [
        "its",
        "it's",
        "its'"
      ],
      "richtig": 1,
      "erklaerung": "\"It is\" = \"it's\". \"Its\" (ohne Apostroph) ist der Possessiv."
    },
    {
      "type": "gap",
      "frage": "\"We are ready.\" Short form: \"___ ready.\"",
      "richtig": [
        "We're"
      ],
      "erklaerung": "\"We are\" wird zu \"We're\"."
    },
    {
      "type": "transform",
      "frage": "Write with a contraction: \"They are at home.\"",
      "richtig": [
        "They're at home.",
        "They're at home"
      ],
      "erklaerung": "\"They are\" wird zu \"They're\"."
    },
    {
      "type": "mc",
      "frage": "Which is the correct negative contraction of \"is not\"?",
      "optionen": [
        "isnt",
        "is'nt",
        "isn't"
      ],
      "richtig": 2,
      "erklaerung": "Der Apostroph ersetzt das \"o\" in \"not\": \"isn't\"."
    },
    {
      "type": "gap",
      "frage": "\"I do not like coffee.\" Short form: \"I ___ like coffee.\"",
      "richtig": [
        "don't"
      ],
      "erklaerung": "\"Do not\" wird zu \"don't\"."
    },
    {
      "type": "transform",
      "frage": "Write with a contraction: \"She does not work here.\"",
      "richtig": [
        "She doesn't work here.",
        "She doesn't work here"
      ],
      "erklaerung": "\"Does not\" wird zu \"doesn't\"."
    },
    {
      "type": "mc",
      "frage": "Choose the correct contraction: \"We ___ have any milk.\"",
      "optionen": [
        "don't",
        "doesn't",
        "aren't"
      ],
      "richtig": 0,
      "erklaerung": "Bei \"we\" (Plural) im Present Simple steht \"don't\"."
    },
    {
      "type": "gap",
      "frage": "\"He cannot swim.\" Short form: \"He ___ swim.\"",
      "richtig": [
        "can't",
        "cannot"
      ],
      "erklaerung": "\"Cannot\" wird zu \"can't\" zusammengezogen."
    },
    {
      "type": "mc",
      "frage": "Which is the contraction of \"will not\"?",
      "optionen": [
        "willn't",
        "won't",
        "wont"
      ],
      "richtig": 1,
      "erklaerung": "\"Will not\" hat die unregelmäßige Kurzform \"won't\"."
    },
    {
      "type": "transform",
      "frage": "Write with a contraction: \"I have finished my homework.\"",
      "richtig": [
        "I've finished my homework.",
        "I've finished my homework"
      ],
      "erklaerung": "\"I have\" wird im Perfect zu \"I've\"."
    },
    {
      "type": "gap",
      "frage": "\"They have left already.\" Short form: \"___ left already.\"",
      "richtig": [
        "They've"
      ],
      "erklaerung": "\"They have\" wird zu \"They've\"."
    },
    {
      "type": "mc",
      "frage": "Choose the contraction for \"she will\".",
      "optionen": [
        "she'll",
        "shell",
        "she'l"
      ],
      "richtig": 0,
      "erklaerung": "\"She will\" wird zu \"she'll\"."
    },
    {
      "type": "gap",
      "frage": "\"You will see.\" Short form: \"___ see.\"",
      "richtig": [
        "You'll"
      ],
      "erklaerung": "\"You will\" wird zu \"You'll\"."
    },
    {
      "type": "transform",
      "frage": "Write with a contraction: \"We would like some tea.\"",
      "richtig": [
        "We'd like some tea.",
        "We'd like some tea"
      ],
      "erklaerung": "\"We would\" wird zu \"We'd\"."
    },
    {
      "type": "mc",
      "frage": "\"I ___ go to the party if I had time.\" Which contraction fits?",
      "optionen": [
        "I'll",
        "I'd",
        "I've"
      ],
      "richtig": 1,
      "erklaerung": "Im Conditional steht \"would\": \"I would\" = \"I'd\"."
    },
    {
      "type": "gap",
      "frage": "\"He has not arrived yet.\" Short form (contract \"has not\"): \"He ___ arrived yet.\"",
      "richtig": [
        "hasn't"
      ],
      "erklaerung": "\"Has not\" wird zu \"hasn't\"."
    },
    {
      "type": "gap",
      "frage": "\"They were not at school.\" Short form: \"They ___ at school.\"",
      "richtig": [
        "weren't"
      ],
      "erklaerung": "\"Were not\" wird zu \"weren't\"."
    },
    {
      "type": "mc",
      "frage": "Which sentence is correct?",
      "optionen": [
        "She wasn't tired.",
        "She was'nt tired.",
        "She wasnt tired."
      ],
      "richtig": 0,
      "erklaerung": "\"Was not\" = \"wasn't\"; der Apostroph steht vor dem \"t\"."
    },
    {
      "type": "transform",
      "frage": "Write with a contraction: \"Let us start now.\"",
      "richtig": [
        "Let's start now.",
        "Let's start now"
      ],
      "erklaerung": "\"Let us\" wird zu \"Let's\"."
    },
    {
      "type": "gap",
      "frage": "Question tag: \"You are coming, ___ you?\" (negative contraction)",
      "richtig": [
        "aren't"
      ],
      "erklaerung": "Positiver Satz mit \"are\" -> negatives Tag \"aren't you?\"."
    },
    {
      "type": "mc",
      "frage": "In \"What's your name?\", \"What's\" stands for:",
      "optionen": [
        "What has",
        "What is",
        "What us"
      ],
      "richtig": 1,
      "erklaerung": "Hier bedeutet \"What's\" = \"What is\"."
    },
    {
      "type": "gap",
      "frage": "\"There is a problem.\" Short form: \"___ a problem.\"",
      "richtig": [
        "There's"
      ],
      "erklaerung": "\"There is\" wird zu \"There's\"."
    },
    {
      "type": "transform",
      "frage": "Write with a contraction: \"She had already eaten when I called.\"",
      "richtig": [
        "She'd already eaten when I called.",
        "She'd already eaten when I called"
      ],
      "erklaerung": "Im Past Perfect steht \"had\": \"She had\" = \"She'd\"."
    },
    {
      "type": "mc",
      "frage": "In \"He's gone home\", \"He's\" means:",
      "optionen": [
        "He is",
        "He was",
        "He has"
      ],
      "richtig": 2,
      "erklaerung": "Vor einem Partizip (gone) bedeutet \"He's\" = \"He has\"."
    },
    {
      "type": "gap",
      "frage": "\"Who is at the door?\" Short form: \"___ at the door?\"",
      "richtig": [
        "Who's"
      ],
      "erklaerung": "\"Who is\" wird zu \"Who's\" (nicht \"whose\")."
    },
    {
      "type": "transform",
      "frage": "Write the full (non-contracted) form: \"They'd better hurry.\"",
      "richtig": [
        "They had better hurry.",
        "They had better hurry"
      ],
      "erklaerung": "In \"had better\" steht \"'d\" für \"had\": \"They had better hurry.\""
    },
    {
      "type": "mc",
      "frage": "Which contraction is NOT normally written in standard English?",
      "optionen": [
        "amn't",
        "shan't",
        "mightn't"
      ],
      "richtig": 0,
      "erklaerung": "\"Amn't\" ist im Standardenglisch unüblich; man sagt \"I'm not\" oder \"aren't I?\"."
    },
    {
      "type": "transform",
      "frage": "Write with contractions where possible: \"I would not have done it if I had known.\"",
      "richtig": [
        "I wouldn't have done it if I'd known.",
        "I wouldn't have done it if I'd known"
      ],
      "erklaerung": "\"Would not\" = \"wouldn't\" und \"I had\" = \"I'd\" (im if-Satz)."
    }
  ]
};
