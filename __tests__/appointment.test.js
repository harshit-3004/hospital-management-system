// const { expect } = require("chai");
// const request = require("supertest");
// const app = require("../app");

// const patientToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiaWQiOjEsImZOYW1lIjoiQXJ2aW5kIiwibE5hbWUiOiJTaGFybWEiLCJhZ2UiOjI0LCJnZW5kZXIiOiJtYWxlIiwicGhObyI6IjgwMDAyODg0NjgifSwiaWF0IjoxNjY3MjkyMTM3fQ.duXOKtVJw7yeCZsWcTKOpSvcxe0NTnua8ZQHfQ9rbng"

// //request for the appointment registration(POST request for appointment)
// describe('Appointment Registration.', () => {
//     it('Returns 201 created when request is successful.', () =>{
//         return request(app)
//         .post('/api/appointment')
//         .auth(patientToken, { type: 'bearer' })
//         .send({
//             doctorId : 1,
//             patientId : 1,
//             aptDate : "2015-12-20 10:01:00.9",
//             description : "Suffering from malaria."
//         })
//         .expect(201);
//     });

//     it('Returns 401 Unauthorized Access where the appointment was not found.', () => {
//         return request(app)
//         .post('/api/appointment')
//         .send({
//             doctorId : 1,
//             patientId : 1,
//             aptDate : "2015-12-20 10:01:00.9",
//             description : "Suffering from malaria."
//         })
//         .expect(401)
//     });
// });




// // Test cases for delete Request of the appointment.
// describe('Delete appointment' ,() =>{
//     it('Returns 401 Unauthorized Access where the appointment was not found.', () => {
//         return request(app)
//         .delete('/api/appointment/1')
//         .expect(401)
//         .then((response) => {
//             expect({
//                 success : 1,
//                 message : "Access denied! Unauthorized user."
//             });
//         });
//     });

//     it('Returns 200 Ok where the appointment was deleted successfully.', () => {
//         return request(app)
//         .delete('/api/appointment/1')
//         .auth(patientToken, { type: 'bearer' })
//         .expect(200)
//         .then((response) => {
//             expect({
//                 success : 1,
//                 message : "Appointment deleted Successfully."
//             });
//         });
//     });
// });