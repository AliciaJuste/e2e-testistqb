import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";


When('the student is on the test section', () => {
    cy.url().should('include', '/test.html');
});

When('the student fill the test with the answers {string}', (selectedAnswers) => {
    // Reset all forms
    for (let i = 1; i <= 10; i++) {
        cy.get(`[data-cy="question-${i}-form"] button[type="reset"]`).click();
    }
    
    const answers = selectedAnswers.split(',');
    answers.forEach((answer, index) => {
        if (answer !== "") {
            cy.get(`[data-cy="question-${index + 1}-form"]`).find('input').check(answer);
        }
    });
});

Then('the last student clicks on the Ranking button', () => {
    // Hacer clic en el botón de Ranking
    cy.get('[data-cy="ranking-button"]').click();
});

Then('the ranking list should be displayed with students sorted by score in descending order:', (dataTable) => {
    dataTable.hashes().forEach((row, index) => {
        cy.get(`[data-cy="ranking${index +1}"]`).should('have.text', row.ranking);
        cy.get(`[data-cy="student-name${index +1}"]`).should('have.text', row.studentName);
        cy.get(`[data-cy="student-score${index +1}"]`).should('have.text', row.studentScore);
    });
});