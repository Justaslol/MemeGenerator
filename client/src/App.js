import React from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import imgMeme from "./img/womanyellingcat.jpg";
import TextField from "./TextField";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleWomanInput = this.handleWomanInput.bind(this);
    this.handleCatInput = this.handleCatInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      woman_text: "",
      cat_text: ""
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

  handleSubmit() {
    if (this.state.woman_text === "" || this.state.cat_text === "") {
      axios
        .get("http://localhost:4000/", {
          params: {
            woman: "Meme Generator: YOU CANNOT LEAVE TEXT FIELDS EMPTY",
            cat: "*Me just testing the Submit button*"
          }
        })
        .then(response => console.log(response.data))
        .catch(err => console.log(err));
    } else {
      axios
        .get("http://localhost:4000/", {
          params: {
            woman: this.state.woman_text,
            cat: this.state.cat_text
          }
        })
        .then(response => console.log(response.data))
        .catch(err => console.log(err));
    }
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
                placehold="Enter Your Text Here"
              />
              <TextField
                className="Text-field"
                text={this.state.cat_text}
                onInputChange={this.handleCatInput}
                placehold="Enter Your Text Here"
              />
            </div>

            <img src={imgMeme} alt="meme" />
          </div>
          <button onClick={this.handleSubmit}>Submit</button>
        </header>
      </div>
    );
  }
}

export default App;
