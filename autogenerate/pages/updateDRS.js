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
const Assertions_1 = require("../utils/Assertions");
const GenericMethod_1 = require("../utils/GenericMethod");
const genericMethod = new GenericMethod_1.GenericMethod();
const assertions = new Assertions_1.Assertions();
class updateDRSPage {
    constructor() {
        this.userName = protractor_1.element(protractor_1.by.xpath('//*[@formcontrolname="email"]'));
        this.password = protractor_1.element(protractor_1.by.xpath('//*[@formcontrolname="password"]'));
        this.signIn = protractor_1.element(protractor_1.by.xpath('//button[contains(text(),"Sign In")]'));
        ////////////////////////////DRS SCAN///////////////////////////
        this.Delivery = protractor_1.element(protractor_1.by.xpath('//span[contains(@class, "kt-menu__link-text ng-star-inserted") and text() = "Delivery"]'));
        this.DRSScan_Button = protractor_1.element(protractor_1.by.xpath('//span[contains(@class, "kt-menu__link-text ng-star-inserted") and text() = "DRS Scan"]'));
        this.VehicleNumber = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname= "vehicleNumber"]'));
        this.vehicle_drpdwn = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"ABC123")]'));
        this.Next_Button = protractor_1.element(protractor_1.by.xpath('(//span[contains(text(),"Next")])[1]'));
        this.Next = protractor_1.element(protractor_1.by.xpath('(//span[contains(text(),"Next")])[2]'));
        this.Courier = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname= "courier"]'));
        this.courier_drpdwn = protractor_1.element(protractor_1.by.xpath('(//span[@class="mat-option-text"])[1]'));
        this.StartingKM = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname= "startingKMs"]'));
        this.WaybillNum = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="WaybillNumber"]'));
        this.Add_Button = protractor_1.element(protractor_1.by.xpath('//mat-icon[contains(text(),"add_circle_outline")]'));
        this.remove_icon = protractor_1.element(protractor_1.by.xpath('(//mat-icon[contains(text(),"remove_circle_outline")])[2]'));
        this.Create_Button = protractor_1.element(protractor_1.by.xpath('//span[contains(@class, "mat-button-wrapper") and text() = "Create"]'));
        this.BranchCode = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="pickupZone"]'));
        this.BranchCode_drpdwn = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"DSML")]'));
        this.BranchCodeBoxOKButton = protractor_1.element(protractor_1.by.xpath('//span[contains(@class,"mat-button-wrapper") and text() = "OK"]'));
        //fetch_drs = element(by.xpath('//span[contains(text(),"Created")]'));
        this.drsFetch = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"DRS/")]'));
        /////////////////////////////////////UPDATE DRS//////////////////////////////
        this.UpdateDRS = protractor_1.element(protractor_1.by.xpath('//span[contains(@class, "kt-menu__link-text ng-star-inserted") and text() = "Update DRS"]'));
        this.DRSNumber = protractor_1.element(protractor_1.by.xpath('//input[@type="text"]'));
        this.NewButton = protractor_1.element(protractor_1.by.xpath('(//td[@role="gridcell"])[5]'));
        this.ActionButton = protractor_1.element(protractor_1.by.xpath('//mat-icon[contains(text(),"more_vert")]'));
        this.Update_Button = protractor_1.element(protractor_1.by.xpath('//button[contains(text()," Update ")]'));
        this.Branch_Code = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="branchcode"]'));
        this.Status = protractor_1.element(protractor_1.by.xpath('//mat-select[@formcontrolname="status"]'));
        this.Status_drpdwn = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Delivered")]'));
        //Status_drpdwn = element(by.xpath('//span[contains(text(),"Undelivered")]'));
        this.statusDrpdwn = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Undelivered")]'));
        this.ICNumber = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="icNumber"]'));
        this.Remark = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="remark"]'));
        this.Remark2 = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Remark"]'));
        this.ReceiverName = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="receivedBy"]'));
        this.POD = protractor_1.element(protractor_1.by.xpath('(//input[@type="file"])[1]'));
        this.Signature = protractor_1.element(protractor_1.by.xpath('(//input[@type="file"])[2]'));
        this.UpdateItem = protractor_1.element(protractor_1.by.xpath('//span[text()= "Update Item"]'));
        this.Reason_undelivered = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Reason For Undelivered")]//parent::div'));
        //Reason_undelivered = element(by.xpath('//span[contains(text(),"Reason For Undelivered")]//parent::div'));
        this.Reasonundelivered_drpdwn = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"BAD WEATHER")]'));
        this.proof = protractor_1.element(protractor_1.by.xpath('//mat-icon[contains(text(),"create")]'));
        //////////////////Manage DRS////////////////////////////////
        this.ManageDRS = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Manage DRS")]'));
        //AssignViewTab = element(by.xpath('//div[contains(text(),"Assigned View")]'));
        this.AssignViewTab = protractor_1.element(protractor_1.by.xpath('//div[contains(@class, "mat-tab-label-content" ) and text() = "Assigned View"]'));
        this.ManageDRS_Waybill = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="wayBillNumber"]'));
        this.fetchDRS = protractor_1.element(protractor_1.by.xpath('//mat-cell[contains(text(),"DRS")]'));
        this.DO_required = protractor_1.element(protractor_1.by.xpath('//label[contains(text(),"DO Required :")]'));
        this.orderDetails = protractor_1.element(protractor_1.by.xpath('//h6[contains(text(),"Order Details")]'));
        this.REOPENDRS = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Reopen DRS")]'));
    }
    enterEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.userName, email, 'email');
        });
    }
    enterPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.password, password, 'password');
        });
    }
    clickOnSignin() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.signIn, 'signin');
        });
    }
    clickOnDelivery() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.Delivery, 'delivery');
        });
    }
    clickOnDrsScan() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.DRSScan_Button, 'DRS Scan');
        });
    }
    enterVehicleNo(vehicle) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.VehicleNumber, vehicle, 'AB2021');
        });
    }
    clickOnNext() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.Next_Button, 'Nextbutton');
        });
    }
    entercourier(courier) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.Courier, courier, 'courier');
            yield genericMethod.clickUsingJs(this.courier_drpdwn, '');
        });
    }
    enterStratingKM(KM) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.StartingKM, KM, '123');
        });
    }
    clickNext() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.Next, 'next');
        });
    }
    enterWaybill(fileName, sheetName, RowNum, columnNum) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.WaybillNum, '');
            const filepath = "//Data//" + fileName;
            const waybill = yield genericMethod.getExcelData(filepath, sheetName, RowNum, columnNum);
            yield genericMethod.sendKeys(this.WaybillNum, waybill, '');
        });
    }
    clickOnAddicon() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.Add_Button, 'ADDbutton');
            yield genericMethod.mouseHoverAndClick(this.remove_icon, 'remove_icon');
        });
    }
    cliclOnCreate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.Create_Button, 'createbutton');
        });
    }
    enterBranchCode(BranchCode) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.BranchCode, BranchCode, '');
        });
    }
    clickOnOK() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.BranchCodeBoxOKButton, '');
        });
    }
    ///////////////////////Manage drs/////////////////////
    clickOnManageDRS() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.ManageDRS, 'manageDRS');
            yield genericMethod.pause(15000);
        });
    }
    ClickOnAssignTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.mouseHoverAndClick(this.AssignViewTab, 'AssignView');
            yield genericMethod.pause(15000);
        });
    }
    enterwaybillDRS(fileName, sheetName, RowNum, columnNum) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.ManageDRS_Waybill, '');
            //await  genericMethod.click(this.ManageDRS_Waybill,'');
            const filepath = "//Data//" + fileName;
            const waybill = yield genericMethod.getExcelData(filepath, sheetName, RowNum, columnNum);
            yield genericMethod.sendKeys(this.ManageDRS_Waybill, waybill, '', true);
            yield genericMethod.pause(8000);
        });
    }
    fetchDRsno(fileName, sheetName, row, col) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.mouseHover(this.fetchDRS, '');
            var actualValue = yield genericMethod.getText(this.fetchDRS, '');
            const filepath = "//Data//" + fileName;
            yield genericMethod.WriteData(actualValue, filepath, sheetName, row, col);
            yield genericMethod.pause(8000);
        });
    }
    ///////////////////////update drs////////////
    clickOnUpdateDRS() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.refreshPage();
            yield genericMethod.pause(5000);
            // await genericMethod.click(this.REOPENDRS,'');
            //await browser.actions().sendKeys(protractor.Key.ARROW_UP).perform();
            //await browser.actions().sendKeys(protractor.Key.ARROW_UP).perform();
            yield genericMethod.click(this.UpdateDRS, '');
            yield genericMethod.pause(5000);
        });
    }
    enterDRSno(fileName, sheetName, RowNum, columnNum) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.DRSNumber, '');
            const filepath = "//Data//" + fileName;
            const DRSNumber = yield genericMethod.getExcelData(filepath, sheetName, RowNum, columnNum);
            yield genericMethod.sendKeys(this.DRSNumber, DRSNumber, '', true);
            yield genericMethod.pause(8000);
        });
    }
    ClickOnNew() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.NewButton, '');
        });
    }
    clickOnActionbtn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.ActionButton, 'Actionbutton');
        });
    }
    clickOnUpdatebtn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.Update_Button, 'Updatebutton');
            yield genericMethod.pause(3000);
        });
    }
    enterbaranchCode(BranchCode) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.DO_required, '');
            // await browser.actions().dragAndDrop(source,des);
            yield genericMethod.clickAndSendKeys(this.Branch_Code, BranchCode, 'branchcode');
            yield genericMethod.click(this.BranchCode_drpdwn, '');
        });
    }
    selectStatus(Status) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.Status, 'status');
            yield genericMethod.click(this.Status_drpdwn, '');
            //   await genericMethod.click(this.Reason_undelivered,'');
            // await genericMethod.click(this.Reasonundelivered_drpdwn,'');
            // await genericMethod.click(this.Remark2,'');
        });
    }
    enterICno(icNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.ICNumber, icNumber, 'IcNumber');
        });
    }
    enterRemark(Remark) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.Remark, Remark, 'success');
        });
    }
    enterName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.ReceiverName, name, 'name');
        });
    }
    uploadPOD(file) {
        return __awaiter(this, void 0, void 0, function* () {
            const filepath = "//uploads//" + file;
            yield genericMethod.pause(5000);
            yield genericMethod.upload(this.POD, filepath);
        });
    }
    uploadSignature(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            const filepath = "//uploads//" + fileName;
            yield genericMethod.pause(5000);
            yield genericMethod.upload(this.Signature, filepath);
        });
    }
    clickonUpdateitem() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.UpdateItem, '');
            yield genericMethod.pause(8000);
        });
    }
    /////////////////////////undelivered status//////////////////////
    select_Status(status) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.Status, status, 'status');
        });
    }
    selectReason(reason) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.Reason_undelivered, '');
            yield genericMethod.click(this.Reasonundelivered_drpdwn, '');
        });
    }
    ///////////////////////manual////////////////////////
    enterwaybill(waybill) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.WaybillNum, waybill, '');
        });
    }
    enterWaybillDrs(waybill) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.ManageDRS_Waybill, waybill, '', true);
            yield genericMethod.pause(5000);
        });
    }
}
exports.updateDRSPage = updateDRSPage;
