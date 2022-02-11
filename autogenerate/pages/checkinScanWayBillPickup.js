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
const assertions = new Assertions_1.Assertions();
const genericMethod = new GenericMethod_1.GenericMethod();
class CheckinScanPickup {
    constructor() {
        this.email = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="email"]'));
        this.password = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="password"]'));
        this.signInBtn = protractor_1.element(protractor_1.by.xpath('//button[text()="Sign In"]'));
        this.booking = protractor_1.element(protractor_1.by.xpath("//span[text()='Booking']//parent::a"));
        this.checkinScanPickup = protractor_1.element(protractor_1.by.xpath('//span[text()="Checkin Scan Pickup"]//parent::a'));
        this.checkInScanText = protractor_1.element(protractor_1.by.xpath('//h3[text()="Checkin Scan Pickup"]'));
        this.wayBilltextField = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="WaybillNo"]'));
        this.plusButton = protractor_1.element(protractor_1.by.xpath('//mat-icon[text()=" add_circle_outline "]/..//parent::button'));
        this.branchCode = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="pickupZone"]'));
        this.dsmlOption = protractor_1.element(protractor_1.by.xpath('//span[text()=" DSML "]//parent::mat-option'));
        this.okBtn = protractor_1.element(protractor_1.by.xpath('//span[text()="OK"]//parent::button'));
        this.successFullMessage = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"successfully.")]'));
        this.viewTrack = protractor_1.element(protractor_1.by.xpath('//span[text()="View and Track"]//parent::a'));
        this.csWebSiteTracking = protractor_1.element(protractor_1.by.xpath('//span[text()="CS Website Tracking"]'));
        this.operation = protractor_1.element(protractor_1.by.xpath('//a[@href="#/view-track/operation"]'));
        this.operationText = protractor_1.element(protractor_1.by.xpath('//h3[text()="Operation"]'));
        this.waybillTF = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Way Bill No"]'));
        this.trackBtn = protractor_1.element(protractor_1.by.xpath('//span[text()="Track"]//parent::button'));
        this.shipment = protractor_1.element(protractor_1.by.xpath('//table[@class="table table-bordered"]'));
        this.viewBtn = protractor_1.element(protractor_1.by.xpath('//mat-icon[@mattooltip="View"]/..//parent::button'));
        this.trackBtnn = protractor_1.element(protractor_1.by.xpath('//mat-icon[text()=" location_searching"]/..//parent::button'));
        //status=element(by.xpath('//label[text()="Status :"]/../..//div[text()=" Checked In at Pickup Branch "]'));
        this.status = protractor_1.element(protractor_1.by.xpath('(//div[contains(text()," Checked ")])[1]'));
        this.status2 = protractor_1.element(protractor_1.by.xpath('//label[contains(text(),"Status :")]'));
    }
    launchUrl() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.navigateTo(protractor_1.browser.baseUrl);
        });
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
    clickOnSignIn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.signInBtn, 'sign in button');
        });
    }
    verifyCEPage(expectedTitle) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.pause(10000);
            const actualTitle = yield genericMethod.getTitle();
            yield assertions.verifyEquals(expectedTitle, actualTitle);
        });
    }
    //////////////////////////////////////////Checkin/////////////////////////////////////
    clickOnBooking() {
        return __awaiter(this, void 0, void 0, function* () {
            //await genericMethod.scrollIntoView(this.booking,'booking');
            yield genericMethod.refreshPage();
            yield genericMethod.clickUsingJs(this.booking, 'booking');
        });
    }
    clickOnCheckinScanPickup() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.checkinScanPickup, 'checkin scan pickup');
        });
    }
    verifyCheckInScanPickup(expectedText) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.pause(10000);
            const actualText = yield genericMethod.getText(this.checkInScanText, 'checkin scan pickup');
            yield assertions.verifyEquals(expectedText, actualText);
        });
    }
    enterWayBill(fileName, sheetName, RowNum, col) {
        return __awaiter(this, void 0, void 0, function* () {
            const filepath = "//Data//" + fileName;
            const waybill = yield genericMethod.getExcelData(filepath, sheetName, RowNum, col);
            yield genericMethod.clickAndSendKeys(this.wayBilltextField, waybill, '');
        });
    }
    clickOnPlusBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.plusButton, '');
        });
    }
    enterDataInBranchCode(branchCode) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.branchCode, branchCode, '');
        });
    }
    clickOnDsml() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.dsmlOption, '');
        });
    }
    clickOnOkBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.okBtn, '');
        });
    }
    verifySuccessPopup() {
        return __awaiter(this, void 0, void 0, function* () {
            yield assertions.verifyElementDisplayed(this.successFullMessage, '');
            yield genericMethod.pause(4000);
        });
    }
    Switch_win() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.switchToTab(1);
        });
    }
    CheckinStatus() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.viewTrack, '');
        });
    }
    clickOnViewTrack() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.viewTrack, '');
        });
    }
    clickOnOperation() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.operation, '');
        });
    }
    verifyOperationPage(expectedText) {
        return __awaiter(this, void 0, void 0, function* () {
            const actualText = yield genericMethod.getText(this.operationText, '');
            console.log(actualText);
            yield assertions.verifyContains(expectedText, actualText);
        });
    }
    waybill(fileName, sheetName, RowNum, col) {
        return __awaiter(this, void 0, void 0, function* () {
            const filepath = "//Data//" + fileName;
            const waybill = yield genericMethod.getExcelData(filepath, sheetName, RowNum, col);
            yield genericMethod.clickAndSendKeys(this.waybillTF, waybill, '', true);
        });
    }
    clicktrackBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.trackBtn, '');
        });
    }
    verifyShipment() {
        return __awaiter(this, void 0, void 0, function* () {
            yield assertions.verifyElementDisplayed(this.shipment, '');
        });
    }
    clickOnViewBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.viewBtn, '');
        });
    }
    CheckinverifyStatus(expectedText) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.status2, '');
            const actualText = yield genericMethod.getText(this.status, '');
            console.log(actualText);
            yield assertions.verifyContains(expectedText, actualText);
            yield genericMethod.pause(2000);
            yield genericMethod.switchToTab(0);
        });
    }
}
exports.CheckinScanPickup = CheckinScanPickup;
