// const { expect } = require("chai");
// const request = require("supertest");
// const app = require("../app");

// const doctorToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiaWQiOjEsImZOYW1lIjoiSGFyc2hpdCIsImxOYW1lIjoiQ2hhdWJpc2EiLCJhZ2UiOjIyLCJnZW5kZXIiOiJtYWxlIiwicGhObyI6Ijc3MzcxMTA3NDAiLCJlTWFpbCI6ImhhcnNoaXRAZ21haWwuY29tIiwic2hpZnQiOiJtb3JuaW5nIiwid2FyZE5vIjo0fSwiaWF0IjoxNjY3MjgzODAzfQ.Lqq1gxS0XQXRUrnruqX7_8ZCU9Si6ZTKZF0foWuSM78"

// //request for the prescription (POST request for prescription)
// describe('Prescription.', () => {
//     it('Returns 201 created when request is successful.', () =>{
//         return request(app)
//         .post('/api/presciption')
//         .auth(doctorToken, { type: 'bearer' })
//         .send({
//             aptId : 1,
//             noOfPills : 10,
//             amt : 20,
//             freq : 2,
//             instructions : "Take this pill in the morning and evening."
//         })
//         .expect(201);
//     });

//     it('Returns 401 Unauthorized Access where the prescription was not found.', () => {
//         return request(app)
//         .post('/api/prescription')
//         .send({
//             aptId : 1,
//             noOfPills : 10,
//             amt : 20,
//             freq : 2,
//             instructions : "Take this pill in the morning and evening."
//         })
//         .expect(401)
//     });
// });