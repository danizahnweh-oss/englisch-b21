/* Thema 11: Indefinite pronouns – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Indefinite pronouns",
  "intro": "Indefinite pronouns wie <span class=\"ex\">someone</span>, <span class=\"ex\">anything</span> oder <span class=\"ex\">everybody</span> beziehen sich auf unbestimmte Personen, Dinge oder Orte.",
  "explain": "<h2>Kurz erklärt</h2><ul><li><b>some-</b> nutzt man meist in <b>Aussagesätzen</b> und höflichen Bitten/Angeboten: <span class=\"ex\">I need something to drink.</span></li><li><b>any-</b> steht meist in <b>Verneinungen</b> und <b>Fragen</b>: <span class=\"ex\">Is there anyone at home?</span></li><li><b>no-</b> hat schon eine <b>verneinende</b> Bedeutung, das Verb bleibt <b>bejaht</b>: <span class=\"ex\">Nobody knows the answer.</span></li><li><b>every-</b> bedeutet <b>alle/jeder</b> und wird mit einem <b>Singular-Verb</b> verbunden: <span class=\"ex\">Everybody is happy.</span></li><li>Die Endungen <b>-one/-body</b> meinen Personen, <b>-thing</b> meint Sachen, <b>-where</b> meint Orte: <span class=\"ex\">We went nowhere yesterday.</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Is there ___ in the kitchen? I heard a noise.",
      "optionen": [
        "somebody",
        "anybody",
        "nobody"
      ],
      "richtig": 1,
      "erklaerung": "In Fragen verwendet man normalerweise 'anybody'."
    },
    {
      "type": "gap",
      "frage": "I'm hungry. I'd like ___ to eat. (positiver Satz)",
      "richtig": [
        "something"
      ],
      "erklaerung": "Im positiven Aussagesatz steht 'something'."
    },
    {
      "type": "mc",
      "frage": "There is ___ in my bag. It's completely empty.",
      "optionen": [
        "something",
        "anything",
        "nothing"
      ],
      "richtig": 2,
      "erklaerung": "'nothing' drückt 'gar nichts' aus (verneinendes Pronomen ohne weitere Verneinung)."
    },
    {
      "type": "gap",
      "frage": "I didn't see ___ at the party last night. (Lücke = niemanden, mit 'didn't')",
      "richtig": [
        "anybody",
        "anyone"
      ],
      "erklaerung": "Nach einer Verneinung mit 'didn't' steht 'anybody/anyone'."
    },
    {
      "type": "mc",
      "frage": "___ wants to be happy in life.",
      "optionen": [
        "Everyone",
        "Anyone",
        "No one"
      ],
      "richtig": 0,
      "erklaerung": "'Everyone' (jeder) passt zur allgemeinen Aussage."
    },
    {
      "type": "gap",
      "frage": "Would you like ___ more coffee? (höfliches Angebot)",
      "richtig": [
        "some"
      ],
      "erklaerung": "Bei Angeboten/Bitten verwendet man 'some' statt 'any'."
    },
    {
      "type": "mc",
      "frage": "I looked everywhere, but I could find my keys ___.",
      "optionen": [
        "nowhere",
        "anywhere",
        "somewhere"
      ],
      "richtig": 1,
      "erklaerung": "Nach 'could not / couldn't' (verneinter Kontext) steht 'anywhere'."
    },
    {
      "type": "gap",
      "frage": "___ knows the answer to this question? Please raise your hand. (= Weiß irgendjemand ...)",
      "richtig": [
        "Does anybody",
        "Does anyone"
      ],
      "erklaerung": "In der Frage steht 'anybody/anyone' mit dem Hilfsverb 'does'."
    },
    {
      "type": "mc",
      "frage": "Let's go ___ warm for the holidays, like Spain.",
      "optionen": [
        "anywhere",
        "somewhere",
        "nowhere"
      ],
      "richtig": 1,
      "erklaerung": "Positive Aussage/Vorschlag: 'somewhere'."
    },
    {
      "type": "gap",
      "frage": "I have ___ to tell you. It's really important! (positiv = etwas)",
      "richtig": [
        "something"
      ],
      "erklaerung": "Positiver Aussagesatz: 'something'."
    },
    {
      "type": "transform",
      "frage": "Verneine den Satz mit 'nothing': 'There is something in the box.'",
      "richtig": [
        "There is nothing in the box.",
        "There's nothing in the box."
      ],
      "erklaerung": "'something' wird im verneinten Sinn zu 'nothing' (Verb bleibt bejaht)."
    },
    {
      "type": "mc",
      "frage": "___ of the students passed the exam. They all failed.",
      "optionen": [
        "None",
        "Anyone",
        "Someone"
      ],
      "richtig": 0,
      "erklaerung": "'None of' bedeutet 'keiner von' und passt zu 'they all failed'."
    },
    {
      "type": "gap",
      "frage": "Is there ___ I can do to help you? (Frage = irgendetwas)",
      "richtig": [
        "anything"
      ],
      "erklaerung": "In Fragen steht 'anything'."
    },
    {
      "type": "mc",
      "frage": "She said ___ during the meeting. She just stayed silent.",
      "optionen": [
        "anything",
        "nothing",
        "something"
      ],
      "richtig": 1,
      "erklaerung": "'said nothing' (sie sagte nichts) – einfache Verneinung über das Pronomen."
    },
    {
      "type": "gap",
      "frage": "___ has to leave now; you can all stay. (= Niemand)",
      "richtig": [
        "Nobody",
        "No one"
      ],
      "erklaerung": "'Nobody/No one' als verneintes Subjekt; das Verb steht bejaht."
    },
    {
      "type": "transform",
      "frage": "Mach aus der Verneinung eine Aussage mit 'nobody': 'There isn't anybody at home.'",
      "richtig": [
        "There is nobody at home.",
        "There's nobody at home.",
        "Nobody is at home.",
        "Nobody's at home."
      ],
      "erklaerung": "'isn't anybody' entspricht 'is nobody' (eine Verneinung)."
    },
    {
      "type": "mc",
      "frage": "If ___ calls, please take a message.",
      "optionen": [
        "anyone",
        "no one",
        "everyone"
      ],
      "richtig": 0,
      "erklaerung": "Nach 'if' steht oft 'anyone' (im Sinne von 'irgendjemand')."
    },
    {
      "type": "gap",
      "frage": "Hardly ___ came to the concert; the hall was almost empty. (= kaum jemand)",
      "richtig": [
        "anybody",
        "anyone"
      ],
      "erklaerung": "'hardly' hat verneinende Bedeutung, daher 'anybody/anyone'."
    },
    {
      "type": "mc",
      "frage": "___ of my two sisters lives abroad; one is in Canada, the other in Japan.",
      "optionen": [
        "Both",
        "None",
        "Either"
      ],
      "richtig": 0,
      "erklaerung": "'Both' (beide) passt, da von beiden Schwestern die Rede ist."
    },
    {
      "type": "gap",
      "frage": "Everybody ___ done their homework, haven't they? Wähle das passende Hilfsverb: ___ = has/have. (Lücke = has)",
      "richtig": [
        "has"
      ],
      "erklaerung": "'Everybody' ist grammatisch Singular und verlangt 'has'."
    },
    {
      "type": "mc",
      "frage": "I don't want ___ to know my secret.",
      "optionen": [
        "someone",
        "anyone",
        "no one"
      ],
      "richtig": 1,
      "erklaerung": "Nach 'don't want' (Verneinung) steht 'anyone'."
    },
    {
      "type": "transform",
      "frage": "Forme um, ohne die Bedeutung zu ändern (nutze 'anything'): 'I bought nothing at the shop.'",
      "richtig": [
        "I didn't buy anything at the shop.",
        "I did not buy anything at the shop."
      ],
      "erklaerung": "'bought nothing' = 'didn't buy anything' (Verneinung wandert ins Verb)."
    },
    {
      "type": "mc",
      "frage": "Everyone in the room ___ surprised by the news.",
      "optionen": [
        "were",
        "was",
        "are"
      ],
      "richtig": 1,
      "erklaerung": "'Everyone' ist Singular, daher 'was'."
    },
    {
      "type": "gap",
      "frage": "There's ___ at the door, but I can't see who it is. (positiv = jemand)",
      "richtig": [
        "somebody",
        "someone"
      ],
      "erklaerung": "Im positiven Satz steht 'somebody/someone'."
    },
    {
      "type": "mc",
      "frage": "We can meet at ___ time that suits you; I'm free all week.",
      "optionen": [
        "some",
        "any",
        "no"
      ],
      "richtig": 1,
      "erklaerung": "Hier bedeutet 'any' = 'jede beliebige', daher 'any time'."
    },
    {
      "type": "gap",
      "frage": "Neither answer was correct, so I chose ___ of them. (= keine von beiden)",
      "richtig": [
        "neither"
      ],
      "erklaerung": "'neither' = keiner/keines von zweien."
    },
    {
      "type": "transform",
      "frage": "Setze ins Plural-Possessiv passend ein und schreibe den Satz richtig (geschlechtsneutral): 'Somebody left ___ umbrella here.'",
      "richtig": [
        "Somebody left their umbrella here.",
        "Somebody left his or her umbrella here.",
        "Someone left their umbrella here.",
        "Someone left his or her umbrella here."
      ],
      "erklaerung": "Für unbestimmte Personen wird heute meist 'their' (singular they) verwendet."
    },
    {
      "type": "mc",
      "frage": "She knows ___ about cars; she can repair almost any engine.",
      "optionen": [
        "anything",
        "everything",
        "nothing"
      ],
      "richtig": 1,
      "erklaerung": "'everything' (alles) passt zur Aussage über umfassendes Wissen."
    },
    {
      "type": "gap",
      "frage": "I've looked all over and there's ___ left in the fridge. We need to go shopping. (= nichts)",
      "richtig": [
        "nothing"
      ],
      "erklaerung": "'nothing' als einzige Verneinung im Satz (Verb 'is' bleibt bejaht)."
    },
    {
      "type": "mc",
      "frage": "Scarcely ___ of the guests had arrived when the storm started.",
      "optionen": [
        "any",
        "some",
        "no"
      ],
      "richtig": 0,
      "erklaerung": "'Scarcely' wirkt verneinend, deshalb 'any'."
    },
    {
      "type": "transform",
      "frage": "Verbinde zur natürlichen Verneinung mit 'anywhere': 'I went nowhere yesterday.'",
      "richtig": [
        "I didn't go anywhere yesterday.",
        "I did not go anywhere yesterday."
      ],
      "erklaerung": "'went nowhere' = 'didn't go anywhere' (Verneinung ins Verb verlagert)."
    }
  ]
};
