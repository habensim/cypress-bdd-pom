import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'

Given('I open login page', () => {
    LoginPage.visit()
})

When('I fill username with {string}', email => {
    LoginPage.fillEmail(email)
})

And('I fill password with {string}', password => {
    LoginPage.fillPassword(password)
})

And('I click on submit login', () => {
    LoginPage.submit()
})

Then('I Should see {string}', dashboard => {
    cy.contains('h1', dashboard )
})

Then('I should see error message', () => {
    LoginPage.shouldShowErrorMessage()
})

