import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

class App extends Component {
  sendMessage = () => {
    console.log('Sending message');
    fetch('https://damp-plateau-67111.herokuapp.com/send-text?')
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div>
        <button id="send-message" onClick={this.sendMessage} aria-label="ok" type="button" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
