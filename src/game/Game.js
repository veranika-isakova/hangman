import React, {PureComponent} from 'react'
import toMarkdown from 'to-markdown'
import { connect } from 'react-redux'
import guessLetter  from '../actions/letters/guess'
//import PropTypes from 'prop-types'

class Game extends PureComponent {
	//static propTypes = {
  //  word_to_show: PropTypes.string.isRequired,
  //  guesses: PropTypes.string.isRequired,
	//}
  constructor(props) { //initialize in Ruby, constructor of class Game
    super() //constructor of PureComponent

    this.state = { //local state
      letter: ''
    }
  }

  updateLetter(event) {
    this.setState({
      letter:this.refs.letter.value
    })
  }

  tryLetter() {
    console.table(this.state)
    const letter = {
      ...this.state,
      letter: toMarkdown(this.state.letter)
    }
    console.table(letter)
    this.props.save(letter)
  }

	render() { // call every time when something is changing
    const { word_to_show, guesses } = this.props

		return (
			 <div>
          <p>{ word_to_show }</p>
          <p>{ guesses }</p>

            Your guess: <input
            type="text"
            ref="letter"
            className="letter"
            defaultValue={this.state.letter}
            onChange={this.updateLetter.bind(this)}
            onKeyUp={this.updateLetter.bind(this)} />

          <div className="actions">
            <button className="primary" onClick={this.tryLetter.bind(this)}>Try</button>
          </div>
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
