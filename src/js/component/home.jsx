import React, { useState } from "react";

const Home = () => {
	const [selectedColor, setSelectedcolor] = useState("red");

	return (
		<>
		<h1> Semaforo con React</h1>
		<div className="traffic-light ">
			
			<div
				onClick={() => setSelectedcolor("red")}
				className={
					"light red" + (selectedColor === "red" ? " glow" : "")
				}></div>
			<div
				onClick={() => setSelectedcolor("yellow")}
				className={
					"light yellow" + (selectedColor === "yellow" ? " glow" : "")
				}></div>
			<div
				onClick={() => setSelectedcolor("green")}
				className={
					"light green" + (selectedColor === "green" ? " glow" : "")
				}></div>
		</div>
		</>
	);
};

export default Home;