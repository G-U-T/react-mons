import { useState } from 'react'
import MonList from './components/MonList'
import './App.css'
import './style.css'

const NUM_POKEMON = 1017

function App() {
	// View a random selection of monsters every refresh.
	const random_offset = Math.floor(Math.random() * NUM_POKEMON) + 1;

	return (
	<>
		<MonList offset={random_offset} limit={20}></MonList>
	</>
	);
}

export default App
