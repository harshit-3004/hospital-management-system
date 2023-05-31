const  { verify } = require("jsonwebtoken");
const ck = require("ckey");

module.exports ={
    checkPatientToken: (req, res, next) => {
        let token = req.get("authorization");
        if(token) {
            token = token.slice(7);
            verify(token, ck.PATIENT_SECRET, (err,decoded) => {
                if(err){
                    res.status(400).json({
                        success : 0,
                        message : "Invalid token."
                    });
                }
                else{
                    req.id = decoded.result;
                    console.log(req.id);
                    next();
                }
            });
        }
        else{
            res.status(401).json({
                success : 0,
                message : "Access denied! Unauthorized user."
            });
        }
    },
    checkDoctorToken: (req, res, next) =>{
        let token = req.get("authorization");
        if(token) {
            token = token.slice(7);
            verify(token, ck.DOCTOR_SECRET, (err,decoded) => {
                if(err){
                    res.status(400).json({
                        success : 0,
                        message : "Invalid token."
                    });
                }
                else{
                    req.id = decoded.result;
                    next();
                }
            });
        }
        else{
            res.status(401).json({
                success : 0,
                message : "Access denied! Unauthorized user."
            });
        }
    }
}