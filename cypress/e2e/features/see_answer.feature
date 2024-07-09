Feature: See answer

Scenario: Select only 1 answer and clicks on the See Answer button
    Given the student is on the ISTQB exam page
    When the student visits the test section
    And the student clicks on the See Answer button for question "1"
    Then the student should see the message "The correct answer is option c" for question "1"