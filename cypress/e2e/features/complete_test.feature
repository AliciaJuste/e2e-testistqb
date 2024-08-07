Feature: Complete test and see final score

Scenario: Show final score when the student finishes the test with mixed correct and incorrect answers
    Given the student is on the ISTQB exam page
    And the student visits the test section
    When the student answer questions:
    | questionNumber | selectedAnswer |
    | 1              | c              |
    | 2              | a              |
    | 3              | a              |
    | 4              | b              |
    | 5              | b              |
    | 6              | a              |
    | 7              | a              |
    | 8              | a              |
    | 9              |                |
    | 10             |                |
    And the student clicks on the Final Score button
    Then the final score displayed should be 7