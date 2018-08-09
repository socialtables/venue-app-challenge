import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import "./create-review.css";
import StarIcon from "../../icons/star";

class CreateReview extends Component {
	render() {
		return <div className="create-review">
			<h3>Write a Review</h3>
			<form>
				<label>Rate Your Experience</label>
				<div className="create-review__stars">
					<StarIcon />
				</div>
				<label htmlFor="create-review__author">Author</label>
				<input id="create-review__author" />
				<label htmlFor="create-review__comment">Review</label>
				<textarea id="create-review__comment" />
				<button>Add Review</button>
			</form>
		</div>;
	}
}

const createReviewMutation = gql`
	mutation createReview(
		$author: String!,
		$rating: Int!,
		$comment: String!,
	) {
		createReview(
			author: $author
			rating: $rating
			comment: $comment
		) {
			id
			rating
			author
			comment
			created_at
		}
	}
`;

/**
 * You shouldn't have to modify any code below this comment
 */

export default function CreateReviewHOC(props) {
	return <Mutation
		mutation={createReviewMutation}
		update={(cache, { data: { createReview } }) => {
			const { reviews } = cache.readQuery({ query: props.getReviewsQuery });
			cache.writeQuery({
				query: props.getReviewsQuery,
				data: { reviews: [createReview].concat(reviews) }
			});
		}}
	>
		{(submitCreateReview, { data }) => (
			<CreateReview
				{...props}
				onCreateReview={variables => submitCreateReview({ variables })}
			/>
		)}
	</Mutation>;
}
