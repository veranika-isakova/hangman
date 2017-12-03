import React, {PureComponent} from 'react'
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

    this.state = { //local state of Game
      letter: ''
    }
  }
  
  updateLetter(event) { //onChange accepts event as a parameter
    this.setState({ // setState is from PureComponent
      letter:this.refs.letter.value
    })
  }

  tryLetter() {
    console.table(this.state)
    this.props.save(this.state.letter);
    this.setState({ //clean input
      letter: ''
    })
  }

	render() { // call every time when something is changing
    const { word_to_show, guesses, status } = this.props

		return (
			 <div>
          <p>{ word_to_show }</p>
          <p>{ guesses }</p>
          <p>{ status }</p>
            Your guess: <input
            type="text"
            ref="letter"
            value={this.state.letter}
            onChange={this.updateLetter.bind(this)} />

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
    guesses: letters.guesses,
    status: letters.status
  }); //1) letters (from reducer). 2) this.props (here)

const mapDispatchToProps = { save: guessLetter } //save - function, any name, use in tryLetter

export default connect(mapStateToProps, mapDispatchToProps)(Game)// connect component to redux
