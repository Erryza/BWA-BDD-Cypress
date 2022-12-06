describe("Login Page Test Cases", () => {
  before("Visit Login Page", () => {
    cy.visit("/");
    cy.title().should("eq", "React Gallery");
    cy.contains("Hello Again!");
  });

  it("Contains Email and Password Input, and Login Button", () => {
    // Checking email
    const email = cy.get("input[name='email']");
    email.should("be.visible");
    email.should("have.attr", "type", "email");
    email.should("have.attr", "placeholder", "Email Address");

    // Checking password
    const password = cy.get("input[name='password']");
    password.should("be.visible");
    password.should("have.attr", "type", "password");
    password.should("have.attr", "placeholder", "Password");

    // Checking button
    const button = cy.get("button");
    button.should("be.visible");
    button.contains("Login");
    button.should("have.css", "background-color", "rgb(79, 70, 229)");
    button.should("have.css", "color", "rgb(255, 255, 255)");
  });

  it("Do Login with null values", () => {
    const button = cy.get("button");
    button.click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("login failed");
    });
  });

  it("Do Login with wrong values", () => {
    cy.fixture("user").then((user) => {
      const email_user = user.email_invalid;
      const password = user.password_invalid;

      cy.login(email_user, password);
    });

    const button = cy.get("button");
    button.click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("login failed");
    });
  });

  it("Do Login with correct values", () => {
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
});
