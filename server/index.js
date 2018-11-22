var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var cors = require('cors');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Dates {
    dateOne: String
    dateTwo: String
  }
  type Query {
    dates: Dates
  }
  type Mutation {
    sample: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  dates: () => {
    return {
      dateOne: new Date().toISOString(),
      dateTwo: new Date().toISOString(),
    };
  },
  sample: () => {
    return 'Sample Success';
  },
};

var app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');