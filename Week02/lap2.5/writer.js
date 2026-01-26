import fs from 'fs'
const content="I am learning Node.js module!";
fs.writeFileSync('my_notes.txt', content);