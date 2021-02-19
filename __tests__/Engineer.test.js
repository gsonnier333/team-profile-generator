const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create a Engineer object with a name, id, email, and github username", () => {
            const obj = new Engineer("Greg", 3, "gsonnier@comcast.net", "gsonnier3");
            
            expect(obj).toEqual({name: "Greg", id: 3, email: "gsonnier@comcast.net", github: "gsonnier3"});
        })
    });
    
    describe("getGithub", () => {
        it("should return the Engineer's github username", () => {
            const obj = new Engineer("Sophia", 9, "sophia@sophia.com", "sophia9");
         
            expect(obj.getGithub()).toEqual("sophia9");
        })
    });
    
    describe("getRole", () => {
        it("should return the role 'Engineer'", () => {
            const obj = new Engineer("Mark", 11, "mark@marked.com", "markymark11");
            
            expect(obj.getRole()).toEqual("Engineer");
        })
    })
});