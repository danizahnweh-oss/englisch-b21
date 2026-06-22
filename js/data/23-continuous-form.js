/* Thema 23: Continuous form – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Continuous form",
  "intro": "Die Continuous-Form (auch Progressive- oder -ing-Form) beschreibt Handlungen, die gerade ablaufen oder vorübergehend sind.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Die <b>Continuous-Form</b> bildet man mit einer Form von <b>be</b> + Verb + <b>-ing</b>: <span class=\"ex\">She is reading a book.</span></li><li><b>Present Continuous</b> für etwas, das gerade jetzt passiert: <span class=\"ex\">They are playing football now.</span></li><li><b>Past Continuous</b> (was/were + -ing) für eine länger andauernde Handlung in der Vergangenheit: <span class=\"ex\">I was sleeping when he called.</span></li><li>Bei Signalwörtern wie <b>now</b>, <b>at the moment</b> oder <b>Look!</b> steht oft die Continuous-Form: <span class=\"ex\">Look! It is raining.</span></li><li><b>State verbs</b> (z. B. <b>know</b>, <b>like</b>, <b>want</b>) benutzt man normalerweise nicht in der Continuous-Form: <span class=\"ex\">I know the answer.</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Choose the correct continuous form: \"Look! It ___ outside.\"",
      "optionen": [
        "is raining",
        "rains",
        "raining"
      ],
      "richtig": 0,
      "erklaerung": "Present Continuous: 'is' + Verb+ing fuer etwas, das gerade jetzt passiert."
    },
    {
      "type": "gap",
      "frage": "Complete the present continuous: \"She ___ (read) a book right now.\"",
      "richtig": [
        "is reading"
      ],
      "erklaerung": "Present Continuous mit 'is' + reading fuer eine Handlung im Moment."
    },
    {
      "type": "mc",
      "frage": "Which sentence is in the present continuous?",
      "optionen": [
        "They are playing football.",
        "They play football.",
        "They played football."
      ],
      "richtig": 0,
      "erklaerung": "'are playing' = be-Form + ing = Present Continuous."
    },
    {
      "type": "gap",
      "frage": "Fill the gap: \"I ___ (listen) to music at the moment.\"",
      "richtig": [
        "am listening",
        "'m listening"
      ],
      "erklaerung": "Mit 'I' steht 'am': I am listening."
    },
    {
      "type": "transform",
      "frage": "Put into the present continuous: \"We eat lunch.\" (now)",
      "richtig": [
        "We are eating lunch.",
        "We're eating lunch."
      ],
      "erklaerung": "'are' + eating beschreibt die Handlung jetzt."
    },
    {
      "type": "gap",
      "frage": "Complete: \"The children ___ (play) in the garden now.\"",
      "richtig": [
        "are playing"
      ],
      "erklaerung": "Plural-Subjekt 'children' braucht 'are' + playing."
    },
    {
      "type": "mc",
      "frage": "Choose the correct spelling: \"He is ___ his bike.\"",
      "optionen": [
        "riding",
        "rideing",
        "ridding"
      ],
      "richtig": 0,
      "erklaerung": "Stummes -e faellt vor -ing weg: ride -> riding."
    },
    {
      "type": "gap",
      "frage": "Spelling rule: \"They are ___ (swim) in the lake.\"",
      "richtig": [
        "swimming"
      ],
      "erklaerung": "Kurzer Vokal + Konsonant: m wird verdoppelt -> swimming."
    },
    {
      "type": "transform",
      "frage": "Make a negative present continuous sentence: \"He is sleeping.\"",
      "richtig": [
        "He is not sleeping.",
        "He isn't sleeping.",
        "He's not sleeping."
      ],
      "erklaerung": "Verneinung mit 'not' nach der be-Form."
    },
    {
      "type": "mc",
      "frage": "Choose the correct question: \"___ you working today?\"",
      "optionen": [
        "Are",
        "Do",
        "Is"
      ],
      "richtig": 0,
      "erklaerung": "Frage im Present Continuous: be-Form vor das Subjekt: Are you working?"
    },
    {
      "type": "gap",
      "frage": "Make a question: \"___ she ___ (cook) dinner now?\" (two words go in the gaps)",
      "richtig": [
        "Is / cooking",
        "Is cooking"
      ],
      "erklaerung": "Frage: Is + Subjekt + Verb+ing -> Is she cooking?"
    },
    {
      "type": "gap",
      "frage": "Spelling: \"I am ___ (lie) on the sofa.\"",
      "richtig": [
        "lying"
      ],
      "erklaerung": "Endung -ie wird zu -y vor -ing: lie -> lying."
    },
    {
      "type": "mc",
      "frage": "Signal words for the present continuous are:",
      "optionen": [
        "now, at the moment, look!",
        "every day, usually, often",
        "yesterday, last week, ago"
      ],
      "richtig": 0,
      "erklaerung": "'now', 'at the moment', 'Look!' deuten auf das Present Continuous."
    },
    {
      "type": "transform",
      "frage": "Rewrite in the present continuous: \"You watch TV.\" (right now)",
      "richtig": [
        "You are watching TV.",
        "You're watching TV."
      ],
      "erklaerung": "'are' + watching fuer die Handlung im Moment."
    },
    {
      "type": "gap",
      "frage": "Past continuous: \"At 8 o'clock yesterday I ___ (have) breakfast.\"",
      "richtig": [
        "was having"
      ],
      "erklaerung": "Past Continuous: was/were + ing fuer Handlung zu einem Zeitpunkt in der Vergangenheit."
    },
    {
      "type": "mc",
      "frage": "Choose the correct past continuous: \"They ___ TV when I arrived.\"",
      "optionen": [
        "were watching",
        "was watching",
        "are watching"
      ],
      "richtig": 0,
      "erklaerung": "Plural 'they' braucht 'were' + watching."
    },
    {
      "type": "gap",
      "frage": "Complete (past continuous): \"While she ___ (drive), it started to snow.\"",
      "richtig": [
        "was driving"
      ],
      "erklaerung": "Singular 'she' -> was driving; laengere Handlung im Hintergrund."
    },
    {
      "type": "transform",
      "frage": "Combine with past continuous and simple past: \"I cook. / The phone rings.\" Use 'when'.",
      "richtig": [
        "I was cooking when the phone rang.",
        "I was cooking when the phone rang"
      ],
      "erklaerung": "Laengere Handlung (was cooking) wird durch ein Ereignis (rang) unterbrochen."
    },
    {
      "type": "mc",
      "frage": "Which verb is normally NOT used in the continuous form?",
      "optionen": [
        "know",
        "run",
        "build"
      ],
      "richtig": 0,
      "erklaerung": "State verbs wie 'know' stehen normalerweise nicht im Continuous."
    },
    {
      "type": "gap",
      "frage": "State verb or continuous? \"I ___ (understand) the lesson now.\"",
      "richtig": [
        "understand"
      ],
      "erklaerung": "'understand' ist ein Zustandsverb und bleibt im Simple Present, auch bei 'now'."
    },
    {
      "type": "mc",
      "frage": "Future arrangement: \"We ___ to London tomorrow. (fixed plan)\"",
      "optionen": [
        "are flying",
        "fly",
        "were flying"
      ],
      "richtig": 0,
      "erklaerung": "Present Continuous kann feste, geplante Zukunftsarrangements ausdruecken."
    },
    {
      "type": "gap",
      "frage": "Future plan (present continuous): \"They ___ (meet) their friends this evening.\"",
      "richtig": [
        "are meeting"
      ],
      "erklaerung": "Festes Arrangement in der Zukunft -> Present Continuous 'are meeting'."
    },
    {
      "type": "transform",
      "frage": "Make the past continuous negative: \"She was working late.\"",
      "richtig": [
        "She was not working late.",
        "She wasn't working late."
      ],
      "erklaerung": "Verneinung mit 'not' nach 'was': was not / wasn't working."
    },
    {
      "type": "gap",
      "frage": "Past continuous question: \"What ___ you ___ (do) at midnight?\"",
      "richtig": [
        "were / doing",
        "were doing"
      ],
      "erklaerung": "Frage im Past Continuous: were + Subjekt + Verb+ing -> were you doing."
    },
    {
      "type": "mc",
      "frage": "Choose the present perfect continuous: \"I ___ for two hours.\"",
      "optionen": [
        "have been waiting",
        "have waited",
        "am waiting"
      ],
      "richtig": 0,
      "erklaerung": "Present Perfect Continuous: have/has been + ing betont die Dauer bis jetzt."
    },
    {
      "type": "gap",
      "frage": "Present perfect continuous: \"She ___ (study) English since 2019.\"",
      "richtig": [
        "has been studying"
      ],
      "erklaerung": "Singular -> has been + studying; 'since' betont die andauernde Dauer."
    },
    {
      "type": "transform",
      "frage": "Rewrite using the present perfect continuous: \"It started raining three hours ago and it is still raining.\"",
      "richtig": [
        "It has been raining for three hours.",
        "It's been raining for three hours."
      ],
      "erklaerung": "Has/have been + ing mit 'for' betont die fortlaufende Dauer."
    },
    {
      "type": "mc",
      "frage": "Which sentence is correct?",
      "optionen": [
        "They have been living here for ten years.",
        "They are living here for ten years.",
        "They living here for ten years."
      ],
      "richtig": 0,
      "erklaerung": "Mit 'for + Zeitraum' und Bezug bis heute steht das Present Perfect Continuous."
    },
    {
      "type": "gap",
      "frage": "Future continuous: \"This time tomorrow I ___ (lie) on the beach.\"",
      "richtig": [
        "will be lying",
        "'ll be lying"
      ],
      "erklaerung": "Future Continuous: will be + ing fuer Handlung zu einem Zeitpunkt in der Zukunft."
    },
    {
      "type": "transform",
      "frage": "Put into the future continuous: \"At 9 p.m. we (drive) home.\"",
      "richtig": [
        "At 9 p.m. we will be driving home.",
        "At 9 p.m. we'll be driving home."
      ],
      "erklaerung": "will be + driving beschreibt eine laufende Handlung zu einem Zukunftszeitpunkt."
    },
    {
      "type": "gap",
      "frage": "Past perfect continuous: \"He was tired because he ___ (work) all day.\"",
      "richtig": [
        "had been working"
      ],
      "erklaerung": "Past Perfect Continuous: had been + ing fuer eine andauernde Handlung vor einem Vergangenheitspunkt."
    }
  ]
};
