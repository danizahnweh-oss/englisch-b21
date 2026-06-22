/* Thema 21: Simple present – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Simple present",
  "intro": "Das Simple Present beschreibt Gewohnheiten, Fakten und regelmäßige Handlungen.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Wir nutzen das <b>Simple Present</b> für <b>Gewohnheiten</b>, Fakten und Routinen: <span class=\"ex\">I play tennis every Sunday.</span></li><li>In der <b>3. Person Singular</b> (he/she/it) hängt man ein <b>-s</b> an: <span class=\"ex\">She works in London.</span></li><li>Verneinung und Frage bildet man mit <b>do</b> / <b>does</b>: <span class=\"ex\">He doesn't like coffee.</span> <span class=\"ex\">Do you speak English?</span></li><li>Nach <b>does</b> und <b>doesn't</b> steht das Verb ohne -s (Grundform): <span class=\"ex\">She doesn't work here.</span></li><li>Typische <b>Signalwörter</b>: always, usually, often, sometimes, never, every day: <span class=\"ex\">They never watch TV.</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "She ___ to school every day.",
      "optionen": [
        "go",
        "goes",
        "going"
      ],
      "richtig": 1,
      "erklaerung": "3. Person Singular (she) bekommt im Simple Present die Endung -es bei 'go'."
    },
    {
      "type": "mc",
      "frage": "I ___ coffee in the morning.",
      "optionen": [
        "drinks",
        "drink",
        "am drink"
      ],
      "richtig": 1,
      "erklaerung": "Bei 'I' bleibt das Verb in der Grundform ohne -s."
    },
    {
      "type": "gap",
      "frage": "He ___ (play) football on Saturdays.",
      "richtig": [
        "plays"
      ],
      "erklaerung": "3. Person Singular (he) bekommt die Endung -s: plays."
    },
    {
      "type": "mc",
      "frage": "They ___ in a small village.",
      "optionen": [
        "lives",
        "live",
        "living"
      ],
      "richtig": 1,
      "erklaerung": "Bei 'they' (Plural) bleibt das Verb in der Grundform: live."
    },
    {
      "type": "gap",
      "frage": "My sister ___ (watch) TV every evening.",
      "richtig": [
        "watches"
      ],
      "erklaerung": "Verben auf -ch bekommen in der 3. Person Singular -es: watches."
    },
    {
      "type": "mc",
      "frage": "We ___ English at school.",
      "optionen": [
        "learns",
        "learn",
        "are learn"
      ],
      "richtig": 1,
      "erklaerung": "Bei 'we' steht das Verb in der Grundform: learn."
    },
    {
      "type": "gap",
      "frage": "The baby ___ (cry) when it is hungry.",
      "richtig": [
        "cries"
      ],
      "erklaerung": "Konsonant + y wird zu -ies: cry -> cries."
    },
    {
      "type": "transform",
      "frage": "Bilde die Verneinung: 'I like tea.'",
      "richtig": [
        "I do not like tea.",
        "I don't like tea."
      ],
      "erklaerung": "Verneinung mit 'do not / don't' + Grundform."
    },
    {
      "type": "mc",
      "frage": "___ you speak French?",
      "optionen": [
        "Does",
        "Do",
        "Are"
      ],
      "richtig": 1,
      "erklaerung": "Fragen mit 'you' bildet man mit 'Do'."
    },
    {
      "type": "gap",
      "frage": "Tom ___ (go) to work by bus.",
      "richtig": [
        "goes"
      ],
      "erklaerung": "'go' wird in der 3. Person Singular zu 'goes'."
    },
    {
      "type": "transform",
      "frage": "Bilde die Frage: 'She works in a bank.'",
      "richtig": [
        "Does she work in a bank?"
      ],
      "erklaerung": "Frage mit 'Does' + Grundform (work ohne -s)."
    },
    {
      "type": "mc",
      "frage": "My father ___ his car on Sundays.",
      "optionen": [
        "wash",
        "washes",
        "washs"
      ],
      "richtig": 1,
      "erklaerung": "Verben auf -sh bekommen -es: washes."
    },
    {
      "type": "gap",
      "frage": "We don't ___ (eat) meat.",
      "richtig": [
        "eat"
      ],
      "erklaerung": "Nach 'don't' steht die Grundform: eat."
    },
    {
      "type": "transform",
      "frage": "Verneine den Satz: 'He plays the guitar.'",
      "richtig": [
        "He does not play the guitar.",
        "He doesn't play the guitar."
      ],
      "erklaerung": "Verneinung in der 3. Person mit 'does not / doesn't' + Grundform (play)."
    },
    {
      "type": "mc",
      "frage": "___ your brother like pizza?",
      "optionen": [
        "Do",
        "Does",
        "Is"
      ],
      "richtig": 1,
      "erklaerung": "Frage in der 3. Person Singular mit 'Does'."
    },
    {
      "type": "gap",
      "frage": "Anna ___ (study) medicine at university.",
      "richtig": [
        "studies"
      ],
      "erklaerung": "Konsonant + y wird zu -ies: study -> studies."
    },
    {
      "type": "mc",
      "frage": "The shop ___ at 8 o'clock every morning.",
      "optionen": [
        "open",
        "opens",
        "is opening"
      ],
      "richtig": 1,
      "erklaerung": "3. Person Singular (the shop) braucht -s: opens."
    },
    {
      "type": "gap",
      "frage": "___ they often ___ (visit) their grandparents?",
      "richtig": [
        "Do | visit",
        "Do ... visit",
        "Do/visit"
      ],
      "erklaerung": "Frage mit 'Do' (they) + Grundform 'visit'."
    },
    {
      "type": "transform",
      "frage": "Setze in die 3. Person Singular (he): 'I do my homework after dinner.'",
      "richtig": [
        "He does his homework after dinner."
      ],
      "erklaerung": "'do' wird zu 'does', 'my' wird zu 'his'."
    },
    {
      "type": "mc",
      "frage": "She never ___ late for work.",
      "optionen": [
        "is",
        "are",
        "be"
      ],
      "richtig": 0,
      "erklaerung": "'be' in der 3. Person Singular ist 'is'; Häufigkeitsadverb 'never' vor dem Vollverb, aber nach 'is'."
    },
    {
      "type": "gap",
      "frage": "How often ___ you ___ (go) to the gym?",
      "richtig": [
        "do | go",
        "do ... go",
        "do/go"
      ],
      "erklaerung": "Fragewort + 'do' (you) + Grundform 'go'."
    },
    {
      "type": "mc",
      "frage": "Water ___ at 100 degrees Celsius.",
      "optionen": [
        "boil",
        "boils",
        "is boiling"
      ],
      "richtig": 1,
      "erklaerung": "Allgemeine Tatsache/Naturgesetz im Simple Present; Subjekt 'water' (3. Person) -> boils."
    },
    {
      "type": "gap",
      "frage": "My parents usually ___ (have) breakfast at seven.",
      "richtig": [
        "have"
      ],
      "erklaerung": "'my parents' ist Plural, daher Grundform 'have' (nicht 'has')."
    },
    {
      "type": "transform",
      "frage": "Bilde die Frage: 'The train leaves at noon.'",
      "richtig": [
        "Does the train leave at noon?"
      ],
      "erklaerung": "Frage mit 'Does' + Grundform 'leave' (das -s entfällt)."
    },
    {
      "type": "mc",
      "frage": "He ___ understand the question.",
      "optionen": [
        "doesn't",
        "don't",
        "isn't"
      ],
      "richtig": 0,
      "erklaerung": "Verneinung in der 3. Person Singular mit 'doesn't'."
    },
    {
      "type": "gap",
      "frage": "The sun ___ (rise) in the east.",
      "richtig": [
        "rises"
      ],
      "erklaerung": "Allgemeine Wahrheit; 3. Person Singular 'the sun' -> rises."
    },
    {
      "type": "transform",
      "frage": "Verneine den Satz: 'They go to church on Sundays.'",
      "richtig": [
        "They do not go to church on Sundays.",
        "They don't go to church on Sundays."
      ],
      "erklaerung": "Verneinung mit 'do not / don't' + Grundform 'go'."
    },
    {
      "type": "gap",
      "frage": "My colleague ___ (fly) to London twice a month.",
      "richtig": [
        "flies"
      ],
      "erklaerung": "Konsonant + y wird zu -ies: fly -> flies."
    },
    {
      "type": "mc",
      "frage": "Either Anna or her friends ___ the bill.",
      "optionen": [
        "pays",
        "pay",
        "is paying"
      ],
      "richtig": 1,
      "erklaerung": "Bei 'either ... or' richtet sich das Verb nach dem näheren Subjekt 'her friends' (Plural) -> pay."
    },
    {
      "type": "transform",
      "frage": "Setze in die 3. Person Singular (the manager): 'They watch the figures and fix the problems every week.'",
      "richtig": [
        "The manager watches the figures and fixes the problems every week."
      ],
      "erklaerung": "Beide Verben brauchen -es: watch -> watches, fix -> fixes."
    },
    {
      "type": "gap",
      "frage": "Neither of my brothers ___ (do) the dishes.",
      "richtig": [
        "does"
      ],
      "erklaerung": "'Neither of ...' gilt als Singular, daher 3. Person Singular 'does'."
    }
  ]
};
