const query = require('../DB/database');

async function getAllWorkers(args){
    const sql = `
    SELECT * FROM workers
    `;
  
    try{
      const result = await query(sql);
      return result.rows;
    } catch(err){
      console.log(err);
      throw err;
    }
}

module.exports = {getAllWorkers}