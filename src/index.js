/**
 * You shouldn't have to modify any of this file
 */

import ApolloClient from "apollo-boost";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { render } from "react-dom";
import App from "./components/app";

const client = new ApolloClient({ uri: "http://localhost:3001/graphql" });

render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById("root")
);
