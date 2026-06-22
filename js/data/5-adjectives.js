/* Thema 5: Adjectives – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Adjectives",
  "intro": "Adjektive beschreiben Nomen und Pronomen – sie sagen, wie jemand oder etwas ist.",
  "explain": "<h2>Kurz erklärt</h2><ul><li><b>Adjektive</b> stehen meist <b>vor dem Nomen</b> oder nach Verben wie <i>be</i>, <i>look</i>, <i>feel</i>: <span class=\"ex\">a fast car</span>, <span class=\"ex\">She is happy.</span></li><li>Sie sind im Englischen <b>unveränderlich</b> – keine Plural- oder Geschlechtsformen: <span class=\"ex\">two big houses</span> (nicht <i>bigs</i>).</li><li>Mehrere Adjektive folgen einer <b>festen Reihenfolge</b> (Meinung, Größe, Alter, Farbe): <span class=\"ex\">a nice big old brown table</span>.</li><li>Endet ein Adjektiv auf <b>-ed</b>, beschreibt es ein Gefühl; auf <b>-ing</b> die Ursache: <span class=\"ex\">I am bored.</span> / <span class=\"ex\">The film is boring.</span></li><li>Viele Adjektive werden aus Nomen gebildet, oft mit <b>-y, -ful, -less</b>: <span class=\"ex\">sunny</span>, <span class=\"ex\">helpful</span>, <span class=\"ex\">careless</span>.</li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Choose the correct sentence:",
      "optionen": [
        "She has a beautiful red car.",
        "She has a red beautiful car.",
        "She has a car beautiful red."
      ],
      "richtig": 0,
      "erklaerung": "Im Englischen steht das Adjektiv vor dem Nomen; Reihenfolge: Meinung (beautiful) vor Farbe (red)."
    },
    {
      "type": "gap",
      "frage": "This soup is very ___ (hot). Be careful!",
      "richtig": [
        "hot"
      ],
      "erklaerung": "Adjektive bleiben unveraendert; 'hot' beschreibt die Suppe."
    },
    {
      "type": "mc",
      "frage": "The film was really ___. I almost fell asleep.",
      "optionen": [
        "bored",
        "boring",
        "bore"
      ],
      "richtig": 1,
      "erklaerung": "'-ing'-Adjektiv beschreibt die Eigenschaft der Sache (der Film langweilt)."
    },
    {
      "type": "mc",
      "frage": "After the long trip, the children were ___.",
      "optionen": [
        "tiring",
        "tire",
        "tired"
      ],
      "richtig": 2,
      "erklaerung": "'-ed'-Adjektiv beschreibt das Gefuehl der Personen (sie sind muede)."
    },
    {
      "type": "gap",
      "frage": "My brother is taller ___ me.",
      "richtig": [
        "than"
      ],
      "erklaerung": "Nach dem Komparativ folgt 'than'."
    },
    {
      "type": "mc",
      "frage": "This is the ___ day of my life!",
      "optionen": [
        "happiest",
        "most happy",
        "happier"
      ],
      "richtig": 0,
      "erklaerung": "Einsilbige/zweisilbige auf -y: Superlativ mit '-est' (happy -> happiest)."
    },
    {
      "type": "gap",
      "frage": "Today is ___ (cold) than yesterday.",
      "richtig": [
        "colder"
      ],
      "erklaerung": "Einsilbiges Adjektiv: Komparativ mit '-er' (cold -> colder)."
    },
    {
      "type": "transform",
      "frage": "Bilde den Komparativ: 'This book is interesting.' -> This book is ___ than that one.",
      "richtig": [
        "This book is more interesting than that one.",
        "more interesting"
      ],
      "erklaerung": "Mehrsilbige Adjektive: Komparativ mit 'more'."
    },
    {
      "type": "mc",
      "frage": "A house made of wood is a ___ house.",
      "optionen": [
        "wooden",
        "wood",
        "woody"
      ],
      "richtig": 0,
      "erklaerung": "'wooden' ist das Adjektiv (aus Holz)."
    },
    {
      "type": "gap",
      "frage": "She speaks three languages. She is very ___ (intelligent).",
      "richtig": [
        "intelligent"
      ],
      "erklaerung": "Das Adjektiv 'intelligent' beschreibt die Person."
    },
    {
      "type": "mc",
      "frage": "My new phone is ___ than my old one.",
      "optionen": [
        "gooder",
        "better",
        "more good"
      ],
      "richtig": 1,
      "erklaerung": "'good' ist unregelmaessig: good -> better -> best."
    },
    {
      "type": "gap",
      "frage": "This is the ___ (bad) film I have ever seen.",
      "richtig": [
        "worst"
      ],
      "erklaerung": "'bad' ist unregelmaessig: bad -> worse -> worst (Superlativ)."
    },
    {
      "type": "transform",
      "frage": "Bilde den Superlativ: 'Mount Everest is a high mountain.' -> Mount Everest is the ___ mountain in the world.",
      "richtig": [
        "Mount Everest is the highest mountain in the world.",
        "highest"
      ],
      "erklaerung": "Einsilbig: Superlativ mit '-est' und 'the'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct order: ",
      "optionen": [
        "a small old French table",
        "a French old small table",
        "an old French small table"
      ],
      "richtig": 0,
      "erklaerung": "Reihenfolge: Groesse (small) - Alter (old) - Herkunft (French)."
    },
    {
      "type": "gap",
      "frage": "Tokyo is ___ (expensive) than my hometown.",
      "richtig": [
        "more expensive"
      ],
      "erklaerung": "Mehrsilbiges Adjektiv: Komparativ mit 'more'."
    },
    {
      "type": "mc",
      "frage": "He drives ___ his sister, but she is the safest driver.",
      "optionen": [
        "as carefully as",
        "as careful as",
        "carefuller than"
      ],
      "richtig": 1,
      "erklaerung": "'as ... as' mit dem Adjektiv 'careful' fuer Gleichheit (hier Adjektiv nach 'is' impliziert/Vergleich)."
    },
    {
      "type": "gap",
      "frage": "My suitcase isn't as ___ (heavy) as yours.",
      "richtig": [
        "heavy"
      ],
      "erklaerung": "In 'as ... as' steht die Grundform des Adjektivs."
    },
    {
      "type": "transform",
      "frage": "Verneine den Vergleich (gleich): 'Anna is tall. Ben is tall too.' -> Anna is ___ Ben.",
      "richtig": [
        "Anna is as tall as Ben.",
        "as tall as"
      ],
      "erklaerung": "Gleichheit wird mit 'as + Adjektiv + as' ausgedrueckt."
    },
    {
      "type": "mc",
      "frage": "The weather gets ___ in spring.",
      "optionen": [
        "warm and warm",
        "warmer and warmer",
        "more and more warm"
      ],
      "richtig": 1,
      "erklaerung": "Zunehmende Steigerung: 'warmer and warmer'."
    },
    {
      "type": "gap",
      "frage": "The ___ (hard) you work, the more you achieve.",
      "richtig": [
        "harder"
      ],
      "erklaerung": "Struktur 'the + Komparativ ..., the + Komparativ ...'; hard -> harder."
    },
    {
      "type": "mc",
      "frage": "There is ___ in this story.",
      "optionen": [
        "nothing interesting",
        "interesting nothing",
        "nothing interestingly"
      ],
      "richtig": 0,
      "erklaerung": "Nach Indefinitpronomen (nothing, something) steht das Adjektiv nach: 'nothing interesting'."
    },
    {
      "type": "gap",
      "frage": "I'd like something ___ (cold) to drink.",
      "richtig": [
        "cold"
      ],
      "erklaerung": "Adjektiv folgt 'something': 'something cold'."
    },
    {
      "type": "mc",
      "frage": "This exam was ___ difficult than I expected.",
      "optionen": [
        "much",
        "very",
        "many"
      ],
      "richtig": 0,
      "erklaerung": "Komparativ wird mit 'much/far/a bit' verstaerkt, nicht mit 'very'."
    },
    {
      "type": "transform",
      "frage": "Wandle in den Komparativ mit Verstaerkung um: 'My new job is stressful.' -> My new job is far ___ than my old one.",
      "richtig": [
        "My new job is far more stressful than my old one.",
        "more stressful"
      ],
      "erklaerung": "Mehrsilbig: 'more stressful'; 'far' verstaerkt den Komparativ."
    },
    {
      "type": "mc",
      "frage": "The streets were full of ___ people after the festival.",
      "optionen": [
        "exciting",
        "excited",
        "excitedly"
      ],
      "richtig": 1,
      "erklaerung": "Menschen fuehlen sich begeistert -> '-ed'-Form 'excited'."
    },
    {
      "type": "gap",
      "frage": "She gave a ___ (convince) argument that changed my mind.",
      "richtig": [
        "convincing"
      ],
      "erklaerung": "Das Argument ueberzeugt -> '-ing'-Adjektiv 'convincing'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct order: a ___ jacket.",
      "optionen": [
        "leather nice black",
        "nice black leather",
        "black nice leather"
      ],
      "richtig": 1,
      "erklaerung": "Reihenfolge: Meinung (nice) - Farbe (black) - Material (leather)."
    },
    {
      "type": "transform",
      "frage": "Bilde den Superlativ: 'Of all the students, Mia is talented.' -> Of all the students, Mia is the ___.",
      "richtig": [
        "Of all the students, Mia is the most talented.",
        "the most talented",
        "most talented"
      ],
      "erklaerung": "Mehrsilbig: Superlativ mit 'the most'."
    },
    {
      "type": "gap",
      "frage": "It was the ___ (little) expensive option, so we chose it.",
      "richtig": [
        "least"
      ],
      "erklaerung": "Verminderung im Superlativ: 'the least + Adjektiv' (am wenigsten)."
    },
    {
      "type": "mc",
      "frage": "This is by far the ___ solution we have found.",
      "optionen": [
        "practical",
        "most practical",
        "practicaler"
      ],
      "richtig": 1,
      "erklaerung": "Mehrsilbiges Adjektiv im Superlativ: 'the most practical'; 'by far' verstaerkt."
    },
    {
      "type": "transform",
      "frage": "Setze das Adjektiv richtig ein (Reihenfolge): 'a table (round / wooden / small)' -> a ___ table.",
      "richtig": [
        "a small round wooden table",
        "small round wooden"
      ],
      "erklaerung": "Reihenfolge: Groesse (small) - Form (round) - Material (wooden)."
    }
  ]
};
