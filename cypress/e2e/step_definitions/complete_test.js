import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

When('the student answer questions:', (dataTable) => {

    dataTable.hashes().forEach(element => {
        const questionNumber = element.questionNumber;
        const selectedAnswer = element.selectedAnswer;
        if (selectedAnswer !== "") {
            cy.get('[data-cy="question-' + questionNumber + '-form"]').find('input').check(selectedAnswer);
        } else {
            cy.get('[data-cy="question-' + questionNumber + '-form"] input[type="radio"]').should('not.be.checked');
        }
    });

});

Then('the student clicks on the Final Score button', () => {
    // Hacer clic en el botón de Final Score
    cy.get('[data-cy="final-score-button"]').click();
});

Then('the final score displayed should be {int}', (expectedScore) => {
    cy.get('[data-cy="response-final-score"]'). should('have.text', 'Your final score is ' + expectedScore);
});

