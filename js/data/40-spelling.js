/* Thema 40: Spelling – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Spelling",
  "intro": "Englische Rechtschreibung folgt klaren Mustern - besonders beim Anhängen von Endungen wie -ing, -ed, -s, -er und -ly an Wörter.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Bei kurzem Vokal + einzelnem Endkonsonant wird dieser oft <b>verdoppelt</b>: <span class=\"ex\">stop → stopping, run → running</span></li><li>Ein stummes <b>-e</b> fällt vor Endungen mit Vokal weg: <span class=\"ex\">make → making, write → writing</span></li><li><b>-y</b> nach Konsonant wird zu <b>-i</b>: <span class=\"ex\">study → studied, happy → happier</span></li><li>Bei <b>-s</b> nach Zisch- oder o-Lauten kommt <b>-es</b>: <span class=\"ex\">watch → watches, go → goes</span></li><li>Vorsicht bei häufig falsch geschriebenen Wörtern: <span class=\"ex\">because, beautiful, friend, necessary</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Wie lautet die korrekte -ing-Form von \"run\"?",
      "optionen": [
        "runing",
        "running",
        "runninng"
      ],
      "richtig": 1,
      "erklaerung": "Kurzer Vokal + einzelner Endkonsonant: das \"n\" wird verdoppelt, daher \"running\"."
    },
    {
      "type": "mc",
      "frage": "Welche Schreibweise ist richtig?",
      "optionen": [
        "beautiful",
        "beatiful",
        "beautifull"
      ],
      "richtig": 0,
      "erklaerung": "\"beautiful\" schreibt sich mit \"eau\" und nur einem \"l\" am Ende."
    },
    {
      "type": "mc",
      "frage": "Wie lautet die Mehrzahl von \"baby\"?",
      "optionen": [
        "babys",
        "babyes",
        "babies"
      ],
      "richtig": 2,
      "erklaerung": "\"-y\" nach einem Konsonant wird im Plural zu \"-ies\": baby → babies."
    },
    {
      "type": "mc",
      "frage": "Welches Wort ist korrekt geschrieben?",
      "optionen": [
        "becouse",
        "because",
        "becuase"
      ],
      "richtig": 1,
      "erklaerung": "\"because\" wird mit \"-cause\" geschrieben - ein häufiger Fehler."
    },
    {
      "type": "gap",
      "frage": "He is ___ (write) an email to his boss right now.",
      "richtig": [
        "writing"
      ],
      "erklaerung": "Das stumme \"-e\" von \"write\" fällt vor \"-ing\" weg: writing."
    },
    {
      "type": "gap",
      "frage": "Yesterday we ___ (study) for the big test all evening.",
      "richtig": [
        "studied"
      ],
      "erklaerung": "\"-y\" nach Konsonant wird vor \"-ed\" zu \"-i\": study → studied."
    },
    {
      "type": "gap",
      "frage": "She always ___ (watch) the news after dinner.",
      "richtig": [
        "watches"
      ],
      "erklaerung": "Nach dem Zischlaut \"-ch\" kommt in der 3. Person \"-es\": watches."
    },
    {
      "type": "gap",
      "frage": "My best ___ (friend) is coming to visit me next week.",
      "richtig": [
        "friend"
      ],
      "erklaerung": "\"friend\" enthält \"-ie-\" (Eselsbrücke: fri-end). Es bleibt unverändert."
    },
    {
      "type": "transform",
      "frage": "Bilde die -ing-Form: \"swim\". Schreibe nur das Wort.",
      "richtig": [
        "swimming"
      ],
      "erklaerung": "Kurzer Vokal + einzelner Endkonsonant: das \"m\" wird verdoppelt: swimming."
    },
    {
      "type": "transform",
      "frage": "Bilde den Komparativ (Steigerung) von \"happy\". Schreibe nur das Wort.",
      "richtig": [
        "happier"
      ],
      "erklaerung": "\"-y\" nach Konsonant wird vor \"-er\" zu \"-i\": happy → happier."
    },
    {
      "type": "transform",
      "frage": "Mache aus dem Adjektiv ein Adverb: \"easy\". Schreibe nur das Wort.",
      "richtig": [
        "easily"
      ],
      "erklaerung": "\"-y\" wird vor \"-ly\" zu \"-i\": easy → easily."
    }
  ]
};
