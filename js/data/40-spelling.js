/* Thema 40: Spelling – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Spelling",
  "intro": "Englische Rechtschreibung folgt klaren Mustern - besonders beim Anhängen von Endungen wie -ing, -ed, -s, -er und -ly an Wörter.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Bei kurzem Vokal + einzelnem Endkonsonant wird dieser oft <b>verdoppelt</b>: <span class=\"ex\">stop → stopping, run → running</span></li><li>Ein stummes <b>-e</b> fällt vor Endungen mit Vokal weg: <span class=\"ex\">make → making, write → writing</span></li><li><b>-y</b> nach Konsonant wird zu <b>-i</b>: <span class=\"ex\">study → studied, happy → happier</span></li><li>Bei <b>-s</b> nach Zisch- oder o-Lauten kommt <b>-es</b>: <span class=\"ex\">watch → watches, go → goes</span></li><li>Vorsicht bei häufig falsch geschriebenen Wörtern: <span class=\"ex\">because, beautiful, friend, necessary</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Wie wird das Wort für 'Freund' korrekt geschrieben?",
      "optionen": [
        "freind",
        "friend",
        "frend"
      ],
      "richtig": 1,
      "erklaerung": "Merkregel: 'fri-end' - das e steht vor dem i nicht; korrekt ist 'friend'."
    },
    {
      "type": "mc",
      "frage": "Welche Schreibweise ist richtig?",
      "optionen": [
        "because",
        "becuase",
        "becose"
      ],
      "richtig": 0,
      "erklaerung": "'because' wird b-e-c-a-u-s-e geschrieben."
    },
    {
      "type": "gap",
      "frage": "Schreibe das Wort richtig: Today is a beautiful day. (Lücke: 'schön') It is a ___ day.",
      "richtig": [
        "beautiful"
      ],
      "erklaerung": "'beautiful' enthält die Buchstabenfolge 'eau': b-e-a-u-t-i-f-u-l."
    },
    {
      "type": "mc",
      "frage": "Wie schreibt man die Mehrzahl von 'box'?",
      "optionen": [
        "boxs",
        "boxes",
        "boxies"
      ],
      "richtig": 1,
      "erklaerung": "Nach -x hängt man im Plural -es an: 'boxes'."
    },
    {
      "type": "gap",
      "frage": "Plural: I see two ___ in the garden. (eine 'bush', zwei davon)",
      "richtig": [
        "bushes"
      ],
      "erklaerung": "Wörter auf -sh bekommen im Plural -es: 'bushes'."
    },
    {
      "type": "mc",
      "frage": "Welche Schreibweise ist korrekt?",
      "optionen": [
        "wich",
        "which",
        "whitch"
      ],
      "richtig": 1,
      "erklaerung": "Das Fragewort wird 'which' geschrieben (mit wh-)."
    },
    {
      "type": "gap",
      "frage": "Plural von 'baby': The family has three ___.",
      "richtig": [
        "babies"
      ],
      "erklaerung": "Konsonant + y wird im Plural zu -ies: 'babies'."
    },
    {
      "type": "mc",
      "frage": "Wie wird 'received' richtig geschrieben?",
      "optionen": [
        "recieved",
        "received",
        "receved"
      ],
      "richtig": 1,
      "erklaerung": "Regel 'i before e except after c': nach c steht 'ei', also 'received'."
    },
    {
      "type": "gap",
      "frage": "Schreibe das Verb im Past Tense: Yesterday I ___ a letter. (to receive)",
      "richtig": [
        "received"
      ],
      "erklaerung": "Nach c steht 'ei': 'received'."
    },
    {
      "type": "transform",
      "frage": "Bilde das Adverb zu 'happy'. Beispiel: He smiled ___.",
      "richtig": [
        "happily",
        "He smiled happily.",
        "happily."
      ],
      "erklaerung": "y wird vor -ly zu i: happy -> 'happily'."
    },
    {
      "type": "mc",
      "frage": "Welche -ing-Form ist richtig?",
      "optionen": [
        "runing",
        "running",
        "runnning"
      ],
      "richtig": 1,
      "erklaerung": "Kurzer Vokal + einzelner Endkonsonant wird verdoppelt: 'running'."
    },
    {
      "type": "gap",
      "frage": "Setze die -ing-Form ein: Look, the dog is ___! (to swim)",
      "richtig": [
        "swimming"
      ],
      "erklaerung": "Verdopplung des m nach kurzem Vokal: 'swimming'."
    },
    {
      "type": "mc",
      "frage": "Wie schreibt man die -ing-Form von 'make'?",
      "optionen": [
        "makeing",
        "making",
        "makking"
      ],
      "richtig": 1,
      "erklaerung": "Stummes -e fällt vor -ing weg: 'making'."
    },
    {
      "type": "gap",
      "frage": "Bilde die -ing-Form: She loves ___ in the lake. (to dive)",
      "richtig": [
        "diving"
      ],
      "erklaerung": "Stummes -e entfällt vor -ing: dive -> 'diving'."
    },
    {
      "type": "transform",
      "frage": "Setze 'study' ins Past Simple: Last night she ___ for the test.",
      "richtig": [
        "studied",
        "Last night she studied for the test.",
        "studied for the test."
      ],
      "erklaerung": "Konsonant + y wird zu -ied: study -> 'studied'."
    },
    {
      "type": "mc",
      "frage": "Welche Past-Tense-Form ist korrekt?",
      "optionen": [
        "stoped",
        "stopped",
        "stopt"
      ],
      "richtig": 1,
      "erklaerung": "Kurzer Vokal + p: Verdopplung -> 'stopped'."
    },
    {
      "type": "gap",
      "frage": "Plural von 'leaf': The ___ are falling in autumn.",
      "richtig": [
        "leaves"
      ],
      "erklaerung": "Bei vielen Wörtern auf -f wird der Plural -ves: leaf -> 'leaves'."
    },
    {
      "type": "mc",
      "frage": "Wie lautet der Plural von 'knife'?",
      "optionen": [
        "knifes",
        "knives",
        "knifs"
      ],
      "richtig": 1,
      "erklaerung": "-fe wird im Plural zu -ves: 'knives'."
    },
    {
      "type": "gap",
      "frage": "Schreibe das Wort richtig: I need to make an important ___ . (Entscheidung)",
      "richtig": [
        "decision"
      ],
      "erklaerung": "'decision' wird mit -sion geschrieben (von decide)."
    },
    {
      "type": "mc",
      "frage": "Welche Schreibweise ist richtig?",
      "optionen": [
        "necesary",
        "neccessary",
        "necessary"
      ],
      "richtig": 2,
      "erklaerung": "'necessary' hat ein c und zwei s: n-e-c-e-s-s-a-r-y."
    },
    {
      "type": "gap",
      "frage": "Setze das Wort ein: English ___ can be tricky. (Rechtschreibung)",
      "richtig": [
        "spelling"
      ],
      "erklaerung": "'spelling' mit doppeltem l: spell + ing."
    },
    {
      "type": "mc",
      "frage": "Wie wird 'beginning' richtig geschrieben?",
      "optionen": [
        "begining",
        "beginning",
        "beggining"
      ],
      "richtig": 1,
      "erklaerung": "Betonte letzte Silbe: n wird verdoppelt -> 'beginning'."
    },
    {
      "type": "transform",
      "frage": "Bilde das Adverb zu 'careful'. Beispiel: Drive ___!",
      "richtig": [
        "carefully",
        "Drive carefully!",
        "carefully!"
      ],
      "erklaerung": "Endung -ful + -ly ergibt -fully: 'carefully' (mit Doppel-l)."
    },
    {
      "type": "gap",
      "frage": "Schreibe richtig: They will ___ travel next year. (wahrscheinlich)",
      "richtig": [
        "probably"
      ],
      "erklaerung": "'probably' wird p-r-o-b-a-b-l-y geschrieben."
    },
    {
      "type": "mc",
      "frage": "Welche Schreibweise ist korrekt?",
      "optionen": [
        "definitely",
        "definately",
        "definetly"
      ],
      "richtig": 0,
      "erklaerung": "'definitely' enthält das Wort 'finite': d-e-f-i-n-i-t-e-l-y."
    },
    {
      "type": "gap",
      "frage": "Setze ein: We had a wonderful ___ in Italy. (Erlebnis/Erfahrung)",
      "richtig": [
        "experience"
      ],
      "erklaerung": "'experience' mit -ence am Ende, nicht -ance."
    },
    {
      "type": "mc",
      "frage": "Wie schreibt man dieses Wort richtig?",
      "optionen": [
        "accommodation",
        "accomodation",
        "acommodation"
      ],
      "richtig": 0,
      "erklaerung": "'accommodation' hat doppeltes c UND doppeltes m."
    },
    {
      "type": "transform",
      "frage": "Setze 'occur' ins Past Simple: The accident ___ at night.",
      "richtig": [
        "occurred",
        "The accident occurred at night.",
        "occurred at night."
      ],
      "erklaerung": "Betonte Endsilbe mit kurzem Vokal: r wird verdoppelt -> 'occurred'."
    },
    {
      "type": "gap",
      "frage": "Schreibe richtig: This is an embarrassing situation. He felt very ___ . (peinlich berührt)",
      "richtig": [
        "embarrassed"
      ],
      "erklaerung": "'embarrassed' hat doppeltes r und doppeltes s."
    },
    {
      "type": "mc",
      "frage": "Welche Schreibweise ist korrekt?",
      "optionen": [
        "rythm",
        "rhythm",
        "rythem"
      ],
      "richtig": 1,
      "erklaerung": "'rhythm' enthält zweimal h und kein echtes Vokalzeichen außer y: r-h-y-t-h-m."
    },
    {
      "type": "gap",
      "frage": "Setze das Wort richtig ein: Good ___ is important in formal writing. (Zeichensetzung)",
      "richtig": [
        "punctuation"
      ],
      "erklaerung": "'punctuation' wird p-u-n-c-t-u-a-t-i-o-n geschrieben, mit -tion am Ende."
    }
  ]
};
