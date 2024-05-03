const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  ### Define Data Structure ###

  type Group {
    id: Int!
    name: String!
    content: String!
    courseIDs: [Int]
  }

  ### Define Resolvers ###


  type Query {
    AllGroups: [Group]   
  }

`;

export { typeDefs };
