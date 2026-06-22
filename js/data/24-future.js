/* Thema 24: Future – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Future",
  "intro": "Im Englischen gibt es mehrere Wege, über die Zukunft zu sprechen: will, going to, das Present Continuous und das Present Simple.",
  "explain": "<h2>Kurz erklärt</h2><ul><li><b>will</b> nutzt du für spontane Entscheidungen, Vorhersagen und Versprechen: <span class=\"ex\">I think it will rain tomorrow.</span></li><li><b>going to</b> nutzt du für Pläne/Absichten und für Vorhersagen mit sichtbaren Anzeichen: <span class=\"ex\">We are going to visit Rome next summer.</span></li><li>Das <b>Present Continuous</b> beschreibt feste, geplante Verabredungen: <span class=\"ex\">I am meeting Tom at six tonight.</span></li><li>Das <b>Present Simple</b> nutzt du für Fahrpläne und feste Zeitpläne: <span class=\"ex\">The train leaves at 8 a.m.</span></li><li>Nach <b>when, if, before, after, as soon as</b> steht das Present Simple, nicht will: <span class=\"ex\">I will call you when I arrive.</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Look at those dark clouds! It ___ rain.",
      "optionen": [
        "is going to",
        "will",
        "rains"
      ],
      "richtig": 0,
      "erklaerung": "Bei einer Vorhersage mit sichtbaren Anzeichen (dunkle Wolken) benutzt man 'going to'."
    },
    {
      "type": "mc",
      "frage": "The phone is ringing. — OK, I ___ answer it.",
      "optionen": [
        "am going to",
        "will",
        "answer"
      ],
      "richtig": 1,
      "erklaerung": "Eine spontane Entscheidung im Moment des Sprechens wird mit 'will' ausgedrückt."
    },
    {
      "type": "mc",
      "frage": "Our plane ___ at 7:45 tomorrow morning.",
      "optionen": [
        "will leave",
        "is leaving",
        "leaves"
      ],
      "richtig": 2,
      "erklaerung": "Für feste Fahr- und Flugpläne benutzt man das Present Simple ('leaves')."
    },
    {
      "type": "gap",
      "frage": "I'm sure everything ___ (be) fine. Don't worry.",
      "richtig": [
        "will be",
        "'ll be"
      ],
      "erklaerung": "Eine Vorhersage/Meinung ohne konkrete Anzeichen ('I'm sure') wird mit 'will' gebildet."
    },
    {
      "type": "gap",
      "frage": "We ___ (visit) my grandparents next weekend. We already booked the train.",
      "richtig": [
        "are going to visit",
        "'re going to visit",
        "are visiting",
        "'re visiting"
      ],
      "erklaerung": "Ein vorher gefasster Plan wird mit 'going to' oder dem Present Continuous ausgedrückt."
    },
    {
      "type": "gap",
      "frage": "Call me as soon as you ___ (get) home.",
      "richtig": [
        "get"
      ],
      "erklaerung": "Nach 'as soon as' steht das Present Simple, auch wenn die Zukunft gemeint ist – kein 'will'."
    },
    {
      "type": "gap",
      "frage": "I ___ (not / forget) your birthday this year, I promise!",
      "richtig": [
        "will not forget",
        "won't forget"
      ],
      "erklaerung": "Ein Versprechen wird mit 'will' gebildet; die verneinte Form ist 'will not' bzw. 'won't'."
    },
    {
      "type": "transform",
      "frage": "Forme den Satz zu einem geplanten Vorhaben mit 'going to' um: 'We intend to buy a new car.'",
      "richtig": [
        "We are going to buy a new car.",
        "We're going to buy a new car."
      ],
      "erklaerung": "Eine Absicht/ein Plan wird mit 'be going to + Infinitiv' ausgedrückt."
    },
    {
      "type": "transform",
      "frage": "Bilde eine Frage mit 'will': 'you / help / me / with this exercise / ?'",
      "richtig": [
        "Will you help me with this exercise?"
      ],
      "erklaerung": "Fragen mit 'will' werden gebildet: Will + Subjekt + Infinitiv ohne 'to'."
    },
    {
      "type": "transform",
      "frage": "Forme zu einer festen Verabredung im Present Continuous um: 'I have an appointment with the dentist at 4 p.m. tomorrow.'",
      "richtig": [
        "I am seeing the dentist at 4 p.m. tomorrow.",
        "I'm seeing the dentist at 4 p.m. tomorrow.",
        "I am meeting the dentist at 4 p.m. tomorrow.",
        "I'm meeting the dentist at 4 p.m. tomorrow."
      ],
      "erklaerung": "Feste, vereinbarte Termine drückt man im Englischen oft mit dem Present Continuous aus."
    },
    {
      "type": "mc",
      "frage": "If it ___ tomorrow, we will stay at home.",
      "optionen": [
        "will rain",
        "rains",
        "is going to rain"
      ],
      "richtig": 1,
      "erklaerung": "Nach 'if' steht im Bedingungssatz das Present Simple, nicht 'will'."
    }
  ]
};
