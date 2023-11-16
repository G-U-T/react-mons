import {React, useState, useEffect} from "react";
import getCapitalizedName from "../helper_functions";

const MonRow = ({monsterURL, setSelectedMon}) => {
	const [monster, setMonster] = useState(null);
	const [sprite, setSprite] = useState(null);

	useEffect(() => {
		const fetchMonster = async () => {
			try {
				const response = await fetch(monsterURL);
				const json = await response.json();
				setMonster(json);
			}
			catch(error) {
				console.log(`ERROR ON ${monsterURL} ${error}`);
			}
		};

		fetchMonster();
	}, []);

	return (
		monster !== null && monster !== undefined ? (
		<>
			<section className='row-flex'>
				<button 
				onMouseEnter={() => {setSprite(monster.sprites.front_shiny)}} 
				onMouseLeave={() => {setSprite(monster.sprites.front_default)}}
				onClick={() => {setSelectedMon(monster)}}
				>
					<img className='pixel' src={sprite ? sprite : monster.sprites.front_default}></img>
				</button>
				<label>{getCapitalizedName(monster.name)}</label>
			</section>
		</>
		) : (
			<div></div>
		)
	);
};

export default MonRow;