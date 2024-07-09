Feature: Show ranking

Scenario: 3 students make the test and display ranking of students in descending order of score
    # Student 1: Alba Alvarez
    Given the student is on the ISTQB exam page
    When the student enters the name "Alba Alvarez"
    And press start button
    And the student is on the test section
    And the student fill the test with the answers "c,a,a,b,b,c,b,c,c,c"
    And the student clicks on the Final Score button

    #Student 2: Berto Bonito
    Given the student is on the ISTQB exam page
    When the student enters the name "Berto Bonito"
    And press start button
    And the student is on the test section
    And the student fill the test with the answers ""
    And the student clicks on the Final Score button

    #Student 3: Carmen Corominas
    Given the student is on the ISTQB exam page
    When the student enters the name "Carmen Corominas"
    And press start button
    And the student is on the test section
    And the student fill the test with the answers "a,b,b,a,a,a,a,a,a,a"
    And the student clicks on the Final Score button

    #Verify Ranking
    And the student 3 clicks on the Ranking button
    Then the ranking list should be displayed with students sorted by score in descending order if the student 3 has finished their test:
	| ranking | studentName       | studentScore |
	| 1       | Alba Alvar        | 20           |
	| 2       | Berto Boni        | 0            |
	| 3       | Carmen Cor        | 0            |

