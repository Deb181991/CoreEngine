import { Given, Then, When } from "cucumber";
import { AddressBookPage } from "../pages/AddressBook";
import { trackShipment } from "../pages/trackShipment";
import { GenericMethod } from "../utils/GenericMethod";


const trackshipment: trackShipment = new trackShipment();
const address: AddressBookPage = new AddressBookPage();
const genericMethod: GenericMethod = new GenericMethod();

Given('navigate into the OMS website', { timeout: genericMethod.defaultTestTimeout }, async () => {
  await trackshipment.launchUrl();
});

Given('provide the Email {string} in the Email field', { timeout: genericMethod.defaultTestTimeout }, async (email) => {
  await trackshipment.enterEmail(email);
});

Given('provide the Password {string} in the Password field', { timeout: genericMethod.defaultTestTimeout }, async (email) => {
  await trackshipment.enterPassword(email);
});

When('click on the Sign In button', { timeout: genericMethod.defaultTestTimeout }, async () => {
  await trackshipment.clickSubmit();
});

When('Mouse hover on the left navigation bar and click on the Track Shipments option', { timeout: genericMethod.defaultTestTimeout }, async function () {
  await trackshipment.ClickTrackShipment();
});

Then('The user should be able to navigate into the Track Shipments page', { timeout: genericMethod.defaultTestTimeout }, async function () {
  await trackshipment.VerifyShipmentListText();
});

Then('Enter the Waybill number in tracking number field {string}, {string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, async function (file, sheet, row, col) {
  await trackshipment.EnterTrackingNumber(file, sheet, row, col);
});

Then('Click on the Track button', { timeout: genericMethod.defaultTestTimeout }, async function () {
  await trackshipment.ClickTrack();
});

Then('user captures Booked date & from and To details', { timeout: genericMethod.defaultTestTimeout }, async function () {
  await trackshipment.CaptureBookingDetailsOMS();
});

Then('login into Core Engine',{ timeout: genericMethod.defaultTestTimeout },async function () {
  await trackshipment.CELOGIN();
});

Then('Mouse hovers and Clicks on View and Track', { timeout: genericMethod.defaultTestTimeout }, async function () {
  await trackshipment.ClickViewAndTrack();
});

Then('clicks on Operation', { timeout: genericMethod.defaultTestTimeout }, async function () {
  await trackshipment.ClickOperation();
});

Then('Enters the Waybill number in Waybill No field {string}, {string}', { timeout: genericMethod.defaultTestTimeout }, async function (fileName, sheetName) {
  await trackshipment.EnterWaybillnumber(fileName, sheetName);
});

Then('Clicks on Track button', { timeout: genericMethod.defaultTestTimeout }, async function () {
  await trackshipment.Clicktrack();
});

Then('Captures Booked date & from and To details', { timeout: genericMethod.defaultTestTimeout }, async function () {
  await trackshipment.CaptureBookingDetailsCE();
});

Then('user verifies booking details', { timeout: genericMethod.defaultTestTimeout }, async function () {
  await trackshipment.VerifyBookingDetails();
});
