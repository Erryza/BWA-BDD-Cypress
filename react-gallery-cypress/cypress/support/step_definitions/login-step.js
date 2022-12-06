import {
  Before,
  Given,
  When,
  And,
  Then,
} from "cypress-cucumber-preprocessor/steps";

let stub;

Before(() => {
  stub = cy.stub();
});

Given("I access the website ReactGallery Login page", () => {
  cy.visit("/");
});

When("I enter a email {string}", (email) => {
  const email_user = cy.get("input[name='email']");
  email_user.clear();
  email === "NULL" ? (email = null) : email_user.type(email);
});

And("I enter a password {string}", (password) => {
  const password_user = cy.get("input[name='password']");
  password_user.clear();
  password === "NULL" ? (password = null) : password_user.type(password);
});

And("I click on the login button", () => {
  const button = cy.get("button");
  button.click();
  cy.on("window:alert", stub);
});

Then("I should be presented with the following message {string}", (message) => {
  expect(stub.getCall(0)).to.be.calledWith(message);
});
