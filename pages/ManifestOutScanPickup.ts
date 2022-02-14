import { browser, element, by, ElementFinder } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { Assertions } from '../utils/Assertions';
import { GenericMethod } from "../utils/GenericMethod";

const assertions: Assertions = new Assertions();
const genericMethod: GenericMethod = new GenericMethod();

browser.manage().timeouts().implicitlyWait(40000);

export class ManifestOutPickup {

    manifest = element.all(by.xpath('//span[text()="Manifest"]')).first();
    manifestOutScanPickup = element(by.xpath('//span[text()="Manifest Out Scan Pickup"]'));
    serviceTypeField = element(by.xpath('//mat-select[@placeholder="Service Type"]'));
    cageId = element(by.xpath('//input[@placeholder= "Cage Id"]'));
    nxtHubCode = element(by.xpath('//input[@placeholder= "Next Hub Code"]'));
    bagSealNo = element(by.xpath('//input[@placeholder= "Bag Seal Number"]'));
    waybillno = element(by.xpath('//input[@formcontrolname= "WaybillNo"]'));
    scanWayBill = element(by.xpath('//button[@class="mat-icon-button mat-button-base mat-primary ng-star-inserted"]'));
    Remove_action = element(by.xpath('(//mat-icon[contains(text(),"remove_circle_outline")])[1]'));
    submit = element(by.xpath('//button[@type="Submit"]'));
    manifestText = element(by.xpath('//span[contains(text(),"successfully created")]'));
    branchCodePopUp = element(by.xpath('//input[@formcontrolname="pickupZone"]'));
    branchCodeOkButton = element(by.xpath('//span[contains(text(),"OK")]'));
    //status = element(by.xpath('//div[contains(text()," Manifest Out Scan completed at Pickup branch ")]'));
    status = element(by.xpath('(//div[contains(text(),"Manifest ")])[1]'));
    viewBtn = element(by.xpath('//mat-icon[@mattooltip="View"]/..//parent::button'));
    trackBtnn = element(by.xpath('//mat-icon[text()=" location_searching"]/..//parent::button'));
    viewTrack=element(by.xpath('//span[text()="View and Track"]'));
    operation=element(by.xpath('//a[@href="#/view-track/operation"]'));
    //trackBtn=element(by.xpath('//span[text()="Track"]//parent::button'));
    trackBtn=element(by.xpath('(//span[contains(text(),"Track")])[3]'));
    waybillnoOpp = element(by.xpath('//input[@placeholder="Way Bill No"]'));
    HubBrachclick = element(by.xpath('//span[contains(@class,"mat-option-text")]'));
    manifestId = element(by.xpath('//input[@formcontrolname= "manifestId"]'));
    cageId2 = element(by.xpath('//input[@formcontrolname= "cageId"]'));
    status2 = element(by.xpath('//label[contains(text(),"Status :")]'));
    // manifestText=element(by.xpath('//simple-snack-bar[@class ="mat-simple-snackbar ng-star-inserted"]'));
    booking=element(by.xpath("//span[text()='Booking']//parent::a"));


    async clickManifest() {
        await genericMethod.click(this.manifest, 'manifest', false);
    }

    async clickManifestOutScanPickup() {
        await genericMethod.click(this.manifestOutScanPickup, 'manifestOutScanPickup', false);
    }

    async enterServiceType(serviceType: string) {
        
        await genericMethod.click(this.serviceTypeField, 'serviceTypeField');
        await genericMethod.pause(1000);
        const serviceTypePath = element(by.xpath('//span[contains(text(),"' + serviceType + '")]'))
        await genericMethod.click(serviceTypePath, 'serviceTypePath');

    }

    async enterCageId(cageId: string) {

        await genericMethod.sendKeys(this.cageId, cageId, 'cageId');

    }

    async enterNextHubCode(hubCode: string) {

        await genericMethod.sendKeys(this.nxtHubCode, hubCode, 'hubCode');
        await genericMethod.click(this.HubBrachclick,'');

    }

    async enterBagSealNum(fileName: string, sheetName: string, row: number, column: number) {
        await genericMethod.click(this.bagSealNo,'bagSealNo');
        var filepath = "//Data//" + fileName;
        var Bagseal = await genericMethod.Increment(filepath, sheetName, row, column);
        console.log(Bagseal);
        await genericMethod.sendKeys(this.bagSealNo, Bagseal, 'bagSealNo');
        //await genericMethod.sendKeys(this.bagSealNo, bagSealNo, 'bagSealNo');
        ////////////optional////////////////////
        var bagsealsave = await genericMethod.getValue(this.bagSealNo,'bagSealNo');
        var filepath = "//Data//" + fileName;
        await genericMethod.WriteData(bagsealsave,filepath, sheetName, row, column);
        var c = Bagseal+"Zzr";
        console.log(c);
        await genericMethod.sendKeys(this.bagSealNo, c, 'bagSealNo');
    }

    async SaveBagSealNum(fileName: string, sheetName: string, row: number, column: number) {
        await genericMethod.click(this.bagSealNo,'bagSealNo');
        var bagsealsave = await genericMethod.getValue(this.bagSealNo,'bagSealNo');
        var filepath = "//Data//" + fileName;
        await genericMethod.WriteData(bagsealsave,filepath, sheetName, row, column);
    }


    async enterWaybill(fileName: string, sheetName: string, row: number, column: number) {

        await genericMethod.clickUsingJs(this.waybillno, 'Waybillnumber');
        var filepath = "//Data//" + fileName;
        var waybill = await genericMethod.getExcelData(filepath, sheetName, row, column);
        console.log(waybill);
        await genericMethod.sendKeys(this.waybillno, waybill, 'Waybillnumber');
        await genericMethod.click(this.scanWayBill, 'scanWayBill');
        await genericMethod.click(this.Remove_action,'');

    }

    

    async clickSubmit() {
        await genericMethod.click(this.submit, 'submit', false);

    }

    async enterBranch(branch: string) {

        await genericMethod.clickAndSendKeys(this.branchCodePopUp, branch, 'branch');
        await genericMethod.click(this.HubBrachclick,'');
        await genericMethod.click(this.branchCodeOkButton, 'branchCodeOkButton');
        await genericMethod.click(this.submit, 'submit');
        await genericMethod.pause(7000);
        
    }

    async getBagSealNumber(bagseal: string,filename: string, sheetName: string ,row: number, column: number) {
        
        const filepath = "//Data//" + filename;
        await genericMethod.WriteData(bagseal, filepath, sheetName,row,column);

    }

    async clickOnViewTrack() {
        //await genericMethod.dupicateTAB(1);
        //await genericMethod.pause(2000);
        //await genericMethod.clickUsingJs(this.booking,'booking');
        //await genericMethod.click(this.manifest,'');
        await genericMethod.switchToTab(1);
        await genericMethod.clickUsingJs(this.viewTrack, 'viewTrack');
    }
    async clickOnOperation() {
        await genericMethod.clickUsingJs(this.operation, '');
        await genericMethod.pause(2000);

    }
    async enterWaybillOpp(fileName: string, sheetName: string, row: number, column: number) {

        await genericMethod.clickUsingJs(this.waybillnoOpp, 'Waybillnumber');
        var filepath = "//Data//" + fileName;
        var waybill = await genericMethod.getExcelData(filepath, sheetName, row, column);
        console.log(waybill);
        await genericMethod.sendKeys(this.waybillnoOpp, waybill, 'Waybillnumber');
        await genericMethod.click(this.manifestId,''); 
    }

    async ClickANDTrack() {
        //await genericMethod.click(this.manifestId,'');
        await genericMethod.clickUsingJs(this.trackBtn, '');
        //await genericMethod.clickUsingJs(this.trackBtn, '');
        await genericMethod.pause(6000);
        //await genericMethod.switchToTab(0)  
    }

async CLICKCAGE(){
        await genericMethod.click(this.cageId2,'');
    }    
async MOVETRACKPAGE(){
    await genericMethod.switchToTab(1);
    await genericMethod.refreshPage();
}

    async verifyStatus(expectedText: string) {
        //await genericMethod.click(this.status2,'');
        await genericMethod.scrollIntoView(this.status2,'');
        const actualText = await genericMethod.getText(this.status, '');
        console.log(actualText);
        await assertions.verifyContains(expectedText, actualText);
        await genericMethod.pause(3000);
    }
    async Switch_win(){
        await genericMethod.switchToTab(0);
    }
    async SwitchToMainPage(){
        await genericMethod.switchToTab(1);
    }

    async TrackButton(){
        await genericMethod.switchToTab(1);
        await genericMethod.clickUsingJs(this.trackBtn, '');
        await genericMethod.pause(6000);
    }
}










