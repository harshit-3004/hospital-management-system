const { addPrescription } = require("./prescription.service");
const ck = require("ckey");

module.exports = {
    addPrescription: (req,res)=>{
        const body = req.body;
        addPrescription(body,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error."
                });
            }
            return res.status(201).json({
                success: 1,
                data: results
            });
        });
    }
};