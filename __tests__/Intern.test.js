const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an Intern object with a name, id, email, and school", () => {
            const obj = new Intern("Greg", 3, "gsonnier@comcast.net", "DU");
            
            expect(obj).toEqual({name: "Greg", id: 3, email: "gsonnier@comcast.net", school: "DU"});
        })
    });
    
    describe("getSchool", () => {
        it("should return the Intern's school", () => {
            const obj = new Intern("Sophia", 9, "sophia@sophia.com", "Stanford");
         
            expect(obj.getSchool()).toEqual("Stanford");
        })
    });
    
    describe("getRole", () => {
        it("should return the role 'Intern'", () => {
            const obj = new Intern("Mark", 11, "mark@marked.com", "Alabama State");
            
            expect(obj.getRole()).toEqual("Intern");
        })
    })
});