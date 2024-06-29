Feature: See answer

Background:
    Given the student is on the ISTQB exam page

Scenario: Select only 1 answer and clicks on the see answer button

When the student visits the test section
And the student selects the answer "a" for the question "1"
And the student clicks on the See answer button for question "1"
Then the student should see the message "The correct answer is option c" for the question "1"