import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../ui/LoginPageUI";
import ResultPage from "../ui/ResultPageUI"

Given ('Change size off page', ()=>{
    cy.viewport(1280,800)
})

Given ('We visit VCPMC website to login page', ()=>{
    LoginPage.visit()
})
When("Change languages", ()=>{
    cy.get('.ant-select-selection-item').click()
    cy.contains('Tiếng Việt').click()
})
And("login with {string} and {string}", (username, password)=>{
    LoginPage.enter_username(username)
    LoginPage.enter_password(password)
    LoginPage.pressLogin()
})
Then('Assert login sucessful {string}', (noti) =>{
    ResultPage.expect(noti).tobeSuccessful()
})
And('Assert user {string}', (username)=>{
    LoginPage.assertUser(username)
})
Then('Assert login invalid {string}',(noti)=>{
    
    const popup = '.ant-message-custom-content'
    cy.get(popup, {timeout : 1000}).should('have.text',noti)
})