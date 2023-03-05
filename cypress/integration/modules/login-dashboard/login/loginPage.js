const URL = 'https://admin-demo.nopcommerce.com/login'
const EMAIL_INPUT = '#Email'
const PASSWORD_INPUT = '#Password'
const SUBMIT_BUTTON = 'button'
const ERROR_MESSAGE = '.message-error'


class LoginPage {
    static visit(){
        cy.visit(URL)
    }
    static fillEmail(email){
        cy.get(EMAIL_INPUT).click().clear().type(email)
    }
    static fillPassword(password){
        cy.get(PASSWORD_INPUT).click().clear().type(password)
    }
    static submit(){
        cy.intercept('POST', '*').as('submit')
        cy.get(SUBMIT_BUTTON).click();
    }
    static shouldShowErrorMessage(){
        cy.get(ERROR_MESSAGE).contains('Login was unsuccessful. Please correct the errors and try again.')
    }
    
}

export default LoginPage