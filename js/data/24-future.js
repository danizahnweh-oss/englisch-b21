/* Thema 24: Future – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Future",
  "intro": "Im Englischen gibt es mehrere Wege, über die Zukunft zu sprechen: will, going to, das Present Continuous und das Present Simple.",
  "explain": "<h2>Kurz erklärt</h2><ul><li><b>will</b> nutzt du für spontane Entscheidungen, Vorhersagen und Versprechen: <span class=\"ex\">I think it will rain tomorrow.</span></li><li><b>going to</b> nutzt du für Pläne/Absichten und für Vorhersagen mit sichtbaren Anzeichen: <span class=\"ex\">We are going to visit Rome next summer.</span></li><li>Das <b>Present Continuous</b> beschreibt feste, geplante Verabredungen: <span class=\"ex\">I am meeting Tom at six tonight.</span></li><li>Das <b>Present Simple</b> nutzt du für Fahrpläne und feste Zeitpläne: <span class=\"ex\">The train leaves at 8 a.m.</span></li><li>Nach <b>when, if, before, after, as soon as</b> steht das Present Simple, nicht will: <span class=\"ex\">I will call you when I arrive.</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Choose the correct future form: \"I think it ___ rain tomorrow.\"",
      "optionen": [
        "will",
        "am going",
        "will to"
      ],
      "richtig": 0,
      "erklaerung": "Spontane Vorhersage/Vermutung mit 'will' + Infinitiv ohne 'to'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct form: \"Look at those dark clouds! It ___ rain.\"",
      "optionen": [
        "will",
        "is going to",
        "goes to"
      ],
      "richtig": 1,
      "erklaerung": "Vorhersage aufgrund sichtbarer Anzeichen: 'going to'."
    },
    {
      "type": "gap",
      "frage": "Spontaneous decision: \"The phone is ringing. I ___ answer it.\" (use 'will')",
      "richtig": [
        "will",
        "'ll"
      ],
      "erklaerung": "Spontane Entscheidung im Moment des Sprechens mit 'will'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct form: \"We ___ a party next Saturday. Everything is already planned.\"",
      "optionen": [
        "will have",
        "are having",
        "have"
      ],
      "richtig": 1,
      "erklaerung": "Feste, geplante Verabredung: present continuous für die Zukunft."
    },
    {
      "type": "gap",
      "frage": "Plans/intentions: \"They ___ ___ (going to) buy a new car next month.\"",
      "richtig": [
        "are going to",
        "'re going to"
      ],
      "erklaerung": "Geplante Absicht in der Zukunft mit 'be going to'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct form: \"Don't worry, I ___ help you with your homework.\"",
      "optionen": [
        "help",
        "am helping",
        "'ll help"
      ],
      "richtig": 2,
      "erklaerung": "Angebot/Versprechen spontan mit 'will' ('ll help)."
    },
    {
      "type": "gap",
      "frage": "Fill in 'will': \"Maybe she ___ come to the meeting, but I'm not sure.\"",
      "richtig": [
        "will"
      ],
      "erklaerung": "Unsichere Vorhersage mit 'maybe' + 'will'."
    },
    {
      "type": "transform",
      "frage": "Form a future sentence with 'going to': \"I / visit / my grandparents / this weekend.\"",
      "richtig": [
        "I am going to visit my grandparents this weekend.",
        "I'm going to visit my grandparents this weekend."
      ],
      "erklaerung": "Geplante Absicht: 'be going to' + Infinitiv."
    },
    {
      "type": "mc",
      "frage": "Choose the correct form: \"The train ___ at 9:15 tomorrow morning.\"",
      "optionen": [
        "leaves",
        "will leave",
        "is leaving"
      ],
      "richtig": 0,
      "erklaerung": "Fester Fahrplan/Zeitplan: simple present für die Zukunft."
    },
    {
      "type": "gap",
      "frage": "Fill in the negative short form of 'will': \"I promise I ___ tell anyone your secret.\"",
      "richtig": [
        "won't",
        "will not"
      ],
      "erklaerung": "Verneinung von 'will': 'won't' / 'will not'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct question form: \"___ you help me carry these bags?\"",
      "optionen": [
        "Will",
        "Are going to",
        "Do will"
      ],
      "richtig": 0,
      "erklaerung": "Bitte/Frage mit 'Will you ...?'."
    },
    {
      "type": "gap",
      "frage": "Plan visible: \"Watch out! You ___ ___ (going to) drop those plates!\"",
      "richtig": [
        "are going to",
        "'re going to"
      ],
      "erklaerung": "Vorhersage durch sichtbare Anzeichen: 'going to'."
    },
    {
      "type": "transform",
      "frage": "Rewrite using present continuous for an arrangement: \"My flight departs tomorrow at 6 a.m. (I / fly / to Rome / tomorrow)\"",
      "richtig": [
        "I am flying to Rome tomorrow.",
        "I'm flying to Rome tomorrow."
      ],
      "erklaerung": "Feste Verabredung/Arrangement: present continuous."
    },
    {
      "type": "mc",
      "frage": "Choose: \"By the time we arrive, the film ___ already ___.\"",
      "optionen": [
        "will / start",
        "will have / started",
        "is going to / start"
      ],
      "richtig": 1,
      "erklaerung": "Future Perfect: 'will have' + Past Participle für abgeschlossene Handlung bis zu einem Zeitpunkt."
    },
    {
      "type": "gap",
      "frage": "Future continuous: \"This time next week, I ___ ___ (lie) on a beach in Spain.\"",
      "richtig": [
        "will be lying",
        "'ll be lying"
      ],
      "erklaerung": "Future Continuous: 'will be' + -ing für laufende Handlung zu einem Zeitpunkt."
    },
    {
      "type": "mc",
      "frage": "Choose: \"If it rains tomorrow, we ___ at home.\"",
      "optionen": [
        "will stay",
        "stay",
        "are staying"
      ],
      "richtig": 0,
      "erklaerung": "First Conditional: if + present, main clause mit 'will'."
    },
    {
      "type": "gap",
      "frage": "First conditional: \"She ___ pass the exam if she ___ (study) hard.\" (will + verb / present)",
      "richtig": [
        "will pass ... studies"
      ],
      "erklaerung": "If-Satz Typ 1: Hauptsatz 'will pass', Bedingungssatz simple present 'studies'."
    },
    {
      "type": "transform",
      "frage": "Rewrite in the future perfect: \"They finish the project by Friday. (By Friday, they ...)\"",
      "richtig": [
        "By Friday, they will have finished the project.",
        "By Friday, they'll have finished the project."
      ],
      "erklaerung": "Future Perfect mit 'by Friday': 'will have finished'."
    },
    {
      "type": "mc",
      "frage": "Choose the most natural form: \"What ___ you ___ after you graduate?\"",
      "optionen": [
        "will / do",
        "are / do",
        "do / will"
      ],
      "richtig": 0,
      "erklaerung": "Frage über die Zukunft mit 'will you do'."
    },
    {
      "type": "gap",
      "frage": "Future continuous question: \"___ you ___ (use) the car tonight, or can I take it?\"",
      "richtig": [
        "Will ... be using"
      ],
      "erklaerung": "Höfliche Frage über bereits geplante Handlung: Future Continuous 'Will you be using'."
    },
    {
      "type": "mc",
      "frage": "Choose: \"I'm sure everything ___ fine. Don't be nervous.\"",
      "optionen": [
        "is going to be",
        "will be",
        "is being"
      ],
      "richtig": 1,
      "erklaerung": "Subjektive Überzeugung/Meinung ('I'm sure'): 'will'."
    },
    {
      "type": "gap",
      "frage": "Going to (intention): \"He ___ ___ ___ (not / going to / apologise) for what he said.\"",
      "richtig": [
        "is not going to apologise",
        "isn't going to apologise",
        "is not going to apologize",
        "isn't going to apologize"
      ],
      "erklaerung": "Verneinte Absicht: 'is not going to' + Infinitiv (BE/AE Schreibung)."
    },
    {
      "type": "transform",
      "frage": "Make a future continuous sentence: \"At 8 p.m. tonight / we / have dinner.\"",
      "richtig": [
        "At 8 p.m. tonight we will be having dinner.",
        "At 8 p.m. tonight we'll be having dinner."
      ],
      "erklaerung": "Future Continuous für laufende Handlung zu festem Zeitpunkt."
    },
    {
      "type": "mc",
      "frage": "Choose: \"Wait a second, I ___ get my coat and then we can go.\"",
      "optionen": [
        "am going to",
        "will just",
        "just go"
      ],
      "richtig": 1,
      "erklaerung": "Spontane Entscheidung im Moment: 'will' ('I'll just get')."
    },
    {
      "type": "gap",
      "frage": "Time clause (no 'will' after 'when'): \"I'll call you as soon as I ___ (arrive) at the hotel.\"",
      "richtig": [
        "arrive"
      ],
      "erklaerung": "Nach Zeitkonjunktionen (as soon as, when) steht present, nicht 'will'."
    },
    {
      "type": "mc",
      "frage": "Choose: \"This time tomorrow we ___ over the Atlantic Ocean.\"",
      "optionen": [
        "will fly",
        "will be flying",
        "fly"
      ],
      "richtig": 1,
      "erklaerung": "Laufende Handlung zu einem Zeitpunkt: Future Continuous 'will be flying'."
    },
    {
      "type": "transform",
      "frage": "Rewrite using a fixed timetable (present simple): \"The shop will open at 8 tomorrow. (The shop ...)\"",
      "richtig": [
        "The shop opens at 8 tomorrow.",
        "The shop opens at 8 tomorrow morning."
      ],
      "erklaerung": "Fester Zeitplan: simple present 'opens'."
    },
    {
      "type": "mc",
      "frage": "Choose: \"By next year, I ___ here for a decade.\"",
      "optionen": [
        "will work",
        "will have been working",
        "am working"
      ],
      "richtig": 1,
      "erklaerung": "Future Perfect Continuous: 'will have been working' betont Dauer bis zu einem Zukunftspunkt."
    },
    {
      "type": "gap",
      "frage": "Future perfect continuous: \"When she retires, she ___ ___ ___ ___ (teach) for 40 years.\"",
      "richtig": [
        "will have been teaching"
      ],
      "erklaerung": "Future Perfect Continuous betont die Dauer: 'will have been teaching'."
    },
    {
      "type": "transform",
      "frage": "Rewrite as a polite future arrangement using 'be going to': \"Our plan is to renovate the kitchen. (We ...)\"",
      "richtig": [
        "We are going to renovate the kitchen.",
        "We're going to renovate the kitchen."
      ],
      "erklaerung": "Vorab gefasste Absicht/Plan: 'be going to' + Infinitiv."
    },
    {
      "type": "mc",
      "frage": "Choose the correct form: \"Don't phone at 7 — we ___ dinner then. Call later.\"",
      "optionen": [
        "will have",
        "will be having",
        "have had"
      ],
      "richtig": 1,
      "erklaerung": "Laufende Handlung zu einem Zeitpunkt: Future Continuous 'will be having'."
    }
  ]
};
