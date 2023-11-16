import {React, useState, useEffect} from "react";

const MonRow = ({monsterURL}) => {
	const [monster, setMonster] = useState(null);
	const [sprite, setSprite] = useState(null);

	useEffect(() => {
		const fetchMonster = async () => {
			try {
				const response = await fetch(monsterURL);
				const json = await response.json();
				setMonster(json);
				setSprite(monster.sprites.front_default);
			}
			catch(error) {
				console.log(`ERROR: ${error}`);
			}
		};

		fetchMonster();
	}, []);

	const getCapitalizedName = (name) => {
		return name.slice(0, 1).toUpperCase() + name.slice(1);
	};

	return (
		monster !== null && monster !== undefined ? (
		<>
			<section className='row-flex'>
				<button 
				onMouseEnter={() => {setSprite(monster.sprites.front_shiny)}} 
				onMouseLeave={() => {setSprite(monster.sprites.front_default)}}
				>
					<img className='pixel' src={sprite}></img>
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