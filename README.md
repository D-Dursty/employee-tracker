# Employee Tracker
An application using Inquirer, mySql, and Console.Table npm's to track and update Employee information(role, salary, department, manager).

## Installation
This application requires the use of MySql, console.table, and Inquirer npm packages. 

## Usage
Access the integrated terminal by right clicking on the 'index.js' root file. You will need to install you npm packages by running 
`npm i`
in your terminal command line. 
Log into your MySql account by running
`MySql -uroot -p`
enter prompted information then connect to your database files by connecting in this order:
`SOURCE db/schema.sql;`
`SOURCE db/seeds.sql;`
`SOURCE db/query.sql;`
Once connected, input the word 
`exit` into your CLI. 

Now input
`node index.js`
to access the Inquirer prompts. Follow the questions and commands to access, and update databases. 


## Links
Screen Castify: https://watch.screencastify.com/v/XsmvAZoDNw1Kn6cHcTEP
GitHub Repository:  https://github.com/D-Dursty/employee-tracker

## License
N/A

## Credits
Command-line application built by Devon Durst, November 2022, using referenced npm packages.