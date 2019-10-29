package addtocart;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class addtocart {
	WebDriver driver;
	@Given("Alex has registered into demowebshop website")
	public void alex_has_registered_into_demowebshop_website() {
		System.setProperty("webdriver.chrome.driver","C:\\MyDrivers\\chromedriver_win32\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://demowebshop.tricentis.com/");
		
		driver.findElement(By.xpath("//a[@href='/register']")).click();
		driver.findElement(By.xpath("//input[@id='gender-male']")).click();
		driver.findElement(By.xpath("//input[@name='FirstName']")).sendKeys("jonny");
		driver.findElement(By.xpath("//input[@name='LastName']")).sendKeys("hp");
		driver.findElement(By.xpath("//input[@name='Email']")).sendKeys("hpadd3@gmail.com");
		driver.findElement(By.xpath("//input[@name='Password']")).sendKeys("string123");
		driver.findElement(By.xpath("//input[@name='ConfirmPassword']")).sendKeys("string123");
	 
	}

	@Given("he searched for computer")
	public void he_searched_for_computer() {
		
		driver.findElement(By.xpath("//input[@id='small-searchterms']")).sendKeys("computer");
		driver.findElement(By.xpath("//input[@class='button-1 search-box-button']")).click();
	}

	@When("he clicks on shopping cart")
	public void he_clicks_on_shopping_cart() {
		
		driver.findElement(By.xpath("//span[text()='Shopping cart']")).click();
	   
	}

	@When("sees Your Shopping Cart is empty!")
	public void sees_Your_Shopping_Cart_is_empty() {
		String a=driver.getTitle();
	  Assert.assertEquals(a,"Demo Web Shop. Shopping Cart");
	  System.out.println("Your Shopping Cart is empty!");
	  driver.close();
	}


}
