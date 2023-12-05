export default async function Dog() {
	const message = await fetch("https://dog.ceo/api/breeds/image/random/10");
	const info = await message.json();
	const dog = info.message;

	return (
		<div>
			<h3>Dogs</h3>
			<p>
				Here's an API to fetch 10 random dog images:
				<a href="https://dog.ceo/api/breeds/image/random/10" target="_blank">
					https://dog.ceo/api/breeds/image/random/10"
				</a>
			</p>
			<div className="con">
				{dog.map((dog, index) => (
					<img className="img" key={index} src={dog} alt={`Dog ${index}`} />
				))}
			</div>
			<hr />
		</div>
	);
}
