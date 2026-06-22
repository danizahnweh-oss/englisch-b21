/* Thema 11: Indefinite pronouns – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Indefinite pronouns",
  "intro": "Indefinite pronouns wie <span class=\"ex\">someone</span>, <span class=\"ex\">anything</span> oder <span class=\"ex\">everybody</span> beziehen sich auf unbestimmte Personen, Dinge oder Orte.",
  "explain": "<h2>Kurz erklärt</h2><ul><li><b>some-</b> nutzt man meist in <b>Aussagesätzen</b> und höflichen Bitten/Angeboten: <span class=\"ex\">I need something to drink.</span></li><li><b>any-</b> steht meist in <b>Verneinungen</b> und <b>Fragen</b>: <span class=\"ex\">Is there anyone at home?</span></li><li><b>no-</b> hat schon eine <b>verneinende</b> Bedeutung, das Verb bleibt <b>bejaht</b>: <span class=\"ex\">Nobody knows the answer.</span></li><li><b>every-</b> bedeutet <b>alle/jeder</b> und wird mit einem <b>Singular-Verb</b> verbunden: <span class=\"ex\">Everybody is happy.</span></li><li>Die Endungen <b>-one/-body</b> meinen Personen, <b>-thing</b> meint Sachen, <b>-where</b> meint Orte: <span class=\"ex\">We went nowhere yesterday.</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Choose the correct option: I'm hungry. I'd like ___ to eat.",
      "optionen": [
        "something",
        "anything",
        "nothing"
      ],
      "richtig": 0,
      "erklaerung": "In bejahten Aussagesätzen verwendet man 'some-': 'something'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct option: Is there ___ in the kitchen? I heard a noise.",
      "optionen": [
        "someone",
        "anyone",
        "no one"
      ],
      "richtig": 1,
      "erklaerung": "In Fragen verwendet man normalerweise 'any-': 'anyone'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct option: ___ knows the answer, so the teacher explained it again.",
      "optionen": [
        "Nobody",
        "Anybody",
        "Somebody"
      ],
      "richtig": 0,
      "erklaerung": "Niemand kannte die Antwort: 'Nobody'. Das Verb bleibt bejaht (knows)."
    },
    {
      "type": "gap",
      "frage": "Fill the gap: There is ___ in my coffee. It tastes strange. (etwas)",
      "richtig": [
        "something"
      ],
      "erklaerung": "Bejahter Aussagesatz mit Sache: 'something'."
    },
    {
      "type": "gap",
      "frage": "Fill the gap: I looked everywhere, but I couldn't find my keys ___. (an einem beliebigen Ort, in Verneinung)",
      "richtig": [
        "anywhere"
      ],
      "erklaerung": "Nach einer Verneinung (couldn't) steht 'any-': 'anywhere'."
    },
    {
      "type": "gap",
      "frage": "Fill the gap: ___ in our class likes the new teacher. We all think she is great. (jeder/alle)",
      "richtig": [
        "Everybody",
        "Everyone",
        "everybody",
        "everyone"
      ],
      "erklaerung": "'Everybody'/'Everyone' bedeutet 'alle' und steht mit Singular-Verb (likes)."
    },
    {
      "type": "gap",
      "frage": "Fill the gap: Don't worry, ___ is going to hurt you. You are safe here. (niemand)",
      "richtig": [
        "nobody",
        "no one",
        "no-one"
      ],
      "erklaerung": "'Nobody'/'No one' hat verneinende Bedeutung; das Verb bleibt bejaht (is going)."
    },
    {
      "type": "transform",
      "frage": "Rewrite in the negative: I saw someone at the door. -> I didn't see ___ at the door.",
      "richtig": [
        "I didn't see anyone at the door.",
        "I didn't see anybody at the door.",
        "I did not see anyone at the door.",
        "I did not see anybody at the door."
      ],
      "erklaerung": "In Verneinungen wird aus 'someone' das 'anyone/anybody'."
    },
    {
      "type": "transform",
      "frage": "Rewrite with 'nothing' (same meaning): There isn't anything in the box.",
      "richtig": [
        "There is nothing in the box.",
        "There's nothing in the box."
      ],
      "erklaerung": "'isn't anything' = 'is nothing'. Bei 'nothing' bleibt das Verb bejaht."
    },
    {
      "type": "transform",
      "frage": "Make a question: He went somewhere yesterday. -> Where ___?",
      "richtig": [
        "Where did he go yesterday?",
        "Where did he go?"
      ],
      "erklaerung": "In der Frage entfällt 'somewhere'; man fragt mit 'Where ... did he go?'."
    }
  ]
};
