const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASEALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function (string, shift) {
  let cypheredText = "";
  const shiftedAlphabets = shiftAlphabets(shift);

  for (let i = 0; i < string.length; i++) {
    if (ALPHABET.includes(string[i].toLowerCase())) {
      if (string[i].toUpperCase() === string[i])
        cypheredText +=
          shiftedAlphabets.uppercase[
            getIndexInAlphabet(string[i].toLowerCase())
          ];
      else
        cypheredText +=
          shiftedAlphabets.lowercase[
            getIndexInAlphabet(string[i].toLowerCase())
          ];
    } else cypheredText += string[i];
  }
  return cypheredText;
}

function shiftAlphabets(shift) {
  return {
    lowercase: ALPHABET.slice(shift) + ALPHABET.slice(0, shift),
    uppercase:
      UPPERCASEALPHABET.slice(shift) + UPPERCASEALPHABET.slice(0, shift),
  };
}

function getIndexInAlphabet(char) {
  for (let i = 0; i < ALPHABET.length; i++) if (ALPHABET[i] === char) return i;
}
