const { describe, it, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create a generic Employee object with a name, id, and email", () => {
            const obj = new Employee("Greg", 3, "gsonnier@comcast.net");
            
            expect(obj).toEqual({name: "Greg", id: 3, email: "gsonnier@comcast.net"});
        })
    });
    
    describe("getName", () => {
        it("should return the employee's name", () => {
            const obj = new Employee("Greg", 3, "gsonnier@comcast.net");
            
            expect(obj.getName()).toEqual("Greg");
        })
    });
    
    describe("getId", () => {
        it("should return the employee's id", () => {
            const obj = new Employee("Nate", 5, "nate@nate.com");
            
            expect(obj.getId()).toEqual(5);
        })
    });
    
    describe("getEmail", () => {
        it("should return the employee's email", () => {
            const obj = new Employee("Regina", 6, "regina@regina.com");
            
            expect(obj.getEmail()).toEqual("regina@regina.com");
        })
    })
    
    describe("getRole", () => {
        it("should return the role 'employee'", () => {
            const obj = new Employee("Carol", 10, "carol@hr.com");
            
            expect(obj.getRole()).toEqual("Employee");
        })
    })
});