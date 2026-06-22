/* Thema 34: Infinitive constructions – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Infinitive constructions",
  "intro": "Infinitivkonstruktionen sind ein zentrales Thema im Englischen: Sie zeigen, wann ein Verb mit \"to\" steht, wann der reine Infinitiv (ohne \"to\") verwendet wird und wie man Infinitive nach Adjektiven, Fragewörtern oder bestimmten Verben einsetzt.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Der <b>to-Infinitiv</b> drückt oft Absicht oder Zweck aus: <span class=\"ex\">I went out to buy some milk.</span></li><li>Nach <b>Modalverben</b> und nach <b>let, make, see, hear</b> steht der <b>reine Infinitiv</b> (ohne \"to\"): <span class=\"ex\">She made him wait.</span></li><li>Viele Verben wie <b>want, decide, hope, promise, would like</b> werden mit dem to-Infinitiv verbunden: <span class=\"ex\">They decided to stay at home.</span></li><li>Nach <b>Adjektiven</b> und nach <b>too / enough</b> folgt der to-Infinitiv: <span class=\"ex\">It's hard to learn this. He is old enough to drive.</span></li><li>Nach <b>Fragewörtern</b> (what, how, where) kann ebenfalls ein to-Infinitiv stehen: <span class=\"ex\">I don't know what to do.</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "I want ___ a new bike.",
      "optionen": [
        "to buy",
        "buy",
        "buying"
      ],
      "richtig": 0,
      "erklaerung": "Nach 'want' folgt der Infinitiv mit 'to'."
    },
    {
      "type": "gap",
      "frage": "She decided ___ stay at home tonight.",
      "richtig": [
        "to"
      ],
      "erklaerung": "Nach 'decide' steht der Infinitiv mit 'to': 'to stay'."
    },
    {
      "type": "mc",
      "frage": "They hope ___ the match on Saturday.",
      "optionen": [
        "winning",
        "to win",
        "win"
      ],
      "richtig": 1,
      "erklaerung": "Nach 'hope' folgt der to-Infinitiv."
    },
    {
      "type": "gap",
      "frage": "He promised ___ help me with my homework.",
      "richtig": [
        "to"
      ],
      "erklaerung": "Nach 'promise' steht der to-Infinitiv: 'to help'."
    },
    {
      "type": "mc",
      "frage": "We need ___ now or we'll miss the train.",
      "optionen": [
        "leave",
        "to leave",
        "leaving"
      ],
      "richtig": 1,
      "erklaerung": "Nach 'need' folgt hier der to-Infinitiv."
    },
    {
      "type": "gap",
      "frage": "I would like ___ order a cup of coffee, please.",
      "richtig": [
        "to"
      ],
      "erklaerung": "Nach 'would like' steht der to-Infinitiv: 'to order'."
    },
    {
      "type": "mc",
      "frage": "She seems ___ very tired today.",
      "optionen": [
        "to be",
        "being",
        "be"
      ],
      "richtig": 0,
      "erklaerung": "Nach 'seem' folgt der to-Infinitiv: 'to be'."
    },
    {
      "type": "gap",
      "frage": "They agreed ___ meet at the station at six.",
      "richtig": [
        "to"
      ],
      "erklaerung": "Nach 'agree' steht der to-Infinitiv: 'to meet'."
    },
    {
      "type": "mc",
      "frage": "My brother learned ___ when he was five.",
      "optionen": [
        "swimming",
        "swim",
        "to swim"
      ],
      "richtig": 2,
      "erklaerung": "Nach 'learn' folgt der to-Infinitiv: 'to swim'."
    },
    {
      "type": "transform",
      "frage": "Bilde einen Satz mit Infinitiv: 'I plan' + 'visit my grandparents'.",
      "richtig": [
        "I plan to visit my grandparents.",
        "I plan to visit my grandparents"
      ],
      "erklaerung": "Nach 'plan' folgt der to-Infinitiv: 'to visit'."
    },
    {
      "type": "mc",
      "frage": "I went to the shop ___ some bread.",
      "optionen": [
        "to buy",
        "for buy",
        "for buying"
      ],
      "richtig": 0,
      "erklaerung": "Der Infinitiv des Zwecks ('um zu') wird mit 'to' gebildet: 'to buy'."
    },
    {
      "type": "gap",
      "frage": "My parents let me ___ out late on Fridays. (stay)",
      "richtig": [
        "stay"
      ],
      "erklaerung": "Nach 'let' steht der Infinitiv OHNE 'to' (bare infinitive)."
    },
    {
      "type": "mc",
      "frage": "You should ___ a doctor about that cough.",
      "optionen": [
        "to see",
        "see",
        "seeing"
      ],
      "richtig": 1,
      "erklaerung": "Nach Modalverben wie 'should' steht der Infinitiv ohne 'to'."
    },
    {
      "type": "gap",
      "frage": "It's important ___ tell the truth.",
      "richtig": [
        "to"
      ],
      "erklaerung": "Nach 'It's + Adjektiv' folgt der to-Infinitiv: 'to tell'."
    },
    {
      "type": "mc",
      "frage": "This water is too hot ___.",
      "optionen": [
        "for drink",
        "to drink",
        "drinking"
      ],
      "richtig": 1,
      "erklaerung": "Nach 'too + Adjektiv' folgt der to-Infinitiv: 'to drink'."
    },
    {
      "type": "transform",
      "frage": "Verbinde mit einem Infinitiv des Zwecks: 'She got up early.' + 'catch the first bus'.",
      "richtig": [
        "She got up early to catch the first bus.",
        "She got up early to catch the first bus"
      ],
      "erklaerung": "Der Zweck ('um zu') wird mit dem to-Infinitiv ausgedrückt."
    },
    {
      "type": "mc",
      "frage": "He's old enough ___ on his own.",
      "optionen": [
        "to travel",
        "for travel",
        "travelling"
      ],
      "richtig": 0,
      "erklaerung": "Nach 'enough' folgt der to-Infinitiv: 'to travel'."
    },
    {
      "type": "gap",
      "frage": "My teacher made us ___ the test again. (write)",
      "richtig": [
        "write"
      ],
      "erklaerung": "Nach 'make' (im Aktiv) steht der Infinitiv ohne 'to'."
    },
    {
      "type": "mc",
      "frage": "I don't know what ___ next.",
      "optionen": [
        "doing",
        "to do",
        "do"
      ],
      "richtig": 1,
      "erklaerung": "Nach Fragewörtern ('what', 'how', ...) folgt oft der to-Infinitiv: 'what to do'."
    },
    {
      "type": "gap",
      "frage": "I heard someone ___ the door last night. (knock)",
      "richtig": [
        "knock"
      ],
      "erklaerung": "Nach Wahrnehmungsverben wie 'hear' steht der bare infinitive (vollständige Handlung)."
    },
    {
      "type": "transform",
      "frage": "Forme um mit 'asked ... to': 'The teacher said to the students: \"Be quiet.\"' Beginne mit 'The teacher asked'.",
      "richtig": [
        "The teacher asked the students to be quiet.",
        "The teacher asked the students to be quiet"
      ],
      "erklaerung": "Nach 'ask + Objekt' steht der to-Infinitiv: 'to be quiet'."
    },
    {
      "type": "mc",
      "frage": "She would rather ___ at home than go out.",
      "optionen": [
        "to stay",
        "staying",
        "stay"
      ],
      "richtig": 2,
      "erklaerung": "Nach 'would rather' steht der Infinitiv ohne 'to'."
    },
    {
      "type": "gap",
      "frage": "I'm glad ___ have met you at last.",
      "richtig": [
        "to"
      ],
      "erklaerung": "Nach Adjektiven der Gefühlsreaktion ('glad') folgt der to-Infinitiv."
    },
    {
      "type": "mc",
      "frage": "It was nice of you ___ me.",
      "optionen": [
        "to help",
        "helping",
        "help"
      ],
      "richtig": 0,
      "erklaerung": "Nach 'It was + Adjektiv + of you' folgt der to-Infinitiv."
    },
    {
      "type": "transform",
      "frage": "Forme in einen Infinitivsatz um: 'I expect that he will arrive soon.' Beginne mit 'I expect him'.",
      "richtig": [
        "I expect him to arrive soon.",
        "I expect him to arrive soon"
      ],
      "erklaerung": "Nach 'expect + Objekt' steht der to-Infinitiv statt eines that-Satzes."
    },
    {
      "type": "mc",
      "frage": "He pretended ___ asleep when his mother came in.",
      "optionen": [
        "being",
        "to be",
        "be"
      ],
      "richtig": 1,
      "erklaerung": "Nach 'pretend' folgt der to-Infinitiv: 'to be'."
    },
    {
      "type": "gap",
      "frage": "You'd better not ___ him about the surprise. (tell)",
      "richtig": [
        "tell"
      ],
      "erklaerung": "Nach 'had better (not)' steht der Infinitiv ohne 'to'."
    },
    {
      "type": "mc",
      "frage": "I'm sorry ___ you that the flight has been cancelled.",
      "optionen": [
        "telling",
        "to tell",
        "tell"
      ],
      "richtig": 1,
      "erklaerung": "'be sorry to do' bezieht sich auf eine gerade stattfindende/bevorstehende Handlung."
    },
    {
      "type": "transform",
      "frage": "Verkürze mit einem Infinitiv: 'He was the first person who arrived.' Beginne mit 'He was the first'.",
      "richtig": [
        "He was the first to arrive.",
        "He was the first person to arrive.",
        "He was the first to arrive",
        "He was the first person to arrive"
      ],
      "erklaerung": "Nach Ordinalzahlen/'the first' kann ein Relativsatz durch den to-Infinitiv ersetzt werden."
    },
    {
      "type": "gap",
      "frage": "She is said ___ be the best lawyer in town.",
      "richtig": [
        "to"
      ],
      "erklaerung": "Im Passiv von Berichtsverben ('is said') folgt der to-Infinitiv: 'to be'."
    },
    {
      "type": "transform",
      "frage": "Forme mit Perfekt-Infinitiv um: 'It seems that she has forgotten the keys.' Beginne mit 'She seems'.",
      "richtig": [
        "She seems to have forgotten the keys.",
        "She seems to have forgotten the keys"
      ],
      "erklaerung": "Vorzeitigkeit wird mit dem Perfekt-Infinitiv ('to have + Partizip') ausgedrückt."
    }
  ]
};
