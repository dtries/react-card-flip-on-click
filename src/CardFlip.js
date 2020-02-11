import React, {Component} from 'react';
import './App.css';

let flipper='';

class CardFlip extends Component {

  state = {
    active: false,
  }

  toggle(e){
    this.setState({active: !this.state.active});
    if (this.state.active === false) {
      flipper='flipped'
    } else {
      flipper=''
    }
  }
 
  render () {
  return (
    <div className="App">
      <div id="js-flip-1" className="flip">
        <div className={ `card ${flipper}` } onClick={e => this.toggle(e)}>
          <div className="face front" >Front</div>
          <div className="face back">Back</div>
        </div>
      </div>      
    </div>
  );
  }
}

export default CardFlip;
