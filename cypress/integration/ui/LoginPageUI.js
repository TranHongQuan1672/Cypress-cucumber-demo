import LoginResultPage from './ResultPageUI'
const txtUsername = '.label-username'
const txtPassword = '.ant-input'
const btnLogin = '.ant-btn'
const URL = 'https://vcpmc.dev-altamedia.com/#/'

class LoginPage{
    static visit(){
        cy.visit(URL)
    }

    static enter_username(username){
        cy.get(txtUsername).type(username)
    }

    static enter_password(password){
        cy.get(txtPassword).type(password)
    }

    static pressLogin(){
        cy.get(btnLogin).click()
        return new LoginResultPage()
    }

    static assertUser(username){
        cy.get('.identify__admin').click()
        cy.get('#formBasicInfor_email').contains('huu.diep@alta.com.vn')
    }
}
export default LoginPage