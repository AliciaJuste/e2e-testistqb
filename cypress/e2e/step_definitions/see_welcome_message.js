import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  

  Given('the student is on the ISTQB exam page', () => {
    // This step executes before each scenario
    cy.visit("/");
  });

  When('the student enters the name {string}', (name) => {
    cy.get('[data-cy="student-name"]').clear();
    cy.get('[data-cy="student-name"]').type(name);
  });

  When('press start button', () => {
    cy.get('[data-cy="register-button"]').click();
  });

  Then('the student should see the message {string}', (welcomeMessage) => {
    cy.get('[data-cy="welcome-message"]').should('have.text', welcomeMessage);
  });

  When('the student does not enter any name', () => {
    cy.get('[data-cy="student-name"]').clear();
  })

  Then('the student should see the error message {string}', (errorMessage) => {
    cy.get('[data-cy="welcome-message-error"]').should('have.text', errorMessage);
  })

