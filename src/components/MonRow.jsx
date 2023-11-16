import {React, useState, useEffect} from "react";

const MonRow = ({monsterURL}) => {
	const [monster, setMonster] = useState(null);

	useEffect(() => {
		const fetchMonster = async () => {
			try {
				const response = await fetch(monsterURL);
				const json = await response.json();
				setMonster(json);
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
				<button><img src={monster.sprites.front_default}></img></button>
				<label>{getCapitalizedName(monster.name)}</label>
			</section>
		</>
		) : (
			<div></div>
		)
	);
};

export default MonRow;