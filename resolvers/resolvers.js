
const {getAllWorkers} = require('./workers');
const {getAllDepartament} = require('./departament');
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
      console.log(positionInput);
      return upgradePosition(positionInput);
    }

};

module.exports = resolvers;