import { useState } from 'react'
import MonList from './components/MonList'
import SelectedMonDetails from './components/SelectedMonDetails'
import './App.css'
import './style.css'

const NUM_POKEMON = 1017

function App() {

	const [selectedMon, setSelectedMon] = useState(null);

	// View a random selection of monsters every refresh.
	const random_offset = Math.floor(Math.random() * NUM_POKEMON) + 1;

	return (
		selectedMon ? (
			<SelectedMonDetails selectedMon={selectedMon} setSelectedMon={setSelectedMon}></SelectedMonDetails>
		) : (
			<MonList offset={random_offset} limit={20} setSelectedMon={setSelectedMon}></MonList>
		)
	);
}

export default App
