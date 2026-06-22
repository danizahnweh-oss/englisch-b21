/* Thema 18: Auxiliary verbs – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Auxiliary verbs",
  "intro": "Hilfsverben (auxiliary verbs) wie be, do und have helfen dabei, Zeiten, Fragen, Verneinungen und Kurzantworten im Englischen zu bilden.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Die wichtigsten <b>auxiliary verbs</b> sind <b>be</b>, <b>do</b> und <b>have</b>. Sie tragen oft keine eigene Bedeutung, sondern bilden Strukturen: <span class=\"ex\">She is working. / Do you know him? / They have left.</span></li><li><b>do/does/did</b> brauchst du für Fragen und Verneinungen im Present und Past Simple: <span class=\"ex\">Does he live here? / I don't agree. / We didn't go.</span></li><li><b>be</b> bildet Verlaufsformen und das Passiv: <span class=\"ex\">I am reading. / The car was repaired.</span></li><li><b>have/has/had</b> bildet die <b>Perfect</b>-Zeiten: <span class=\"ex\">She has finished. / They had already eaten.</span></li><li>In <b>Kurzantworten</b> und <b>question tags</b> wiederholst du nur das Hilfsverb: <span class=\"ex\">Yes, I do. / You're tired, aren't you?</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Choose the correct auxiliary: \"___ you like a cup of tea?\"",
      "optionen": [
        "Would",
        "Are",
        "Have"
      ],
      "richtig": 0,
      "erklaerung": "Höfliche Frage/Angebot mit dem Modalverb 'Would'."
    },
    {
      "type": "gap",
      "frage": "She ___ not living in London anymore. (be, Present)",
      "richtig": [
        "is"
      ],
      "erklaerung": "Verlaufsform mit Hilfsverb 'be' in der 3. Person Singular: 'is'."
    },
    {
      "type": "mc",
      "frage": "Pick the right auxiliary: \"They ___ finished their homework yet.\"",
      "optionen": [
        "haven't",
        "aren't",
        "don't"
      ],
      "richtig": 0,
      "erklaerung": "Present Perfect mit 'have' + Partizip; Verneinung 'haven't'."
    },
    {
      "type": "gap",
      "frage": "___ he speak French? — No, he doesn't.",
      "richtig": [
        "Does"
      ],
      "erklaerung": "Frage im Simple Present, 3. Person Singular: Hilfsverb 'Does'."
    },
    {
      "type": "mc",
      "frage": "Complete: \"We ___ watching a film when the phone rang.\"",
      "optionen": [
        "were",
        "was",
        "are"
      ],
      "richtig": 0,
      "erklaerung": "Past Continuous mit 'we' braucht 'were'."
    },
    {
      "type": "gap",
      "frage": "I ___ like coffee. (Verneinung, Simple Present)",
      "richtig": [
        "don't",
        "do not"
      ],
      "erklaerung": "Verneinung im Simple Present mit 'do not / don't'."
    },
    {
      "type": "transform",
      "frage": "Mach eine Frage daraus: \"You can swim.\"",
      "richtig": [
        "Can you swim?"
      ],
      "erklaerung": "Beim Modalverb 'can' rückt es einfach vor das Subjekt."
    },
    {
      "type": "mc",
      "frage": "Choose: \"___ your sister at home yesterday?\"",
      "optionen": [
        "Was",
        "Did",
        "Were"
      ],
      "richtig": 0,
      "erklaerung": "'Your sister' ist 3. Person Singular im Past: 'Was'."
    },
    {
      "type": "gap",
      "frage": "They ___ already left when we arrived. (Past Perfect)",
      "richtig": [
        "had",
        "'d"
      ],
      "erklaerung": "Past Perfect: Hilfsverb 'had' + Partizip 'left'."
    },
    {
      "type": "transform",
      "frage": "Verneine: \"He has seen the film.\"",
      "richtig": [
        "He hasn't seen the film.",
        "He has not seen the film."
      ],
      "erklaerung": "Present Perfect verneint man mit 'has not / hasn't'."
    },
    {
      "type": "mc",
      "frage": "Complete: \"___ you ever been to Spain?\"",
      "optionen": [
        "Have",
        "Did",
        "Are"
      ],
      "richtig": 0,
      "erklaerung": "Present Perfect mit 'ever' braucht das Hilfsverb 'Have'."
    },
    {
      "type": "gap",
      "frage": "It ___ raining now, so take an umbrella. (be, Present)",
      "richtig": [
        "is",
        "'s"
      ],
      "erklaerung": "Present Continuous, 3. Person Singular: 'is / 's'."
    },
    {
      "type": "mc",
      "frage": "Choose: \"I ___ go now, it's getting late.\" (Notwendigkeit)",
      "optionen": [
        "must",
        "can",
        "would"
      ],
      "richtig": 0,
      "erklaerung": "'Must' drückt Notwendigkeit/Pflicht aus."
    },
    {
      "type": "gap",
      "frage": "___ they coming to the party? — Yes, they are. (be)",
      "richtig": [
        "Are"
      ],
      "erklaerung": "Frage im Present Continuous mit 'they': 'Are'."
    },
    {
      "type": "transform",
      "frage": "Bilde die Frage: \"She went to school by bus.\"",
      "richtig": [
        "Did she go to school by bus?"
      ],
      "erklaerung": "Simple Past Frage mit Hilfsverb 'did' + Grundform 'go'."
    },
    {
      "type": "gap",
      "frage": "We ___ been waiting for an hour. (Present Perfect Continuous)",
      "richtig": [
        "have",
        "'ve"
      ],
      "erklaerung": "Present Perfect Continuous: 'have' + 'been' + Verlaufsform."
    },
    {
      "type": "mc",
      "frage": "Pick the correct form: \"He said he ___ help us tomorrow.\"",
      "optionen": [
        "would",
        "will",
        "does"
      ],
      "richtig": 0,
      "erklaerung": "In der indirekten Rede wird 'will' zu 'would'."
    },
    {
      "type": "transform",
      "frage": "Bilde das Question Tag: \"You are tired, ___?\"",
      "richtig": [
        "aren't you?",
        "aren't you"
      ],
      "erklaerung": "Positiver Satz mit 'are' bekommt das verneinte Tag 'aren't you'."
    },
    {
      "type": "gap",
      "frage": "___ you mind opening the window? (höfliche Bitte)",
      "richtig": [
        "Would",
        "Do"
      ],
      "erklaerung": "'Would you mind...' oder 'Do you mind...' als höfliche Bitte."
    },
    {
      "type": "mc",
      "frage": "Choose: \"By next year, she ___ have finished her studies.\"",
      "optionen": [
        "will",
        "would",
        "has"
      ],
      "richtig": 0,
      "erklaerung": "Future Perfect: 'will' + 'have' + Partizip."
    },
    {
      "type": "transform",
      "frage": "Verneine im Past: \"They were listening.\"",
      "richtig": [
        "They weren't listening.",
        "They were not listening."
      ],
      "erklaerung": "Past Continuous mit 'they' verneint man mit 'were not / weren't'."
    },
    {
      "type": "gap",
      "frage": "\"Do you like jazz?\" — \"Yes, I ___.\" (Kurzantwort)",
      "richtig": [
        "do"
      ],
      "erklaerung": "Kurzantwort wiederholt das Hilfsverb der Frage: 'do'."
    },
    {
      "type": "mc",
      "frage": "Complete: \"___ I open the window for you?\" (Angebot)",
      "optionen": [
        "Shall",
        "Will",
        "Do"
      ],
      "richtig": 0,
      "erklaerung": "'Shall I...?' ist die typische Form für ein Angebot."
    },
    {
      "type": "transform",
      "frage": "Bilde das Question Tag: \"He doesn't smoke, ___?\"",
      "richtig": [
        "does he?",
        "does he"
      ],
      "erklaerung": "Verneinter Satz mit 'doesn't' bekommt positives Tag 'does he'."
    },
    {
      "type": "gap",
      "frage": "I wish I ___ speak Spanish fluently. (irreal, Wunsch)",
      "richtig": [
        "could"
      ],
      "erklaerung": "Nach 'I wish' für eine Fähigkeit nutzt man 'could'."
    },
    {
      "type": "mc",
      "frage": "Choose the emphatic form: \"I ___ tell you the truth, I promise!\"",
      "optionen": [
        "did",
        "was",
        "have"
      ],
      "richtig": 0,
      "erklaerung": "Betontes 'did' verstärkt eine Aussage im Past."
    },
    {
      "type": "transform",
      "frage": "Umformen ins Passiv: \"They have built a new bridge.\"",
      "richtig": [
        "A new bridge has been built.",
        "A new bridge has been built by them."
      ],
      "erklaerung": "Passiv Present Perfect: 'has' + 'been' + Partizip."
    },
    {
      "type": "gap",
      "frage": "You ___ have told me earlier; now it's too late! (Vorwurf, Vergangenheit)",
      "richtig": [
        "should",
        "could"
      ],
      "erklaerung": "'should/could have + Partizip' drückt einen Vorwurf über die Vergangenheit aus."
    },
    {
      "type": "mc",
      "frage": "Complete: \"She ___ have missed the train; I saw her get on it.\" (logische Schlussfolgerung)",
      "optionen": [
        "can't",
        "mustn't",
        "shouldn't"
      ],
      "richtig": 0,
      "erklaerung": "'can't have' drückt aus, dass etwas (fast) sicher nicht passiert ist."
    },
    {
      "type": "transform",
      "frage": "Vermeide Wiederholung mit Hilfsverb: \"She likes tea, and I like tea too.\" (verkürze den zweiten Teil)",
      "richtig": [
        "She likes tea, and so do I.",
        "She likes tea, and I do too."
      ],
      "erklaerung": "Zustimmung mit 'so do I' oder Ersatz des Vollverbs durch 'do'."
    }
  ]
};
