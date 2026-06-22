/* Thema 36: Negation – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Negation",
  "intro": "Verneinung (Negation) im Englischen bildet man je nach Satztyp unterschiedlich - mit \"not\", Hilfsverben wie \"do/does/did\" oder mit verneinenden Wörtern wie \"no\", \"nobody\" oder \"never\".",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Bei Vollverben braucht man im Present und Past Simple das Hilfsverb <b>do/does/did</b> + <b>not</b>; das Hauptverb steht im Infinitiv: <span class=\"ex\">She doesn't like tea. He didn't come.</span></li><li>Bei <b>be</b>, Modalverben und Hilfsverben hängt man <b>not</b> direkt an: <span class=\"ex\">I am not ready. You can't swim. They haven't finished.</span></li><li>Kurzformen sind im gesprochenen Englisch üblich: <span class=\"ex\">don't, doesn't, didn't, isn't, won't, can't</span></li><li>Mit <b>no, nobody, nothing, never</b> verneint man bereits - das Verb bleibt dann positiv (kein doppeltes \"not\"): <span class=\"ex\">I have no money. Nobody knows. We never lie.</span></li><li>In Kurzantworten nutzt man das passende Hilfsverb: <span class=\"ex\">No, I don't. No, she isn't.</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Welcher Satz ist die richtige Verneinung von 'She is happy.'?",
      "optionen": [
        "She isn't happy.",
        "She not happy.",
        "She doesn't happy."
      ],
      "richtig": 0,
      "erklaerung": "Bei 'be' wird 'not' direkt angehängt: is + not = isn't."
    },
    {
      "type": "gap",
      "frage": "I ___ like coffee. (Verneinung im Present Simple)",
      "richtig": [
        "don't",
        "do not"
      ],
      "erklaerung": "Im Present Simple verneint man mit 'do not / don't' + Grundform."
    },
    {
      "type": "mc",
      "frage": "Verneine: 'He plays football.'",
      "optionen": [
        "He doesn't plays football.",
        "He doesn't play football.",
        "He don't play football."
      ],
      "richtig": 1,
      "erklaerung": "In der 3. Person Singular: 'doesn't' + Grundform (ohne -s)."
    },
    {
      "type": "gap",
      "frage": "We ___ have any money. (Present Simple, Verneinung)",
      "richtig": [
        "don't",
        "do not"
      ],
      "erklaerung": "'we' nimmt 'don't' / 'do not'."
    },
    {
      "type": "transform",
      "frage": "Verneine den Satz: 'They are at home.'",
      "richtig": [
        "They aren't at home.",
        "They are not at home.",
        "They're not at home."
      ],
      "erklaerung": "Bei 'are' wird 'not' angehängt: aren't / are not."
    },
    {
      "type": "mc",
      "frage": "Verneine: 'I can swim.'",
      "optionen": [
        "I don't can swim.",
        "I can't swim.",
        "I cannot to swim."
      ],
      "richtig": 1,
      "erklaerung": "Modalverben verneint man direkt mit 'not': can + not = can't."
    },
    {
      "type": "gap",
      "frage": "It ___ raining now. (Present Continuous, Verneinung)",
      "richtig": [
        "isn't",
        "is not",
        "'s not"
      ],
      "erklaerung": "Present Continuous mit 'be': it is not / isn't + -ing."
    },
    {
      "type": "mc",
      "frage": "Welche Verneinung ist korrekt im Past Simple: 'She went to school.'?",
      "optionen": [
        "She didn't went to school.",
        "She didn't go to school.",
        "She not went to school."
      ],
      "richtig": 1,
      "erklaerung": "Past Simple verneint man mit 'didn't' + Grundform."
    },
    {
      "type": "gap",
      "frage": "You ___ tired yesterday. (Past Simple von 'be', Verneinung)",
      "richtig": [
        "weren't",
        "were not"
      ],
      "erklaerung": "'you' im Past: were not / weren't."
    },
    {
      "type": "transform",
      "frage": "Verneine den Satz: 'He has finished his homework.'",
      "richtig": [
        "He hasn't finished his homework.",
        "He has not finished his homework."
      ],
      "erklaerung": "Present Perfect: has + not = hasn't, dann das Partizip."
    },
    {
      "type": "mc",
      "frage": "Verneine: 'I was at the party.'",
      "optionen": [
        "I wasn't at the party.",
        "I didn't was at the party.",
        "I weren't at the party."
      ],
      "richtig": 0,
      "erklaerung": "'I' im Past von 'be': was not / wasn't."
    },
    {
      "type": "gap",
      "frage": "They ___ come to the meeting tomorrow. (will-Future, Verneinung)",
      "richtig": [
        "won't",
        "will not"
      ],
      "erklaerung": "will + not = won't (unregelmäßige Kurzform)."
    },
    {
      "type": "mc",
      "frage": "Welcher Satz ist korrekt verneint?",
      "optionen": [
        "She musn't go now.",
        "She mustn't go now.",
        "She doesn't must go now."
      ],
      "richtig": 1,
      "erklaerung": "'must' wird zu 'mustn't' (must not), nicht mit 'do'."
    },
    {
      "type": "gap",
      "frage": "We ___ seen that film before. (Present Perfect, Verneinung)",
      "richtig": [
        "haven't",
        "have not"
      ],
      "erklaerung": "'we have' verneint: have not / haven't + Partizip."
    },
    {
      "type": "transform",
      "frage": "Verneine den Satz: 'I am reading a book.'",
      "richtig": [
        "I am not reading a book.",
        "I'm not reading a book."
      ],
      "erklaerung": "Bei 'I am' gibt es keine Kurzform 'amn't': nur 'I'm not' oder 'I am not'."
    },
    {
      "type": "mc",
      "frage": "Verneine: 'There is some milk in the fridge.'",
      "optionen": [
        "There isn't some milk in the fridge.",
        "There isn't any milk in the fridge.",
        "There is no any milk in the fridge."
      ],
      "richtig": 1,
      "erklaerung": "In verneinten Sätzen wird 'some' zu 'any'."
    },
    {
      "type": "gap",
      "frage": "She ___ to call me back. (Past Simple, Verneinung von 'forget')",
      "richtig": [
        "didn't forget",
        "did not forget"
      ],
      "erklaerung": "Past Simple: didn't + Grundform 'forget' (nicht 'forgot')."
    },
    {
      "type": "mc",
      "frage": "Welcher Satz hat die richtige Verneinung mit 'no'?",
      "optionen": [
        "I have no any time.",
        "I have no time.",
        "I haven't no time."
      ],
      "richtig": 1,
      "erklaerung": "'no' + Nomen ersetzt 'not any'; keine doppelte Verneinung."
    },
    {
      "type": "transform",
      "frage": "Verneine den Satz: 'You should eat so much sugar.'",
      "richtig": [
        "You shouldn't eat so much sugar.",
        "You should not eat so much sugar."
      ],
      "erklaerung": "should + not = shouldn't."
    },
    {
      "type": "gap",
      "frage": "He ___ been to London yet. (Present Perfect, 3. Person, Verneinung)",
      "richtig": [
        "hasn't",
        "has not"
      ],
      "erklaerung": "3. Person: has not / hasn't + been."
    },
    {
      "type": "mc",
      "frage": "Verneine: 'I saw somebody in the garden.'",
      "optionen": [
        "I didn't see somebody in the garden.",
        "I didn't see anybody in the garden.",
        "I didn't saw anybody in the garden."
      ],
      "richtig": 1,
      "erklaerung": "In der Verneinung wird 'somebody' zu 'anybody'; nach 'didn't' steht die Grundform."
    },
    {
      "type": "gap",
      "frage": "We ___ going to buy a new car this year. (Verneinung von 'be going to')",
      "richtig": [
        "aren't",
        "are not",
        "'re not"
      ],
      "erklaerung": "'be going to' wird über 'be' verneint: are not / aren't going to."
    },
    {
      "type": "transform",
      "frage": "Verneine den Satz: 'I would tell him the truth.'",
      "richtig": [
        "I wouldn't tell him the truth.",
        "I would not tell him the truth."
      ],
      "erklaerung": "would + not = wouldn't."
    },
    {
      "type": "mc",
      "frage": "Welcher Satz vermeidet die doppelte Verneinung korrekt?",
      "optionen": [
        "I don't know nothing.",
        "I don't know anything.",
        "I know nothing about anything not."
      ],
      "richtig": 1,
      "erklaerung": "Im Standardenglisch keine doppelte Verneinung: 'don't' + 'anything'."
    },
    {
      "type": "gap",
      "frage": "There was ___ in the room. (niemand – ein Verneinungswort)",
      "richtig": [
        "nobody",
        "no one",
        "no-one"
      ],
      "erklaerung": "Das negative Pronomen 'nobody/no one' steht hier statt 'not... anybody'."
    },
    {
      "type": "mc",
      "frage": "Verneine den Imperativ: 'Open the window.'",
      "optionen": [
        "Not open the window.",
        "Don't open the window.",
        "Open not the window."
      ],
      "richtig": 1,
      "erklaerung": "Verneinter Imperativ: 'Don't' + Grundform."
    },
    {
      "type": "transform",
      "frage": "Verneine mit Kurzform: 'I have got a brother.'",
      "richtig": [
        "I haven't got a brother.",
        "I have not got a brother.",
        "I've not got a brother."
      ],
      "erklaerung": "'have got' wird über 'have' verneint: haven't got."
    },
    {
      "type": "gap",
      "frage": "Neither Tom ___ Anna passed the exam. (Korrelat zu 'neither')",
      "richtig": [
        "nor"
      ],
      "erklaerung": "'neither ... nor ...' ist die feste negative Verbindung."
    },
    {
      "type": "mc",
      "frage": "Welcher Satz drückt die Verneinung mit einer Question-Tag korrekt aus?",
      "optionen": [
        "She can drive, can she?",
        "She can't drive, can she?",
        "She can't drive, can't she?"
      ],
      "richtig": 1,
      "erklaerung": "Nach negativer Aussage folgt ein positiver Tag: 'can't ..., can she?'"
    },
    {
      "type": "transform",
      "frage": "Mache den Satz verneint und nutze 'hardly' für 'fast nie' nicht – verneine normal: 'He understood the question.'",
      "richtig": [
        "He didn't understand the question.",
        "He did not understand the question."
      ],
      "erklaerung": "Past Simple: didn't + Grundform 'understand' (nicht 'understood')."
    },
    {
      "type": "mc",
      "frage": "Welche Verneinung von 'I think she is right.' ist im Englischen am natürlichsten?",
      "optionen": [
        "I think she isn't right.",
        "I don't think she is right.",
        "I think not she is right."
      ],
      "richtig": 1,
      "erklaerung": "Im Englischen verneint man oft das übergeordnete Verb 'think': 'I don't think...'."
    }
  ]
};
