import React, { Component } from "react";

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
				<header>
<h1 className={styles.title}>Rukmaksii</h1>
				</header>
			</div>
		)
	}

}
