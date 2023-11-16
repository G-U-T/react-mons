import { useState } from 'react'
import MonList from './components/MonList'
import './App.css'

function App() {
	return (
	<>
		<MonList offset={200} limit={20}></MonList>
	</>
	);
}

export default App
