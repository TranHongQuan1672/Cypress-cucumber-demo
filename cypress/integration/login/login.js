import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";

Given('A user open the login page', () =>{
    cy.visit('https://www.saucedemo.com')
})
When('A user type in the username {string}', (username)=>{
    cy.get('#user-name').type(username)
})
And('A user enter the password {string}',(password)=>{
    cy.get('#password').type(password)
})
And('A user click Login button',()=>{
    cy.get('#login-button').click()
})
And('A user click on Menu button',()=>{
    cy.get('#react-burger-menu-btn').click()
})
And('A user click on Log out button',()=>{
    cy.get('#logout_sidebar_link').click()
})
Then('A user can logged in the web page',()=>{
    cy.url().should('contains','/inventory.html')
})

Then('A user will receiving failed message', ()=>{
    cy.get('h3').should('have.text','Epic sadface: Sorry, this user has been locked out.')
})

Then('A user will receiving wrong password message',()=>{
    cy.get('h3').should('have.text','Epic sadface: Username and password do not match any user in this service')
})

Then('A user can logged in a specific problem use web page', ()=>{
    cy.url().should('contains','/inventory.html')
})

Then('A user logged out of the we page and return to log in web page', ()=>{
    cy.url('https://www.saucedemo.com')
})