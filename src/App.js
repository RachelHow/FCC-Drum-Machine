import React, { Component } from 'react';
import './App.css';

const data = [
  { id: 'CLHH', letter: 'Q', src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20CLHH.wav?1532352722339' },
  { id: 'SNR D1', letter: 'W', src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20SNR%20D1.wav?1532352722730' },
  { id: 'RIM SHT', letter: 'E', src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20RIM%20SHT.wav?1532352722795' },
  { id: 'SNR D2', letter: 'A', src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20SNR%20D2.wav?1532352722873' },
  { id: 'RIDE', letter: 'S', src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20RIDE.wav?1532352722922' },
  { id: 'TOM1', letter: 'D', src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20TOM1.wav?1532352723451' },
  { id: 'TOM2', letter: 'Z', src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20TOM2.wav?1532352723760' },
  { id: 'COWBELL', letter: 'X', src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20COWBELL.wav?1532352724065' },
  { id: 'OPHH', letter: 'C', src: 'https://cdn.glitch.com/0966cc53-0935-45e4-9edf-7c4fa500e219%2FRX15%20OPHH.wav?1532352724689' }
]

class DrumPad extends Component {

  componentDidMount() {
    console.log(this.audio)
    document.addEventListener('keydown', this.handleKeydown)
    window.focus()
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown)
  }

  handleKeydown = e => {
    if(e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
    }
  }

  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0
    this.props.handleDisplay(this.props.id)
  }

  render(){
    return (
      <div 
        className="drum-pad" 
        id={this.props.id}
        onClick={this.handleClick}
      >
        <p>{this.props.letter}</p>
        <audio 
          className='clip'
          id={this.props.letter}
          src={this.props.src}
          onClick={this.handleClick}
          ref={ref => this.audio = ref}
          ></audio>
      </div>
    );
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      display: 'PLAY ME'
    }
  }
  
  handleDisplay = display => this.setState({ display })

  render() {
    return (
      <div id="drum-base">

        <div id="drum-machine">
          <div id="display">
            {this.state.display}
          </div>

          <div id="drum-pads">
            {data.map(d => (
              <DrumPad
                key = {d.id}
                id = {d.id}
                letter = {d.letter}
                src = {d.src}
                handleDisplay = {this.handleDisplay}
              />
            ))}
          </div>
        </div>

      </div>
    );
  }
}

export default App;