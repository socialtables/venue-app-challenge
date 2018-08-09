import React from "react";
import "./review.css";
import StarIcon from "../../icons/star";
import TrashIcon from "../../icons/trash";

export default function Review({
	onDeleteReview,
	review: {
		id,
		rating,
		author,
		comment,
		created_at
	} = {}
}) {
	return <tr className="review">
		<td className="review__info">
			<div className="review__info__author">
				{author}
			</div>
			<div className="review__info__date">
				{created_at}
			</div>
		</td>
		<td className="review__details">
			<div className="review__details__rating">
				{rating} <StarIcon />
			</div>
			<div className="review__details__comment">
				{comment}
			</div>
		</td>
		<td className="review__delete">
			<TrashIcon />
		</td>
	</tr>;
}
