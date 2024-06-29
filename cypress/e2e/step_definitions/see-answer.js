import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";


Given('the student is on the ISTQB exam page', () => {
    // This step executes before each scenario
    cy.visit("/");
});

When('the student visits the test section', () => {
    cy.visit("/test.html");
    cy.url().should('include', '/test.html');
});

When('the student selects the answer {string} for the question {string}', (answerSelected, questionNumber) => {
    // Seleccionar la respuesta para la pregunta
    cy.get(`[data-cy="question-${questionNumber}-form"] [value="${answerSelected}"]`).click();
});

Then('the student clicks on the See answer button for question {string}', (questionNumber) => {
    // Hacer clic en el botón de ver respuesta
    cy.get(`[data-cy="question-${questionNumber}-See-Answer-Button"]`).click();
});

Then('the student should see the message {string} for the question {string}', (correctAnswerMessage, questionNumber) => {
    cy.get(`[data-cy="response-Answer-${questionNumber}"]`).should('have.text', correctAnswerMessage);
});
