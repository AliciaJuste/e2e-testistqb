Feature: Welcome the student

Scenario: Enter a name with more than 10 characters

Given the student is on the ISTQB exam page
When the student enters the name "Alicia Juste"
And press start button
Then the student should see the message "Hi Alicia Jus, welcome to the ISTQB online test, try your best!"

Scenario: Enter empty name

Given the student is on the ISTQB exam page
When the student enters the name ""
And press start button
Then the student should see the error message "The name cannot be empty"