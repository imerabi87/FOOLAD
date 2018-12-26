package com.syntax.pages;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.syntax.utils.BaseClass;

public class AssignLeavePage extends BaseClass {
	@FindBy(linkText = "Leave")
	public WebElement leave;

	@FindBy(xpath = "//*[@id=\"menu_leave_assignLeave\"]")
	public WebElement assignLeave;

	@FindBy(id = "assignleave_txtEmployee_empName")
	public WebElement empName;

	@FindBy(id = "assignleave_txtLeaveType")
	public WebElement leaveType;

	@FindBy(id = "assignleave_txtFromDate")
	public WebElement dateFrom;
	@FindBy(xpath = "//*[@id=\"ui-datepicker-div\"]/div/div/select[1]") 
	public WebElement month;
	@FindBy(xpath = "//*[@id=\"ui-datepicker-div\"]/div/div/select[2]")
	public WebElement year;
	@FindBy(xpath = "//table[@class='ui-datepicker-calendar']/tbody/tr/td")
	public List<WebElement> day;

	

	@FindBy(id="assignleave_txtToDate")
	public WebElement toDate;
	
	
	
	@FindBy(id="assignBtn")
	public WebElement assign;
	
	
	
	
	
	public AssignLeavePage() {
		PageFactory.initElements(driver, this);
	}
}
