/**
 * You shouldn't have to modify any of this file
 */

const { graphqlExpress, graphiqlExpress } = require("graphql-server-express");
const schema = require("./schema");
const query = require("./query");

module.exports = function setupGraphQL(server) {
	server.post("/graphql", [
		graphqlExpress(request => {
			return ({
				schema,
				context: request,
				formatError(error) {
					console.log(error);
					return {
						message: error.message || "An unknown error occurred.",
						locations: error.locations,
						stack: error.stack ? error.stack.split("\n") : [],
						path: error.path
					};
				}
			});
		})
	]);
	server.get("/graphiql", [
		graphiqlExpress({
			query,
			schema,
			endpointURL: "/graphql"
		})
	]);
};
