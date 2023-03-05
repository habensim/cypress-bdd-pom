Feature: Get Best Seller Product List

    As a valid user want to see best seller product report

    Scenario: Valid user want to see bestseller product
        Given I open login page
        When I fill username with "admin@yourstore.com"
        And I fill password with "admin" 
        And I click on submit login
        And I click on menu reports
        Then I scraping the data product