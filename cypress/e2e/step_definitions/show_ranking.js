import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";


When('the student {string} fill the test with the answers {string}', (studentName, selectedAnswers) => {
    if (selectedAnswers) {
        const answers = selectedAnswers.split(',');
        answers.forEach((answer, index) => {
            const questionNumber = index + 1;
            cy.get('[data-cy="question-' + questionNumber + '-form"]').find('input').check(answer);
        });
    } else { //No answers selected
        for (let questionNumber = 1; questionNumber <= 10; questionNumber++) {
            cy.get('[data-cy="question-' + questionNumber + '-form"] input[type=radio"').should('not.be.checked');
        }
    }
    //cy.get('[data-cy="student-name"]').type(studentName);
});

Then('the student clicks on the Ranking button', () => {
    // Hacer clic en el botón de Ranking
    cy.get('[data-cy="ranking-button"]').click();
});

Then('the ranking list should be displayed with students sorted by score in descending order:', (dataTable) => {

    dataTable.hashes().forEach((element, index) => {
        const ranking = element.ranking;
        const studentName = element.studentName;
        const studentScore = element.studentScore;
        cy.get(`[data-cy="ranking${index +1}"]`).should('have.text', ranking);
        cy.get(`[data-cy="studentName${index +1}"]`).should('have.text', studentName);
        cy.get(`[data-cy="studentScore${index +1}"]`).should('have.text', studentScore);
     });
    
});

/*

When the student "Alba Alvarez" answer questions:
| questionNumber | selectedAnswer |
| 1              | c              |
| 2              | a              |
| 3              | a              |
| 4              | b              |
| 5              | b              |
| 6              | c              |
| 7              | b              |
| 8              | c              |
| 9              | c              |
| 10             | c              |
And the student "Berto Bonito" answer questions:
| questionNumber | selectedAnswer |
| 1              |                |
| 2              |                |
| 3              |                |
| 4              |                |
| 5              |                |
| 6              |                |
| 7              |                |
| 8              |                |
| 9              |                |
| 10             |                |
And the student "Carmen Corominas" answer questions:
| questionNumber | selectedAnswer |
| 1              | a              |
| 2              | b              |
| 3              | b              |
| 4              | a              |
| 5              | a              |
| 6              | a              |
| 7              | a              |
| 8              | a              |
| 9              | a              |
| 10             | a              | */