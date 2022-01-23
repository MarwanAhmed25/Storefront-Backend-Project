Storefront Backend Project

-Content 
    .Decription
        -file structure 
        -set up 
        -run project 
        -structure of request 

    .Technologies
    .Tools 
    .Resources 
    .Auther

.Description 

    Create a RESTful API to be accessible to the frontend developer. writing test, secured user information with encryption, and provide tokens for integration into the frontend.

    -How to run the project

    -set up
        install an ide for running node (recommended vs code) and browser (chrome)

        install node v16.13.2 and npm 8.1.2 and postgres for database

        install as Development Dependencies [npm i --save-dev package@version ex: npm i --save-dev typescript@4.5.4]
            "@types/express": "^4.17.13",
            "@types/express-validator": "^3.0.0",
            "@types/jasmine": "^3.10.3",
            "@types/node": "^17.0.8",
            "@types/pg": "^8.6.4",
            "@types/bcrypt": "^5.0.0",
            "@types/supertest": "^2.0.11",
            "@typescript-eslint/parser": "^5.10.0",
            "eslint": "^7.32.0",
            "eslint-config-prettier": "^8.3.0",
            "eslint-config-standard": "^16.0.3",
            "eslint-plugin-import": "^2.25.4",
            "eslint-plugin-node": "^11.1.0",
            "eslint-plugin-prettier": "^4.0.0",
            "eslint-plugin-promise": "^5.2.0",
            "jasmine": "^4.0.2",
            "jasmine-spec-reporter": "^7.0.0",
            "jasmine-ts": "^0.4.0",
            "prettier": "^2.5.1",
            "supertest": "^6.2.1",
            "ts-node": "^10.4.0",
            "typescript": "^4.5.4"

        install as Dependencies [npm i package@version ex: npm i - express@4.17.2]
            "express": "^4.17.2",
            "express-validator": "^6.14.0",
            "bcrypt": "^5.0.1",
            "dotenv": "^14.2.0",
            "jsonwebtoken": "^8.5.1"
            
        config scripts for (prettier, eslint, jasmine)

    -run the project

        create database = "store" and super user = "marwan" & password ="marwan" with postgres as in .env file or name as you want but change the name exist in the .env file after that run the migrations file with [db-migrate up]

        Database: 
                create user: create user marwan with password 'marwan';

                create database: create database store owner marwan;
                                 create database store_test owner marwan;
                
                grant all on database store to marwan;
                grant all on database store_test to marwan;

        if you don't have db-migrate install it [npm i db-migrate , npm i db-migrate db-migrate-pg]!!! 

        after doing the above open the terminal and run:
            1-npm run prettier --> improve and fix the error of the style of code
            2-npm run build --> build the code
            3-npm run test --> build and test the code
            4-node build or nodemon build or npm run start --> run the project

            5-npm run dev-server --> to run ts-watch
        
        you can run this script and it will run all the 4 scripts above:
            npm run dev

    
.Technologies 
    nodejs 
    typescript 
    express 
    jasmine
    postgres

.Tools 
    vs code 
    google chrome

.Resources 
    udacity 
    community slack and toturs 
    npmjs.com
    google

.Auther: Marwan Ahmed(udacity student)