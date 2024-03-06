// **************************
// Test cases for validating DEALS page in Homeaglow
// Written by Wayne Hazle
// Test_01 - Go to Deals, Enter Valid Zip, Accept default voucher, click Get Clean
// EXPECTED:  Should goto Checkout page
//
// tests are stored at: 
// ***************************
// Setup files needed for Selenium
const {By, Builder} = require('selenium-webdriver');
const assert = require("assert");

// Set up variables
const successtext = "Yes!"
const goodzip = "92101"
const hpagetitle = "123"


  // Load the deals page
  describe('Deals Page Testing', function () {
    let driver;
    
    before(async function () {
      driver = await new Builder().forBrowser('chrome').build();
    });
    
    it('Test_01 for Deals Page', async function () {
      await driver.get('https://new-public-iwk12rtjg-homeaglow-eng.vercel.app/deal');
      
      let title = await driver.getTitle();
       //assert.equal("Web form", title);
	console.log("Page Loaded");
      
      // Use Sweet Timeout for delay to be sure page waits sufficiently
      await driver.manage().setTimeouts({implicit: 5000});
      
      // Find the textbox and the button for checking Zip code
      let textBox = await driver.findElement(By.css('#zip-hero-zip-input'));
      let submitButton = await driver.findElement(By.css('#zip-hero-go-button'));
      
      // Enter the zip in the text box & then click the GO button
      await textBox.sendKeys('92101');
      await submitButton.click();
      console.log("Button Clicked");

	// Accept Defaults and Select Get Clean button
	let getclean =  await driver.findElement(By.css('#zip-hero-get-clean-button'));
	await getclean.click();

	after(async () => await driver.quit());
  });

//. ****************************
//  End test 
//  ****************************

  });

