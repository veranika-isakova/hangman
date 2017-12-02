import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import guessLetter  from '../actions/letters/guess'
//import PropTypes from 'prop-types'

class Game extends PureComponent {
	//static propTypes = {
  //  word_to_show: PropTypes.string.isRequired,
  //  guesses: PropTypes.string.isRequired,
	//}

	render() {
    const { word_to_show, guesses } = this.props

		return (
			 <div>
          <p>{ word_to_show }</p>
          <p>{ guesses }</p>
          <form>
            Your guess: <input type="text" name="Your guess" />
            <input type="submit" value="Try" />
          </form>
       </div>
		)
	}
}

const mapStateToProps = ({ letters }) => (
  {
    word_to_show: letters.word_to_show,
    guesses: letters.guesses
  }); //1) letters (from reducer). 2) this.props (here)

const mapDispatchToProps = { save: guessLetter }

export default connect(mapStateToProps, mapDispatchToProps)(Game)
