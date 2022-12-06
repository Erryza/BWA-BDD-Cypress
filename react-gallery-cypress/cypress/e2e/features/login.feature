Feature: Test Cases React Gallery Login page

    # Scenario: Do Login with null values
    #     Given I access the website ReactGallery Login page
    #     And I click on the login button
    #     Then I should be presented with the following message login failed

    # Scenario: Do Login with wrong values
    #     Given I access the website ReactGallery Login page
    #     When I enter a email wrong@react.test
    #     And I enter a password wrong
    #     And I click on the login button
    #     Then I should be presented with the following message login failed

    # Scenario: Do Login with correct values
    #     Given I access the website ReactGallery Login page
    #     When I enter a email user@react.test
    #     And I enter a password password
    #     And I click on the login button
    #     Then I should be presented with the following message login welcome

    Scenario Outline: Test Login via website React Gallery
        Given I access the website ReactGallery Login page
        When I enter a email "<email>"
        And I enter a password "<password>"
        And I click on the login button
        Then I should be presented with the following message "<message>"

        Examples:
            | email            | password | message      |
            | NULL             | NULL     | login failed |
            | NULL             | password | login failed |
            | user@react.test  | NULL     | login failed |
            | wrong@react.test | wrong    | login failed |
            | user@react.test  | password | welcome      |


