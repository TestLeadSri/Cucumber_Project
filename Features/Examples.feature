Feature: Verify HRM login

  Scenario Outline: Valid login test
    Given open the firefox browser
    And Navigate to the url
    launching browser"<username>"
    And Enter the Password "<password>"
    And click on login
    Then Verify Welcome Page
    And Click on logout


    Examples:
      | username | password |
      | srilatha | srilatha |

  Scenario Outline: Invalid login test
    Given open the firefox browser
    And Navigate to the url
    When Enter the Username "<username>"
    And Enter the Password "<password>"
    And click on login
    Then Verify Invalid Login

    Examples:
      | username  | password  |
      | sri#41 | srilatha1 |
      | 4589| #$& |
      | sr 89| 12 |