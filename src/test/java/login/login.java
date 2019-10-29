package login;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class login {
	WebDriver driver;
	@Given("Alex has registered with testme App")
	public void alex_has_registered_with_testme_App() {
		System.setProperty("webdriver.chrome.driver","C:\\MyDrivers\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://10.232.237.143:443/TestMeApp/fetchcat.htm");
	}

	@Given("click on the sign in button")
	public void click_on_the_sign_in_button() {
	   driver.findElement(By.xpath("//a[@href='login.htm']")).click();
	}

	@When("he gives the correct {string} and {string}")
	public void he_gives_the_correct_and(String string, String string2) {
	   driver.findElement(By.xpath("//input[@name='userName']")).sendKeys(string);
	   driver.findElement(By.xpath("//input[@name='password']")).sendKeys(string2);
		
	}

	@When("click on login button")
	public void click_on_login_button() {
		driver.findElement(By.xpath("//input[@name='Login']")).click();
	}

	@Then("he see the homepage")
	public void he_see_the_homepage() {
	    String a=driver.getTitle();
	    Assert.assertEquals(a,"Home");
	    System.out.println("Equal");
	}


}
