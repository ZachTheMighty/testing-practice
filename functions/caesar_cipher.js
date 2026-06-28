const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

export default function (string, shift) {
  let cypheredText = "";
  const shiftedAlphabet = shiftAlphabet(shift);

  for (let i = 0; i < string.length; i++) cypheredText += shiftedAlphabet[i];
  return cypheredText;
}

function shiftAlphabet(shift) {
  return ALPHABET.slice(shift) + ALPHABET.slice(0, shift);
}
