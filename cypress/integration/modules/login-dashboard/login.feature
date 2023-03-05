Feature: Login to Dashboard nopcommerce

    As a invalid user
    I cannot log into application
    As a valid user
    I Want to log in into application

    Scenario: Invalid login to dashboard
        Given I open login page
        When I fill username with "test@yourstore.com"
        And I fill password with "12345" 
        And I click on submit login
        And I want to wait 2000 miliseconds
        Then I should see error message

    Scenario: Valid login to dashboard
        Given I open login page
        When I fill username with "admin@yourstore.com"
        And I fill password with "admin" 
        And I click on submit login
        And I want to wait 2000 miliseconds
        Then I Should see "Dashboard"