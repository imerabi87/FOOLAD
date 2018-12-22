package com.syntax.pages;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.syntax.utils.BaseClass;

public class EmployeeListPage extends BaseClass {
	@FindBy(linkText = "Employee List")
	public WebElement EmployeeList;

	@FindBy(id = "searchBtn")
	public WebElement searchbtn;

	

	@FindBy(xpath="//fieldset/p/input[@value='Edit']")
	public WebElement edit;

	@FindBy(id = "personal_optGender_1")
	public WebElement gender;

	@FindBy(id = "personal_cmbNation")
	public WebElement nationality;

	@FindBy(id = "personal_txtLicExpDate")
	public WebElement licenseExpiryDate;

	@FindBy(xpath = "//*[@id=\"ui-datepicker-div\"]/div/div/select[1]")
	public WebElement monthDropD;

	@FindBy(xpath = "//*[@id=\"ui-datepicker-div\"]/div/div/select[2]")
	public WebElement yearDropD;

	@FindBy(xpath = "//table[@id='resultTable']/tbody/tr")
	public List<WebElement> Table;

	@FindBy(xpath="//input[@id='btnSave']")
	public WebElement saveEdit;
	
	@FindBy(xpath="//*[@id='btnDelete']")
	public WebElement delete;
	
	public EmployeeListPage() {
		PageFactory.initElements(driver, this);
	}

}
