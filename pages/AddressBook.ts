import { browser, element, by, ActionSequence, protractor, $ } from 'protractor';
import { GenericMethod } from "../utils/GenericMethod";
import { Assertions } from '../utils/Assertions';

const genericMethod: GenericMethod = new GenericMethod();
const assertions: Assertions = new Assertions();
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

export class AddressBookPage {

    addressBook = element(by.xpath('//span[text()="Address Book"]//parent::a'));
    addAddressButton = element(by.xpath('//button[@ng-reflect-message="Add address"]'));
    exportAddress = element(by.xpath('//button[@ng-reflect-message="Export addresses"]'));
    importAddress = element(by.xpath('//button[@ng-reflect-message="Import addresses"]'));

    companyName = element(by.xpath('//input[@formcontrolname="CompanyName"]'));
    contactPerson = element(by.xpath('//input[@formcontrolname="Name"]'));
    phone = element(by.xpath('//input[@formcontrolname="Phone"]'));
    email = element(by.xpath('//input[@ng-reflect-name="Email"]'));
    postCode = element(by.xpath('//input[@formcontrolname="PostalCode"]'));
    state = element(by.xpath('//input[@formcontrolname="State"]'));
    city = element(by.xpath('//input[@formcontrolname="City"]'));
    buildingUnit = element(by.xpath('//input[@formcontrolname="BuildingUnit"]'));
    address1 = element(by.xpath('//input[@formcontrolname="Address1"]'));
    address2 = element(by.xpath('//input[@formcontrolname="Address2"]'));
    country = element(by.xpath('//input[@formcontrolname="Country"]'));
    mobile = element(by.xpath('//input[@formcontrolname="Mobile"]'));
    category = element(by.xpath('//span[text() = "Delivery Address"]'));

    saveButton = element(by.xpath('//span[contains(text(),"SAVE")]//parent::button'));
    scrollUp = element(by.xpath('//div[@id="kt_scrolltop"]'));

    download = element(by.xpath('//a[@ng-reflect-message="Click to get template"]'));
    upload = element(by.xpath('//input[@type="file"]'));
    submitButton = element(by.xpath('//button[text()="SUBMIT"]'));
    successMessage = element(by.xpath('//span[contains(text() ,"Addresses imported successfully")]'));
    errorMessage = element(by.xpath('//span[contains(text() ,"Import operation failed")]'));

    invalidPhoneMessage = element(by.xpath('//span[contains(text()," Phone number must be a valid phone number")]'));
    invalidCityMessage = element(by.xpath('//span[contains(text(),"Invalid City")]'));
    invalidEmailMessage = element(by.xpath('//span[contains(text(),"Invalid Email address")]'));
    invalidPostalCodeMessage = element(by.xpath('//span[contains(text(),"Postal Code is Required")]'));
    invalidStateMessage = element(by.xpath('//span[contains(text(),"Invalid State")]'));
    invalidMobileMessage = element(by.xpath('//span[contains(text(),"Mobile number must be a valid mobile number (e.g., +8554677xx).")]'));


    async navigateToAddressBook() {
        await genericMethod.mouseHoverAndClick(this.addressBook, 'addressBook');
        await genericMethod.waitForPageToLoad();
    }

    async clickAddAddress() {
        await genericMethod.click(this.addAddressButton, 'addAddressButton', false);
    }

    async enterCompanyName(companyName: string) {
        await genericMethod.clickAndSendKeys(this.companyName, companyName, 'companyName');
    }
    async enterContactPerson(contactPerson: string) {
        await genericMethod.clickAndSendKeys(this.contactPerson, contactPerson, 'contactPerson');
    }

    async enterPhone(phone: string) {
        await genericMethod.clickAndSendKeys(this.phone, phone, 'phone', true);
    }

    async enterEmail(email: string) {
        await genericMethod.clickAndSendKeys(this.email, email, 'email', true);
    }

    async enterPostCode(postCode: string) {
        await genericMethod.sendKeys(this.postCode, postCode, 'postCode', true);
        await genericMethod.pause(3000);
    }

    async verifyState(state: string) {
        const actualState = await genericMethod.getValue(this.state, 'state');
        await assertions.verifyEquals(state, actualState);
    }

    async verifyCity(city: string) {
        const actualcity = await genericMethod.getValue(this.city, 'city');
        await assertions.verifyEquals(city, actualcity);
    }

    async enterBuildingUnit(buildingUnit: string) {
        await genericMethod.clickAndSendKeys(this.buildingUnit, buildingUnit, 'buildingUnit');
    }

    async enterAddress(address1: string) {
        await genericMethod.clickAndSendKeys(this.address1, address1, 'address1');
    }

    async enterAddress2(address2: string) {
        await genericMethod.clickAndSendKeys(this.address2, address2, 'address2');
    }

    async verifyCountry(country: string) {
        const actualcountry = await genericMethod.getValue(this.country, 'country');
        await assertions.verifyEquals(country, actualcountry);
    }

    async clickSave() {
        await genericMethod.click(this.saveButton, 'saveButton');
    }

    async verifyCategory(category: string) {
        const actualcategory = await genericMethod.getText(this.category, category);
        await assertions.verifyEquals(category, actualcategory);
    }

    async enterMobile(mobile: string) {
        await genericMethod.clickAndSendKeys(this.mobile, mobile, 'mobile', true);
    }

    async verifyRecord(record: string) {
        const recordPath = element.all(by.xpath('//span[contains(text(),"' + record + '")]')).first();
        const actualcategory = await genericMethod.getText(recordPath, record);
        await assertions.verifyEquals(record, actualcategory);
    }

    async importAddresses() {
        await genericMethod.click(this.importAddress, 'importAddresses', false);
    }

    async downloadTemplate() {
        await genericMethod.waitForPageToLoad();
        await genericMethod.click(this.download, 'downloadTemplate', false);
    }

    async verifyFileDownloaded(fileName) {
        const exists = await assertions.verifyFileExists("//downloads//" + fileName);
        await assertions.verifyConditionIsTrue(exists);
    }

    async uploadFile(fileName: string) {
        const filepath = "//uploads//" + fileName;
        await genericMethod.pause(5000);
        await genericMethod.upload(this.upload, filepath);
    }

    async submit() {
        await genericMethod.click(this.submitButton, 'submitButton', false);
    }

    async verifyFileData(record: string, fileName: string, sheetName: string, rowNum: number, columnNum: number) {
        const recordPath = element.all(by.xpath('//span[contains(text(),"' + record + '")]')).first();
        const filepath = "//uploads//" + fileName;
        await genericMethod.pause(5000);

        const excelvalue = await genericMethod.getExcelData(filepath, sheetName, rowNum, columnNum);
        const actualvalue = await genericMethod.getText(recordPath, record);
        await assertions.verifyEquals(excelvalue, actualvalue);
    }

    async verifySuccessMessage(success: string) {
        const actualmessage = await genericMethod.getText(this.successMessage, success);
        await assertions.verifyEquals(success, actualmessage);
    }

    async verifyErrorMessage(success: string) {
        const actualmessage = await genericMethod.getText(this.errorMessage, success);
        await assertions.verifyEquals(success, actualmessage);
    }

    async enterState(state: string) {
        await genericMethod.clickAndSendKeys(this.state, state, 'state', true);
    }

    async enterCity(city: string) {
        await genericMethod.clickAndSendKeys(this.city, city, 'city', true);
    }

    async verifyCompany(companyName: string) {
        const actualcompany = await genericMethod.getValue(this.companyName, 'companyName');
        await assertions.verifyEquals(companyName, actualcompany);
    }

    async verifyContactPerson(contactPerson: string) {
        const actualcontactPerson = await genericMethod.getValue(this.contactPerson, 'contactPerson');
        await assertions.verifyEquals(contactPerson, actualcontactPerson);
    }

    async verifyPhoneValidation(message: string) {
        const actualMessage = await genericMethod.getText(this.invalidPhoneMessage, 'message');
        await assertions.verifyContains(message, actualMessage);
    }

    async verifyEmailValidation(message: string) {
        const actualMessage = await genericMethod.getText(this.invalidEmailMessage, 'message');
        await assertions.verifyEquals(message, actualMessage);
    }

    async verifyPostCodeValidation(message: string) {
        const actualMessage = await genericMethod.getText(this.invalidPostalCodeMessage, 'message');
        await assertions.verifyEquals(message, actualMessage);
    }

    async verifyStateValidation(message: string) {
        const actualMessage = await genericMethod.getText(this.invalidStateMessage, 'message');
        await assertions.verifyEquals(message, actualMessage);
    }

    async verifyCityValidation(message: string) {
        const actualMessage = await genericMethod.getText(this.invalidCityMessage, 'message');
        await assertions.verifyEquals(message, actualMessage);
    }

    async verifyMobileValidation(message: string) {
        const actualMessage = await genericMethod.getText(this.invalidMobileMessage, 'message');
        await assertions.verifyContains(message, actualMessage);
    }

    async verifyBuildingUnit(buildingUnit: string) {
        const actualbuildingunit = await genericMethod.getValue(this.buildingUnit, 'buildingUnit');
        await assertions.verifyEquals(buildingUnit, actualbuildingunit);
    }

    async verifyAddress1(address1: string) {
        const actualaddress1 = await genericMethod.getValue(this.address1, 'address1');
        await assertions.verifyEquals(address1, actualaddress1);
    }

    async verifyAddress2(address2: string) {
        const actualaddress2 = await genericMethod.getValue(this.address2, 'address2');
        await assertions.verifyEquals(address2, actualaddress2);
    }

    async verifyValidationOnSave(invalidPhoneMessage: string, invalidEmailMessage: string, invalidStateMessage: string, invalidCityMessage: string, invalidMobileMessage: string) {
        await this.verifyPhoneValidation(invalidPhoneMessage);
        await this.verifyEmailValidation(invalidEmailMessage);

        await this.verifyStateValidation(invalidStateMessage);
        await this.verifyCityValidation(invalidCityMessage);

        await this.verifyMobileValidation(invalidMobileMessage);
   }
}