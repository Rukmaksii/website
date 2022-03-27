import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./Home/Home";

import styles from "./App.module.scss";

export default class App extends React.Component<{},{}> {

	constructor(props: {}) {
		super(props);
		// ctr
	}

	render () {
		return (
			<div className={styles.app}>
				<BrowserRouter>
					<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="*" element={<Home />} />	
					</Route>
					</Routes>
				</BrowserRouter>
			</div>
		)	
	}
}

