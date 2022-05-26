Feature: Cart Feature

    This Feature allow users to add and remove item from thier cart 
    Scenario: Add first 2 item on cart
    Given A user open the login page
    When A user type in the username "standard_user"
    And A user enter the password "secret_sauce"
    And A user click Login button
    And A user can logged in the web page   
    And A user click Add to cart first item
    And A user click Add to cart second item
    And A user click on Cart button
    Then A user will move to cart page with the item they choose

    Scenario: Add 1 item on cart and remove it
    Given A user open the login page
    When A user type in the username "standard_user"
    And A user enter the password "secret_sauce"
    And A user click Login button
    And A user can logged in the web page   
    And A user click Add to cart first item
    And A user click on Remove button
    Then A user will have empty cart 
    
    Scenario: Add 2 item on cart and remove 1 item
    Given A user open the login page
    When A user type in the username "standard_user"
    And A user enter the password "secret_sauce"
    And A user click Login button
    And A user can logged in the web page   
    And A user click Add to cart first item
    And A user click Add to cart second item
    And A user click on Remove button
    Then A user will 1 item left on the cart

    Scenario: Add 2 item on cart and check if if have 2 correct item
    Given A user open the login page
    When A user type in the username "standard_user"
    And A user enter the password "secret_sauce"
    And A user click Login button
    And A user can logged in the web page   
    And A user click Add to cart first item
    And A user click Add to cart second item
    And A user click on Cart button
    Then A user will see if 2 item they are correct