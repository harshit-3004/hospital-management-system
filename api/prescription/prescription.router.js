const { addPrescription } = require("./prescription.controller");
const router = require("express").Router();
const { checkDoctorToken } = require("../../auth/tokenValidation")

router.post("/",checkDoctorToken, addPrescription)

module.exports = router;