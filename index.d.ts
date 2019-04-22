import findDominantFile = require('find-dominant-file');
declare namespace findDominantFile {}
declare function findDominantFile(dir: string, filename: string, retDir?: boolean): string | undefined;
declare function findDominantFile(dir: string, filenames: string[], retDir?: boolean): string | undefined;
export default findDominantFile;
