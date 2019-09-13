import React from "react";
import logo from "./logo.svg";
import "./App.css";
import imgMeme from "./img/womanyellingcat.jpg";
import TextField from "./TextField";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleWomanInput = this.handleWomanInput.bind(this);
    this.handleCatInput = this.handleCatInput.bind(this);
    this.state = {
      woman_text: "Meme Generator: YOU CANNOT LEAVE TEXT FIELDS EMPTY",
      cat_text: "*Me just testing the Submit button*"
    };
  }

  handleWomanInput(textInput) {
    this.setState({
      woman_text: textInput
    });
  }

  handleCatInput(textInput) {
    this.setState({
      cat_text: textInput
    });
  }

  render() {
    async function getPhoto() {
      const res = await fetch("http://localhost:4000/");
      const resData = await res.json();
    }

    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h1>Create Your Own Meme Here</h1>
          </div>
          <div className="Meme-container">
            <div className="Text-boxes">
              <TextField
                className="Text-field"
                text={this.state.woman_text}
                onInputChange={this.handleWomanInput}
              />
              <TextField
                className="Text-field"
                text={this.state.cat_text}
                onInputChange={this.handleCatInput}
              />
            </div>

            <img src={imgMeme} alt="meme" />
          </div>
          <button onClick={getPhoto}>Submit</button>
        </header>
      </div>
    );
  }
}

export default App;
