import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import * as tw from './services/twilio-handler';

class App extends Component {
  constructor(props) {
    super(props);

    this.setState({
      sent: false,
    });
  }

  sendMessage = () => {
    if (!this.state.sent) {
      tw.sendMessage().then(() => {
        this.setState({
          sent: true,
        });
      });
    }
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
