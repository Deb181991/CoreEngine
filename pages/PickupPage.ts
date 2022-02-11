import { browser, element, by, ActionSequence, Key, protractor, $ } from 'protractor';
import { GenericMethod } from "../utils/GenericMethod";
import { Assertions } from '../utils/Assertions';
import { LoginPage } from './Login';
import { ValueType } from 'exceljs';

const genericMethod: GenericMethod = new GenericMethod();
const assertions: Assertions = new Assertions();
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

export class PickupPage {

    //Assigned =element(by.xpath('(//div[contains(@class,"mat-tab-label-content")])[4]'));
    //Assigned =element(by.xpath('//div[contains(@class,"mat-tab-label-content") and text() = "Assigned Pickup Request"]'));
    Assigned =element(by.xpath('//div[contains(text(),"Assigned Pickup Request")]'));
    pickupbutton = element(by.xpath('//span[contains(@class, "kt-menu__link-text ng-star-inserted") and text() = "Pickup"]'));

    //CREATE PRS
    Pickup_btn=element(by.xpath('//span[contains(@class, "kt-menu__link-text ng-star-inserted") and text() = "Pickup"]'));
    AssignPU=element(by.xpath('//span[contains(text(),"Assign PU")]'));
    BranchCodePRS=element(by.xpath('//input[@formcontrolname="pickupZone"]'));
    customer=element(by.xpath('//input[@name="customer"]'));
    CustomerSelect = element(by.xpath('//span[contains(@class,"mat-option-text")]'));
    FromDate=element(by.xpath('//input[@placeholder="From date"]'));
    ToDate=element(by.xpath('//input[@placeholder="To date"]'));
    Reset=element(by.xpath('//span[contains(text(),"Reset")]'));
    searchBtn=element(by.xpath('//button[@mattooltip="Search"]'));
    //PUdetails_chkbox=element(by.xpath('//*[@class="mat-checkbox mat-accent mat-checkbox-checked"]'));
    ExportasExcel=element(by.xpath('//span[contains(text(),"Export as Excel")]'));
    CreateAndAssign=element(by.xpath('//span[contains(text(),"Create And Assign")]'));
    SelectFromBranch_chkbox=element(by.xpath('//div[@class="mat-checkbox-inner-container"]'));
    courier=element(by.xpath('//input[@placeholder="Courier"]'));
    clickcourier=element(by.xpath('//*[@class="mat-option-text"]'));
    Create_btn=element(by.xpath('//span[contains(@class, "mat-button-wrapper") and text() = "Create"]'));
    cancel_btn=element(by.xpath('//span[contains(text(),"Cancel")]//parent::button'));
    OK_btn=element(by.xpath('//button[@type="submit"]'));
    ok=element(by.xpath('//span[contains(text(),"OK")]'));
    sendbranch= element(by.xpath('//input[@class="mat-autocomplete-trigger mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-pristine ng-invalid"]'));
    Prssucessmessage =element(by.xpath('//span[contains(text(),"Your PRS")]'));
   // PUdetails_chkbox =element(by.xpath('//mat-cell[contains(text(),"PU/DSML/2111/000573")]/..//mat-checkbox'));
   
    //ManagePRS
    ManagePU=element(by.xpath('//span[contains(text(),"Manage PU")]'));
    pickup_runsheet=element(by.xpath('//div[contains(text(),"Pickup Runsheet")]'));
    Pickup_request=element(by.xpath('//div[contains(text(),"Pickup Request")]'));
    PRS_Num=element(by.xpath('//input[@formcontrolname="prsNumber"]'));
    PU_Num=element(by.xpath('//input[@formcontrolname="puNumber"]'));
    //MPBranchCode=element(by.xpath('//input[@formcontrolname="loggedUserBranchCode"]'));
    PRSFrmDate=element(by.xpath('//input[@formcontrolname="fromDate"]'));
    PRSToDate=element(by.xpath('//input[@formcontrolname="toDate"]'));
    Waybill_num=element(by.xpath('//input[@formcontrolname="wayBillNumber"]'));
    PUfetch=element(by.xpath('//td[contains(text(),"PU")]'));
    PRSfetch=element(by.xpath('//td[contains(text(),"PRS")]'));

    //UpdatePRS
    UpdatePU=element(by.xpath('//span[contains(text(),"Update PU")]'));
    PRS_num=element(by.xpath('//input[@type="text"]'));
    PRS_click= element(by.xpath('//th[contains(text()," PU NUMBER ")]'))
    Action_btn=element(by.xpath('//mat-icon[contains(text(),"more_vert")]'));
    Scan=element(by.xpath('//button[contains(text(),"SCAN")]'));
    pickup_drpdwn=element(by.xpath('//span[contains(text(),"Pick Up")]//parent::div'));
    Success= element(by.xpath('//span[contains(text(),"Successful")]'));
    SNS_no=element(by.xpath('//input[@formcontrolname="SNSNo"]'));
    waybillnum=element(by.xpath('//input[@formcontrolname="wayBillNumber"]'));
    add_icon=element(by.xpath('//mat-icon[contains(text(),"add_circle_outline")]'));
    remove_icon=element(by.xpath('//mat-icon[contains(text(),"remove_circle_outline")]'));
    Received_contName=element(by.xpath('//input[@formcontrolname="contactName"]'));
    Received_contICNum=element(by.xpath('//input[@formcontrolname="contactICNumber"]'));
    Upload_proof=element(by.xpath('//mat-icon[contains(text(),"open_in_browser")]'));
    submit_btn=element(by.xpath('//span[contains(text(),"Submit")]'));
    Yes_btn=element(by.xpath('//span[contains(text(),"Yes")]'));
    No_btn=element(by.xpath('//span[contains(text(),"No")]'));
    ///////////////////////////////////TESTING////////////////////////////////////////
    
    ///////////////////////////////////////////////////////////////////////////

    async navigateToPickup() {
        //await genericMethod.waitForPageToLoad();
        await genericMethod.mouseHoverAndClick(this.pickupbutton, 'pickupbutton');
        //await genericMethod.pause(8000);
    }

//////////////////////////////////////Create PRS/////////////////////////////////////
        async CreatePRSclick() {
            await genericMethod.mouseHoverAndClick(this.AssignPU, 'AssignPU');
            //await genericMethod.pause(8000); 
            } 
//////////////////////////////////////Manage PRS/////////////////////////////////////

    async manageprs() {
       await genericMethod.mouseHoverAndClick(this.ManagePU, 'ManagePU');
       //await genericMethod.pause(8000); 
    }

    async pickuprequest() {
        await genericMethod.mouseHoverAndClick(this.Pickup_request,'Pickup_request')
        await genericMethod.pause(4000);
        //await genericMethod.mouseHoverAndClick(this.Assigned,'Assigned')
    }

    async waybillsearch(filename: string, sheetName: string, rowNum: number, columnNum: number) {
        await  genericMethod.mouseHoverAndClick(this.Waybill_num,'Waybill_num');
        const filepath = "//Data//" + filename;
        const waybill = await genericMethod.getExcelData(filepath, sheetName, 2, 5);
        await genericMethod.sendKeys(this.Waybill_num,waybill,'waybill');
        await browser.actions().sendKeys(Key.TAB).perform();
        await genericMethod.pause(4000);

    }

    async FetchPUNumber(filename: string,sheetName: string, rowNum: number,columnNum: number) {
        await genericMethod.mouseHover(this.PUfetch,'PUfetch');
        const actualValue = await genericMethod.getText(this.PUfetch,'');
        const filepath = "//Data//" + filename;
        await genericMethod.WriteData(actualValue,filepath, sheetName, 2, 13);
        }

 //Create PRS
 async createprs() {
    await genericMethod.mouseHoverAndClick(this.AssignPU, 'AssignPU');
    //await genericMethod.pause(8000); 
 }

 async branchcodeclick(BranchCodePRS : string) {
     await genericMethod.clickAndSendKeys(this.BranchCodePRS,BranchCodePRS,'BranchCodePRS');
 }

 async Customer(customer : string) {
    await genericMethod.clickAndSendKeys(this.customer,customer,'customer');
    await genericMethod.click(this.CustomerSelect,'')
    await browser.actions().sendKeys(Key.TAB).perform();
}

async Searchbtn(){
    await genericMethod.click(this.searchBtn,'searchBtn');
    await genericMethod.pause(2000);
}

async checkbox(filename: string,sheetName: string, rowNum: number,columnNum: number)
{
    var filepath = "//Data//" + filename;
    var actualvalue =  await genericMethod.getExcelData(filepath,sheetName,rowNum,columnNum);
    console.log(actualvalue);
    await genericMethod.pause(2000);
    await genericMethod.mouseHoverAndClick(element(by.xpath('//mat-cell[contains(text(),"'+ actualvalue +'")]/..//div')),'');  
}

async createandassign(){
    await genericMethod.click(this.CreateAndAssign,'CreateAndAssign');
}

async crcheckbox(){
    await genericMethod.click(this.SelectFromBranch_chkbox,'SelectFromBranch_chkbox');
}

async selectcourier(courier : string){
    await genericMethod.clearField(this.courier);
    await genericMethod.clickAndSendKeys(this.courier,courier,'courier');
    await genericMethod.click(this.clickcourier,'');
}

async createbutton(){
    await genericMethod.click(this.Create_btn,'Create_btn');
    await genericMethod.pause(6000);
}

async EnterBranch(sendbranch : string)
{
 await genericMethod.clickAndSendKeys(this.sendbranch,sendbranch,'');
 await browser.actions().sendKeys(Key.TAB).perform();
}

async okbutton()
{
    //await genericMethod.pause(5000);
    await genericMethod.click(this.ok,'');
}

// async VerifySuccessmessage(filename: string,sheetName: string, rowNum: number,columnNum: number)
// {
//    // await genericMethod.mouseHover(this.Prssucessmessage,'');
//     var actualValue = await genericMethod.getText(this.Prssucessmessage,'');
//     //var actualValue = await this.Prssucessmessage.getText();
//     console.log(actualValue);
//     var value = actualValue.split(' ');
//    // var prsno = await console.log(value[3]);
//     const filepath = "//Data//" + filename;
//     await genericMethod.WriteData(value[2],filepath, sheetName, 2, 14);
// }

async managePRScheck()
{
    await genericMethod.mouseHoverAndClick(this.ManagePU, 'ManagePU');
    //await genericMethod.pause(8000); 
    await genericMethod.mouseHoverAndClick(this.Pickup_request,'Pickup_request')

}

    async FetchPRS(filename: string,sheetName: string, rowNum: number,columnNum: number) {
        await genericMethod.mouseHover(this.PRSfetch,'PRSfetch');
        const actualValue = await genericMethod.getText(this.PRSfetch,'');
        const filepath = "//Data//" + filename;
        await genericMethod.WriteData(actualValue,filepath, sheetName, 2, 14);
        }

async updatepu()
{
    await genericMethod.mouseHoverAndClick(this.UpdatePU, 'UpdatePU');
    //await genericMethod.pause(8000); 
}

async SearchPUNumber(filename: string,sheetName: string, rowNum: number,columnNum: number) {
    await  genericMethod.mouseHoverAndClick(this.PRS_num,'PRS_num');
    const filepath = "//Data//" + filename;
    const prsnum = await genericMethod.getExcelData(filepath, sheetName, 2, 13);
    await genericMethod.sendKeys(this.PRS_num,prsnum,'');
    await browser.actions().sendKeys(Key.TAB).perform();
    }

async clickpu()
{
    await genericMethod.mouseHoverAndClick(this.PRS_click, 'PRS_click');
    //await genericMethod.pause(4000);
}

async actionbtn()
{
    await genericMethod.mouseHoverAndClick(this.Action_btn, 'Action_btn');
    //await genericMethod.pause(4000); 
}

async scanbtn()
{
    await genericMethod.mouseHoverAndClick(this.Scan, 'Scan');
    await genericMethod.pause(2000); 
}

async pickupstatus()
{
    await genericMethod.mouseHoverAndClick(this.pickup_drpdwn, 'pickup_drpdwn');
    await genericMethod.mouseHoverAndClick(this.Success, 'Success');
    //await genericMethod.pause(4000); 
} 

    async sendwaybill(filename: string, sheetName: string, rowNum: number, columnNum: number) {
        await genericMethod.mouseHoverAndClick(this.waybillnum,'waybillnum');
        const filepath = "//Data//" + filename;
        const waybill = await genericMethod.getExcelData(filepath, sheetName, 2, 5);
        await genericMethod.sendKeys(this.Waybill_num,waybill,'waybill');
        await genericMethod.mouseHoverAndClick(this.add_icon,'add_icon');
        await genericMethod.mouseHoverAndClick(this.remove_icon,'remove_icon');
    }

async sendcontactname(contactname :string)
{
    await genericMethod.clickAndSendKeys(this.Received_contName,contactname,'contactname');
    await browser.actions().sendKeys(Key.TAB).perform();
}

async sendicnumber(icnumber: string)
{
    await genericMethod.clickAndSendKeys(this.Received_contICNum,icnumber,'icnumber');
    await browser.actions().sendKeys(Key.TAB).perform();
}

async uploadpickproof(fileName: string)
{
    const filepath = "//uploads//" + fileName;
    //await genericMethod.pause(5000);
    await genericMethod.upload(this.Upload_proof, filepath);
}

async clickpicksubmit()
{
await genericMethod.click(this.submit_btn,'');
//await genericMethod.click(this.Yes_btn,'');
await genericMethod.pause(8000);
  }
}