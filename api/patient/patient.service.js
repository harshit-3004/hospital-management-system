const pool = require("../../config/database");

module.exports = {
    addPatient: (data,callBack) =>{
        pool.query(
            'INSERT INTO `patient`(fName,lName,age,gender,phNo,psswd) VALUES(?,?,?,?,?,?)',
            [
                data.fName,
                data.lName,
                data.age,
                data.gender,
                data.phNo,
                data.psswd
            ],
            (error, results, fields) =>{
                if(error){
                    return callBack(error)
                }
                return callBack(null,results)
            }
        );
    },
    getPatients: callBack=>{
        pool.query(
            'SELECT id, fName,lName,age,gender,phNo FROM `patient`',
            [],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        );

    },
    getPatientById: (id,callBack) =>{
        pool.query(
            'SELECT id, fName,lName,age,gender,phNo FROM `patient` WHERE id = ?',
            [id],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        );
    },
    updatePatient : (data,id,callBack) =>{
        pool.query(
            'UPDATE `patient` set fName = ?, lName = ?, age = ?, gender = ?, phNo = ?, psswd = ? where id = ?',
            [
                data.fName,
                data.lName,
                data.age,
                data.gender,
                data.phNo,
                data.psswd,
                id
                
            ],
            (error, results, fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },
    patientSoftDelete : (data,id,callBack) => {
        pool.query(
            'UPDATE patient set archived = ? where id = ?',
            [
                data.archived,
                id
            ],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },
    deletePatient : (id,callBack)=>{
        pool.query(
            'DELETE FROM `patient` where id = ?',
            [id],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    },
    getPatientByPhNo : (phNo, callBack) =>{
        pool.query (
            'SELECT * FROM `patient` WHERE phNo = ?',
            [phNo],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null,results[0])
            }
        )
    }
};