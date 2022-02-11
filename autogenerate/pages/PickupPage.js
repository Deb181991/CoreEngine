"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const GenericMethod_1 = require("../utils/GenericMethod");
const Assertions_1 = require("../utils/Assertions");
const genericMethod = new GenericMethod_1.GenericMethod();
const assertions = new Assertions_1.Assertions();
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
class PickupPage {
    constructor() {
        //Assigned =element(by.xpath('(//div[contains(@class,"mat-tab-label-content")])[4]'));
        //Assigned =element(by.xpath('//div[contains(@class,"mat-tab-label-content") and text() = "Assigned Pickup Request"]'));
        this.Assigned = protractor_1.element(protractor_1.by.xpath('//div[contains(text(),"Assigned Pickup Request")]'));
        this.pickupbutton = protractor_1.element(protractor_1.by.xpath('//span[contains(@class, "kt-menu__link-text ng-star-inserted") and text() = "Pickup"]'));
        //CREATE PRS
        this.Pickup_btn = protractor_1.element(protractor_1.by.xpath('//span[contains(@class, "kt-menu__link-text ng-star-inserted") and text() = "Pickup"]'));
        this.AssignPU = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Assign PU")]'));
        this.BranchCodePRS = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="pickupZone"]'));
        this.customer = protractor_1.element(protractor_1.by.xpath('//input[@name="customer"]'));
        this.CustomerSelect = protractor_1.element(protractor_1.by.xpath('//span[contains(@class,"mat-option-text")]'));
        this.FromDate = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="From date"]'));
        this.ToDate = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="To date"]'));
        this.Reset = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Reset")]'));
        this.searchBtn = protractor_1.element(protractor_1.by.xpath('//button[@mattooltip="Search"]'));
        //PUdetails_chkbox=element(by.xpath('//*[@class="mat-checkbox mat-accent mat-checkbox-checked"]'));
        this.ExportasExcel = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Export as Excel")]'));
        this.CreateAndAssign = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Create And Assign")]'));
        this.SelectFromBranch_chkbox = protractor_1.element(protractor_1.by.xpath('//div[@class="mat-checkbox-inner-container"]'));
        this.courier = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Courier"]'));
        this.clickcourier = protractor_1.element(protractor_1.by.xpath('//*[@class="mat-option-text"]'));
        this.Create_btn = protractor_1.element(protractor_1.by.xpath('//span[contains(@class, "mat-button-wrapper") and text() = "Create"]'));
        this.cancel_btn = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Cancel")]//parent::button'));
        this.OK_btn = protractor_1.element(protractor_1.by.xpath('//button[@type="submit"]'));
        this.ok = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"OK")]'));
        this.sendbranch = protractor_1.element(protractor_1.by.xpath('//input[@class="mat-autocomplete-trigger mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-pristine ng-invalid"]'));
        this.Prssucessmessage = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Your PRS")]'));
        // PUdetails_chkbox =element(by.xpath('//mat-cell[contains(text(),"PU/DSML/2111/000573")]/..//mat-checkbox'));
        //ManagePRS
        this.ManagePU = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Manage PU")]'));
        this.pickup_runsheet = protractor_1.element(protractor_1.by.xpath('//div[contains(text(),"Pickup Runsheet")]'));
        this.Pickup_request = protractor_1.element(protractor_1.by.xpath('//div[contains(text(),"Pickup Request")]'));
        this.PRS_Num = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="prsNumber"]'));
        this.PU_Num = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="puNumber"]'));
        //MPBranchCode=element(by.xpath('//input[@formcontrolname="loggedUserBranchCode"]'));
        this.PRSFrmDate = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="fromDate"]'));
        this.PRSToDate = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="toDate"]'));
        this.Waybill_num = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="wayBillNumber"]'));
        this.PUfetch = protractor_1.element(protractor_1.by.xpath('//td[contains(text(),"PU")]'));
        this.PRSfetch = protractor_1.element(protractor_1.by.xpath('//td[contains(text(),"PRS")]'));
        //UpdatePRS
        this.UpdatePU = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Update PU")]'));
        this.PRS_num = protractor_1.element(protractor_1.by.xpath('//input[@type="text"]'));
        this.PRS_click = protractor_1.element(protractor_1.by.xpath('//th[contains(text()," PU NUMBER ")]'));
        this.Action_btn = protractor_1.element(protractor_1.by.xpath('//mat-icon[contains(text(),"more_vert")]'));
        this.Scan = protractor_1.element(protractor_1.by.xpath('//button[contains(text(),"SCAN")]'));
        this.pickup_drpdwn = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Pick Up")]//parent::div'));
        this.Success = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Successful")]'));
        this.SNS_no = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="SNSNo"]'));
        this.waybillnum = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="wayBillNumber"]'));
        this.add_icon = protractor_1.element(protractor_1.by.xpath('//mat-icon[contains(text(),"add_circle_outline")]'));
        this.remove_icon = protractor_1.element(protractor_1.by.xpath('//mat-icon[contains(text(),"remove_circle_outline")]'));
        this.Received_contName = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="contactName"]'));
        this.Received_contICNum = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="contactICNumber"]'));
        this.Upload_proof = protractor_1.element(protractor_1.by.xpath('//mat-icon[contains(text(),"open_in_browser")]'));
        this.submit_btn = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Submit")]'));
        this.Yes_btn = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Yes")]'));
        this.No_btn = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"No")]'));
    }
    ///////////////////////////////////TESTING////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
    navigateToPickup() {
        return __awaiter(this, void 0, void 0, function* () {
            //await genericMethod.waitForPageToLoad();
            yield genericMethod.mouseHoverAndClick(this.pickupbutton, 'pickupbutton');
            //await genericMethod.pause(8000);
        });
    }
    //////////////////////////////////////Create PRS/////////////////////////////////////
    CreatePRSclick() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.mouseHoverAndClick(this.AssignPU, 'AssignPU');
            //await genericMethod.pause(8000); 
        });
    }
    //////////////////////////////////////Manage PRS/////////////////////////////////////
    manageprs() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.mouseHoverAndClick(this.ManagePU, 'ManagePU');
            //await genericMethod.pause(8000); 
        });
    }
    pickuprequest() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.mouseHoverAndClick(this.Pickup_request, 'Pickup_request');
            yield genericMethod.pause(4000);
            //await genericMethod.mouseHoverAndClick(this.Assigned,'Assigned')
        });
    }
    waybillsearch(filename, sheetName, rowNum, columnNum) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.mouseHoverAndClick(this.Waybill_num, 'Waybill_num');
            const filepath = "//Data//" + filename;
            const waybill = yield genericMethod.getExcelData(filepath, sheetName, 2, 5);
            yield genericMethod.sendKeys(this.Waybill_num, waybill, 'waybill');
            yield protractor_1.browser.actions().sendKeys(protractor_1.Key.TAB).perform();
            yield genericMethod.pause(4000);
        });
    }
    FetchPUNumber(filename, sheetName, rowNum, columnNum) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.mouseHover(this.PUfetch, 'PUfetch');
            const actualValue = yield genericMethod.getText(this.PUfetch, '');
            const filepath = "//Data//" + filename;
            yield genericMethod.WriteData(actualValue, filepath, sheetName, 2, 13);
        });
    }
    //Create PRS
    createprs() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.mouseHoverAndClick(this.AssignPU, 'AssignPU');
            //await genericMethod.pause(8000); 
        });
    }
    branchcodeclick(BranchCodePRS) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.BranchCodePRS, BranchCodePRS, 'BranchCodePRS');
        });
    }
    Customer(customer) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.customer, customer, 'customer');
            yield genericMethod.click(this.CustomerSelect, '');
            yield protractor_1.browser.actions().sendKeys(protractor_1.Key.TAB).perform();
        });
    }
    Searchbtn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.searchBtn, 'searchBtn');
            yield genericMethod.pause(2000);
        });
    }
    checkbox(filename, sheetName, rowNum, columnNum) {
        return __awaiter(this, void 0, void 0, function* () {
            var filepath = "//Data//" + filename;
            var actualvalue = yield genericMethod.getExcelData(filepath, sheetName, rowNum, columnNum);
            console.log(actualvalue);
            yield genericMethod.pause(2000);
            yield genericMethod.mouseHoverAndClick(protractor_1.element(protractor_1.by.xpath('//mat-cell[contains(text(),"' + actualvalue + '")]/..//div')), '');
        });
    }
    createandassign() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.CreateAndAssign, 'CreateAndAssign');
        });
    }
    crcheckbox() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.SelectFromBranch_chkbox, 'SelectFromBranch_chkbox');
        });
    }
    selectcourier(courier) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clearField(this.courier);
            yield genericMethod.clickAndSendKeys(this.courier, courier, 'courier');
            yield genericMethod.click(this.clickcourier, '');
        });
    }
    createbutton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.Create_btn, 'Create_btn');
            yield genericMethod.pause(6000);
        });
    }
    EnterBranch(sendbranch) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.sendbranch, sendbranch, '');
            yield protractor_1.browser.actions().sendKeys(protractor_1.Key.TAB).perform();
        });
    }
    okbutton() {
        return __awaiter(this, void 0, void 0, function* () {
            //await genericMethod.pause(5000);
            yield genericMethod.click(this.ok, '');
        });
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
    managePRScheck() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.mouseHoverAndClick(this.ManagePU, 'ManagePU');
            //await genericMethod.pause(8000); 
            yield genericMethod.mouseHoverAndClick(this.Pickup_request, 'Pickup_request');
        });
    }
    FetchPRS(filename, sheetName, rowNum, columnNum) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.mouseHover(this.PRSfetch, 'PRSfetch');
            const actualValue = yield genericMethod.getText(this.PRSfetch, '');
            const filepath = "//Data//" + filename;
            yield genericMethod.WriteData(actualValue, filepath, sheetName, 2, 14);
        });
    }
    updatepu() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.mouseHoverAndClick(this.UpdatePU, 'UpdatePU');
            //await genericMethod.pause(8000); 
        });
    }
    SearchPUNumber(filename, sheetName, rowNum, columnNum) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.mouseHoverAndClick(this.PRS_num, 'PRS_num');
            const filepath = "//Data//" + filename;
            const prsnum = yield genericMethod.getExcelData(filepath, sheetName, 2, 13);
            yield genericMethod.sendKeys(this.PRS_num, prsnum, '');
            yield protractor_1.browser.actions().sendKeys(protractor_1.Key.TAB).perform();
        });
    }
    clickpu() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.mouseHoverAndClick(this.PRS_click, 'PRS_click');
            //await genericMethod.pause(4000);
        });
    }
    actionbtn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.mouseHoverAndClick(this.Action_btn, 'Action_btn');
            //await genericMethod.pause(4000); 
        });
    }
    scanbtn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.mouseHoverAndClick(this.Scan, 'Scan');
            yield genericMethod.pause(2000);
        });
    }
    pickupstatus() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.mouseHoverAndClick(this.pickup_drpdwn, 'pickup_drpdwn');
            yield genericMethod.mouseHoverAndClick(this.Success, 'Success');
            //await genericMethod.pause(4000); 
        });
    }
    sendwaybill(filename, sheetName, rowNum, columnNum) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.mouseHoverAndClick(this.waybillnum, 'waybillnum');
            const filepath = "//Data//" + filename;
            const waybill = yield genericMethod.getExcelData(filepath, sheetName, 2, 5);
            yield genericMethod.sendKeys(this.Waybill_num, waybill, 'waybill');
            yield genericMethod.mouseHoverAndClick(this.add_icon, 'add_icon');
            yield genericMethod.mouseHoverAndClick(this.remove_icon, 'remove_icon');
        });
    }
    sendcontactname(contactname) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.Received_contName, contactname, 'contactname');
            yield protractor_1.browser.actions().sendKeys(protractor_1.Key.TAB).perform();
        });
    }
    sendicnumber(icnumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.Received_contICNum, icnumber, 'icnumber');
            yield protractor_1.browser.actions().sendKeys(protractor_1.Key.TAB).perform();
        });
    }
    uploadpickproof(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            const filepath = "//uploads//" + fileName;
            //await genericMethod.pause(5000);
            yield genericMethod.upload(this.Upload_proof, filepath);
        });
    }
    clickpicksubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.submit_btn, '');
            yield genericMethod.click(this.Yes_btn, '');
            yield genericMethod.pause(8000);
        });
    }
}
exports.PickupPage = PickupPage;
