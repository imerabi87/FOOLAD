$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Employee.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Abraham"
    }
  ],
  "line": 2,
  "name": "US 121335 - As an admin, I should have the ability to add, modify and delete an employee.",
  "description": "",
  "id": "us-121335---as-an-admin,-i-should-have-the-ability-to-add,-modify-and-delete-an-employee.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4935933305,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I logged into OrangeHRM",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I clicked on PIM",
  "keyword": "And "
});
formatter.match({
  "location": "employeePageSteps.i_logged_into_OrangeHRM()"
});
formatter.result({
  "duration": 1246940110,
  "status": "passed"
});
formatter.match({
  "location": "employeePageSteps.i_clicked_on_PIM()"
});
formatter.result({
  "duration": 674993189,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "add employee",
  "description": "",
  "id": "us-121335---as-an-admin,-i-should-have-the-ability-to-add,-modify-and-delete-an-employee.;add-employee",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I navigated to the Add Employee Page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I provide the first name \"mark\" , middle name \"balooch\" and last name \"kamal\" of the employee",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I successfully added an employee",
  "keyword": "Then "
});
formatter.match({
  "location": "employeePageSteps.i_navigated_to_the_Add_Employee_Page()"
});
formatter.result({
  "duration": 386382394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mark",
      "offset": 26
    },
    {
      "val": "balooch",
      "offset": 47
    },
    {
      "val": "kamal",
      "offset": 71
    }
  ],
  "location": "employeePageSteps.i_provide_the_first_name_middle_name_and_last_name_of_the_employee(String,String,String)"
});
formatter.result({
  "duration": 4013724895,
  "status": "passed"
});
formatter.match({
  "location": "employeePageSteps.i_successfully_added_an_employee()"
});
formatter.result({
  "duration": 40324018,
  "status": "passed"
});
formatter.after({
  "duration": 813509695,
  "status": "passed"
});
formatter.before({
  "duration": 4170352520,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I logged into OrangeHRM",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I clicked on PIM",
  "keyword": "And "
});
formatter.match({
  "location": "employeePageSteps.i_logged_into_OrangeHRM()"
});
formatter.result({
  "duration": 1161996072,
  "status": "passed"
});
formatter.match({
  "location": "employeePageSteps.i_clicked_on_PIM()"
});
formatter.result({
  "duration": 671982965,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "edit employee",
  "description": "",
  "id": "us-121335---as-an-admin,-i-should-have-the-ability-to-add,-modify-and-delete-an-employee.;edit-employee",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I navigated to the Employee List Page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I search for an added employee \"mark\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I navigated to the employee profile",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I can edit Employee information",
  "keyword": "And "
});
formatter.match({
  "location": "employeePageSteps.i_navigated_to_the_Employee_List_Page()"
});
formatter.result({
  "duration": 385345504,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mark",
      "offset": 32
    }
  ],
  "location": "employeePageSteps.i_search_for_an_added_employee(String)"
});
formatter.result({
  "duration": 23834757259,
  "status": "passed"
});
formatter.match({
  "location": "employeePageSteps.i_navigated_to_the_employee_profile()"
});
formatter.result({
  "duration": 115807163,
  "status": "passed"
});
formatter.match({
  "location": "employeePageSteps.i_can_edit_Employee_information()"
});
formatter.result({
  "duration": 1382181059,
  "status": "passed"
});
formatter.after({
  "duration": 847790599,
  "status": "passed"
});
formatter.before({
  "duration": 4591101597,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I logged into OrangeHRM",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I clicked on PIM",
  "keyword": "And "
});
formatter.match({
  "location": "employeePageSteps.i_logged_into_OrangeHRM()"
});
formatter.result({
  "duration": 1228093435,
  "status": "passed"
});
formatter.match({
  "location": "employeePageSteps.i_clicked_on_PIM()"
});
formatter.result({
  "duration": 749075444,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "delete employee",
  "description": "",
  "id": "us-121335---as-an-admin,-i-should-have-the-ability-to-add,-modify-and-delete-an-employee.;delete-employee",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I navigated to the Employee List Page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I search for an added employee \"mark\" to delete",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I should be able to delete that employee",
  "keyword": "Then "
});
formatter.match({
  "location": "employeePageSteps.i_navigated_to_the_Employee_List_Page()"
});
formatter.result({
  "duration": 404008179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mark",
      "offset": 32
    }
  ],
  "location": "employeePageSteps.i_search_for_an_added_employee_to_delete(String)"
});
formatter.result({
  "duration": 10479923325,
  "status": "passed"
});
formatter.match({
  "location": "employeePageSteps.i_should_be_able_to_delete_that_employee()"
});
formatter.result({
  "duration": 69778,
  "status": "passed"
});
formatter.after({
  "duration": 826219479,
  "status": "passed"
});
formatter.uri("EmployeeLeave.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Abraham"
    }
  ],
  "line": 2,
  "name": "US 121337 - EPIC STORY--As an admin, I should have the ability to add Entitlements to",
  "description": "all Default employees. \n\nNote: One employee should have at least One unique leave type. Should have the ability to assign leave\nto default employee. Should be able to find default employee in Leave List.",
  "id": "us-121337---epic-story--as-an-admin,-i-should-have-the-ability-to-add-entitlements-to",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4245849887,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I logged into OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click Leave Module",
  "keyword": "When "
});
formatter.match({
  "location": "employeePageSteps.i_logged_into_OrangeHRM()"
});
formatter.result({
  "duration": 1127121389,
  "status": "passed"
});
formatter.match({
  "location": "empLeaveSteps.i_click_Leave_Module()"
});
formatter.result({
  "duration": 671770966,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Scenarios one",
  "description": "",
  "id": "us-121337---epic-story--as-an-admin,-i-should-have-the-ability-to-add-entitlements-to;scenarios-one",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "click add Entitlements",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Add all default employees to \"FMLA US\" leave type",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Enter \"50\" Entitlement",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Confirm that all default employees have new Entitlements added for FMLA US",
  "keyword": "Then "
});
formatter.match({
  "location": "empLeaveSteps.click_add_Entitlements()"
});
formatter.result({
  "duration": 462293094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FMLA US",
      "offset": 30
    }
  ],
  "location": "empLeaveSteps.add_all_default_employees_to_leave_type(String)"
});
formatter.result({
  "duration": 175764523,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 9
    }
  ],
  "location": "empLeaveSteps.i_Enter_Entitlement(String)"
});
formatter.result({
  "duration": 6237590328,
  "status": "passed"
});
formatter.match({
  "location": "empLeaveSteps.i_Confirm_that_all_default_employees_have_new_Entitlements_added_for_FMLA_US()"
});
formatter.result({
  "duration": 3539282018,
  "status": "passed"
});
formatter.after({
  "duration": 849899045,
  "status": "passed"
});
formatter.before({
  "duration": 4094261375,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I logged into OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click Leave Module",
  "keyword": "When "
});
formatter.match({
  "location": "employeePageSteps.i_logged_into_OrangeHRM()"
});
formatter.result({
  "duration": 1114274273,
  "status": "passed"
});
formatter.match({
  "location": "empLeaveSteps.i_click_Leave_Module()"
});
formatter.result({
  "duration": 704915868,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Scenario two",
  "description": "",
  "id": "us-121337---epic-story--as-an-admin,-i-should-have-the-ability-to-add-entitlements-to;scenario-two",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "click add Entitlements",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Add one default employees \"stev\" to Paternity US leave type besides",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Enter \"50\" Entitlement",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Confirm that all default employees have new Entitlements added for Paternity US",
  "keyword": "Then "
});
formatter.match({
  "location": "empLeaveSteps.click_add_Entitlements()"
});
formatter.result({
  "duration": 409874404,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "stev",
      "offset": 27
    }
  ],
  "location": "empLeaveSteps.add_one_default_employees_to_Paternity_US_leave_type_besides(String)"
});
formatter.result({
  "duration": 6461574872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 9
    }
  ],
  "location": "empLeaveSteps.i_Enter_Entitlement(String)"
});
formatter.result({
  "duration": 6160627182,
  "status": "passed"
});
formatter.match({
  "location": "empLeaveSteps.i_Confirm_that_all_default_employees_have_new_Entitlements_added_for_Paternity_US()"
});
formatter.result({
  "duration": 15671263409,
  "status": "passed"
});
formatter.after({
  "duration": 856450159,
  "status": "passed"
});
formatter.before({
  "duration": 4064307139,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I logged into OrangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click Leave Module",
  "keyword": "When "
});
formatter.match({
  "location": "employeePageSteps.i_logged_into_OrangeHRM()"
});
formatter.result({
  "duration": 1114571607,
  "status": "passed"
});
formatter.match({
  "location": "empLeaveSteps.i_click_Leave_Module()"
});
formatter.result({
  "duration": 722438988,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Scenario three",
  "description": "",
  "id": "us-121337---epic-story--as-an-admin,-i-should-have-the-ability-to-add-entitlements-to;scenario-three",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "click Assign Leave",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter any one of the default employee names \"rob\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select \"FMLA US\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Balance of 50 should be present for employee",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I select From Date \"Mar\" and \"2018\" and \"27\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I select To Date \"May\" and \"2018\" and \"10\" it should not exceed morethan fifty days.",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should see that the leave balance has changed based on how many days that was taken",
  "keyword": "Then "
});
formatter.match({
  "location": "AssignLeaveSteps.click_Assign_Leave()"
});
formatter.result({
  "duration": 4423127299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rob",
      "offset": 47
    }
  ],
  "location": "AssignLeaveSteps.i_enter_any_one_of_the_default_employee_names(String)"
});
formatter.result({
  "duration": 298403688,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FMLA US",
      "offset": 10
    }
  ],
  "location": "AssignLeaveSteps.i_select(String)"
});
formatter.result({
  "duration": 117360497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 11
    }
  ],
  "location": "AssignLeaveSteps.balance_of_should_be_present_for_employee(int)"
});
formatter.result({
  "duration": 784001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mar",
      "offset": 20
    },
    {
      "val": "2018",
      "offset": 30
    },
    {
      "val": "27",
      "offset": 41
    }
  ],
  "location": "AssignLeaveSteps.i_select_From_Date_and_and(String,String,String)"
});
formatter.result({
  "duration": 910329738,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 18
    },
    {
      "val": "2018",
      "offset": 28
    },
    {
      "val": "10",
      "offset": 39
    }
  ],
  "location": "AssignLeaveSteps.i_select_To_Date_and_and_it_should_not_exceed_morethan_fifty_days(String,String,String)"
});
formatter.result({
  "duration": 12705831425,
  "status": "passed"
});
formatter.match({
  "location": "AssignLeaveSteps.i_should_see_that_the_leave_balance_has_changed_based_on_how_many_days_that_was_taken()"
});
formatter.result({
  "duration": 18666,
  "status": "passed"
});
formatter.after({
  "duration": 809255026,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: SyntaxTeam"
    },
    {
      "line": 2,
      "value": "#@Temp"
    }
  ],
  "line": 3,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4226620101,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "OrangeHRM logo is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.orangehrm_logo_is_displayed()"
});
formatter.result({
  "duration": 36496461,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Valid login",
  "description": "",
  "id": "login-feature;valid-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I enter \"admin\" and \"admin123\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 9
    },
    {
      "val": "admin123",
      "offset": 21
    }
  ],
  "location": "LoginPageSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 174694300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 965198651,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_successfully_logged_in()"
});
formatter.result({
  "duration": 17333,
  "status": "passed"
});
formatter.after({
  "duration": 841585707,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Invalid login",
  "description": "",
  "id": "login-feature;invalid-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I see error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "login-feature;invalid-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errorMessage"
      ],
      "line": 19,
      "id": "login-feature;invalid-login;;1"
    },
    {
      "cells": [
        "Admin",
        "Monkey123",
        "Invalid credentials"
      ],
      "line": 20,
      "id": "login-feature;invalid-login;;2"
    },
    {
      "cells": [
        "Monkey",
        "admin123",
        "Invalid credentials"
      ],
      "line": 21,
      "id": "login-feature;invalid-login;;3"
    },
    {
      "cells": [
        "Monkey",
        "Monkey123",
        "Invalid credentials"
      ],
      "line": 22,
      "id": "login-feature;invalid-login;;4"
    },
    {
      "cells": [
        "",
        "admin123",
        "Username cannot be empty"
      ],
      "line": 23,
      "id": "login-feature;invalid-login;;5"
    },
    {
      "cells": [
        "Admin",
        "",
        "Password cannot be empty"
      ],
      "line": 24,
      "id": "login-feature;invalid-login;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4250136111,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "OrangeHRM logo is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.orangehrm_logo_is_displayed()"
});
formatter.result({
  "duration": 41018685,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Invalid login",
  "description": "",
  "id": "login-feature;invalid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I enter \"Admin\" and \"Monkey123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I see error message \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 9
    },
    {
      "val": "Monkey123",
      "offset": 21
    }
  ],
  "location": "LoginPageSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 203284980,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 521728677,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 21
    }
  ],
  "location": "LoginPageSteps.i_see_error_message(String)"
});
formatter.result({
  "duration": 37693351,
  "status": "passed"
});
formatter.after({
  "duration": 838849262,
  "status": "passed"
});
formatter.before({
  "duration": 4304143247,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "OrangeHRM logo is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.orangehrm_logo_is_displayed()"
});
formatter.result({
  "duration": 37775572,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Invalid login",
  "description": "",
  "id": "login-feature;invalid-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I enter \"Monkey\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I see error message \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Monkey",
      "offset": 9
    },
    {
      "val": "admin123",
      "offset": 22
    }
  ],
  "location": "LoginPageSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 220090320,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 229880102,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 21
    }
  ],
  "location": "LoginPageSteps.i_see_error_message(String)"
});
formatter.result({
  "duration": 42573352,
  "status": "passed"
});
formatter.after({
  "duration": 850687045,
  "status": "passed"
});
formatter.before({
  "duration": 4236294327,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "OrangeHRM logo is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.orangehrm_logo_is_displayed()"
});
formatter.result({
  "duration": 39932018,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Invalid login",
  "description": "",
  "id": "login-feature;invalid-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I enter \"Monkey\" and \"Monkey123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I see error message \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Monkey",
      "offset": 9
    },
    {
      "val": "Monkey123",
      "offset": 22
    }
  ],
  "location": "LoginPageSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 195672531,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 236832550,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 21
    }
  ],
  "location": "LoginPageSteps.i_see_error_message(String)"
});
formatter.result({
  "duration": 36716017,
  "status": "passed"
});
formatter.after({
  "duration": 818755919,
  "status": "passed"
});
formatter.before({
  "duration": 5422113521,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "OrangeHRM logo is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.orangehrm_logo_is_displayed()"
});
formatter.result({
  "duration": 39060018,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Invalid login",
  "description": "",
  "id": "login-feature;invalid-login;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I enter \"\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I see error message \"Username cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 9
    },
    {
      "val": "admin123",
      "offset": 16
    }
  ],
  "location": "LoginPageSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 198451200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 68035586,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 21
    }
  ],
  "location": "LoginPageSteps.i_see_error_message(String)"
});
formatter.result({
  "duration": 33488460,
  "status": "passed"
});
formatter.after({
  "duration": 837491928,
  "status": "passed"
});
formatter.before({
  "duration": 4406998403,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "OrangeHRM logo is displayed",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSteps.orangehrm_logo_is_displayed()"
});
formatter.result({
  "duration": 40249351,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Invalid login",
  "description": "",
  "id": "login-feature;invalid-login;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I enter \"Admin\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I see error message \"Password cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 9
    },
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "LoginPageSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 190344084,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 66514696,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password cannot be empty",
      "offset": 21
    }
  ],
  "location": "LoginPageSteps.i_see_error_message(String)"
});
formatter.result({
  "duration": 33938237,
  "status": "passed"
});
formatter.after({
  "duration": 841981263,
  "status": "passed"
});
});