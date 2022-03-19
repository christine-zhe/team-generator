const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        // overrides employee role to manager
        this.role = "Manager";
        this.getofficeNumber = function () {
            return this.officeNumber;
        };
    }
};

module.exports = Manager;