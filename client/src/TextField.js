import React from "react";
import "./App.css";

class TextField extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onInputChange(e.target.value);
  }

  render() {
    const text = this.props.text;
    return (
      <textarea
        className="Text-field"
        maxLength="110"
        value={text}
        onChange={this.handleChange}
        placeholder={this.props.placehold}
      />
    );
  }
}

export default TextField;
