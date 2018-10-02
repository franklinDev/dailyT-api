"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tools_1 = require("graphql-tools");
var users = [
    {
        id: 1,
        name: "teste",
        email: "teste@domain.com"
    },
    {
        id: 2,
        name: "teste 2",
        email: "teste2@domain.com"
    },
];
var typeDefs = "\n    type Users {\n        id: ID!\n        name: String!\n        email: String!\n    }\n\n    type Query {\n        allUsers: [Users!]!\n    }\n\n    type Mutation {\n        createUser(name: String!, email: String!): Users\n    }\n";
var resolvers = {
    Query: {
        allUsers: function () { return users; }
    },
    Mutation: {
        createUser: function (parent, args) {
            var newUser = Object.assign({ id: users.length + 1 }, args);
            users.push(newUser);
            return newUser;
        }
    }
};
exports.default = graphql_tools_1.makeExecutableSchema({ typeDefs: typeDefs, resolvers: resolvers });
