describe("Dashboard Page Test Cases", () => {
  before("Do Login with correct values", () => {
    cy.visit("/");

    cy.fixture("user").then((user) => {
      const email_user = user.email;
      const password = user.password;

      cy.login(email_user, password);
    });

    const button = cy.get("button");
    button.click();

    cy.on("window:alert", (text) => {
      expect(text).to.contains("welcome");
    });

    cy.url().should("eq", "http://localhost:3000/dashboard");
  });

  it("Found No Post for the First Time", () => {
    cy.contains("Found 0 photos");
  });

  it("Contains Image url and Description input, and Publish button", () => {
    // Checking image
    const image = cy.get("input[name='image']");
    image.should("be.visible");
    image.should("have.attr", "type", "url");
    image.should("have.attr", "required", "required");
    image.should("have.attr", "placeholder", "Image URL");

    // Checking description
    const description = cy.get("input[name='desc']");
    description.should("be.visible");
    description.should("have.attr", "type", "text");
    description.should("have.attr", "required", "required");
    description.should("have.attr", "placeholder", "What's on your mind?");

    // Checking publish button
    const button = cy.get("button");
    button.should("be.visible");
    button.contains("Publish!");
    button.should("have.css", "background-color", "rgb(79, 70, 229)");
    button.should("have.css", "color", "rgb(255, 255, 255)");
  });

  it("Upload Some Photos", () => {
    cy.fixture("photo").then((photos) => {
      const image = photos.imageValue;
      const desc = photos.descriptionValue;

      cy.upload_photo(image, desc);
    });
  });
});
