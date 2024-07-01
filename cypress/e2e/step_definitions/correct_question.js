import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

When('the student no selects any answer for question {string}', (questionNumber) => {
    // Write code here that turns the phrase above into concrete actions
    cy.get('[data-cy="question-' + questionNumber + '-form"] input[type="radio"]').should('not.be.checked');
});
  
Then('the student clicks on the Correct Answer button for question {string}', (questionNumber) => {
    // Hacer clic en el botón de ver respuesta
    cy.get('[data-cy="question-' + questionNumber + '-correct-answer-button"]').click();
});
