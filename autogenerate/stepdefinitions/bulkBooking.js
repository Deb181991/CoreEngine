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
const protractor_1 = require("protractor");
const BulkBooking_1 = require("../pages/BulkBooking");
const GenericMethod_1 = require("../utils/GenericMethod");
const bulk = new BulkBooking_1.BulkBookingPage();
const genericMethod = new GenericMethod_1.GenericMethod();
cucumber_1.When('Mouse hover on the Bookings option of left navigation bar and click on the Bulk booking option', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield bulk.navigateToBulkBooking();
}));
cucumber_1.Then('The user should be able to navigate into the Bulk Booking page', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield bulk.verifyNavigation();
}));
cucumber_1.When('Click on the download link to download the Bulk booking template', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield bulk.clickDownloadTemplate();
}));
cucumber_1.Then('User should be able to download the Bulk Booking template {string}', { timeout: genericMethod.defaultTestTimeout }, (fileName) => __awaiter(void 0, void 0, void 0, function* () {
    yield bulk.verifyFileDownloaded(fileName);
}));
cucumber_1.When('Click on the Click to choose file button to upload the updated file {string}', { timeout: genericMethod.defaultTestTimeout }, (fileName) => __awaiter(void 0, void 0, void 0, function* () {
    yield bulk.uploadFile(fileName);
    yield genericMethod.waitForElementToBeClickable(bulk.view, 'View Button');
}));
cucumber_1.When('Click on the View button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield bulk.clickViewButton();
}));
cucumber_1.Then('User should be able to navigate the List page', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield bulk.verifyViewPageNavigation();
}));
cucumber_1.When('Click on the Calculate Button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield bulk.clickCalculateButton();
}));
cucumber_1.Then('Amount should be calculated and User should be able to view the amount as {string}', { timeout: genericMethod.defaultTestTimeout }, (amount) => __awaiter(void 0, void 0, void 0, function* () {
    yield bulk.verifyTotalAmount(amount);
}));
cucumber_1.When('Click on the Pay button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield bulk.clickPayButton();
}));
cucumber_1.Then('User should be able to navigate to the Payment gateway', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield bulk.verifyPaymentPageNavigation();
}));
cucumber_1.When('Pay the amount by selecting the Card type and entering the card details', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield bulk.bulk_pay(protractor_1.browser.params.card.cardName, protractor_1.browser.params.card.cardNumber, protractor_1.browser.params.card.cardExpiryDate, protractor_1.browser.params.card.cvv);
}));
cucumber_1.Then('Payment should be successful and Shipment should be create successfully', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield bulk.verifySuccessfulPayment();
}));
cucumber_1.When('Click on the Click to choose file button to upload invalid file {string}', { timeout: genericMethod.defaultTestTimeout }, (fileName) => __awaiter(void 0, void 0, void 0, function* () {
    yield bulk.uploadFile(fileName);
}));
cucumber_1.Then('Invalid template error message should be displayed as {string}', { timeout: genericMethod.defaultTestTimeout }, (message) => __awaiter(void 0, void 0, void 0, function* () {
    yield bulk.verifyInvalidTemplateMessage(message);
}));
cucumber_1.When('Click on the edit option for first row', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield bulk.clickEditForFirstRow();
}));
cucumber_1.When('Click on the edit option for second row', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield genericMethod.switchToDefaultContent();
    yield bulk.clickEditForLastRow();
}));
cucumber_1.When('Click on the Save button in update delivery details', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield bulk.clickSave();
}));
cucumber_1.When('Update the valid data {string}, {string} in the fields', { timeout: genericMethod.defaultTestTimeout }, (code, weight) => __awaiter(void 0, void 0, void 0, function* () {
    yield bulk.enterDeliveryPostalcode(code);
    yield bulk.enterWeight(weight);
}));
