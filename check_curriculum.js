const fs = require('fs');
const code = fs.readFileSync('data/curriculum-data.js', 'utf8');
const window = {};
eval(code);
const days = window.CURRICULUM_DATA.days;
console.log('Total days:', days.length);

const detailedDays = days.filter(d => d.has_detailed_lesson);
console.log('Detailed days count:', detailedDays.length);
console.log('Detailed day numbers:', detailedDays.map(d => d.day).join(', '));

detailedDays.forEach(d => {
  const l = d.listening || {};
  console.log(`Day ${d.day} (${d.title}): audio_text=${Boolean(l.audio_text)}, transcript=${Boolean(l.transcript)}, dialogue=${Boolean(l.dialogue)}, translation=${Boolean(l.translation || l.translation_vi || l.vietnamese)}`);
});
