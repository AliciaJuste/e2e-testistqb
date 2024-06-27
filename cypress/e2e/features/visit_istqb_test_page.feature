Feature: Visit Istqb Test Page

    As a student, I want to visit istqb test page, so I can practice for any exam

Scenario: Visit istqb test page 
    Given the student is on the ISTQB exam page
    When the student enters the name "Alicia Juste"
    And press start button
    Then the student should see the message "Hi Alicia Jus, welcome to the ISTQB online test, try your best!"