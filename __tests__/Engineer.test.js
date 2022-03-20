const Engineer = require("../lib/Engineer");

test("GitHub Information", () => {
  const gitHubUserTest = "christine-zhe";
  const engineerTest = new Engineer("Christine", 1, "test@gmail.com", gitHubUserTest);
  expect(engineerTest.github).toBe(gitHubUserTest);
});

test("Getting Role Function", () => {
  const engineerRole = "Engineer";
  const engineerTest = new Engineer("Tester", 1, "test@gmail.com", "tester-gitHub");
  expect(engineerTest.getRole()).toBe(engineerRole);
});

test("Get Github Function", () => {
  const gitHubUserTest = "tester-gitHub";
  const engineerTest = new Engineer("Tester", 1, "test@gmail.com", gitHubUserTest);
  expect(engineerTest.getGithub()).toBe(gitHubUserTest);
});