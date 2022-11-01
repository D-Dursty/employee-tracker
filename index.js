const inquirer = require('inquirer');
const mysql = require('mysql2');
const fs = require('fs');

const db = require('./db/connection');


// inquirer.prompt([
//     {
//         type:"list",
//         name:"todo",
//         message:"What would you like to do?",
//         choices:["Add Department","Update Employee Role","View All Roles","Add Role","View All Departments","Add Department","View All Employees","Quit"]
//     }
// ]).then(answers => {
//     console.table(answers);
// })