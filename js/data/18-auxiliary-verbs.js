/* Thema 18: Auxiliary verbs – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Auxiliary verbs",
  "intro": "Hilfsverben (auxiliary verbs) wie be, do und have helfen dabei, Zeiten, Fragen, Verneinungen und Kurzantworten im Englischen zu bilden.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Die wichtigsten <b>auxiliary verbs</b> sind <b>be</b>, <b>do</b> und <b>have</b>. Sie tragen oft keine eigene Bedeutung, sondern bilden Strukturen: <span class=\"ex\">She is working. / Do you know him? / They have left.</span></li><li><b>do/does/did</b> brauchst du für Fragen und Verneinungen im Present und Past Simple: <span class=\"ex\">Does he live here? / I don't agree. / We didn't go.</span></li><li><b>be</b> bildet Verlaufsformen und das Passiv: <span class=\"ex\">I am reading. / The car was repaired.</span></li><li><b>have/has/had</b> bildet die <b>Perfect</b>-Zeiten: <span class=\"ex\">She has finished. / They had already eaten.</span></li><li>In <b>Kurzantworten</b> und <b>question tags</b> wiederholst du nur das Hilfsverb: <span class=\"ex\">Yes, I do. / You're tired, aren't you?</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Choose the correct auxiliary: \"___ you like coffee?\"",
      "optionen": [
        "Do",
        "Are",
        "Have"
      ],
      "richtig": 0,
      "erklaerung": "Bei Vollverben (like) im Present Simple bildet man die Frage mit do/does. Bei you steht do."
    },
    {
      "type": "mc",
      "frage": "Choose the correct auxiliary: \"She ___ finished her homework yet.\"",
      "optionen": [
        "isn't",
        "doesn't",
        "hasn't"
      ],
      "richtig": 2,
      "erklaerung": "\"yet\" und \"finished\" (Present Perfect) verlangen das Hilfsverb have/has: she hasn't finished."
    },
    {
      "type": "mc",
      "frage": "Choose the correct auxiliary: \"The windows ___ cleaned every week.\" (passive)",
      "optionen": [
        "are",
        "do",
        "have"
      ],
      "richtig": 0,
      "erklaerung": "Das Passiv wird mit be + Partizip gebildet: The windows are cleaned."
    },
    {
      "type": "gap",
      "frage": "Fill in the gap (negative): \"I ___ know the answer.\" (Present Simple, I)",
      "richtig": [
        "don't",
        "do not"
      ],
      "erklaerung": "Verneinung im Present Simple mit I bildet man mit do not / don't."
    },
    {
      "type": "gap",
      "frage": "Fill in the gap: \"___ he speak French?\" (Present Simple question, he)",
      "richtig": [
        "Does",
        "does"
      ],
      "erklaerung": "In der 3. Person Singular (he) lautet das Hilfsverb in der Frage does."
    },
    {
      "type": "gap",
      "frage": "Fill in the gap (Present Perfect): \"They ___ already left when I arrived.\"",
      "richtig": [
        "had"
      ],
      "erklaerung": "\"when I arrived\" (Past) + already verlangt das Past Perfect: had + left."
    },
    {
      "type": "gap",
      "frage": "Fill in the gap (short answer): \"Are you coming with us?\" – \"Yes, I ___.\"",
      "richtig": [
        "am"
      ],
      "erklaerung": "In Kurzantworten wiederholt man das Hilfsverb der Frage. Zu \"Are you...?\" passt \"Yes, I am.\""
    },
    {
      "type": "gap",
      "frage": "Fill in the gap (question tag): \"You like pizza, ___ you?\"",
      "richtig": [
        "don't"
      ],
      "erklaerung": "Nach positivem Hauptsatz mit Vollverb (like) folgt ein negativer Tag mit don't: don't you?"
    },
    {
      "type": "transform",
      "frage": "Make it a question: \"He works in a bank.\"",
      "richtig": [
        "Does he work in a bank?",
        "Does he work in a bank"
      ],
      "erklaerung": "Frage im Present Simple, 3. Person: Does + Subjekt + Grundform. Das -s wandert auf does."
    },
    {
      "type": "transform",
      "frage": "Make it negative: \"They have seen the film.\"",
      "richtig": [
        "They haven't seen the film.",
        "They have not seen the film.",
        "They haven't seen the film",
        "They have not seen the film"
      ],
      "erklaerung": "Im Present Perfect wird mit have/has + not verneint: They haven't seen the film."
    },
    {
      "type": "transform",
      "frage": "Make it a question: \"She was reading a book.\"",
      "richtig": [
        "Was she reading a book?",
        "Was she reading a book"
      ],
      "erklaerung": "In der Past Continuous-Frage stellt man das Hilfsverb was vor das Subjekt: Was she reading...?"
    }
  ]
};
