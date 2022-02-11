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
class CreatePU {
    constructor() {
        this.pickupbutton = protractor_1.element(protractor_1.by.xpath('//span[contains(@class, "kt-menu__link-text ng-star-inserted") and text() = "Pickup"]'));
        this.CreatePU = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Create PU")]'));
        this.AccountPU = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Account"]'));
        this.clickaccnt = protractor_1.element(protractor_1.by.xpath('//mat-option[@class="mat-option ng-star-inserted mat-active"]'));
        this.postcode = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Pickup Postcode"]'));
        this.State = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Pickup State"]'));
        this.City = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Pickup City"]'));
        this.building_Unitnumber = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Pickup Building/Unit Number"]'));
        this.address = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Pickup Address"]'));
        this.address2 = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Pickup Address 2"]'));
        this.BranchCode = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Branch Code"]'));
        this.ContactPerson = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Contact Person"]'));
        this.phonenumber = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="PhoneNumber"]'));
        this.Remarks = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Remarks"]'));
        this.Routeld = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Pickup RouteId"]'));
        this.NOP = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Number Of Packages"]'));
        this.Submit = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Submit")]'));
        this.ManageRPS = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Manage PRS")]'));
        this.PRSTab = protractor_1.element(protractor_1.by.xpath('//div[contains(text(),"Pickup Runsheet")]'));
        this.PURTab = protractor_1.element(protractor_1.by.xpath('//div[contains(text(),"Pickup Request")]'));
        this.PRSN = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="prsNumber"]'));
        this.PUN = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="puNumber"]'));
        this.Branchcode = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="loggedUserBranchCode"]'));
        this.PFDN = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="fromDate"]'));
        this.PRSTD = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="toDate"]'));
        this.Waybillnumber = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="wayBillNumber"]'));
        this.customer_code = protractor_1.element(protractor_1.by.xpath('//*[@id="kt_content"]/div/kt-pickup/kt-create-prs/div[1]/div/kt-portlet/div/kt-portlet-body/form/div/div[2]/mat-form-field/div/div[1]/div'));
        this.successmsg = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Your pick up")]'));
    }
    navigateToPickup() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.mouseHoverAndClick(this.pickupbutton, 'pickupbutton');
        });
    }
    clickcreatepu() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.mouseHoverAndClick(this.CreatePU, 'CreatePU');
            yield genericMethod.pause(10000);
        });
    }
    AccPU(AccountPU) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.sendKeys(this.AccountPU, AccountPU, 'AccountPU');
            yield protractor_1.browser.actions().sendKeys(protractor_1.Key.TAB).perform();
        });
    }
    postcodePU(postcode) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.sendKeys(this.postcode, postcode, 'postcode');
            yield protractor_1.browser.actions().sendKeys(protractor_1.Key.TAB).perform();
            yield protractor_1.browser.actions().sendKeys(protractor_1.Key.TAB).perform();
            yield protractor_1.browser.actions().sendKeys(protractor_1.Key.TAB).perform();
        });
    }
    buildingUnitnumber_PU(buildingUnitnumber_PU) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.sendKeys(this.building_Unitnumber, buildingUnitnumber_PU, 'building_Unitnumber');
            yield protractor_1.browser.actions().sendKeys(protractor_1.Key.TAB).perform();
        });
    }
    addressPU(address) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.sendKeys(this.address, address, 'address');
            yield protractor_1.browser.actions().sendKeys(protractor_1.Key.TAB).perform();
        });
    }
    addresstwoPU(address2) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.address2, address2, 'address2');
            yield protractor_1.browser.actions().sendKeys(protractor_1.Key.TAB).perform();
        });
    }
    ContactPersonPU(ContactPerson) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.sendKeys(this.ContactPerson, ContactPerson, 'ContactPerson');
            yield protractor_1.browser.actions().sendKeys(protractor_1.Key.TAB).perform();
        });
    }
    phonenumberPU(phonenumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.sendKeys(this.phonenumber, phonenumber, 'phonenumber');
            yield protractor_1.browser.actions().sendKeys(protractor_1.Key.TAB).perform();
        });
    }
    RemarksPU(Remarks) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.sendKeys(this.Remarks, Remarks, 'Remarks');
            yield protractor_1.browser.actions().sendKeys(protractor_1.Key.TAB).perform();
        });
    }
    RouteldPU(Routeld) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.sendKeys(this.Routeld, Routeld, 'Routeld');
            yield protractor_1.browser.actions().sendKeys(protractor_1.Key.TAB).perform();
        });
    }
    Numofpackage(NOP) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.sendKeys(this.NOP, NOP, 'NOP');
        });
    }
    SubmitPU() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.pause(3000);
            yield genericMethod.mouseHoverAndClick(this.Submit, 'Submit');
            console.log('PU Successful');
        });
    }
    VerifySuccessmessage() {
        return __awaiter(this, void 0, void 0, function* () {
            var actualValue = yield genericMethod.getText(this.successmsg, '');
            console.log(actualValue);
        });
    }
}
exports.CreatePU = CreatePU;
