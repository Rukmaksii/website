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
						<span id="downloadButton">Play the next generation of MOBAs</span>
						<span>Available soon on PC</span>
						<a href="https://github.com/Rukmaksii/Rukmaksii" >Get Rukmaksii</a>
					</div>
					<div className={styles.separator}></div>
					<div className={styles.download}>
						<span>Download Rukmaksii</span>
						<div>
							<span>Windaube</span>
							<span>Linux</span>
							<span>Mac OS</span>
						</div>
					</div>
					<div className={styles.about}>
						<span>About Rukmaksii</span>
						<div>
							<img src="/website/images/objective.png" />
							<img src="/website/images/hud.png" />
						</div>
					</div>
				</div>
			   )
	}

}
