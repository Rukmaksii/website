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
					<div className={styles.about}>
						<span>About Rukmaksii</span>
						<p>Our project is a video game, more precisely a MOBA (Multiplayer Online Battle Arena) with a TPS (Third Person Shooter) perspective. A poignant experience centered on 3vs3 or 2vs2 matches to fight for the control of objectives. Strategy, good positioning and accuracy are key to success in this very quick pace game.</p>
						<div>
							<img src="/website/images/screenshot1.png" />
							<img src="/website/images/screenshot2.png" />
						</div>
					</div>
					<div className={styles.download}>
						<span>Download Rukmaksii</span>
						<div>
							<a href="https://github.com/Rukmaksii/Rukmaksii/releases/latest/download/Rukmaksii.exe">Windaube</a>
							<a href="https://github.com/Rukmaksii/Rukmaksii/releases/latest/download/Rukmaksii-for-mac.zip">Mac OS</a>
						</div>
					</div>
					<div className={styles.infos}>
						<span>Download Rukmaksii</span>
						<div>
							<a href="https://github.com/Rukmaksii/website/blob/develop/public/website/resources/Defense1.pdf">First report</a>
							<a href="https://github.com/Rukmaksii/website/blob/develop/public/website/resources/Defense2.pdf">Second report</a>
							<a href="https://github.com/Rukmaksii/website/blob/develop/public/website/resources/Report.pdf">Project report</a>
							<a href="https://github.com/Rukmaksii/website/blob/develop/public/website/resources/InstallationManual.pdf">Installation manual</a>
							<a href="https://github.com/Rukmaksii/website/blob/develop/public/website/resources/UsersManual.pdf">User's manual</a>
						</div>
					</div>
				</div>
			   )
	}

}
