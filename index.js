// console.log("Welcome to team Generator!")
const inquirer = require('inquirer');
const fs = require("fs");
// Requiring all relevant files to be used
const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const generateHTML = require("./dist/generateHTML.js");

//Blank array to be added to teams
const teamResults = [];

//Start of prompts using Inquirer
const userPrompts = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter employee's name",
                name: "name"
            },
            {
                type: "input",
                message: "Enter email",
                name: "email"
            },
            {
                type: "input",
                message: "What's your ID?",
                name: "id"
            },
            {
                type: "list",
                message: "What'the role?",
                name: "role",
                choices: ["Manager", "Engineer", "Intern"]
            }
        ])

        .then(data => {

            switch (data.role) {
                case "Manager":
                    inquirer
                        .prompt([
                            {
                                type: "input",
                                message: "What's your office number?",
                                name: "officeNumber"
                            }
                        ])
                        .then(managerData => {
                            data.officeNumber = managerData.officeNumber;
                            const managerNew = new Manager(data.name, data.id, data.email, data.officeNumber);


                            teamResults.push(managerNew)

                            addEmployee();
                        })

                    break;

                case "Engineer":
                    inquirer
                        .prompt([
                            {
                                type: "input",
                                message: "Github username?",
                                name: "github"
                            }
                        ]).then(engineerData => {
                            data.github = engineerData.github;
                            const engineerNew = new Engineer(data.name, data.id, data.email, data.github);


                            teamResults.push(engineerNew)

                            addEmployee();
                        })

                    break;

                case "Intern":
                    inquirer
                        .prompt([
                            {
                                type: "input",
                                message: "School? ",
                                name: "school"
                            }
                        ]).then(internData => {
                            data.school = internData.school;
                            const internNew = new Intern(data.name, data.id, data.email, data.school);


                            teamResults.push(internNew)
                            addEmployee();
                        })

                    break;

            }


        });


}
//adding additional employees
const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another employee?',
            default: false
        }
    ])
        .then(addEmployee => {
            if (addEmployee.confirmAddEmployee) {
                return userPrompts();
            }
            else {
                return writeFile(generateHTML(teamResults));
            }

        })
        // .then(pageHTML => {
        //     return writeFile(pageHTML);

        // })
}
userPrompts()


const writeFile = teamResults => {
    fs.writeFile('./dist/index.html', teamResults, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Congratulations! It has been created. Go to the dist/index.html for the final results!")
        }
    })
}; 
