import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../../login-dashboard/login/loginPage'
import bestSellerPage from './bestsellerPage'

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

Then('I click on menu reports', () => {
    bestSellerPage.liReport()
})

Then('I scraping the data product', () => {
    bestSellerPage.scrapTable()
})