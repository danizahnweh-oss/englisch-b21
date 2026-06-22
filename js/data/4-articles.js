/* Thema 4: Articles – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Articles",
  "intro": "Artikel (a, an, the oder kein Artikel) zeigen an, ob ein Nomen unbestimmt, bestimmt oder allgemein gemeint ist.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Den unbestimmten Artikel <b>a</b> nutzt du vor Konsonant-Lauten, <b>an</b> vor Vokal-Lauten: <span class=\"ex\">a book, an apple, an hour, a university</span>.</li><li>Der bestimmte Artikel <b>the</b> steht, wenn etwas <b>Bestimmtes</b> oder schon Bekanntes gemeint ist: <span class=\"ex\">the sun, the book you gave me</span>.</li><li><b>Kein Artikel</b> steht bei allgemeinen Pluralen, unzählbaren Nomen und den meisten Ländern/Namen: <span class=\"ex\">I like music. Dogs are loyal. She lives in Germany.</span></li><li>Wichtig ist der <b>Laut</b>, nicht der Buchstabe: <span class=\"ex\">an MP, a euro, an honest man</span>.</li><li><b>the</b> kommt bei Einzigartigem, Superlativen und Instrumenten: <span class=\"ex\">the best, the moon, play the piano</span>.</li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Choose the correct article: I have ___ apple in my bag.",
      "optionen": [
        "a",
        "an",
        "the"
      ],
      "richtig": 1,
      "erklaerung": "Vor Vokal-Lauten (apple = /æ/) steht 'an'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct article: She is ___ teacher.",
      "optionen": [
        "a",
        "an",
        "the"
      ],
      "richtig": 0,
      "erklaerung": "Vor Konsonant-Laut (teacher) steht 'a'."
    },
    {
      "type": "gap",
      "frage": "He bought ___ umbrella because it was raining.",
      "richtig": [
        "an"
      ],
      "erklaerung": "'umbrella' beginnt mit Vokal-Laut /ʌ/, also 'an'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct article: We saw ___ moon last night.",
      "optionen": [
        "a",
        "an",
        "the"
      ],
      "richtig": 2,
      "erklaerung": "Einzigartige Dinge (der Mond) nehmen 'the'."
    },
    {
      "type": "gap",
      "frage": "There is ___ cat sitting on the wall.",
      "richtig": [
        "a"
      ],
      "erklaerung": "Erstmalige Erwähnung, Konsonant-Laut -> 'a'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct article: I'd like ___ orange, please.",
      "optionen": [
        "a",
        "an",
        "the"
      ],
      "richtig": 1,
      "erklaerung": "'orange' beginnt mit Vokal-Laut /ɒ/, also 'an'."
    },
    {
      "type": "gap",
      "frage": "Can you pass me ___ salt? (the one on the table)",
      "richtig": [
        "the"
      ],
      "erklaerung": "Bestimmtes, bekanntes Objekt -> 'the'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct article: He works as ___ engineer.",
      "optionen": [
        "a",
        "an",
        "the"
      ],
      "richtig": 1,
      "erklaerung": "'engineer' beginnt mit Vokal-Laut /e/ -> 'an'."
    },
    {
      "type": "transform",
      "frage": "Setze den passenden Artikel ein: 'I want ___ banana.' Schreibe den vollständigen Satz.",
      "richtig": [
        "I want a banana.",
        "I want a banana"
      ],
      "erklaerung": "'banana' beginnt mit Konsonant-Laut /b/ -> 'a'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct article: She lives in ___ small house.",
      "optionen": [
        "a",
        "an",
        "the"
      ],
      "richtig": 0,
      "erklaerung": "'small' beginnt mit Konsonant-Laut -> 'a'."
    },
    {
      "type": "gap",
      "frage": "My brother is ___ honest man. (h is silent)",
      "richtig": [
        "an"
      ],
      "erklaerung": "'honest' hat stummes h, Laut beginnt mit Vokal -> 'an'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct article: This is ___ best film I've ever seen.",
      "optionen": [
        "a",
        "an",
        "the"
      ],
      "richtig": 2,
      "erklaerung": "Vor Superlativ (best) steht 'the'."
    },
    {
      "type": "gap",
      "frage": "He plays ___ guitar every evening.",
      "richtig": [
        "the"
      ],
      "erklaerung": "Vor Musikinstrumenten steht 'the'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct article: ___ sun rises in the east.",
      "optionen": [
        "A",
        "An",
        "The"
      ],
      "richtig": 2,
      "erklaerung": "Einzigartige Objekte (Sonne) -> 'the'."
    },
    {
      "type": "gap",
      "frage": "We had ___ dinner at eight o'clock. (kein Artikel nötig — schreibe das passende Wort oder '-')",
      "richtig": [
        "-",
        "no article",
        "kein",
        "nothing",
        "none",
        ""
      ],
      "erklaerung": "Vor Mahlzeiten (dinner) steht normalerweise kein Artikel."
    },
    {
      "type": "mc",
      "frage": "Choose the correct article: I read ___ interesting book yesterday.",
      "optionen": [
        "a",
        "an",
        "the"
      ],
      "richtig": 1,
      "erklaerung": "'interesting' beginnt mit Vokal-Laut -> 'an'."
    },
    {
      "type": "transform",
      "frage": "Fülle die Lücke und schreibe den ganzen Satz: 'She is ___ university student.' (u = /juː/)",
      "richtig": [
        "She is a university student.",
        "She is a university student"
      ],
      "erklaerung": "'university' beginnt mit Konsonant-Laut /j/ -> 'a'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct article: ___ children are playing in the garden.",
      "optionen": [
        "A",
        "The",
        "An"
      ],
      "richtig": 1,
      "erklaerung": "Bestimmte, bekannte Kinder -> 'the'."
    },
    {
      "type": "gap",
      "frage": "I go to ___ work by bus. (fester Ausdruck — schreibe das passende Wort oder '-')",
      "richtig": [
        "-",
        "no article",
        "kein",
        "nothing",
        "none",
        ""
      ],
      "erklaerung": "'go to work' ist ein fester Ausdruck ohne Artikel."
    },
    {
      "type": "mc",
      "frage": "Choose the correct article: He is ___ European citizen.",
      "optionen": [
        "a",
        "an",
        "the"
      ],
      "richtig": 0,
      "erklaerung": "'European' beginnt mit Konsonant-Laut /j/ -> 'a'."
    },
    {
      "type": "gap",
      "frage": "Paris is ___ capital of France.",
      "richtig": [
        "the"
      ],
      "erklaerung": "Einzigartige Bezeichnung (the capital) -> 'the'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct article: ___ love is more important than money. (allgemein)",
      "optionen": [
        "A",
        "The",
        "—"
      ],
      "richtig": 2,
      "erklaerung": "Abstrakte Begriffe allgemein nehmen keinen Artikel."
    },
    {
      "type": "gap",
      "frage": "My father went to ___ hospital because he was ill. (BrE, als Patient — schreibe das passende Wort oder '-')",
      "richtig": [
        "-",
        "no article",
        "kein",
        "nothing",
        "none",
        ""
      ],
      "erklaerung": "Als Patient: 'go to hospital' (BrE) ohne Artikel."
    },
    {
      "type": "transform",
      "frage": "Setze den richtigen Artikel ein und schreibe den Satz: 'The Alps are ___ highest mountains in Europe.'",
      "richtig": [
        "The Alps are the highest mountains in Europe.",
        "The Alps are the highest mountains in Europe"
      ],
      "erklaerung": "Vor Superlativ steht 'the'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct article: She wants to become ___ MP one day. (M = /em/)",
      "optionen": [
        "a",
        "an",
        "the"
      ],
      "richtig": 1,
      "erklaerung": "Abkürzung 'MP' beginnt mit Vokal-Laut /e/ -> 'an'."
    },
    {
      "type": "gap",
      "frage": "___ Thames flows through London. (Fluss)",
      "richtig": [
        "The",
        "the"
      ],
      "erklaerung": "Vor Flussnamen steht 'the'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct article: I visited ___ United States last summer.",
      "optionen": [
        "a",
        "an",
        "the"
      ],
      "richtig": 2,
      "erklaerung": "Länder im Plural/mit 'States' nehmen 'the'."
    },
    {
      "type": "gap",
      "frage": "Mount Everest is ___ highest mountain in the world, but we use no article before its name: ___ Everest. (zweite Lücke)",
      "richtig": [
        "-",
        "no article",
        "kein",
        "nothing",
        "none",
        ""
      ],
      "erklaerung": "Vor einzelnen Bergnamen (Everest) steht kein Artikel."
    },
    {
      "type": "transform",
      "frage": "Korrigiere den Artikelfehler und schreibe den Satz neu: 'He plays a football every weekend.'",
      "richtig": [
        "He plays football every weekend.",
        "He plays football every weekend"
      ],
      "erklaerung": "Vor Sportarten (football) steht kein Artikel."
    },
    {
      "type": "mc",
      "frage": "Choose the correct article: ___ rich should help ___ poor. (welche Kombination?)",
      "optionen": [
        "The / the",
        "A / a",
        "— / —"
      ],
      "richtig": 0,
      "erklaerung": "'the + Adjektiv' bezeichnet eine Gruppe (die Reichen, die Armen)."
    },
    {
      "type": "transform",
      "frage": "Korrigiere den Fehler und schreibe den Satz neu: 'She is the best at the maths in her class.'",
      "richtig": [
        "She is the best at maths in her class.",
        "She is the best at maths in her class"
      ],
      "erklaerung": "Schulfächer (maths) stehen ohne Artikel; 'the best' bleibt."
    }
  ]
};
