// Master script to generate complete 1,800+ vocabulary entries
const fs = require('fs');
const path = require('path');

const vocab = [];
let idCounter = 1;

function add(en, vi, pos, ipa, example, example_vi, collocation, topic, category, level, first_lesson, notes = "") {
  vocab.push({
    id: `voc-${String(idCounter++).padStart(4, '0')}`,
    en, vi, pos, ipa, example, example_vi, collocation, topic, category, level, first_lesson, notes
  });
}

console.log("Compiling vocabulary dataset...");
