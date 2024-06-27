import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  

  Given("the student is on the ISTQB exam page", () => {
    //Esta sentencia equivale a cy.visit("https://aliciajuste.github.io/istqb-online-test");
    //porque la url está definida en la variable baseUrl del fichero cypress-config.js
    cy.visit("/");
    
  });

  When("the student enters the name {string}", (name) => {
    cy.get('[data-cy="student-name"]').clear();
    cy.get('[data-cy="student-name"]').type(name);
  });

  When("press start button", () => {
    cy.get('[data-cy="register-button"]').click();
  });

  Then("the student should see the message {string}", (welcomeMessage) => {
    cy.get('[data-cy="welcome-message"]').should('have.text', welcomeMessage);
  });