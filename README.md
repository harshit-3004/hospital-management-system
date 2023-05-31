# Steps to make the whole application: 

1. Make a folder in the code directory where we will write the backend logic for the Hospital management system.
2. Run the command to initialize the node application.
        npm init -y
        
        This command will initialize an empty node application for the directory.

        Make a file with the name app.js and edit the main section in the package.json file to "app.js".

3. Now install all the libraries which we will be requiring for the application to run for that run the following command.
        npm install -r requirements.txt

    In the package.json file edit the test field under the scripts object to "jest --watchAll" to run all the test cases.

4. Make a file named .env where we are required to store all our environment variables that we will require throughout the application or the data which we need to hide from being expose. That data is kept in the .env file.

5. Mention all the libraries which you are installing in the requirements.txt file.

6. Make the schema for the application and maintain the files for all the entities in the models folder.

7. Write all the logic for the apis in the api folder where for each entity separate folder is there.

8. Connect the application with the database and mention the connection code in the database.js file which is there inside the config folder.

9. Write all the test cases for all the apis under the __tests__ folder.

