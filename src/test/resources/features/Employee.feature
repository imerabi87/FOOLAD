#Author: Abraham
Feature: US 121335 - As an admin, I should have the ability to add, modify and delete an employee.

  Background: 
    And I logged into OrangeHRM 
    And I clicked on PIM
    

  @smoke
  Scenario: add employee
    When I navigated to the Add Employee Page
    When I provide the first name "mark" , middle name "balooch" and last name "kamal" of the employee
    Then I successfully added an employee

  @Regression
  Scenario: edit employee
    And I navigated to the Employee List Page
    When I search for an added employee "mark"

    Then I navigated to the employee profile
    And I can edit Employee information

  @Regression
  Scenario: delete employee
    And I navigated to the Employee List Page
    When I search for an added employee "mark" to delete
    Then I should be able to delete that employee
 