
const {getAllWorkers, postWorker, deleteFromWorker, upgradeWorker} = require('./workers');
const {getAllDepartament, postDepartament, deleteFromDepartament, upgradeDepartament} = require('./departament');
const {getAllPositions, postPosition, deleteFromPosition, upgradePosition} = require('./positions');


const resolvers = {
    workers: (args) => {
      return getAllWorkers(args);
    },
    departament: (args) => {
      return getAllDepartament(args);
    },
    positions: (args) => {
      return getAllPositions(args);
    },
    createPosition: (args) => {
      const {
        positionInput
      } = args;
      return postPosition(positionInput);
    },
    deletePosition: (args) => {
      return deleteFromPosition(args);
    },
    updatePosition: (args) => {
      const {
        positionInput
      } = args;
      return upgradePosition(positionInput);
    },
    createDepartament: (args) => {
      const {
        departamentInput
      } = args;
      return postDepartament(departamentInput);
    },
    deleteDepartament: (args) => {
      return deleteFromDepartament(args);
    },
    updateDepartament: (args) => {
      const {
        departamentInput
      } = args;
      return upgradeDepartament(departamentInput);
    },
    createWorker: (args) => {
      const {
        workerInput
      } = args;
      return postWorker(workerInput);
    },
    deleteWorker: (args) => {
      return deleteFromWorker(args);
    }, 
    updateWorker: (args) => {
      const {
        workerInput
      } = args;
      return upgradeWorker(workerInput);
    }
};

module.exports = resolvers;