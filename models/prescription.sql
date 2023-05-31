CREATE TABLE prescription (
id int auto_increment,
aptId int,
noOfPills int,
amt int,
freq int,
instructions text,
PRIMARY KEY (id),
FOREIGN KEY (aptId) REFERENCES appointment(id)
);