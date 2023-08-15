const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    jobsApplied: [JobApplication]
  }

  type JobApplication {
    jobId: String
    dateApplied: String
    company: String
    jobPosition: String
    salary: Int
    url: String
    interview: Boolean
    interviewDate: String
    comments: String
    status: String
    reminder: Boolean
    reminderDate: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

 type Auth {
  token: String
  user: User
  }

  input InputJobApplication {
    jobId: String
    dateApplied: String
    company: String
    jobPosition: String
    salary: Int
    url: String
    interview: Boolean
    interviewDate: String
    comments: String
    status: String
    reminder: Boolean
    reminderDate: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth

    addUser(username: String!, email: String!, password: String!): Auth

    addJobApplication(InputJobApplication: InputJobApplication): User

    removeJobbApplication(jobId: String): User
  }
`;

module.exports = typeDefs;
