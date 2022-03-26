import * as React from "react";

import styles from "./App.module.scss";

export default class App extends React.Component<{},{}> {

	constructor(props: {}) {
		super(props);
		// ctr
	}

	render () {
		return (
			<div className={styles.app}>Hello, World!</div>
		)	
	}
}

