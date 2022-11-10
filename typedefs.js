const typeDefs = `
  schema {
    query:Query
    mutation:Mutation
  }

"Type Query is a basic type"
  type Query {
    workers: [Worker]
    departament: [Departament]
    positions: [Position]
  }

  type Mutation {
    createPosition(positionInput: PositionInput!): Position
    deletePosition(id_positions: Int): String
    updatePosition(positionInput: PositionInput!): Position
  }

  input PositionInput{
    id_positions: ID!
    positions: String
    bid: Int
  }

  type Worker{
    id_workers: ID!
    fio: String
    phone: String
    birthday: String
    id_departament: Int
    id_positions: Int
  }

  type Departament{
    id_departament: ID!
    name_departament: String
  }

  type Position{
    id_positions: ID!
    positions: String
    bid: Int
  }
`;

module.exports = typeDefs;