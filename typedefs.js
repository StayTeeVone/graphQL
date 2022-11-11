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
    createDepartament(departamentInput: DepartamentInput!): Departament
    deleteDepartament(id_departament: Int): String
    updateDepartament(departamentInput: DepartamentInput!): Departament
    createWorker(workerInput: WorkerInput!): Worker
    deleteWorker(id_workers: Int): String
    updateWorker(workerInput: WorkerInput!): Worker
  }

  input PositionInput{
    id_positions: ID!
    positions: String
    bid: Int
  }

  input DepartamentInput{
    id_departament: ID!
    name_departament: String
  }

  input WorkerInput{
    id_workers: ID!
    fio: String
    phone: String
    birthday: String
    id_departament: Int
    id_positions: Int
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