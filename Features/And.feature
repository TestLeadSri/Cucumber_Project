Feature: Orange HRM login

Scenario: Valid Login
    Given open the firefox browser
    And Navigate to the url
     When  Enter the Username "sri"
    And Enter the Password "sri"
    And click on login
    Then Verify Welcome Page
    And Click on logout