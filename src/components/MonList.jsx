import {React, useState, useEffect} from "react";
import MonRow from "./MonRow";

const API_URL = `https://pokeapi.co/api/v2/pokemon/`;
const DEFAULT_OFFSET = 0;
const DEFAULT_LIMIT = 20;

const MonList = ({offset, limit, setSelectedMon}) => {
	const [mons, setMons] = useState(null);
	const [customMons, setCustomMons] = useState([]);
	const [name, setName] = useState(``);
	const [type, setType] = useState(``);
	const [ability, setAbility] = useState(``);
	
	useEffect(() => {
		const fetchMons = async () => {

			if (!offset) offset = DEFAULT_OFFSET;
			if (!limit) limit = DEFAULT_LIMIT;

			try {
				const response = await fetch(`${API_URL}?offset=${offset}&limit=${limit}`);
				const json = await response.json();
				setMons(json.results);
			}
			catch(error) {
				console.log(`ERROR: ${error}`);
			}
		};

		fetchMons();
	}, []);

	return (
		mons ? (
			<div className="column-flex">
				<form className="column-flex">
					<p>Create a monster!</p>
					<section className="row-flex"><label>Name:</label><input name="name" onChange={(event) => setName(event.target.value)}></input></section>
					<section className="row-flex"><label>Type:</label><input name="type" onChange={(event) => setType(event.target.value)}></input></section>
					<section className="row-flex"><label>Ability:</label><input name="ability" onChange={(event) => setAbility(event.target.value)}></input></section>
					<button onClick={(event) => {
						event.preventDefault();
						setCustomMons([...customMons, {
							name,
							types: [{type: {name: type}}],
							abilities: [{ability: {name: ability}}],
							sprites: {front_default: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png`, front_shiny: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png`},
						}]);
					}}>Submit</button>
				</form>

				<p>Viewing Pokémon <strong>{offset}</strong> to <strong>{offset + limit}</strong>.</p>
				{
					customMons.map((monster) => {
						return (
							<section className='row-flex' key={monster.name}>
								<button 
								onClick={() => {setSelectedMon(monster)}}
								>
									<img className='pixel' src={monster.sprites.front_default}></img>
								</button>
								<label>{monster.name}</label>
							</section>
						);
					})
				}
				{
					mons.map((monster) => {
						return (
							<MonRow monsterURL={monster.url} key={monster.name} setSelectedMon={setSelectedMon}></MonRow>
						);
					})
				}
			</div>
		) : (
			<p>...</p>
		)
	);
};

export default MonList;