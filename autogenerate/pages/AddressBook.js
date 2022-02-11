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
class AddressBookPage {
    constructor() {
        this.addressBook = protractor_1.element(protractor_1.by.xpath('//span[text()="Address Book"]//parent::a'));
        this.addAddressButton = protractor_1.element(protractor_1.by.xpath('//button[@ng-reflect-message="Add address"]'));
        this.exportAddress = protractor_1.element(protractor_1.by.xpath('//button[@ng-reflect-message="Export addresses"]'));
        this.importAddress = protractor_1.element(protractor_1.by.xpath('//button[@ng-reflect-message="Import addresses"]'));
        this.companyName = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="CompanyName"]'));
        this.contactPerson = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="Name"]'));
        this.phone = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="Phone"]'));
        this.email = protractor_1.element(protractor_1.by.xpath('//input[@ng-reflect-name="Email"]'));
        this.postCode = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="PostalCode"]'));
        this.state = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="State"]'));
        this.city = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="City"]'));
        this.buildingUnit = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="BuildingUnit"]'));
        this.address1 = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="Address1"]'));
        this.address2 = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="Address2"]'));
        this.country = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="Country"]'));
        this.mobile = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="Mobile"]'));
        this.category = protractor_1.element(protractor_1.by.xpath('//span[text() = "Delivery Address"]'));
        this.saveButton = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"SAVE")]//parent::button'));
        this.scrollUp = protractor_1.element(protractor_1.by.xpath('//div[@id="kt_scrolltop"]'));
        this.download = protractor_1.element(protractor_1.by.xpath('//a[@ng-reflect-message="Click to get template"]'));
        this.upload = protractor_1.element(protractor_1.by.xpath('//input[@type="file"]'));
        this.submitButton = protractor_1.element(protractor_1.by.xpath('//button[text()="SUBMIT"]'));
        this.successMessage = protractor_1.element(protractor_1.by.xpath('//span[contains(text() ,"Addresses imported successfully")]'));
        this.errorMessage = protractor_1.element(protractor_1.by.xpath('//span[contains(text() ,"Import operation failed")]'));
        this.invalidPhoneMessage = protractor_1.element(protractor_1.by.xpath('//span[contains(text()," Phone number must be a valid phone number")]'));
        this.invalidCityMessage = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Invalid City")]'));
        this.invalidEmailMessage = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Invalid Email address")]'));
        this.invalidPostalCodeMessage = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Postal Code is Required")]'));
        this.invalidStateMessage = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Invalid State")]'));
        this.invalidMobileMessage = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Mobile number must be a valid mobile number (e.g., +8554677xx).")]'));
    }
    navigateToAddressBook() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.mouseHoverAndClick(this.addressBook, 'addressBook');
            yield genericMethod.waitForPageToLoad();
        });
    }
    clickAddAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.addAddressButton, 'addAddressButton', false);
        });
    }
    enterCompanyName(companyName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.companyName, companyName, 'companyName');
        });
    }
    enterContactPerson(contactPerson) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.contactPerson, contactPerson, 'contactPerson');
        });
    }
    enterPhone(phone) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.phone, phone, 'phone', true);
        });
    }
    enterEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.email, email, 'email', true);
        });
    }
    enterPostCode(postCode) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.sendKeys(this.postCode, postCode, 'postCode', true);
            yield genericMethod.pause(3000);
        });
    }
    verifyState(state) {
        return __awaiter(this, void 0, void 0, function* () {
            const actualState = yield genericMethod.getValue(this.state, 'state');
            yield assertions.verifyEquals(state, actualState);
        });
    }
    verifyCity(city) {
        return __awaiter(this, void 0, void 0, function* () {
            const actualcity = yield genericMethod.getValue(this.city, 'city');
            yield assertions.verifyEquals(city, actualcity);
        });
    }
    enterBuildingUnit(buildingUnit) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.buildingUnit, buildingUnit, 'buildingUnit');
        });
    }
    enterAddress(address1) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.address1, address1, 'address1');
        });
    }
    enterAddress2(address2) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.address2, address2, 'address2');
        });
    }
    verifyCountry(country) {
        return __awaiter(this, void 0, void 0, function* () {
            const actualcountry = yield genericMethod.getValue(this.country, 'country');
            yield assertions.verifyEquals(country, actualcountry);
        });
    }
    clickSave() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.saveButton, 'saveButton');
        });
    }
    verifyCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            const actualcategory = yield genericMethod.getText(this.category, category);
            yield assertions.verifyEquals(category, actualcategory);
        });
    }
    enterMobile(mobile) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.mobile, mobile, 'mobile', true);
        });
    }
    verifyRecord(record) {
        return __awaiter(this, void 0, void 0, function* () {
            const recordPath = protractor_1.element.all(protractor_1.by.xpath('//span[contains(text(),"' + record + '")]')).first();
            const actualcategory = yield genericMethod.getText(recordPath, record);
            yield assertions.verifyEquals(record, actualcategory);
        });
    }
    importAddresses() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.importAddress, 'importAddresses', false);
        });
    }
    downloadTemplate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.waitForPageToLoad();
            yield genericMethod.click(this.download, 'downloadTemplate', false);
        });
    }
    verifyFileDownloaded(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            const exists = yield assertions.verifyFileExists("//downloads//" + fileName);
            yield assertions.verifyConditionIsTrue(exists);
        });
    }
    uploadFile(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            const filepath = "//uploads//" + fileName;
            yield genericMethod.pause(5000);
            yield genericMethod.upload(this.upload, filepath);
        });
    }
    submit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.submitButton, 'submitButton', false);
        });
    }
    verifyFileData(record, fileName, sheetName, rowNum, columnNum) {
        return __awaiter(this, void 0, void 0, function* () {
            const recordPath = protractor_1.element.all(protractor_1.by.xpath('//span[contains(text(),"' + record + '")]')).first();
            const filepath = "//uploads//" + fileName;
            yield genericMethod.pause(5000);
            const excelvalue = yield genericMethod.getExcelData(filepath, sheetName, rowNum, columnNum);
            const actualvalue = yield genericMethod.getText(recordPath, record);
            yield assertions.verifyEquals(excelvalue, actualvalue);
        });
    }
    verifySuccessMessage(success) {
        return __awaiter(this, void 0, void 0, function* () {
            const actualmessage = yield genericMethod.getText(this.successMessage, success);
            yield assertions.verifyEquals(success, actualmessage);
        });
    }
    verifyErrorMessage(success) {
        return __awaiter(this, void 0, void 0, function* () {
            const actualmessage = yield genericMethod.getText(this.errorMessage, success);
            yield assertions.verifyEquals(success, actualmessage);
        });
    }
    enterState(state) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.state, state, 'state', true);
        });
    }
    enterCity(city) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.city, city, 'city', true);
        });
    }
    verifyCompany(companyName) {
        return __awaiter(this, void 0, void 0, function* () {
            const actualcompany = yield genericMethod.getValue(this.companyName, 'companyName');
            yield assertions.verifyEquals(companyName, actualcompany);
        });
    }
    verifyContactPerson(contactPerson) {
        return __awaiter(this, void 0, void 0, function* () {
            const actualcontactPerson = yield genericMethod.getValue(this.contactPerson, 'contactPerson');
            yield assertions.verifyEquals(contactPerson, actualcontactPerson);
        });
    }
    verifyPhoneValidation(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const actualMessage = yield genericMethod.getText(this.invalidPhoneMessage, 'message');
            yield assertions.verifyContains(message, actualMessage);
        });
    }
    verifyEmailValidation(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const actualMessage = yield genericMethod.getText(this.invalidEmailMessage, 'message');
            yield assertions.verifyEquals(message, actualMessage);
        });
    }
    verifyPostCodeValidation(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const actualMessage = yield genericMethod.getText(this.invalidPostalCodeMessage, 'message');
            yield assertions.verifyEquals(message, actualMessage);
        });
    }
    verifyStateValidation(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const actualMessage = yield genericMethod.getText(this.invalidStateMessage, 'message');
            yield assertions.verifyEquals(message, actualMessage);
        });
    }
    verifyCityValidation(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const actualMessage = yield genericMethod.getText(this.invalidCityMessage, 'message');
            yield assertions.verifyEquals(message, actualMessage);
        });
    }
    verifyMobileValidation(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const actualMessage = yield genericMethod.getText(this.invalidMobileMessage, 'message');
            yield assertions.verifyContains(message, actualMessage);
        });
    }
    verifyBuildingUnit(buildingUnit) {
        return __awaiter(this, void 0, void 0, function* () {
            const actualbuildingunit = yield genericMethod.getValue(this.buildingUnit, 'buildingUnit');
            yield assertions.verifyEquals(buildingUnit, actualbuildingunit);
        });
    }
    verifyAddress1(address1) {
        return __awaiter(this, void 0, void 0, function* () {
            const actualaddress1 = yield genericMethod.getValue(this.address1, 'address1');
            yield assertions.verifyEquals(address1, actualaddress1);
        });
    }
    verifyAddress2(address2) {
        return __awaiter(this, void 0, void 0, function* () {
            const actualaddress2 = yield genericMethod.getValue(this.address2, 'address2');
            yield assertions.verifyEquals(address2, actualaddress2);
        });
    }
    verifyValidationOnSave(invalidPhoneMessage, invalidEmailMessage, invalidStateMessage, invalidCityMessage, invalidMobileMessage) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.verifyPhoneValidation(invalidPhoneMessage);
            yield this.verifyEmailValidation(invalidEmailMessage);
            yield this.verifyStateValidation(invalidStateMessage);
            yield this.verifyCityValidation(invalidCityMessage);
            yield this.verifyMobileValidation(invalidMobileMessage);
        });
    }
}
exports.AddressBookPage = AddressBookPage;
