import { GUESS_LETTER } from '../actions/letters/guess'

const defaultState = {
  word_to_show: '_ _ _ _ _ _',
  word_to_guess: 'Winter',
  guesses: []
}

export default (state = defaultState, {type, payload} = {}) => {
  switch(type) {
    case GUESS_LETTER :
      //return [{ ...payload, _id: newId(state) }].concat(state)
        //return word_to_show
      //})
      return state;
    default :
      return state
  }
}
