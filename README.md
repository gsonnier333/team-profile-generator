# Team Profile Generator

Recording of the program and class tests being run:
https://drive.google.com/file/d/1kHjTNXSfCTb3egIf6aiXOeY-yib95CqR/view

For this assignment, I was tasked with creating a command-line program that would allow a user to populate an html document with information about a team manager and their team members. The program can be run by typing "node index.js" into the command line. It prompts the user for information regarding the manager, then allows them to choose between "Engineer" and "Intern" for each subsequent team member (as well as specific personal information, like their name and email), ending only after they've selected the option "Finish adding to team". After the user is finished adding members, the program takes that information and formats it into an html document in which each team member is given a small card with their information on it. Email addresses can be clicked to open the user's default mailing app and create a new email addressed to the corresponding team member. GitHub usernames can also be clicked to go to the corresponding team member's GitHub page.

This assignment was excellent practice in writing tests using "jest", writing the logic for Promises in Javascript, and getting information from the command line using "inquirer". It was also helpful to get more practice using classes in Javascript, especially classes located in separate files from one another.
