const fs = require("fs");
const path = require("path");
const dir = "js/data";
const files = fs.readdirSync(dir).filter(f => /^\d+-.*\.js$/.test(f));

// id -> title aus topics.js holen
const topicsSrc = fs.readFileSync("js/topics.js", "utf8");
const title = {};
const re = /id:\s*(\d+),\s*title:\s*"([^"]+)"/g;
let m;
while ((m = re.exec(topicsSrc))) title[m[1]] = m[2];

let bank = [];
for (const f of files) {
  const id = f.match(/^(\d+)-/)[1];
  const t = title[id] || f;
  const src = fs.readFileSync(path.join(dir, f), "utf8");
  let data;
  try {
    data = (new Function(src + "\n;return QUIZ_DATA;"))();
  } catch (e) {
    console.error("SKIP", f, e.message);
    continue;
  }
  if (!data || !Array.isArray(data.questions)) { console.error("no questions", f); continue; }
  for (const q of data.questions) {
    bank.push(Object.assign({}, q, { topic: t, topicId: Number(id) }));
  }
}

// stabil sortiert nach topicId (Mischung passiert im Browser)
bank.sort((a,b) => a.topicId - b.topicId);

const out =
"/* AUTO-GENERIERT von build-bank.js – nicht von Hand bearbeiten.\n" +
"   Sammelt alle Fragen aus js/data/*.js in einen Pool fuer die\n" +
"   Abschlusspruefung. Neu erzeugen: node build-bank.js          */\n" +
"window.EXAM_BANK = " + JSON.stringify(bank, null, 1) + ";\n";

fs.writeFileSync("js/data/exam-bank.js", out);
console.log("OK:", bank.length, "Fragen aus", files.length, "Themen ->", "js/data/exam-bank.js");
