import React from 'react';
import logo from './logo.svg';
import './App.css';
import imgMeme from './img/womanyellingcat.jpg';

function App() {
	async function getPhoto() {
		const res = await fetch('http://localhost:4000/');
		const resData = await res.json();
	}

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<div>
					<h1>Create Your Own</h1>
				</div>

				<img src={imgMeme} alt="meme" />
				<button onClick={getPhoto}>Submit</button>
			</header>
		</div>
	);
}

export default App;
