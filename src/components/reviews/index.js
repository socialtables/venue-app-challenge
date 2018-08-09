import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import "./reviews.css";
import StarIcon from "../icons/star";
import Review from "./review";
import CreateReview from "./create-review";

function Reviews({ reviews, getReviewsQuery }) {
	const length = reviews.length;
	return <div className="reviews">
		<div className="reviews__header">
			<h2>Reviews</h2>
			<div className="reviews__header__stars">
				<StarIcon />
				{`(${length} reviews)`}
			</div>
		</div>
		{length ? <hr /> : ""}
		<table>
			<tbody>
				{reviews.map(r => (
					<Review key={r.id} review={r} getReviewsQuery={getReviewsQuery} />
				))}
			</tbody>
		</table>
		<hr />
		<CreateReview getReviewsQuery={getReviewsQuery} />
	</div>;
}

/**
 * You shouldn't have to modify any code below this comment
 */

const getReviews = gql`
	query getReviews {
		reviews {
			id
			rating
			author
			comment
			created_at
		}
	}
`;

export default function ReviewsHOC(props) {
	return <Query query={getReviews}>
		{({ data }) => (
			<Reviews
				{...props}
				getReviewsQuery={getReviews}
				reviews={data && data.reviews || []} // eslint-disable-line no-mixed-operators
			/>
		)}
	</Query>;
}
