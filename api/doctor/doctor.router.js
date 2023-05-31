const { addDoctor, getDoctorPatients, getDoctorById, updateDoctor, deleteDoctor, login, doctorSoftDelete} = require("./doctor.controller");
const router = require("express").Router();
const { checkDoctorToken } = require("../../auth/tokenValidation")

router.post("/", addDoctor);
router.get("/", checkDoctorToken, getDoctorById);
router.get("/patients", checkDoctorToken,getDoctorPatients);
router.patch("/:id",checkDoctorToken, updateDoctor);
router.patch("/:id/delete",checkDoctorToken,doctorSoftDelete);
router.delete("/:id",checkDoctorToken, deleteDoctor);
router.post("/login", login);
module.exports = router;