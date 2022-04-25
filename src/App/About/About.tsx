import React, {Component} from "react";

import styles from "./About.module.scss";

import Container from "./Container";


export interface Person {
	ImagePath: string;
	Name: string;
	Role: string;
	Description: string;
}

interface IProps {
	persons: Person[];
}

interface IState {
}

const About = (props: IProps) => {

	return (<div className={styles.about}>
		<h3>About Us</h3>
		<div className={styles.containers}>
			{
				props.persons.map(p => (<Container Person={p} />))
			}
		</div>
</div>)
}

export default About;
