package com.syntax.stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.Keys;

import com.syntax.pages.EmpLeavePage;
import com.syntax.utils.CommonMethods;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class empLeaveSteps  {
	EmpLeavePage empLeave;

	@When("^I click Leave Module$")
	public void i_click_Leave_Module() throws Throwable {
		empLeave = new EmpLeavePage();
		CommonMethods.click(empLeave.leave);

	}

	@When("^click add Entitlements$")
	public void click_add_Entitlements() throws Throwable {
		CommonMethods.click(empLeave.Entitlements);
		CommonMethods.click(empLeave.addEntilements);
	}
	@When("^Add all default employees to \"([^\"]*)\" leave type$")
	public void add_all_default_employees_to_leave_type(String FMLA) throws Throwable {
		CommonMethods.click(empLeave.allEmpbtn);
		CommonMethods.DropDown(empLeave.leaveType, FMLA);
		
	}

	@When("^I Enter \"([^\"]*)\" Entitlement$")
	public void i_Enter_Entitlement(String fifty) throws Throwable {
		CommonMethods.enterValue(empLeave.entreValue, fifty);
		Thread.sleep(3000);
		CommonMethods.click(empLeave.save);
		Thread.sleep(3000);
	}

	@Then("^I Confirm that all default employees have new Entitlements added for FMLA US$")
	public void i_Confirm_that_all_default_employees_have_new_Entitlements_added_for_FMLA_US()
			throws InterruptedException {
		CommonMethods.click(empLeave.confirm);
		Thread.sleep(3000);
	}

	@When("^Add one default employees \"([^\"]*)\" to Paternity US leave type besides$")
	public void add_one_default_employees_to_Paternity_US_leave_type_besides(String empName) throws Throwable {
		CommonMethods.click(empLeave.empName);
		CommonMethods.enterValue(empLeave.empName, empName);
		empLeave.empName.sendKeys(Keys.ENTER);
		Thread.sleep(3000);
		CommonMethods.DropDown(empLeave.leaveType, "Paternity US");
		Thread.sleep(3000);
		CommonMethods.click(empLeave.assignLeaveSave);
	}

	@Then("^I Confirm that all default employees have new Entitlements added for Paternity US$")
	public void i_Confirm_that_all_default_employees_have_new_Entitlements_added_for_Paternity_US() throws Throwable {
		Thread.sleep(6000);
		CommonMethods.click(empLeave.confirmOneEmp);
		Thread.sleep(3000);

		boolean verifications = empLeave.confrimName.isDisplayed();
		Assert.assertTrue(verifications);
		Thread.sleep(6000);
	}

}
