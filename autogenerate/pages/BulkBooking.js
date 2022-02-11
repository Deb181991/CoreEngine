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
const genericMethod = new GenericMethod_1.GenericMethod();
const assertions = new Assertions_1.Assertions();
class BulkBookingPage {
    constructor() {
        this.bookingsTab = protractor_1.element(protractor_1.by.xpath('//span[text()="Bookings"]//parent::a'));
        this.bulkbooking = protractor_1.element(protractor_1.by.xpath('//span[text()="Bulk booking"]'));
        this.downloadTemplate = protractor_1.element(protractor_1.by.xpath('//a[@ng-reflect-message]'));
        this.view = protractor_1.element(protractor_1.by.xpath('//span[text()="VIEW"]//parent::button'));
        this.bulkBookingHeader = protractor_1.element(protractor_1.by.xpath('//span[text()="BULK SHIPMENT"]'));
        this.bulkBookingViewHeader = protractor_1.element(protractor_1.by.xpath('//span[text()="BULK BOOKING DATA"]'));
        this.totalAmount = protractor_1.element(protractor_1.by.xpath('//span[@class="total_span"]'));
        this.pay = protractor_1.element(protractor_1.by.xpath('//*[(contains(text(),"Pay")) or (contains(text(),"PAY"))]//parent::button[not(@disabled)]'));
        this.visa = protractor_1.element(protractor_1.by.xpath('//img[@src[contains(.,"visa")]]//parent::div'));
        this.unsave = protractor_1.element(protractor_1.by.xpath('//input[@id="savecard"]//parent::div'));
        this.calculate = protractor_1.element(protractor_1.by.xpath('//span[text()="CALCULATE"]//parent::button'));
        this.uploadInput = protractor_1.element(protractor_1.by.xpath('//input[@type="file"]'));
        this.waitSpinner = protractor_1.element.all(protractor_1.by.xpath("//ngx-spinner//div")).first();
        this.cardName = protractor_1.element(protractor_1.by.xpath('//*[@id="name"]'));
        this.cardNumber = protractor_1.element(protractor_1.by.xpath('//*[@id="number"]'));
        this.cardExpiryDate = protractor_1.element(protractor_1.by.xpath('//*[@id="expiry"]'));
        this.cardCVC = protractor_1.element(protractor_1.by.xpath('//*[@id="cvc"]'));
        this.savedCardCVC = protractor_1.element(protractor_1.by.xpath('//*[@id="cvc_choose_txt"]'));
        this.proceedWithPayment = protractor_1.element(protractor_1.by.xpath('//*[@id="proceed-with-payment"]/span[2]'));
        this.paymentSuccessMessage = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Shipment created successfully. Waybill number")]'));
        this.draftSuccessMessage = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Shipment saved as draft successfully. Waybill number")]'));
        this.deliveryPostalcode = protractor_1.element(protractor_1.by.xpath('//*[@formcontrolname="deliveryPostalCode"]'));
        this.editDelivery = protractor_1.element.all(protractor_1.by.xpath('//span[text()="Action Required"]//parent::mat-cell//parent::mat-row //button[@ng-reflect-message="Edit"]'));
        this.updateDelivery = protractor_1.element(protractor_1.by.xpath('//*[@ng-reflect-message="Update"]'));
        this.weight = protractor_1.element(protractor_1.by.xpath('//*[@formcontrolname="weight"]'));
        this.okButton = protractor_1.element(protractor_1.by.xpath('//button[text()="OK"]'));
        this.existingCard = protractor_1.element(protractor_1.by.xpath('//div[contains(@class,"svcard-selected")]'));
        this.okDialog = protractor_1.element(protractor_1.by.xpath("//kt-custom-snack-bar"));
    }
    clickAtBooking() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.mouseHoverAndClick(this.bookingsTab, 'bookingsTab');
            yield genericMethod.pause(2000);
        });
    }
    navigateToBulkBooking() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clickAtBooking();
            yield genericMethod.mouseHoverAndClick(this.bulkbooking, 'bulkbooking');
            yield genericMethod.pause(7000);
            yield genericMethod.waitForPageToLoad();
        });
    }
    verifyNavigation() {
        return __awaiter(this, void 0, void 0, function* () {
            const isDisplayed = yield assertions.verifyElementDisplayed(this.bulkBookingHeader, 'bulkBookingHeader');
            yield assertions.verifyConditionIsTrue(isDisplayed);
        });
    }
    clickDownloadTemplate() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.downloadTemplate, 'downloadTemplate');
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
            yield genericMethod.upload(this.uploadInput, filepath);
        });
    }
    clickViewButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.view, 'View Button');
        });
    }
    verifyViewPageNavigation() {
        return __awaiter(this, void 0, void 0, function* () {
            const isDisplayed = yield assertions.verifyElementDisplayed(this.bulkBookingViewHeader, 'bulkBookingViewHeader');
            yield assertions.verifyConditionIsTrue(isDisplayed);
        });
    }
    clickCalculateButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.calculate, 'Calculate Button');
        });
    }
    verifyTotalAmount(expectedAmount) {
        return __awaiter(this, void 0, void 0, function* () {
            var totalElement = protractor_1.element(protractor_1.by.xpath(`//span[text()="${expectedAmount}"]`));
            yield genericMethod.waitForElementToBeVisible(totalElement, expectedAmount);
            const actualAmount = yield genericMethod.getText(this.totalAmount, 'totalAmount');
            yield assertions.verifyEquals(expectedAmount, actualAmount);
        });
    }
    clickPayButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.waitForElementToBeInvisible(this.waitSpinner, 'waitSpinner');
            yield genericMethod.click(this.pay, 'Pay Button');
        });
    }
    verifyPaymentPageNavigation() {
        return __awaiter(this, void 0, void 0, function* () {
            const isDisplayed = yield assertions.verifyElementDisplayed(this.visa, 'visa');
            yield assertions.verifyConditionIsTrue(isDisplayed);
        });
    }
    enterCardName(cardName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.sendKeys(this.cardName, cardName, cardName);
        });
    }
    enterCardNumber(cardNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.sendKeys(this.cardNumber, cardNumber, cardNumber);
        });
    }
    enterCardExpiryDate(cardExpiryDate) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.sendKeys(this.cardExpiryDate, cardExpiryDate, cardExpiryDate);
        });
    }
    enterCVV(cvv) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.sendKeys(this.cardCVC, cvv, cvv);
        });
    }
    enterSavedCVV(cvv) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.sendKeys(this.savedCardCVC, cvv, cvv);
        });
    }
    clickAtVisa() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.visa, 'visa');
        });
    }
    clickUnsaveButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.unsave, 'unsave');
        });
    }
    clickProceedWithPayment() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.proceedWithPayment, 'proceedWithPayment');
        });
    }
    bulk_pay(cardName, cardNumber, cardExpiryDate, cvv) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.waitForPageToLoad();
            yield this.clickAtVisa();
            const isCardSaved = yield assertions.verifyElementDisplayed(this.unsave, 'unsave');
            if (isCardSaved) {
                yield this.enterCardName(cardName);
                yield this.enterCardNumber(cardNumber);
                yield this.enterCardExpiryDate(cardExpiryDate);
                yield this.enterCVV(cvv);
                yield this.clickUnsaveButton();
            }
            else {
                yield this.clickExistingCard();
                yield this.enterSavedCVV(cvv);
            }
            yield this.clickProceedWithPayment();
            yield genericMethod.pause(10000);
            yield genericMethod.closeTab(1);
            yield genericMethod.pause(2000);
        });
    }
    verifySuccessfulPayment() {
        return __awaiter(this, void 0, void 0, function* () {
            const isDisplayed = yield assertions.verifyElementDisplayed(this.paymentSuccessMessage, 'paymentSuccessMessage');
            yield assertions.verifyConditionIsTrue(isDisplayed);
            const wayBillNumber = yield this.getWaybillNumber(this.paymentSuccessMessage, 'paymentSuccessMessage');
            return wayBillNumber;
        });
    }
    verifyDraftSaved() {
        return __awaiter(this, void 0, void 0, function* () {
            const isDisplayed = yield assertions.verifyElementDisplayed(this.draftSuccessMessage, 'draftSuccessMessage');
            yield assertions.verifyConditionIsTrue(isDisplayed);
            const wayBillNumber = yield this.getWaybillNumber(this.draftSuccessMessage, 'draftSuccessMessage');
            return wayBillNumber;
        });
    }
    getWaybillNumber(element, elementName) {
        return __awaiter(this, void 0, void 0, function* () {
            const wayBillNumber = yield (yield genericMethod.getText(element, elementName))
                .split('Waybill number')[1].substring(2).trim();
            return wayBillNumber;
        });
    }
    verifyInvalidTemplateMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const errorMessage = protractor_1.element(protractor_1.by.xpath('//*[contains(text(),"' + message + '")]'));
            const isDisplayed = yield assertions.verifyElementDisplayed(errorMessage, message);
            yield assertions.verifyConditionIsTrue(isDisplayed);
        });
    }
    clickEditForFirstRow() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.editDelivery.first(), 'editDelivery');
        });
    }
    clickEditForLastRow() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.editDelivery.last(), 'editDelivery');
        });
    }
    enterDeliveryPostalcode(postalCode) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.sendKeys(this.deliveryPostalcode, postalCode, 'deliveryPostalcode', true);
            yield genericMethod.pause(3000);
        });
    }
    enterWeight(weight) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.sendKeys(this.weight, weight, 'weight', true);
            yield genericMethod.pause(3000);
        });
    }
    clickSave() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.updateDelivery, 'updateDelivery');
        });
    }
    clickOk() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.mouseHoverAndClick(this.okButton, 'okButton');
        });
    }
    clickExistingCard() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.existingCard, 'existingCard', true, false);
        });
    }
}
exports.BulkBookingPage = BulkBookingPage;
