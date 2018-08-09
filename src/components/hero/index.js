import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import "./hero.css";

class Hero extends Component {
	render() {
		const { listing: { images = [], name } = {} } = this.props;
		return <div className="hero">
			<img src={images[0]} alt="listing" />
			<a className="hero__arrow hero__arrow--left">◀</a>
			<a className="hero__arrow hero__arrow--right">▶</a>
			<div className="hero__info">
				<h1>{name}</h1>
			</div>
		</div>;
	}
}

const getHero = gql`
	query getHero {
		listing {
			name
			images
		}
	}
`;

/**
 * You shouldn't have to modify any code below this comment
 */

export default function HeroHOC(props) {
	return <Query
		query={getHero}
	>
		{({ data }) => (
			<Hero
				{...props}
				listing={data && data.listing || {}} // eslint-disable-line no-mixed-operators
			/>
		)}
	</Query>;
}
