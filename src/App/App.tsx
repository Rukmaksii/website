import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import About, {Person} from "./About/About";

import styles from "./App.module.scss";


const data: Person[] = [
	{
		Name: "Romain Le Miere",
		Description: "",
		Role: "Chef de projet",
		ImagePath: "../../public/website/images/portraits/romain-le-miere.png"
	},
	{
		Name: "Alban Naulin",
		Description: "",
		Role: "",
		ImagePath: "../../public/website/images/portraits/alban-naulin.png"
	},
	{
		Name: "Lucas Tilly",
		Description: "",
		Role: "Directeur 3D",
		ImagePath: "../../public/website/images/portraits/lucas-tilly.png"
	},
	{
		Name: "Emmanuel Vouillon",
		Description: "",
		Role: "",
		ImagePath: "../../public/website/images/portraits/emmanuel-vouillon.png"
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

