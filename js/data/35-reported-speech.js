/* Thema 35: Reported speech – indirekte Rede mit backshift. */
const QUIZ_DATA = {
  "title": "Reported speech",
  "intro": "Indirekte Rede: Die Zeit rückt eine Stufe zurück (backshift).",
  "explain": "\n    <h2>Kurz erklärt</h2>\n    <ul>\n      <li><b>backshift:</b> Die Zeitform geht eine Stufe zurück.\n        <span class=\"ex\">\"I am tired.\" → He said he was tired.</span></li>\n      <li>Present Perfect & Past Simple → <b>Past Perfect</b>.\n        <span class=\"ex\">\"I have / I did\" → he had …</span></li>\n      <li><b>will → would</b>, <b>can → could</b>, <b>must → had to</b>.</li>\n      <li><b>say</b> ohne Person, <b>tell</b> mit Person.\n        <span class=\"ex\">She said … / She told me …</span></li>\n      <li>Auch Zeit-/Ortwörter verschieben sich: <b>now→then, today→that day, here→there, yesterday→the day before</b>.</li>\n    </ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "He said, \"I am tired.\" → He said that he ___ tired.",
      "optionen": [
        "was",
        "is",
        "were"
      ],
      "richtig": 0,
      "erklaerung": "Im Reported Speech wird present 'am' zu past 'was'."
    },
    {
      "type": "mc",
      "frage": "She said, \"I like coffee.\" → She said that she ___ coffee.",
      "optionen": [
        "likes",
        "liked",
        "like"
      ],
      "richtig": 1,
      "erklaerung": "'like' (present) wird zu 'liked' (past)."
    },
    {
      "type": "gap",
      "frage": "Direkt: \"I work in London.\" Indirekt: He said that he ___ in London. (work)",
      "richtig": [
        "worked"
      ],
      "erklaerung": "Present 'work' wird im Reported Speech zu past 'worked'."
    },
    {
      "type": "gap",
      "frage": "Direkt: \"We are happy.\" Indirekt: They said that they ___ happy. (be)",
      "richtig": [
        "were"
      ],
      "erklaerung": "'are' wird zu 'were' in der Vergangenheit."
    },
    {
      "type": "transform",
      "frage": "Forme in indirekte Rede um: She said, \"I have a dog.\"",
      "richtig": [
        "She said that she had a dog.",
        "She said she had a dog."
      ],
      "erklaerung": "'have' wird zu 'had'; 'that' ist optional."
    },
    {
      "type": "mc",
      "frage": "Tom said, \"I can swim.\" → Tom said that he ___ swim.",
      "optionen": [
        "can",
        "could",
        "can't"
      ],
      "richtig": 1,
      "erklaerung": "Das Modalverb 'can' wird zu 'could'."
    },
    {
      "type": "mc",
      "frage": "\"I will call you,\" she said. → She said that she ___ call me.",
      "optionen": [
        "will",
        "would",
        "would have"
      ],
      "richtig": 1,
      "erklaerung": "'will' wird im Reported Speech zu 'would'."
    },
    {
      "type": "gap",
      "frage": "Direkt: \"I am reading a book.\" Indirekt: He said that he ___ ___ a book. (read, Verlaufsform)",
      "richtig": [
        "was reading"
      ],
      "erklaerung": "Present continuous 'am reading' wird zu past continuous 'was reading'."
    },
    {
      "type": "transform",
      "frage": "Forme in indirekte Rede um: \"We play tennis,\" they said.",
      "richtig": [
        "They said that they played tennis.",
        "They said they played tennis."
      ],
      "erklaerung": "'play' wird zu 'played'; Pronomen 'we' wird zu 'they'."
    },
    {
      "type": "mc",
      "frage": "Welche Zeitangabe ist im Reported Speech korrekt? \"I saw him yesterday\" → She said she had seen him ___.",
      "optionen": [
        "yesterday",
        "the day before",
        "tomorrow"
      ],
      "richtig": 1,
      "erklaerung": "'yesterday' wird im Reported Speech zu 'the day before'."
    },
    {
      "type": "gap",
      "frage": "Direkt: \"I saw the film.\" Indirekt: She said that she ___ ___ the film. (Plusquamperfekt von see)",
      "richtig": [
        "had seen"
      ],
      "erklaerung": "Simple past 'saw' wird im Reported Speech zu past perfect 'had seen'."
    },
    {
      "type": "mc",
      "frage": "\"I have finished my homework,\" he said. → He said that he ___ ___ his homework.",
      "optionen": [
        "has finished",
        "had finished",
        "have finished"
      ],
      "richtig": 1,
      "erklaerung": "Present perfect 'have finished' wird zu past perfect 'had finished'."
    },
    {
      "type": "transform",
      "frage": "Forme in indirekte Rede um: \"I am going home now,\" she said.",
      "richtig": [
        "She said that she was going home then.",
        "She said she was going home then.",
        "She said that she was going home at that moment.",
        "She said she was going home at that moment."
      ],
      "erklaerung": "'am going' wird zu 'was going'; 'now' wird zu 'then'/'at that moment'."
    },
    {
      "type": "gap",
      "frage": "Direkt: \"I live here.\" Indirekt: He said that he lived ___. (Ortsangabe ändern)",
      "richtig": [
        "there"
      ],
      "erklaerung": "'here' wird im Reported Speech zu 'there'."
    },
    {
      "type": "mc",
      "frage": "Frage in indirekter Rede: \"Where do you live?\" → She asked me where I ___.",
      "optionen": [
        "do live",
        "lived",
        "did live"
      ],
      "richtig": 1,
      "erklaerung": "In indirekten Fragen entfällt 'do' und es gilt Aussagesatz-Stellung: 'lived'."
    },
    {
      "type": "transform",
      "frage": "Forme die Frage in indirekte Rede um: \"What is your name?\" he asked.",
      "richtig": [
        "He asked what my name was.",
        "He asked me what my name was."
      ],
      "erklaerung": "Indirekte Frage mit Fragewort: normale Wortstellung 'what my name was'."
    },
    {
      "type": "mc",
      "frage": "Ja/Nein-Frage indirekt: \"Are you tired?\" → She asked me ___ I was tired.",
      "optionen": [
        "that",
        "if",
        "what"
      ],
      "richtig": 1,
      "erklaerung": "Ja/Nein-Fragen werden mit 'if' (oder 'whether') eingeleitet."
    },
    {
      "type": "gap",
      "frage": "Direkt: \"Do you like pizza?\" Indirekt: He asked me ___ I liked pizza. (Einleitewort, eine Möglichkeit)",
      "richtig": [
        "if",
        "whether"
      ],
      "erklaerung": "Ja/Nein-Fragen leitet man mit 'if' oder 'whether' ein."
    },
    {
      "type": "transform",
      "frage": "Forme die Frage in indirekte Rede um: \"Have you seen my keys?\" she asked.",
      "richtig": [
        "She asked if I had seen her keys.",
        "She asked whether I had seen her keys.",
        "She asked me if I had seen her keys.",
        "She asked me whether I had seen her keys."
      ],
      "erklaerung": "'if/whether' + Backshift 'have seen' zu 'had seen'; 'my' wird zu 'her'."
    },
    {
      "type": "mc",
      "frage": "Aufforderung indirekt: \"Open the window!\" → She told me ___ the window.",
      "optionen": [
        "open",
        "to open",
        "opening"
      ],
      "richtig": 1,
      "erklaerung": "Befehle werden mit 'to' + Infinitiv wiedergegeben: 'to open'."
    },
    {
      "type": "transform",
      "frage": "Forme den Befehl in indirekte Rede um: \"Close the door,\" he said to me.",
      "richtig": [
        "He told me to close the door.",
        "He asked me to close the door."
      ],
      "erklaerung": "Befehl/Bitte: 'told/asked me' + to-Infinitiv."
    },
    {
      "type": "mc",
      "frage": "Verneinter Befehl indirekt: \"Don't be late!\" → She told me ___ late.",
      "optionen": [
        "not to be",
        "to not be",
        "don't be"
      ],
      "richtig": 0,
      "erklaerung": "Verneinte Befehle: 'not to' + Infinitiv ('not to be')."
    },
    {
      "type": "gap",
      "frage": "Direkt: \"Please help me,\" he said. Indirekt: He ___ me to help him. (passendes Verb für eine Bitte)",
      "richtig": [
        "asked"
      ],
      "erklaerung": "Eine höfliche Bitte gibt man mit 'asked + to-Infinitiv' wieder."
    },
    {
      "type": "transform",
      "frage": "Forme in indirekte Rede um: \"I bought a car yesterday,\" he said.",
      "richtig": [
        "He said that he had bought a car the day before.",
        "He said he had bought a car the day before.",
        "He said that he had bought a car the previous day.",
        "He said he had bought a car the previous day."
      ],
      "erklaerung": "'bought' wird zu 'had bought'; 'yesterday' zu 'the day before/the previous day'."
    },
    {
      "type": "mc",
      "frage": "\"I will meet you tomorrow,\" she said. → She said she would meet me ___.",
      "optionen": [
        "tomorrow",
        "the next day",
        "the day before"
      ],
      "richtig": 1,
      "erklaerung": "'tomorrow' wird im Reported Speech zu 'the next day'."
    },
    {
      "type": "gap",
      "frage": "Direkt: \"I must go.\" Indirekt: He said that he ___ go. ('must' im Sinne von Notwendigkeit, Vergangenheitsform)",
      "richtig": [
        "had to"
      ],
      "erklaerung": "'must' wird im Reported Speech meist zu 'had to'."
    },
    {
      "type": "transform",
      "frage": "Forme in indirekte Rede um: \"I can't come to the party,\" she said.",
      "richtig": [
        "She said that she couldn't come to the party.",
        "She said she couldn't come to the party.",
        "She said that she could not come to the party.",
        "She said she could not come to the party."
      ],
      "erklaerung": "'can't' wird zu 'couldn't'."
    },
    {
      "type": "mc",
      "frage": "Allgemeingültige Wahrheit: \"The earth goes around the sun,\" he said. → He said that the earth ___ around the sun.",
      "optionen": [
        "went",
        "goes",
        "had gone"
      ],
      "richtig": 1,
      "erklaerung": "Bei allgemeingültigen Tatsachen ist Backshift optional; 'goes' bleibt natürlich."
    },
    {
      "type": "gap",
      "frage": "Direkt: \"I may visit you next week,\" she said. Indirekt: She said that she ___ visit me the following week. ('may' zurückverschoben)",
      "richtig": [
        "might"
      ],
      "erklaerung": "Das Modalverb 'may' wird im Reported Speech zu 'might'."
    },
    {
      "type": "transform",
      "frage": "Forme in indirekte Rede um: \"Where have you been since yesterday?\" she asked me.",
      "richtig": [
        "She asked me where I had been since the day before.",
        "She asked where I had been since the day before.",
        "She asked me where I had been since the previous day.",
        "She asked where I had been since the previous day."
      ],
      "erklaerung": "Indirekte Frage: normale Wortstellung, 'have been' zu 'had been', 'yesterday' zu 'the day before'."
    },
    {
      "type": "mc",
      "frage": "\"If I had time, I would help you,\" he said. → He said that if he ___ time, he would help me. (Conditional bleibt unverändert)",
      "optionen": [
        "has",
        "had",
        "had had"
      ],
      "richtig": 1,
      "erklaerung": "Im Conditional II (if-Satz, past) bleibt 'had' im Reported Speech unverändert."
    }
  ]
};
