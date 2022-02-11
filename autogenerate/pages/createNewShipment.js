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
class CreateNewShipmentPage {
    constructor() {
        this.email = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="email"]'));
        this.password = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="password"]'));
        this.submit = protractor_1.element(protractor_1.by.xpath('//button[@type="submit"]'));
        this.mousehover = protractor_1.element(protractor_1.by.xpath('//div[@class="kt-aside__brand-tools"]'));
        this.bookings = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Bookings")]'));
        this.createNewShipment = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Create new shipment")]'));
        this.standardDelivery = protractor_1.element(protractor_1.by.xpath('//button[contains(text(),"Standard Delivery")]'));
        this.DomesticShipment = protractor_1.element(protractor_1.by.xpath('//button[contains(text(),"Domestic Shipment")]'));
        this.nextButton = protractor_1.element(protractor_1.by.xpath('//div[contains(text(),"Next Step")]'));
        this.deliveryCompanyName = protractor_1.element(protractor_1.by.xpath('//input[@ng-reflect-name="deliveryCompanyName"]'));
        this.deliveryName = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="deliveryName"]'));
        this.deliveryCountry = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="deliveryCountry"]'));
        this.deliveryPostalcode = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="deliveryPostalCode"]'));
        this.deliveryState = protractor_1.element(protractor_1.by.xpath('//input[@name="deliveryState"]'));
        this.deliveryCity = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="deliveryCity"]'));
        this.deliveryUnit = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="deliveryUnit"]'));
        this.deliveryAddress = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="deliveryAddress"]'));
        this.deliveryAddress2 = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="deliveryAddress2"]'));
        this.deliveryAddress3 = protractor_1.element(protractor_1.by.xpath('//span[contains(@class,"mat-option-text")]'));
        this.add2_option = protractor_1.element(protractor_1.by.xpath('//span[@class="mat-option-text"]'));
        this.deliveryEmail = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="deliveryEmail"]'));
        this.deliveryPhnNumber = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="deliveryPhnNumber"]'));
        this.deliveryIcNumber = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="deliveryICNumber"]'));
        this.serviceType = protractor_1.element(protractor_1.by.xpath('//mat-select[@formcontrolname="serviceTypeInParcel"]'));
        //serviceType_opn = element(by.xpath('//span[contains(text(),"EXPRESSS01")]'));
        this.serviceType_opn = protractor_1.element(protractor_1.by.xpath('//span[contains(@class,"mat-option-text")]'));
        this.serviceType_drpdwn = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"ST00000105(DEB123)")]'));
        this.shipmentTypeTab = protractor_1.element(protractor_1.by.xpath('//mat-select[@formcontrolname="parcelOption"]'));
        this.shipment_option = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Package")]//parent::mat-option'));
        this.modeTab = protractor_1.element(protractor_1.by.xpath('//mat-select[@formcontrolname="shipOption"]'));
        this.mode_option = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Pickup")]//parent::mat-option'));
        //mode_option = element(by.xpath('//span[contains(text(),"Lodge In / Walk In")]'));
        this.waybill = protractor_1.element(protractor_1.by.xpath('//*[@formcontrolname="wayBillNumber"]'));
        this.packageQuantity = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="packageQuantity"]'));
        this.packageWeight = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="packageWeight"]'));
        this.packageType = protractor_1.element(protractor_1.by.xpath('//mat-select[@formcontrolname="packagingType"]'));
        this.packageType_option = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Standard Package")]//parent::mat-option'));
        this.width = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="dimensionX"]'));
        this.height = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="dimensionY"]'));
        this.length = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="dimensionZ"]'));
        this.attachment = protractor_1.element(protractor_1.by.xpath('//input[@type="file"]'));
        this.addPackage = protractor_1.element(protractor_1.by.xpath('//button[contains(text(),"Add Package")]'));
        this.totalAmount = protractor_1.element(protractor_1.by.xpath('//label[contains(@class,"totalAmount")]'));
        this.SubmitButton = protractor_1.element(protractor_1.by.xpath('//button[contains(text(),"Submit")]'));
        this.Close = protractor_1.element(protractor_1.by.xpath('//mat-icon[@id="close-icon"]'));
        this.shipmentManagement = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Shipment Management")]'));
        this.WaybillNumber = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="waybillNumber"]'));
        this.searchbtn = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Search")]'));
        this.status_grid = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Order Placed")]'));
        this.CE_email = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="email"]'));
        this.CE_password = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="password"]'));
        this.CE_signin = protractor_1.element(protractor_1.by.xpath('//button[contains(text(),"Sign In")]'));
        this.ViewAndTrack = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"View and Track")]'));
        this.Operation = protractor_1.element(protractor_1.by.xpath('//a[@href="#/view-track/operation"]'));
        this.waybill_summary = protractor_1.element(protractor_1.by.xpath('//label[contains(text(),"ZND")]'));
        this.CE_waybill = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Way Bill No"]'));
        this.Track_btn = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Track")]//parent::button'));
        this.pay_btn = protractor_1.element(protractor_1.by.xpath('//button[contains(text(),"Pay")]'));
        this.selectBank = protractor_1.element(protractor_1.by.xpath('//option[contains(text(),"Select Bank")]'));
        this.bank = protractor_1.element(protractor_1.by.xpath('//option[contains(text(),"Affin Bank")]'));
        this.proceed_btn = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Proceed")]'));
    }
    enterEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.email, email, 'email');
        });
    }
    enterPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.password, password, 'password');
        });
    }
    clickSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.submit, 'submit');
        });
    }
    clickOnMousehover() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.mousehover, 'click');
        });
    }
    clickOnBooking() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.bookings, 'booking');
        });
    }
    navigateToCreateNewShipment() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.createNewShipment, 'createnewShipment');
        });
    }
    clickStandardDelivery() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.standardDelivery, 'standardDelivery');
        });
    }
    clickNextButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.nextButton, 'nextButton');
            yield genericMethod.pause(5000);
        });
    }
    enterDeliveryCompanyName(companyName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.sendKeys(this.deliveryCompanyName, companyName, 'deliveryCompanyName');
        });
    }
    enterDeliveryName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.sendKeys(this.deliveryName, name, 'deliveryName');
        });
    }
    verifyDeliveryCountry(country) {
        return __awaiter(this, void 0, void 0, function* () {
            const actualCountry = yield genericMethod.getValue(this.deliveryCountry, 'deliveryCountry');
            yield assertions.verifyEquals(country, actualCountry);
        });
    }
    enterDeliveryPostalcode(postalCode) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.deliveryPostalcode, postalCode, 'deliveryPostalcode', true);
            yield genericMethod.pause(3000);
        });
    }
    verifyDeliveryState(state) {
        return __awaiter(this, void 0, void 0, function* () {
            const actualState = yield genericMethod.getValue(this.deliveryState, 'deliveryState');
            yield assertions.verifyEquals(state, actualState);
        });
    }
    verifyDeliveryCity(deliveryCity) {
        return __awaiter(this, void 0, void 0, function* () {
            const actualCity = yield genericMethod.getValue(this.deliveryCity, 'deliveryCity');
            yield assertions.verifyEquals(deliveryCity, actualCity);
            yield genericMethod.pause(3000);
        });
    }
    enterDeliveryUnit(buildingUnit) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.deliveryUnit, buildingUnit, 'buildingUnit');
        });
    }
    enterDeliveryAddress(address) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.deliveryAddress, address, 'deliveryAddress');
        });
    }
    enterDeliveryAddress2(address2) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.deliveryAddress2, address2, 'deliveryAddress2');
            yield genericMethod.click(this.deliveryAddress3, '');
        });
    }
    enterDeliveryEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.deliveryEmail, email, 'deliveryEmail');
        });
    }
    enterDeliveryPhNo(phone) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.deliveryPhnNumber, phone, 'deliveryPhNo');
        });
    }
    enterDeliveryIcNumber(icNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.deliveryIcNumber, icNumber, 'deliveryIcNumber');
        });
    }
    selectServiceType(type) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.serviceType, 'serviceType');
            yield genericMethod.clickIfDisplayed(this.serviceType_drpdwn, 'Frozen');
        });
    }
    selectServiceTypePU(type) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.serviceType, 'serviceType');
            yield genericMethod.clickIfDisplayed(this.serviceType_opn, 'SSD000');
        });
    }
    selectShipmentType(type) {
        return __awaiter(this, void 0, void 0, function* () {
            const shipment = protractor_1.element(protractor_1.by.xpath('//*[contains(@ng-reflect-value,"' + type + '")]'));
            yield genericMethod.clickUsingJs(this.shipmentTypeTab, 'shipmentTypeTab');
            yield genericMethod.click(shipment, type);
        });
    }
    selectMode(Mode) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.modeTab, 'clicked');
            yield genericMethod.clickIfDisplayed(this.mode_option, 'Pickup');
        });
    }
    FetchWayBill(fileName, sheetName, row, col) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.waybill, 'waybill');
            var bill = yield genericMethod.getValue(this.waybill, 'waybill');
            console.log(bill);
            const filepath = "//Data//" + fileName;
            const sheet = yield genericMethod.WriteData(bill, filepath, sheetName, row, col);
        });
    }
    enterPackageQuantity(quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.sendKeys(this.packageQuantity, quantity, 'packageQuantity', true);
            yield genericMethod.pause(3000);
            yield genericMethod.click(this.addPackage, 'addPackage', false);
        });
    }
    enterPackageWeight(weight) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.sendKeys(this.packageWeight, weight, 'packageWeight');
        });
    }
    enterPackageWidth(width) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.sendKeys(this.width, width, 'width');
        });
    }
    enterPackageHeight(height) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.sendKeys(this.height, height, 'height');
        });
    }
    enterPackageLength(length) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.sendKeys(this.length, length, 'length');
        });
    }
    verifyPackageType(type) {
        return __awaiter(this, void 0, void 0, function* () {
            const packageType = protractor_1.element(protractor_1.by.xpath('//span[text()="' + type + '"]'));
            const isDisplayed = yield assertions.verifyElementDisplayed(packageType, 'packageType');
            yield assertions.verifyConditionIsTrue(isDisplayed);
        });
    }
    uploadDropAttachment(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            const filepath = "//uploads//" + fileName;
            yield genericMethod.pause(5000);
            yield genericMethod.upload(this.attachment, filepath);
        });
    }
    verifyTotalAmount(expectedAmount) {
        return __awaiter(this, void 0, void 0, function* () {
            const amount = protractor_1.element(protractor_1.by.xpath('//label[contains(text(),"' + expectedAmount + '")]'));
            yield genericMethod.waitForElementToBeVisible(amount, expectedAmount);
            const actualAmount = yield genericMethod.getText(this.totalAmount, 'totalAmount');
            yield assertions.verifyContains(expectedAmount, actualAmount);
        });
    }
    TotalAmount(Amount) {
        return __awaiter(this, void 0, void 0, function* () {
            const amount = protractor_1.element(protractor_1.by.xpath('//label[contains(text(),"' + Amount + '")]'));
            yield genericMethod.waitForElementToBeVisible(amount, Amount);
            const actualAmount = yield genericMethod.getText(this.totalAmount, 'totalAmount');
            yield assertions.verifyContains(Amount, actualAmount);
        });
    }
    clickOnSubmitButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.pause(20000);
            yield genericMethod.scrollIntoView(this.SubmitButton, 'clicked');
            yield genericMethod.clickUsingJs(this.SubmitButton, 'clicked');
        });
    }
    clickOnClosebtn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.Close, 'clicked');
        });
    }
    clickNextButtonSummary() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.Close, 'clicked');
            yield genericMethod.pause(5000);
        });
    }
    clickOnShipmentmanagement() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.shipmentManagement, 'clicked');
            yield genericMethod.pause(5000);
        });
    }
    enterWaybillnum(fileName, sheetName, RowNum, columnNum) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.WaybillNumber, '');
            const filepath = "//Data//" + fileName;
            const waybill = yield genericMethod.getExcelData(filepath, sheetName, RowNum, columnNum);
            yield genericMethod.sendKeys(this.WaybillNumber, waybill, '');
        });
    }
    clickOnSearch() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.searchbtn, 'clicked');
        });
    }
    verifyOrderStatus(expectedValue) {
        return __awaiter(this, void 0, void 0, function* () {
            const actualValue = yield genericMethod.getText(this.status_grid, '');
            yield assertions.verifyContains(expectedValue, actualValue);
        });
    }
    //////////////////////personal user//////////////////////////////////
    clickOnPay() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.pay_btn, 'clicked');
        });
    }
    clickonBank(bank) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.selectBank, 'selectbank');
            yield genericMethod.click(this.bank, 'bankName');
        });
    }
    clickOnProceed() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.proceed_btn, 'clicked');
            yield genericMethod.pause(5000);
            yield genericMethod.click(this.Close, '');
        });
    }
    fetchWaybill_summary(fileName, sheetName, row, column) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.waybill_summary, '');
            var waybill = yield genericMethod.getText(this.waybill_summary, '');
            const filepath = "//Data//" + fileName;
            const sheet = yield genericMethod.WriteData(waybill, filepath, sheetName, row, column);
        });
    }
}
exports.CreateNewShipmentPage = CreateNewShipmentPage;
