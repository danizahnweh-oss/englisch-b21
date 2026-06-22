/* Thema 26: Simple past – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Simple past",
  "intro": "Das Simple Past beschreibt abgeschlossene Handlungen in der Vergangenheit, oft mit Zeitangaben wie yesterday, last week oder in 1999.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Regelmäßige Verben bilden das Simple Past mit <b>-ed</b>: <span class=\"ex\">work → worked, play → played</span></li><li>Unregelmäßige Verben haben eigene Formen, die man lernen muss: <span class=\"ex\">go → went, buy → bought, see → saw</span></li><li>Verneinung und Frage bilden wir mit <b>did</b> + Grundform (Infinitiv ohne to): <span class=\"ex\">She did not go. Did you see it?</span></li><li>Nach <b>did/didn't</b> steht NIE die Vergangenheitsform: <span class=\"ex\">I didn't go</span> (nicht \"didn't went)</li><li>Das Verb <b>to be</b> ist eine Ausnahme: <span class=\"ex\">I was, you were, he was not (wasn't)</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Choose the correct form: Last summer we ___ to Italy.",
      "optionen": [
        "go",
        "went",
        "goed"
      ],
      "richtig": 1,
      "erklaerung": "\"go\" ist unregelmäßig; die Simple-Past-Form lautet \"went\"."
    },
    {
      "type": "mc",
      "frage": "Which sentence is correct?",
      "optionen": [
        "She didn't called me.",
        "She didn't call me.",
        "She not called me."
      ],
      "richtig": 1,
      "erklaerung": "Nach \"didn't\" steht die Grundform: \"call\", nicht \"called\"."
    },
    {
      "type": "mc",
      "frage": "Choose the correct question: ___ you watch the film yesterday?",
      "optionen": [
        "Did",
        "Do",
        "Was"
      ],
      "richtig": 0,
      "erklaerung": "Fragen im Simple Past bildet man mit \"Did\" + Grundform."
    },
    {
      "type": "gap",
      "frage": "Yesterday I ___ (buy) a new phone.",
      "richtig": [
        "bought"
      ],
      "erklaerung": "\"buy\" ist unregelmäßig; die Simple-Past-Form ist \"bought\"."
    },
    {
      "type": "gap",
      "frage": "They ___ (not / visit) us last weekend.",
      "richtig": [
        "did not visit",
        "didn't visit"
      ],
      "erklaerung": "Verneinung im Simple Past: \"did not / didn't\" + Grundform \"visit\"."
    },
    {
      "type": "gap",
      "frage": "When she was young, she ___ (live) in London.",
      "richtig": [
        "lived"
      ],
      "erklaerung": "\"live\" ist regelmäßig: live + d = \"lived\" (Endung auf -e, nur -d anhängen)."
    },
    {
      "type": "gap",
      "frage": "___ they at the party last night? (be)",
      "richtig": [
        "Were",
        "were"
      ],
      "erklaerung": "\"to be\" im Plural/2. Person: \"were\". Die Frage steht ohne \"did\"."
    },
    {
      "type": "transform",
      "frage": "Setze ins Simple Past: 'He plays football every day.' (Beginne mit 'Yesterday')",
      "richtig": [
        "Yesterday he played football.",
        "Yesterday he played football"
      ],
      "erklaerung": "\"play\" wird regelmäßig zu \"played\"; die Zeitangabe \"Yesterday\" signalisiert die Vergangenheit."
    },
    {
      "type": "transform",
      "frage": "Verneine den Satz: 'I saw him at school.'",
      "richtig": [
        "I did not see him at school.",
        "I didn't see him at school.",
        "I did not see him at school",
        "I didn't see him at school"
      ],
      "erklaerung": "Verneinung mit \"did not / didn't\" + Grundform \"see\" (nicht \"saw\")."
    },
    {
      "type": "transform",
      "frage": "Bilde eine Frage aus: 'She wrote a letter.'",
      "richtig": [
        "Did she write a letter?",
        "Did she write a letter"
      ],
      "erklaerung": "Frage mit \"Did\" + Subjekt + Grundform \"write\" (nicht \"wrote\")."
    }
  ]
};
