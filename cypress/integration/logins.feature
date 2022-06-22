Feature: Login Feature

    Feature is require for user to login web page
    Scenario: Sucess login 
    Given A user open the login page
    When A user type in the username "standard_user"
    And A user enter the password "secret_sauce"
    And A user click Login button
    Then A user can logged in the web page

    Scenario: When locked user login 
    Given A user open the login page
    When A user type in the username "locked_out_user"
    And A user enter the password "secret_sauce"
    And A user click Login button
    Then A user will receiving failed message

    Scenario: Wrong password login 
    Given A user open the login page
    When A user type in the username "standard_user"
    And A user enter the password "secret_saucess"
    And A user click Login button
    Then A user will receiving wrong password message

    Scenario: When a problem user login 
    Given A user open the login page
    When A user type in the username "problem_user"
    And A user enter the password "secret_sauce"
    And A user click Login button
    Then A user can logged in a specific problem use web page   

    Scenario: Sucess Log out 
    Given A user open the login page
    When A user type in the username "standard_user"
    And A user enter the password "secret_sauce"
    And A user click Login button
    And A user can logged in the web page
    And A user click on Menu button
    And A user click on Log out button
    Then A user logged out of the we page and return to log in web page