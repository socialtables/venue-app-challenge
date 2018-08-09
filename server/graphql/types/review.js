const {
	GraphQLList,
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLInt,
	GraphQLString
} = require("graphql");
const cuid = require("cuid");

const reviewType = new GraphQLObjectType({
	name: "review",
	review: "a review",
	fields: {
		id: {
			description: "the id of the review",
			type: GraphQLString
		},
		rating: {
			description: "the rating of the review",
			type: GraphQLInt
		},
		author: {
			description: "the author of the review",
			type: GraphQLString
		},
		comment: {
			description: "the comment of the review",
			type: GraphQLString
		},
		created_at: {
			description: "the timestamp of the review",
			type: GraphQLString
		}
	}
});

const reviewsQuery = {
	type: new GraphQLList(reviewType),
	resolve (_, args, ctx) {
		return ctx.data.reviews;
	}
};

const createReviewMutation = {
	type: reviewType,
	args: {
		author: { type: new GraphQLNonNull(GraphQLString) },
		rating: { type: new GraphQLNonNull(GraphQLInt) },
		comment: { type: new GraphQLNonNull(GraphQLString) },
	},
	resolve (_, args, ctx) {
		const review = {
			id: cuid(),
			created_at: new Date(),
			...args
		};
		/**
		 * The app's data store is essentially an object that's instantiated
		 * when starting (or restarting) the server (/server/index.js line 8) and
		 * then attached to each request (/server/index.js line 15). In order for
		 * changes to the data store to persist, we need to use mutative methods.
		 * In the case of adding a new review to the array, we use Array.unshift().
		 * You'll want to do something similar for deleting a review.
		 */
		ctx.data.reviews.unshift(review);
		return review;
	}
};

/**
 * You shouldn't have to modify any code above this comment
 */

module.exports = {
	type: reviewType,
	reviewsQuery,
	createReviewMutation
};
