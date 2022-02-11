import { Then, When } from "cucumber";
import { AddressBookPage } from "../pages/AddressBook";
import { GenericMethod } from "../utils/GenericMethod";

const address: AddressBookPage = new AddressBookPage();
const genericMethod: GenericMethod = new GenericMethod();

When('Mouse hover on the Address option of left panel and click on the Address Book option', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await address.navigateToAddressBook();
});

When('Click on the Create Address icon', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await address.clickAddAddress();
});

When('Provide the name in the {string} field', { timeout: genericMethod.defaultTestTimeout }, async (companyName) => {
    await address.enterCompanyName(companyName);
});

When('Provide the person name in the {string} field', { timeout: genericMethod.defaultTestTimeout }, async (contactPerson) => {
    await address.enterContactPerson(contactPerson);
});

When('Provide the number in the {string} field', { timeout: genericMethod.defaultTestTimeout }, async (number) => {
    await address.enterPhone(number);
});

When('Provide the Email in the {string} field', { timeout: genericMethod.defaultTestTimeout }, async (email) => {
    await address.enterEmail(email);
});

When('Enter the {string}', { timeout: genericMethod.defaultTestTimeout }, async (postCode) => {
    await address.enterPostCode(postCode);
});

When('Check whether {string} and {string} data is fetched or not', { timeout: genericMethod.defaultTestTimeout }, async (state, city) => {
    await address.verifyState(state);
    await address.verifyCity(city);
});

When('Enter the {string} number', { timeout: genericMethod.defaultTestTimeout }, async (buildingUnit) => {
    await address.enterBuildingUnit(buildingUnit);
});

When('Enter the text in the Address {string} field', { timeout: genericMethod.defaultTestTimeout }, async (address1) => {
    await address.enterAddress(address1);
});

When('Click on the Address2  dropdown {string} and select option from it', { timeout: genericMethod.defaultTestTimeout }, async (address2) => {
    await address.enterAddress2(address2);
});

When('Check whether {string} is displayed in the Country field', { timeout: genericMethod.defaultTestTimeout }, async (country) => {
    await address.verifyCountry(country);
});

When('Provide the mobile number in the {string} field', { timeout: genericMethod.defaultTestTimeout }, async (mobile) => {
    await address.enterMobile(mobile);
});

When('Check whether the Delivery Address is displayed as selected in the {string} drop down', { timeout: genericMethod.defaultTestTimeout }, async (category) => {
    await address.verifyCategory(category);
});

When('Click on the Save button', async () => {
    await address.clickSave();
});

Then('User should be able to view the newly created address {string}', { timeout: genericMethod.defaultTestTimeout }, async (companyName) => {
    await address.verifyRecord(companyName);
});

When('Click on the Import Address icon', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await address.importAddresses()
});

When('Click on the Template download option', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await address.downloadTemplate();
});

Then('Template should be downloaded successfully {string}', { timeout: genericMethod.defaultTestTimeout }, async (fileName) => {
    await address.verifyFileDownloaded(fileName);
});

When('Select the file to upload {string}', { timeout: genericMethod.defaultTestTimeout }, async (fileName) => {
    await address.uploadFile(fileName);
});

When('Click on the Submit button', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await address.submit();
})

Then('File should be imported successfully with a confirmation message {string}', { timeout: genericMethod.defaultTestTimeout }, async (confiramtionMessage) => {
    await address.verifySuccessMessage(confiramtionMessage);
});

Then('Check the imported address is reflected in the grid list {string},{string},{string},{int},{int}',{ timeout: genericMethod.defaultTestTimeout } ,async (companyName, fileName , sheetName, rowNum, columnNum ) => {
    await address.verifyFileData(companyName, fileName , sheetName, rowNum, columnNum);
});

Then('Proper error message should be displayed and file should not be uploaded {string}', { timeout: genericMethod.defaultTestTimeout }, async (errorMessage) => {
    await address.verifyErrorMessage(errorMessage);
});

Then('The User should be able to enter the name {string}', { timeout: genericMethod.defaultTestTimeout }, async (companyName) => {
    await address.verifyCompany(companyName);
  });

  Then('The User should be able to enter the person name {string}', { timeout: genericMethod.defaultTestTimeout }, async (contactPerson) => {
    await address.verifyContactPerson(contactPerson);
  });

  When('Provide the invalid data in the Phone Number field {string}',  { timeout: genericMethod.defaultTestTimeout }, async (phone) =>  {
    await address.enterPhone(phone);
  });

  Then('{string} message should be displayed to the user for phone number field',  { timeout: genericMethod.defaultTestTimeout }, async (phone) =>  {
    await address.verifyPhoneValidation(phone);
  });

  When('Provide the invalid data in the Email field {string}',  { timeout: genericMethod.defaultTestTimeout }, async (email) =>  {
    await address.enterEmail(email);
  });

  Then('{string} message should be displayed to the user for Email field',  { timeout: genericMethod.defaultTestTimeout }, async (email) =>  {
    await address.verifyEmailValidation(email);
  });

  When('Provide the invalid data in the state field {string}',  { timeout: genericMethod.defaultTestTimeout }, async (state) =>  {
    await address.enterState(state);
  });

  Then('{string} message should be displayed to the user for state field',  { timeout: genericMethod.defaultTestTimeout }, async (state) =>  {
    await address.verifyStateValidation(state);
  });

  When('Provide the invalid data in the city field {string}',  { timeout: genericMethod.defaultTestTimeout }, async (city) =>  {
    await address.enterCity(city);
  });

  Then('{string} message should be displayed to the user for city field',  { timeout: genericMethod.defaultTestTimeout }, async (city) =>  {
    await address.verifyCityValidation(city);
  });

  Then('Building number should be entered and displayed {string}', { timeout: genericMethod.defaultTestTimeout }, async (buildingUnit) => {
    await address.verifyBuildingUnit(buildingUnit);
  });

  Then('Text should be entered and displayed {string}', { timeout: genericMethod.defaultTestTimeout }, async (address1) => {
    await address.verifyAddress1(address1);
  });

  Then('Option should be selected and displayed {string}', { timeout: genericMethod.defaultTestTimeout }, async (address2) => {
    await address.verifyAddress2(address2);
  });

  When('Provide the invalid data in the Mobile field {string}', { timeout: genericMethod.defaultTestTimeout }, async (mobile) => {
    await address.enterMobile(mobile);
  });

  Then('{string} message should be displayed to the user for mobile field',  { timeout: genericMethod.defaultTestTimeout }, async (mobile) =>  {
    await address.verifyMobileValidation(mobile);
  });

  Then('User should not be able to create address and alert message should be displayed {string},{string},{string},{string},{string}', { timeout: genericMethod.defaultTestTimeout }, async (invalidPhoneMessage, invalidEmailMessage, invalidStateMessage, invalidCityMessage, invalidMobileMessage) => {
      await address.verifyValidationOnSave(invalidPhoneMessage, invalidEmailMessage, invalidStateMessage, invalidCityMessage, invalidMobileMessage);
  });

  When('Provide the invalid data in the Postal code field {string}',{ timeout: genericMethod.defaultTestTimeout }, async (postCode) => {
    await address.enterPostCode(postCode);
  });