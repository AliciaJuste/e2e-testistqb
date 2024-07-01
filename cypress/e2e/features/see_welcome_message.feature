Feature: Welcome the student

Background:
    Given the student is on the ISTQB exam page

Scenario: Enter a name with more than 10 characters
    When the student enters the name "Alicia Juste"
    And press start button
    Then the student should see the message "Hi Alicia Jus, welcome to the ISTQB online test, try your best!"

Scenario: Enter empty name
    When the student does not enter any name
    Then the student should see the error message "The user name cannot be empty and must be a maximum of 10 characters long"