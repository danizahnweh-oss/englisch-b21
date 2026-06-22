/* Thema 31: Imperative – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Imperative",
  "intro": "Der Imperativ wird im Englischen verwendet, um Aufforderungen, Befehle, Anweisungen oder Bitten auszudrücken.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Der Imperativ nutzt die <b>Grundform des Verbs</b> ohne Subjekt: <span class=\"ex\">Open the window.</span></li><li>Die <b>Verneinung</b> bildet man mit <b>don't</b> + Grundform: <span class=\"ex\">Don't be late.</span></li><li>Für einen <b>höflichen</b> Ton fügt man oft <b>please</b> hinzu: <span class=\"ex\">Please sit down.</span> oder <span class=\"ex\">Sit down, please.</span></li><li>Mit <b>Let's</b> (= let us) macht man einen <b>gemeinsamen Vorschlag</b>: <span class=\"ex\">Let's go home.</span> Verneint: <span class=\"ex\">Let's not argue.</span></li><li>Zur Betonung kann man <b>do</b> voranstellen: <span class=\"ex\">Do come in!</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Choose the correct imperative: \"___ the door, please.\"",
      "optionen": [
        "Close",
        "Closes",
        "To close"
      ],
      "richtig": 0,
      "erklaerung": "Der Imperativ nutzt die Grundform des Verbs ohne 'to' oder '-s'."
    },
    {
      "type": "mc",
      "frage": "Which sentence is a correct negative imperative?",
      "optionen": [
        "Not run!",
        "Don't run!",
        "No run!"
      ],
      "richtig": 1,
      "erklaerung": "Der verneinte Imperativ wird mit 'don't' + Grundform gebildet."
    },
    {
      "type": "gap",
      "frage": "___ down and relax. (sit)",
      "richtig": [
        "Sit"
      ],
      "erklaerung": "Der Imperativ ist einfach die Grundform: 'Sit down.'"
    },
    {
      "type": "mc",
      "frage": "How do you politely ask someone to help? \"___ me, please.\"",
      "optionen": [
        "Help",
        "You help",
        "Helping"
      ],
      "richtig": 0,
      "erklaerung": "Imperativ = Grundform; 'please' macht ihn höflich."
    },
    {
      "type": "gap",
      "frage": "Negation: ___ touch that! It's hot. (do not, Kurzform möglich)",
      "richtig": [
        "Don't",
        "Do not"
      ],
      "erklaerung": "Verneinter Imperativ mit 'Don't' bzw. 'Do not' + Grundform."
    },
    {
      "type": "mc",
      "frage": "Choose the imperative: \"___ quiet during the film.\"",
      "optionen": [
        "Be",
        "Are",
        "Being"
      ],
      "richtig": 0,
      "erklaerung": "Der Imperativ von 'to be' lautet 'Be'."
    },
    {
      "type": "transform",
      "frage": "Mache aus dieser Aussage einen Imperativ: \"You should open the window.\"",
      "richtig": [
        "Open the window.",
        "Open the window"
      ],
      "erklaerung": "Aussage wird zum Imperativ durch die reine Grundform 'Open'."
    },
    {
      "type": "gap",
      "frage": "___ your homework before dinner. (do)",
      "richtig": [
        "Do"
      ],
      "erklaerung": "Imperativ von 'to do' ist 'Do' (hier als Vollverb)."
    },
    {
      "type": "mc",
      "frage": "Which is the correct negative imperative of 'be'?",
      "optionen": [
        "Don't be late.",
        "Not be late.",
        "Be not late."
      ],
      "richtig": 0,
      "erklaerung": "Auch bei 'be' lautet die Verneinung 'Don't be ...'."
    },
    {
      "type": "gap",
      "frage": "___ careful! The floor is wet. (be)",
      "richtig": [
        "Be"
      ],
      "erklaerung": "Imperativ von 'to be' ist 'Be'."
    },
    {
      "type": "transform",
      "frage": "Verneine diesen Imperativ: \"Forget your keys.\"",
      "richtig": [
        "Don't forget your keys.",
        "Do not forget your keys.",
        "Don't forget your keys",
        "Do not forget your keys"
      ],
      "erklaerung": "Verneinung mit 'Don't'/'Do not' vor der Grundform."
    },
    {
      "type": "mc",
      "frage": "Pick the polite request: Which is most polite?",
      "optionen": [
        "Pass the salt.",
        "Pass the salt, please.",
        "Salt!"
      ],
      "richtig": 1,
      "erklaerung": "'please' macht den Imperativ höflicher."
    },
    {
      "type": "gap",
      "frage": "Let's start now. = ___ start now! (Vorschlag mit 'let us', Kurzform möglich)",
      "richtig": [
        "Let's",
        "Let us"
      ],
      "erklaerung": "Vorschläge an eine Gruppe mit 'Let's' (let us) + Grundform."
    },
    {
      "type": "mc",
      "frage": "Choose the correct 'let's' suggestion:",
      "optionen": [
        "Let's to go.",
        "Let's go.",
        "Let's going."
      ],
      "richtig": 1,
      "erklaerung": "Nach 'Let's' folgt die Grundform ohne 'to'."
    },
    {
      "type": "transform",
      "frage": "Forme zum Vorschlag mit 'Let's' um: \"We can watch a movie.\"",
      "richtig": [
        "Let's watch a movie.",
        "Let us watch a movie.",
        "Let's watch a movie",
        "Let us watch a movie"
      ],
      "erklaerung": "'Let's' + Grundform drückt einen gemeinsamen Vorschlag aus."
    },
    {
      "type": "gap",
      "frage": "Negative suggestion: ___ tell anyone our secret. (let us not, Kurzform möglich)",
      "richtig": [
        "Let's not",
        "Let us not"
      ],
      "erklaerung": "Verneinter Vorschlag: 'Let's not' + Grundform."
    },
    {
      "type": "mc",
      "frage": "Which negative 'let's' form is correct?",
      "optionen": [
        "Don't let's go.",
        "Let's not go.",
        "Let's don't go."
      ],
      "richtig": 1,
      "erklaerung": "Standard: 'Let's not + Grundform'."
    },
    {
      "type": "gap",
      "frage": "For emphasis/encouragement: ___ come in, the food is ready! (do)",
      "richtig": [
        "Do"
      ],
      "erklaerung": "Betontes 'Do' + Grundform verstärkt eine freundliche Aufforderung."
    },
    {
      "type": "mc",
      "frage": "Which sentence shows an emphatic (encouraging) imperative?",
      "optionen": [
        "Do sit down!",
        "Sit you down!",
        "You sit down do!"
      ],
      "richtig": 0,
      "erklaerung": "'Do' vor dem Verb betont und ermutigt: 'Do sit down!'"
    },
    {
      "type": "transform",
      "frage": "Schreibe als höfliche Bitte mit 'please' am Anfang: \"Wait here.\"",
      "richtig": [
        "Please wait here.",
        "Please wait here"
      ],
      "erklaerung": "'Please' kann am Satzanfang stehen, um höflich zu bitten."
    },
    {
      "type": "gap",
      "frage": "Directions: Go straight and then ___ left at the bank. (turn)",
      "richtig": [
        "turn"
      ],
      "erklaerung": "Wegbeschreibungen nutzen oft Imperative: 'turn left'."
    },
    {
      "type": "mc",
      "frage": "In recipes, which form is typical? \"___ the eggs and add sugar.\"",
      "optionen": [
        "You beat",
        "Beat",
        "Beating"
      ],
      "richtig": 1,
      "erklaerung": "Rezepte verwenden den Imperativ: 'Beat the eggs ...'"
    },
    {
      "type": "transform",
      "frage": "Verneine und behalte 'please': \"Please call me after midnight.\" (höflich verneinen)",
      "richtig": [
        "Please don't call me after midnight.",
        "Please do not call me after midnight.",
        "Please don't call me after midnight",
        "Please do not call me after midnight"
      ],
      "erklaerung": "Höfliche Verneinung: 'Please don't' + Grundform."
    },
    {
      "type": "gap",
      "frage": "Tag question: Pass me the book, ___ you? (höfliche Anhängefrage)",
      "richtig": [
        "will",
        "would",
        "can",
        "could"
      ],
      "erklaerung": "Nach einem Imperativ folgt oft die Anhängefrage 'will/would/can/could you?'."
    },
    {
      "type": "mc",
      "frage": "Which tag question fits a friendly imperative best? \"Help me, ___\"",
      "optionen": [
        "will you?",
        "do you?",
        "are you?"
      ],
      "richtig": 0,
      "erklaerung": "Nach Imperativen steht typischerweise 'will you?' als Anhängefrage."
    },
    {
      "type": "transform",
      "frage": "Mache aus dem Imperativ einen mit 'somebody' beginnenden Notruf-Imperativ: \"Call an ambulance!\" -> ergänze 'Somebody'",
      "richtig": [
        "Somebody call an ambulance!",
        "Somebody, call an ambulance!",
        "Somebody call an ambulance",
        "Somebody, call an ambulance"
      ],
      "erklaerung": "Mit einem vorangestellten Subjekt wie 'Somebody' kann der Adressat betont werden."
    },
    {
      "type": "gap",
      "frage": "Negative with a subject for emphasis: ___ you dare lie to me! (do not, Kurzform möglich)",
      "richtig": [
        "Don't",
        "Do not"
      ],
      "erklaerung": "Betonter verneinter Imperativ: 'Don't you dare ...'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct emphatic warning:",
      "optionen": [
        "Don't you ever do that again!",
        "Not you ever do that again!",
        "You don't ever do that not again!"
      ],
      "richtig": 0,
      "erklaerung": "'Don't you ever ...' ist ein betonter, eindringlicher verneinter Imperativ."
    },
    {
      "type": "transform",
      "frage": "Forme in einen verneinten 'Let's'-Vorschlag um: \"We should not give up.\"",
      "richtig": [
        "Let's not give up.",
        "Let us not give up.",
        "Let's not give up",
        "Let us not give up"
      ],
      "erklaerung": "Verneinter gemeinsamer Vorschlag: 'Let's not' + Grundform."
    },
    {
      "type": "gap",
      "frage": "Polished/old-fashioned: ___ ye therefore and act. (Imperativ-Form mit altem 'ye'; moderne Grundform genügt) (go)",
      "richtig": [
        "Go"
      ],
      "erklaerung": "Der Imperativ bleibt die Grundform 'Go', auch in gehobenem Stil."
    },
    {
      "type": "transform",
      "frage": "Kombiniere beide zu einem zusammengesetzten Imperativ mit 'and': \"Stop.\" + \"Listen carefully.\"",
      "richtig": [
        "Stop and listen carefully.",
        "Stop and listen carefully"
      ],
      "erklaerung": "Zwei Imperative können mit 'and' verbunden werden, beide in der Grundform."
    }
  ]
};
