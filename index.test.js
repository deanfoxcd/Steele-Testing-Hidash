import index from './index.js';

let sum = 0;
index.forEachScratch([1, 2, 3], (value) => {
  sum += value;
});

if (sum !== 6) {
  throw new Error('Should be 6');
}

const result = index.mapScratch([1, 2, 3], (value) => {
  return value * 2;
});

if (result[0] !== 2) {
  throw new Error(`Position ${0}: Expected 2, found ${result[0]}`);
}
if (result[1] !== 4) {
  throw new Error(`Position ${1}: Expected 4, found ${result[1]}`);
}
if (result[2] !== 6) {
  throw new Error(`Position ${2}: Expected 6, found ${result[2]}`);
}
