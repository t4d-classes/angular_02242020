'use strict';

var _apolloServer = require('apollo-server');

var _schema = require('./schema');

var _resolvers = require('./resolvers');

const GRAPHQL_PORT = process.env.PORT || 3010;
const REST_PORT = process.env.REST_PORT || 3020;
const REST_SERVER_URL = `http://localhost:${REST_PORT}`;

const context = {
  restURL: REST_SERVER_URL
};

const server = new _apolloServer.ApolloServer({
  typeDefs: _schema.typeDefs,
  resolvers: _resolvers.resolvers,
  context
});

server.listen({
  port: GRAPHQL_PORT
}).then(({ url }) => {
  console.log(`graphql server url: ${url}`);
});