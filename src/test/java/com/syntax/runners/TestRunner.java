package com.syntax.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"src/test/resources/features"}
				, glue= {"com/syntax/stepDefinitions"}
                //, tags= {" @smoke, @Regression"}
			, tags= {" @Temp"}
				, dryRun=false
				, plugin = {"pretty", "html:target/cucumber-default-reports",
						"json:target/cucumber.json"}
				,monochrome= true
				
		
		)

public class TestRunner {

}
