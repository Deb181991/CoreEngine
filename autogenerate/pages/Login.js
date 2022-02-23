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
class LoginPage {
    constructor() {
        this.userName = protractor_1.element(protractor_1.by.xpath('//*[@formcontrolname="email"]'));
        this.password = protractor_1.element(protractor_1.by.xpath('//*[@formcontrolname="password"]'));
        this.name_logout = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Hi")]'));
        this.signOut = protractor_1.element(protractor_1.by.xpath('//a[contains(text(),"Sign Out")]'));
        this.submit = protractor_1.element(protractor_1.by.id('kt_login_signin_submit'));
        ///////////////////////////////////////Pickup////////////////////////////////////////////////
        this.Pickup = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Pickup")]'));
        this.pickupbutton = protractor_1.element(protractor_1.by.xpath('//span[contains(@class, "kt-menu__link-text ng-star-inserted") and text() = "Pickup"]'));
        this.ManagePrs = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Manage PRS")]'));
        this.Pickup_request = protractor_1.element(protractor_1.by.xpath('//div[contains(text(),"Pickup Request")]'));
        this.Assigned = protractor_1.element(protractor_1.by.xpath('(//div[contains(@class,"mat-tab-label-content")])[4]'));
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////
    launchUrl() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.waitForAngularEnabled(false);
            yield genericMethod.navigateTo(protractor_1.browser.baseUrl);
        });
    }
    verifyNavigation() {
        return __awaiter(this, void 0, void 0, function* () {
            const isUserNameDisplayed = yield assertions.verifyElementDisplayed(this.userName, 'userName');
            const isPasswordDisplayed = yield assertions.verifyElementDisplayed(this.password, 'password');
        });
    }
    enterEmail(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.sendKeys(this.userName, userName, 'userName');
            // await genericMethod.clearField(this.userName);
            // await genericMethod.pause(3000);    
            // var actualValue = "Your PRS PRS/DSML/2111/000322 has been successfully created and assigned to ZURIYATI BINTI ZULKAFLI"
            // var a = actualValue.split(' ');  
            // console.log(a);  
            // await genericMethod.sendKeys(this.userName, a[2], 'userName');
            //await genericMethod.arithmaticlogic();
            //await genericMethod.Increment2();
        });
    }
    Exceldata(fileName, sheetName, rowNum, columnNum) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clearField(this.userName);
            const filepath = "//Data//" + fileName;
            //const filepath = "./Data/data.xlsx";
            const x = yield genericMethod.getExcelData(filepath, sheetName, rowNum, columnNum);
            yield genericMethod.sendKeys(this.userName, x, '');
        });
    }
    WriteData(fileName, sheetName, rowNum, columnNum) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.userName, '');
            var z = yield genericMethod.getValue(this.userName, '');
            var v = yield z.slice(0, -2);
            console.log(v);
            const filepath = "//Data//" + fileName;
            const y = yield genericMethod.WriteData(v, filepath, sheetName, 4, 4);
            console.log(y);
            yield genericMethod.clearField(this.userName);
            var d = yield genericMethod.Increment(filepath, sheetName, 2, 2);
            yield genericMethod.sendKeys(this.userName, d, '');
        });
    }
    enterPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.sendKeys(this.password, password, 'password');
            //await genericMethod.Split();
        });
    }
    verifyLoggedInPageUrl(pageUrl) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.waitForElementToBeVisible(this.name_logout, 'name_logout');
            var url = yield genericMethod.getPageUrl();
            yield assertions.verifyContains(pageUrl, url);
        });
    }
    clickSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.submit, 'submit');
            yield genericMethod.pause(2000);
            // await genericMethod.click(this.pickupbutton, 'pickupbutton');
            // await genericMethod.pause(2000);
            // await genericMethod.click(this.ManagePrs, 'ManagePrs');
            // await genericMethod.pause(2000);
            // await genericMethod.click(this.Pickup_request, 'Pickup_request');
            // await genericMethod.pause(2000);
            // await genericMethod.click(this.Assigned, 'Assigned');
        });
    }
    Profilebutton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.pause(3000);
            yield genericMethod.click(this.name_logout, 'name_logout');
        });
    }
    logout() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.signOut, 'signOut');
        });
    }
    CELOGIN() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.CE_URL();
        });
    }
    CEclickSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.submit, 'submit');
            yield genericMethod.pause(2000);
            //await genericMethod.Takescreenshot();
            //await assertions.verifyEquals(this.Pickup,'');
            yield genericMethod.duplicateTAB(1);
            yield genericMethod.pause(2000);
            yield genericMethod.switchToTab(0);
            yield genericMethod.pause(2000);
        });
    }
    pickupCheck(pickup) {
        return __awaiter(this, void 0, void 0, function* () {
            var p = yield genericMethod.getText(this.Pickup, '');
            yield assertions.verifyEquals(p, pickup);
        });
    }
}
exports.LoginPage = LoginPage;
