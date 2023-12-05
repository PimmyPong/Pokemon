import Dog from "./components/Dog.jsx";
import Meme from "./components/Meme.jsx";
import Pokemon from "./components/Pokemon.jsx";

export default async function Home() {
	return (
		<div>
			<h1>Can you catch them all?</h1>
			<Dog />
			<Meme />
      <Pokemon/>
		</div>
	);
}
