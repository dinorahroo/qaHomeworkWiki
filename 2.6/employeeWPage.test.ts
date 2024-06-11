import { Builder, Capabilities, WebDriver, WebElement } from "selenium-webdriver";
const chromedriver = require('chromedriver');
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();
import { employeeManager } from "./employeeManagerPage";

const page = new employeeManager(driver);

describe("practicing page objects", ()=> {
    beforeEach(async ()=> {
        await page.navigate();
    });
    afterAll(async () => {
        await page.driver.quit();
    });
    test('changing employee 1 name', async () => {
        await page.click(page.employee1);
        await page.click(page.nameEntry);
        await page.setInput(page.nameEntry, "Evie");
        await page.click(page.saveBtn);
        let newName = await page.getText(page.employeeName);
        expect(newName).toContain("Evie");
    });
    test('adding an employee', async () => {
        await page.click(page.addEmployee);
        await page.click(page.newEmployee);
        await page.setInput(page.nameEntry, "Bob");
        await page.setInput(page.phone, "2334455556");
        await page.setInput(page.title, "boss");
        await page.click(page.saveBtn);
    })
    test('testing to promote Phillip', async () => {
        await page.click(page.employee3);
        await page.setInput(page.title, "CoCEO");
        await page.click(page.saveBtn);
    })
});

