/* Thema 10: Possessive pronouns – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Possessive pronouns",
  "intro": "Possessivpronomen (mine, yours, his, hers, ours, theirs) zeigen Besitz an und stehen allein, ohne ein Nomen danach.",
  "explain": "<h2>Kurz erklärt</h2><ul><li><b>Possessivpronomen</b> stehen <b>allein</b> und ersetzen ein Nomen: <span class=\"ex\">This book is mine.</span></li><li>Sie heißen: <b>mine, yours, his, hers, ours, theirs</b> <span class=\"ex\">Whose pen is this? It's hers.</span></li><li>Verwechsle sie nicht mit <b>Possessivbegleitern</b> (my, your, her ...), die <b>vor</b> einem Nomen stehen: <span class=\"ex\">my car</span> vs. <span class=\"ex\">mine</span></li><li>Es gibt <b>kein \"its\"</b> als Possessivpronomen und <b>keinen Apostroph</b>: nicht \"your's\", sondern <span class=\"ex\">yours</span></li><li>Oft nach dem Verb <b>to be</b> oder bei <b>Whose ...?</b>-Fragen: <span class=\"ex\">Whose keys are these? They're ours.</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "This book is ___. I bought it yesterday.",
      "optionen": [
        "mine",
        "my",
        "me"
      ],
      "richtig": 0,
      "erklaerung": "Possessivpronomen 'mine' steht allein, 'my' bräuchte ein Nomen."
    },
    {
      "type": "gap",
      "frage": "Is this your pen? Yes, it's ___ (I).",
      "richtig": [
        "mine"
      ],
      "erklaerung": "Das Possessivpronomen zu 'I' ist 'mine'."
    },
    {
      "type": "mc",
      "frage": "That car is ___. They drive it every day.",
      "optionen": [
        "their",
        "theirs",
        "them"
      ],
      "richtig": 1,
      "erklaerung": "Allein stehend heißt es 'theirs', nicht 'their'."
    },
    {
      "type": "gap",
      "frage": "This jacket isn't my jacket, it's ___ (you).",
      "richtig": [
        "yours"
      ],
      "erklaerung": "Das Possessivpronomen zu 'you' ist 'yours'."
    },
    {
      "type": "mc",
      "frage": "The dog wagged ___ tail happily.",
      "optionen": [
        "its",
        "it's",
        "his"
      ],
      "richtig": 0,
      "erklaerung": "'its' ist das Possessivbegleiter; 'it's' bedeutet 'it is'."
    },
    {
      "type": "gap",
      "frage": "Whose bag is this? It's ___ (she).",
      "richtig": [
        "hers"
      ],
      "erklaerung": "Das Possessivpronomen zu 'she' ist 'hers'."
    },
    {
      "type": "mc",
      "frage": "This is my seat and that one is ___.",
      "optionen": [
        "your",
        "yours",
        "you're"
      ],
      "richtig": 1,
      "erklaerung": "Allein stehend: 'yours'."
    },
    {
      "type": "gap",
      "frage": "These keys are ___ (we), not theirs.",
      "richtig": [
        "ours"
      ],
      "erklaerung": "Das Possessivpronomen zu 'we' ist 'ours'."
    },
    {
      "type": "mc",
      "frage": "Is this umbrella ___?",
      "optionen": [
        "he",
        "his",
        "him"
      ],
      "richtig": 1,
      "erklaerung": "Das Possessivpronomen zu 'he' ist 'his'."
    },
    {
      "type": "gap",
      "frage": "My phone is broken. Can I use ___ (you)?",
      "richtig": [
        "yours"
      ],
      "erklaerung": "'yours' ersetzt 'your phone'."
    },
    {
      "type": "mc",
      "frage": "Our garden is bigger than ___.",
      "optionen": [
        "their",
        "theirs",
        "them"
      ],
      "richtig": 1,
      "erklaerung": "Nach 'than' steht das allein stehende 'theirs'."
    },
    {
      "type": "transform",
      "frage": "Schreibe mit Possessivpronomen: 'This is my idea.' -> 'This idea is ___.'",
      "richtig": [
        "This idea is mine.",
        "This idea is mine"
      ],
      "erklaerung": "'my idea' wird zu 'mine' am Satzende."
    },
    {
      "type": "gap",
      "frage": "Her room is tidy, but ___ (he) is a mess.",
      "richtig": [
        "his"
      ],
      "erklaerung": "'his' ersetzt 'his room'."
    },
    {
      "type": "mc",
      "frage": "A friend of ___ is coming to visit us.",
      "optionen": [
        "our",
        "ours",
        "us"
      ],
      "richtig": 1,
      "erklaerung": "Nach 'a friend of' steht das Possessivpronomen 'ours'."
    },
    {
      "type": "transform",
      "frage": "Schreibe mit Possessivpronomen: 'That is your decision.' -> 'That decision is ___.'",
      "richtig": [
        "That decision is yours.",
        "That decision is yours"
      ],
      "erklaerung": "'your decision' wird zu 'yours'."
    },
    {
      "type": "gap",
      "frage": "We finished our project; have they finished ___ (they)?",
      "richtig": [
        "theirs"
      ],
      "erklaerung": "'theirs' ersetzt 'their project'."
    },
    {
      "type": "mc",
      "frage": "My answer is correct, but ___ is wrong.",
      "optionen": [
        "her",
        "hers",
        "she"
      ],
      "richtig": 1,
      "erklaerung": "Allein stehend: 'hers' für 'her answer'."
    },
    {
      "type": "gap",
      "frage": "This isn't your coat. ___ (I) is the blue one over there.",
      "richtig": [
        "Mine"
      ],
      "erklaerung": "'Mine' steht am Satzanfang allein für 'my coat'."
    },
    {
      "type": "transform",
      "frage": "Schreibe mit Possessivpronomen: 'These are their tickets.' -> 'These tickets are ___.'",
      "richtig": [
        "These tickets are theirs.",
        "These tickets are theirs"
      ],
      "erklaerung": "'their tickets' wird zu 'theirs'."
    },
    {
      "type": "mc",
      "frage": "I lost my map, so we used ___.",
      "optionen": [
        "her",
        "hers",
        "she's"
      ],
      "richtig": 1,
      "erklaerung": "'hers' ersetzt 'her map'."
    },
    {
      "type": "gap",
      "frage": "Those seats are ___ (we); please don't sit there.",
      "richtig": [
        "ours"
      ],
      "erklaerung": "'ours' ersetzt 'our seats'."
    },
    {
      "type": "mc",
      "frage": "Excuse me, I think this place at the table is ___.",
      "optionen": [
        "mine",
        "my",
        "me"
      ],
      "richtig": 0,
      "erklaerung": "Allein stehend: 'mine'."
    },
    {
      "type": "transform",
      "frage": "Schreibe mit Possessivpronomen: 'It is our responsibility.' -> 'The responsibility is ___.'",
      "richtig": [
        "The responsibility is ours.",
        "The responsibility is ours"
      ],
      "erklaerung": "'our responsibility' wird zu 'ours'."
    },
    {
      "type": "gap",
      "frage": "Your handwriting is much neater than ___ (I).",
      "richtig": [
        "mine"
      ],
      "erklaerung": "Nach 'than' steht 'mine' für 'my handwriting'."
    },
    {
      "type": "mc",
      "frage": "They claimed the prize was ___, but we disagreed.",
      "optionen": [
        "their",
        "theirs",
        "them"
      ],
      "richtig": 1,
      "erklaerung": "Allein stehend nach 'was': 'theirs'."
    },
    {
      "type": "transform",
      "frage": "Schreibe mit Possessivpronomen: 'This is her seat.' -> 'This seat is ___.'",
      "richtig": [
        "This seat is hers.",
        "This seat is hers"
      ],
      "erklaerung": "'her seat' wird zu 'hers'."
    },
    {
      "type": "gap",
      "frage": "We should respect their opinions, and they should respect ___ (we).",
      "richtig": [
        "ours"
      ],
      "erklaerung": "'ours' ersetzt 'our opinions'."
    },
    {
      "type": "mc",
      "frage": "That brilliant suggestion of ___ saved the whole meeting.",
      "optionen": [
        "her",
        "hers",
        "she"
      ],
      "richtig": 1,
      "erklaerung": "In der Konstruktion 'of + Possessivpronomen' steht 'hers'."
    },
    {
      "type": "transform",
      "frage": "Schreibe ohne Wiederholung des Nomens: 'His car is fast and my car is fast too.' -> 'His car is fast and ___ is fast too.'",
      "richtig": [
        "His car is fast and mine is fast too.",
        "mine is fast too",
        "mine"
      ],
      "erklaerung": "'my car' wird zum Possessivpronomen 'mine'."
    },
    {
      "type": "gap",
      "frage": "Their house has a garden; ___ (we) has a balcony instead.",
      "richtig": [
        "ours"
      ],
      "erklaerung": "'ours' ersetzt 'our house'."
    },
    {
      "type": "mc",
      "frage": "Whose turn is it? I'm sure it's ___, not mine.",
      "optionen": [
        "your",
        "yours",
        "you"
      ],
      "richtig": 1,
      "erklaerung": "Allein stehend: 'yours'."
    },
    {
      "type": "transform",
      "frage": "Schreibe mit Possessivpronomen: 'Is this your and your sister's room?' -> 'Is this room ___?' (you, plural)",
      "richtig": [
        "Is this room yours?",
        "yours"
      ],
      "erklaerung": "'yours' gilt auch fuer den Plural 'you'."
    }
  ]
};
