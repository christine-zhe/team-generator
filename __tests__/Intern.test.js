const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const school = "UCLA";
  const internTest = new Intern("Intern Name", 1, "intern@intern.com", testValue);
  expect(internTest.school).toBe(school);
});

test("getRole() should return \"Intern\"", () => {
  const internRole = "Intern";
  const internTest = new Intern("Test Intern", 1, "test@test.com", "UCLA");
  expect(internTest.getRole()).toBe(internRole);
});

test("Can get school via getSchool()", () => {
  const school = "UCLA";
  const internTest = new Intern("Intern Test", 1, "test@test.com", school);
  expect(internTest.getSchool()).toBe(school);
});

