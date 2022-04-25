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
	return (
		<div className={styles.container} 
			onMouseEnter={() => setActivated(true)}
			onMouseLeave={() => setActivated(false)}
			>
			<span className={styles.image}><img src={ImagePath} /></span>
			{
				activated ? (<span>{Description}</span>) :
				(<><h4>{Name}</h4><span>{Role}</span></>)
			}
		</div>
	)
}

export default Container;
