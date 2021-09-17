
const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Countdown {
  _id: ID
  countdownTitle: String
  createdAt: String
  username: String
  targetDate: String
  commentCount: Int
  comments: [Comment]
}

type Comment {
    _id: ID
    commentText: String
    createdAt: String
    username: String
}

type User {
  _id: ID
  username: String
  email: String
  friendCount: Int
  countdowns: [Countdowns]
  friends: [User]
}
type Query {
  me: User
  users: [User]
  user(username: String!): User
  thoughts(username: String): [Thought]
  thought(_id: ID!): Thought
}

type Auth {
  token: ID!
  user: User
}

type Query {
  users: [User]
  user(username: String!): User
  countdowns(username: String): [countdown]
  countdown(_id: ID!): Countdown
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  addCountdown(CountdownTitle: String!): Countdown
  addComment(countdownId: ID!, commentText: String!): Countdown
  addFriend(friendId: ID!): User
  
}

`;

// export the typeDefs
module.exports = typeDefs;