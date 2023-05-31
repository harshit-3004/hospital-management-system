CREATE TABLE appointment(
id int auto_increment,
doctorId int,
patientId int,
aptDate DATETIME,
description TEXT,
PRIMARY KEY (id),
FOREIGN KEY (doctorId) REFERENCES doctor(id),
FOREIGN KEY (patientId) REFERENCES patient(id)
);