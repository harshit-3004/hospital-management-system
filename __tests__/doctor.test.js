const { expect } = require("chai");
const request = require("supertest");
const app = require("../app");

const doctorToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiaWQiOjEsImZOYW1lIjoiSGFyc2hpdCIsImxOYW1lIjoiQ2hhdWJpc2EiLCJhZ2UiOjIyLCJnZW5kZXIiOiJtYWxlIiwicGhObyI6Ijc3MzcxMTA3NDAiLCJlTWFpbCI6ImhhcnNoaXRAZ21haWwuY29tIiwic2hpZnQiOiJtb3JuaW5nIiwid2FyZE5vIjo0fSwiaWF0IjoxNjY3MjgzODAzfQ.Lqq1gxS0XQXRUrnruqX7_8ZCU9Si6ZTKZF0foWuSM78"

//request for the doctor registration(POST request for doctor)
describe('Doctor Registration.', () => {
    it('Returns 201 created when signup request is successful.', () =>{
        return request(app)
        .post('/api/doctors')
        .send({
            fName : "Harshit",
            lName : "Chaubisa",
            age : 22,
            gender : "male",
            phNo : "7737110740",
            eMail : "harshit@gmail.com",
            psswd : "harshit",
            shift : "morning",
            wardNo : 4,
            specialization : "Malaria"
        })
        .expect(201);
    });

    it('Returns 409 conflict as user already exists', () => {
        return request(app)
        .post('/api/doctors')
        .send({
            fName : "Harshit",
            lName : "Chaubisa",
            age : 22,
            gender : "male",
            phNo : "7737110740",
            eMail : "harshit@gmail.com",
            psswd : "harshit",
            shift : "morning",
            wardNo : 4,
            specialization : "Malaria"
        })
        .expect(409)
        .then((response) => {
            expect({
                success : 0,
                message : "Doctor already exists."
            });
        });
    });
});


// test cases for doctor login (post request for login.)
describe("Doctor Login", () => {
    it('Returns 200 on successful login.', () => {
        return request(app)
        .post('/api/doctors/login')
        .send({
            phNo : "7737110740",
            psswd : "harshit"
        })
        .expect(200)
        .then((response) => {
            expect({
                success : 1,
                message : "Login Successful.",
                token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiaWQiOjgsImZOYW1lIjoiVGFudSIsImxOYW1lIjoiU2hhcm1hMiIsImVNYWlsIjoidGFudUBnbWFpbC5jb20iLCJwaE5vIjoiODg4Nzc3MzMzMiJ9LCJpYXQiOjE2NjYwODg0MTF9.BuSKU6rmD7GM_yyPvF-zqivi5W9TuoftSB_vwdBR4w4"
            });
        });
    });

    it('Returns 400 for entering incomplete login details. ', () => {
        return request(app)
        .post('/api/doctors/login')
        .send({
            psswd : "harshit"
        })
        .expect(400)
        .then((response) => {
            expect({
                success : 0,
                message : "Please enter correct phone no. or password."
            });
        });
    });

    it('Returns 400 for entering phone number which is not present. ', () => {
        return request(app)
        .post('/api/doctors/login')
        .send({
            phNo : "8883332221",
            psswd : "harshit"
        })
        .expect(400)
        .then((response) => {
            expect({
                success : 0,
                message : "Invalid phone number or password."
            });
        });
    });
});

// test cases for getting doctors(get request for accessing all doctors and also get doctor by id.)
describe("Get doctors.", () => {
    it('Returns 200 Ok for getting all the doctors.', () => {
        return request(app)
        .get('/api/doctors')
        .auth(doctorToken, { type: 'bearer' })
        .expect(200)
        .then((response) => {
            expect({
                "success": 1,
                "data": [
                    {
                        id: 1,
                        fName: "Harshit",
                        lName: "Chaubisa",
                        age: 22,
                        gender: "male",
                        phNo: "7737110740",
                        eMail: "harshit@gmail.com",
                        psswd: "$2b$10$PdGiA7OEj5B.iauVRVEMV.wI7.oL1DpWKQuTjXuMLYUqgi3VufcTG",
                        shift: "morning",
                        wardNo: 4,
                        specialization : "Malaria"
                    }
                ]
            });
        });
    });

    it('Returns 200 Ok for getting a user with the help of its id.', () => {
        return request(app)
        .get('/api/doctors/1')
        .auth(doctorToken, { type: 'bearer' })
        .expect(404)
        .then((response) => {
            expect({
                success : 1,
                data : [
                    {
                        id: 1,
                        fName: "Harshit",
                        lName: "Chaubisa",
                        age: 22,
                        gender: "male",
                        phNo: "7737110740",
                        eMail: "harshit@gmail.com",
                        psswd: "$2b$10$PdGiA7OEj5B.iauVRVEMV.wI7.oL1DpWKQuTjXuMLYUqgi3VufcTG",
                        shift: "morning",
                        wardNo: 4,
                        specialization : "Malaria"
                    }
                ]
            });
        });
    });

    it('Returns  Not Found where the doctor doesnt exists.', () => {
        return request(app)
        .get('/api/doctors/47')
        .auth(doctorToken, { type: 'bearer' })
        .expect(404)
        .then((response) => {
            expect({
                success : 0,
                message : "The user doesn't exists."
            });
        });
    });
});

// Test cases for patch request of doctor entity.
describe('update doctor.', () => {
    it('Returns 401 unauthorized access when the update is successful.', () => {
        return request(app)
        .patch('/api/doctors/1')
        .send({
            fName: "Harshit",
            lName: "Paliwal",
            age: 22,
            gender: "male",
            phNo: "7737110740",
            eMail: "harshit33@gmail.com",
            psswd: "paliwal",
            shift: "morning",
            wardNo: 4,
            specialization : "Malaria"
        })
        .expect(401)
        .then((response) => {
            expect({
                success : 1,
                message : "Access denied! Unauthorized user."
            });
        });
    });

    it('Returns 200 ok when the doctor is updated successfully.', () => {
        return request(app)
        .patch('/api/doctors/1')
        jest.setTimeout(30000)
        .auth(doctorToken, { type: 'bearer' })
        .send({
            fName : "Arvind",
            psswd : "chaubisa"
        })
        .expect(200)
        .then((response) => {
            expect({
                success : 1,
                message : "updated successfully."
            });
        });
    });
});

// Test cases for delete Request of the doctor.
describe('Delete doctor' ,() =>{
    it('Returns 401 Unauthorized Access where the doctor was not found.', () => {
        return request(app)
        .delete('/api/doctors/1')
        .expect(401)
        .then((response) => {
            expect({
                success : 1,
                message : "Access denied! Unauthorized user."
            });
        });
    });

    it('Returns 200 Ok where the doctor was deleted successfully.', () => {
        return request(app)
        .delete('/api/doctors/1')
        .auth(doctorToken, { type: 'bearer' })
        .expect(200)
        .then((response) => {
            expect({
                success : 1,
                message : "Doctor deleted Successfully."
            });
        });
    });
});