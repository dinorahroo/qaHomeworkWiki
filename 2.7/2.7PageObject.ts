import { BasePage } from "./basePage";
import {By} from 'selenium-webdriver'; 

export class pageObject extends BasePage {
    addEm: By = By.name('addEMployee'); 
    newEm: By = By.xpath('//li[text()="New Employee"]');
    namInp: By = By.// fill in the blank
    phoInp: By = By.// fill in the blank
    titleInp: By = By.//fill in the blank
    saveBtn: By = By.//fill in the blank

    constructor(){
        super({url: 'https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html'});
    };
};