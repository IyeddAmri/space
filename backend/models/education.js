const connection = require('../database/index.js');

const getAll = (callback) => {
    const query = 'SELECT * FROM education';
    connection.query(query, (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
}

const getOne = (id, callback) => {
    const query = 'SELECT * FROM education WHERE id=?';
    connection.query(query, [id], (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        if (result.length === 0) {
          callback(null, null); 
        } else {
          callback(null, result);
        }
      }
    });
  };
  

const create = (eduData, callback) => {
    const { imageUrl,description } = eduData;
    const query = 'INSERT INTO education SET ?';

    connection.query(query, eduData, (err, result) => {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
};

const remove = (eduName, callback) => {
    const query = 'DELETE FROM education WHERE id=?';
    connection.query(query, [eduName], (err) => {
        if (err) {
            callback(err);
        } else {
            callback(null);
        }
    });
}

const update=(eduId,eduData,callback)=>{
    const {imageUrl,description}=eduData
    const query= 'UPDATE  news SET  imageUrl=?,description=?  WHERE id= ? '
    connection.query(query,[imageUrl,description,eduId],(err,result)=>{
        if(err){
            callback(err,null)
        }else{
            callback(null,result)
        }
    })
}


module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove,
    
};