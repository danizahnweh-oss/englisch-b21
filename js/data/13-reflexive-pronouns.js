/* Thema 13: Reflexive pronouns – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Reflexive pronouns",
  "intro": "Reflexivpronomen (myself, yourself, himself ...) verwendet man, wenn Subjekt und Objekt dieselbe Person sind.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Reflexivpronomen zeigen, dass jemand etwas <b>mit sich selbst</b> tut: <span class=\"ex\">She hurt herself.</span></li><li>Die Formen: <b>myself, yourself, himself, herself, itself, ourselves, yourselves, themselves</b>. <span class=\"ex\">We made it ourselves.</span></li><li><b>by + reflexiv</b> bedeutet \"allein / ohne Hilfe\": <span class=\"ex\">He did it by himself.</span></li><li>Manche Verben sind im Englischen <b>nicht</b> reflexiv, anders als im Deutschen: <span class=\"ex\">I feel good.</span> (nicht \"feel myself\")</li><li>Zur Betonung steht das Pronomen oft am Satzende: <span class=\"ex\">The teacher told me herself.</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "I looked at ___ in the mirror.",
      "optionen": [
        "myself",
        "me",
        "mine"
      ],
      "richtig": 0,
      "erklaerung": "1. Person Singular Reflexivpronomen: myself."
    },
    {
      "type": "mc",
      "frage": "He hurt ___ while playing football.",
      "optionen": [
        "him",
        "himself",
        "his"
      ],
      "richtig": 1,
      "erklaerung": "3. Person maskulin: himself."
    },
    {
      "type": "gap",
      "frage": "She made the cake all by ___ .",
      "richtig": [
        "herself"
      ],
      "erklaerung": "3. Person feminin: herself; 'by herself' = allein."
    },
    {
      "type": "mc",
      "frage": "The cat is cleaning ___ .",
      "optionen": [
        "itself",
        "himself",
        "themselves"
      ],
      "richtig": 0,
      "erklaerung": "Für ein Tier/Sache: itself."
    },
    {
      "type": "gap",
      "frage": "We enjoyed ___ at the party last night.",
      "richtig": [
        "ourselves"
      ],
      "erklaerung": "1. Person Plural: ourselves."
    },
    {
      "type": "mc",
      "frage": "Did you make this dress ___ ?",
      "optionen": [
        "yourself",
        "yourselves",
        "yourselfs"
      ],
      "richtig": 0,
      "erklaerung": "2. Person Singular: yourself."
    },
    {
      "type": "gap",
      "frage": "The children dressed ___ before school.",
      "richtig": [
        "themselves"
      ],
      "erklaerung": "3. Person Plural: themselves."
    },
    {
      "type": "mc",
      "frage": "I taught ___ how to play the guitar.",
      "optionen": [
        "me",
        "myself",
        "mine"
      ],
      "richtig": 1,
      "erklaerung": "Subjekt und Objekt sind dieselbe Person: myself."
    },
    {
      "type": "gap",
      "frage": "Please help ___ to some coffee, everyone!",
      "richtig": [
        "yourselves"
      ],
      "erklaerung": "Mehrere angesprochene Personen: yourselves; 'help yourselves' = bedient euch."
    },
    {
      "type": "mc",
      "frage": "My brother and I painted the room ___ .",
      "optionen": [
        "ourself",
        "ourselves",
        "themselves"
      ],
      "richtig": 1,
      "erklaerung": "'My brother and I' = wir, also ourselves."
    },
    {
      "type": "gap",
      "frage": "She introduced ___ to the new colleagues.",
      "richtig": [
        "herself"
      ],
      "erklaerung": "3. Person feminin: herself."
    },
    {
      "type": "mc",
      "frage": "The robot can switch ___ off automatically.",
      "optionen": [
        "himself",
        "itself",
        "itselves"
      ],
      "richtig": 1,
      "erklaerung": "Sache/Maschine: itself."
    },
    {
      "type": "gap",
      "frage": "Be careful with the knife or you'll cut ___ .",
      "richtig": [
        "yourself"
      ],
      "erklaerung": "'you' angesprochen, eine Person: yourself."
    },
    {
      "type": "transform",
      "frage": "Setze das passende Reflexivpronomen ein: 'Tom blamed ___ for the mistake.'",
      "richtig": [
        "Tom blamed himself for the mistake.",
        "Tom blamed himself for the mistake"
      ],
      "erklaerung": "Tom = maskulin: himself."
    },
    {
      "type": "mc",
      "frage": "We should be proud of ___ .",
      "optionen": [
        "us",
        "ourself",
        "ourselves"
      ],
      "richtig": 2,
      "erklaerung": "1. Person Plural: ourselves."
    },
    {
      "type": "gap",
      "frage": "He lives by ___ in a small flat.",
      "richtig": [
        "himself"
      ],
      "erklaerung": "'by himself' = allein/ohne Hilfe."
    },
    {
      "type": "mc",
      "frage": "Which sentence is correct?",
      "optionen": [
        "I wash me every morning.",
        "I wash myself every morning.",
        "I wash mine every morning."
      ],
      "richtig": 1,
      "erklaerung": "Reflexive Handlung auf das Subjekt: myself."
    },
    {
      "type": "gap",
      "frage": "The story itself was boring, but the film ___ was great.",
      "richtig": [
        "itself"
      ],
      "erklaerung": "Betonendes Reflexivpronomen für 'film' (Sache): itself."
    },
    {
      "type": "transform",
      "frage": "Vervollständige mit Reflexivpronomen: 'The students organised the trip ___ .'",
      "richtig": [
        "The students organised the trip themselves.",
        "The students organised the trip themselves",
        "The students organized the trip themselves.",
        "The students organized the trip themselves"
      ],
      "erklaerung": "Betonend: sie selbst, ohne Hilfe = themselves."
    },
    {
      "type": "mc",
      "frage": "Don't worry about me; I can look after ___ .",
      "optionen": [
        "me",
        "myself",
        "mine"
      ],
      "richtig": 1,
      "erklaerung": "'look after myself' = auf sich selbst aufpassen."
    },
    {
      "type": "gap",
      "frage": "You and your sister can decide for ___ .",
      "richtig": [
        "yourselves"
      ],
      "erklaerung": "Zwei angesprochene Personen: yourselves."
    },
    {
      "type": "mc",
      "frage": "Choose the correct sentence (note: no reflexive needed).",
      "optionen": [
        "She washed herself the dishes.",
        "She washed the dishes herself.",
        "She washed the dishes her."
      ],
      "richtig": 1,
      "erklaerung": "Hier betonend nach dem Objekt: 'herself' = sie selbst."
    },
    {
      "type": "gap",
      "frage": "The president ___ opened the new hospital.",
      "richtig": [
        "himself",
        "herself"
      ],
      "erklaerung": "Betonendes Reflexivpronomen: er/sie persönlich."
    },
    {
      "type": "transform",
      "frage": "Schreibe mit 'each other' ODER Reflexivpronomen richtig: 'Anna and Ben looked at ___ in surprise (= gegenseitig).'",
      "richtig": [
        "Anna and Ben looked at each other in surprise.",
        "Anna and Ben looked at each other in surprise"
      ],
      "erklaerung": "Gegenseitig = each other, nicht themselves."
    },
    {
      "type": "mc",
      "frage": "Some verbs don't need a reflexive pronoun. Which is natural English?",
      "optionen": [
        "I feel myself tired today.",
        "I feel tired today.",
        "I feel me tired today."
      ],
      "richtig": 1,
      "erklaerung": "'feel' wird im Englischen nicht reflexiv gebraucht: I feel tired."
    },
    {
      "type": "gap",
      "frage": "After the long journey we treated ___ to a nice dinner.",
      "richtig": [
        "ourselves"
      ],
      "erklaerung": "'treat oneself' = sich etwas gönnen, 1. Person Plural: ourselves."
    },
    {
      "type": "mc",
      "frage": "Which sentence uses the reflexive pronoun correctly?",
      "optionen": [
        "He prides on himself his work.",
        "He prides himself on his work.",
        "He prides on his work himself."
      ],
      "richtig": 1,
      "erklaerung": "Feste Wendung: 'pride oneself on something'."
    },
    {
      "type": "transform",
      "frage": "Korrigiere den Fehler: 'Help yourself's to the cookies, kids.'",
      "richtig": [
        "Help yourselves to the cookies, kids.",
        "Help yourselves to the cookies, kids",
        "Help yourselves to the cookies kids."
      ],
      "erklaerung": "Plural von yourself ist 'yourselves', kein Apostroph."
    },
    {
      "type": "gap",
      "frage": "She convinced ___ that everything would be fine.",
      "richtig": [
        "herself"
      ],
      "erklaerung": "'convince oneself' = sich selbst überzeugen, feminin: herself."
    },
    {
      "type": "mc",
      "frage": "In which sentence is the reflexive pronoun used for emphasis?",
      "optionen": [
        "I cut myself on the glass.",
        "I built this house myself.",
        "I enjoyed myself a lot."
      ],
      "richtig": 1,
      "erklaerung": "'myself' nach dem Objekt betont, dass man es selbst tat (emphatisch)."
    },
    {
      "type": "gap",
      "frage": "The team had to motivate ___ before the final match.",
      "richtig": [
        "themselves"
      ],
      "erklaerung": "'team' als Gruppe von Personen: themselves."
    }
  ]
};
