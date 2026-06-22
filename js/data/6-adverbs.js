/* Thema 6: Adverbs – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Adverbs",
  "intro": "Adverbien (adverbs) beschreiben, wie, wann, wo oder wie oft etwas geschieht.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Viele Adverbien bildet man durch <b>-ly</b> am Adjektiv: <span class=\"ex\">quick → quickly</span>, <span class=\"ex\">slow → slowly</span>.</li><li>Adverbien der <b>Art und Weise</b> stehen meist nach dem Vollverb oder Objekt: <span class=\"ex\">She speaks English well.</span></li><li><b>Häufigkeitsadverbien</b> (always, often, never) stehen vor dem Vollverb, aber nach <b>be</b>: <span class=\"ex\">He is always late.</span> / <span class=\"ex\">I never drink coffee.</span></li><li>Einige Wörter sind unregelmäßig: <span class=\"ex\">good → well</span>, <span class=\"ex\">fast → fast</span>, <span class=\"ex\">hard → hard</span>.</li><li>Adverbien können auch Adjektive verstärken: <span class=\"ex\">It is very cold.</span> / <span class=\"ex\">She is really tired.</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "She sang ___ at the concert last night.",
      "optionen": [
        "beautiful",
        "beautifully",
        "beauty"
      ],
      "richtig": 1,
      "erklaerung": "Das Adverb 'beautifully' beschreibt das Verb 'sang' (wie sie sang)."
    },
    {
      "type": "mc",
      "frage": "He drives very ___ on the motorway.",
      "optionen": [
        "fast",
        "fastly",
        "faster"
      ],
      "richtig": 0,
      "erklaerung": "'fast' ist sowohl Adjektiv als auch Adverb; 'fastly' gibt es nicht."
    },
    {
      "type": "gap",
      "frage": "The children played ___ (happy) in the garden.",
      "richtig": [
        "happily"
      ],
      "erklaerung": "Adjektive auf -y werden zu -ily: happy -> happily."
    },
    {
      "type": "mc",
      "frage": "Tom worked ___ and finished early.",
      "optionen": [
        "quick",
        "quickly",
        "quickness"
      ],
      "richtig": 1,
      "erklaerung": "Das Adverb 'quickly' beschreibt, wie er arbeitete."
    },
    {
      "type": "gap",
      "frage": "My grandmother speaks ___ (slow) so everyone understands her.",
      "richtig": [
        "slowly"
      ],
      "erklaerung": "Regelmäßige Bildung: slow + -ly = slowly."
    },
    {
      "type": "mc",
      "frage": "This cake tastes really ___.",
      "optionen": [
        "well",
        "good",
        "goodly"
      ],
      "richtig": 1,
      "erklaerung": "Nach Sinnesverben wie 'taste' steht ein Adjektiv (good), kein Adverb."
    },
    {
      "type": "transform",
      "frage": "Bilde das Adverb und setze es ein: 'careful'. Satz: He crossed the road ___.",
      "richtig": [
        "He crossed the road carefully.",
        "carefully"
      ],
      "erklaerung": "careful + -ly = carefully, beschreibt das Verb 'crossed'."
    },
    {
      "type": "gap",
      "frage": "She answered the question ___ (correct).",
      "richtig": [
        "correctly"
      ],
      "erklaerung": "correct + -ly = correctly."
    },
    {
      "type": "mc",
      "frage": "The dog barked ___ all night.",
      "optionen": [
        "loud",
        "loudly",
        "louder"
      ],
      "richtig": 1,
      "erklaerung": "Das Adverb 'loudly' beschreibt, wie der Hund bellte."
    },
    {
      "type": "gap",
      "frage": "He arrived ___ (late) and missed the train.",
      "richtig": [
        "late"
      ],
      "erklaerung": "'late' ist Adjektiv und Adverb zugleich; 'lately' bedeutet 'in letzter Zeit'."
    },
    {
      "type": "mc",
      "frage": "You speak English very ___.",
      "optionen": [
        "good",
        "well",
        "goodly"
      ],
      "richtig": 1,
      "erklaerung": "Das Adverb zu 'good' ist 'well'."
    },
    {
      "type": "transform",
      "frage": "Bilde das Adverb und setze es ein: 'easy'. Satz: She passed the exam ___.",
      "richtig": [
        "She passed the exam easily.",
        "easily"
      ],
      "erklaerung": "easy -> easily (-y wird zu -ily)."
    },
    {
      "type": "gap",
      "frage": "They danced ___ (graceful) across the stage.",
      "richtig": [
        "gracefully"
      ],
      "erklaerung": "graceful + -ly = gracefully."
    },
    {
      "type": "mc",
      "frage": "I ___ go to the gym; only once a month.",
      "optionen": [
        "hard",
        "hardly",
        "harder"
      ],
      "richtig": 1,
      "erklaerung": "'hardly' bedeutet 'kaum'; 'hard' würde 'hart/intensiv' heißen."
    },
    {
      "type": "gap",
      "frage": "The team worked ___ (hard) to win the match.",
      "richtig": [
        "hard"
      ],
      "erklaerung": "Das Adverb von 'hard' (im Sinne von intensiv) ist 'hard', nicht 'hardly'."
    },
    {
      "type": "transform",
      "frage": "Setze 'always' an die richtige Stelle: 'I drink coffee in the morning.'",
      "richtig": [
        "I always drink coffee in the morning."
      ],
      "erklaerung": "Häufigkeitsadverbien stehen vor dem Vollverb."
    },
    {
      "type": "transform",
      "frage": "Setze 'usually' an die richtige Stelle: 'She is happy on weekends.'",
      "richtig": [
        "She is usually happy on weekends."
      ],
      "erklaerung": "Häufigkeitsadverbien stehen nach 'to be' (am/is/are)."
    },
    {
      "type": "mc",
      "frage": "We ___ see our cousins because they live abroad.",
      "optionen": [
        "rarely",
        "rare",
        "rarer"
      ],
      "richtig": 0,
      "erklaerung": "'rarely' (selten) ist das benötigte Häufigkeitsadverb."
    },
    {
      "type": "gap",
      "frage": "He is ___ (good) at his job; everyone praises him. (Adjektiv oder Adverb?)",
      "richtig": [
        "good"
      ],
      "erklaerung": "Nach 'is' steht ein Adjektiv: 'good'."
    },
    {
      "type": "mc",
      "frage": "The film was ___ boring; I almost fell asleep.",
      "optionen": [
        "terrible",
        "terribly",
        "terror"
      ],
      "richtig": 1,
      "erklaerung": "Vor einem Adjektiv (boring) steht ein Adverb: 'terribly'."
    },
    {
      "type": "transform",
      "frage": "Bilde das Adverb und setze es ein: 'automatic'. Satz: The doors open ___.",
      "richtig": [
        "The doors open automatically.",
        "automatically"
      ],
      "erklaerung": "Adjektive auf -ic bilden das Adverb meist mit -ally: automatically."
    },
    {
      "type": "gap",
      "frage": "She sings ___ (good) and plays the piano ___ (beautiful).",
      "richtig": [
        "well; beautifully",
        "well and beautifully",
        "well, beautifully"
      ],
      "erklaerung": "Beide Lücken brauchen Adverbien: 'well' und 'beautifully'."
    },
    {
      "type": "mc",
      "frage": "This is a ___ difficult exercise.",
      "optionen": [
        "high",
        "highly",
        "height"
      ],
      "richtig": 1,
      "erklaerung": "'highly' (sehr) ist ein Steigerungsadverb vor dem Adjektiv; 'high' wäre räumlich."
    },
    {
      "type": "gap",
      "frage": "He behaved ___ (responsible) during the crisis.",
      "richtig": [
        "responsibly"
      ],
      "erklaerung": "Adjektive auf -le: das -e fällt weg und -y wird angehängt: responsibly."
    },
    {
      "type": "transform",
      "frage": "Bilde das Adverb und setze es ein: 'true'. Satz: I ___ believe you.",
      "richtig": [
        "I truly believe you.",
        "truly"
      ],
      "erklaerung": "true -> truly (das -e entfällt unregelmäßig)."
    },
    {
      "type": "mc",
      "frage": "She looked at me ___ when I told the joke.",
      "optionen": [
        "strange",
        "strangely",
        "stranger"
      ],
      "richtig": 1,
      "erklaerung": "Das Adverb 'strangely' beschreibt das Verb 'looked' (auf welche Weise)."
    },
    {
      "type": "gap",
      "frage": "The patient is recovering ___ (good), the doctor says.",
      "richtig": [
        "well"
      ],
      "erklaerung": "Hier wird das Verb 'recovering' beschrieben, also das Adverb 'well'."
    },
    {
      "type": "transform",
      "frage": "Setze das Adverb 'hardly' richtig ein und behalte die Bedeutung 'kaum': 'I can hear you.' (mit hardly)",
      "richtig": [
        "I can hardly hear you."
      ],
      "erklaerung": "'hardly' steht zwischen Hilfsverb (can) und Vollverb (hear) und bedeutet 'kaum'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct order: He plays tennis ___.",
      "optionen": [
        "well very",
        "very well",
        "well very much"
      ],
      "richtig": 1,
      "erklaerung": "Das Steigerungsadverb 'very' steht vor dem Adverb 'well'."
    },
    {
      "type": "gap",
      "frage": "Although she felt nervous, she spoke ___ (confident) and ___ (clear) to the audience.",
      "richtig": [
        "confidently; clearly",
        "confidently and clearly",
        "confidently, clearly"
      ],
      "erklaerung": "Beide Adverbien beschreiben das Verb 'spoke': confidently und clearly."
    }
  ]
};
