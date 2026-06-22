/* Thema 9: Demonstrative pronouns – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Demonstrative pronouns",
  "intro": "Demonstrativpronomen (this, that, these, those) zeigen auf Dinge oder Personen und unterscheiden nach Nähe und Anzahl.",
  "explain": "<h2>Kurz erklärt</h2><ul><li><b>this</b> = Einzahl, nah (hier): <span class=\"ex\">This book is mine.</span></li><li><b>these</b> = Mehrzahl, nah (hier): <span class=\"ex\">These books are mine.</span></li><li><b>that</b> = Einzahl, fern (dort): <span class=\"ex\">That car over there is fast.</span></li><li><b>those</b> = Mehrzahl, fern (dort): <span class=\"ex\">Those mountains look beautiful.</span></li><li>Am Telefon: <b>this</b> für sich selbst, <b>that</b>/<b>this</b> für den anderen: <span class=\"ex\">Hello, this is Tom. Is that Anna?</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "___ book here in my hand is really interesting.",
      "optionen": [
        "This",
        "These",
        "Those"
      ],
      "richtig": 0,
      "erklaerung": "\"book\" ist Einzahl und \"here in my hand\" zeigt Nähe, also \"This\"."
    },
    {
      "type": "mc",
      "frage": "Look at ___ stars in the sky tonight!",
      "optionen": [
        "that",
        "this",
        "those"
      ],
      "richtig": 2,
      "erklaerung": "\"stars\" ist Mehrzahl und am Himmel weit entfernt, also \"those\"."
    },
    {
      "type": "mc",
      "frage": "Hello, ___ is Sarah speaking. Can I talk to Mr Brown?",
      "optionen": [
        "that",
        "this",
        "these"
      ],
      "richtig": 1,
      "erklaerung": "Am Telefon stellt man sich selbst mit \"this is\" vor."
    },
    {
      "type": "gap",
      "frage": "___ shoes I'm wearing right now are new. (Schuhe an meinen Füßen)",
      "richtig": [
        "These",
        "these"
      ],
      "erklaerung": "\"shoes\" ist Mehrzahl und ganz nah (an den Füßen), also \"These\"."
    },
    {
      "type": "gap",
      "frage": "Do you see ___ house at the end of the street? (weit weg)",
      "richtig": [
        "that",
        "That"
      ],
      "erklaerung": "\"house\" ist Einzahl und am Ende der Straße entfernt, also \"that\"."
    },
    {
      "type": "gap",
      "frage": "___ is my sister, Emma. (Ich stelle die Person neben mir vor)",
      "richtig": [
        "This",
        "this"
      ],
      "erklaerung": "Beim Vorstellen einer nahen Person benutzt man \"This is\"."
    },
    {
      "type": "gap",
      "frage": "I don't like ___ socks over there; I prefer the blue ones. (weit entfernt, Mehrzahl)",
      "richtig": [
        "those",
        "Those"
      ],
      "erklaerung": "\"socks\" ist Mehrzahl und \"over there\" zeigt Entfernung, also \"those\"."
    },
    {
      "type": "transform",
      "frage": "Setze in den Singular: \"These apples are fresh.\"",
      "richtig": [
        "This apple is fresh.",
        "This apple is fresh"
      ],
      "erklaerung": "\"These\" (Plural, nah) wird im Singular zu \"This\", und \"apples are\" wird zu \"apple is\"."
    },
    {
      "type": "transform",
      "frage": "Setze in den Plural: \"That dog is barking.\"",
      "richtig": [
        "Those dogs are barking.",
        "Those dogs are barking"
      ],
      "erklaerung": "\"That\" (Singular, fern) wird im Plural zu \"Those\", und \"dog is\" wird zu \"dogs are\"."
    },
    {
      "type": "transform",
      "frage": "Setze in den Plural: \"This is my friend.\"",
      "richtig": [
        "These are my friends.",
        "These are my friends"
      ],
      "erklaerung": "\"This is\" wird im Plural zu \"These are\", und \"friend\" wird zu \"friends\"."
    }
  ]
};
