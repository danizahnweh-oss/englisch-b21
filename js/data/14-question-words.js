/* Thema 14: Question words – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Question words",
  "intro": "Mit Fragewörtern (question words) leitest du W-Fragen ein, um gezielt nach Personen, Dingen, Zeit, Ort oder Grund zu fragen.",
  "explain": "<h2>Kurz erklärt</h2><ul><li><b>Who</b> fragt nach Personen, <b>what</b> nach Dingen: <span class=\"ex\">Who is calling? What do you want?</span></li><li><b>Where</b> (Ort), <b>when</b> (Zeit), <b>why</b> (Grund), <b>how</b> (Art und Weise): <span class=\"ex\">Where do you live? Why are you late?</span></li><li>Nach dem Fragewort kommt meist ein <b>Hilfsverb</b> (do/does/did/is/are): <span class=\"ex\">When does the train leave?</span></li><li><b>Which</b> fragt nach einer Auswahl, <b>whose</b> nach dem Besitzer: <span class=\"ex\">Which colour do you like? Whose bag is this?</span></li><li>Bei <b>how</b> + Adjektiv/Adverb: <span class=\"ex\">How old are you? How much is it?</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "___ is your name?",
      "optionen": [
        "What",
        "Who",
        "Where"
      ],
      "richtig": 0,
      "erklaerung": "Nach dem Namen fragt man im Englischen mit 'What', nicht mit 'Who'."
    },
    {
      "type": "mc",
      "frage": "___ are you from?",
      "optionen": [
        "What",
        "Where",
        "When"
      ],
      "richtig": 1,
      "erklaerung": "'Where' fragt nach dem Ort/der Herkunft."
    },
    {
      "type": "gap",
      "frage": "___ old are you? - I'm twelve.",
      "richtig": [
        "How"
      ],
      "erklaerung": "Nach dem Alter fragt man mit 'How old'."
    },
    {
      "type": "mc",
      "frage": "___ do you go to bed? - At nine o'clock.",
      "optionen": [
        "Where",
        "When",
        "Who"
      ],
      "richtig": 1,
      "erklaerung": "'When' fragt nach der Zeit; die Antwort nennt eine Uhrzeit."
    },
    {
      "type": "gap",
      "frage": "___ is your favourite colour? - Blue.",
      "richtig": [
        "What"
      ],
      "erklaerung": "Nach einer Sache (Lieblingsfarbe) fragt man mit 'What'."
    },
    {
      "type": "mc",
      "frage": "___ is that woman over there? - She's my teacher.",
      "optionen": [
        "What",
        "Who",
        "Where"
      ],
      "richtig": 1,
      "erklaerung": "Nach einer Person fragt man mit 'Who'."
    },
    {
      "type": "gap",
      "frage": "___ are my keys? - They're on the table.",
      "richtig": [
        "Where"
      ],
      "erklaerung": "Nach dem Ort fragt man mit 'Where'."
    },
    {
      "type": "mc",
      "frage": "___ do you spell your surname?",
      "optionen": [
        "What",
        "How",
        "Who"
      ],
      "richtig": 1,
      "erklaerung": "'How' fragt nach der Art und Weise, hier nach der Schreibweise."
    },
    {
      "type": "gap",
      "frage": "___ pen is this? - It's mine.",
      "richtig": [
        "Whose"
      ],
      "erklaerung": "'Whose' fragt nach dem Besitzer (wessen)."
    },
    {
      "type": "mc",
      "frage": "___ T-shirt do you like, the red one or the blue one?",
      "optionen": [
        "Which",
        "What",
        "Who"
      ],
      "richtig": 0,
      "erklaerung": "'Which' fragt bei einer Auswahl aus begrenzten Möglichkeiten."
    },
    {
      "type": "gap",
      "frage": "___ are you crying? - Because I'm sad.",
      "richtig": [
        "Why"
      ],
      "erklaerung": "'Why' fragt nach dem Grund; die Antwort beginnt mit 'Because'."
    },
    {
      "type": "mc",
      "frage": "___ much does this jacket cost?",
      "optionen": [
        "How",
        "What",
        "Which"
      ],
      "richtig": 0,
      "erklaerung": "Nach dem Preis fragt man mit 'How much'."
    },
    {
      "type": "gap",
      "frage": "___ many brothers and sisters do you have?",
      "richtig": [
        "How"
      ],
      "erklaerung": "Bei zählbaren Dingen verwendet man 'How many'."
    },
    {
      "type": "mc",
      "frage": "___ do you usually have for breakfast?",
      "optionen": [
        "Who",
        "What",
        "When"
      ],
      "richtig": 1,
      "erklaerung": "Nach einer Sache (dem Frühstück) fragt man mit 'What'."
    },
    {
      "type": "gap",
      "frage": "___ often do you play tennis? - Twice a week.",
      "richtig": [
        "How"
      ],
      "erklaerung": "Nach der Häufigkeit fragt man mit 'How often'."
    },
    {
      "type": "transform",
      "frage": "Bilde eine Frage zur unterstrichenen Information: She lives in Berlin. (in Berlin)",
      "richtig": [
        "Where does she live?",
        "Where does she live"
      ],
      "erklaerung": "Nach dem Ort fragt 'Where'; im Present Simple mit 'does' und Grundform 'live'."
    },
    {
      "type": "transform",
      "frage": "Bilde eine Frage zur unterstrichenen Information: They went home at six. (at six)",
      "richtig": [
        "When did they go home?",
        "What time did they go home?",
        "When did they go home",
        "What time did they go home"
      ],
      "erklaerung": "Nach der Zeit fragt 'When/What time'; im Past Simple mit 'did' und Grundform 'go'."
    },
    {
      "type": "mc",
      "frage": "___ long does the film last? - About two hours.",
      "optionen": [
        "How",
        "What",
        "When"
      ],
      "richtig": 0,
      "erklaerung": "Nach der Dauer fragt man mit 'How long'."
    },
    {
      "type": "gap",
      "frage": "___ does this word mean? - It means 'fast'.",
      "richtig": [
        "What"
      ],
      "erklaerung": "Nach der Bedeutung fragt man mit 'What ... mean'."
    },
    {
      "type": "transform",
      "frage": "Bilde eine Frage zur unterstrichenen Information: Tom bought a new car. (Tom)",
      "richtig": [
        "Who bought a new car?",
        "Who bought a new car"
      ],
      "erklaerung": "Bei der Frage nach dem Subjekt (Wer?) braucht man kein 'did'; das Verb bleibt in der Vergangenheit: 'bought'."
    },
    {
      "type": "mc",
      "frage": "___ are you so happy today?",
      "optionen": [
        "How",
        "Why",
        "Where"
      ],
      "richtig": 1,
      "erklaerung": "Nach dem Grund fragt man mit 'Why'."
    },
    {
      "type": "gap",
      "frage": "___ of these books is yours? - The one on the left.",
      "richtig": [
        "Which"
      ],
      "erklaerung": "Bei einer Auswahl ('of these') verwendet man 'Which'."
    },
    {
      "type": "transform",
      "frage": "Bilde eine Frage zur unterstrichenen Information: She is waiting for her sister. (for her sister)",
      "richtig": [
        "Who is she waiting for?",
        "Who's she waiting for?",
        "For whom is she waiting?",
        "Who is she waiting for",
        "Whom is she waiting for?"
      ],
      "erklaerung": "Frage nach der Person mit Präposition: 'Who ... for?' (umgangssprachlich) oder formell 'For whom ...?'."
    },
    {
      "type": "mc",
      "frage": "___ does the train leave - from platform 3 or platform 4?",
      "optionen": [
        "Where",
        "When",
        "Why"
      ],
      "richtig": 0,
      "erklaerung": "Nach dem Ort/Bahnsteig fragt man mit 'Where'."
    },
    {
      "type": "gap",
      "frage": "___ are you going to spend your holidays this year?",
      "richtig": [
        "Where",
        "When",
        "How"
      ],
      "erklaerung": "Mehrere Fragewörter passen: 'Where' (Ort), 'When' (Zeit) oder 'How' (Art) ergeben sinnvolle Fragen."
    },
    {
      "type": "transform",
      "frage": "Bilde eine Frage zur unterstrichenen Information: The trip costs 200 euros. (200 euros)",
      "richtig": [
        "How much does the trip cost?",
        "How much does the trip cost"
      ],
      "erklaerung": "Nach dem Preis fragt 'How much'; mit 'does' und Grundform 'cost'."
    },
    {
      "type": "mc",
      "frage": "___ idea was it to go camping in the rain?",
      "optionen": [
        "Who",
        "Whose",
        "Which"
      ],
      "richtig": 1,
      "erklaerung": "'Whose idea' fragt nach dem Besitzer/Urheber der Idee (wessen)."
    },
    {
      "type": "transform",
      "frage": "Bilde eine indirekte Frage: Direct: 'Where is the station?' Beginne mit: Could you tell me ___",
      "richtig": [
        "Could you tell me where the station is?",
        "Could you tell me where the station is"
      ],
      "erklaerung": "In indirekten Fragen folgt nach dem Fragewort die normale Wortstellung: 'where the station is' (kein 'is the station')."
    },
    {
      "type": "gap",
      "frage": "I don't know ___ she didn't answer my message. (Grund)",
      "richtig": [
        "why"
      ],
      "erklaerung": "In dieser eingebetteten Frage nach dem Grund steht 'why'."
    },
    {
      "type": "transform",
      "frage": "Bilde eine Frage zur unterstrichenen Information: He has been learning Spanish for three years. (for three years)",
      "richtig": [
        "How long has he been learning Spanish?",
        "How long has he been learning Spanish"
      ],
      "erklaerung": "Nach der Dauer fragt 'How long'; das Present Perfect Continuous bleibt erhalten: 'has he been learning'."
    },
    {
      "type": "mc",
      "frage": "___ on earth did you manage to finish all that work so quickly?",
      "optionen": [
        "What",
        "How",
        "Which"
      ],
      "richtig": 1,
      "erklaerung": "Nach der Art und Weise (auf welche Weise) fragt man mit 'How'."
    }
  ]
};
