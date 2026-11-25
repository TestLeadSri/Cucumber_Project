Feature: Empty Username and Password Validation

  Scenario: Login with empty username and password
    Given open the firefox browser
    And Navigate to the url
    When Enter the Username ""
    And Enter the Password ""
    And click on login
     Then Verify Alert Message 
    But Should remain on the login page


 