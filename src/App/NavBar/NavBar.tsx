import React, {Component} from "react";
import { Link } from "react-router-dom";

import styles from "./NavBar.module.scss";

interface IProps {
}

interface IState {
}

export default class NavBar extends Component<IProps, IState> {
	
	constructor(props: IProps) {
		super(props);
	}


	render() {
		return (
				<nav className={styles.navbar}>
					<ul className={styles.links}>
						<li>
							<Link to="/"><img src="/website/images/logo.png" /></Link>
						</li>
						<li>
							<Link to="/" >News</Link>
						</li>
						<li>
							<Link to="/" >About The Game</Link>
						</li>
						<li>
							<Link to="/" >About Us</Link>
						</li>
					</ul>
					<div className={styles.separator}></div>
					<a className={styles.download}>
						<div></div>
						<span>Play now</span>
						<div></div>
					</a>
					</nav>
					)
	}
}

