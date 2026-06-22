/* Thema 6: Adverbs – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Adverbs",
  "intro": "Adverbien (adverbs) beschreiben, wie, wann, wo oder wie oft etwas geschieht.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Viele Adverbien bildet man durch <b>-ly</b> am Adjektiv: <span class=\"ex\">quick → quickly</span>, <span class=\"ex\">slow → slowly</span>.</li><li>Adverbien der <b>Art und Weise</b> stehen meist nach dem Vollverb oder Objekt: <span class=\"ex\">She speaks English well.</span></li><li><b>Häufigkeitsadverbien</b> (always, often, never) stehen vor dem Vollverb, aber nach <b>be</b>: <span class=\"ex\">He is always late.</span> / <span class=\"ex\">I never drink coffee.</span></li><li>Einige Wörter sind unregelmäßig: <span class=\"ex\">good → well</span>, <span class=\"ex\">fast → fast</span>, <span class=\"ex\">hard → hard</span>.</li><li>Adverbien können auch Adjektive verstärken: <span class=\"ex\">It is very cold.</span> / <span class=\"ex\">She is really tired.</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Choose the correct adverb: \"The children played ___ in the garden.\"",
      "optionen": [
        "happy",
        "happily",
        "happyly"
      ],
      "richtig": 1,
      "erklaerung": "Aus dem Adjektiv 'happy' wird das Adverb 'happily' (y → ily). Es beschreibt, WIE sie spielten."
    },
    {
      "type": "mc",
      "frage": "Which sentence is correct?",
      "optionen": [
        "She sings very good.",
        "She sings very well.",
        "She sings very goodly."
      ],
      "richtig": 1,
      "erklaerung": "Das Adverb zu 'good' ist unregelmäßig: 'well'. Nach dem Verb 'sings' braucht man ein Adverb."
    },
    {
      "type": "mc",
      "frage": "Where does the adverb go? \"I ___ go to the gym on Mondays.\" (usually)",
      "optionen": [
        "I usually go",
        "I go usually",
        "Usually I go to the gym usually"
      ],
      "richtig": 0,
      "erklaerung": "Häufigkeitsadverbien wie 'usually' stehen vor dem Vollverb: 'I usually go'."
    },
    {
      "type": "gap",
      "frage": "Fill the gap with the adverb of 'careful': \"He drives very ___.\"",
      "richtig": [
        "carefully"
      ],
      "erklaerung": "Aus 'careful' wird das Adverb 'carefully' (+ -ly). Es beschreibt, wie er fährt."
    },
    {
      "type": "gap",
      "frage": "Complete with the correct adverb of 'fast': \"Usain Bolt can run very ___.\"",
      "richtig": [
        "fast"
      ],
      "erklaerung": "'fast' ist sowohl Adjektiv als auch Adverb und bekommt KEIN -ly ('fastly' ist falsch)."
    },
    {
      "type": "gap",
      "frage": "Put the frequency adverb in the right place: \"My brother ___ eats meat; he is a vegetarian.\" (never)",
      "richtig": [
        "never"
      ],
      "erklaerung": "'never' steht vor dem Vollverb 'eats': 'My brother never eats meat'."
    },
    {
      "type": "gap",
      "frage": "Fill in the adverb of 'good': \"She speaks French really ___.\"",
      "richtig": [
        "well"
      ],
      "erklaerung": "Das Adverb zu 'good' ist 'well'. Nach 'speaks French' braucht man ein Adverb."
    },
    {
      "type": "transform",
      "frage": "Rewrite the sentence using the adverb form: \"He is a quiet worker.\" → \"He works ___.\" (Write the full sentence.)",
      "richtig": [
        "He works quietly.",
        "He works quietly"
      ],
      "erklaerung": "Aus dem Adjektiv 'quiet' wird das Adverb 'quietly', das hier das Verb 'works' beschreibt."
    },
    {
      "type": "transform",
      "frage": "Put the frequency adverb 'often' into the sentence: \"We go to the cinema.\" (Write the full sentence.)",
      "richtig": [
        "We often go to the cinema.",
        "We often go to the cinema"
      ],
      "erklaerung": "Häufigkeitsadverbien stehen vor dem Vollverb: 'We often go to the cinema'."
    },
    {
      "type": "transform",
      "frage": "Put the frequency adverb 'always' into the sentence: \"She is friendly.\" (Write the full sentence.)",
      "richtig": [
        "She is always friendly.",
        "She is always friendly"
      ],
      "erklaerung": "Nach dem Verb 'be' steht das Häufigkeitsadverb: 'She is always friendly'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct sentence:",
      "optionen": [
        "This exercise was incredible easy.",
        "This exercise was incredibly easy.",
        "This exercise was incredibly easily."
      ],
      "richtig": 1,
      "erklaerung": "Um ein Adjektiv ('easy') zu verstärken, braucht man das Adverb 'incredibly'. 'easy' bleibt hier Adjektiv."
    }
  ]
};
