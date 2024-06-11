import { Builder, By, until, Capabilities, WebDriver, WebElement } from "selenium-webdriver";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";
import { SpecPage } from "./SpecPage";

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

const page = new SpecPage(driver, "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html");

class employeeManager {
    driver: WebDriver;
    url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
    
    employee1: By = By.name('employee1');
    nameEntry: By = By.name('nameEntry');//this is where i struggled not knowing if there were more steps after this
    addEmployee: By = By.name('addEmployee');
    newEmployee: By = By.xpath(`//li[@text='New Employee'`);
    nameEntry: By = By.name('nameEntry');
    phone: 


    
    
}

test("it works", async () => {
    await page.navigate();
    await page.search("purple")
})
