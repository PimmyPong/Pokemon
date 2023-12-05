"use client";

import { useEffect, useState } from "react";

export default function Pokemon() {
	const [pokemon, setPokemon] = useState({});
	const [request, setRequest] = useState("ditto");

	async function fetchPokemon() {
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${request}`
		);
		const info = await response.json();
		setPokemon(info);
	}

	useEffect(() => {
		fetchPokemon();
	}, [request]);
    
	function handleSearch(e) {
		e.preventDefault();
		fetchPokemon(request);
	}

	return (
		<div>
			<h3>Pokemon</h3>
			<p>
				Here's a Pokemon API:
				<a
					href={`https://pokeapi.co/api/v2/pokemon/${request}`}
					target="_blank">
					{`https://pokeapi.co/api/v2/pokemon/${request}`}
				</a>
			</p>
			<p>
				You have to replace the text "ditto" with the name of the Pokemon you
				want to search for.
			</p>
			<form onSubmit={handleSearch}>
				<input
					placeholder="ditto"
					onChange={(e) => setRequest(e.target.value)}
					value={request}
				/>
				<button type="submit">Search</button>
			</form>
			<div className="pokemon">
				<p>{pokemon.name}</p>
				<img
					src={pokemon.sprites?.back_default}
					alt={`${pokemon.name} sprite`}
				/>
			</div>
			<hr />
		</div>
	);
}
