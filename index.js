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
            choices: [
                {name:"View All Departments", 
                value:"view_departments"}, 
                {name:"Add Department",
                value:"add_department"}, 
                {name:"View All Employees", 
                value:"view_employees"}, 
                {name:"Update Employee Role",
                value:"update_role"}, 
                {name:"View All Roles",
                value:"view_role"}, 
                {name:"Add Role",
                value:"add_role"}, 
                {name:"Quit",
                value:"quit"}]
        }
    ).then(answers => {
        if (answers.todo === "view_departments") {
            // -- query the dept
            db.query('SELECT * FROM department', function (err, results) {
                // -- -- console.table the results
                console.table(results);
                // -- -- prompt the user for another command
                // -- -- ex promptUser(); 
                promptUser();
            })
        } else if (answers.todo === 'add_department') {
            inquirer.prompt(addDeptPrompt).then((answers) => {
                newDepartment(answers);
                promptUser();
            })
            
        } else if (answers.todo === "view_employees") {
            db.query('SELECT * FROM employee', function (err, results) {
                console.table(results);
                promptUser()
            })
        } else if (answers.todo === 'update_role') {
            console.log('i need to update an employees role here');
            promptUser()
        } else if (answers.todo === "view_role") {
            db.query('SELECT * FROM role', function (err, results) {
                console.table(results);
                promptUser()
            })
        } else if (answers.todo === 'add_role') {
                addRole(answers);   
        } else {
            db.end();
        }
         
        //  else if (answers.todo === "add_department") {
        //     db.query('SELECT * FROM department', )
        // }
        // if user chose view roles
        // -- query the role
        // -- -- console.table the results
        // -- -- prompt the user for another command
        // -- -- ex promptUser();


        // if the user didnt choose any other option
        // end the db which stops the app
        
    }
    )} 

    const addDeptPrompt = [{
        type:'input',
        message: 'What is your new department name?',
        name:'new_name'
    }]

    function newDepartment(answers) {
        db.query('INSERT INTO department SET ?', {
            name: answers.new_name
        }, function (err, results){
            console.table(results);
        })
    }


    function addRole() {
        db.query("SELECT * FROM department", function (err, results) {
            let choicesARR = results.map((department) => department.id)
            const addNewRole = [
                {
                    type:'input',
                    message:'What is the title of the new role you would like to enter?',
                    name:"new_role_input"
                },
                {
                    type:'input',
                    message:'What is the salary for this role?',
                    name:'new_role_salary'
                },
                {   type:'input',
                    message:'What is the corresponding department?',
                    name:'new_role_dept',
                    choices: choicesARR
                }];
            inquirer.prompt(addNewRole).then((answers) => {
                console.log(answers);
                db.query('INSERT INTO role SET ?', 
                {
                    title: answers.new_role_input, 
                    salary: answers.new_role_salary,
                    department_id: answers.new_role_dept
                }, 
                function (err, results) {
                    if (err) {
                        console.log(err)
                    }
                    promptUser() 
                });
            });
        });
    };

promptUser();



