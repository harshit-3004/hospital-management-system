const pool = require("../../config/database");
const patientController = require("../patient/patient.controller");

module.exports = {
    addDoctor: (data, callBack) => {
        pool.query(
            'INSERT INTO `doctor`(fName,lName,age,gender,phNo,eMail,psswd,shift,wardNo,specialization) VALUES(?,?,?,?,?,?,?,?,?,?)',
            [
                data.fName,
                data.lName,
                data.age,
                data.gender,
                data.phNo,
                data.eMail,
                data.psswd,
                data.shift,
                data.wardNo,
                data.specialization
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
    getDoctors: callBack => {
        pool.query(
            'SELECT id, fName, lName, age, gender, phNo, eMail, shift, wardNo, archived specialization FROM `doctor`',
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );

    },
    getDoctorById: (id, callBack) => {
        pool.query(
            'SELECT id, fName, lName, age, gender, phNo, eMail, shift, wardNo, specialization, archived FROM `doctor` WHERE id = ?',
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updateDoctor: (data, id, callBack) => {
        pool.query(
            'UPDATE `doctor` set fName = ?, lName = ?, age = ?, gender = ?, phNo = ?, eMail = ?, psswd = ?, shift = ?, wardNo = ?, specialization = ? where id = ?',
            [
                data.fName,
                data.lName,
                data.age,
                data.gender,
                data.phNo,
                data.eMail,
                data.psswd,
                data.shift,
                data.wardNo,
                data.specialization,
                id

            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    doctorSoftDelete: (data, id, callBack) => {
        pool.query(
            'UPDATE doctor set archived = ? where id = ?',
            [
                data.archived,
                id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    deleteDoctor: (id, callBack) => {
        pool.query(
            'DELETE FROM `doctor` where id = ?',
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getDoctorByPhNo: (phNo, callBack) => {
        pool.query(
            'SELECT * FROM `doctor` WHERE phNo = ?',
            [phNo],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results[0])
            }
        )
    },
    getDoctorPatients: (id, callBack) => {
        pool.query(
            'SELECT patient.fName , patient.lName, patient.age, patient.gender, patient.phNo, appointment.description FROM patient INNER JOIN appointment ON patient.id = appointment.patientId WHERE appointment.doctorId = ?;',
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results)
            }
        )

    }
};