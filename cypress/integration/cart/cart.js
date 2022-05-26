import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";

Given('A user open the login page', () =>{
    cy.visit('/')
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
And('A user can logged in the web page',()=>{
    cy.url().should('contains','/inventory.html')
})
And('A user click Add to cart first item', ()=>{
    cy.get('#add-to-cart-sauce-labs-backpack').click()
})
And('A user click on Remove button',()=>{
    cy.get('#remove-sauce-labs-backpack').click()
})
And('A user click Add to cart second item', ()=>{
    cy.get('#add-to-cart-sauce-labs-bike-light').click()
})
And('A user click on Cart button', ()=>{
    cy.get('a[class="shopping_cart_link"]').click()
})

Then('A user will move to cart page with the item they choose', ()=>{
    cy.url().should('contains','/cart.html')

})

Then('A user will have empty cart', ()=>{
    cy.get('a[class="shopping_cart_link"]').eq(0)
})

Then('A user will 1 item left on the cart', ()=>{
    cy.get('span[class="shopping_cart_badge"]').should('have.text','1')
})

Then('A user will see if 2 item they are correct', () =>{
    cy.get('#item_4_title_link').should('have.text','Sauce Labs Backpack')
    cy.xpath('//div[contains(text(),"Sauce Labs Bike Light")]').should('have.text','Sauce Labs Bike Light')
})