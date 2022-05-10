export function frontDoorResponse(line) {
  return line.charAt(0);
}

export function frontDoorPassword(word) {
  const lowerCaseWord = word.toLowerCase();
  const firstLetter = lowerCaseWord[0].toUpperCase();
  return firstLetter + lowerCaseWord.substring(1);
}

export function backDoorResponse(line) {
  return line.trim().slice(-1);
}

export function backDoorPassword(word) {
  const firstLetter = word[0].toUpperCase();
  const firstWord = firstLetter + word.substring(1);
  return firstWord + ', please';
}
