/* Thema 39: Short answer – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Short answer",
  "intro": "Short answers sind kurze Antworten auf Ja/Nein-Fragen, bei denen man das Hilfsverb wiederholt statt den ganzen Satz.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Short answers wiederholen das <b>Hilfsverb</b> aus der Frage, nicht das Vollverb: <span class=\"ex\">Do you like tea? - Yes, I do.</span></li><li>Bei <b>positiven</b> Kurzantworten benutzt man <b>keine Kurzform</b>: <span class=\"ex\">Yes, she is.</span> (nicht \"she's\")</li><li>Bei <b>negativen</b> Kurzantworten benutzt man die <b>Kurzform</b> mit not: <span class=\"ex\">No, he doesn't.</span></li><li>Mit <b>be</b> antwortet man mit be, mit <b>do/does/did</b> bei einfachen Vollverben, mit <b>can/will/have</b> bei Modal- bzw. Perfektformen: <span class=\"ex\">Can you swim? - Yes, I can.</span></li><li>Das <b>Pronomen</b> passt sich an: aus you wird oft I, aus your friend wird he/she: <span class=\"ex\">Is your sister here? - Yes, she is.</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Do you like coffee? – Yes, I ___.",
      "optionen": [
        "do",
        "like",
        "am"
      ],
      "richtig": 0,
      "erklaerung": "Frage mit 'do' -> Kurzantwort mit 'do'."
    },
    {
      "type": "mc",
      "frage": "Are you tired? – No, I ___.",
      "optionen": [
        "amn't",
        "am not",
        "not am"
      ],
      "richtig": 1,
      "erklaerung": "Bei 'be' wird mit 'am not' verneint; 'amn't' gibt es nicht."
    },
    {
      "type": "gap",
      "frage": "Is she a teacher? – Yes, she ___.",
      "richtig": [
        "is"
      ],
      "erklaerung": "Frage mit 'is' -> Kurzantwort 'Yes, she is'."
    },
    {
      "type": "mc",
      "frage": "Can he swim? – Yes, he ___.",
      "optionen": [
        "can",
        "cans",
        "does"
      ],
      "richtig": 0,
      "erklaerung": "Modalverb 'can' wird in der Kurzantwort wiederholt."
    },
    {
      "type": "gap",
      "frage": "Does he play tennis? – No, he ___ (Kurzform).",
      "richtig": [
        "doesn't",
        "does not"
      ],
      "erklaerung": "3. Person Singular im Present Simple -> 'doesn't'."
    },
    {
      "type": "mc",
      "frage": "Have you finished? – Yes, I ___.",
      "optionen": [
        "did",
        "have",
        "do"
      ],
      "richtig": 1,
      "erklaerung": "Present Perfect mit 'have' -> Kurzantwort 'have'."
    },
    {
      "type": "gap",
      "frage": "Are they at home? – No, they ___ (Kurzform).",
      "richtig": [
        "aren't",
        "are not"
      ],
      "erklaerung": "'be' im Plural -> 'aren't'."
    },
    {
      "type": "mc",
      "frage": "Did you see the film? – Yes, I ___.",
      "optionen": [
        "saw",
        "did",
        "have"
      ],
      "richtig": 1,
      "erklaerung": "Past Simple-Frage mit 'did' -> Kurzantwort 'did'."
    },
    {
      "type": "gap",
      "frage": "Is it cold today? – Yes, it ___.",
      "richtig": [
        "is"
      ],
      "erklaerung": "'is' wird in der positiven Kurzantwort wiederholt."
    },
    {
      "type": "mc",
      "frage": "Do they live here? – No, they ___.",
      "optionen": [
        "don't",
        "doesn't",
        "aren't"
      ],
      "richtig": 0,
      "erklaerung": "Plural im Present Simple -> 'don't'."
    },
    {
      "type": "transform",
      "frage": "Beantworte kurz und bejahend: 'Are you ready?'",
      "richtig": [
        "Yes, I am.",
        "Yes, I am"
      ],
      "erklaerung": "'be'-Frage -> 'Yes, I am.'"
    },
    {
      "type": "gap",
      "frage": "Will you come to the party? – Yes, I ___.",
      "richtig": [
        "will"
      ],
      "erklaerung": "Future mit 'will' -> Kurzantwort 'will'."
    },
    {
      "type": "mc",
      "frage": "Was the test difficult? – No, it ___.",
      "optionen": [
        "wasn't",
        "weren't",
        "didn't"
      ],
      "richtig": 0,
      "erklaerung": "'was' im Singular -> 'wasn't'."
    },
    {
      "type": "gap",
      "frage": "Does your sister speak French? – Yes, she ___.",
      "richtig": [
        "does"
      ],
      "erklaerung": "3. Person Singular -> Kurzantwort 'does'."
    },
    {
      "type": "transform",
      "frage": "Beantworte kurz und verneinend (Kurzform): 'Has he got a car?'",
      "richtig": [
        "No, he hasn't.",
        "No, he hasn't",
        "No, he has not.",
        "No, he has not"
      ],
      "erklaerung": "'have got'-Frage -> 'No, he hasn't.'"
    },
    {
      "type": "mc",
      "frage": "Were they happy with the result? – Yes, they ___.",
      "optionen": [
        "was",
        "were",
        "did"
      ],
      "richtig": 1,
      "erklaerung": "Plural in der Vergangenheit von 'be' -> 'were'."
    },
    {
      "type": "gap",
      "frage": "Should I call him? – No, you ___ (Kurzform).",
      "richtig": [
        "shouldn't",
        "should not"
      ],
      "erklaerung": "Modalverb 'should' -> Verneinung 'shouldn't'."
    },
    {
      "type": "mc",
      "frage": "Is your brother coming with us? – No, he ___.",
      "optionen": [
        "doesn't",
        "isn't",
        "won't"
      ],
      "richtig": 1,
      "erklaerung": "Present Continuous mit 'is' -> Kurzantwort 'isn't'."
    },
    {
      "type": "transform",
      "frage": "Beantworte kurz und bejahend: 'Could she help you?'",
      "richtig": [
        "Yes, she could.",
        "Yes, she could"
      ],
      "erklaerung": "Modalverb 'could' wird in der Kurzantwort wiederholt."
    },
    {
      "type": "gap",
      "frage": "Are you going to study tonight? – Yes, I ___.",
      "richtig": [
        "am"
      ],
      "erklaerung": "'be going to' nutzt 'be' -> Kurzantwort 'am'."
    },
    {
      "type": "mc",
      "frage": "Has the train arrived yet? – Yes, it ___.",
      "optionen": [
        "has",
        "is",
        "did"
      ],
      "richtig": 0,
      "erklaerung": "Present Perfect mit 'has' (3. Pers. Sg.) -> 'has'."
    },
    {
      "type": "gap",
      "frage": "Must we wear a uniform? – No, you ___ (verneinte Modalform, Kurzform).",
      "richtig": [
        "don't have to",
        "do not have to"
      ],
      "erklaerung": "Verneinung von 'must' (keine Pflicht) ist 'don't have to', nicht 'mustn't'."
    },
    {
      "type": "transform",
      "frage": "Beantworte kurz und verneinend (Kurzform): 'Did the children enjoy the trip?'",
      "richtig": [
        "No, they didn't.",
        "No, they didn't",
        "No, they did not.",
        "No, they did not"
      ],
      "erklaerung": "Past Simple mit 'did', Plural -> 'No, they didn't.'"
    },
    {
      "type": "mc",
      "frage": "Would you like some tea? – Yes, I ___.",
      "optionen": [
        "do",
        "would",
        "like"
      ],
      "richtig": 1,
      "erklaerung": "'Would you like' -> Kurzantwort mit 'would'."
    },
    {
      "type": "gap",
      "frage": "Have your parents been to London? – No, they ___ (Kurzform).",
      "richtig": [
        "haven't",
        "have not"
      ],
      "erklaerung": "Present Perfect mit 'have', Plural -> 'haven't'."
    },
    {
      "type": "mc",
      "frage": "Is anyone helping you? – No, ___.",
      "optionen": [
        "nobody is",
        "nobody isn't",
        "anybody isn't"
      ],
      "richtig": 0,
      "erklaerung": "Mit 'nobody' steht das Verb positiv: 'No, nobody is.'"
    },
    {
      "type": "transform",
      "frage": "Beantworte kurz und bejahend: 'Hadn't they left before you arrived?'",
      "richtig": [
        "Yes, they had.",
        "Yes, they had"
      ],
      "erklaerung": "Past Perfect mit 'had' -> bejahte Kurzantwort 'Yes, they had.'"
    },
    {
      "type": "gap",
      "frage": "You're coming, ___ you? – Yes, I am. (passende Frageanhängsel-Antwort: Lücke = Hilfsverb)",
      "richtig": [
        "aren't"
      ],
      "erklaerung": "Question tag zu 'You're coming' ist 'aren't you?'; Kurzantwort 'Yes, I am.'"
    },
    {
      "type": "mc",
      "frage": "Need I bring my passport? – No, you ___.",
      "optionen": [
        "needn't",
        "don't need",
        "mustn't"
      ],
      "richtig": 0,
      "erklaerung": "Modales 'need' -> verneinte Kurzantwort 'No, you needn't.'"
    },
    {
      "type": "transform",
      "frage": "Beantworte kurz und verneinend (Kurzform): 'Would the manager have approved this?'",
      "richtig": [
        "No, he wouldn't.",
        "No, she wouldn't.",
        "No, he wouldn't",
        "No, she wouldn't",
        "No, he would not.",
        "No, she would not."
      ],
      "erklaerung": "Conditional Perfect: nur das erste Hilfsverb 'would' steht in der Kurzantwort -> 'No, he/she wouldn't.'"
    }
  ]
};
