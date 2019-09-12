import React from 'react';
import logo from './logo.svg';
import './App.css';
import imgMeme from './img/womanyellingcat.jpg';
import TextField from './TextField.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			woman_text: 'Meme Generator: YOU CANNOT LEAVE TEXT FIELDS EMPTY',
			cat_text: 'Me+'
		};
	}

	render() {
		async function getPhoto() {
			const res = await fetch('http://localhost:4000/');
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
							<textarea className="Text-field" maxLength="110" />
							<textarea className="Text-field" maxLength="110" />
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
