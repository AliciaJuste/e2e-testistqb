Feature: Correct question

Background:
    Given the student is on the ISTQB exam page
    When the student visits the test section

Scenario Outline: Correct a question answered
    And the student selects answer <selectedAnswer> for question <questionNumber>
    And the student clicks on the Correct Answer button for question <questionNumber>
    Then the student should see the message <expectedMessage> for question <questionNumber>

Examples:
| questionNumber | selectedAnswer | expectedMessage                                  |
| "1"            | "c"            | "The answer is correct! You have 2 points."      |
| "2"            | "b"            | "The answer is not correct. You have -1 points." |

Scenario: Correct a question with empty answer
    And the student leaves the answer empty for question "3"  
    And the student clicks on the Correct Answer button for question "3"
    Then the student should see the message "No answer selected. You have 0 points." for question "3"
