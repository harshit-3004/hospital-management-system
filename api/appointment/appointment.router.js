const { addAppointment, cancelAppointment,deleteAppointment } = require("./appointment.controller");
const router = require("express").Router();
const { checkPatientToken } = require("../../auth/tokenValidation")

router.post("/", checkPatientToken, addAppointment);
router.patch("/:id/delete",checkPatientToken, cancelAppointment);
router.delete("/:id",checkPatientToken,deleteAppointment);

module.exports = router;