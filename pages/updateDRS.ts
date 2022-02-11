import internal = require('assert');
import { browser, element, by, ActionSequence, protractor, $ } from 'protractor';
import { Assertions } from '../utils/Assertions';
import { GenericMethod } from "../utils/GenericMethod";

const genericMethod: GenericMethod = new GenericMethod();
const assertions: Assertions = new Assertions();

export class updateDRSPage{
    userName = element(by.xpath('//*[@formcontrolname="email"]'));
    password = element(by.xpath('//*[@formcontrolname="password"]'));
    signIn = element(by.xpath('//button[contains(text(),"Sign In")]'));
////////////////////////////DRS SCAN///////////////////////////
    Delivery = element(by.xpath('//span[contains(@class, "kt-menu__link-text ng-star-inserted") and text() = "Delivery"]'));
    DRSScan_Button = element(by.xpath('//span[contains(@class, "kt-menu__link-text ng-star-inserted") and text() = "DRS Scan"]'));
    VehicleNumber = element(by.xpath('//input[@formcontrolname= "vehicleNumber"]'));
    vehicle_drpdwn = element(by.xpath('//span[contains(text(),"ABC123")]'));
    Next_Button = element(by.xpath('(//span[contains(text(),"Next")])[1]'));
    Next = element(by.xpath('(//span[contains(text(),"Next")])[2]'));
    Courier = element(by.xpath('//input[@formcontrolname= "courier"]'));
    courier_drpdwn = element(by.xpath('(//span[@class="mat-option-text"])[1]'));
    StartingKM = element(by.xpath('//input[@formcontrolname= "startingKMs"]'));
    WaybillNum = element(by.xpath('//input[@formcontrolname="WaybillNumber"]'));
    Add_Button = element(by.xpath('//mat-icon[contains(text(),"add_circle_outline")]'));
    remove_icon=element(by.xpath('(//mat-icon[contains(text(),"remove_circle_outline")])[2]'));
    Create_Button = element(by.xpath('//span[contains(@class, "mat-button-wrapper") and text() = "Create"]'));
    BranchCode = element(by.xpath('//input[@formcontrolname="pickupZone"]'));
    BranchCode_drpdwn = element(by.xpath('//span[contains(text(),"DSML")]'));
    BranchCodeBoxOKButton = element(by.xpath('//span[contains(@class,"mat-button-wrapper") and text() = "OK"]'));
    //fetch_drs = element(by.xpath('//span[contains(text(),"Created")]'));
    drsFetch = element(by.xpath('//span[contains(text(),"DRS/")]'));
    
    /////////////////////////////////////UPDATE DRS//////////////////////////////

UpdateDRS=element(by.xpath('//span[contains(@class, "kt-menu__link-text ng-star-inserted") and text() = "Update DRS"]'));
DRSNumber= element(by.xpath('//input[@type="text"]'));
NewButton = element(by.xpath('(//td[@role="gridcell"])[5]')); 
ActionButton=element(by.xpath('//mat-icon[contains(text(),"more_vert")]'));
Update_Button = element(by.xpath('//button[contains(text()," Update ")]'));
Branch_Code = element(by.xpath('//input[@formcontrolname="branchcode"]'));
Status = element(by.xpath('//mat-select[@formcontrolname="status"]'));
Status_drpdwn = element(by.xpath('//span[contains(text(),"Delivered")]'));
//Status_drpdwn = element(by.xpath('//span[contains(text(),"Undelivered")]'));
statusDrpdwn = element(by.xpath('//span[contains(text(),"Undelivered")]'));
ICNumber = element(by.xpath('//input[@formcontrolname="icNumber"]'));
Remark = element(by.xpath('//input[@formcontrolname="remark"]'));
Remark2 = element(by.xpath('//input[@placeholder="Remark"]'));
ReceiverName = element(by.xpath('//input[@formcontrolname="receivedBy"]'));
POD = element(by.xpath('(//input[@type="file"])[1]'));
Signature = element(by.xpath('(//input[@type="file"])[2]'));
UpdateItem = element(by.xpath('//span[text()= "Update Item"]'));
Reason_undelivered = element(by.xpath('//span[contains(text(),"Reason For Undelivered")]//parent::div'));
//Reason_undelivered = element(by.xpath('//span[contains(text(),"Reason For Undelivered")]//parent::div'));
Reasonundelivered_drpdwn = element(by.xpath('//span[contains(text(),"BAD WEATHER")]'));
proof = element(by.xpath('//mat-icon[contains(text(),"create")]'));
//////////////////Manage DRS////////////////////////////////
    ManageDRS = element(by.xpath('//span[contains(text(),"Manage DRS")]'));
    //AssignViewTab = element(by.xpath('//div[contains(text(),"Assigned View")]'));
    AssignViewTab = element(by.xpath('//div[contains(@class, "mat-tab-label-content" ) and text() = "Assigned View"]'));
    
    ManageDRS_Waybill = element(by.xpath('//input[@formcontrolname="wayBillNumber"]'));
    fetchDRS = element(by.xpath('//mat-cell[contains(text(),"DRS")]'));
    DO_required = element(by.xpath('//label[contains(text(),"DO Required :")]'))
    orderDetails = element(by.xpath('//h6[contains(text(),"Order Details")]'));
    REOPENDRS = element(by.xpath('//span[contains(text(),"Reopen DRS")]'));



    async enterEmail(email:string) {
        await genericMethod.clickAndSendKeys(this.userName,email,'email');
    }

    async enterPassword(password:string) {
        await genericMethod.clickAndSendKeys(this.password,password,'password');
    }
    
    async clickOnSignin() {
        await genericMethod.click(this.signIn,'signin'); 
        
    }
    async clickOnDelivery() {
        await genericMethod.click(this.Delivery,'delivery');
    }
    async clickOnDrsScan() {
        await genericMethod.click(this.DRSScan_Button,'DRS Scan');
    }

    async enterVehicleNo(vehicle:string) {
        await genericMethod.clickAndSendKeys(this.VehicleNumber,vehicle,'AB2021');
    }

    async clickOnNext() {
        await genericMethod.click(this.Next_Button,'Nextbutton');
        
    }

    async entercourier(courier:string) {
        await genericMethod.clickAndSendKeys(this.Courier,courier,'courier');
        await genericMethod.clickUsingJs(this.courier_drpdwn,'');
    }
    async enterStratingKM(KM:string) {
        await genericMethod.clickAndSendKeys(this.StartingKM,KM,'123');
    }
    async clickNext() {
        await genericMethod.click(this.Next,'next');
    }
    async enterWaybill(fileName:string, sheetName:string, RowNum:number, columnNum:number){
        await  genericMethod.clickUsingJs(this.WaybillNum,'');
       const filepath = "//Data//" + fileName;
       const waybill = await genericMethod.getExcelData(filepath, sheetName,RowNum,columnNum);
       await genericMethod.sendKeys(this.WaybillNum,waybill,'');

    }
    async clickOnAddicon() 
    
        {
        await genericMethod.click(this.Add_Button,'ADDbutton');
        await genericMethod.mouseHoverAndClick(this.remove_icon,'remove_icon');
        }

    async cliclOnCreate() {
        await genericMethod.click(this.Create_Button,'createbutton');
    }
    async enterBranchCode(BranchCode:string) {
       await genericMethod.clickAndSendKeys(this.BranchCode,BranchCode,'');
    }
    async clickOnOK() {
        await genericMethod.clickUsingJs(this.BranchCodeBoxOKButton,'');
    }
    
///////////////////////Manage drs/////////////////////
    async clickOnManageDRS() {
        await genericMethod.click(this.ManageDRS,'manageDRS');
        await genericMethod.pause(15000);
    }
    async ClickOnAssignTab() {
        await genericMethod.mouseHoverAndClick(this.AssignViewTab,'AssignView');
        await genericMethod.pause(15000);
    }
    async enterwaybillDRS(fileName:string, sheetName:string, RowNum:number, columnNum:number) {
        await  genericMethod.clickUsingJs(this.ManageDRS_Waybill,'');
       //await  genericMethod.click(this.ManageDRS_Waybill,'');
       const filepath = "//Data//" + fileName;
       const waybill = await genericMethod.getExcelData(filepath, sheetName,RowNum,columnNum);
       await genericMethod.sendKeys(this.ManageDRS_Waybill,waybill,'',true);
       await genericMethod.pause(8000);

    }
    
    async fetchDRsno(fileName:string,sheetName:string,row:number,col:number) {
       await genericMethod.mouseHover(this.fetchDRS,'');
       var actualValue = await genericMethod.getText(this.fetchDRS,'');
       const filepath = "//Data//" + fileName;
       await genericMethod.WriteData(actualValue,filepath, sheetName,row,col);
       await genericMethod.pause(8000);

    }
///////////////////////update drs////////////
    async clickOnUpdateDRS() {
        await genericMethod.refreshPage();
        await genericMethod.pause(5000);
       // await genericMethod.click(this.REOPENDRS,'');
        //await browser.actions().sendKeys(protractor.Key.ARROW_UP).perform();
        //await browser.actions().sendKeys(protractor.Key.ARROW_UP).perform();
        await genericMethod.click(this.UpdateDRS,'');
        await genericMethod.pause(5000);
    }
    async enterDRSno(fileName:string, sheetName:string, RowNum:number, columnNum:number) {
        await  genericMethod.clickUsingJs(this.DRSNumber,'');
        const filepath = "//Data//" + fileName;
        const DRSNumber = await genericMethod.getExcelData(filepath, sheetName,RowNum,columnNum);
        await genericMethod.sendKeys(this.DRSNumber,DRSNumber,'',true);
        await genericMethod.pause(8000);

    }
    async ClickOnNew() {
        await genericMethod.click(this.NewButton,'');
    }
    async clickOnActionbtn() {
        await genericMethod.click(this.ActionButton,'Actionbutton');
        
    }
    async clickOnUpdatebtn() {
        await genericMethod.click(this.Update_Button,'Updatebutton');
        await genericMethod.pause(3000);
       
    }
    async enterbaranchCode(BranchCode:string) {   
       await genericMethod.click(this.DO_required,'');
      // await browser.actions().dragAndDrop(source,des);
        await genericMethod.clickAndSendKeys(this.Branch_Code,BranchCode,'branchcode');
        await genericMethod.click(this.BranchCode_drpdwn,'');
    }
    async selectStatus(Status:string) {
          await genericMethod.click(this.Status,'status');
          await genericMethod.click(this.Status_drpdwn,'');
        //   await genericMethod.click(this.Reason_undelivered,'');
        // await genericMethod.click(this.Reasonundelivered_drpdwn,'');
        // await genericMethod.click(this.Remark2,'');
    }
    async enterICno(icNumber: string) {
        await genericMethod.clickAndSendKeys(this.ICNumber, icNumber,'IcNumber');
    
    }

    async enterRemark(Remark:string) {
        await genericMethod.clickAndSendKeys(this.Remark,Remark,'success');
    }

    async enterName(name:string) {
        await genericMethod.clickAndSendKeys(this.ReceiverName,name,'name');
    }
    async uploadPOD(file:string){
        const filepath = "//uploads//" + file;
        await genericMethod.pause(5000);
        await genericMethod.upload(this.POD,filepath);
    
    }
    
    async uploadSignature(fileName:string){
        const filepath = "//uploads//" + fileName;
        await genericMethod.pause(5000);
        await genericMethod.upload(this.Signature,filepath);
    
    }

    async clickonUpdateitem() {
        await genericMethod.click(this.UpdateItem,'');
        await genericMethod.pause(8000);
    }
/////////////////////////undelivered status//////////////////////
    async select_Status(status:string) {
        await genericMethod.clickAndSendKeys(this.Status,status,'status');
    }
    async selectReason(reason:string) {
        await genericMethod.click(this.Reason_undelivered,'');
        await genericMethod.click(this.Reasonundelivered_drpdwn,'');
    }
    ///////////////////////manual////////////////////////
    async enterwaybill(waybill:string) {
        await genericMethod.clickAndSendKeys(this.WaybillNum,waybill,'');
    }
    async enterWaybillDrs(waybill:string) {
        await genericMethod.clickAndSendKeys(this.ManageDRS_Waybill,waybill,'',true);
        await genericMethod.pause(5000);
    }
}

