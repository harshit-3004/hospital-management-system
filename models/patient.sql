CREATE TABLE patient(
id int auto_increment,
fName VARCHAR(255),
lName VARCHAR(255),
age int,
gender enum('male','female'),
phNo VARCHAR(15) UNIQUE NOT NULL,
psswd VARCHAR(200),
PRIMARY KEY (id)
);