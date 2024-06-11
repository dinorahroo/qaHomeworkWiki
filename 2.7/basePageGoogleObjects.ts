import { By } from "selenium-webdriver";
import { BasePage } from "./basePage";

export class Google extends BasePage {
    searchBar: By = By.id('APjFqb');
    results: By = By.id('rcnt');
    constructor(){
        super({url: "https://www.google.com/"});
    }
};
