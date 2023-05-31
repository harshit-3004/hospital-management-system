const { addAppointment, cancelAppointment, deleteAppointment } = require("./appointment.service");
const ck = require("ckey");

module.exports = {
    addAppointment: (req,res)=>{
        const body = req.body;
        addAppointment(body,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error."
                });
            }
            return res.status(201).json({
                success: 1,
                message : "Appointment confirmed.",
                results: results,
                data: body
            });
        });
    },
    cancelAppointment : (req,res) => {
        const body = req.body;
        const id = req.id;
        cancelAppointment (body,id,(err,results) => {
          if(err){
              console.log(err);
              return;
          }
          return res.status(200).json({
              success : 1,
              message : "Appointment deleted successfully",
              fields : {
                  appointmentId : id,
                  data : body
              }
          })
        })
      },
    deleteAppointment : (req,res) => {
        const id = req.params.id;
        deleteAppointment(id,(err,results) => {
            if(err){
                console.log(err);
                return;
            }
            return res.status(200).json({
                success :1,
                message : "Appointment deleted successfully."
            });
        });
    }
};