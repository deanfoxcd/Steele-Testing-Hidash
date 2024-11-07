import index from './index.js';
import assert from 'assert';

const test = (desc, fn) => {
  console.log('----', desc);
  try {
    fn();
  } catch (err) {
    console.log(err.message);
  }
};

test('The forEachFromScratch function', () => {
  let sum = 0;
  index.forEachScratch([1, 2, 3], (value) => {
    sum += value;
  });

  // if (sum !== 6) {
  //   throw new Error('Should be 6');
  // }

  // Using Assert Module
  assert.strictEqual(sum, 6, 'Should be 6');
});

test('The mapScratch function', () => {
  const arr = [1, 2, 3];
  const result = index.mapScratch(arr, (value) => {
    return value * 2;
  });

  // if (result[0] !== 2) {
  //   throw new Error(`Position ${0}: Expected 2, found ${result[0]}`);
  // }
  // if (result[1] !== 4) {
  //   throw new Error(`Position ${1}: Expected 4, found ${result[1]}`);
  // }
  // if (result[2] !== 6) {
  //   throw new Error(`Position ${2}: Expected 6, found ${result[2]}`);
  // }

  // Using Assert Module
  // assert.strictEqual(result[0], 2);
  // assert.strictEqual(result[1], 4);
  // assert.strictEqual(result[2], 6);
  assert.deepStrictEqual(result, [2, 4, 6]);

  // Trying to do the above better
  // for (let i = 0; i < result.length; i++) {
  //   if (result[i] !== arr[i] * 2) {
  //     throw new Error(`Position ${i}: Expected ${arr[i]}, found ${result[i]}`);
  //   }
  // }

  // Using Assert Module, not actually more efficient in this case but might be if bigger
  // for (let i = 0; i < result.length; i++) {
  //   assert.strictEqual(
  //     result[i],
  //     arr[i] * 2,
  //     `Position ${i}: Expected ${arr[i] * 2}, found ${result[i]}`
  //   );
  // }
});
