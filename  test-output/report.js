$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Employee.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: SyntaxTeam"
    }
  ],
  "line": 2,
  "name": "US 121335 - As an admin, I should have the ability to add, modify and delete an employee.",
  "description": "",
  "id": "us-121335---as-an-admin,-i-should-have-the-ability-to-add,-modify-and-delete-an-employee.",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4823278013,
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
  "duration": 1323408014,
  "status": "passed"
});
formatter.match({
  "location": "employeePageSteps.i_clicked_on_PIM()"
});
formatter.result({
  "duration": 671555,
  "error_message": "java.lang.NullPointerException\r\n\tat com.syntax.stepDefinitions.employeePageSteps.i_clicked_on_PIM(employeePageSteps.java:42)\r\n\tat ✽.And I clicked on PIM(Employee.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "comments": [
    {
      "line": 9,
      "value": "#@smoke"
    }
  ],
  "line": 10,
  "name": "add employee",
  "description": "",
  "id": "us-121335---as-an-admin,-i-should-have-the-ability-to-add,-modify-and-delete-an-employee.;add-employee",
  "type": "scenario",
  "keyword": "Scenario"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "employeePageSteps.i_successfully_added_an_employee()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 813080250,
  "status": "passed"
});
formatter.before({
  "duration": 4023960413,
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
  "duration": 1188025971,
  "status": "passed"
});
formatter.match({
  "location": "employeePageSteps.i_clicked_on_PIM()"
});
formatter.result({
  "duration": 142666,
  "error_message": "java.lang.NullPointerException\r\n\tat com.syntax.stepDefinitions.employeePageSteps.i_clicked_on_PIM(employeePageSteps.java:42)\r\n\tat ✽.And I clicked on PIM(Employee.feature:6)\r\n",
  "status": "failed"
});
formatter.scenario({
  "comments": [
    {
      "line": 15,
      "value": "#@smoke"
    }
  ],
  "line": 16,
  "name": "edit employee",
  "description": "",
  "id": "us-121335---as-an-admin,-i-should-have-the-ability-to-add,-modify-and-delete-an-employee.;edit-employee",
  "type": "scenario",
  "keyword": "Scenario"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "employeePageSteps.i_navigated_to_the_employee_profile()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "employeePageSteps.i_can_edit_Employee_information()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 787675838,
  "status": "passed"
});
formatter.before({
  "duration": 3993157787,
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
  "duration": 1194121964,
  "status": "passed"
});
formatter.match({
  "location": "employeePageSteps.i_clicked_on_PIM()"
});
formatter.result({
  "duration": 170666,
  "error_message": "java.lang.NullPointerException\r\n\tat com.syntax.stepDefinitions.employeePageSteps.i_clicked_on_PIM(employeePageSteps.java:42)\r\n\tat ✽.And I clicked on PIM(Employee.feature:6)\r\n",
  "status": "failed"
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
      "name": "@delete"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "employeePageSteps.i_should_be_able_to_delete_that_employee()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 812076695,
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
  "duration": 3933686310,
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
  "duration": 31452403,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 7,
      "value": "#@smoke"
    }
  ],
  "line": 8,
  "name": "Valid login",
  "description": "",
  "id": "login-feature;valid-login",
  "type": "scenario",
  "keyword": "Scenario"
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
  "duration": 204071728,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 1006931991,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_successfully_logged_in()"
});
formatter.result({
  "duration": 19111,
  "status": "passed"
});
formatter.after({
  "duration": 802348264,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 12,
      "value": "#@Regression"
    }
  ],
  "line": 13,
  "name": "Invalid login",
  "description": "",
  "id": "login-feature;invalid-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "duration": 4141521145,
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
  "duration": 41651500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Invalid login",
  "description": "",
  "id": "login-feature;invalid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "duration": 192710854,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 564244137,
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
  "duration": 42389721,
  "status": "passed"
});
formatter.after({
  "duration": 812672695,
  "status": "passed"
});
formatter.before({
  "duration": 3999263557,
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
  "duration": 40478613,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Invalid login",
  "description": "",
  "id": "login-feature;invalid-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "duration": 183350422,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 258838321,
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
  "duration": 37329284,
  "status": "passed"
});
formatter.after({
  "duration": 791612278,
  "status": "passed"
});
formatter.before({
  "duration": 4050077267,
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
  "duration": 38750170,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Invalid login",
  "description": "",
  "id": "login-feature;invalid-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "duration": 203181507,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 289241837,
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
  "duration": 41407944,
  "status": "passed"
});
formatter.after({
  "duration": 788551838,
  "status": "passed"
});
formatter.before({
  "duration": 4132453601,
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
  "duration": 34829731,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Invalid login",
  "description": "",
  "id": "login-feature;invalid-login;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "duration": 167473555,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 103291418,
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
  "duration": 32329291,
  "status": "passed"
});
formatter.after({
  "duration": 807428256,
  "status": "passed"
});
formatter.before({
  "duration": 4107415413,
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
  "duration": 43594609,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Invalid login",
  "description": "",
  "id": "login-feature;invalid-login;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
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
  "duration": 177898874,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.i_click_on_login_button()"
});
formatter.result({
  "duration": 87113217,
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
  "duration": 29756405,
  "status": "passed"
});
formatter.after({
  "duration": 807986478,
  "status": "passed"
});
});