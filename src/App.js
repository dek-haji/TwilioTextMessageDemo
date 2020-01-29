import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  state = {
  text: {
      recepient: "",
      textmessage: "",

  }
  }
  sendText = _ => {
    const { text } = this.state;
    fetch(`http://localhost:4000/send-text?recepient=${text.recepient}&textmessage=${text.textmessage}`)
    .catch(err => console.error(err))
  }

  render() {
    const { text } = this.state;
    const spacer = {
      margin: 8
    }
    const textArea = {
      borderRadius: 4
    }
  return (
    <div className="App">
      <header className="App-header">
        <div className="test">
             <h2>Send Text Message</h2>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ marginTop: 10 },
        {border: 10}}>
          <label>Your Phone number</label>
          <br />
          <input value={text.recepient}
            onChange={e => this.setState({ text: { ...text, recepient: e.target.value } })} />
          <div style={spacer} />
          <label>Message</label>
          <br />
          <textarea rows={3} value={text.textmessage} style={textArea}
            onChange={e => this.setState({ text: { ...text, textmessage: e.target.value } })} />
          <div style={spacer}></div>
          <button onClick={this.sendText}> Send Text</button>
       </div>
      </header>
    </div>
  );
}
}

export default App;
