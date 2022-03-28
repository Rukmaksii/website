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
					<ul>
						<li>
							<Link to="/" >Home</Link>
						</li>
						<li>
							<Link to="/" >About Us</Link>
						</li>
						<li>
							<a className={styles.download}>
								<div></div>
								<span>Play now</span>
								<div></div>
							</a>
						</li>
					</ul>
				</nav>
			   )
	}
}

