const findDominantFile = require('./index');
const path = require('path');

it('finds up and returns the file (if the file exists)', () => {
  expect(findDominantFile(
    path.join(__dirname, 'tests/here/there/fileThere'),
    'file',
    false
  )).toBe(
    path.join(__dirname, 'tests/file')
  );
});

it('finds up and returns the dir (if specified the third param)', () => {
  expect(findDominantFile(
    path.join(__dirname, 'tests/here/there/fileThere'),
    'file',
    true
  )).toBe(
    path.join(__dirname, 'tests')
  );
});

it('finds up and returns undefined (if not found)', () => {
  expect(findDominantFile(
    path.join(__dirname, 'tests/here/there/fileThere'),
    'not-exist._not-exist',
    true
  )).toBe(
    undefined
  );
});

it('finds up and returns the one that can be found \
(if multiple files specified)', () => {
  expect(findDominantFile(
    path.join(__dirname, 'tests/here/there/fileThere'),
    ['not-exist._not-exist', 'file'],
    true
  )).toBe(
    path.join(__dirname, 'tests')
  );
});

it('throws (if dir param is null)', () => {
  expect(() => findDominantFile(
    null,
    'not-exist._not-exist',
    true
  )).toThrow(
    new Error('Base directory required. Received null.')
  );
});

it('throws (if dir param is undefined)', () => {
  expect(() => findDominantFile(
    undefined,
    'not-exist._not-exist',
    true
  )).toThrow(
    new Error('Base directory required. Received undefined.')
  );
});

it('throws (if dir param is empty string)', () => {
  expect(() => findDominantFile(
    '',
    'not-exist._not-exist',
    true
  )).toThrow(
    new Error('Base directory required. Received "".')
  );
});

it('throws (if dir param is false)', () => {
  expect(() => findDominantFile(
    false,
    'not-exist._not-exist',
    true
  )).toThrow(
    new Error('Base directory required. Received false.')
  );
});

it('throws (if file param is null)', () => {
  expect(() => findDominantFile(
    path.join(__dirname, 'tests/here/there/fileThere'),
    null,
    true
  )).toThrow(
    new Error('Filename required. Received null.')
  );
});

it('throws (if filename param is undefined)', () => {
  expect(() => findDominantFile(
    path.join(__dirname, 'tests/here/there/fileThere'),
    undefined,
    true
  )).toThrow(
    new Error('Filename required. Received undefined.')
  );
});

it('throws (if filename param is empty string)', () => {
  expect(() => findDominantFile(
    path.join(__dirname, 'tests/here/there/fileThere'),
    '',
    true
  )).toThrow(
    new Error('Filename required. Received "".')
  );
});

it('throws (if filename param is false)', () => {
  expect(() => findDominantFile(
    path.join(__dirname, 'tests/here/there/fileThere'),
    false,
    true
  )).toThrow(
    new Error('Filename required. Received false.')
  );
});

it('throws (if filename param is empty array)', () => {
  expect(() => findDominantFile(
    path.join(__dirname, 'tests/here/there/fileThere'),
    [],
    true
  )).toThrow(
    new Error('Filename required. Received [].')
  );
});
