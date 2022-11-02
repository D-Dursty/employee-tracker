const inquirer = require('inquirer');
const mysql = require('mysql2');
const fs = require('fs');

const db = require('./db/connection');

function promptUser(){
    inquirer.prompt(
        {
            type:"list",
            name:"todo",
            message:"What would you like to do?",
            choices:["View All Departments","Add Department","View All Employees","Update Employee Role","View All Roles","Add Role","Quit"]
        }
    ).then(answers => {
        // do whatever i want with it
        console.log(answers); // sanity check
    
        // if user chose view depts
        if (answers.todo === "View All Departments") {
            // -- query the dept
            db.query('SELECT * FROM department', function (err, results){
                // -- -- console.table the results
                console.table(results);
                // -- -- prompt the user for another command
                // -- -- ex promptUser(); 
                promptUser();
            });
        };
        // if user chose view rols
        // -- query the role
        // -- -- console.table the results
        // -- -- prompt the user for another command
        // -- -- ex promptUser();
        // if user chose view employes 
        // -- query the emps
        // -- -- console.table the results
        // -- -- prompt the user for another command
        // -- -- ex promptUser();
        // ... 
    
        // if the user didnt choose any other option
        // end the db which stops the app
        db.end();
    })
}
promptUser();






