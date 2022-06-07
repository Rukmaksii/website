import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import About, {Person} from "./About/About";

import styles from "./App.module.scss";


const data: Person[] = [
	{
		Name: "Romain Le Miere",
		Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim",
		Role: "Team Manager",
		ImagePath: "https://photos.cri.epita.fr/romain.le-miere"
	},
	{
		Name: "Alban Naulin",
		Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim",
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

