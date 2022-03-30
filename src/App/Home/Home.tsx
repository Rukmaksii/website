import React, { Component } from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.scss";

interface IProps {
	
}

interface IState {
}

export default class Home extends Component<IProps, IState> {
	
	constructor(props: IProps) {
		super(props);
	}

	render() {
		return (
				<div className={styles.home}>
					<div className={styles.header}>
						<div className={styles.title}>
							<img src="/website/images/logo.png" />
						</div>
						<span>Play the next generation of MOBAs</span>
						<span>Available soon on PC</span>
						<Link to="/download">Get Rukmaksii</Link>
					</div>
				</div>
			   )
	}

}
