import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import About, {Person} from "./About/About";

import styles from "./App.module.scss";


const data: Person[] = [
	{
		Name: "Romain Le Miere",
		Description: "I led the project and was manager for the whole git workflow. Being a team manager taught me a lot during this project and it was a great experience.",
		Role: "Team Manager",
		ImagePath: "https://photos.cri.epita.fr/romain.le-miere"
	},
	{
		Name: "Alban Naulin",
		Description: "took care of implementing a realistic monster that will help you or not in your game. Texture designer: made some awesome texture for shields and monster Sound designer", 
		Role: "AI manager",
		ImagePath: "https://photos.cri.epita.fr/alban.naulin"
	},
	{
		Name: "Lucas Tilly",
		Description: "3D manager of the project, I brought all of the 3D assets in our game and implemented various key features like the item wheel, the animations, the ability tree and many others! I Hope you will enjoy our game!",
		Role: "3D Manager",
		ImagePath: "https://photos.cri.epita.fr/lucas.tilly"
	},
	{
		Name: "Emmanuel Vouillon",
		Description: "The main designer of the project. Master of the menus but also the man behind the HUD, the objectives, some items and many other core features of the game. Versitality is key!",
		Role: "Project designer",
		ImagePath: "https://photos.cri.epita.fr/emmanuel.vouillon"
	}
]

export default class App extends React.Component<{},{}> {

	constructor(props: {}) {
		super(props);
		// ctr
	}

	render () {
		console.log(process.env.BASE_URL)
		return (
			<div className={styles.app}>
				<BrowserRouter basename={process.env.BASE_URL}>
					<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="aboutus" element={<About persons={data}/>} />	
						<Route path="*" element={<Home />} />	
					</Route>
					</Routes>
				</BrowserRouter>
			</div>
		)	
	}
}

