import React from "react";
import axios from "axios";
import "./App.css";
import imgMeme from "./img/womanyellingcat.jpg";
import TextField from "./TextField";
import { BASE_URL } from "./index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleWomanInput = this.handleWomanInput.bind(this);
    this.handleCatInput = this.handleCatInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleBox = this.toggleBox.bind(this);
    this.state = {
      woman_text: "",
      cat_text: "",
      img: "",
      isVisible: false
    };
  }

  toggleBox() {
    this.setState({
      isVisible: true
    });
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
    this.toggleBox();
    if (this.state.woman_text === "" || this.state.cat_text === "") {
      axios
        .get(`${BASE_URL}/`, {
          params: {
            woman: "Meme Generator: YOU CANNOT LEAVE TEXT FIELDS EMPTY!",
            cat: "*Me just testing the Submit button*"
          }
        })
        .then(response => {
          //console.log(response.data);
          // this.setState({ img: response.data });
          // console.log(typeof this.state.img);
        })
        .catch(err => console.log(err));
    } else {
      axios
        .get(`${BASE_URL}/`, {
          params: {
            woman: this.state.woman_text,
            cat: this.state.cat_text
          }
        })
        .then(response => {
          //console.log(response.data);
          // this.setState({ img: response.data });
          // console.log(this.state.img);
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    const isVisible = this.state.isVisible;

    return (
      <div className="App">
        <header className="App-header">
          <div>
            <h1>Make Your Own Meme</h1>
          </div>
          <div className="Meme-container">
            <div className="Text-boxes">
              <TextField
                className="Text-field"
                text={this.state.woman_text}
                onInputChange={this.handleWomanInput}
                placehold="Enter Woman Text Here"
              />
              <TextField
                className="Text-field"
                text={this.state.cat_text}
                onInputChange={this.handleCatInput}
                placehold="Enter Cat Text Here"
              />
            </div>

            <img src={imgMeme} alt="meme" />
          </div>
          <button onClick={this.handleSubmit}>Submit</button>
          {isVisible && (
            <a href={`${BASE_URL}/meme.jpg`} download>
              Open Your Fresh Meme
            </a>
          )}
        </header>
      </div>
    );
  }
}

export default App;
