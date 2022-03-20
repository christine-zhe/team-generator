const Intern = require("../lib/Intern");
// Gets Values for Intern 

//Tests to see if the school functions work
test("Can set school via constructor", () => {
  // Expecting School of UCLA
  const school = "UCLA";
  const internTest = new Intern("Intern Name", 1, "intern@intern.com", school);
  expect(internTest.school).toBe(school);
});

test("Get Role function to see if it works", () => {
  //Expecting Role
  const internRole = "Intern";
  const internTest = new Intern("Test Intern", 1, "test@test.com", "UCLA");
  expect(internTest.getRole()).toBe(internRole);
});

test("Get School function", () => {
  // Testing to see if get School functions works
  const school = "UCLA";
  const internTest = new Intern("Intern Test", 1, "test@test.com", school);
  expect(internTest.getSchool()).toBe(school);
});

