import React, { Component, Fragment } from "react";
import "./app.css";
import Header from "./header";
import Hero from "./hero";
import Navigation from "./navigation";
import Overview from "./overview";
import Reviews from "./reviews";

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			language: "english"
		};
	}

	render() {
		return <Fragment>
			<Header language={this.state.language} />
			<Hero />
			<Navigation />
			<Overview />
			<Reviews />
		</Fragment>;
	}
}
