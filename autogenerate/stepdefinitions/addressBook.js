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
const AddressBook_1 = require("../pages/AddressBook");
const GenericMethod_1 = require("../utils/GenericMethod");
const address = new AddressBook_1.AddressBookPage();
const genericMethod = new GenericMethod_1.GenericMethod();
cucumber_1.When('Mouse hover on the Address option of left panel and click on the Address Book option', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield address.navigateToAddressBook();
}));
cucumber_1.When('Click on the Create Address icon', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield address.clickAddAddress();
}));
cucumber_1.When('Provide the name in the {string} field', { timeout: genericMethod.defaultTestTimeout }, (companyName) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.enterCompanyName(companyName);
}));
cucumber_1.When('Provide the person name in the {string} field', { timeout: genericMethod.defaultTestTimeout }, (contactPerson) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.enterContactPerson(contactPerson);
}));
cucumber_1.When('Provide the number in the {string} field', { timeout: genericMethod.defaultTestTimeout }, (number) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.enterPhone(number);
}));
cucumber_1.When('Provide the Email in the {string} field', { timeout: genericMethod.defaultTestTimeout }, (email) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.enterEmail(email);
}));
cucumber_1.When('Enter the {string}', { timeout: genericMethod.defaultTestTimeout }, (postCode) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.enterPostCode(postCode);
}));
cucumber_1.When('Check whether {string} and {string} data is fetched or not', { timeout: genericMethod.defaultTestTimeout }, (state, city) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.verifyState(state);
    yield address.verifyCity(city);
}));
cucumber_1.When('Enter the {string} number', { timeout: genericMethod.defaultTestTimeout }, (buildingUnit) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.enterBuildingUnit(buildingUnit);
}));
cucumber_1.When('Enter the text in the Address {string} field', { timeout: genericMethod.defaultTestTimeout }, (address1) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.enterAddress(address1);
}));
cucumber_1.When('Click on the Address2  dropdown {string} and select option from it', { timeout: genericMethod.defaultTestTimeout }, (address2) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.enterAddress2(address2);
}));
cucumber_1.When('Check whether {string} is displayed in the Country field', { timeout: genericMethod.defaultTestTimeout }, (country) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.verifyCountry(country);
}));
cucumber_1.When('Provide the mobile number in the {string} field', { timeout: genericMethod.defaultTestTimeout }, (mobile) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.enterMobile(mobile);
}));
cucumber_1.When('Check whether the Delivery Address is displayed as selected in the {string} drop down', { timeout: genericMethod.defaultTestTimeout }, (category) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.verifyCategory(category);
}));
cucumber_1.When('Click on the Save button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield address.clickSave();
}));
cucumber_1.Then('User should be able to view the newly created address {string}', { timeout: genericMethod.defaultTestTimeout }, (companyName) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.verifyRecord(companyName);
}));
cucumber_1.When('Click on the Import Address icon', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield address.importAddresses();
}));
cucumber_1.When('Click on the Template download option', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield address.downloadTemplate();
}));
cucumber_1.Then('Template should be downloaded successfully {string}', { timeout: genericMethod.defaultTestTimeout }, (fileName) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.verifyFileDownloaded(fileName);
}));
cucumber_1.When('Select the file to upload {string}', { timeout: genericMethod.defaultTestTimeout }, (fileName) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.uploadFile(fileName);
}));
cucumber_1.When('Click on the Submit button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield address.submit();
}));
cucumber_1.Then('File should be imported successfully with a confirmation message {string}', { timeout: genericMethod.defaultTestTimeout }, (confiramtionMessage) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.verifySuccessMessage(confiramtionMessage);
}));
cucumber_1.Then('Check the imported address is reflected in the grid list {string},{string},{string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, (companyName, fileName, sheetName, rowNum, columnNum) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.verifyFileData(companyName, fileName, sheetName, rowNum, columnNum);
}));
cucumber_1.Then('Proper error message should be displayed and file should not be uploaded {string}', { timeout: genericMethod.defaultTestTimeout }, (errorMessage) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.verifyErrorMessage(errorMessage);
}));
cucumber_1.Then('The User should be able to enter the name {string}', { timeout: genericMethod.defaultTestTimeout }, (companyName) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.verifyCompany(companyName);
}));
cucumber_1.Then('The User should be able to enter the person name {string}', { timeout: genericMethod.defaultTestTimeout }, (contactPerson) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.verifyContactPerson(contactPerson);
}));
cucumber_1.When('Provide the invalid data in the Phone Number field {string}', { timeout: genericMethod.defaultTestTimeout }, (phone) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.enterPhone(phone);
}));
cucumber_1.Then('{string} message should be displayed to the user for phone number field', { timeout: genericMethod.defaultTestTimeout }, (phone) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.verifyPhoneValidation(phone);
}));
cucumber_1.When('Provide the invalid data in the Email field {string}', { timeout: genericMethod.defaultTestTimeout }, (email) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.enterEmail(email);
}));
cucumber_1.Then('{string} message should be displayed to the user for Email field', { timeout: genericMethod.defaultTestTimeout }, (email) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.verifyEmailValidation(email);
}));
cucumber_1.When('Provide the invalid data in the state field {string}', { timeout: genericMethod.defaultTestTimeout }, (state) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.enterState(state);
}));
cucumber_1.Then('{string} message should be displayed to the user for state field', { timeout: genericMethod.defaultTestTimeout }, (state) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.verifyStateValidation(state);
}));
cucumber_1.When('Provide the invalid data in the city field {string}', { timeout: genericMethod.defaultTestTimeout }, (city) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.enterCity(city);
}));
cucumber_1.Then('{string} message should be displayed to the user for city field', { timeout: genericMethod.defaultTestTimeout }, (city) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.verifyCityValidation(city);
}));
cucumber_1.Then('Building number should be entered and displayed {string}', { timeout: genericMethod.defaultTestTimeout }, (buildingUnit) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.verifyBuildingUnit(buildingUnit);
}));
cucumber_1.Then('Text should be entered and displayed {string}', { timeout: genericMethod.defaultTestTimeout }, (address1) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.verifyAddress1(address1);
}));
cucumber_1.Then('Option should be selected and displayed {string}', { timeout: genericMethod.defaultTestTimeout }, (address2) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.verifyAddress2(address2);
}));
cucumber_1.When('Provide the invalid data in the Mobile field {string}', { timeout: genericMethod.defaultTestTimeout }, (mobile) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.enterMobile(mobile);
}));
cucumber_1.Then('{string} message should be displayed to the user for mobile field', { timeout: genericMethod.defaultTestTimeout }, (mobile) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.verifyMobileValidation(mobile);
}));
cucumber_1.Then('User should not be able to create address and alert message should be displayed {string},{string},{string},{string},{string}', { timeout: genericMethod.defaultTestTimeout }, (invalidPhoneMessage, invalidEmailMessage, invalidStateMessage, invalidCityMessage, invalidMobileMessage) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.verifyValidationOnSave(invalidPhoneMessage, invalidEmailMessage, invalidStateMessage, invalidCityMessage, invalidMobileMessage);
}));
cucumber_1.When('Provide the invalid data in the Postal code field {string}', { timeout: genericMethod.defaultTestTimeout }, (postCode) => __awaiter(void 0, void 0, void 0, function* () {
    yield address.enterPostCode(postCode);
}));
