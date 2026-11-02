// Inlines quiz.json into template.html -> index.html (so the quiz works from file://).
// Usage: node quiz/build.js
const fs = require('fs');
const path = require('path');

const dir = __dirname;
const data = JSON.parse(fs.readFileSync(path.join(dir, 'quiz.json'), 'utf8'));
const tpl = fs.readFileSync(path.join(dir, 'template.html'), 'utf8');
// Escape "<" so message text can never close the script tag.
const json = JSON.stringify(data).replace(/</g, '\\u003c');
fs.writeFileSync(path.join(dir, 'index.html'), tpl.replace('/*__QUIZ_DATA__*/null', json));
console.log('Built quiz/index.html with ' + data.questions.length + ' questions');
