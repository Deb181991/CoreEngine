import { Given, Then, When } from "cucumber";
import { browser } from "protractor";
import { BulkBookingPage } from "../pages/BulkBooking";
import { GenericMethod } from "../utils/GenericMethod";

const bulk: BulkBookingPage = new BulkBookingPage();
const genericMethod: GenericMethod = new GenericMethod();

When('Mouse hover on the Bookings option of left navigation bar and click on the Bulk booking option', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await bulk.navigateToBulkBooking();
});

Then('The user should be able to navigate into the Bulk Booking page', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await bulk.verifyNavigation();
});

When('Click on the download link to download the Bulk booking template', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await bulk.clickDownloadTemplate();
});

Then('User should be able to download the Bulk Booking template {string}', { timeout: genericMethod.defaultTestTimeout }, async (fileName) => {
    await bulk.verifyFileDownloaded(fileName);
});

When('Click on the Click to choose file button to upload the updated file {string}', { timeout: genericMethod.defaultTestTimeout }, async (fileName) => {
    await bulk.uploadFile(fileName);
    await genericMethod.waitForElementToBeClickable(bulk.view, 'View Button');
});

When('Click on the View button', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await bulk.clickViewButton();
});

Then('User should be able to navigate the List page', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await bulk.verifyViewPageNavigation();
});

When('Click on the Calculate Button', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await bulk.clickCalculateButton();
});

Then('Amount should be calculated and User should be able to view the amount as {string}', { timeout: genericMethod.defaultTestTimeout }, async (amount) => {
    await bulk.verifyTotalAmount(amount);
});

When('Click on the Pay button', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await bulk.clickPayButton();
});

Then('User should be able to navigate to the Payment gateway', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await bulk.verifyPaymentPageNavigation();
});

When('Pay the amount by selecting the Card type and entering the card details', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await bulk.bulk_pay(browser.params.card.cardName, browser.params.card.cardNumber,
        browser.params.card.cardExpiryDate, browser.params.card.cvv);
});

Then('Payment should be successful and Shipment should be create successfully', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await bulk.verifySuccessfulPayment();
});

When('Click on the Click to choose file button to upload invalid file {string}', { timeout: genericMethod.defaultTestTimeout }, async (fileName) => {
    await bulk.uploadFile(fileName);
});

Then('Invalid template error message should be displayed as {string}', { timeout: genericMethod.defaultTestTimeout }, async (message) => {
    await bulk.verifyInvalidTemplateMessage(message);
});

When('Click on the edit option for first row', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await bulk.clickEditForFirstRow();
});

When('Click on the edit option for second row', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await genericMethod.switchToDefaultContent();
    await bulk.clickEditForLastRow();
});

When('Click on the Save button in update delivery details', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await bulk.clickSave();
});

When('Update the valid data {string}, {string} in the fields', { timeout: genericMethod.defaultTestTimeout }, async (code, weight) => {
    await bulk.enterDeliveryPostalcode(code);
    await bulk.enterWeight(weight);
});