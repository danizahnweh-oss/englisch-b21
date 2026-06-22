/* Thema 17: Conjunctions – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Conjunctions",
  "intro": "Conjunctions (Bindewörter) verbinden Wörter, Satzteile oder ganze Sätze miteinander und zeigen, wie diese zusammenhängen.",
  "explain": "<h2>Kurz erklärt</h2><ul><li><b>Koordinierende</b> Konjunktionen verbinden Gleichwertiges: <b>and</b>, <b>but</b>, <b>or</b>, <b>so</b>: <span class=\"ex\">I was tired, so I went to bed.</span></li><li><b>but</b> zeigt einen Gegensatz, <b>because</b> einen Grund: <span class=\"ex\">She stayed home because she was ill.</span></li><li><b>although / though</b> bedeuten \"obwohl\" und leiten einen Gegensatz ein: <span class=\"ex\">Although it rained, we went out.</span></li><li><b>when</b> (wenn/als), <b>while</b> (während), <b>before</b>/<b>after</b> verbinden zeitlich: <span class=\"ex\">Call me when you arrive.</span></li><li><b>both ... and</b>, <b>either ... or</b>, <b>neither ... nor</b> sind feste Paare: <span class=\"ex\">She speaks both English and French.</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "I wanted to come ___ I was too busy.",
      "optionen": [
        "but",
        "so",
        "because"
      ],
      "richtig": 0,
      "erklaerung": "\"but\" drückt einen Gegensatz aus: Ich wollte kommen, aber ich war zu beschäftigt."
    },
    {
      "type": "mc",
      "frage": "It was raining, ___ we took an umbrella.",
      "optionen": [
        "but",
        "so",
        "or"
      ],
      "richtig": 1,
      "erklaerung": "\"so\" leitet eine Folge ein: Es regnete, deshalb nahmen wir einen Schirm."
    },
    {
      "type": "mc",
      "frage": "___ it was very cold, she went swimming.",
      "optionen": [
        "Because",
        "So",
        "Although"
      ],
      "richtig": 2,
      "erklaerung": "\"Although\" bedeutet \"obwohl\" und zeigt den Gegensatz zwischen Kälte und Schwimmen."
    },
    {
      "type": "mc",
      "frage": "You can have tea ___ coffee. Which do you prefer?",
      "optionen": [
        "and",
        "or",
        "but"
      ],
      "richtig": 1,
      "erklaerung": "\"or\" bietet eine Auswahl zwischen zwei Möglichkeiten an."
    },
    {
      "type": "gap",
      "frage": "She was tired ___ she kept working until midnight.",
      "richtig": [
        "but"
      ],
      "erklaerung": "Gegensatz: Sie war müde, aber sie arbeitete weiter. \"but\" passt am besten."
    },
    {
      "type": "gap",
      "frage": "We stayed at home ___ it was raining heavily.",
      "richtig": [
        "because"
      ],
      "erklaerung": "\"because\" nennt den Grund: Wir blieben zu Hause, weil es stark regnete."
    },
    {
      "type": "gap",
      "frage": "Please turn off the light ___ you leave the room.",
      "richtig": [
        "when",
        "before",
        "after"
      ],
      "erklaerung": "Zeitliche Verbindung: \"when/before/after\" passen alle sinnvoll zum Verlassen des Raums."
    },
    {
      "type": "gap",
      "frage": "He likes ___ tea and coffee in the morning.",
      "richtig": [
        "both"
      ],
      "erklaerung": "Das feste Paar \"both ... and\" bedeutet \"sowohl ... als auch\"."
    },
    {
      "type": "gap",
      "frage": "I called you ___ I was waiting for the bus.",
      "richtig": [
        "while",
        "when"
      ],
      "erklaerung": "\"while\" (während) oder \"when\" (als) verbinden zwei gleichzeitige Handlungen."
    },
    {
      "type": "transform",
      "frage": "Verbinde die zwei Sätze mit \"because\": He stayed in bed. He was ill.",
      "richtig": [
        "He stayed in bed because he was ill.",
        "He stayed in bed because he was ill"
      ],
      "erklaerung": "\"because\" leitet den Grund ein und steht zwischen den beiden Teilsätzen."
    },
    {
      "type": "transform",
      "frage": "Verbinde die zwei Sätze mit \"although\" am Anfang: It was late. They continued playing.",
      "richtig": [
        "Although it was late, they continued playing.",
        "Although it was late they continued playing.",
        "Although it was late, they continued playing"
      ],
      "erklaerung": "\"Although\" am Satzanfang leitet den Gegensatz ein; nach dem ersten Teilsatz steht ein Komma."
    }
  ]
};
