package com.syntax.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.syntax.utils.BaseClass;

public class AddEmployeePage extends BaseClass {

	@FindBy(linkText = "PIM")
	public WebElement pimlink;

	@FindBy(linkText = "Add Employee")
	public WebElement addEmployee;

	@FindBy(id = "firstName")
	public WebElement firstname;

	@FindBy(id = "middleName")
	public WebElement middlename;

	@FindBy(id = "lastName")
	public WebElement lastname;

	@FindBy(id="employeeId")
	public WebElement empId;

	@FindBy(id = "btnSave")
	public WebElement save;
	
	@FindBy(xpath="//*[@id=\"profile-pic\"]/h1")
	public WebElement verifyName;
	
	
	public AddEmployeePage() {
		PageFactory.initElements(driver, this);
	}

}
