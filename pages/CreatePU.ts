import { browser, element, by, ActionSequence, Key, protractor, $ } from 'protractor';
import { GenericMethod } from "../utils/GenericMethod";
import { Assertions } from '../utils/Assertions';
import { LoginPage } from './Login';
import { ValueType } from 'exceljs';

const genericMethod: GenericMethod = new GenericMethod();
const assertions: Assertions = new Assertions();
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

export class CreatePU {

    pickupbutton = element(by.xpath('//span[contains(@class, "kt-menu__link-text ng-star-inserted") and text() = "Pickup"]'));
    CreatePU = element (by.xpath('//span[contains(text(),"Create PU")]'));
    AccountPU = element(by.xpath('//input[@placeholder="Account"]'));
    clickaccnt = element(by.xpath('//mat-option[@class="mat-option ng-star-inserted mat-active"]'));
    postcode = element(by.xpath('//input[@placeholder="Pickup Postcode"]'));
    State = element(by.xpath('//input[@placeholder="Pickup State"]'));
    City = element(by.xpath('//input[@placeholder="Pickup City"]'));
    building_Unitnumber = element(by.xpath('//input[@placeholder="Pickup Building/Unit Number"]'));
    address = element(by.xpath('//input[@placeholder="Pickup Address"]'));
    address2 = element(by.xpath('//input[@placeholder="Pickup Address 2"]'));
    BranchCode = element(by.xpath('//input[@placeholder="Branch Code"]'));
    ContactPerson = element(by.xpath('//input[@placeholder="Contact Person"]'));
    phonenumber = element(by.xpath('//input[@placeholder="PhoneNumber"]'));
    Remarks = element(by.xpath('//input[@placeholder="Remarks"]'));
    Routeld = element(by.xpath('//input[@placeholder="Pickup RouteId"]'));
    NOP = element(by.xpath('//input[@placeholder="Number Of Packages"]'));
    Submit = element(by.xpath('//span[contains(text(),"Submit")]'));
    ManageRPS = element(by.xpath('//span[contains(text(),"Manage PRS")]'));
    PRSTab = element(by.xpath('//div[contains(text(),"Pickup Runsheet")]'))
    PURTab = element(by.xpath('//div[contains(text(),"Pickup Request")]'))
    PRSN = element(by.xpath('//input[@formcontrolname="prsNumber"]'));
    PUN = element(by.xpath('//input[@formcontrolname="puNumber"]'));
    Branchcode  = element(by.xpath('//input[@formcontrolname="loggedUserBranchCode"]'));
    PFDN = element(by.xpath('//input[@formcontrolname="fromDate"]'));
    PRSTD = element(by.xpath('//input[@formcontrolname="toDate"]'));
    Waybillnumber = element(by.xpath('//input[@formcontrolname="wayBillNumber"]'));
    customer_code = element(by.xpath('//*[@id="kt_content"]/div/kt-pickup/kt-create-prs/div[1]/div/kt-portlet/div/kt-portlet-body/form/div/div[2]/mat-form-field/div/div[1]/div'));
    successmsg = element(by.xpath('//span[contains(text(),"Your pick up")]'));

    async navigateToPickup() {
        await genericMethod.mouseHoverAndClick(this.pickupbutton, 'pickupbutton');
    }
    async clickcreatepu() {
        await genericMethod.mouseHoverAndClick(this.CreatePU, 'CreatePU');
        await genericMethod.pause(10000);
    }
    
    async AccPU(AccountPU:string) {
        await genericMethod.sendKeys(this.AccountPU, AccountPU, 'AccountPU');
        await browser.actions().sendKeys(Key.TAB).perform();
         
    }
    
    async postcodePU(postcode:string) {
        await genericMethod.sendKeys(this.postcode, postcode, 'postcode');
        await browser.actions().sendKeys(Key.TAB).perform();
        await browser.actions().sendKeys(Key.TAB).perform();
        await browser.actions().sendKeys(Key.TAB).perform();
         
    }
    async buildingUnitnumber_PU(buildingUnitnumber_PU:string) {
        
        await genericMethod.sendKeys(this.building_Unitnumber, buildingUnitnumber_PU, 'building_Unitnumber');
        await browser.actions().sendKeys(Key.TAB).perform();
    }
    async addressPU(address:string) {
        await genericMethod.sendKeys(this.address, address, 'address');
        await browser.actions().sendKeys(Key.TAB).perform();
         
    }
    async addresstwoPU(address2:string) {
        await genericMethod.clickAndSendKeys(this.address2, address2, 'address2');
        await browser.actions().sendKeys(Key.TAB).perform();

    }
    
    async ContactPersonPU(ContactPerson:string) {
        await genericMethod.sendKeys(this.ContactPerson, ContactPerson, 'ContactPerson');
        await browser.actions().sendKeys(Key.TAB).perform();
         
    }
    
    async phonenumberPU(phonenumber:string) {
        await genericMethod.sendKeys(this.phonenumber, phonenumber, 'phonenumber');
        await browser.actions().sendKeys(Key.TAB).perform();
         
    }
    async RemarksPU(Remarks:string) {
        await genericMethod.sendKeys(this.Remarks, Remarks, 'Remarks');
        await browser.actions().sendKeys(Key.TAB).perform();
         
    }
    async RouteldPU(Routeld:string) {
        await genericMethod.sendKeys(this.Routeld, Routeld, 'Routeld');
        await browser.actions().sendKeys(Key.TAB).perform();
         
    }
    async Numofpackage(NOP:string) {
        await genericMethod.sendKeys(this.NOP, NOP, 'NOP');

    }

    async SubmitPU() {
        await genericMethod.pause(3000);
        await genericMethod.mouseHoverAndClick(this.Submit, 'Submit');
        console.log('PU Successful');
    }

    async VerifySuccessmessage(){
        var actualValue = await genericMethod.getText(this.successmsg,'');
        console.log(actualValue);
    }

}
