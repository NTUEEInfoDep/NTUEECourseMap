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
  
  input GroupInput {
    name: String!
    content: String!
    courseIDs: [Int]
  }

  type Query {
    AllGroups: [Group]   
  }

  type Mutation {
    CreateGroup(groupInput: GroupInput!): Group
    UpdateGroup(id: Int!, groupInput: GroupInput!): Group
    DeleteGroup(id: Int!): Group
  }
`;

export { typeDefs };
