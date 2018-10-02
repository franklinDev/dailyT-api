import {makeExecutableSchema} from 'graphql-tools'

const users: any[] = [
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
    
const typeDefs = `
    type Users {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        allUsers: [Users!]!
    }

    type Mutation {
        createUser(name: String!, email: String!): Users
    }
`;

const resolvers = {
    Query: {
        allUsers: () => users
    },
    Mutation: {
        createUser: (parent, args) => {
            const newUser = Object.assign({id: users.length + 1}, args);
            users.push(newUser);
            return newUser;
        } 
    }
}

export default makeExecutableSchema({ typeDefs, resolvers })