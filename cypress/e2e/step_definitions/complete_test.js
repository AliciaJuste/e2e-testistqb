import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

When('the student answer questions:', (dataTable) => {

    dataTable.hashes().forEach(element => {
        const questionNumber = element.questionNumber;
        const selectedAnswer = element.selectedAnswer;
        // Resetear el formulario de la pregunta actual
        cy.get(`[data-cy="question-${questionNumber}-form"] button[type="reset"]`).click();
        // Si la pregunta seleccionada no está vacia
        if (selectedAnswer !== "") {
            cy.get(`[data-cy="question-${questionNumber}-form"]`).find('input').check(selectedAnswer);        
        }
    });

});

Then('the student clicks on the Final Score button', () => {
    // Hacer clic en el botón de Final Score
    cy.get('[data-cy="final-score-button"]').click();
});

Then('the final score displayed should be {int}', (totalScore) => {
    cy.get('[data-cy="response-final-score"]'). should('have.text', `The final score obtained is ${totalScore} points`);
});

