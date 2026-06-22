/* Thema 20: Verb conjugation – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Verb conjugation",
  "intro": "Bei der Verb-Konjugation passt du das Verb an Person, Zahl und Zeitform an - besonders wichtig ist im Englischen das -s in der 3. Person Singular im Simple Present.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Im <b>Simple Present</b> bekommt die 3. Person Singular (he/she/it) ein <b>-s</b>: <span class=\"ex\">She works in London.</span></li><li>Bei Verben auf -o, -ch, -sh, -ss, -x hängst du <b>-es</b> an: <span class=\"ex\">He goes / She watches.</span></li><li>Endet ein Verb auf <b>Konsonant + y</b>, wird es zu <b>-ies</b>: <span class=\"ex\">He studies / She flies.</span></li><li>Die Verben <b>be</b> und <b>have</b> sind unregelmäßig: <span class=\"ex\">I am, you are, he is / he has.</span></li><li>In Verneinungen und Fragen trägt das <b>Hilfsverb</b> die Endung, nicht das Vollverb: <span class=\"ex\">She doesn't work. Does he play?</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Choose the correct form: My sister ___ to music every evening.",
      "optionen": [
        "listen",
        "listens",
        "listening"
      ],
      "richtig": 1,
      "erklaerung": "3. Person Singular (she) im Simple Present bekommt ein -s: listens."
    },
    {
      "type": "mc",
      "frage": "Choose the correct form: ___ your parents live near the city centre?",
      "optionen": [
        "Does",
        "Do",
        "Are"
      ],
      "richtig": 1,
      "erklaerung": "Bei der Frage mit Plural-Subjekt (your parents) benutzt man das Hilfsverb 'do'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct form: He always ___ his homework before dinner.",
      "optionen": [
        "dos",
        "do",
        "does"
      ],
      "richtig": 2,
      "erklaerung": "Das Verb 'do' wird in der 3. Person Singular zu 'does' (Endung -es)."
    },
    {
      "type": "gap",
      "frage": "Complete the sentence: She ___ (study) English at university.",
      "richtig": [
        "studies"
      ],
      "erklaerung": "Verb auf Konsonant + y (study) wird in der 3. Person Singular zu -ies: studies."
    },
    {
      "type": "gap",
      "frage": "Complete the sentence: My friends ___ (not / like) horror films.",
      "richtig": [
        "don't like",
        "do not like"
      ],
      "erklaerung": "Plural-Subjekt (my friends) in der Verneinung: don't like / do not like."
    },
    {
      "type": "gap",
      "frage": "Complete the sentence: Tom ___ (watch) football on Saturdays.",
      "richtig": [
        "watches"
      ],
      "erklaerung": "Verb auf -ch (watch) bekommt in der 3. Person Singular die Endung -es: watches."
    },
    {
      "type": "gap",
      "frage": "Complete the sentence: ___ (be) you ready for the test tomorrow?",
      "richtig": [
        "Are",
        "are"
      ],
      "erklaerung": "Das Verb 'be' lautet bei 'you' im Present: are. In der Frage steht es vorne."
    },
    {
      "type": "transform",
      "frage": "Rewrite in the 3rd person singular (he): 'I go to school by bus.'",
      "richtig": [
        "He goes to school by bus.",
        "He goes to school by bus"
      ],
      "erklaerung": "Das Verb 'go' bekommt in der 3. Person Singular die Endung -es: goes."
    },
    {
      "type": "transform",
      "frage": "Make the sentence negative: 'She speaks three languages.'",
      "richtig": [
        "She doesn't speak three languages.",
        "She does not speak three languages.",
        "She doesn't speak three languages",
        "She does not speak three languages"
      ],
      "erklaerung": "In der Verneinung trägt das Hilfsverb die Endung (doesn't), das Vollverb steht im Grundform: speak."
    },
    {
      "type": "transform",
      "frage": "Turn into a question: 'He has a new car.'",
      "richtig": [
        "Does he have a new car?",
        "Does he have a new car"
      ],
      "erklaerung": "Frage im Simple Present mit 'does': Das Vollverb 'have' verliert die Endung und steht in der Grundform."
    }
  ]
};
