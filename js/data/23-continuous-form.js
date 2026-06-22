/* Thema 23: Continuous form – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Continuous form",
  "intro": "Die Continuous-Form (auch Progressive- oder -ing-Form) beschreibt Handlungen, die gerade ablaufen oder vorübergehend sind.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Die <b>Continuous-Form</b> bildet man mit einer Form von <b>be</b> + Verb + <b>-ing</b>: <span class=\"ex\">She is reading a book.</span></li><li><b>Present Continuous</b> für etwas, das gerade jetzt passiert: <span class=\"ex\">They are playing football now.</span></li><li><b>Past Continuous</b> (was/were + -ing) für eine länger andauernde Handlung in der Vergangenheit: <span class=\"ex\">I was sleeping when he called.</span></li><li>Bei Signalwörtern wie <b>now</b>, <b>at the moment</b> oder <b>Look!</b> steht oft die Continuous-Form: <span class=\"ex\">Look! It is raining.</span></li><li><b>State verbs</b> (z. B. <b>know</b>, <b>like</b>, <b>want</b>) benutzt man normalerweise nicht in der Continuous-Form: <span class=\"ex\">I know the answer.</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Look! The children ___ in the garden.",
      "optionen": [
        "are playing",
        "play",
        "plays"
      ],
      "richtig": 0,
      "erklaerung": "\"Look!\" zeigt eine Handlung, die gerade jetzt passiert, daher Present Continuous: are + playing."
    },
    {
      "type": "mc",
      "frage": "While I ___ dinner, the phone rang.",
      "optionen": [
        "cooked",
        "was cooking",
        "am cooking"
      ],
      "richtig": 1,
      "erklaerung": "Eine länger andauernde Handlung in der Vergangenheit, die von einer anderen unterbrochen wird, steht im Past Continuous: was cooking."
    },
    {
      "type": "mc",
      "frage": "Which sentence is correct?",
      "optionen": [
        "I am knowing the answer.",
        "I know the answer.",
        "I am know the answer."
      ],
      "richtig": 1,
      "erklaerung": "\"know\" ist ein state verb und wird nicht in der Continuous-Form verwendet: I know the answer."
    },
    {
      "type": "gap",
      "frage": "Be quiet, please. The baby ___ (sleep) at the moment.",
      "richtig": [
        "is sleeping"
      ],
      "erklaerung": "\"at the moment\" verlangt das Present Continuous: is + sleeping."
    },
    {
      "type": "gap",
      "frage": "What ___ you ___ (do) right now? (Frage im Present Continuous)",
      "richtig": [
        "are doing"
      ],
      "erklaerung": "Frage im Present Continuous: are + Subjekt + doing. Die beiden Lücken ergeben \"are ... doing\"."
    },
    {
      "type": "gap",
      "frage": "Yesterday at 8 p.m. we ___ (watch) a film.",
      "richtig": [
        "were watching"
      ],
      "erklaerung": "Eine Handlung, die zu einem bestimmten Zeitpunkt in der Vergangenheit gerade ablief, steht im Past Continuous: were watching."
    },
    {
      "type": "gap",
      "frage": "Negativ: She ___ (not / listen) to me now.",
      "richtig": [
        "is not listening",
        "isn't listening"
      ],
      "erklaerung": "Verneinung im Present Continuous: is not / isn't + listening."
    },
    {
      "type": "transform",
      "frage": "Forme in das Present Continuous um: \"He writes a letter.\"",
      "richtig": [
        "He is writing a letter.",
        "He's writing a letter."
      ],
      "erklaerung": "Present Continuous: is + writing. Aus \"writes\" wird \"is writing\"."
    },
    {
      "type": "transform",
      "frage": "Forme in das Past Continuous um: \"They walked in the park.\"",
      "richtig": [
        "They were walking in the park."
      ],
      "erklaerung": "Past Continuous: were + walking. Aus \"walked\" wird \"were walking\"."
    },
    {
      "type": "transform",
      "frage": "Bilde die Verneinung im Present Continuous: \"I am reading a book.\"",
      "richtig": [
        "I am not reading a book.",
        "I'm not reading a book."
      ],
      "erklaerung": "Verneinung mit am not: I am not / I'm not reading a book."
    }
  ]
};
