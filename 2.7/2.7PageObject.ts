import { BasePage } from "./basePage";
import {By} from 'selenium-webdriver'; 

export class pageObject extends BasePage {
    addEm: By = By.name('addEMployee'); 
    newEm: By = By.xpath('//li[text()="New Employee"]');
    nameInp: By = By.name('nameEntry');
    phoInp: By = By.name('phoneEntry');
    titleInp: By = By.name('titleEntry');
    saveBtn: By = By.id('saveBtn');

    constructor(){
        super({url: 'https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html'});
    };
};