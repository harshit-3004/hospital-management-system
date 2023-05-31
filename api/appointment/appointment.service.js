const pool = require("../../config/database");

module.exports = {
    addAppointment: (data,callBack) =>{
        pool.query(
            'INSERT INTO `appointment`(doctorId, patientId, aptDate, description) VALUES(?,?,?,?)',
            [
                data.doctorId,
                data.patientId,
                data.aptDate,
                data.description
            ],
            (error, results, fields) =>{
                if(error){
                    return callBack(error)
                }
                return callBack(null,results)
            }
        );
    },
    cancelAppointment : (data,id,callBack) => {
        pool.query(
            'UPDATE appointment set archived = ? where id = ?',
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
    deleteAppointment : (id,callBack)=>{
        pool.query(
            'DELETE FROM `appointment` where id = ?',
            [id],
            (error,results,fields) => {
                if(error){
                    return callBack(error);
                }
                return callBack(null,results);
            }
        )
    }
};