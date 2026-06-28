export default function (string, shift) {
  return "def";
}

function shiftAlphabet(shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet.slice(shift) + alphabet.slice(0, shift);
}
