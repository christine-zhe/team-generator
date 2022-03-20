const Employee = require("../lib/Employee");

test("Employee Name", () => {
  const employeeTest = new Employee('Christine');
  expect(employeeTest.name).toBe("Christine");
});

test("Employee Unique ID", () => {
  const testID = 1;
  const employeeTest = new Employee("Christine", testID);
  expect(employeeTest.id).toBe(testID);
});

test("Employee's email", () => {
  const testEmail = "christinez@ucla.edu";
  const employeeTest = new Employee("Christine", 1, testEmail);
  expect(employeeTest.email).toBe(testEmail);
});

test("Get Name function", () => {
  const testName = "Christine";
  const employeeTest = new Employee(testName);
  expect(employeeTest.getName()).toBe(testName);
});

test("Get ID function", () => {
  const testID = 1;
  const employeeTest = new Employee("Christine", testID);
  expect(employeeTest.getId()).toBe(testID);
});

test("Get Email function", () => {
  const testEmail= "testing@gmail.com";
  const employeeTest = new Employee("Testing", 1, testEmail);
  expect(employeeTest.getEmail()).toBe(testEmail);
});

test("Get Role function", () => {
  const testRole = "Employee";
  const employeeTest = new Employee("Christine", 1, "test@gmail.com");
  expect(employeeTest.getRole()).toBe(testRole);
});

