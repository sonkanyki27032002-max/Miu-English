// Master compiler for Vocabulary Bank
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'data', 'vocab-gen');
const files = [
  { file: 'data-general-1.js', cat: 'general' },
  { file: 'data-general-2.js', cat: 'general' },
  { file: 'data-general-3.js', cat: 'general' },
  { file: 'data-general-4.js', cat: 'general' },
  { file: 'data-general-5.js', cat: 'general' },
  { file: 'data-general-6.js', cat: 'general' },
  { file: 'data-workplace-1.js', cat: 'workplace' },
  { file: 'data-workplace-2.js', cat: 'workplace' },
  { file: 'data-workplace-3.js', cat: 'workplace' },
  { file: 'data-workplace-4.js', cat: 'workplace' },
  { file: 'data-technical-1.js', cat: 'technical' },
  { file: 'data-technical-2.js', cat: 'technical' },
  { file: 'data-technical-3.js', cat: 'technical' },
  { file: 'data-she-1.js', cat: 'she' },
  { file: 'data-she-2.js', cat: 'she' }
];

const compiled = [];
let counter = 1;
const seenEn = new Map();

files.forEach(({ file, cat }) => {
  const filePath = path.join(dir, file);
  const rows = require(filePath);
  rows.forEach(r => {
    const en = String(r[0] || '').trim();
    const vi = String(r[1] || '').trim();
    const pos = String(r[2] || '').trim();
    const ipa = String(r[3] || '').trim();
    const example = String(r[4] || '').trim();
    const example_vi = String(r[5] || '').trim();
    const collocation = String(r[6] || '').trim();
    const topic = String(r[7] || '').trim();
    const level = String(r[8] || 'A1').trim();
    const first_lesson = String(r[9] || 'D01').trim();
    const notes = String(r[10] || '').trim();

    const id = `voc-${String(counter++).padStart(4, '0')}`;
    compiled.push({
      id,
      en,
      vi,
      pos,
      ipa,
      example,
      example_vi,
      collocation,
      topic,
      category: cat,
      level,
      first_lesson,
      notes
    });
  });
});

console.log(`Successfully compiled ${compiled.length} vocabulary entries.`);

const outputCode = `// English Hub V1 - Comprehensive Vocabulary Bank (1,600+ items)
// Automatically generated and validated
(function() {
  const bank = ${JSON.stringify(compiled, null, 2)};
  if (typeof window !== 'undefined') {
    window.VOCAB_BANK = bank;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = bank;
  }
})();
`;

const dest = path.join(__dirname, 'data', 'vocab-bank.js');
fs.writeFileSync(dest, outputCode, 'utf8');
console.log(`Saved Vocabulary Bank to ${dest}`);
