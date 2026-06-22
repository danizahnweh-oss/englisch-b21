/* Thema 19: Modal verbs – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Modal verbs",
  "intro": "Modalverben wie can, must, should oder may verändern die Bedeutung eines Satzes und drücken Fähigkeit, Erlaubnis, Pflicht oder Wahrscheinlichkeit aus.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Nach einem Modalverb steht immer der <b>Infinitiv ohne \"to\"</b>: <span class=\"ex\">She can swim.</span></li><li>Modalverben haben <b>keine Endung</b> in der 3. Person: <span class=\"ex\">He must go.</span> (nicht \"musts\")</li><li>Verneinung und Fragen funktionieren <b>ohne \"do/does\"</b>: <span class=\"ex\">You should not wait. Can I help?</span></li><li><b>\"must\" (Pflicht/Verbot)</b> vs. <b>\"have to\"</b>: <span class=\"ex\">I have to work. You mustn't smoke here.</span></li><li>Für Wahrscheinlichkeit nutzt man <b>might/may/could</b> (vielleicht) oder <b>must</b> (sicher): <span class=\"ex\">She might be late. He must be tired.</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Choose the correct sentence.",
      "optionen": [
        "She can speaks three languages.",
        "She can speak three languages.",
        "She cans speak three languages."
      ],
      "richtig": 1,
      "erklaerung": "Nach einem Modalverb (can) steht der Infinitiv ohne \"to\" und ohne -s: \"can speak\"."
    },
    {
      "type": "mc",
      "frage": "It's raining hard. You ___ take an umbrella.",
      "optionen": [
        "should",
        "can't",
        "mustn't"
      ],
      "richtig": 0,
      "erklaerung": "\"should\" drückt einen Rat aus. Bei Regen ist es ratsam, einen Schirm mitzunehmen."
    },
    {
      "type": "mc",
      "frage": "This is a hospital. You ___ smoke here. It's forbidden.",
      "optionen": [
        "don't have to",
        "mustn't",
        "shouldn't have to"
      ],
      "richtig": 1,
      "erklaerung": "\"mustn't\" bedeutet ein Verbot (es ist verboten). \"don't have to\" hieße nur, dass es nicht nötig ist."
    },
    {
      "type": "gap",
      "frage": "I'm not sure, but she ___ be at home now. (vielleicht)",
      "richtig": [
        "might",
        "may",
        "could"
      ],
      "erklaerung": "Für Unsicherheit/Vermutung verwendet man might, may oder could."
    },
    {
      "type": "gap",
      "frage": "When I was young, I ___ run very fast. (Fähigkeit in der Vergangenheit)",
      "richtig": [
        "could"
      ],
      "erklaerung": "\"could\" ist die Vergangenheitsform von \"can\" und drückt eine frühere Fähigkeit aus."
    },
    {
      "type": "gap",
      "frage": "You ___ worry. Everything is fine. (Verneinung von \"need to\", Kurzform)",
      "richtig": [
        "don't have to",
        "do not have to",
        "needn't",
        "need not",
        "don't need to",
        "do not need to"
      ],
      "erklaerung": "\"don't have to\" / \"needn't\" bedeutet, dass etwas nicht nötig ist."
    },
    {
      "type": "gap",
      "frage": "___ I open the window? It's very warm in here. (höfliche Bitte um Erlaubnis)",
      "richtig": [
        "May",
        "Can",
        "Could"
      ],
      "erklaerung": "May, Can oder Could fragen nach Erlaubnis. \"May\" ist am förmlichsten."
    },
    {
      "type": "transform",
      "frage": "Schreibe den Satz mit der Kurzform der Verneinung: \"You can not park here.\"",
      "richtig": [
        "You can't park here.",
        "You can't park here",
        "You cannot park here.",
        "You cannot park here"
      ],
      "erklaerung": "Die Verneinung von \"can\" ist \"cannot\" bzw. die Kurzform \"can't\" (in einem Wort geschrieben)."
    },
    {
      "type": "transform",
      "frage": "Forme um zu einer Pflicht mit \"have to\": \"Students must wear a uniform.\"",
      "richtig": [
        "Students have to wear a uniform.",
        "Students have to wear a uniform"
      ],
      "erklaerung": "\"must\" und \"have to\" drücken beide eine Pflicht aus. In der 3. Person Plural bleibt \"have to\"."
    },
    {
      "type": "transform",
      "frage": "Bilde eine höfliche Bitte mit \"Could you\": \"Pass me the salt.\"",
      "richtig": [
        "Could you pass me the salt?",
        "Could you pass me the salt"
      ],
      "erklaerung": "\"Could you ...?\" ist eine höfliche Form, um jemanden um etwas zu bitten. Danach folgt der Infinitiv ohne \"to\"."
    },
    {
      "type": "mc",
      "frage": "He has been working all day. He ___ be tired now.",
      "optionen": [
        "must",
        "can't",
        "needn't"
      ],
      "richtig": 0,
      "erklaerung": "\"must\" drückt hier eine logische Schlussfolgerung aus (er ist sicher müde)."
    }
  ]
};
