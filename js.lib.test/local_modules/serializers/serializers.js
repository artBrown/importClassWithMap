/*
*   serializers.js
*
*
*   Art Brown, art.brown@qutet.com
*/
import stream from "stream";
import readline from 'readline';
import {createWriteStream, createReadStream} from "fs";
import {promisify} from 'util';
import os from "os";
const {Readable} = stream;
const pipeline = promisify(stream.pipeline);

async function writeStringToFile(ls, base, file) {
  await writeStringArrayToFile([ls], base, file);
}

async function writeStringArrayToFile(sa, base, file) {
  if (!base)
    base = os.tmpdir();
  const readable = Readable.from(sa, {encoding: 'utf8'});
  const writable = createWriteStream(base + "/" + file);
  await pipeline(readable, writable);
  writable.end();
}

async function readStringFmFile(ls, base, file, bFlat = true) {
  if (!base)
    base = os.tmpdir();
  const readableStream = createReadStream(base + "/" + file, {encoding: 'utf8'});
  await readableToString(ls, readableStream);
  if (bFlat) {
    let flat = ls.reduce((m, s) => m += s);
    ls.length = 0;
    ls.push(flat);
  }
}

async function readableToString(ls, readable) {
  for await (const chunk of readable[Symbol.asyncIterator]()) {
    ls.push(chunk);
  }
}

function makeIterator(array) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < array.length
        ? array[nextIndex++]
        : false;
    },
    hasNext: function () {
      return nextIndex < array.length;
    }
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
module.exports = {
  writeStringToFile: writeStringToFile,
  readStringFmFile: readStringFmFile,
  makeIterator: makeIterator,
  rl: rl,
};
