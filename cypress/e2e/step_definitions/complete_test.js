import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

When('the student answer questions:', (dataTable) => {

    dataTable.hashes().forEach(element => {
        if (selectedAnswer !== "") {
            cy.get('[data-cy="question-' + questionNumber + '-form"]').find('input').select(element.selectedAnswer);
        } else {
            cy.get('[data-cy="question-' + questionNumber + '-form"] input[type="radio"]').should('not.be.checked');
        }
    });

});

Then('the student clicks on the Final Score button', (questionNumber) => {
    // Hacer clic en el botón de Final Score
    cy.get('[data-cy="final-Score-Button"]').click();
});

//Then the final score displayed should be 7, calculated based on 2 points for each correct answer, -1 point for each incorrect answer, and 0 points for each unanswered question