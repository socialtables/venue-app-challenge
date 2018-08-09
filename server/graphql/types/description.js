/**
 * You shouldn't have to modify any of this file
 */

const {
	GraphQLObjectType,
	GraphQLString
} = require("graphql");

const descriptionType = new GraphQLObjectType({
	name: "Description",
	description: "a description description",
	fields: {
		language: {
			description: "the language of the description",
			type: GraphQLString
		},
		content: {
			description: "the description",
			type: GraphQLString
		}
	}
});

const descriptionQuery = {
	type: descriptionType,
	args: {
		language: {
			description: "the desired language of the description",
			type: GraphQLString
		}
	},
	resolve (_, args, ctx) {
		const language = args.language;
		const content = ctx.data.descriptions[language];
		return { language, content };
	}
};

module.exports = {
	type: descriptionType,
	descriptionQuery
};
