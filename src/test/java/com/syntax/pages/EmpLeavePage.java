package com.syntax.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.syntax.utils.BaseClass;

public class EmpLeavePage extends BaseClass {
	@FindBy(linkText = "Leave")
	public WebElement leave;

	@FindBy(id = "menu_leave_Entitlements")
	public WebElement Entitlements;

	@FindBy(linkText = "Add Entitlements")
	public WebElement addEntilements;

	@FindBy(id = "entitlements_filters_bulk_assign")
	public WebElement allEmpbtn;
	
	@FindBy(id="entitlements_entitlement")
	public WebElement entreValue;

	@FindBy(xpath = "//*[@id=\"btnSave\"]") 
	public WebElement save;

	@FindBy(id = "dialogConfirmBtn")
	public WebElement confirm;

	
	@FindBy(id="entitlements_filters_location")
	public WebElement location;
	
	@FindBy(id="entitlements_filters_subunit")
	public WebElement SubUnit;
	
	
	
	@FindBy(id="entitlements_employee_empName")
	public WebElement empName;
	
	@FindBy(id="entitlements_leave_type")
	public WebElement leaveType;
	
	@FindBy(xpath="//input[@id='btnSave']")
	public WebElement assignLeaveSave;
	  
	@FindBy(xpath="//*[@id=\"dialogUpdateEntitlementConfirmBtn\"]")  
	public WebElement confirmOneEmp;
	
	@FindBy(id="entitlements_employee_empName")
	public WebElement confrimName;
	
	
	
	
	
	
	
	
	public EmpLeavePage() {
		PageFactory.initElements(driver, this);
	}






	
}
