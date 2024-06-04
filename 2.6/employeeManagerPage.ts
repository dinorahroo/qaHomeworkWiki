import { Builder, By, until, Capabilities, WebDriver, WebElement } from "selenium-webdriver";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities } from "selenium-webdriver";
import { SpecPage } from "./SpecPage";

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

const page = new SpecPage(driver, "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html");

class employeeManagergit 

test("it works", async () => {
    await page.navigate();
    await page.search("purple")
})
