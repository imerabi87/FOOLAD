#Author: Abraham
Feature: US 121337 - EPIC STORY--As an admin, I should have the ability to add Entitlements to
  all Default employees. 
  
  Note: One employee should have at least One unique leave type. Should have the ability to assign leave
  to default employee. Should be able to find default employee in Leave List.

  Background: 
    Given I logged into OrangeHRM
    When I click Leave Module

  @Regression
  Scenario: Scenarios one
    And click add Entitlements
    And Add all default employees to "FMLA US" leave type
    And I Enter "50" Entitlement
    Then I Confirm that all default employees have new Entitlements added for FMLA US

  @Regression
  Scenario: Scenario two
    And click add Entitlements
    And Add one default employees "stev" to Paternity US leave type besides
    And I Enter "50" Entitlement
    Then I Confirm that all default employees have new Entitlements added for Paternity US

   @Regression
  Scenario: Scenario three
    And click Assign Leave
    And I enter any one of the default employee names "rob"
    And I select "FMLA US"
    Then Balance of 50 should be present for employee
    And I select From Date "Mar" and "2018" and "27"
     And I select To Date "May" and "2018" and "10" it should not exceed morethan fifty days.
    Then I should see that the leave balance has changed based on how many days that was taken
    
    
    
    
    
