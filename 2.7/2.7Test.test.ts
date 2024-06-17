import { pageObject } from "./2.7PageObject";
const page = new pageObject(); 

class Intern {
   //create a class for interns that includes the name phone and title for the intern.
   name: string;
   phone: number;
   title: string;

   constructor(name:string, phone:number, title:string) {
      this.name = name;
      this.phone = phone;
      this.title = title;
   };
}; 

let newInterns: Array<Intern> = [
   //create an array of Interns using your class 
   new Intern('Noel', 8888888888, 'Host'),
   new Intern('Prue', 9999999999, 'Judge'),
   new Intern('Matt', 7777777777, 'Host'),
   new Intern('Paul', 4444444444, 'Handshake Master')
];

let addInterns = async (newInterns) => {
   //create a function to add the interns from your array
   await page.click(page.addEm);
   await page.click(page.newEm);
   await page.setInput(page.nameInp, newInterns.name);
   await page.setInput(page.phoInp, newInterns.phone);
   await page.setInput(page.titleInp, newInterns.title);
   await page.click(page.saveBtn);
   await page.driver.sleep(2000);
};

test('can add the bake off crew',async () => {
    await page.navigate(); 
    await page.getElement(page.addEm); 
    for(let i= 0; i < newInterns.length; i ++){
        await addInterns(newInterns[i]); 
    }; 
    await page.driver.quit(); 
})