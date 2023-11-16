import React from 'react'
import getCapitalizedName from '../helper_functions';

const SelectedMonDetails = ({selectedMon, setSelectedMon}) => {
	return (
		<section className='column-flex'>
			<button
			onClick={() => {setSelectedMon(null)}}
			>Go back to a new list</button>
			<label>{getCapitalizedName(selectedMon.name)}</label>
			<img className='pixel double-size' src={selectedMon.sprites.front_default}></img>
			<div className='row-flex'>
				<p>Typing:</p>
				{
					selectedMon.types.map((typeSlot) => {
						return (<p>{getCapitalizedName(typeSlot.type.name)}</p>);
					})
				}
			</div>
			<div className='row-flex'>
				<p>Abilities:</p>
				{
					selectedMon.abilities.map((abilitySlot) => {
						return (<p>{getCapitalizedName(abilitySlot.ability.name)}</p>);
					})
				}
			</div>
		</section>
	);
};

export default SelectedMonDetails;