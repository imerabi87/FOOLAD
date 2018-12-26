package com.syntax.stepDefinitions;

import java.util.List;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

import com.syntax.pages.AssignLeavePage;
import com.syntax.utils.CommonMethods;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AssignLeaveSteps {

	AssignLeavePage leavePage;

	@When("^click Assign Leave$")
	public void click_Assign_Leave() throws InterruptedException {
		leavePage = new AssignLeavePage();
		CommonMethods.click(leavePage.assignLeave);
		Thread.sleep(4000);
	}

	@When("^I enter any one of the default employee names \"([^\"]*)\"$")
	public void i_enter_any_one_of_the_default_employee_names(String name) throws Throwable {
		CommonMethods.click(leavePage.empName);
		CommonMethods.enterValue(leavePage.empName, name);
		leavePage.empName.sendKeys(Keys.ENTER);

	}

	@When("^I select \"([^\"]*)\"$")
	public void i_select(String FMLA) throws Throwable {

		CommonMethods.DropDown(leavePage.leaveType, FMLA);

	}

	@Then("^Balance of (\\d+) should be present for employee$")
	public void balance_of_should_be_present_for_employee(int FIFTY) throws Throwable {

	}

	@Then("^I select From Date \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_select_From_Date_and_and(String Month, String year, String day) throws Throwable {

		leavePage = new AssignLeavePage();

		CommonMethods.click(leavePage.dateFrom);
		
		CommonMethods.DropDown(leavePage.month, Month);
		CommonMethods.DropDown(leavePage.year, year);
		
		List<WebElement> tableData = leavePage.day;
		for (WebElement allcell : tableData) {
			String cellData = allcell.getText();
			if (cellData.equals(day)) {
				allcell.click();
				break;
			}
		}
	}

	@Then("^I select To Date \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" it should not exceed morethan fifty days\\.$")
	public void i_select_To_Date_and_and_it_should_not_exceed_morethan_fifty_days(String ToMonth, String ToYear,
			String dayTo) throws InterruptedException  {
		leavePage = new AssignLeavePage();
		Thread.sleep(3000);
		CommonMethods.click(leavePage.toDate);
		Thread.sleep(3000);
		CommonMethods.DropDown(leavePage.month, ToMonth);
		Thread.sleep(3000);
		CommonMethods.DropDown(leavePage.year, ToYear);
		Thread.sleep(3000);
		List<WebElement> tableData = leavePage.day;
		for (WebElement allcell : tableData) {
			String cellData = allcell.getText();
			if (cellData.equals(dayTo)) {
				allcell.click();
				break;
			}
		}
		CommonMethods.click(leavePage.assign);
	}

	@Then("^I should see that the leave balance has changed based on how many days that was taken$")
	public void i_should_see_that_the_leave_balance_has_changed_based_on_how_many_days_that_was_taken()
			throws Throwable {

	}

}
