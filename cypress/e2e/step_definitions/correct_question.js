import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

When('the student leaves the answer empty for question {string}', (questionNumber) => {
    cy.get(`[data-cy="question-${questionNumber}-form"] input[type="radio"]`).should('not.be.checked');
});
  
Then('the student clicks on the Correct Answer button for question {string}', (questionNumber) => {
    // Hacer clic en el botón de ver respuesta
    cy.get(`[data-cy="question-${questionNumber}-correct-answer-button"]`).click();
});
