

Feature: Orange HRM login

Background:

Given open the firefox browser
   Given Navigate to the url

  Scenario: Valid Login

  When Enter the Username "srilatha"
    And Enter the Password "srilatha"
    And click on login
    Then Verify Welcome Page
    And Click on logout
  
Scenario: Invalid Login

  When Enter the Username "srilatha1"
   When Enter the Password "srilatha1"
   And click on login
  Then Verify Invalid Login
   