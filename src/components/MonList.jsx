import {React, useState, useEffect} from "react";
import MonRow from "./MonRow";

const API_URL = `https://pokeapi.co/api/v2/pokemon/`;
const DEFAULT_OFFSET = 0;
const DEFAULT_LIMIT = 20;

const MonList = ({offset, limit}) => {
	const [mons, setMons] = useState(null);
	
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
			{
				mons.map((monster) => {
					return (
						<MonRow monsterURL={monster.url}></MonRow>
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