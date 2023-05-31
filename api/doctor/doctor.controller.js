const { addDoctor, getDoctorById, getDoctorPatients, getDoctors, updateDoctor, deleteDoctor, getDoctorByPhNo,doctorSoftDelete } = require("./doctor.service");
const { hashSync, genSaltSync, compareSync  } = require("bcrypt");
const { sign, JsonWebTokenError } = require("jsonwebtoken");
const ck = require("ckey");

module.exports = {
    addDoctor: (req,res)=>{
        const body = req.body;
        const salt = genSaltSync(10);
        body.psswd = hashSync(body.psswd,salt);
        addDoctor(body,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(409).json({
                    success: 0,
                    message: "Doctor already exists."
                });
            }
            return res.status(201).json({
                success: 1,
                results : results,
                data: body
            });
        });
    },
    getDoctorById : (req,res) => {
        const id = req.id;
        getDoctorById(id,(error,results) =>{
            if(error){
                return res.status(401).json({
                    success : 0,
                    message : "Unauthorized access."
                })
            }
            if(results == ""){
                return res.status(400).json({
                    success : 0,
                    message : "Doctor doesn't exists."
                })
            }
            return res.status(200).json({
                success : 1,
                data : results
            });
        });
    },
    getDoctors: (req,res) => {
        getDoctors((err,results) => {
            if(err){
                console.log(err);
                return;
            }
            return res.status(200).json({
                success : 1,
                data : results
            });
        });
    },
    updateDoctor : (req,res) =>{
        const body = req.body;
        const salt = genSaltSync(10);
        body.psswd = hashSync(body.psswd,salt);
        const id = req.params.id;
        updateDoctor(body,id,(err,results) =>{
            if(err){
                console.log(err);
                return;
            }
            if(results == ""){
                return res.status(400).json({
                    success : 0,
                    message : "Doctor doesn't exists."
                })
            }
            return res.status(200).json({
                success : 1,
                message : "updated successfully",
                data : body
            });
        });
    },
    doctorSoftDelete : (req,res) => {
      const body = req.body;
      const id = req.params.id;
      doctorSoftDelete (body,id,(err,results) => {
        if(err){
            return res.status(401).json({
                success : 0,
                message : "Unauthorized access."
            })
        }
        return res.status(200).json({
            success : 1,
            message : "Doctor deleted successfully",
            fields : {
                doctorId : id,
                data : body
            }
        })
      })
    },

    deleteDoctor : (req,res) => {
        const id = req.id;
        deleteDoctor(id,(err,results) => {
            if(err){
                console.log(err);
                return;
            }
            if(results == ""){
                return res.status(400).json({
                    success : 0,
                    message : "Doctor doesn't exists."
                })
            }
            return res.status(200).json({
                success :1,
                message : "Doctor deleted successfully."
            });
        });
    },
    login: (req,res) => {
        const body = req.body;
        getDoctorByPhNo(body.phNo,(err,results) => {
            if(err) { 
                console.log(err);
            }
            if(results == ""){
                return res.status(400).json({
                    success : 0,
                    message : "Please enter correct phone no. or password."
                });
            }
            const result = compareSync(body.psswd,results.psswd);
            if(result){
                results.psswd = undefined;
                const jsontoken = sign({result : results.id}, ck.DOCTOR_SECRET);
                return res.status(200).json({
                    success : 1,
                    message : "login successful",
                    token : jsontoken
                });
            }
            // else{
            //     return res.status(401).json({
            //         success : 0,
            //         message : "Invalid phone number or password"
            //     });
            // }
        });
    },
    getDoctorPatients: (req,res) => {
        const id = req.id;
        getDoctorPatients(id,(error,results) =>{
            if(error){
                return res.status(500).json({
                    success : 0,
                    message : "Internal server Error."
                })
            }
            if(results == ""){
                return res.status(404).json({
                    success : 0,
                    message : "There are no patients."
                })
            }
            return res.status(200).json({
                success : 1,
                data : results
            });
        });
    }
};