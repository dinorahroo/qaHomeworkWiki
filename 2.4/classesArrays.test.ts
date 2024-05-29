//LOOPS CLASSES ARRAYS AND SELENIUM
//!first step is importing everything we need from selenium-webdriver
import { Builder, Capabilities, By, until, WebDriver, WebElement } from "selenium-webdriver";

const chromedriver = require("chromedriver"); 
const driver = new Builder().withCapabilities(Capabilities.chrome()).build(); 

class Employees {
  // Write a class that holds the name, phone, and title for the employee.
  name: string;
  phone: number;
  title: string;

  constructor(name: string, phone: number, title: string) {
    this.name = name;
    this.phone = phone;
    this.title = title;
}; 

let employees: Array<Employees> = [
  //Create an array of four employees using your class. 
  new Employees('Leo', 808-234-9831, 'yellow'),
  new Employees('Rafael', 808-234-9832, 'red'),
  new Employees('Donatello', 808-234-9833, 'purple'),
  new Employees('Michaelangelo', 808-234-9834, 'orange'),
]

const addEmployee: By = By.//fill in the blank
const newEmployee: By = By.// fill in the blank
const nameInput: By = By. // fill in the blank
const phoneInput: By = By. // fill in the blank
const titleInput: By = By. // fill in the blank
const saveBtn: By = By. // fill in the blank 

let myFunc = async (employees) => {
   //Create a function to add an employee.
}; 

describe("should add employees to employee manager", () => {
    test("can add employees using myFunc", async () => {
        await driver.get("https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html"); 
        for(let i = 0; i < employees.length; i++) {
            await myFunc(employees[i]); 
        }; 
        await driver.sleep(3000); 
        await driver.quit(); 
    });
}); 