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
const cucumber_1 = require("cucumber");
const updateDRS_1 = require("../pages/updateDRS");
const GenericMethod_1 = require("../utils/GenericMethod");
const DRS = new updateDRS_1.updateDRSPage();
const genericMethod = new GenericMethod_1.GenericMethod();
cucumber_1.Then('Mouse hover on the left side of the page and click on Delivery Module', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield DRS.clickOnDelivery();
}));
cucumber_1.Then('click on DRS SCAN', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield DRS.clickOnDrsScan();
}));
cucumber_1.Then('select vehicle number from dropdown {string}', { timeout: genericMethod.defaultTestTimeout }, (vehicle) => __awaiter(void 0, void 0, void 0, function* () {
    yield DRS.enterVehicleNo(vehicle);
}));
cucumber_1.Then('click on next button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield DRS.clickOnNext();
}));
cucumber_1.Then('select courier from dropdown {string}', { timeout: genericMethod.defaultTestTimeout }, (courier) => __awaiter(void 0, void 0, void 0, function* () {
    yield DRS.entercourier(courier);
}));
cucumber_1.Then('enter starting KMs in {string} field', { timeout: genericMethod.defaultTestTimeout }, (KM) => __awaiter(void 0, void 0, void 0, function* () {
    yield DRS.enterStratingKM(KM);
}));
cucumber_1.Then('click on next', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield DRS.clickNext();
}));
cucumber_1.Then('enter waybill number {string},{string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, (file, sheet, row, column) => __awaiter(void 0, void 0, void 0, function* () {
    yield DRS.enterWaybill(file, sheet, row, column);
}));
cucumber_1.Then('click on add icon', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield DRS.clickOnAddicon();
}));
cucumber_1.Then('Enter Branch code in {string} field', { timeout: genericMethod.defaultTestTimeout }, (BranchCode) => __awaiter(void 0, void 0, void 0, function* () {
    yield DRS.enterBranchCode(BranchCode);
}));
cucumber_1.Then('click on ok button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield DRS.clickOnOK();
}));
cucumber_1.Then('click on create button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield DRS.cliclOnCreate();
}));
cucumber_1.Then('fetch DRS number from the popup  {string},{string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, (file, sheet, row, col) => __awaiter(void 0, void 0, void 0, function* () {
    yield DRS.fetchDRsno(file, sheet, row, col);
}));
//////////////////////////////////////Manage drs//////////////////////////
cucumber_1.Given('click on Manage DRS', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield DRS.clickOnManageDRS();
}));
//   Given('click on Assignview tab',  {timeout: genericMethod.defaultTestTimeout }, async () => {
//       await DRS.ClickOnAssignTab();
//       });
//   Given('enter waybill number {string},{string},{int},{int}', {timeout: genericMethod.defaultTestTimeout }, async (Filename,sheet,Row,col) => {
//     await DRS.enterwaybillDRS(Filename,sheet,Row,col)    
// });
//   Given('fetch DRS number from the grid {string},{string},,',  {timeout: genericMethod.defaultTestTimeout }, async (file,sheet,row,column) => {
//    await DRS.fetchDRsno(file,sheet,row,column);
//   });
/////////////////////////update drs///////////////////////////////////////
cucumber_1.Then('Click on Update DRS', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield DRS.clickOnUpdateDRS();
}));
cucumber_1.Then('Enter DRS Number in the DRSNumber field {string},{string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, (file, sheet, row, col) => __awaiter(void 0, void 0, void 0, function* () {
    yield DRS.enterDRSno(file, sheet, row, col);
}));
cucumber_1.Then('Click on New button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield DRS.ClickOnNew();
}));
cucumber_1.Then('click on action button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield DRS.clickOnActionbtn();
}));
cucumber_1.Then('Click on the update button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield DRS.clickOnUpdatebtn();
}));
cucumber_1.Then('Enter Branch code in {string}', { timeout: genericMethod.defaultTestTimeout }, (BranchCode) => __awaiter(void 0, void 0, void 0, function* () {
    yield DRS.enterbaranchCode(BranchCode);
}));
cucumber_1.Then('Select {string} from the dropdown', { timeout: genericMethod.defaultTestTimeout }, (Status) => __awaiter(void 0, void 0, void 0, function* () {
    yield DRS.selectStatus(Status);
}));
cucumber_1.Then('Enter IC number', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    const icNumber = genericMethod.getRandomNumber(8);
    yield DRS.enterICno(icNumber);
}));
cucumber_1.Then('Enter Remark in {string}', { timeout: genericMethod.defaultTestTimeout }, (remark) => __awaiter(void 0, void 0, void 0, function* () {
    yield DRS.enterRemark(remark);
}));
cucumber_1.Then('Enter Receiver Person name in {string}', { timeout: genericMethod.defaultTestTimeout }, (Name) => __awaiter(void 0, void 0, void 0, function* () {
    yield DRS.enterName(Name);
}));
cucumber_1.Then('Click on edit icon to upload POD {string}', { timeout: genericMethod.defaultTestTimeout }, (file) => __awaiter(void 0, void 0, void 0, function* () {
    yield DRS.uploadPOD(file);
}));
cucumber_1.Then('Click on edit icon to upload Signature {string}', { timeout: genericMethod.defaultTestTimeout }, (signature) => __awaiter(void 0, void 0, void 0, function* () {
    yield DRS.uploadSignature(signature);
}));
cucumber_1.Then('Click on Update Item button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield DRS.clickonUpdateitem();
}));
//////////////////////////////manual////////////////////////
cucumber_1.Given('enter waybill number {string}', { timeout: genericMethod.defaultTestTimeout }, (waybill) => __awaiter(void 0, void 0, void 0, function* () {
    yield DRS.enterwaybill(waybill);
}));
cucumber_1.Then('fetch DRS number', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield DRS.clickOnManageDRS();
    yield DRS.ClickOnAssignTab();
}));
cucumber_1.Then('enter waybill number in waybill field  {string},{string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, (file, sheet, row, col) => __awaiter(void 0, void 0, void 0, function* () {
    // await DRS.enterWaybillDrs(waybill);
    yield DRS.enterwaybillDRS(file, sheet, row, col);
    //await DRS.fetchDRsno(file,sheet,row,col);
}));
cucumber_1.Then('fetch DRS number from grid {string},{string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, (file, sheet, row, col) => __awaiter(void 0, void 0, void 0, function* () {
    yield DRS.fetchDRsno(file, sheet, row, col);
}));
