CREATE TABLE doctor (
id int auto_increment,
fName VARCHAR(255),
lName VARCHAR(255),
age int,
gender enum("male","female"),
phNo VARCHAR(15) UNIQUE NOT NULL,
eMail VARCHAR(50) UNIQUE NOT NULL,
psswd VARCHAR(200),
shift VARCHAR(20),
wardNo int,
PRIMARY KEY (id)
);
