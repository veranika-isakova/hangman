export const GUESS_LETTER = 'GUESS_LETTER'

export default (newGuess) => {
  return {
    type: GUESS_LETTER,
    payload: newGuess
  }
}
