import { Builder, By, Capabilities, WebDriver, WebElement, until } from "selenium-webdriver";
const chromedriver = require('chromedriver');
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

class enterWanted {
    driver: WebDriver;
    url: string = 'https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html';

    headerInput: By = By.name('hdrInput');
    mkeInput: By = By.name('mkeInput');
    oaiInput: By = By.name('oriInput');
    submitBtn: By = By.id('saveBtn');
    errorHeader: By = By.id('validHeader');
    cancelBtn: By = By.id('clearBtn');

    constructor(driver: WebDriver) {
        this.driver = driver;
    };
    
    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.headerInput));
    };
    //navigates to url and waits until the header input is located
    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy));
        let element = await (this.driver.findElement(elementBy));
        await this.driver.wait(until.elementIsVisible(element));
        return element;
    };
    //finds an element and returns it for user purpose
    async sendKeys(elementBy: By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy);
        await input.clear();
        return input.sendKeys(keys);  
    };
    //get input element, clears the input element and sends the keys
    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).click();
    }
    //locates the element and then clicks on that element
    async getText(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).getText();
    };
    //gets the text of the selected element

}

const ewPage = new enterWanted(driver);

test('enter wanted test with paage object model', async ()=> {
    await ewPage.navigate();
    await ewPage.sendKeys(ewPage.headerInput, "blah blah");
    await ewPage.sendKeys(ewPage.mkeInput, "blah blah");
    await ewPage.sendKeys(ewPage.oaiInput, "blah blah");
    await ewPage.click(ewPage.submitBtn);
    let errorMessage = await ewPage.getText(ewPage.errorHeader);
    expect(errorMessage).toEqual("Errors Received:");
    await ewPage.click(ewPage.cancelBtn);
    await ewPage.driver.sleep(2000);
})
