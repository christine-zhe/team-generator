const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        //obtains github uesername
        this.github = github;
        //over rides role to 'engineer'
        this.role = "Engineer";
        this.getGithub = function() {
            return this.github;
        }
    }
};


module.exports = Engineer;