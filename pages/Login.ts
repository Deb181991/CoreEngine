import { browser, element, by, ElementFinder } from 'protractor';
import { Assertions } from '../utils/Assertions';
import { GenericMethod } from "../utils/GenericMethod";

const assertions: Assertions = new Assertions();
const genericMethod: GenericMethod = new GenericMethod();

export class LoginPage {
    
    userName = element(by.xpath('//*[@formcontrolname="email"]'));
    password = element(by.xpath('//*[@formcontrolname="password"]'));
    name_logout = element(by.xpath('//span[contains(text(),"Hi")]'));
    signOut = element(by.xpath('//a[contains(text(),"Sign Out")]'));
    submit = element(by.id('kt_login_signin_submit'));

///////////////////////////////////////Pickup////////////////////////////////////////////////
    Pickup = element(by.xpath('//span[contains(text(),"Pickup")]'));
    pickupbutton = element(by.xpath('//span[contains(@class, "kt-menu__link-text ng-star-inserted") and text() = "Pickup"]'));
    ManagePrs = element(by.xpath('//span[contains(text(),"Manage PRS")]'));
    Pickup_request=element(by.xpath('//div[contains(text(),"Pickup Request")]'));
    Assigned =element(by.xpath('(//div[contains(@class,"mat-tab-label-content")])[4]'));
///////////////////////////////////////////////////////////////////////////////////////////////

async launchUrl() {
        await browser.waitForAngularEnabled(false);
        await genericMethod.navigateTo(browser.baseUrl);
    }

async verifyNavigation() {
        const isUserNameDisplayed = await assertions.verifyElementDisplayed(this.userName, 'userName');
        const isPasswordDisplayed = await assertions.verifyElementDisplayed(this.password, 'password');
 }

async enterEmail(userName: string) {
        await genericMethod.sendKeys(this.userName, userName, 'userName');
        // await genericMethod.clearField(this.userName);
        // await genericMethod.pause(3000);
        // var actualValue = "Your PRS PRS/DSML/2111/000322 has been successfully created and assigned to ZURIYATI BINTI ZULKAFLI"
        // var a = actualValue.split(' ');  
        // console.log(a);  
        // await genericMethod.sendKeys(this.userName, a[2], 'userName');
   
        
    }

async Exceldata(fileName: string, sheetName: string, rowNum: number, columnNum: number){
        await genericMethod.clearField(this.userName);
        const filepath = "//Data//" + fileName;
        //const filepath = "./Data/data.xlsx";
        const x = await genericMethod.getExcelData(filepath, sheetName, rowNum, columnNum);
        await genericMethod.sendKeys(this.userName,x,'');
        
}       
async WriteData(fileName , sheetName, rowNum, columnNum){
    await genericMethod.click(this.userName,'')   
    var z = await genericMethod.getValue(this.userName,'') 
    var v = await z.slice(0,-2);
    console.log(v);
    const filepath = "//Data//" + fileName;
    const y = await genericMethod.WriteData(v,filepath, sheetName, 4, 4);
    console.log(y);
    await genericMethod.clearField(this.userName);
    var d = await genericMethod.Increment(filepath,sheetName,2,2);
   await genericMethod.sendKeys(this.userName,d,'');

}

async enterPassword(password: string) {
        await genericMethod.sendKeys(this.password, password, 'password');
        //await genericMethod.Split();
        }

async verifyLoggedInPageUrl(pageUrl: string) {
        await genericMethod.waitForElementToBeVisible(this.name_logout, 'name_logout')
        var url = await genericMethod.getPageUrl();
        await assertions.verifyContains(pageUrl, url);
    }

async clickSubmit(){
        await genericMethod.click(this.submit, 'submit');
        await genericMethod.pause(2000);
        // await genericMethod.click(this.pickupbutton, 'pickupbutton');
        // await genericMethod.pause(2000);
        // await genericMethod.click(this.ManagePrs, 'ManagePrs');
        // await genericMethod.pause(2000);
        // await genericMethod.click(this.Pickup_request, 'Pickup_request');
        // await genericMethod.pause(2000);
        // await genericMethod.click(this.Assigned, 'Assigned');

    }

async Profilebutton()
   {
        await genericMethod.pause(3000);
        await genericMethod.click(this.name_logout, 'name_logout');
        }

async logout() {
        await genericMethod.click(this.signOut, 'signOut');
    }
async CELOGIN(){
         await genericMethod.CE_URL();
    }   
async CEclickSubmit(){
    await genericMethod.click(this.submit, 'submit');
    await genericMethod.pause(2000);
    //await genericMethod.Takescreenshot();
    //await assertions.verifyEquals(this.Pickup,'');
    await genericMethod.duplicateTAB(1);
    await genericMethod.pause(2000);
    await genericMethod.switchToTab(0);
    await genericMethod.pause(2000);
   }
 
   async pickupCheck(pickup: string) {
    var p = await genericMethod.getText(this.Pickup,'');
    await assertions.verifyEquals(p,pickup);
    
  }
  

}



