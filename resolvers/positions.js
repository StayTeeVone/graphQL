const query = require('../DB/database');

async function getAllPositions(args){
    const sql = `
    SELECT * FROM positions
    `;
  
    try{
      const result = await query(sql);
      return result.rows;
    } catch(err){
      console.log(err);
      throw err;
    }
}

async function postPosition(args){
  const {
    id_positions, positions, bid
  } = args;
  
  const sql = `
  INSERT INTO positions VALUES ($1, $2, $3)
  `;
  
  const id = Number(id_positions);
  const params = [id, positions, bid];

  try{
    const result = await query(sql, params);
    const sql2 = `
      SELECT * FROM positions
      WHERE id_positions = ${id}
    `;
    const res = await query(sql2);
    return res.rows[0];
  } catch(err){
    console.log(err);
    throw err;
  }
}

async function deleteFromPosition(args){
  const {
    id_positions
  } = args;

  const sql = `
    DELETE FROM positions 
    WHERE id_positions = ${id_positions}
  `;

  try{
    const result = await query(sql);
    return `Positions with id ${id_positions} was deleted.`;
  } catch(err){
    console.log(err);
    throw err;
  }
}

async function upgradePosition(args){
  const {
    id_positions, positions, bid
  } = args;
  
  const sql = `
  UPDATE positions SET id_positions = $1, positions = $2, bid = $3
  WHERE id_positions = $1
  `;
  
  const id = Number(id_positions);
  const params = [id, positions, bid];

  try{
    const result = await query(sql, params);
    const sql2 = `
      SELECT * FROM positions
      WHERE id_positions = ${id}
    `;
    const res = await query(sql2);
    return res.rows[0];
  } catch(err){
    console.log(err);
    throw err;
  }
}

module.exports = {getAllPositions, postPosition, deleteFromPosition, upgradePosition}