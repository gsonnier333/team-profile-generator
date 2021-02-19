const fs = require("fs");
const inquirer = require("inquirer");




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
        console.log(response);
    })
}

inputManager();