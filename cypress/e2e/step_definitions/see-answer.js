import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

When('the student visits the test section', () => {
    cy.visit("/test.html");
    cy.url().should('include', '/test.html');
});

When('the student selects answer {string} for question {string}', (selectedAnswer, questionNumber) => {
    // Seleccionar la respuesta para la pregunta en los radio buttons
    if (selectedAnswer !== "") {
        cy.get('[data-cy="question-' + questionNumber + '-form"]').find('input').check(selectedAnswer);
    } else {
        cy.get('[data-cy="question-' + questionNumber + '-form"] input[type="radio"]').should('not.be.checked');
    }
});

Then('the student clicks on the See Answer button for question {string}', (questionNumber) => {
    // Hacer clic en el botón de ver respuesta
    //cy.get(`[data-cy="question-${questionNumber}-See-Answer-Button"]`).click();
    cy.get('[data-cy="question-'+questionNumber+'-see-answer-button"]').click();

});

Then('the student should see the message {string} for question {string}', (correctAnswerMessage, questionNumber) => {
    //cy.get(`[data-cy="response-Answer-${questionNumber}"]`).should('have.text', correctAnswerMessage);
    cy.get('[data-cy="response-answer-'+questionNumber+'"]').should('have.text', correctAnswerMessage);

});
