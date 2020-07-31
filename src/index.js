import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

class App extends Component {
  sendMessage = () => {
    console.log('Sending message');
    fetch('https://damp-plateau-67111.herokuapp.com/send-text', {
      mode: 'no-cors',
    }).then(() => console.log('sent'))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div>
        <h1>Twilio Client Sample</h1>
        <button id="send-message" onClick={this.sendMessage} aria-label="ok" type="button">
          <h1>Press me.</h1>
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
