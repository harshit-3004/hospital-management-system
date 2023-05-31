// const { expect } = require("chai");
// const request = require("supertest");
// const app = require("../app");

// const patientToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiaWQiOjEsImZOYW1lIjoiQXJ2aW5kIiwibE5hbWUiOiJTaGFybWEiLCJhZ2UiOjI0LCJnZW5kZXIiOiJtYWxlIiwicGhObyI6IjgwMDAyODg0NjgifSwiaWF0IjoxNjY3MjkyMTM3fQ.duXOKtVJw7yeCZsWcTKOpSvcxe0NTnua8ZQHfQ9rbng"

// //request for the patient registration(POST request for patient)
// describe('Patient Registration.', () => {
//     it('Returns 201 created when signup request is successful.', () =>{
//         return request(app)
//         .post('/api/patients')
//         .send({
//             fName : "Arvind",
//             lName : "Sharma",
//             age : 24,
//             gender : "male",
//             phNo : "8000288468",
//             psswd : "arvind"
//         })
//         .expect(201);
//     });

//     it('Returns 409 conflict as user already exists', () => {
//         return request(app)
//         .post('/api/patients')
//         .send({
//             fName : "Arvind",
//             lName : "Sharma",
//             age : 24,
//             gender : "male",
//             phNo : "8000288468",
//             psswd : "arvind"
//         })
//         .expect(409)
//         .then((response) => {
//             expect({
//                 success : 0,
//                 message : "Patient already exists."
//             });
//         });
//     });
// });


// // test cases for patient login (post request for login.)
// describe("patient Login", () => {
//     it('Returns 200 on successful login.', () => {
//         return request(app)
//         .post('/api/patients/login')
//         .send({
//             phNo : "8000288468",
//             psswd : "arvind"
//         })
//         .expect(200)
//         .then((response) => {
//             expect({
//                 success : 1,
//                 message : "Login Successful.",
//                 token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiaWQiOjgsImZOYW1lIjoiVGFudSIsImxOYW1lIjoiU2hhcm1hMiIsImVNYWlsIjoidGFudUBnbWFpbC5jb20iLCJwaE5vIjoiODg4Nzc3MzMzMiJ9LCJpYXQiOjE2NjYwODg0MTF9.BuSKU6rmD7GM_yyPvF-zqivi5W9TuoftSB_vwdBR4w4"
//             });
//         });
//     });

//     it('Returns 400 for entering incomplete login details. ', () => {
//         return request(app)
//         .post('/api/patients/login')
//         .send({
//             psswd : "arvind"
//         })
//         .expect(400)
//         .then((response) => {
//             expect({
//                 success : 0,
//                 message : "Please enter correct phone no. or password."
//             });
//         });
//     });

//     it('Returns 400 for entering phone number which is not present. ', () => {
//         return request(app)
//         .post('/api/patients/login')
//         .send({
//             phNo : "8883332221",
//             psswd : "harshit"
//         })
//         .expect(400)
//         .then((response) => {
//             expect({
//                 success : 0,
//                 message : "Invalid phone number or password."
//             });
//         });
//     });
// });

// // test cases for getting patients(get request for accessing all patients and also get patient by id.)
// describe("Get patients.", () => {
//     it('Returns 200 Ok for getting all the patients.', () => {
//         return request(app)
//         .get('/api/patients')
//         .auth(patientToken, { type: 'bearer' })
//         .expect(200)
//         .then((response) => {
//             expect({
//                 "success": 1,
//                 "data": [
//                     {
//                         "id": 1,
//                         "fName": "Arvind",
//                         "lName": "Sharma",
//                         "age": 24,
//                         "gender": "male",
//                         "phNo": "8000288468",
//                         "psswd": "$2b$10$xBc0uAZTOPxWkkI0ZMIngeocNTTehL1/QE0gNa1y4pAWKvFNNBNhy"
//                     }
//                 ]
//             });
//         });
//     });

//     it('Returns 200 Ok for getting a user with the help of its id.', () => {
//         return request(app)
//         .get('/api/patients/1')
//         .auth(patientToken, { type: 'bearer' })
//         .expect(200)
//         .then((response) => {
//             expect({
//                 success : 1,
//                 data : [
//                     {
//                         "id": 1,
//                         "fName": "Arvind",
//                         "lName": "Sharma",
//                         "age": 24,
//                         "gender": "male",
//                         "phNo": "8000288468",
//                         "psswd": "$2b$10$xBc0uAZTOPxWkkI0ZMIngeocNTTehL1/QE0gNa1y4pAWKvFNNBNhy"
//                     }
//                 ]
//             });
//         });
//     });

//     it('Returns  Not Found where the patient doesnt exists.', () => {
//         return request(app)
//         .get('/api/patients/47')
//         .auth(patientToken, { type: 'bearer' })
//         .expect(200)
//         .then((response) => {
//             expect({
//                 success : 0,
//                 message : "The patient doesn't exists."
//             });
//         });
//     });
// });

// // Test cases for patch request of patient entity.
// describe('update patient.', () => {
//     it('Returns 401 unauthorized access when the update is successful.', () => {
//         return request(app)
//         .patch('/api/patients/1')
//         .send({
//             fName : "Arvind",
//             lName : "Sharma",
//             age : 24,
//             gender : "male",
//             phNo : "8000288468",
//             psswd : "arvind"
//         })
//         .expect(401)
//         .then((response) => {
//             expect({
//                 success : 1,
//                 message : "Access denied! Unauthorized user."
//             });
//         });
//     });

//     it('Returns 200 ok when the patient is updated successfully.', () => {
//         return request(app)
//         .patch('/api/patients/1')
//         jest.setTimeout(30000)
//         .auth(patientToken, { type: 'bearer' })
//         .send({
//             fName : "Harshit",
//             psswd : "chaubisa"
//         })
//         .expect(200)
//         .then((response) => {
//             expect({
//                 success : 1,
//                 message : "updated successfully."
//             });
//         });
//     });
// });

// // Test cases for delete Request of the patient.
// describe('Delete patient' ,() =>{
//     it('Returns 401 Unauthorized Access where the patient was not found.', () => {
//         return request(app)
//         .delete('/api/patients/1')
//         .expect(401)
//         .then((response) => {
//             expect({
//                 success : 1,
//                 message : "Access denied! Unauthorized user."
//             });
//         });
//     });

//     it('Returns 200 Ok where the patient was deleted successfully.', () => {
//         return request(app)
//         .delete('/api/patients/1')
//         .auth(patientToken, { type: 'bearer' })
//         .expect(200)
//         .then((response) => {
//             expect({
//                 success : 1,
//                 message : "patient deleted Successfully."
//             });
//         });
//     });
// });