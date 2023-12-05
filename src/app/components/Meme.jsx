export default async function Meme() {
	const response = await fetch("https://api.imgflip.com/get_memes");
	const info = await response.json();
	const meme = info.data.memes;

	return (
		<div>
			<p>
				Here's an API to fetch random memes:
				<a href="https://api.imgflip.com/get_memes" target="_blank">
					"https://api.imgflip.com/get_memes"
				</a>
			</p>
			<div className="con">
				{meme.map((meme) => (
					<img className="meme-img" key={meme.name} src={meme.url} alt={meme.name} />
				))}
			</div>
			<hr />
		</div>
	);
}
// "use client"
// import React, { useEffect, useState } from "react";

// export default function Meme() {
// 	const [memes, setMemes] = useState([]);

// 	useEffect(() => {
// 		async function fetchMemes() {
// 			try {
// 				const response = await fetch("https://api.imgflip.com/get_memes");
// 				const data = await response.json();

// 				if (data.success) {
// 					setMemes(data.data.memes);
// 				} else {
// 					console.error("Failed to fetch memes:", data.error_message);
// 				}
// 			} catch (error) {
// 				console.error("Error fetching memes:", error);
// 			}
// 		}

// 		fetchMemes();
// 	}, []); // Empty dependency array means this effect runs once after the initial render

// 	return (
// 		<div>
// 			<p>Here's an API to fetch random memes:</p>
// 			<a href="https://api.imgflip.com/get_memes" target="_blank">
// 				"https://api.imgflip.com/get_memes"
// 			</a>
// 			<div className="con">
// 				{memes.map((meme) => (
// 					<img className="img" key={meme.name} src={meme.url} alt={meme.name} />
// 				))}
// 			</div>
// 			<hr />
// 		</div>
// 	);
// }
