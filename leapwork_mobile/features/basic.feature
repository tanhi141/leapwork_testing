Feature: Business rules

  In order to achieve my goals
  As a personal
  I want to be able to interact with a system

# Scenario: Chats Send Image
    # Given I test Chats send Image

  Scenario: Login
    Given I test login
    When I create 1:1 Chat
    Then I upload files
    And  I upload Photo And Video
    And  I upload image by Camera

