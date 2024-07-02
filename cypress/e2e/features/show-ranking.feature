Feature: Show ranking

Background:
    Given the student is on the ISTQB exam page
    When the student visits the test section

Scenario Outline: 3 students make the test and display ranking of students in descending order of score
    When the student <studentName> fill the test with the answers <selectedAnswers>
    And the student clicks on the Final Score button
    And the student clicks on the Ranking button
    Then the ranking list should be displayed with students sorted by score in descending order:
	| ranking | studentName       | studentScore |
	| 1       | Alba Alvarez      | 20           |
	| 2       | Berto Bonito      | 0            |
	| 3       | Carmen Corominas  | 0            |

Examples:
| studentName        | selectedAnswers       |                            
| "Alba Alvarez"     | "c,a,a,b,b,c,b,c,c,c" | 
| "Berto Bonito"     |                       | 
| "Carmen Corominas" | "a,b,b,a,a,a,a,a,a,a" | 

   

