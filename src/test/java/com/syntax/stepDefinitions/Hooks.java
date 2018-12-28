package com.syntax.stepDefinitions;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.syntax.utils.BaseClass;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

	@Before
	public void start() {
		BaseClass.setUp();
	}
	
	@After
	public void end(Scenario scenario) {
		//if scenarios failes
		if(scenario.isFailed()) {
			//take a screenshot
			TakesScreenshot pic = (TakesScreenshot)BaseClass.driver;
		byte[] picture = pic.getScreenshotAs(OutputType.BYTES);
			//attache to the report
		scenario.embed(picture, "image/png");
		}
		BaseClass.tearDown();
	}
	
}
