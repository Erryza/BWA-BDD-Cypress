Feature: Test Cases React Gallery Dashboard Page

    Scenario: Checking contains image url, description input, and publish button
        Given I access the website ReactGallery Dashboard page
        When I checking Found No Post for the First Time
        And I checking input image
        And I checking input description
        And I checking publish button
        Then Checking complete


    Scenario: Share your images
        Given I access the website ReactGallery Dashboard page
        When I enter images, descriptions, and click the publish button
        Then Result Found photos