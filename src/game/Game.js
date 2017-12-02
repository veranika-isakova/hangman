import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class Game extends PureComponent {
	static propTypes = {
    word_to_show: PropTypes.string.isRequired,
    guesses: PropTypes.string.isRequired,
	}

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

export default Game
