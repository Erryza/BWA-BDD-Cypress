// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (email, password) => {
  cy.clearCookies();
  cy.clearLocalStorage();

  const email_user = cy.get("input[name='email']");
  email_user.clear();
  email_user.type(email);

  const password_user = cy.get("input[name='password']");
  password_user.clear();
  password_user.type(password);
});

const folderPhotos = require("../fixtures/photo.json");

Cypress.Commands.add("upload_photo", () => {
  folderPhotos.forEach(({ imageValue, descriptionValue }) => {
    const image = cy.get("input[name='image']");
    image.type(imageValue);

    const description = cy.get("input[name='desc']");
    description.type(descriptionValue);

    const button = cy.get("button");
    button.click();

    cy.get("img").should("have.attr", "src", imageValue);
    cy.contains(descriptionValue);
  });

  cy.contains(`Found ${folderPhotos.length} photos`);
});
