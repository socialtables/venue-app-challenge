/**
 * You shouldn't have to modify any of this file
 */

const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const data = require("./data");
const setupGraphQL = require("./graphql");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(function(req, _, next) {
	req.data = data;
	return next();
});
setupGraphQL(app);
app.listen(3001);
console.log("Running a GraphQL API server at http://localhost:3001/graphql");
console.log("Running a GraphQL IDE at http://localhost:3001/graphiql");
