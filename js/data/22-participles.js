/* Thema 22: Participles – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Participles",
  "intro": "Partizipien (participles) sind Verbformen, die als Adjektiv, in Zeitformen oder in verkürzten Sätzen verwendet werden.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Das <b>present participle</b> endet auf <b>-ing</b> und beschreibt eine aktive Handlung: <span class=\"ex\">a crying baby</span>, <span class=\"ex\">The film was boring.</span></li><li>Das <b>past participle</b> ist die 3. Verbform (oft <b>-ed</b>, oder unregelmäßig) und ist meist passiv: <span class=\"ex\">a broken window</span>, <span class=\"ex\">I was bored.</span></li><li>Wichtig: <b>-ing</b> = es löst ein Gefühl aus, <b>-ed</b> = man fühlt es selbst: <span class=\"ex\">The news was shocking.</span> vs. <span class=\"ex\">I was shocked.</span></li><li><b>Participle clauses</b> verkürzen Sätze: <span class=\"ex\">Feeling tired, she went to bed.</span> statt <span class=\"ex\">Because she felt tired, …</span></li><li>Past participles bilden <b>Perfekt</b> und <b>Passiv</b>: <span class=\"ex\">I have finished.</span>, <span class=\"ex\">The letter was written.</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Choose the correct participle: The lesson was really ___. Everybody fell asleep.",
      "optionen": [
        "boring",
        "bored",
        "bore"
      ],
      "richtig": 0,
      "erklaerung": "Die Stunde löst das Gefühl aus, deshalb das present participle 'boring' (langweilig). 'bored' wäre die Person, die sich langweilt."
    },
    {
      "type": "mc",
      "frage": "Choose the correct participle: I was very ___ when I heard that I had passed the exam.",
      "optionen": [
        "exciting",
        "excite",
        "excited"
      ],
      "richtig": 2,
      "erklaerung": "Die Person fühlt selbst etwas, deshalb das past participle 'excited'. 'exciting' würde die Sache beschreiben, die das Gefühl auslöst."
    },
    {
      "type": "mc",
      "frage": "Choose the correct sentence:",
      "optionen": [
        "The window was break by the storm.",
        "The window was broken by the storm.",
        "The window was breaking by the storm."
      ],
      "richtig": 1,
      "erklaerung": "Im Passiv steht das past participle. 'break' wird unregelmäßig zu 'broken'."
    },
    {
      "type": "gap",
      "frage": "Present participle als Adjektiv: Look at that ___ (run) man! He is in a hurry.",
      "richtig": [
        "running"
      ],
      "erklaerung": "Aktive, gleichzeitige Handlung: present participle 'running' (der laufende Mann)."
    },
    {
      "type": "gap",
      "frage": "Past participle als Adjektiv: She showed me a ___ (write) letter from her grandmother.",
      "richtig": [
        "written"
      ],
      "erklaerung": "Der Brief wurde geschrieben (passiv, abgeschlossen): unregelmäßiges past participle 'written'."
    },
    {
      "type": "gap",
      "frage": "-ing oder -ed? The long journey was very ___ (tire), so we went straight to bed.",
      "richtig": [
        "tiring"
      ],
      "erklaerung": "Die Reise verursacht die Müdigkeit, deshalb 'tiring' (present participle)."
    },
    {
      "type": "gap",
      "frage": "Present perfect: They have ___ (eat) all the cake already.",
      "richtig": [
        "eaten"
      ],
      "erklaerung": "Das Perfekt braucht das past participle. 'eat' wird unregelmäßig zu 'eaten'."
    },
    {
      "type": "transform",
      "frage": "Bilde eine participle clause: 'Because she felt sick, she stayed at home.' Beginne mit dem Partizip.",
      "richtig": [
        "Feeling sick, she stayed at home.",
        "Feeling sick she stayed at home"
      ],
      "erklaerung": "Eine present participle clause ersetzt 'Because she felt …': 'Feeling sick, …' (gleiches Subjekt)."
    },
    {
      "type": "transform",
      "frage": "Verkürze mit einer participle clause: 'The boy who was sitting next to me was very nervous.'",
      "richtig": [
        "The boy sitting next to me was very nervous.",
        "The boy sitting next to me was very nervous"
      ],
      "erklaerung": "Der Relativsatz 'who was sitting' wird zur present participle clause 'sitting next to me'."
    },
    {
      "type": "transform",
      "frage": "Forme ins Passiv um (past participle): 'Somebody stole my bike yesterday.' (Beginne mit 'My bike ...')",
      "richtig": [
        "My bike was stolen yesterday.",
        "My bike was stolen yesterday",
        "My bike was stolen by somebody yesterday."
      ],
      "erklaerung": "Im Passiv steht 'was/were' + past participle. 'steal' wird unregelmäßig zu 'stolen'."
    }
  ]
};
