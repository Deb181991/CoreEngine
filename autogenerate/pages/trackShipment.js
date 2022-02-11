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
class trackShipment {
    constructor() {
        this.uName = protractor_1.element(protractor_1.by.xpath('//*[@formcontrolname="email"]'));
        this.pword = protractor_1.element(protractor_1.by.xpath('//*[@formcontrolname="password"]'));
        this.signin = protractor_1.element(protractor_1.by.id('kt_login_signin_submit'));
        ////////////////////////////////////////////////Track Shipments- OMS////////////////////////////////
        this.TrackShipment = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Track Shipments")]'));
        this.TrackingNumber = protractor_1.element(protractor_1.by.xpath('//*[@placeholder="Provide the tracking number separated by comma.."]'));
        this.TrackButton = protractor_1.element(protractor_1.by.xpath('//span[contains(@class, "mat-button-wrapper" ) and text() = "Track"] '));
        this.BookedDate = protractor_1.element(protractor_1.by.xpath('//div[contains(text(),"Booked Date")]'));
        this.fromDatailsOMS = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"From :")]'));
        this.ToDatailsOMS = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"To :")]'));
        this.ShipmentListText = protractor_1.element(protractor_1.by.xpath('//h3[contains(@class,"kt-portlet__head-title ng-star-inserted")]'));
        this.OMSStatus = protractor_1.element(protractor_1.by.xpath('//*[@class="col-xl-8 mb-2 shipment_status"]//label'));
        ////////////////////////////////////////////////View and Track- CE////////////////////////////////
        this.ViewAndTrack = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"View and Track")]'));
        this.Operation = protractor_1.element(protractor_1.by.xpath('(//span[contains(text(),"Operation")])[2]'));
        this.Waybillnumber = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Way Bill No"]'));
        this.Trackbutton = protractor_1.element(protractor_1.by.xpath('//span[contains(@class, "mat-button-wrapper") and text() = "Track"]'));
        this.ToDatailsCE = protractor_1.element(protractor_1.by.xpath('//tbody//tr//td[5]'));
        this.fromDatailsCE = protractor_1.element(protractor_1.by.xpath('//tbody//tr//td[5]'));
        this.CEStatus = protractor_1.element(protractor_1.by.xpath('//kt-portlet-body/div[1]/div[2]/div[1]/div[1]/mat-card[1]/div[4]/div[2]'));
        this.Awaybill = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Way Bill No"]'));
    }
    launchUrl() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.waitForAngularEnabled(false);
            yield genericMethod.navigateTo(protractor_1.browser.baseUrl);
        });
    }
    verifyNavigation() {
        return __awaiter(this, void 0, void 0, function* () {
            const isUserNameDisplayed = yield assertions.verifyElementDisplayed(this.uName, 'userName');
            const isPasswordDisplayed = yield assertions.verifyElementDisplayed(this.pword, 'password');
        });
    }
    enterEmail(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.sendKeys(this.uName, userName, 'userName');
        });
    }
    enterPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.sendKeys(this.pword, password, 'password');
        });
    }
    clickSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.signin, 'submit');
            yield genericMethod.pause(8000);
        });
    }
    ClickTrackShipment() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.mouseHoverAndClick(this.TrackShipment, 'TrackShipment');
        });
    }
    VerifyShipmentListText() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.waitForElementToBeVisible(this.ShipmentListText, 'ShipmentList Text Present');
        });
    }
    EnterTrackingNumber(fileName, sheetName, RowNum, columnNum) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.TrackingNumber, 'TrackingNumber');
            const filepath = "//Data//" + fileName;
            const waybill = yield genericMethod.getExcelData(filepath, sheetName, RowNum, columnNum);
            yield genericMethod.sendKeys(this.TrackingNumber, waybill, 'TrackingNumber');
        });
    }
    ClickTrack() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.TrackButton, 'TrackshipmentButton');
        });
    }
    CaptureBookingDetailsOMS() {
        return __awaiter(this, void 0, void 0, function* () {
            var BookedDate = yield genericMethod.getText(this.BookedDate, 'BookedDate');
            var fromDatailsOMS = yield genericMethod.getText(this.fromDatailsOMS, 'fromDatailsOMS');
            var ToDatailsOMS = yield genericMethod.getText(this.ToDatailsOMS, 'ToDatailsOMS');
            console.log(BookedDate);
            console.log(fromDatailsOMS);
            console.log(ToDatailsOMS);
            var OMS_Status = yield genericMethod.getText(this.OMSStatus, 'OMSStatus');
            console.log(OMS_Status);
            yield genericMethod.WriteData(OMS_Status, "//Data/data.xlsx", "dummy", 2, 13);
        });
    }
    CELOGIN() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.CE_URL();
        });
    }
    ClickViewAndTrack() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.mouseHoverAndClick(this.ViewAndTrack, 'ViewAndTrack');
        });
    }
    ClickOperation() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.mouseHoverAndClick(this.Operation, 'Operation');
            yield genericMethod.pause(5000);
        });
    }
    EnterWaybillnumber(fileName, sheetName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.Waybillnumber, 'Waybillnumber');
            var filepath = "//Data//" + fileName;
            var waybill = yield genericMethod.getExcelData(filepath, sheetName, 3, 5);
            console.log(waybill);
            yield genericMethod.sendKeys(this.Waybillnumber, waybill, '');
        });
    }
    Clicktrack() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.Trackbutton, 'ViewAndTrackButton');
        });
    }
    CaptureBookingDetailsCE() {
        return __awaiter(this, void 0, void 0, function* () {
            var fromDatailsCE = yield genericMethod.getText(this.fromDatailsCE, 'fromDatailsCE');
            var ToDatailsCE = yield genericMethod.getText(this.ToDatailsCE, 'ToDatailsCE');
            console.log(fromDatailsCE);
            console.log(ToDatailsCE);
        });
    }
    VerifyBookingDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            var OMS_Status = yield genericMethod.getExcelData("//Data//data.xlsx", "dummy", 2, 13);
            console.log(OMS_Status);
            var CEStatus = yield genericMethod.getText(this.CEStatus, 'CEStatus');
            console.log(CEStatus);
            yield assertions.verifyEquals(OMS_Status, CEStatus);
        });
    }
}
exports.trackShipment = trackShipment;
