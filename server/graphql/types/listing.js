const {
	GraphQLInt,
	GraphQLList,
	GraphQLObjectType,
	GraphQLString
} = require("graphql");

const contactType = new GraphQLObjectType({
	name: "Contact",
	description: "contact information",
	fields: {
		phone_number: {
			description: "the phone number for the listing",
			type: GraphQLString
		},
		email_address: {
			description: "the email address for the listing",
			type: GraphQLString
		}
	}
});

const listingType = new GraphQLObjectType({
	name: "Listing",
	description: "a listing",
	fields: {
		id: {
			description: "the id of the listing",
			type: GraphQLInt
		},
		name: {
			description: "the name of the listing",
			type: GraphQLString
		},
		contact: {
			description: "the contact info for the listing",
			type: contactType
		},
		number_of_rooms: {
			description: "the number of rooms for the listing",
			type: GraphQLInt
		},
		total_meeting_space: {
			description: "the total meeting space for the listing",
			type: GraphQLInt
		},
		largest_meeting_room_capacity: {
			description: "the largest meeting room capacity for the listing",
			type: GraphQLInt
		},
		max_capacity: {
			description: "the max capacity for the listing",
			type: GraphQLInt
		},
		images: {
			description: "the image urls for the listing",
			type: new GraphQLList(GraphQLString)
		}
	}
});

const listingQuery = {
	type: listingType,
	args: {
		language: {
			description: "the desired language of the listing",
			type: GraphQLString
		}
	},
	resolve (_, args, ctx) {
		return ctx.data.listing;
	}
};

module.exports = {
	type: listingType,
	listingQuery
};
