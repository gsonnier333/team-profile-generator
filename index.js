const fs = require("fs");
const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

var manager;
var employees = [];

function inputManager(){
    let questions = [
        {
            name: "name",
            message: "Team manager's name:"
        },
        {
            name: "id",
            message: "Team manager's employee ID:"
        },
        {
            name: "email",
            message: "Team manager's email address:"
        },
        {
            name: "office",
            message: "Team manager's office number:"
        }
    ]
    inquirer.prompt(questions).then(response => {
        manager = new Manager(response.name, response.id, response.email, response.office);
    })
}

inputManager();
