Feature: Alumni Manager
  As a developer
  I want to manage alumni data correctly
  So that the application displays accurate profiles

  Scenario: Loading alumni data successfully
    Given the alumni API returns a list of 2 alumni
    When I load the alumni data
    Then I should have 2 alumni in the manager
    And the first alumnus first name should be "Juan"

  Scenario: Retrieving an alumnus by ID
    Given I have loaded the alumni data with id 1 and first name "Juan"
    When I retrieve the alumnus with ID 1
    Then I should get an alumnus with first name "Juan"
