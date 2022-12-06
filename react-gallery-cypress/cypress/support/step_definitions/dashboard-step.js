import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const folderPhotos = require("../../fixtures/photo.json");

Given("I access the website ReactGallery Dashboard page", () => {
  cy.visit("/dashboard");
});

When("I checking Found No Post for the First Time", () => {
  cy.contains("Found 0 photos");
});

And("I checking input image", () => {
  const image = cy.get("input[name='image']");
  image.should("be.visible");
  image.should("have.attr", "type", "url");
  image.should("have.attr", "required", "required");
  image.should("have.attr", "placeholder", "Image URL");
});

And("I checking input description", () => {
  const description = cy.get("input[name='desc']");
  description.should("be.visible");
  description.should("have.attr", "type", "text");
  description.should("have.attr", "required", "required");
  description.should("have.attr", "placeholder", "What's on your mind?");
});

And("I checking publish button", () => {
  const button = cy.get("button");
  button.should("be.visible");
  button.contains("Publish!");
  button.should("have.css", "background-color", "rgb(79, 70, 229)");
  button.should("have.css", "color", "rgb(255, 255, 255)");
});

Then("Checking complete", () => {});

Given("I access the website ReactGallery Dashboard page", () => {
  cy.visit("/dashboard");
});

When("I enter images, descriptions, and click the publish button", () => {
  folderPhotos.forEach(({ imageValue, descriptionValue }) => {
    const image = cy.get("input[name='image']");
    image.type(imageValue);

    const description = cy.get("input[name='desc']");
    description.type(descriptionValue);

    const button = cy.get("button");
    button.click();

    // Checking uploaded image is exist
    cy.get("img").should("have.attr", "src", imageValue);
    cy.contains(descriptionValue);
  });
});

Then("Result Found photos", () => {
  cy.contains(`Found ${folderPhotos.length} photos`);
});
