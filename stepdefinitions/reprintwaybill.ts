import { Given,Then, When } from "cucumber";
import { AddressBookPage } from "../pages/AddressBook";
import { Reprintwaybill } from "../pages/Reprintwaybill";
import { GenericMethod } from "../utils/GenericMethod";


const reprintwaybill: Reprintwaybill = new Reprintwaybill();
const address: AddressBookPage = new AddressBookPage();
const genericMethod: GenericMethod = new GenericMethod();

Given('navigate into OMS website', { timeout: genericMethod.defaultTestTimeout },async function () {
  await reprintwaybill.launchUrl();
});

Given('provide Email {string} in the Email field',{ timeout: genericMethod.defaultTestTimeout },async function (email) {
  await reprintwaybill.enterEmail(email);
});

Given('provide Password {string} in the Password field', { timeout: genericMethod.defaultTestTimeout },async function  (password) {
  await reprintwaybill.enterPassword(password);
});

When('click on Sign In button', { timeout: genericMethod.defaultTestTimeout },async function () {
  await reprintwaybill.clickSubmit();
});

When('User Mouse hovers on the left navigation bar and click on the Reprint Waybill option', { timeout: genericMethod.defaultTestTimeout },async function  () {
    await reprintwaybill.clickReprintwaybill();
        
  });

  Then('user should be able to navigate into the Reprint Waybill page',{ timeout: genericMethod.defaultTestTimeout },async function () {
    await reprintwaybill.VerifyShipmentListText();
  });

  Then('Enters the Waybill number in tracking number field {string}, {string},{int},{int}',{ timeout: genericMethod.defaultTestTimeout },async function (file, sheet, row, col) {
    await reprintwaybill.EnterWaybillno(file, sheet, row, col);
  });

  Then('User Clicks on the Print Waybill button',{ timeout: genericMethod.defaultTestTimeout },async function () {
    await reprintwaybill.clickprintwaybill();
  });

  Then('User selects Standard Delivery from the Shipment service dropdown',{ timeout: genericMethod.defaultTestTimeout },async function () {
    await reprintwaybill.SelectShipmentService();
  });

  Then('Clicks on the Search button',{ timeout: genericMethod.defaultTestTimeout },async function () {
    await reprintwaybill.clickSearch();
  });

  Then('user Clicks on print icon',{ timeout: genericMethod.defaultTestTimeout },async function () {
    await reprintwaybill.clickPrintIcon();
  });

  
  When('user Mousehovers and clicks on Shipment management',{ timeout: genericMethod.defaultTestTimeout },async function () {
    await reprintwaybill.clickShipmentManagement();
  });

  Then('enters reference number And waybill number',{ timeout: genericMethod.defaultTestTimeout },async function () {
    await reprintwaybill.Enterwaybill();
  });

  Then('User clicks on the Search button',{ timeout: genericMethod.defaultTestTimeout },async function () {
    await reprintwaybill.clickonSearch();
  });

  Then('Clicks on the Elipsis icon and clicks on view option',{ timeout: genericMethod.defaultTestTimeout },async function () {
    await reprintwaybill.clickElipseIcon();
  });