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

function managerHtml(){
    let html = 
`
            <div
                class="card shadow float-start"
                style="width: 18rem; margin: 10px"
            >
                <div class="card-body bg-primary text-white">
                    <h5 class="card-title">${manager.getName()}</h5>
                    <p class="card-text">☕ ${manager.getRole()}</p>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush border">
                        <li class="list-group-item">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class="list-group-item">
                            Office number: ${manager.getOfficeNumber()}
                        </li>
                    </ul>
                </div>
            </div>
`;
    return html;
}

function employeeHtml(){
    let html = "";
    for(let i = 0; i < employees.length; i++){
        if(employees[i].getRole() === "Engineer"){ //start Engineer html
            html += 
`
            <div
                class="card shadow float-start"
                style="width: 18rem; margin: 10px"
            >
                <div class="card-body bg-primary text-white">
                    <h5 class="card-title">${employees[i].getName()}</h5>
                    <p class="card-text">👓 ${employees[i].getRole()}</p>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush border">
                        <li class="list-group-item">ID: ${employees[i].getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${employees[i].getEmail()}">${employees[i].getEmail()}</a></li>
                        <li class="list-group-item">
                            GitHub: <a href="https://github.com/${employees[i].getGithub()}">${employees[i].getGithub()}</a>
                        </li>
                    </ul>
                </div>
            </div>
`;
        } //end Engineer html
        else if(employees[i].getRole() === "Intern"){ //start Intern html
            html += 
`
            <div
                class="card shadow float-start"
                style="width: 18rem; margin: 10px"
            >
                <div class="card-body bg-primary text-white">
                    <h5 class="card-title">${employees[i].getName()}</h5>
                    <p class="card-text">📚 ${employees[i].getRole()}</p>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush border">
                        <li class="list-group-item">ID: ${employees[i].getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${employees[i].getEmail()}">${employees[i].getEmail()}</a></li>
                        <li class="list-group-item">
                            School: ${employees[i].getSchool()}
                        </li>
                    </ul>
                </div>
            </div>
`;            
        } //end Intern html
        else{ //if somehow neither Intern nor Engineer, meaning something went wrong
            html +=
`<h1>Something went wrong! Employee role not recognized!</h1>`;
        }
    }
    
    return html;
}

function generateHtml(){
    let html = 
`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Profile Generator</title>
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
            crossorigin="anonymous"
        />
    </head>
    <body>
        <h1
            class="position-relative start-50 translate-middle-x p-5 bg-danger w-100 text-center text-white"
        >
            My Team
        </h1>
        <div class="container position-relative">
            ${managerHtml()}
            ${employeeHtml()}
        </div>
    </body>
</html>
`;
    
    fs.writeFile("./dist/index.html", html, err => {
        if(err){
            console.log(err);
            return err;
        }
        else{
            console.log("index.html file successfully generated in dist/ directory!")
        }
    })
}

inputManager();
