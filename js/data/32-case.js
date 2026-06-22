/* Thema 32: Case – automatisch erzeugt, Format wie die anderen data-Dateien.
   Inhalt frei editierbar; Logik steckt in js/quiz.js. */
const QUIZ_DATA = {
  "title": "Case",
  "intro": "Im Englischen zeigt der \"Case\" (Kasus) die Rolle eines Wortes im Satz - besonders bei Pronomen unterscheidet man Subjektform, Objektform und Possessivform.",
  "explain": "<h2>Kurz erklärt</h2><ul><li>Die <b>Subjektform</b> (I, he, she, we, they) steht vor dem Verb als handelnde Person: <span class=\"ex\">She knows the answer.</span></li><li>Die <b>Objektform</b> (me, him, her, us, them) steht nach dem Verb oder nach einer Präposition: <span class=\"ex\">I saw him.</span> / <span class=\"ex\">Give it to me.</span></li><li>Possessivbegleiter (<b>my, your, his, our</b>) stehen vor einem Nomen; Possessivpronomen (<b>mine, yours, his, ours</b>) stehen allein: <span class=\"ex\">This book is mine.</span></li><li>Besitz bei Nomen zeigt man mit dem <b>Genitiv-'s</b>: <span class=\"ex\">Anna's car</span>; bei Plural mit s nur ein Apostroph: <span class=\"ex\">the girls' room</span>.</li><li>Im formellen Englisch nutzt man <b>whom</b> als Objektform von <b>who</b>: <span class=\"ex\">To whom did you speak?</span></li></ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Choose the correct form: ___ am waiting for the bus.",
      "optionen": [
        "I",
        "Me",
        "My"
      ],
      "richtig": 0,
      "erklaerung": "Als Subjekt des Satzes steht das Personalpronomen im Subjektfall: 'I'."
    },
    {
      "type": "mc",
      "frage": "Can you help ___? We are lost.",
      "optionen": [
        "we",
        "us",
        "our"
      ],
      "richtig": 1,
      "erklaerung": "Nach dem Verb 'help' steht das Objektpronomen 'us'."
    },
    {
      "type": "mc",
      "frage": "This is ___ book, not yours.",
      "optionen": [
        "I",
        "me",
        "my"
      ],
      "richtig": 2,
      "erklaerung": "Vor einem Nomen steht das Possessivbegleitwort 'my'."
    },
    {
      "type": "gap",
      "frage": "Look at the dog. ___ is very friendly. (Pronomen fuer 'the dog' als Subjekt)",
      "richtig": [
        "It",
        "it"
      ],
      "erklaerung": "Das Subjektpronomen fuer 'the dog' (Tier/Sache) ist 'it'."
    },
    {
      "type": "gap",
      "frage": "She called ___ yesterday. (Objektpronomen fuer 'I')",
      "richtig": [
        "me",
        "Me"
      ],
      "erklaerung": "Als Objekt nach dem Verb steht 'me'."
    },
    {
      "type": "mc",
      "frage": "___ are going to the cinema tonight.",
      "optionen": [
        "We",
        "Us",
        "Our"
      ],
      "richtig": 0,
      "erklaerung": "Als Subjekt des Satzes steht 'We'."
    },
    {
      "type": "gap",
      "frage": "Tom likes ___. (Objektpronomen fuer 'she')",
      "richtig": [
        "her",
        "Her"
      ],
      "erklaerung": "Das Objektpronomen von 'she' ist 'her'."
    },
    {
      "type": "mc",
      "frage": "Is this pen ___?",
      "optionen": [
        "you",
        "your",
        "yours"
      ],
      "richtig": 2,
      "erklaerung": "Ohne folgendes Nomen steht das besitzanzeigende Pronomen 'yours'."
    },
    {
      "type": "transform",
      "frage": "Ersetze das Subjekt durch ein Pronomen: The children play in the garden.",
      "richtig": [
        "They play in the garden.",
        "They play in the garden"
      ],
      "erklaerung": "'The children' ist Subjekt im Plural, daher 'They'."
    },
    {
      "type": "gap",
      "frage": "This is my sister. Do you know ___? (Objektpronomen)",
      "richtig": [
        "her",
        "Her"
      ],
      "erklaerung": "Als Objekt fuer 'my sister' steht 'her'."
    },
    {
      "type": "mc",
      "frage": "___ dog is bigger than mine. (Possessivbegleitwort fuer 'he')",
      "optionen": [
        "He",
        "His",
        "Him"
      ],
      "richtig": 1,
      "erklaerung": "Vor dem Nomen 'dog' steht das Possessivbegleitwort 'His'."
    },
    {
      "type": "gap",
      "frage": "We met ___ at the party. (Objektpronomen fuer 'they')",
      "richtig": [
        "them",
        "Them"
      ],
      "erklaerung": "Das Objektpronomen von 'they' ist 'them'."
    },
    {
      "type": "mc",
      "frage": "That car is ___. We bought it last year.",
      "optionen": [
        "we",
        "our",
        "ours"
      ],
      "richtig": 2,
      "erklaerung": "Ohne folgendes Nomen steht 'ours'."
    },
    {
      "type": "transform",
      "frage": "Ersetze beide Nomen durch Pronomen: Anna gave the keys to Peter.",
      "richtig": [
        "She gave them to him.",
        "She gave them to him"
      ],
      "erklaerung": "Anna = She (Subjekt), the keys = them (Objekt), Peter = him (Objekt nach 'to')."
    },
    {
      "type": "gap",
      "frage": "This is Sarah. ___ teacher is very nice. (Possessivbegleitwort fuer Sarah)",
      "richtig": [
        "Her",
        "her"
      ],
      "erklaerung": "Vor dem Nomen 'teacher' steht das Possessivbegleitwort 'Her'."
    },
    {
      "type": "mc",
      "frage": "Between you and ___, I think he is wrong.",
      "optionen": [
        "I",
        "me",
        "my"
      ],
      "richtig": 1,
      "erklaerung": "Nach der Praeposition 'between' steht das Objektpronomen 'me'."
    },
    {
      "type": "gap",
      "frage": "My brother and ___ went to London. (Subjektpronomen fuer 'I')",
      "richtig": [
        "I",
        "i"
      ],
      "erklaerung": "Als Teil des Subjekts steht 'I' (nicht 'me')."
    },
    {
      "type": "transform",
      "frage": "Schreibe mit besitzanzeigendem Pronomen: This book belongs to me.",
      "richtig": [
        "This book is mine.",
        "This book is mine"
      ],
      "erklaerung": "'belongs to me' wird zu 'is mine' (besitzanzeigendes Pronomen ohne Nomen)."
    },
    {
      "type": "mc",
      "frage": "It was ___ who broke the window. (formell, am Satzanfang)",
      "optionen": [
        "he",
        "him",
        "his"
      ],
      "richtig": 0,
      "erklaerung": "In der formellen Form 'It was he who...' wird der Subjektfall verwendet."
    },
    {
      "type": "gap",
      "frage": "Give the ball to ___ and me. (Objektpronomen fuer 'he')",
      "richtig": [
        "him",
        "Him"
      ],
      "erklaerung": "Nach der Praeposition 'to' steht das Objektpronomen 'him'."
    },
    {
      "type": "transform",
      "frage": "Ersetze die Nomen durch Pronomen: The teacher helped the students.",
      "richtig": [
        "She helped them.",
        "He helped them.",
        "She helped them",
        "He helped them"
      ],
      "erklaerung": "The teacher = She/He (Subjekt), the students = them (Objekt)."
    },
    {
      "type": "mc",
      "frage": "She is taller than ___. (umgangssprachlich heute ueblich)",
      "optionen": [
        "I",
        "me",
        "my"
      ],
      "richtig": 1,
      "erklaerung": "Nach 'than' wird heute meist das Objektpronomen 'me' verwendet."
    },
    {
      "type": "gap",
      "frage": "They invited my wife and ___ to the wedding. (Objektpronomen fuer 'I')",
      "richtig": [
        "me",
        "Me"
      ],
      "erklaerung": "Als Teil des Objekts nach 'invited' steht 'me' (nicht 'I')."
    },
    {
      "type": "mc",
      "frage": "___ and I are good friends. (Subjekt)",
      "optionen": [
        "Him",
        "He",
        "His"
      ],
      "richtig": 1,
      "erklaerung": "Als Teil des Subjekts steht der Subjektfall 'He'."
    },
    {
      "type": "transform",
      "frage": "Schreibe mit Saxon Genitive: the car of my father",
      "richtig": [
        "my father's car",
        "My father's car"
      ],
      "erklaerung": "Der saechsische Genitiv: 's an die Person, dann das besessene Nomen."
    },
    {
      "type": "gap",
      "frage": "Those are the ___ toys. (Plural-Genitiv von 'children')",
      "richtig": [
        "children's",
        "childrens'"
      ],
      "erklaerung": "Bei unregelmaessigem Plural 'children' steht der Genitiv 'children's'."
    },
    {
      "type": "gap",
      "frage": "This is the ___ room. (Genitiv von 'the girls', regelmaessiger Plural)",
      "richtig": [
        "girls'",
        "girls`"
      ],
      "erklaerung": "Bei regelmaessigem Plural auf -s steht nur ein Apostroph nach dem -s: girls'."
    },
    {
      "type": "mc",
      "frage": "I don't mind ___ coming late. (Possessiv vor Gerundium, formell)",
      "optionen": [
        "him",
        "his",
        "he"
      ],
      "richtig": 1,
      "erklaerung": "Vor einem Gerundium (coming) steht in der formellen Form der Possessiv 'his'."
    },
    {
      "type": "transform",
      "frage": "Schreibe mit Genitiv-Apostroph: the house of James (zwei akzeptierte Formen)",
      "richtig": [
        "James's house",
        "James' house",
        "James's House",
        "James' House"
      ],
      "erklaerung": "Bei Namen auf -s sind beide Formen erlaubt: James's house oder James' house."
    },
    {
      "type": "gap",
      "frage": "We are meeting at ___ tonight. (Genitiv: das Haus von Tom und Lisa, gemeinsamer Besitz)",
      "richtig": [
        "Tom and Lisa's",
        "Tom and Lisa`s"
      ],
      "erklaerung": "Bei gemeinsamem Besitz steht das 's nur am letzten Namen: Tom and Lisa's."
    },
    {
      "type": "mc",
      "frage": "___ is a two ___ walk from here.",
      "optionen": [
        "It / hour's",
        "It / hours'",
        "It / hours"
      ],
      "richtig": 0,
      "erklaerung": "Zeitangaben nehmen den Genitiv: 'a two hours' walk' bzw. hier 'an hour's walk' - korrekt ist 'hour's' nach der Mengenangabe im Singularbezug."
    }
  ]
};
