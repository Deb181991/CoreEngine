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
const PickupPage_1 = require("../pages/PickupPage");
const GenericMethod_1 = require("../utils/GenericMethod");
const pickup = new PickupPage_1.PickupPage();
const genericMethod = new GenericMethod_1.GenericMethod();
cucumber_1.When('Mouse hover on the Pickup option of left panel and click on the Pickup option', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield pickup.navigateToPickup();
}));
cucumber_1.Then('Mouse Hover and Click on Manage PRS tab', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield pickup.manageprs();
}));
cucumber_1.When('Mouse Hover and click on PickUp request tab', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield pickup.pickuprequest();
}));
cucumber_1.Then('Provide the  WaybillNumber {string},{string},{int},{int} in the Waybill number field', { timeout: genericMethod.defaultTestTimeout }, (fileName, sheetName, rowNum, columnNum) => __awaiter(void 0, void 0, void 0, function* () {
    yield pickup.waybillsearch(fileName, sheetName, rowNum, columnNum);
}));
cucumber_1.Then('Get the PU number {string},{string},{int},{int} from the PU Number field', { timeout: genericMethod.defaultTestTimeout }, (fileName, sheetName, rowNum, columnNum) => __awaiter(void 0, void 0, void 0, function* () {
    yield pickup.FetchPUNumber(fileName, sheetName, rowNum, columnNum);
}));
cucumber_1.Then('Mouse Hover and Click on Create PRS tab', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield pickup.createprs();
}));
cucumber_1.Then('Provide the BranchCode {string} in the BranchCode field', { timeout: genericMethod.defaultTestTimeout }, (BranchCodePRS) => __awaiter(void 0, void 0, void 0, function* () {
    yield pickup.branchcodeclick(BranchCodePRS);
}));
cucumber_1.Then('Provide the Customer {string} in the Customer field', { timeout: genericMethod.defaultTestTimeout }, (customer) => __awaiter(void 0, void 0, void 0, function* () {
    yield pickup.Customer(customer);
}));
cucumber_1.Then('Click on Search Button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield pickup.Searchbtn();
}));
cucumber_1.Then('Check the PU {string},{string},{int},{int} in field and click checkbox', { timeout: genericMethod.defaultTestTimeout }, (fileName, sheetName, rowNum, columnNum) => __awaiter(void 0, void 0, void 0, function* () {
    yield pickup.checkbox(fileName, sheetName, rowNum, columnNum);
}));
cucumber_1.Then('Click on Create and Assign button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield pickup.createandassign();
}));
cucumber_1.Then('Click on Select From other Branch', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield pickup.crcheckbox();
}));
cucumber_1.Then('Provide the Courier {string} in the Courier number field', { timeout: genericMethod.defaultTestTimeout }, (courier) => __awaiter(void 0, void 0, void 0, function* () {
    yield pickup.selectcourier(courier);
}));
cucumber_1.Then('Click on Create button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield pickup.createbutton();
}));
cucumber_1.Then('Select the branch {string} in the branch code list', { timeout: genericMethod.defaultTestTimeout }, (branch) => __awaiter(void 0, void 0, void 0, function* () {
    yield pickup.EnterBranch(branch);
}));
cucumber_1.Then('Click on the OK button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield pickup.okbutton();
}));
cucumber_1.Then('Click on the Create Button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield pickup.createbutton();
}));
// Then('Verify that the Successful message {string},{string},{int},{int} for Create PRS is displayed', { timeout: genericMethod.defaultTestTimeout }, async (fileName, sheetName, rowNum, columnNum) => {
//   await pickup.VerifySuccessmessage(fileName, sheetName, rowNum, columnNum);
// }); 
cucumber_1.Then('Fetch the Created PRS Number and save it in {string},{string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, (fileName, sheetName, rowNum, columnNum) => __awaiter(void 0, void 0, void 0, function* () {
    yield pickup.managePRScheck();
    yield pickup.waybillsearch(fileName, sheetName, rowNum, columnNum);
    yield pickup.FetchPRS(fileName, sheetName, rowNum, columnNum);
}));
cucumber_1.Then('Mouse Hover and Click on Update PU tab', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield pickup.updatepu();
}));
cucumber_1.Then('Provide the PU Number {string},{string},{int},{int} in the PRS Number field', { timeout: genericMethod.defaultTestTimeout }, (fileName, sheetName, rowNum, columnNum) => __awaiter(void 0, void 0, void 0, function* () {
    yield pickup.SearchPUNumber(fileName, sheetName, rowNum, columnNum);
}));
cucumber_1.Then('Click on the PU number to view details', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield pickup.clickpu();
}));
cucumber_1.Then('Click on the action button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield pickup.actionbtn();
}));
cucumber_1.Then('Click on the Scan button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield pickup.scanbtn();
}));
cucumber_1.Then('Select the PickuP message from Pickup dropdown', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield pickup.pickupstatus();
}));
cucumber_1.Then('Enter the WaybillNumber {string},{string},{int},{int} in the Waybill number field', { timeout: genericMethod.defaultTestTimeout }, (fileName, sheetName, rowNum, columnNum) => __awaiter(void 0, void 0, void 0, function* () {
    yield pickup.sendwaybill(fileName, sheetName, rowNum, columnNum);
}));
cucumber_1.Then('Provide the Contact Name {string} in the Contact name Field', { timeout: genericMethod.defaultTestTimeout }, (contactname) => __awaiter(void 0, void 0, void 0, function* () {
    yield pickup.sendcontactname(contactname);
}));
cucumber_1.Then('Provide the Contact IC Number {string} in the Contact IC Number Field', { timeout: genericMethod.defaultTestTimeout }, (icnumber) => __awaiter(void 0, void 0, void 0, function* () {
    yield pickup.sendicnumber(icnumber);
}));
cucumber_1.Then('Upload the Pick Up Proof file {string} in the Upload Pickup Proof Field', { timeout: genericMethod.defaultTestTimeout }, (fileName) => __awaiter(void 0, void 0, void 0, function* () {
    yield pickup.sendicnumber(fileName);
}));
cucumber_1.Then('Click on the final submit button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield pickup.clickpicksubmit();
}));
