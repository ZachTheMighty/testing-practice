const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

export default function (string, shift) {
  return "def";
}

function shiftAlphabet(shift) {
  return ALPHABET.slice(shift) + ALPHABET.slice(0, shift);
}
