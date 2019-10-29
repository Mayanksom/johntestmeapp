package multipleuser;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class multipleusercasestudy {
	WebDriver driver;
	@Given("John is on demo web shop")
	public void john_is_on_demo_web_shop() {
		System.setProperty("webdriver.chrome.driver","C:\\MyDrivers\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://demowebshop.tricentis.com/");
	}

	@Given("clicks on the register button")
	public void clicks_on_the_register_button() {
		driver.findElement(By.xpath("//a[@href='/register']")).click();
	   
	}

	
	
	@When("he chooses {string} and  enters {string} and {string} and {string} and {string} and {string}")
	public void he_chooses_and_enters_and_and_and_and(String string, String string2, String string3, String string4, String string5, String string6) {
		String m="male";
		if(string.equals(m)) {
			
			driver.findElement(By.xpath("//input[@id='gender-male']")).click();
		}
		else
		{
			driver.findElement(By.xpath("//input[@id='gender-female']")).click();
		}
		
	   
		driver.findElement(By.xpath("//input[@name='FirstName']")).sendKeys(string2);
		driver.findElement(By.xpath("//input[@name='LastName']")).sendKeys(string3);
		driver.findElement(By.xpath("//input[@name='Email']")).sendKeys(string4);
		driver.findElement(By.xpath("//input[@name='Password']")).sendKeys(string5);
		driver.findElement(By.xpath("//input[@name='ConfirmPassword']")).sendKeys(string6);
	}
	
	
	
	
	
	

	@Then("he clicks on submit register button")
	public void he_clicks_on_submit_register_button() {
		driver.findElement(By.xpath("//input[@name='register-button']")).click();
		
	    
	}

	@Then("he sees registration complete page and he clicks on continue button to continue")
	public void he_sees_registration_complete_page_and_he_clicks_on_continue_button_to_continue() {
		
		driver.findElement(By.xpath("//input[@class='button-1 register-continue-button']")).click();
	   
	}

}
