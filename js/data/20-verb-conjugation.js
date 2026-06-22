/* Thema 20: Verb conjugation – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Verb conjugation",
  "intro": "Bei der Verb-Konjugation passt du das Verb an Person, Zahl und Zeitform an - besonders wichtig ist im Englischen das -s in der 3. Person Singular im Simple Present.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Im <b>Simple Present</b> bekommt die 3. Person Singular (he/she/it) ein <b>-s</b>: <span class=\"ex\">She works in London.</span></li><li>Bei Verben auf -o, -ch, -sh, -ss, -x hängst du <b>-es</b> an: <span class=\"ex\">He goes / She watches.</span></li><li>Endet ein Verb auf <b>Konsonant + y</b>, wird es zu <b>-ies</b>: <span class=\"ex\">He studies / She flies.</span></li><li>Die Verben <b>be</b> und <b>have</b> sind unregelmäßig: <span class=\"ex\">I am, you are, he is / he has.</span></li><li>In Verneinungen und Fragen trägt das <b>Hilfsverb</b> die Endung, nicht das Vollverb: <span class=\"ex\">She doesn't work. Does he play?</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "She ___ to school every day.",
      "optionen": [
        "go",
        "goes",
        "going"
      ],
      "richtig": 1,
      "erklaerung": "3. Person Singular (she) bekommt im Simple Present die Endung -es: goes."
    },
    {
      "type": "gap",
      "frage": "I ___ coffee every morning. (drink)",
      "richtig": [
        "drink"
      ],
      "erklaerung": "Bei I bleibt das Verb im Simple Present unverändert: drink."
    },
    {
      "type": "mc",
      "frage": "He ___ football on Saturdays.",
      "optionen": [
        "play",
        "plays",
        "playes"
      ],
      "richtig": 1,
      "erklaerung": "He bekommt -s: plays. Nach Vokal+y bleibt das y erhalten."
    },
    {
      "type": "gap",
      "frage": "My brother ___ his homework after dinner. (do)",
      "richtig": [
        "does"
      ],
      "erklaerung": "3. Person Singular von do ist does."
    },
    {
      "type": "mc",
      "frage": "The cat ___ on the sofa right now.",
      "optionen": [
        "sleep",
        "sleeps",
        "is sleeping"
      ],
      "richtig": 2,
      "erklaerung": "'right now' verlangt das Present Continuous: is sleeping."
    },
    {
      "type": "gap",
      "frage": "We ___ in London. (live)",
      "richtig": [
        "live"
      ],
      "erklaerung": "Bei we bleibt das Verb unverändert: live."
    },
    {
      "type": "transform",
      "frage": "Setze ins Simple Present (3. Person): 'They watch TV.' -> mit 'She' als Subjekt.",
      "richtig": [
        "She watches TV.",
        "She watches TV"
      ],
      "erklaerung": "Verben auf -ch bekommen -es: watches."
    },
    {
      "type": "mc",
      "frage": "___ you like pizza?",
      "optionen": [
        "Do",
        "Does",
        "Are"
      ],
      "richtig": 0,
      "erklaerung": "Frage mit you im Simple Present: Hilfsverb Do."
    },
    {
      "type": "gap",
      "frage": "She ___ not eat meat. (Kurzform oder Langform)",
      "richtig": [
        "does",
        "doesn't",
        "does not"
      ],
      "erklaerung": "Verneinung 3. Person Singular: does not / doesn't, danach Grundform eat."
    },
    {
      "type": "mc",
      "frage": "Yesterday I ___ a new film.",
      "optionen": [
        "watch",
        "watched",
        "watching"
      ],
      "richtig": 1,
      "erklaerung": "'Yesterday' verlangt Simple Past: watched (regelmäßiges Verb + -ed)."
    },
    {
      "type": "gap",
      "frage": "He ___ to the radio every evening. (listen)",
      "richtig": [
        "listens"
      ],
      "erklaerung": "3. Person Singular + -s: listens."
    },
    {
      "type": "transform",
      "frage": "Bilde die Verneinung: 'I like tea.'",
      "richtig": [
        "I don't like tea.",
        "I do not like tea.",
        "I don't like tea",
        "I do not like tea"
      ],
      "erklaerung": "Verneinung im Simple Present mit do not / don't + Grundform."
    },
    {
      "type": "mc",
      "frage": "Last summer we ___ to Italy.",
      "optionen": [
        "go",
        "went",
        "goed"
      ],
      "richtig": 1,
      "erklaerung": "go ist unregelmäßig; Simple Past ist went."
    },
    {
      "type": "gap",
      "frage": "The baby ___ now. (cry)",
      "richtig": [
        "is crying"
      ],
      "erklaerung": "'now' verlangt Present Continuous: is crying. Konsonant+y bleibt erhalten vor -ing."
    },
    {
      "type": "mc",
      "frage": "She ___ her keys last night.",
      "optionen": [
        "lose",
        "lost",
        "losed"
      ],
      "richtig": 1,
      "erklaerung": "lose ist unregelmäßig; Simple Past ist lost."
    },
    {
      "type": "gap",
      "frage": "They ___ football when it started to rain. (play)",
      "richtig": [
        "were playing"
      ],
      "erklaerung": "Past Continuous für eine laufende Handlung in der Vergangenheit: were playing."
    },
    {
      "type": "transform",
      "frage": "Setze ins Simple Past: 'He buys a car.'",
      "richtig": [
        "He bought a car.",
        "He bought a car"
      ],
      "erklaerung": "buy ist unregelmäßig; Simple Past ist bought."
    },
    {
      "type": "mc",
      "frage": "I ___ never ___ sushi before.",
      "optionen": [
        "have / eaten",
        "has / eaten",
        "have / ate"
      ],
      "richtig": 0,
      "erklaerung": "Present Perfect mit I: have + Partizip Perfekt eaten."
    },
    {
      "type": "gap",
      "frage": "She ___ already ___ her work. (finish)",
      "richtig": [
        "has finished"
      ],
      "erklaerung": "Present Perfect 3. Person Singular: has + finished."
    },
    {
      "type": "mc",
      "frage": "How long ___ you ___ here?",
      "optionen": [
        "have / lived",
        "has / lived",
        "do / live"
      ],
      "richtig": 0,
      "erklaerung": "Present Perfect mit you: have + lived."
    },
    {
      "type": "transform",
      "frage": "Setze ins Present Perfect: 'They write a letter.'",
      "richtig": [
        "They have written a letter.",
        "They have written a letter"
      ],
      "erklaerung": "Present Perfect: have + Partizip written (unregelmäßig)."
    },
    {
      "type": "gap",
      "frage": "By the time we arrived, the train ___ already ___. (leave)",
      "richtig": [
        "had left"
      ],
      "erklaerung": "Past Perfect für die frühere von zwei Vergangenheiten: had + left."
    },
    {
      "type": "mc",
      "frage": "Tomorrow I ___ my grandmother.",
      "optionen": [
        "visit",
        "will visit",
        "visited"
      ],
      "richtig": 1,
      "erklaerung": "Zukunft mit will: will visit."
    },
    {
      "type": "gap",
      "frage": "Look at those clouds! It ___ rain. (Vorhersage aufgrund von Anzeichen, going to)",
      "richtig": [
        "is going to"
      ],
      "erklaerung": "going to für Vorhersagen mit sichtbaren Anzeichen: is going to rain."
    },
    {
      "type": "transform",
      "frage": "Bilde die Frage: 'She has seen the film.'",
      "richtig": [
        "Has she seen the film?",
        "Has she seen the film"
      ],
      "erklaerung": "Im Present Perfect rückt das Hilfsverb has vor das Subjekt."
    },
    {
      "type": "mc",
      "frage": "If it rains tomorrow, we ___ at home.",
      "optionen": [
        "stay",
        "will stay",
        "stayed"
      ],
      "richtig": 1,
      "erklaerung": "Conditional Typ 1: if + Present, Hauptsatz mit will: will stay."
    },
    {
      "type": "gap",
      "frage": "I wish I ___ more time. (have, irrealer Wunsch in der Gegenwart)",
      "richtig": [
        "had"
      ],
      "erklaerung": "Nach 'I wish' für einen irrealen Gegenwartswunsch steht der Simple Past: had."
    },
    {
      "type": "transform",
      "frage": "Setze ins Passiv (Simple Present): 'Someone cleans the office every day.'",
      "richtig": [
        "The office is cleaned every day.",
        "The office is cleaned every day"
      ],
      "erklaerung": "Passiv: is/are + Partizip Perfekt; the office is cleaned."
    },
    {
      "type": "mc",
      "frage": "She has been ___ English for five years.",
      "optionen": [
        "study",
        "studied",
        "studying"
      ],
      "richtig": 2,
      "erklaerung": "Present Perfect Continuous: has been + Verb-ing (studying)."
    },
    {
      "type": "gap",
      "frage": "If I ___ rich, I would travel the world. (be, Conditional Typ 2)",
      "richtig": [
        "were",
        "was"
      ],
      "erklaerung": "Conditional Typ 2: if + Simple Past. Bei 'I' wird formell 'were' verwendet, umgangssprachlich auch 'was'."
    },
    {
      "type": "transform",
      "frage": "Setze ins Past Perfect Continuous: 'They wait for two hours.' (Beginne mit 'They had ...')",
      "richtig": [
        "They had been waiting for two hours.",
        "They had been waiting for two hours"
      ],
      "erklaerung": "Past Perfect Continuous: had been + Verb-ing (waiting)."
    }
  ]
};
