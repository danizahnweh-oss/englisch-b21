/* Thema 28: Past perfect – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Past perfect",
  "intro": "Das Past Perfect (had + Partizip Perfekt) beschreibt die Vorvergangenheit: eine Handlung, die vor einer anderen Handlung in der Vergangenheit abgeschlossen war.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Das <b>Past Perfect</b> bildest du mit <b>had</b> + <b>Past Participle</b> (3. Form): <span class=\"ex\">She had finished her work before noon.</span></li><li>Es zeigt, dass etwas <b>vor</b> einem anderen Ereignis in der Vergangenheit passiert ist: <span class=\"ex\">When we arrived, the train had already left.</span></li><li>Die Kurzform ist <b>'d</b> (had); Verneinung mit <b>hadn't</b> / <b>had not</b>: <span class=\"ex\">I hadn't seen that film before.</span></li><li>Oft zusammen mit <b>before</b>, <b>after</b>, <b>already</b>, <b>just</b>, <b>by the time</b> und <b>when</b>: <span class=\"ex\">After he had eaten, he went out.</span></li><li>Frage: <b>Had</b> + Subjekt + Partizip: <span class=\"ex\">Had you ever been there before?</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "When I got to the station, the train ___ already left.",
      "optionen": [
        "had",
        "has",
        "have"
      ],
      "richtig": 0,
      "erklaerung": "Past Perfect wird immer mit 'had' gebildet, egal welches Subjekt. Der Zug war vor meiner Ankunft abgefahren."
    },
    {
      "type": "mc",
      "frage": "She felt nervous because she ___ never flown before.",
      "optionen": [
        "has",
        "had",
        "was"
      ],
      "richtig": 1,
      "erklaerung": "Die Handlung (nie geflogen) liegt vor dem Gefühl in der Vergangenheit, also Past Perfect: 'had flown'."
    },
    {
      "type": "mc",
      "frage": "By the time the film started, we ___ our popcorn.",
      "optionen": [
        "had bought",
        "have bought",
        "buy"
      ],
      "richtig": 0,
      "erklaerung": "'By the time' in der Vergangenheit verlangt Past Perfect für die frühere Handlung: 'had bought'."
    },
    {
      "type": "gap",
      "frage": "After he ___ (finish) his homework, he watched TV.",
      "richtig": [
        "had finished",
        "'d finished"
      ],
      "erklaerung": "Past Perfect: 'had' + Partizip 'finished'. Die Hausaufgaben waren vor dem Fernsehen fertig."
    },
    {
      "type": "gap",
      "frage": "They ___ (not / see) each other for ten years before they met again.",
      "richtig": [
        "had not seen",
        "hadn't seen"
      ],
      "erklaerung": "Verneintes Past Perfect: 'had not / hadn't' + 'seen' (3. Form von 'see')."
    },
    {
      "type": "gap",
      "frage": "When she arrived home, someone ___ (break) into her flat.",
      "richtig": [
        "had broken",
        "'d broken"
      ],
      "erklaerung": "Der Einbruch war vor ihrer Ankunft passiert, daher Past Perfect 'had broken' (3. Form von 'break')."
    },
    {
      "type": "gap",
      "frage": "___ you ever ___ (eat) sushi before you moved to Japan?",
      "richtig": [
        "Had ... eaten",
        "Had eaten",
        "had eaten"
      ],
      "erklaerung": "Frage im Past Perfect: 'Had' + Subjekt + Partizip 'eaten' (3. Form von 'eat')."
    },
    {
      "type": "transform",
      "frage": "Bilde aus den zwei Sätzen einen Satz mit Past Perfect (frühere Handlung zuerst, mit 'before'): 'I locked the door. Then I left the house.'",
      "richtig": [
        "I had locked the door before I left the house.",
        "I'd locked the door before I left the house.",
        "Before I left the house, I had locked the door.",
        "Before I left the house, I'd locked the door."
      ],
      "erklaerung": "Die frühere Handlung (abschließen) steht im Past Perfect, die spätere im Simple Past: 'had locked ... before ... left'."
    },
    {
      "type": "transform",
      "frage": "Setze den Satz ins Past Perfect: 'She writes the email.'",
      "richtig": [
        "She had written the email.",
        "She'd written the email."
      ],
      "erklaerung": "Past Perfect: 'had' + Partizip 'written' (3. Form von 'write')."
    },
    {
      "type": "transform",
      "frage": "Verneine diesen Satz: 'They had finished dinner.'",
      "richtig": [
        "They had not finished dinner.",
        "They hadn't finished dinner."
      ],
      "erklaerung": "Verneinung im Past Perfect mit 'had not / hadn't' vor dem Partizip 'finished'."
    },
    {
      "type": "mc",
      "frage": "We were hungry because we ___ all day.",
      "optionen": [
        "hadn't eaten",
        "didn't eat",
        "haven't eaten"
      ],
      "richtig": 0,
      "erklaerung": "Der Grund für den Hunger liegt vor dem Vergangenheitsmoment, daher verneintes Past Perfect 'hadn't eaten'."
    }
  ]
};
