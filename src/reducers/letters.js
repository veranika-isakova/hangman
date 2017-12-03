import { GUESS_LETTER } from '../actions/letters/guess'

const defaultState = {
  word_to_show: '_ _ _ _ _ _',
  word_to_guess: 'Winter',
  guesses: [],
  status: ''
}
// step2
function toNewLetter(letter, guesses) {
  if (guesses.includes(letter)) {
    return letter
  } else {
    return "_"
  }
}
function showGuess(word, guesses) {
  // take word
  //split word into letters
  //take guesses
  // if first letter isn't in our array guesses we put "_"
  // or put our letter
  //["h","e", "l", "l", "o"]
  //["_","_","l","l","_"]
  var letter_word = word.split("")
  var new_letter_word = letter_word.map((old_letter) => toNewLetter(old_letter, guesses))

  return new_letter_word.join(" ")
}

export default (state = defaultState, {type, payload} = {}) => {
  switch(type) {
    case GUESS_LETTER:

      var new_guesses = state.guesses.concat(payload.toLowerCase()); // add new guess to guesses
      var new_word_to_show = showGuess(state.word_to_guess.toLowerCase(), new_guesses);

      return {...state, word_to_show: new_word_to_show, guesses: new_guesses}// status: new_status

    default :
      return state
  }
}
