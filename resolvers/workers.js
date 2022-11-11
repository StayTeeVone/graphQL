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

async function postWorker(args){
  const {
    id_workers, fio, phone, birthday, id_departament, id_positions
  } = args;
  
  const sql = `
  INSERT INTO workers VALUES ($1, $2, $3, $4, $5, $6)
  `;
  
  const id = Number(id_workers);
  const params = [id, fio, phone, birthday, id_departament, id_positions];

  try{
    const result = await query(sql, params);
    const sql2 = `
      SELECT * FROM workers
      WHERE id_workers = ${id}
    `;
    const res = await query(sql2);
    return res.rows[0];
  } catch(err){
    console.log(err);
    throw err;
  }
}

async function deleteFromWorker(args){
  const {
    id_workers
  } = args;

  const sql = `
    DELETE FROM workers 
    WHERE id_workers = ${id_workers}
  `;

  try{
    const result = await query(sql);
    return `Worker with id ${id_workers} was deleted.`;
  } catch(err){
    console.log(err);
    throw err;
  }
}

async function upgradeWorker(args){
  const {
    id_workers, fio, phone, birthday, id_departament, id_positions
  } = args;
  
  const sql = `
  UPDATE workers SET id_workers = $1, fio = $2, phone = $3, birthday = $4, id_departament = $5, id_positions = $6
  WHERE id_workers = $1
  `;
  
  const id = Number(id_workers);
  const params = [id, fio, phone, birthday, id_departament, id_positions];

  try{
    const result = await query(sql, params);
    const sql2 = `
      SELECT * FROM workers
      WHERE id_workers = ${id}
    `;
    const res = await query(sql2);
    return res.rows[0];
  } catch(err){
    console.log(err);
    throw err;
  }
}

module.exports = {getAllWorkers, postWorker, deleteFromWorker, upgradeWorker}