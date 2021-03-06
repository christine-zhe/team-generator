class Employee {
    constructor(name, id, email, role) {
        
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role || "Employee";
        
        this.getName = function () {
            return this.name;
        };
        this.getId = function () {
            return this.id;
        };
        this.getEmail = function () {
            return this.email;
        };

        //will return 'Employee'
        this.getRole = function () {
            return this.role;
        };
        
    }
};


//Employees DATA
const employees = [];

let bob = new Employee("Christine", 1, "christinez@ucla.edu", "engineer");

module.exports = Employee;