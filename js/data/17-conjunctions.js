/* Thema 17: Conjunctions – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Conjunctions",
  "intro": "Conjunctions (Bindewörter) verbinden Wörter, Satzteile oder ganze Sätze miteinander und zeigen, wie diese zusammenhängen.",
  "explain": "<h2>Kurz erklärt</h2><ul><li><b>Koordinierende</b> Konjunktionen verbinden Gleichwertiges: <b>and</b>, <b>but</b>, <b>or</b>, <b>so</b>: <span class=\"ex\">I was tired, so I went to bed.</span></li><li><b>but</b> zeigt einen Gegensatz, <b>because</b> einen Grund: <span class=\"ex\">She stayed home because she was ill.</span></li><li><b>although / though</b> bedeuten \"obwohl\" und leiten einen Gegensatz ein: <span class=\"ex\">Although it rained, we went out.</span></li><li><b>when</b> (wenn/als), <b>while</b> (während), <b>before</b>/<b>after</b> verbinden zeitlich: <span class=\"ex\">Call me when you arrive.</span></li><li><b>both ... and</b>, <b>either ... or</b>, <b>neither ... nor</b> sind feste Paare: <span class=\"ex\">She speaks both English and French.</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "I like tea ___ coffee in the morning.",
      "optionen": [
        "and",
        "but",
        "because"
      ],
      "richtig": 0,
      "erklaerung": "'and' verbindet zwei gleichwertige Dinge."
    },
    {
      "type": "mc",
      "frage": "She is tired, ___ she keeps working.",
      "optionen": [
        "and",
        "but",
        "so"
      ],
      "richtig": 1,
      "erklaerung": "'but' drückt einen Gegensatz aus."
    },
    {
      "type": "mc",
      "frage": "It was raining, ___ we stayed at home.",
      "optionen": [
        "so",
        "but",
        "or"
      ],
      "richtig": 0,
      "erklaerung": "'so' zeigt eine Folge an."
    },
    {
      "type": "mc",
      "frage": "Would you like tea ___ coffee?",
      "optionen": [
        "and",
        "or",
        "but"
      ],
      "richtig": 1,
      "erklaerung": "'or' bietet eine Auswahl/Alternative an."
    },
    {
      "type": "gap",
      "frage": "I was hungry, ___ I made a sandwich. (Folge)",
      "richtig": [
        "so"
      ],
      "erklaerung": "'so' verbindet Ursache mit Folge."
    },
    {
      "type": "gap",
      "frage": "He plays football ___ tennis at school.",
      "richtig": [
        "and"
      ],
      "erklaerung": "'and' verbindet zwei Aktivitäten."
    },
    {
      "type": "mc",
      "frage": "We went home early ___ we were very tired.",
      "optionen": [
        "because",
        "but",
        "or"
      ],
      "richtig": 0,
      "erklaerung": "'because' gibt einen Grund an."
    },
    {
      "type": "gap",
      "frage": "You can take the bus ___ walk to the station.",
      "richtig": [
        "or"
      ],
      "erklaerung": "'or' nennt eine Alternative."
    },
    {
      "type": "mc",
      "frage": "___ it was late, we decided to go out.",
      "optionen": [
        "Although",
        "Because",
        "So"
      ],
      "richtig": 0,
      "erklaerung": "'Although' leitet einen Gegensatz ein (obwohl)."
    },
    {
      "type": "gap",
      "frage": "The film was boring, ___ I fell asleep. (Folge)",
      "richtig": [
        "so"
      ],
      "erklaerung": "'so' zeigt die Folge des langweiligen Films."
    },
    {
      "type": "mc",
      "frage": "I'll call you ___ I arrive at the airport.",
      "optionen": [
        "when",
        "because",
        "but"
      ],
      "richtig": 0,
      "erklaerung": "'when' nennt den Zeitpunkt."
    },
    {
      "type": "gap",
      "frage": "She studied hard, ___ she passed the exam easily. (Folge)",
      "richtig": [
        "so"
      ],
      "erklaerung": "'so' verbindet Anstrengung mit dem Erfolg."
    },
    {
      "type": "mc",
      "frage": "Please wait here ___ I get the car.",
      "optionen": [
        "while",
        "because",
        "or"
      ],
      "richtig": 0,
      "erklaerung": "'while' beschreibt eine gleichzeitige Handlung."
    },
    {
      "type": "transform",
      "frage": "Verbinde mit 'because': 'We stayed inside. It was cold.'",
      "richtig": [
        "We stayed inside because it was cold.",
        "We stayed inside because it was cold"
      ],
      "erklaerung": "'because' gibt den Grund (Kälte) an."
    },
    {
      "type": "mc",
      "frage": "___ you study, you will pass the test.",
      "optionen": [
        "If",
        "But",
        "So"
      ],
      "richtig": 0,
      "erklaerung": "'If' leitet eine Bedingung ein."
    },
    {
      "type": "gap",
      "frage": "I don't like horror films ___ thrillers.",
      "richtig": [
        "or"
      ],
      "erklaerung": "In verneinten Sätzen verbindet 'or' zwei Dinge."
    },
    {
      "type": "transform",
      "frage": "Verbinde mit 'but': 'The hotel was nice. It was expensive.'",
      "richtig": [
        "The hotel was nice but it was expensive.",
        "The hotel was nice, but it was expensive.",
        "The hotel was nice but it was expensive",
        "The hotel was nice but expensive."
      ],
      "erklaerung": "'but' stellt den Gegensatz dar."
    },
    {
      "type": "mc",
      "frage": "He didn't go to the party ___ he was ill.",
      "optionen": [
        "because",
        "although",
        "or"
      ],
      "richtig": 0,
      "erklaerung": "'because' nennt den Grund für das Fehlen."
    },
    {
      "type": "mc",
      "frage": "We can eat now ___ wait for the others.",
      "optionen": [
        "or",
        "because",
        "when"
      ],
      "richtig": 0,
      "erklaerung": "'or' bietet zwei Möglichkeiten an."
    },
    {
      "type": "gap",
      "frage": "___ I was young, I lived in Spain. (Zeit: als)",
      "richtig": [
        "When",
        "when"
      ],
      "erklaerung": "'When' beschreibt den Zeitabschnitt in der Vergangenheit."
    },
    {
      "type": "transform",
      "frage": "Verbinde mit 'although': 'He was tired. He finished the race.'",
      "richtig": [
        "Although he was tired, he finished the race.",
        "Although he was tired he finished the race.",
        "He finished the race although he was tired.",
        "He finished the race although he was tired"
      ],
      "erklaerung": "'although' zeigt den Gegensatz (obwohl müde, trotzdem fertig)."
    },
    {
      "type": "mc",
      "frage": "You should hurry, ___ you'll miss the train.",
      "optionen": [
        "or",
        "and",
        "because"
      ],
      "richtig": 0,
      "erklaerung": "'or' im Sinne von 'sonst' nennt die negative Folge."
    },
    {
      "type": "gap",
      "frage": "I'll stay at home ___ it rains tomorrow. (Bedingung)",
      "richtig": [
        "if"
      ],
      "erklaerung": "'if' leitet die Bedingung ein."
    },
    {
      "type": "mc",
      "frage": "___ I finished my homework, I watched TV.",
      "optionen": [
        "After",
        "Because",
        "But"
      ],
      "richtig": 0,
      "erklaerung": "'After' beschreibt die zeitliche Reihenfolge (danach)."
    },
    {
      "type": "transform",
      "frage": "Verbinde mit 'so': 'The shop was closed. We went home.'",
      "richtig": [
        "The shop was closed, so we went home.",
        "The shop was closed so we went home.",
        "The shop was closed so we went home"
      ],
      "erklaerung": "'so' zeigt die Folge der Schließung."
    },
    {
      "type": "mc",
      "frage": "She won't come ___ you invite her personally.",
      "optionen": [
        "unless",
        "because",
        "although"
      ],
      "richtig": 0,
      "erklaerung": "'unless' bedeutet 'wenn nicht / es sei denn'."
    },
    {
      "type": "gap",
      "frage": "Both my brother ___ my sister speak French. (... and ...)",
      "richtig": [
        "and"
      ],
      "erklaerung": "Bei 'both ... and ...' folgt 'and'."
    },
    {
      "type": "mc",
      "frage": "He neither called ___ wrote to us.",
      "optionen": [
        "nor",
        "or",
        "and"
      ],
      "richtig": 0,
      "erklaerung": "Auf 'neither' folgt 'nor'."
    },
    {
      "type": "transform",
      "frage": "Verbinde mit 'while': 'I cooked dinner. She set the table.'",
      "richtig": [
        "I cooked dinner while she set the table.",
        "While I cooked dinner, she set the table.",
        "While I cooked dinner she set the table.",
        "I cooked dinner while she set the table"
      ],
      "erklaerung": "'while' drückt Gleichzeitigkeit aus."
    },
    {
      "type": "mc",
      "frage": "___ it was a great offer, I decided not to buy the car.",
      "optionen": [
        "Even though",
        "Because",
        "So"
      ],
      "richtig": 0,
      "erklaerung": "'Even though' verstärkt den Gegensatz (obwohl gut, trotzdem nicht)."
    },
    {
      "type": "gap",
      "frage": "You can have ___ the cake or the ice cream, not both. (entweder)",
      "richtig": [
        "either"
      ],
      "erklaerung": "Bei 'either ... or ...' steht zuerst 'either'."
    },
    {
      "type": "transform",
      "frage": "Verbinde mit 'as soon as': 'The guests arrive. We will serve dinner.'",
      "richtig": [
        "As soon as the guests arrive, we will serve dinner.",
        "As soon as the guests arrive we will serve dinner.",
        "We will serve dinner as soon as the guests arrive.",
        "We will serve dinner as soon as the guests arrive"
      ],
      "erklaerung": "'as soon as' bedeutet 'sobald'; im Nebensatz steht Präsens."
    }
  ]
};
