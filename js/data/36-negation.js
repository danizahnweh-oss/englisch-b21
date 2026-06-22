/* Thema 36: Negation – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Negation",
  "intro": "Verneinung (Negation) im Englischen bildet man je nach Satztyp unterschiedlich - mit \"not\", Hilfsverben wie \"do/does/did\" oder mit verneinenden Wörtern wie \"no\", \"nobody\" oder \"never\".",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Bei Vollverben braucht man im Present und Past Simple das Hilfsverb <b>do/does/did</b> + <b>not</b>; das Hauptverb steht im Infinitiv: <span class=\"ex\">She doesn't like tea. He didn't come.</span></li><li>Bei <b>be</b>, Modalverben und Hilfsverben hängt man <b>not</b> direkt an: <span class=\"ex\">I am not ready. You can't swim. They haven't finished.</span></li><li>Kurzformen sind im gesprochenen Englisch üblich: <span class=\"ex\">don't, doesn't, didn't, isn't, won't, can't</span></li><li>Mit <b>no, nobody, nothing, never</b> verneint man bereits - das Verb bleibt dann positiv (kein doppeltes \"not\"): <span class=\"ex\">I have no money. Nobody knows. We never lie.</span></li><li>In Kurzantworten nutzt man das passende Hilfsverb: <span class=\"ex\">No, I don't. No, she isn't.</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Choose the correct negation: \"She ___ like coffee.\"",
      "optionen": [
        "doesn't",
        "don't",
        "not"
      ],
      "richtig": 0,
      "erklaerung": "Bei 'she' (3. Person Singular) im Present Simple verneint man mit 'doesn't' + Infinitiv (like)."
    },
    {
      "type": "mc",
      "frage": "Which sentence is correct?",
      "optionen": [
        "I didn't saw the film.",
        "I didn't see the film.",
        "I don't saw the film."
      ],
      "richtig": 1,
      "erklaerung": "Nach 'didn't' steht immer der Infinitiv (see), nicht die Vergangenheitsform (saw)."
    },
    {
      "type": "mc",
      "frage": "Choose the correct word: \"There is ___ milk in the fridge.\"",
      "optionen": [
        "any",
        "no",
        "not"
      ],
      "richtig": 1,
      "erklaerung": "Vor einem Substantiv verneint man mit 'no' (= kein). 'not' und 'any' passen hier grammatikalisch nicht ('not any' wäre möglich, aber 'no' allein ist korrekt)."
    },
    {
      "type": "gap",
      "frage": "Verneine den Satz: \"They ___ (not / play) football on Mondays.\" Schreibe nur die fehlende verneinte Verbform.",
      "richtig": [
        "don't play",
        "do not play"
      ],
      "erklaerung": "Bei 'they' im Present Simple: 'do not / don't' + Infinitiv (play)."
    },
    {
      "type": "gap",
      "frage": "Fill in the negation: \"He ___ (not / be) at home yesterday.\"",
      "richtig": [
        "wasn't",
        "was not"
      ],
      "erklaerung": "'be' in der Vergangenheit (he) wird mit 'was not / wasn't' verneint - ohne 'did'."
    },
    {
      "type": "gap",
      "frage": "Complete with a contraction: \"We ___ (will not) forget you.\"",
      "richtig": [
        "won't",
        "will not"
      ],
      "erklaerung": "Die Kurzform von 'will not' ist unregelmäßig: 'won't'."
    },
    {
      "type": "gap",
      "frage": "Fill in the gap: \"___ knows the answer.\" (Niemand kennt die Antwort.)",
      "richtig": [
        "Nobody",
        "No one",
        "No-one"
      ],
      "erklaerung": "'Nobody / No one' verneint bereits; das Verb bleibt positiv (knows)."
    },
    {
      "type": "transform",
      "frage": "Verneine den Satz: \"I can speak French.\"",
      "richtig": [
        "I can't speak French.",
        "I cannot speak French.",
        "I can not speak French."
      ],
      "erklaerung": "Modalverben wie 'can' werden direkt mit 'not' verneint: 'cannot / can't'."
    },
    {
      "type": "transform",
      "frage": "Verneine den Satz: \"She has finished her homework.\"",
      "richtig": [
        "She hasn't finished her homework.",
        "She has not finished her homework."
      ],
      "erklaerung": "Im Present Perfect verneint man das Hilfsverb 'have/has' mit 'not': 'hasn't finished'."
    },
    {
      "type": "transform",
      "frage": "Verneine den Satz: \"Tom went to school today.\"",
      "richtig": [
        "Tom didn't go to school today.",
        "Tom did not go to school today."
      ],
      "erklaerung": "Im Past Simple verneint man mit 'did not / didn't' + Infinitiv (go), nicht 'went'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct answer: \"Do you like pizza?\" - \"No, I ___.\"",
      "optionen": [
        "don't",
        "doesn't",
        "am not"
      ],
      "richtig": 0,
      "erklaerung": "In der Kurzantwort zu 'Do you...?' wird das Hilfsverb wiederholt: 'No, I don't.'"
    }
  ]
};
