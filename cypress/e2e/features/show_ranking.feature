Feature: Show ranking

Scenario Outline: 3 students make the test and display ranking of students in descending order of score
    Given the student is on the ISTQB exam page
    When the student enters the name <studentName>
    And press start button
    And the student is on the test section
    And the student fill the test with the answers <selectedAnswers>
    And the student clicks on the Final Score button
    And the student <numStudent> clicks on the Ranking button
    Then the ranking list should be displayed with students sorted by score in descending order if the student <numStudent> has finished their test:
	| ranking | studentName       | studentScore |
	| 1       | Alba Alvar        | 20           |
	| 2       | Berto Boni        | 0            |
	| 3       | Carmen Cor        | 0            |

Examples:
| numStudent | studentName        | selectedAnswers       |                            
| "1" | "Alba Alvarez"     | "c,a,a,b,b,c,b,c,c,c" | 
| "2" | "Berto Bonito"     | ""                    | 
| "3" | "Carmen Corominas" | "a,b,b,a,a,a,a,a,a,a" | 
