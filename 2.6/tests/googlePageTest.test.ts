///importing class from page object
import { GooglePage } from "../googlePagePractice";
//import what we need for our chrome to run
import { Builder, Capabilities, ChromiumWebDriver, WebDriver } from "selenium-webdriver";
const chromedriver = require('chromedriver');
//build our instance of chrome
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();
//pull over the class from the page object and set it as a variable
const page = new GooglePage(driver, 'https://www.google.com/');

//write the test
test('do a search', async () => {
    await page.navigate();
    await page.search('Movies near me');
    await page.getResults();
    await page.driver.quit();
});