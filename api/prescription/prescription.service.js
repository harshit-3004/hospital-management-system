const pool = require("../../config/database");

module.exports = {
    addPrescription: (data,callBack) =>{
        pool.query(
            'INSERT INTO `prescription`(aptId, noOfPills, amt, freq, instructions) VALUES(?,?,?,?,?)',
            [
                data.aptId,
                data.noOfPills,
                data.amt,
                data.freq,
                data.instructions
            ],
            (error, results, fields) =>{
                if(error){
                    return callBack(error)
                }
                return callBack(null,results)
            }
        );
    }
};