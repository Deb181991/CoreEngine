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
const CreateNewShipment_1 = require("../pages/CreateNewShipment");
const GenericMethod_1 = require("../utils/GenericMethod");
const shipment = new CreateNewShipment_1.CreateNewShipmentPage();
const genericMethod = new GenericMethod_1.GenericMethod();
cucumber_1.Given('Enter the Name {string} in the Name field', { timeout: genericMethod.defaultTestTimeout }, (email) => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.enterEmail(email);
}));
cucumber_1.Given('Enter the pw {string} in the pw field', { timeout: genericMethod.defaultTestTimeout }, (password) => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.enterPassword(password);
}));
cucumber_1.Given('Click on the login button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.clickSubmit();
}));
cucumber_1.Given('Mouse hover on the Bookings option of left navigation bar and click on the Create Shipment option', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.clickOnMousehover();
    yield shipment.clickOnBooking();
    yield shipment.navigateToCreateNewShipment();
}));
cucumber_1.Given('Select the Standard Delivery option', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.clickStandardDelivery();
}));
cucumber_1.Given('Click on the Next Step button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.clickNextButton();
}));
cucumber_1.Given('Click on the Next Step button of summary', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.clickNextButtonSummary();
}));
cucumber_1.Given('Enter the Company Name {string} in Delivery Section', { timeout: genericMethod.defaultTestTimeout }, (companyName) => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.enterDeliveryCompanyName(companyName);
}));
cucumber_1.Given('Enter the Name {string} in Delivery Section', { timeout: genericMethod.defaultTestTimeout }, (name) => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.enterDeliveryName(name);
}));
cucumber_1.Given('Check whether Country {string} is displayed in the Country field in Delivery Section', { timeout: genericMethod.defaultTestTimeout }, (country) => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.verifyDeliveryCountry(country);
}));
cucumber_1.Given('Enter the Post Code {string} in Delivery Section', { timeout: genericMethod.defaultTestTimeout }, (code) => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.enterDeliveryPostalcode(code);
}));
cucumber_1.Given('Enter the Building or Unit number {string} in Delivery Section', { timeout: genericMethod.defaultTestTimeout }, (building) => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.enterDeliveryUnit(building);
}));
cucumber_1.Given('Enter the {string} in the Address field in Delivery Section', { timeout: genericMethod.defaultTestTimeout }, (address) => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.enterDeliveryAddress(address);
}));
cucumber_1.Given('user Click on the {string} select option from it in Delivery Section', { timeout: genericMethod.defaultTestTimeout }, (address2) => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.enterDeliveryAddress2(address2);
}));
cucumber_1.Given('Enter the Email Id {string} in Delivery Section', { timeout: genericMethod.defaultTestTimeout }, (email) => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.enterDeliveryEmail(email);
}));
cucumber_1.Given('Enter the Mobile number {string} in Delivery Section', { timeout: genericMethod.defaultTestTimeout }, (phone) => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.enterDeliveryPhNo(phone);
}));
cucumber_1.Given('Enter the IC number in Delivery Section', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    const icNumber = genericMethod.getRandomNumber(8);
    yield shipment.enterDeliveryIcNumber(icNumber);
}));
cucumber_1.Given('click on {string} dropdown and select option from it', { timeout: genericMethod.defaultTestTimeout }, (type) => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.selectServiceType(type);
}));
cucumber_1.Given('click on {string} and select option from it', { timeout: genericMethod.defaultTestTimeout }, (type) => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.selectServiceTypePU(type);
}));
cucumber_1.Given('Click on the Shipment Type {string} dropdown and select option from it', { timeout: genericMethod.defaultTestTimeout }, (type) => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.selectShipmentType(type);
}));
cucumber_1.Given('Click on the Mode {string} dropdown and select option from it', { timeout: genericMethod.defaultTestTimeout }, (mode) => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.selectMode(mode);
}));
cucumber_1.Given('fetch waybill number from the waybill number field {string}, {string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, (FileName, sheetname, Rowno, columnno) => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.FetchWayBill(FileName, sheetname, Rowno, columnno);
}));
cucumber_1.Given('Enter the Quantity {string}', { timeout: genericMethod.defaultTestTimeout }, (quantity) => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.enterPackageQuantity(quantity);
}));
cucumber_1.Given('Enter the Weight {string}', { timeout: genericMethod.defaultTestTimeout }, (weight) => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.enterPackageWeight(weight);
}));
cucumber_1.Given('Check whether the {string} option is displayed in the Packaging Type drop down', { timeout: genericMethod.defaultTestTimeout }, (type) => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.verifyPackageType(type);
}));
cucumber_1.Given('Enter the Width {string}', { timeout: genericMethod.defaultTestTimeout }, (width) => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.enterPackageWidth(width);
}));
cucumber_1.Given('Enter the Height {string}', { timeout: genericMethod.defaultTestTimeout }, (height) => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.enterPackageHeight(height);
}));
cucumber_1.Given('Enter the Length {string}', { timeout: genericMethod.defaultTestTimeout }, (length) => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.enterPackageLength(length);
}));
cucumber_1.Given('Upload a file by clicking on the Drop Attachment Here file should be uploaded {string}', { timeout: genericMethod.defaultTestTimeout }, (img) => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.uploadDropAttachment(img);
}));
cucumber_1.Given('Verify the Amount {string} displayed in the Charges section', { timeout: genericMethod.defaultTestTimeout }, (amount) => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.verifyTotalAmount(amount);
}));
cucumber_1.Given('Verify the {string} displayed in the Charges section', { timeout: genericMethod.defaultTestTimeout }, (amount) => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.TotalAmount(amount);
}));
cucumber_1.Given('Click on submit button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.clickOnSubmitButton();
}));
cucumber_1.Given('Click on close button of the popup', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.clickOnClosebtn();
}));
cucumber_1.Given('Mouse hover on the Shipment Management option of left navigation bar and click on it', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.clickOnShipmentmanagement();
}));
cucumber_1.Given('click on waybill number field {string}, {string}, {int},{int}', { timeout: genericMethod.defaultTestTimeout }, (file, sheet, row, col) => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.enterWaybillnum(file, sheet, row, col);
}));
cucumber_1.Given('Click on Search button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.clickOnSearch();
}));
cucumber_1.Given('verify the status in the {string}', { timeout: genericMethod.defaultTestTimeout }, (grid) => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.verifyOrderStatus(grid);
}));
cucumber_1.Given('click on the Shipment Management option', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.clickOnMousehover();
    yield shipment.clickOnShipmentmanagement();
}));
cucumber_1.Given('fetch waybill number from the summary waybill {string}, {string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, (file, sheet, row, col) => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.fetchWaybill_summary(file, sheet, row, col);
}));
cucumber_1.Given('click on pay button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.clickOnPay();
}));
cucumber_1.Given('select bank from the dropdown {string}', { timeout: genericMethod.defaultTestTimeout }, (bank) => __awaiter(void 0, void 0, void 0, function* () {
    //await shipment.clickonBank();
    yield shipment.clickonBank(bank);
}));
cucumber_1.Given('click on proceed with bank button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield shipment.clickOnProceed();
}));
cucumber_1.Then('user should displayed to {string} page', { timeout: genericMethod.defaultTestTimeout }, (VTOS) => __awaiter(void 0, void 0, void 0, function* () {
    //await shipment.clickonBank();
    yield shipment.verifyTypeofService(VTOS);
}));
