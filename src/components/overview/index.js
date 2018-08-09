import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import "./overview.css";

function Overview({
	listing: {
		number_of_rooms,
		total_meeting_space,
		largest_meeting_room_capacity,
		max_capacity,
		contact = {}
	} = {},
	description
}) {
	return <div className="overview">
		<div className="overview__description">
			<div className="overview__space">
				<div className="overview__space__item">
					<h3>Mtg Rooms</h3>
					<p>{number_of_rooms}</p>
				</div>
				<div className="overview__space__item">
					<h3>Max Capacity</h3>
					<p>{max_capacity}</p>
				</div>
				<div className="overview__space__item">
					<h3>Max Mtg Capacity</h3>
					<p>{largest_meeting_room_capacity}</p>
				</div>
				<div className="overview__space__item">
					<h3>Total Mtg Space</h3>
					<p>{total_meeting_space}</p>
				</div>
			</div>
			<p>{description}</p>
		</div>
		<div className="overview__info">
			<h3>Phone</h3>
			<p>{contact.phone_number}</p>
			<h3>Email Addresss</h3>
			<p>{contact.email_address}</p>
		</div>
	</div>;
}

const getOverview = gql`
	query getOverview($language: String!) {
		listing {
			name
			contact {
				phone_number,
				email_address
			}
			number_of_rooms
			total_meeting_space
			largest_meeting_room_capacity
			max_capacity
			images
		}
		description(language: $language) {
			content
		}
	}
`;

export default function OverviewHOC(props) {
	return <Query
		query={getOverview}
		variables={{ language: "english" }}
	>
		{({ data }) => (
			<Overview
				{...props}
				listing={data && data.listing || {}} // eslint-disable-line no-mixed-operators
				description={data && data.description && data.description.content}
			/>
		)}
	</Query>;
}
