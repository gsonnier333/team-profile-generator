const fs = require("fs");
const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { finished } = require("stream");

var manager;
var employees = [];


function nextEmployee(){
    let role = {
        name: "role",
        message: "Next employee:",
        type: "list",
        choices: ["Engineer", "Intern", "Finish adding to team"]
    };
    
    inquirer.prompt(role).then(response => {
        switch(response.role){
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                generateHtml();
        }
    })
}

function addEngineer(){
    let questions = [
        {
            name: "name",
            message: "Engineer's name:"
        },
        {
            name: "id",
            message: "Engineer's employee ID:"
        },
        {
            name: "email",
            message: "Engineer's email address:"
        },
        {
            name: "github",
            message: "Engineer's github username:"
        }
    ]
    
    inquirer.prompt(questions).then(response => {
        employees.push(new Engineer(response.name, response.id, response.email, response.github));
    }).then(() => {
        nextEmployee();
    })
}

function addIntern(){
    let questions = [
        {
            name: "name",
            message: "Intern's name:"
        },
        {
            name: "id",
            message: "Intern's employee ID:"
        },
        {
            name: "email",
            message: "Intern's email address:"
        },
        {
            name: "school",
            message: "Intern's school:"
        }
    ]
    
    inquirer.prompt(questions).then(response => {
        employees.push(new Intern(response.name, response.id, response.email, response.school));
    }).then(() => {
        nextEmployee();
    })
}

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
    }).then(() => {
        nextEmployee();
    })
}

function generateHtml(){
    console.log("Html will be generated (TODO) using:");
    console.log(manager);
    console.log(employees);
}

inputManager();
