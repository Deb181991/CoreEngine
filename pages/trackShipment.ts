import { browser, by, element, ElementFinder } from "protractor";
import { Assertions } from "../utils/Assertions";
import { GenericMethod } from "../utils/GenericMethod";


const assertions: Assertions = new Assertions();
const genericMethod: GenericMethod = new GenericMethod();

export class trackShipment {


    uName = element(by.xpath('//*[@formcontrolname="email"]'));
    pword = element(by.xpath('//*[@formcontrolname="password"]'));
    signin = element(by.id('kt_login_signin_submit'));

    ////////////////////////////////////////////////Track Shipments- OMS////////////////////////////////
    TrackShipment = element(by.xpath('//span[contains(text(),"Track Shipments")]'));
    TrackingNumber = element(by.xpath('//*[@placeholder="Provide the tracking number separated by comma.."]'));
    TrackButton = element(by.xpath('//span[contains(@class, "mat-button-wrapper" ) and text() = "Track"] '));
    BookedDate = element(by.xpath('//div[contains(text(),"Booked Date")]'));
    fromDatailsOMS = element(by.xpath('//span[contains(text(),"From :")]'));
    ToDatailsOMS = element(by.xpath('//span[contains(text(),"To :")]'));
    ShipmentListText = element(by.xpath('//h3[contains(@class,"kt-portlet__head-title ng-star-inserted")]'));
    OMSStatus = element(by.xpath('//*[@class="col-xl-8 mb-2 shipment_status"]//label'));

    ////////////////////////////////////////////////View and Track- CE////////////////////////////////
    ViewAndTrack = element(by.xpath('//span[contains(text(),"View and Track")]'));
    Operation = element(by.xpath('(//span[contains(text(),"Operation")])[2]'));
    Waybillnumber = element(by.xpath('//input[@placeholder="Way Bill No"]'));
    Trackbutton = element(by.xpath('//span[contains(@class, "mat-button-wrapper") and text() = "Track"]'));
    ToDatailsCE = element(by.xpath('//tbody//tr//td[5]'));
    fromDatailsCE = element(by.xpath('//tbody//tr//td[5]'));
    CEStatus = element(by.xpath('//kt-portlet-body/div[1]/div[2]/div[1]/div[1]/mat-card[1]/div[4]/div[2]'));
    Awaybill= element(by.xpath('//input[@placeholder="Way Bill No"]'));

    async launchUrl() {
        await browser.waitForAngularEnabled(false);
        await genericMethod.navigateTo(browser.baseUrl);
    }

    async verifyNavigation() {
        const isUserNameDisplayed = await assertions.verifyElementDisplayed(this.uName, 'userName');
        const isPasswordDisplayed = await assertions.verifyElementDisplayed(this.pword, 'password');
    }

    async enterEmail(userName: string) {
        await genericMethod.sendKeys(this.uName, userName, 'userName');
    }

    async enterPassword(password: string) {
        await genericMethod.sendKeys(this.pword, password, 'password');
    }

    async clickSubmit() {
        await genericMethod.click(this.signin, 'submit');
        await genericMethod.pause(8000);

    }

    async ClickTrackShipment() {
        await genericMethod.mouseHoverAndClick(this.TrackShipment, 'TrackShipment');
    }

    async VerifyShipmentListText() {
        await genericMethod.waitForElementToBeVisible(this.ShipmentListText, 'ShipmentList Text Present');
    }

    async EnterTrackingNumber(fileName:string, sheetName:string, RowNum:number, columnNum:number) {
       
       await  genericMethod.clickUsingJs(this.TrackingNumber,'TrackingNumber');
       const filepath = "//Data//" + fileName;
       const waybill = await genericMethod.getExcelData(filepath,sheetName,RowNum,columnNum);
       await genericMethod.sendKeys(this.TrackingNumber,waybill,'TrackingNumber');

    }

    async ClickTrack() {
        await genericMethod.click(this.TrackButton, 'TrackshipmentButton');
    }

    async CaptureBookingDetailsOMS() {
        var BookedDate = await genericMethod.getText(this.BookedDate, 'BookedDate');
        var fromDatailsOMS = await genericMethod.getText(this.fromDatailsOMS, 'fromDatailsOMS');
        var ToDatailsOMS = await genericMethod.getText(this.ToDatailsOMS, 'ToDatailsOMS');
        console.log(BookedDate);
        console.log(fromDatailsOMS);
        console.log(ToDatailsOMS);
        
        var OMS_Status = await genericMethod.getText(this.OMSStatus, 'OMSStatus');
        console.log(OMS_Status);
        await genericMethod.WriteData(OMS_Status,"//Data/data.xlsx", "dummy", 2, 13);
    }

    async CELOGIN(){
        await genericMethod.CE_URL();
       
   }

    async ClickViewAndTrack() {
        await genericMethod.mouseHoverAndClick(this.ViewAndTrack, 'ViewAndTrack');
    }

    async ClickOperation() {
        await genericMethod.mouseHoverAndClick(this.Operation, 'Operation');
        await genericMethod.pause(5000);
    }

    async EnterWaybillnumber(fileName:string, sheetName:string) {
    
       await  genericMethod.clickUsingJs(this.Waybillnumber,'Waybillnumber');
       var filepath = "//Data//" + fileName;
       var waybill = await genericMethod.getExcelData(filepath,sheetName,3,5);
       console.log(waybill);
       await genericMethod.sendKeys(this.Waybillnumber,waybill,'');

    }

    async Clicktrack() {
        await genericMethod.click(this.Trackbutton, 'ViewAndTrackButton');
    }

    async CaptureBookingDetailsCE() {
        var fromDatailsCE = await genericMethod.getText(this.fromDatailsCE, 'fromDatailsCE');
        var ToDatailsCE = await genericMethod.getText(this.ToDatailsCE, 'ToDatailsCE');
        console.log(fromDatailsCE);
        console.log(ToDatailsCE);
    }

    async VerifyBookingDetails() {
         var OMS_Status = await genericMethod.getExcelData("//Data//data.xlsx", "dummy", 2, 13)
         console.log(OMS_Status);
        var CEStatus = await genericMethod.getText(this.CEStatus, 'CEStatus');
        console.log(CEStatus);
        await assertions.verifyEquals(OMS_Status,CEStatus);

    }




}