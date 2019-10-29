package MyRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\Training_h2a.06.17\\Desktop\\New Folder\\cucumbercasestudy\\Features\\login.feature",
glue= {"login"},
tags= {"@login"},
plugin= {"pretty","html:target/casestudy2report"}
)
public class runner {

}
