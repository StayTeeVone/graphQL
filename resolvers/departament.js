const query = require('../DB/database');

async function getAllDepartament(args){
    const sql = `
    SELECT * FROM departament
    `;
  
    try{
      const result = await query(sql);
      return result.rows;
    } catch(err){
      console.log(err);
      throw err;
    }
}

module.exports = {getAllDepartament}