import React, {Component, useState} from "react";
import { Person } from "./About";

import styles from "./About.module.scss";

interface IProps {
	Person: Person;
}

interface IState {
}

const Container = (props: IProps) => {

	const [activated, setActivated] = useState(false);
	const {ImagePath, Name, Role, Description} = props.Person;

	const classes = [styles.container]
	if(activated)
		classes.push(styles.active)

	

	return (
		<div className={classes.join(" ")} 
			>
			<span className={styles.image}
				onMouseEnter={() => setActivated(true)}
				onMouseLeave={() => setActivated(false)}
			>
				<img src={ImagePath} />
				<h4>{Name}</h4>
			</span>
			<span>
			{
				activated ? Description :
				Role
			}
			</span>
		</div>
	)
}

export default Container;
