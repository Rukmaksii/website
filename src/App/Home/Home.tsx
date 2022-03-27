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
				{
				[...Array(100)]
					.map((_, i) => (<div key={i}>Hello, {i}</div>))
				}
			</div>
		)
	}

}
