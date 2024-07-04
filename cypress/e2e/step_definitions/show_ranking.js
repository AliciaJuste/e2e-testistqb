import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";


When('the student is on the test section', () => {
    cy.url().should('include', '/test.html');
});

When('the student fill the test with the answers {string}', (selectedAnswers) => {
    if (selectedAnswers !== "") {
        const answers = selectedAnswers.split(',');
        answers.forEach((answer, index) => {
            const questionNumber = index + 1;
            cy.get('[data-cy="question-' + questionNumber + '-form"]').find('input').check(answer);
        });
    } else { //No answers selected
        for (let questionNumber = 1; questionNumber <= 10; questionNumber++) {
            cy.get(`[data-cy="question-${questionNumber}-form"] input[type=radio]`).should('not.be.checked');
        }
    }
});

Then('the student {string} clicks on the Ranking button', (numStudent) => {
    // Hacer clic en el botón de Ranking
    if (numStudent === "3") {
       cy.get('[data-cy="ranking-button"]').click();
    }
});

Then('the ranking list should be displayed with students sorted by score in descending order if the student {string} has finished their test:', (numStudent, dataTable) => {
    // Solo comprobar el ranking si es el tercer estudiante
    if (numStudent === "3") {
        // Asegurarse de que el localStorage está actualizado
        cy.window().then((win) => {
            const students = JSON.parse(win.localStorage.getItem('students') || '[]');
            expect(students.length).to.be.at.least(3); // Asegurarse de que hay al menos 3 estudiantes
        }).then(() => {
            dataTable.hashes().forEach((element, index) => {
                const ranking = element.ranking;
                const studentName = element.studentName;
                const studentScore = element.studentScore;
                cy.get(`[data-cy="ranking${index +1}"]`).should('have.text', ranking);
                cy.get(`[data-cy="student-name${index +1}"]`).should('have.text', studentName);
                cy.get(`[data-cy="student-score${index +1}"]`).should('have.text', studentScore);
            });
        });
    }
});