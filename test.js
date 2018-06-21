const findDominantFile = require('./index');
const path = require('path');

it("finds up and returns the file", () => {
  expect(findDominantFile(
    path.join(__dirname, 'data/here/there/fileThere'),
    'file',
    false
  )).toBe(
    path.join(__dirname, 'data/file')
  );
});

it("finds up and returns the dir", () => {
  expect(findDominantFile(
    path.join(__dirname, 'data/here/there/fileThere'),
    'file',
    true
  )).toBe(
    path.join(__dirname, 'data')
  );
});

it("finds up and returns undefined", () => {
  expect(findDominantFile(
    path.join(__dirname, 'data/here/there/fileThere'),
    'not-exist._not-exist',
    true
  )).toBe(
    undefined
  );
});
