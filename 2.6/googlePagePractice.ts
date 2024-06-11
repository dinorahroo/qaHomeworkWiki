import { By, until, WebDriver, WebElement } from "selenium-webdriver";

export class GooglePage {
    driver: WebDriver;
    url: string = 'https://www.google.com/';
    //locators
    searchBar: By = By.name('q');
    results: By = By.id('rcnt');
    //setting parameters as properties to use the class as object
    constructor(driver:WebDriver, url:string){
        this.driver = driver;
        this.url = url;
    }
    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.searchBar));
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
    async search(searchTerm: string) {
        return this.sendKeys(this.searchBar, `${searchTerm}\n`)
    };
    //sending whatever user gives it and hitting enter after it types
    async getResults() {
        return this.getText(this.results);
    };
};


    
