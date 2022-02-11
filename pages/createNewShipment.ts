import internal = require('assert');
import { browser, element, by, ActionSequence, protractor, $ } from 'protractor';
import { Assertions } from '../utils/Assertions';
import { GenericMethod } from "../utils/GenericMethod";

const genericMethod: GenericMethod = new GenericMethod();
const assertions: Assertions = new Assertions();

export class CreateNewShipmentPage{
    public static waybillNumber;

    email = element(by.xpath('//input[@formcontrolname="email"]'));
    password = element(by.xpath('//input[@formcontrolname="password"]'));
    submit = element(by.xpath('//button[@type="submit"]'));
    mousehover = element(by.xpath('//div[@class="kt-aside__brand-tools"]'));
    bookings =  element(by.xpath('//span[contains(text(),"Bookings")]'));
    createNewShipment = element(by.xpath('//span[contains(text(),"Create new shipment")]'));
    standardDelivery = element(by.xpath('//button[contains(text(),"Standard Delivery")]'));
    DomesticShipment = element(by.xpath('//button[contains(text(),"Domestic Shipment")]'));
    nextButton =  element(by.xpath('//div[contains(text(),"Next Step")]'));
    deliveryCompanyName = element(by.xpath('//input[@ng-reflect-name="deliveryCompanyName"]'));
    deliveryName = element(by.xpath('//input[@formcontrolname="deliveryName"]'));
    deliveryCountry = element(by.xpath('//input[@formcontrolname="deliveryCountry"]'));
    deliveryPostalcode =  element(by.xpath('//input[@formcontrolname="deliveryPostalCode"]'));
    deliveryState = element(by.xpath('//input[@name="deliveryState"]'));
    deliveryCity = element(by.xpath('//input[@formcontrolname="deliveryCity"]'));
    deliveryUnit = element(by.xpath('//input[@formcontrolname="deliveryUnit"]'));
    deliveryAddress = element(by.xpath('//input[@formcontrolname="deliveryAddress"]'));
    deliveryAddress2 = element(by.xpath('//input[@formcontrolname="deliveryAddress2"]'));
    deliveryAddress3 = element(by.xpath('//span[contains(@class,"mat-option-text")]'));
    add2_option = element(by.xpath('//span[@class="mat-option-text"]'));
    deliveryEmail = element(by.xpath('//input[@formcontrolname="deliveryEmail"]'));
    deliveryPhnNumber = element(by.xpath('//input[@formcontrolname="deliveryPhnNumber"]'));
    deliveryIcNumber = element(by.xpath('//input[@formcontrolname="deliveryICNumber"]'));
    serviceType = element(by.xpath('//mat-select[@formcontrolname="serviceTypeInParcel"]'));
    //serviceType_opn = element(by.xpath('//span[contains(text(),"EXPRESSS01")]'));
    serviceType_opn = element(by.xpath('//span[contains(@class,"mat-option-text")]'));
    serviceType_drpdwn = element(by.xpath('//span[contains(text(),"ST00000105(DEB123)")]'));
    shipmentTypeTab = element(by.xpath('//mat-select[@formcontrolname="parcelOption"]'));
    shipment_option = element(by.xpath('//span[contains(text(),"Package")]//parent::mat-option'));
    modeTab = element(by.xpath('//mat-select[@formcontrolname="shipOption"]'));
    mode_option = element(by.xpath('//span[contains(text(),"Pickup")]//parent::mat-option'));
    //mode_option = element(by.xpath('//span[contains(text(),"Lodge In / Walk In")]'));
    waybill = element(by.xpath('//*[@formcontrolname="wayBillNumber"]'));
    packageQuantity = element(by.xpath('//input[@formcontrolname="packageQuantity"]'));
    packageWeight = element(by.xpath('//input[@formcontrolname="packageWeight"]'));
    packageType = element(by.xpath('//mat-select[@formcontrolname="packagingType"]'));
    packageType_option = element(by.xpath('//span[contains(text(),"Standard Package")]//parent::mat-option'));
    width = element(by.xpath('//input[@formcontrolname="dimensionX"]'));
    height = element(by.xpath('//input[@formcontrolname="dimensionY"]'));
    length = element(by.xpath('//input[@formcontrolname="dimensionZ"]'));
    attachment = element(by.xpath('//input[@type="file"]'));
    addPackage = element(by.xpath('//button[contains(text(),"Add Package")]'));
    totalAmount = element(by.xpath('//label[contains(@class,"totalAmount")]'));
    SubmitButton = element(by.xpath('//button[contains(text(),"Submit")]'));
    Close = element(by.xpath('//mat-icon[@id="close-icon"]'));
    shipmentManagement = element(by.xpath('//span[contains(text(),"Shipment Management")]'));
    WaybillNumber = element(by.xpath('//input[@formcontrolname="waybillNumber"]'));
    searchbtn = element(by.xpath('//span[contains(text(),"Search")]'));
    status_grid = element(by.xpath('//span[contains(text(),"Order Placed")]'));
    CE_email = element(by.xpath('//input[@formcontrolname="email"]'));
    CE_password = element(by.xpath('//input[@formcontrolname="password"]'));
    CE_signin = element(by.xpath('//button[contains(text(),"Sign In")]'));
    ViewAndTrack = element(by.xpath('//span[contains(text(),"View and Track")]'));
    Operation = element(by.xpath('//a[@href="#/view-track/operation"]'));
    waybill_summary = element(by.xpath('//label[contains(text(),"ZND")]'));
    CE_waybill = element(by.xpath('//input[@placeholder="Way Bill No"]'));
    Track_btn = element(by.xpath('//span[contains(text(),"Track")]//parent::button'));
    pay_btn = element(by.xpath('//button[contains(text(),"Pay")]'));
    selectBank = element(by.xpath('//option[contains(text(),"Select Bank")]'));
    bank = element(by.xpath('//option[contains(text(),"Affin Bank")]'));
    proceed_btn = element(by.xpath('//span[contains(text(),"Proceed")]'));
    
        
async enterEmail(email:string){
    await genericMethod.clickAndSendKeys(this.email,email,'email');

}
async enterPassword(password:string){
    await genericMethod.clickAndSendKeys(this.password,password,'password');

}async clickSubmit(){
    await genericMethod.click(this.submit,'submit');

}

async clickOnMousehover() {
    await genericMethod.click(this.mousehover,'click');
}
async clickOnBooking() {
    await genericMethod.clickUsingJs(this.bookings, 'booking');
}
    async navigateToCreateNewShipment() {
        await genericMethod.clickUsingJs(this.createNewShipment,'createnewShipment');
    }
    
    async clickStandardDelivery() {
        await genericMethod.click(this.standardDelivery, 'standardDelivery');
    }

    async clickNextButton() {
        await genericMethod.click(this.nextButton, 'nextButton');
        await genericMethod.pause(5000);
    }

    
    async enterDeliveryCompanyName(companyName: string){
        await genericMethod.sendKeys(this.deliveryCompanyName, companyName,'deliveryCompanyName');
    }

    async enterDeliveryName(name: string){
        await genericMethod.sendKeys(this.deliveryName, name,'deliveryName');
    }
    async verifyDeliveryCountry(country: string){
        const actualCountry =  await genericMethod.getValue(this.deliveryCountry , 'deliveryCountry');
        await assertions.verifyEquals(country, actualCountry);
    }

    async enterDeliveryPostalcode(postalCode: string){
        await genericMethod.clickAndSendKeys(this.deliveryPostalcode, postalCode,'deliveryPostalcode', true);
        await genericMethod.pause(3000);
    }
    async verifyDeliveryState(state: string){
        const actualState =  await genericMethod.getValue(this.deliveryState , 'deliveryState');
        await assertions.verifyEquals(state, actualState);
    }

    async verifyDeliveryCity(deliveryCity: string){
        const actualCity =  await genericMethod.getValue(this.deliveryCity , 'deliveryCity');
        await assertions.verifyEquals(deliveryCity, actualCity);
        await genericMethod.pause(3000);
    }

    async enterDeliveryUnit(buildingUnit: string){
        await genericMethod.clickAndSendKeys(this.deliveryUnit, buildingUnit,'buildingUnit');
    }

    async enterDeliveryAddress(address: string){
        await genericMethod.clickAndSendKeys(this.deliveryAddress, address,'deliveryAddress');
    }

    async enterDeliveryAddress2(address2: string){
        await genericMethod.clickAndSendKeys(this.deliveryAddress2, address2,'deliveryAddress2');
        await genericMethod.click(this.deliveryAddress3,'')
        
    }

    async enterDeliveryEmail(email: string){
        await genericMethod.clickAndSendKeys(this.deliveryEmail, email,'deliveryEmail');
    }

    async enterDeliveryPhNo(phone: string){
        await genericMethod.clickAndSendKeys(this.deliveryPhnNumber, phone,'deliveryPhNo');
    }

    async enterDeliveryIcNumber(icNumber: string){
        await genericMethod.clickAndSendKeys(this.deliveryIcNumber, icNumber,'deliveryIcNumber');
    }

    async selectServiceType(type:string) {
        await genericMethod.clickUsingJs(this.serviceType,'serviceType');
        await genericMethod.clickIfDisplayed(this.serviceType_drpdwn,'Frozen');
    } 
    async selectServiceTypePU(type:string) {
        await genericMethod.clickUsingJs(this.serviceType,'serviceType');
        await genericMethod.clickIfDisplayed(this.serviceType_opn,'SSD000');
    
    }
    
    async selectShipmentType(type: string){
        const shipment = element(by.xpath('//*[contains(@ng-reflect-value,"'+type+'")]'));
        await genericMethod.clickUsingJs(this.shipmentTypeTab, 'shipmentTypeTab');
        await genericMethod.click(shipment, type)
    }
    async selectMode(Mode:string) {
        await genericMethod.clickUsingJs(this.modeTab,'clicked');
        await genericMethod.clickIfDisplayed(this.mode_option,'Pickup');
    }
    async FetchWayBill(fileName:string,sheetName:string,row:number,col:number) {
        await genericMethod.clickUsingJs(this.waybill,'waybill');
        var bill = await genericMethod.getValue(this.waybill, 'waybill');
        console.log(bill);
        const filepath = "//Data//" + fileName;
        const sheet = await genericMethod.WriteData(bill,filepath, sheetName,row,col);
        
     
    }

    
    
    async enterPackageQuantity(quantity: string){
        await genericMethod.sendKeys(this.packageQuantity, quantity, 'packageQuantity', true);
        await genericMethod.pause(3000);
        await genericMethod.click(this.addPackage, 'addPackage',false);
    }

    async enterPackageWeight(weight: string){
        await genericMethod.sendKeys(this.packageWeight, weight, 'packageWeight');
    }

    async enterPackageWidth(width: string){
        await genericMethod.sendKeys(this.width, width, 'width');
    }

    async enterPackageHeight(height: string){
        await genericMethod.sendKeys(this.height, height, 'height');
    }

    async enterPackageLength(length: string){
        await genericMethod.sendKeys(this.length, length, 'length');
    }

    async verifyPackageType(type: string){
        const packageType =  element(by.xpath('//span[text()="'+type+'"]'));
        const isDisplayed  = await assertions.verifyElementDisplayed(packageType, 'packageType');
        await assertions.verifyConditionIsTrue(isDisplayed);
    }
    async uploadDropAttachment(fileName:string) {
        const filepath = "//uploads//" + fileName;
        await genericMethod.pause(5000);
        await genericMethod.upload(this.attachment,filepath);
             
    }
    
    
    async verifyTotalAmount(expectedAmount) {
        const amount = element(by.xpath('//label[contains(text(),"'+expectedAmount+'")]'));
        await genericMethod.waitForElementToBeVisible(amount, expectedAmount)
        const actualAmount = await genericMethod.getText(this.totalAmount, 'totalAmount');
        await assertions.verifyContains(expectedAmount, actualAmount)
        
        }
        async TotalAmount(Amount:string) {
            const amount = element(by.xpath('//label[contains(text(),"'+Amount+'")]'));
            await genericMethod.waitForElementToBeVisible(amount, Amount)
            const actualAmount = await genericMethod.getText(this.totalAmount, 'totalAmount');
            await assertions.verifyContains(Amount, actualAmount)
        }
        
    async clickOnSubmitButton() {
        await genericMethod.pause(20000);
        await genericMethod.scrollIntoView(this.SubmitButton,'clicked');
        await genericMethod.clickUsingJs(this.SubmitButton,'clicked');
    }
    async clickOnClosebtn() {
        await genericMethod.clickUsingJs(this.Close,'clicked');
    }

    async clickNextButtonSummary() {
        await genericMethod.clickUsingJs(this.Close,'clicked');
        await genericMethod.pause(5000);
    }

    async clickOnShipmentmanagement() {
        await genericMethod.click(this.shipmentManagement,'clicked');
        await genericMethod.pause(5000);
    }    
    async enterWaybillnum(fileName:string, sheetName:string, RowNum:number, columnNum:number) {
        
        await  genericMethod.clickUsingJs(this.WaybillNumber,'');
       const filepath = "//Data//" + fileName;
       const waybill = await genericMethod.getExcelData(filepath, sheetName,RowNum,columnNum);
       await genericMethod.sendKeys(this.WaybillNumber,waybill,'');

    }
    async clickOnSearch() {
        await genericMethod.clickUsingJs(this.searchbtn,'clicked');
    }
    async verifyOrderStatus(expectedValue:string) {
        const actualValue = await genericMethod.getText(this.status_grid,'');
        await assertions.verifyContains(expectedValue,actualValue);
    
    }
    //////////////////////personal user//////////////////////////////////
    async clickOnPay() {
        await genericMethod.click(this.pay_btn,'clicked');
    }
    async clickonBank(bank:string) {
        await genericMethod.click(this.selectBank,'selectbank');
        await genericMethod.click(this.bank,'bankName');
    }
     async clickOnProceed() {
        await genericMethod.click(this.proceed_btn,'clicked');
        await genericMethod.pause(5000);
        await genericMethod.click(this.Close,'');

    }
    async fetchWaybill_summary(fileName:string,sheetName:string,row:number,column:number) {
        await genericMethod.clickUsingJs(this.waybill_summary,'');
         var waybill = await genericMethod.getText(this.waybill_summary,'');
          const filepath = "//Data//" + fileName;
        const sheet = await genericMethod.WriteData(waybill,filepath, sheetName,row,column);
     

    }


    
    
}