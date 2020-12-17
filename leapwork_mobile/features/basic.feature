Feature: Business rules

  In order to achieve my goals
  As a personal
  I want to be able to interact with a system

# Scenario: Chats Send Image
    # Given I test Chats send Image

  Scenario: Login
    Given I test login
    Then I create 1:1 Chat
    
    Then I test Chats send Image
    Then I upload files
    Then I upload Photo And Video
