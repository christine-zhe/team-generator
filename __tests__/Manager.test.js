const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Office Number Get", () => {
  const testNumber = 1;
  const managerTest = new Manager("Train", 1, "train@training.com", testNumber);
  expect(managerTest.getofficeNumber()).toBe(testNumber);
});

test("Return Proper Role should be manager", () => {
  const testRole = "Manager";
  const managerTest = new Manager("Train", 1, "training@train.com", 1);
  expect(managerTest.getRole()).toBe(testRole);
});

test("Getting Office Number function", () => {
  const testOffice = 1;
  const managerTest = new Manager("Manager", 1, "training@train.com", testOffice);
  expect(managerTest.getofficeNumber()).toBe(testOffice);
});