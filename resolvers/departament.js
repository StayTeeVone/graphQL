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

async function postDepartament(args){
  const {
    id_departament, name_departament
  } = args;
  
  const sql = `
  INSERT INTO departament VALUES ($1, $2)
  `;
  
  const id = Number(id_departament);
  const params = [id, name_departament];

  try{
    const result = await query(sql, params);
    const sql2 = `
      SELECT * FROM departament
      WHERE id_departament = ${id}
    `;
    const res = await query(sql2);
    return res.rows[0];
  } catch(err){
    console.log(err);
    throw err;
  }
}

async function deleteFromDepartament(args){
  const {
    id_departament
  } = args;

  const sql = `
    DELETE FROM departament 
    WHERE id_departament = ${id_departament}
  `;

  try{
    const result = await query(sql);
    return `Departament with id ${id_departament} was deleted.`;
  } catch(err){
    console.log(err);
    throw err;
  }
}

async function upgradeDepartament(args){
  const {
    id_departament, name_departament
  } = args;
  
  const sql = `
  UPDATE departament SET id_departament = $1, name_departament = $2
  WHERE id_departament = $1
  `;
  
  const id = Number(id_departament);
  const params = [id, name_departament];

  try{
    const result = await query(sql, params);
    const sql2 = `
      SELECT * FROM departament
      WHERE id_departament = ${id}
    `;
    const res = await query(sql2);
    return res.rows[0];
  } catch(err){
    console.log(err);
    throw err;
  }
}

module.exports = {getAllDepartament, postDepartament, deleteFromDepartament, upgradeDepartament}