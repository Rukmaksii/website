import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import About, {Person} from "./About/About";

import styles from "./App.module.scss";


const data: Person[] = [
	{
		Name: "Lucas Tilly",
		Description: "Directeur 3D Insh",
		Role: "Directeur 3D",
		ImagePath: ""
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

