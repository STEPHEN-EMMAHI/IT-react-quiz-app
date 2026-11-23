// shuffling the array - fisher yates method
export function shuffling(input) {
  const shuffled = [...input]; // not mutating state

  for (let i = shuffled.length - 1; i > 0; i--) {
    // i = 0 1 2 3 4
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
