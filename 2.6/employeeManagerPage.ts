import { By, until, WebDriver } from 'selenium-webdriver';
import { elementLocated } from 'selenium-webdriver/lib/until';


export class employeeManager {
    driver: WebDriver;
    url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
    
    employee1: By = By.name('employee1');
    nameEntry: By = By.name('nameEntry');//this is where i struggled not knowing if there were more steps after this
    addEmployee: By = By.name('addEmployee');
    newEmployee: By = By.xpath(`//li[@text='New Employee']`);
    phone: By = By.name('phoneEntry');
    title: By = By.name('titleEntry');
    saveBtn: By = By.id('saveBtn');
    employeeName: By = By.name('employeeName');
    employee3: By = By.name('employee3');

    constructor (driver: WebDriver) {
        this.driver = driver;

    }
    async navigate () {
        await this.driver.get(this.url)
        await this.driver.wait(until.elementLocated(this.employee1))
    };
    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy))
        return (await this.driver.findElement(elementBy)).click()
    };
    
    async setInput(elementBy: By, keys: any) {
        await this.driver.wait(until.elementLocated(elementBy)).clear()
        return this.driver.findElement(elementBy).sendKeys(keys)
    };
    async getText(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy))
        return this.driver.findElement(elementBy).getText()
    };
  
};


