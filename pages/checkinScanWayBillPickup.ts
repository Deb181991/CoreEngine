import { browser, element, by, ElementFinder } from 'protractor';
import { Assertions } from '../utils/Assertions';
import { GenericMethod } from "../utils/GenericMethod";
const assertions: Assertions = new Assertions();
const genericMethod: GenericMethod = new GenericMethod();

export class CheckinScanPickup{
email=element(by.xpath('//input[@formcontrolname="email"]'));
password=element(by.xpath('//input[@formcontrolname="password"]'));
signInBtn=element(by.xpath('//button[text()="Sign In"]'));
booking=element(by.xpath("//span[text()='Booking']//parent::a"));
checkinScanPickup=element(by.xpath('//span[text()="Checkin Scan Pickup"]//parent::a'));
checkInScanText=element(by.xpath('//h3[text()="Checkin Scan Pickup"]'));
wayBilltextField=element(by.xpath('//input[@formcontrolname="WaybillNo"]'));
plusButton=element(by.xpath('//mat-icon[text()=" add_circle_outline "]/..//parent::button'));
branchCode=element(by.xpath('//input[@formcontrolname="pickupZone"]'));
dsmlOption=element(by.xpath('//span[text()=" DSML "]//parent::mat-option'));
okBtn=element(by.xpath('//span[text()="OK"]//parent::button'));
successFullMessage=element(by.xpath('//span[contains(text(),"successfully.")]'));
viewTrack=element(by.xpath('//span[text()="View and Track"]//parent::a'));
csWebSiteTracking=element(by.xpath('//span[text()="CS Website Tracking"]'));
operation=element(by.xpath('//a[@href="#/view-track/operation"]'));
operationText=element(by.xpath('//h3[text()="Operation"]'));
waybillTF=element(by.xpath('//input[@placeholder="Way Bill No"]'));
trackBtn=element(by.xpath('//span[text()="Track"]//parent::button'));
shipment=element(by.xpath('//table[@class="table table-bordered"]'));
viewBtn=element(by.xpath('//mat-icon[@mattooltip="View"]/..//parent::button'));
trackBtnn=element(by.xpath('//mat-icon[text()=" location_searching"]/..//parent::button'));
//status=element(by.xpath('//label[text()="Status :"]/../..//div[text()=" Checked In at Pickup Branch "]'));
status=element(by.xpath('(//div[contains(text()," Checked ")])[1]'));
status2 = element(by.xpath('//label[contains(text(),"Status :")]'));


async launchUrl() {
    await genericMethod.navigateTo(browser.baseUrl);
}
async enterEmail(email : string) {
    await genericMethod.clickAndSendKeys(this.email,email,'email');
}
async enterPassword(password: string) {
    await genericMethod.clickAndSendKeys(this.password,password,'password');
}
async clickOnSignIn() {
    await genericMethod.clickUsingJs(this.signInBtn,'sign in button');
}
async verifyCEPage(expectedTitle: string) {
    await genericMethod.pause(10000);
    const actualTitle=await genericMethod.getTitle();
    await assertions.verifyEquals(expectedTitle,actualTitle);
}

//////////////////////////////////////////Checkin/////////////////////////////////////

async clickOnBooking() {
    //await genericMethod.scrollIntoView(this.booking,'booking');
    await genericMethod.refreshPage();
    await genericMethod.clickUsingJs(this.booking,'booking');
}
async clickOnCheckinScanPickup() {
    await genericMethod.clickUsingJs(this.checkinScanPickup,'checkin scan pickup');
}
async verifyCheckInScanPickup(expectedText:string) {
    await genericMethod.pause(10000);
    const actualText=await genericMethod.getText(this.checkInScanText,'checkin scan pickup');
    await assertions.verifyEquals(expectedText,actualText); 
}
async enterWayBill(fileName:string,sheetName:string,RowNum:number,col:number) {
    const filepath="//Data//" +fileName;
      const waybill=await genericMethod.getExcelData(filepath,sheetName,RowNum,col);
      await genericMethod.clickAndSendKeys(this.wayBilltextField,waybill,'');
}
async clickOnPlusBtn() {
    await genericMethod.clickUsingJs(this.plusButton,'');
}
async enterDataInBranchCode(branchCode:string) {
    await genericMethod.clickAndSendKeys(this.branchCode,branchCode,'');
}
async clickOnDsml() {
    await genericMethod.clickUsingJs(this.dsmlOption,'');
}
async clickOnOkBtn() {
    await genericMethod.clickUsingJs(this.okBtn,'');
}
async verifySuccessPopup() {
    await assertions.verifyElementDisplayed(this.successFullMessage,'');
    await genericMethod.pause(4000);
}

async Switch_win() {
    await genericMethod.switchToTab(1);
}

async CheckinStatus() {
    await genericMethod.clickUsingJs(this.viewTrack,'');
}

async clickOnViewTrack() {
    await genericMethod.clickUsingJs(this.viewTrack,'');
}
async clickOnOperation() {
    await genericMethod.clickUsingJs(this.operation,'');
}
async verifyOperationPage(expectedText: string) {
    const actualText=await genericMethod.getText(this.operationText,'');
    console.log(actualText);
    await assertions.verifyContains(expectedText,actualText);
}
async waybill(fileName:string,sheetName:string,RowNum:number,col:number) {
    const filepath="//Data//" +fileName;
    const waybill=await genericMethod.getExcelData(filepath,sheetName,RowNum,col);
    await genericMethod.clickAndSendKeys(this.waybillTF,waybill,'',true);
    
}
async clicktrackBtn() {
    await genericMethod.clickUsingJs(this.trackBtn,'');
}
async verifyShipment() {
    await assertions.verifyElementDisplayed(this.shipment,'');
}
async clickOnViewBtn() {
    await genericMethod.clickUsingJs(this.viewBtn,'');
}
async CheckinverifyStatus(expectedText: string) {
    await genericMethod.click(this.status2,'');
    const actualText=await genericMethod.getText(this.status,'');
    console.log(actualText);
    await assertions.verifyContains(expectedText,actualText);
    await genericMethod.pause(2000);
    await genericMethod.switchToTab(0)

  }
}