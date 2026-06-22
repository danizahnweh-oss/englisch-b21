/* Thema 26: Simple past – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Simple past",
  "intro": "Das Simple Past beschreibt abgeschlossene Handlungen in der Vergangenheit, oft mit Zeitangaben wie yesterday, last week oder in 1999.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Regelmäßige Verben bilden das Simple Past mit <b>-ed</b>: <span class=\"ex\">work → worked, play → played</span></li><li>Unregelmäßige Verben haben eigene Formen, die man lernen muss: <span class=\"ex\">go → went, buy → bought, see → saw</span></li><li>Verneinung und Frage bilden wir mit <b>did</b> + Grundform (Infinitiv ohne to): <span class=\"ex\">She did not go. Did you see it?</span></li><li>Nach <b>did/didn't</b> steht NIE die Vergangenheitsform: <span class=\"ex\">I didn't go</span> (nicht \"didn't went)</li><li>Das Verb <b>to be</b> ist eine Ausnahme: <span class=\"ex\">I was, you were, he was not (wasn't)</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Yesterday I ___ to school by bus.",
      "optionen": [
        "go",
        "went",
        "goed"
      ],
      "richtig": 1,
      "erklaerung": "\"go\" ist unregelmäßig; die Simple-Past-Form ist \"went\"."
    },
    {
      "type": "gap",
      "frage": "Last weekend we ___ (watch) a great film at the cinema.",
      "richtig": [
        "watched"
      ],
      "erklaerung": "Regelmäßiges Verb: watch + -ed = watched."
    },
    {
      "type": "mc",
      "frage": "She ___ her homework before dinner.",
      "optionen": [
        "did",
        "done",
        "does"
      ],
      "richtig": 0,
      "erklaerung": "\"do\" wird im Simple Past zu \"did\"."
    },
    {
      "type": "gap",
      "frage": "They ___ (play) football in the park last Sunday.",
      "richtig": [
        "played"
      ],
      "erklaerung": "Regelmäßiges Verb: play + -ed = played."
    },
    {
      "type": "transform",
      "frage": "Setze ins Simple Past: I eat an apple.",
      "richtig": [
        "I ate an apple.",
        "I ate an apple"
      ],
      "erklaerung": "\"eat\" ist unregelmäßig; Simple Past ist \"ate\"."
    },
    {
      "type": "mc",
      "frage": "We ___ very happy at the party.",
      "optionen": [
        "was",
        "were",
        "are"
      ],
      "richtig": 1,
      "erklaerung": "Bei \"we\" lautet die Vergangenheitsform von \"to be\" \"were\"."
    },
    {
      "type": "gap",
      "frage": "My brother ___ (study) for his exam all evening.",
      "richtig": [
        "studied"
      ],
      "erklaerung": "Verben auf Konsonant + y: y wird zu i, dann -ed: studied."
    },
    {
      "type": "mc",
      "frage": "He ___ a new car last month.",
      "optionen": [
        "buyed",
        "bought",
        "buied"
      ],
      "richtig": 1,
      "erklaerung": "\"buy\" ist unregelmäßig; Simple Past ist \"bought\"."
    },
    {
      "type": "gap",
      "frage": "The dog ___ (stop) suddenly in the middle of the street.",
      "richtig": [
        "stopped"
      ],
      "erklaerung": "Kurzer betonter Vokal + einzelner Konsonant: Verdopplung, stop -> stopped."
    },
    {
      "type": "transform",
      "frage": "Setze ins Simple Past: She writes a letter.",
      "richtig": [
        "She wrote a letter.",
        "She wrote a letter"
      ],
      "erklaerung": "\"write\" ist unregelmäßig; Simple Past ist \"wrote\"."
    },
    {
      "type": "mc",
      "frage": "___ you see Tom yesterday?",
      "optionen": [
        "Do",
        "Did",
        "Was"
      ],
      "richtig": 1,
      "erklaerung": "Fragen im Simple Past bildet man mit \"did\" + Grundform."
    },
    {
      "type": "gap",
      "frage": "I ___ (not / like) the food in that restaurant.",
      "richtig": [
        "did not like",
        "didn't like"
      ],
      "erklaerung": "Verneinung: did not / didn't + Grundform (like)."
    },
    {
      "type": "mc",
      "frage": "Where ___ they go on holiday last year?",
      "optionen": [
        "did",
        "do",
        "were"
      ],
      "richtig": 0,
      "erklaerung": "Fragewort + did + Subjekt + Grundform."
    },
    {
      "type": "gap",
      "frage": "She ___ (have) a wonderful time in Italy.",
      "richtig": [
        "had"
      ],
      "erklaerung": "\"have\" ist unregelmäßig; Simple Past ist \"had\"."
    },
    {
      "type": "transform",
      "frage": "Verneine den Satz: He came home late.",
      "richtig": [
        "He did not come home late.",
        "He didn't come home late.",
        "He did not come home late",
        "He didn't come home late"
      ],
      "erklaerung": "Verneinung: did not/didn't + Grundform \"come\"."
    },
    {
      "type": "mc",
      "frage": "The children ___ tired after the long walk.",
      "optionen": [
        "was",
        "were",
        "did"
      ],
      "richtig": 1,
      "erklaerung": "\"children\" ist Plural, daher \"were\"."
    },
    {
      "type": "gap",
      "frage": "We ___ (meet) our old friends at the station.",
      "richtig": [
        "met"
      ],
      "erklaerung": "\"meet\" ist unregelmäßig; Simple Past ist \"met\"."
    },
    {
      "type": "transform",
      "frage": "Bilde eine Frage: They found the keys. (Frage nach dem Objekt mit \"What\")",
      "richtig": [
        "What did they find?",
        "What did they find"
      ],
      "erklaerung": "Frage: What + did + Subjekt + Grundform \"find\"."
    },
    {
      "type": "mc",
      "frage": "I ___ understand the teacher's question.",
      "optionen": [
        "didn't",
        "wasn't",
        "not"
      ],
      "richtig": 0,
      "erklaerung": "Verneinung im Simple Past: didn't + Grundform."
    },
    {
      "type": "gap",
      "frage": "He ___ (think) about the problem for a long time.",
      "richtig": [
        "thought"
      ],
      "erklaerung": "\"think\" ist unregelmäßig; Simple Past ist \"thought\"."
    },
    {
      "type": "transform",
      "frage": "Setze ins Simple Past: They are at home and they read books.",
      "richtig": [
        "They were at home and they read books.",
        "They were at home and they read books"
      ],
      "erklaerung": "\"are\" -> \"were\"; \"read\" bleibt geschrieben gleich (read), wird aber [red] gesprochen."
    },
    {
      "type": "mc",
      "frage": "When the phone rang, she ___ it immediately.",
      "optionen": [
        "answered",
        "answer",
        "answers"
      ],
      "richtig": 0,
      "erklaerung": "Regelmäßiges Verb im Simple Past: answer + -ed = answered."
    },
    {
      "type": "gap",
      "frage": "The film ___ (begin) at eight o'clock last night.",
      "richtig": [
        "began"
      ],
      "erklaerung": "\"begin\" ist unregelmäßig; Simple Past ist \"began\"."
    },
    {
      "type": "transform",
      "frage": "Bilde eine Ja/Nein-Frage: She left early.",
      "richtig": [
        "Did she leave early?",
        "Did she leave early"
      ],
      "erklaerung": "Did + Subjekt + Grundform \"leave\"."
    },
    {
      "type": "mc",
      "frage": "We didn't ___ anyone at the conference.",
      "optionen": [
        "knew",
        "know",
        "known"
      ],
      "richtig": 1,
      "erklaerung": "Nach \"didn't\" steht die Grundform (know), nicht die Past-Form."
    },
    {
      "type": "gap",
      "frage": "While I was cooking, my sister ___ (lay) the table.",
      "richtig": [
        "laid"
      ],
      "erklaerung": "\"lay\" (legen) ist unregelmäßig; Simple Past ist \"laid\"."
    },
    {
      "type": "transform",
      "frage": "Setze ins Simple Past: He doesn't catch the train, so he takes a taxi.",
      "richtig": [
        "He didn't catch the train, so he took a taxi.",
        "He didn't catch the train, so he took a taxi"
      ],
      "erklaerung": "\"doesn't catch\" -> \"didn't catch\" (Grundform); \"takes\" -> \"took\"."
    },
    {
      "type": "mc",
      "frage": "I ___ him last week, but I can't remember exactly when.",
      "optionen": [
        "seen",
        "saw",
        "see"
      ],
      "richtig": 1,
      "erklaerung": "\"see\" ist unregelmäßig; Simple Past ist \"saw\" (\"seen\" wäre Past Participle)."
    },
    {
      "type": "gap",
      "frage": "Although it ___ (rain) heavily, they still went for a walk.",
      "richtig": [
        "rained"
      ],
      "erklaerung": "Regelmäßiges Verb: rain + -ed = rained."
    },
    {
      "type": "transform",
      "frage": "Bilde eine Frage mit \"How long\": You waited for the bus. (Verwende \"you\")",
      "richtig": [
        "How long did you wait for the bus?",
        "How long did you wait for the bus"
      ],
      "erklaerung": "How long + did + you + Grundform \"wait\"."
    },
    {
      "type": "gap",
      "frage": "Neither the manager nor the staff ___ (be) aware of the mistake until it was too late.",
      "richtig": [
        "were",
        "was"
      ],
      "erklaerung": "Bei \"neither ... nor\" richtet sich \"to be\" nach dem näheren Subjekt (staff) -> \"were\"; \"was\" gilt formal auch als akzeptabel."
    }
  ]
};
