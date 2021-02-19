const { describe, it, expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create a Manager object with a name, id, email, and office number", () => {
            const obj = new Manager("Greg", 3, "gsonnier@comcast.net", 103);
            
            expect(obj).toEqual({name: "Greg", id: 3, email: "gsonnier@comcast.net", officeNumber: 103});
        })
    });
    
    describe("getOfficeNumber", () => {
        it("should return the manager's office number", () => {
            const obj = new Manager("Sophia", 9, "sophia@sophia.com", 104);
         
            expect(obj.getOfficeNumber()).toEqual(104);
        })
    });
    
    describe("getRole", () => {
        it("should return the role 'manager'", () => {
            const obj = new Manager("Mark", 11, "mark@marked.com", 150);
            
            expect(obj.getRole()).toEqual("Manager");
        })
    })
});