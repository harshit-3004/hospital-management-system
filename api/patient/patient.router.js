const {
  addPatient,
  getPatientById,
  getPatients,
  updatePatient,
  deletePatient,
  login,
  patientSoftDelete,
} = require("./patient.controller");
const router = require("express").Router();
const { checkPatientToken } = require("../../auth/tokenValidation");
const { checkDoctorToken } = require("../../auth/tokenValidation");

router.post("/", addPatient);
router.get("/", checkPatientToken, getPatientById);
router.patch("/:id", checkPatientToken, updatePatient);
router.patch("/:id/delete", checkPatientToken, patientSoftDelete);
router.delete("/:id", checkPatientToken, deletePatient);
router.post("/login", login);
module.exports = router;
