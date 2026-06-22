/* Thema 30: Passive voice – Passivbildung in verschiedenen Zeiten. */
const QUIZ_DATA = {
  "title": "Passive voice",
  "intro": "Form von be + Partizip. Wichtig ist die Handlung, nicht wer sie tut.",
  "explain": "\n    <h2>Kurz erklärt</h2>\n    <ul>\n      <li><b>Bildung:</b> passende Form von <b>be</b> + Partizip (3. Verbform).\n        <span class=\"ex\">The house was built in 1900.</span></li>\n      <li>Die Zeit steckt im <b>be</b>:\n        <span class=\"ex\">is made · was made · has been made · will be made</span></li>\n      <li>Wer es tut, ist oft unwichtig oder unbekannt – sonst mit <b>by</b>.\n        <span class=\"ex\">The song was written by a famous band.</span></li>\n      <li>Aktiv → Passiv: Objekt wird Subjekt.\n        <span class=\"ex\">They clean the office. → The office is cleaned.</span></li>\n    </ul>",
  "questions": [
    {
      "type": "mc",
      "frage": "Choose the correct passive form: \"The room ___ every morning.\"",
      "optionen": [
        "is cleaned",
        "cleans",
        "is cleaning"
      ],
      "richtig": 0,
      "erklaerung": "Present simple Passiv: am/is/are + Past Participle. 'is cleaned'."
    },
    {
      "type": "gap",
      "frage": "Complete in the passive: \"English ___ (speak) in many countries.\"",
      "richtig": [
        "is spoken"
      ],
      "erklaerung": "Present simple Passiv von 'speak' ist 'is spoken'."
    },
    {
      "type": "mc",
      "frage": "Which sentence is in the passive voice?",
      "optionen": [
        "The dog chased the cat.",
        "The cat was chased by the dog.",
        "The cat chased the dog."
      ],
      "richtig": 1,
      "erklaerung": "Im Passiv steht das Objekt vorne: 'was chased by'."
    },
    {
      "type": "gap",
      "frage": "Complete: \"The letters ___ (send) yesterday.\"",
      "richtig": [
        "were sent"
      ],
      "erklaerung": "Past simple Passiv Plural: 'were' + Past Participle 'sent'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct form: \"This car ___ in Germany.\"",
      "optionen": [
        "is made",
        "makes",
        "is making"
      ],
      "richtig": 0,
      "erklaerung": "Present simple Passiv: 'is made'."
    },
    {
      "type": "transform",
      "frage": "Put into the passive voice: \"They build houses.\"",
      "richtig": [
        "Houses are built.",
        "Houses are built by them."
      ],
      "erklaerung": "Present simple Passiv: 'Houses are built.' Der Akteur kann mit 'by them' ergänzt werden."
    },
    {
      "type": "gap",
      "frage": "Complete: \"The window ___ (break) last night.\"",
      "richtig": [
        "was broken"
      ],
      "erklaerung": "Past simple Passiv Singular: 'was broken'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct passive: \"Breakfast ___ at 8 a.m. in this hotel.\"",
      "optionen": [
        "is served",
        "serves",
        "served"
      ],
      "richtig": 0,
      "erklaerung": "Present simple Passiv: 'is served'."
    },
    {
      "type": "transform",
      "frage": "Put into the passive voice: \"She wrote the book.\"",
      "richtig": [
        "The book was written.",
        "The book was written by her."
      ],
      "erklaerung": "Past simple Passiv: 'The book was written (by her).'"
    },
    {
      "type": "gap",
      "frage": "Complete: \"A new bridge ___ (build) at the moment.\"",
      "richtig": [
        "is being built"
      ],
      "erklaerung": "Present continuous Passiv: am/is/are being + Past Participle."
    },
    {
      "type": "mc",
      "frage": "Choose the correct form: \"The keys ___ on the table this morning.\"",
      "optionen": [
        "were found",
        "was found",
        "found"
      ],
      "richtig": 0,
      "erklaerung": "Past simple Passiv Plural: 'were found'."
    },
    {
      "type": "transform",
      "frage": "Put into the passive voice: \"People speak French here.\"",
      "richtig": [
        "French is spoken here.",
        "French is spoken here by people."
      ],
      "erklaerung": "Present simple Passiv: 'French is spoken here.' Der Agent 'by people' ist überflüssig."
    },
    {
      "type": "gap",
      "frage": "Complete: \"The homework ___ (finish) by all the students.\"",
      "richtig": [
        "was finished",
        "has been finished",
        "is finished"
      ],
      "erklaerung": "Passiv mit Past Participle 'finished'; mehrere Zeitformen sind hier möglich."
    },
    {
      "type": "mc",
      "frage": "Choose the correct passive: \"The streets ___ right now.\"",
      "optionen": [
        "are being cleaned",
        "are cleaned",
        "clean"
      ],
      "richtig": 0,
      "erklaerung": "'right now' verlangt Present continuous Passiv: 'are being cleaned'."
    },
    {
      "type": "gap",
      "frage": "Complete: \"Many e-mails ___ (write) every day in this office.\"",
      "richtig": [
        "are written"
      ],
      "erklaerung": "Present simple Passiv Plural: 'are written'."
    },
    {
      "type": "transform",
      "frage": "Put into the passive voice: \"The cat is drinking the milk.\"",
      "richtig": [
        "The milk is being drunk.",
        "The milk is being drunk by the cat."
      ],
      "erklaerung": "Present continuous Passiv: 'is being drunk (by the cat)'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct passive: \"The report ___ already ___.\"",
      "optionen": [
        "has / been sent",
        "is / sent",
        "was / send"
      ],
      "richtig": 0,
      "erklaerung": "Present perfect Passiv: has/have been + Past Participle: 'has been sent'."
    },
    {
      "type": "gap",
      "frage": "Complete (present perfect passive): \"The car ___ (repair) already.\"",
      "richtig": [
        "has been repaired"
      ],
      "erklaerung": "Present perfect Passiv: 'has been repaired'."
    },
    {
      "type": "transform",
      "frage": "Put into the passive voice: \"Somebody has stolen my bike.\"",
      "richtig": [
        "My bike has been stolen.",
        "My bike has been stolen by somebody."
      ],
      "erklaerung": "Present perfect Passiv: 'My bike has been stolen.' 'by somebody' lässt man meist weg."
    },
    {
      "type": "mc",
      "frage": "Choose the correct passive: \"The bridge ___ next year.\"",
      "optionen": [
        "will be repaired",
        "will repair",
        "is repaired"
      ],
      "richtig": 0,
      "erklaerung": "Future Passiv: will be + Past Participle: 'will be repaired'."
    },
    {
      "type": "gap",
      "frage": "Complete (future passive): \"The results ___ (announce) tomorrow.\"",
      "richtig": [
        "will be announced"
      ],
      "erklaerung": "Future Passiv: 'will be announced'."
    },
    {
      "type": "transform",
      "frage": "Put into the passive voice: \"They will invite all the neighbours.\"",
      "richtig": [
        "All the neighbours will be invited.",
        "All the neighbours will be invited by them."
      ],
      "erklaerung": "Future Passiv: 'All the neighbours will be invited.'"
    },
    {
      "type": "mc",
      "frage": "Choose the correct passive with a modal: \"This problem ___ quickly.\"",
      "optionen": [
        "can be solved",
        "can solve",
        "is can solved"
      ],
      "richtig": 0,
      "erklaerung": "Modal Passiv: modal + be + Past Participle: 'can be solved'."
    },
    {
      "type": "gap",
      "frage": "Complete (modal passive): \"The form ___ (must / fill in) before Friday.\"",
      "richtig": [
        "must be filled in"
      ],
      "erklaerung": "Modal Passiv: 'must be filled in'."
    },
    {
      "type": "transform",
      "frage": "Put into the passive voice: \"You should not leave the door open.\"",
      "richtig": [
        "The door should not be left open.",
        "The door shouldn't be left open."
      ],
      "erklaerung": "Modal Passiv: 'should not be left' / 'shouldn't be left'."
    },
    {
      "type": "mc",
      "frage": "Choose the correct passive (past continuous): \"The house ___ when we arrived.\"",
      "optionen": [
        "was being painted",
        "was painted",
        "is being painted"
      ],
      "richtig": 0,
      "erklaerung": "Past continuous Passiv: was/were being + Past Participle: 'was being painted'."
    },
    {
      "type": "gap",
      "frage": "Complete (two objects, person as subject): \"The students ___ (give) a new book.\"",
      "richtig": [
        "were given",
        "are given",
        "have been given"
      ],
      "erklaerung": "Verben mit zwei Objekten: die Person wird Subjekt: 'The students were given a new book.'"
    },
    {
      "type": "transform",
      "frage": "Put into the passive voice making the PERSON the subject: \"They offered Tom a job.\"",
      "richtig": [
        "Tom was offered a job.",
        "Tom was offered a job by them."
      ],
      "erklaerung": "Bei zwei Objekten kann die Person Subjekt werden: 'Tom was offered a job.'"
    },
    {
      "type": "transform",
      "frage": "Put into the passive voice: \"By the time we got home, someone had cleaned the kitchen.\"",
      "richtig": [
        "By the time we got home, the kitchen had been cleaned.",
        "By the time we got home, the kitchen had been cleaned by someone."
      ],
      "erklaerung": "Past perfect Passiv: had been + Past Participle: 'the kitchen had been cleaned'."
    },
    {
      "type": "gap",
      "frage": "Complete (impersonal passive): \"It ___ (say) that the new museum is wonderful.\"",
      "richtig": [
        "is said"
      ],
      "erklaerung": "Unpersönliches Passiv: 'It is said that ...'"
    }
  ]
};
