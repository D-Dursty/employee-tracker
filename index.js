const inquirer = require('inquirer');
const mysql = require('mysql2');
const fs = require('fs');

const db = require('./db/connection');

function promptUser() {
    inquirer.prompt(
        {
            type: "list",
            name: "todo",
            message: "What would you like to do?",
            choices: ["View All Departments", "Add Department", "View All Employees", "Update Employee Role", "View All Roles", "Add Role", "Quit"]
        }
    ).then(answers => {
        if (answers.todo === "View All Departments") {
            // -- query the dept
            db.query('SELECT * FROM department', function (err, results) {
                // -- -- console.table the results
                console.table(results);
                // -- -- prompt the user for another command
                // -- -- ex promptUser(); 
                promptUser();
            })
        } else if (answers.todo === "View All Employees") {
            db.query('SELECT * FROM employee', function (err, results) {
                console.table(results);
                promptUser()
            })
        } else if (answers.todo === "View All Roles") {
            db.query('SELECT * FROM role', function (err, results) {
                console.table(results);
                promptUser()
            })
        }
        // if user chose view roles
        // -- query the role
        // -- -- console.table the results
        // -- -- prompt the user for another command
        // -- -- ex promptUser();


        // if the user didnt choose any other option
        // end the db which stops the app
        db.end();
    }
    )} promptUser();






