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
class Reprintwaybill {
    constructor() {
        this.uName = protractor_1.element(protractor_1.by.xpath('//*[@formcontrolname="email"]'));
        this.pword = protractor_1.element(protractor_1.by.xpath('//*[@formcontrolname="password"]'));
        this.signin = protractor_1.element(protractor_1.by.id('kt_login_signin_submit'));
        this.Reprintwaybill = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Re-print Waybill")]'));
        this.ShipmentListText = protractor_1.element(protractor_1.by.xpath('//h3[contains(@class,"kt-portlet__head-title ng-star-inserted")]'));
        this.Waybillnum = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="waybillNumber"]'));
        this.Searchbutton = protractor_1.element(protractor_1.by.xpath('//span[contains( @class, "mat-button-wrapper") and text() =" Search "]'));
        this.Printwaybill = protractor_1.element(protractor_1.by.xpath('//span[contains( @class, "mat-button-wrapper") and text() =" Print Waybill "]'));
        this.ShipmentService = protractor_1.element(protractor_1.by.xpath('//mat-select[@formcontrolname="shipmentService"]'));
        this.StandardDelivery = protractor_1.element(protractor_1.by.xpath('//span[contains( @class, "mat-option-text") and text() =" Standard Delivery "]'));
        this.checkbox = protractor_1.element(protractor_1.by.xpath('(//div[contains(@class, "mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin" )])[1]'));
        this.PrintIcon = protractor_1.element(protractor_1.by.xpath('//mat-icon[contains(@class, "mat-icon notranslate material-icons mat-icon-no-color" )]'));
        this.SenderNamePrintwaybill = protractor_1.element(protractor_1.by.xpath('//*[@class="mat-cell cdk-column-SenderName mat-column-SenderName ng-star-inserted"]//span'));
        this.RcvrNamePrintwaybill = protractor_1.element(protractor_1.by.xpath('//*[@class="mat-cell cdk-column-RecipientName mat-column-RecipientName ng-star-inserted"]//span'));
        this.shipmentManagement = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Shipment Management")]'));
        // wayBilNumberTextfield = element(by.xpath('//input[@formcontrolname="waybillNumber"]'));
        this.searchBtn = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Search")]'));
        this.ellipseBtn = protractor_1.element(protractor_1.by.xpath('//mat-icon[contains(text(),"more_vert")]'));
        this.optionPannel = protractor_1.element(protractor_1.by.xpath('//div[@ng-reflect-klass="mat-menu-panel"]'));
        this.ViewButton = protractor_1.element(protractor_1.by.xpath('//button[@ng-reflect-message="View Shipment"]'));
        this.OKpopupbutton = protractor_1.element(protractor_1.by.xpath('//span[contains( @class, "mat-button-wrapper") and text() =" OK "]'));
        this.RefNo = protractor_1.element(protractor_1.by.xpath('//*[@formcontrolname="referenceNumber"]'));
    }
    launchUrl() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.waitForAngularEnabled(false);
            yield genericMethod.navigateTo(protractor_1.browser.baseUrl);
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
            yield genericMethod.pause(5000);
        });
    }
    clickReprintwaybill() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.mouseHoverAndClick(this.Reprintwaybill, 'Reprintwaybill button');
        });
    }
    VerifyShipmentListText() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.waitForElementToBeVisible(this.ShipmentListText, 'ShipmentList Text Present');
        });
    }
    EnterWaybillno(fileName, sheetName, RowNum, columnNum) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.Waybillnum, 'Waybillnum');
            const filepath = "//Data//" + fileName;
            const waybill = yield genericMethod.getExcelData(filepath, sheetName, RowNum, columnNum);
            yield genericMethod.sendKeys(this.Waybillnum, waybill, 'Waybillnum');
            yield genericMethod.clickUsingJs(this.Searchbutton, 'Searchbutton button');
            yield genericMethod.clickUsingJs(this.checkbox, 'checkbox button');
        });
    }
    clickprintwaybill() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.Printwaybill, 'Printwaybill button');
            yield genericMethod.pause(5000);
            yield genericMethod.closeTab(1);
            yield genericMethod.pause(5000);
            yield genericMethod.clearField(this.Waybillnum);
        });
    }
    SelectShipmentService() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.pause(8000);
            yield genericMethod.clickUsingJs(this.ShipmentService, 'ShipmentService button');
            yield genericMethod.clickUsingJs(this.StandardDelivery, 'StandardDelivery');
        });
    }
    clickSearch() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.Searchbutton, 'Searchbutton button');
            yield genericMethod.clickUsingJs(this.checkbox, 'checkbox button');
        });
    }
    clickPrintIcon() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.PrintIcon, 'PrintIcon button');
            yield genericMethod.pause(5000);
            yield genericMethod.closeTab(1);
        });
    }
    clickShipmentManagement() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.pause(5000);
            yield genericMethod.mouseHoverAndClick(this.shipmentManagement, 'shipmentManagement button');
        });
    }
    Enterwaybill() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.Waybillnum, 'wayBilNumberTextfield button');
            yield genericMethod.clearField(this.Waybillnum);
            const waybill = yield genericMethod.getExcelData("//Data//data.xlsx", "dummy", 3, 5);
            yield genericMethod.sendKeys(this.Waybillnum, waybill, 'Waybillnum');
        });
    }
    clickonSearch() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.searchBtn, 'searchBtn button');
            yield genericMethod.clickUsingJs(this.RefNo, 'RefNo');
        });
    }
    clickElipseIcon() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.ellipseBtn, 'ellipseBtn button');
            yield genericMethod.pause(3000);
            yield genericMethod.clickUsingJs(this.ellipseBtn, 'ellipseBtn button');
            yield genericMethod.clickUsingJs(this.ViewButton, 'ViewButton ');
            yield genericMethod.click(this.OKpopupbutton, 'OKpopupbutton ');
        });
    }
}
exports.Reprintwaybill = Reprintwaybill;
