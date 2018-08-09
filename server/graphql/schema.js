const {
	GraphQLObjectType,
	GraphQLSchema
} = require("graphql");

const description = require("./types/description");
const listing = require("./types/listing");
const review = require("./types/review");

module.exports = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: "Query",
		fields: {
			description: description.descriptionQuery,
			listing: listing.listingQuery,
			reviews: review.reviewsQuery
		}
	}),
	mutation: new GraphQLObjectType({
		name: "Mutation",
		fields: {
			createReview: review.createReviewMutation
		}
	})
});
