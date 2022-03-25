import { element, by, ElementFinder } from 'protractor';
import { Assertions } from '../utils/Assertions';
import { GenericMethod } from "../utils/GenericMethod";

const genericMethod: GenericMethod = new GenericMethod();
const assertions: Assertions = new Assertions();

export class BulkBookingPage {
    bookingsTab = element(by.xpath('//span[text()="Bookings"]//parent::a'));
    bulkbooking = element(by.xpath('//span[text()="Bulk booking"]'));
    downloadTemplate = element(by.xpath('//a[@ng-reflect-message]'))
    view = element(by.xpath('//span[text()="VIEW"]//parent::button'));

    bulkBookingHeader = element(by.xpath('//span[text()="BULK SHIPMENT"]'))
    bulkBookingViewHeader = element(by.xpath('//span[text()="BULK BOOKING DATA"]'))

    totalAmount = element(by.xpath('//span[@class="total_span"]'))
    pay = element(by.xpath('//*[(contains(text(),"Pay")) or (contains(text(),"PAY"))]//parent::button[not(@disabled)]'));
    visa = element(by.xpath('//img[@src[contains(.,"visa")]]//parent::div'));
    unsave = element(by.xpath('//input[@id="savecard"]//parent::div'));
    calculate = element(by.xpath('//span[text()="CALCULATE"]//parent::button'));
    uploadInput = element(by.xpath('//input[@type="file"]'));
    waitSpinner = element.all(by.xpath("//ngx-spinner//div")).first();

    cardName = element(by.xpath('//*[@id="name"]'));
    cardNumber = element(by.xpath('//*[@id="number"]'));
    cardExpiryDate = element(by.xpath('//*[@id="expiry"]'));
    cardCVC = element(by.xpath('//*[@id="cvc"]'));
    savedCardCVC = element(by.xpath('//*[@id="cvc_choose_txt"]'));
    proceedWithPayment = element(by.xpath('//*[@id="proceed-with-payment"]/span[2]'));
    paymentSuccessMessage = element(by.xpath('//span[contains(text(),"Shipment created successfully. Waybill number")]'));
    draftSuccessMessage = element(by.xpath('//span[contains(text(),"Shipment saved as draft successfully. Waybill number")]'));

    deliveryPostalcode = element(by.xpath('//*[@formcontrolname="deliveryPostalCode"]'));
    editDelivery = element.all(by.xpath('//span[text()="Action Required"]//parent::mat-cell//parent::mat-row //button[@ng-reflect-message="Edit"]'));
    updateDelivery = element(by.xpath('//*[@ng-reflect-message="Update"]'));
    weight = element(by.xpath('//*[@formcontrolname="weight"]'));

    okButton = element(by.xpath('//button[text()="OK"]'));
    existingCard = element(by.xpath('//div[contains(@class,"svcard-selected")]'));
    okDialog = element(by.xpath("//kt-custom-snack-bar"));

    async clickAtBooking() {
        await genericMethod.mouseHoverAndClick(this.bookingsTab, 'bookingsTab');
        await genericMethod.pause(2000);
    }

    async navigateToBulkBooking() {
        await this.clickAtBooking();
        await genericMethod.mouseHoverAndClick(this.bulkbooking, 'bulkbooking');
        await genericMethod.pause(7000);
        await genericMethod.waitForPageToLoad();
    }

    async verifyNavigation() {
        const isDisplayed = await assertions.verifyElementDisplayed(this.bulkBookingHeader, 'bulkBookingHeader');
        await assertions.verifyConditionIsTrue(isDisplayed);
    }

    async clickDownloadTemplate() {
        await genericMethod.click(this.downloadTemplate, 'downloadTemplate');
    }

    async verifyFileDownloaded(fileName) {
        const exists = await assertions.verifyFileExists("//downloads//" + fileName);
        await assertions.verifyConditionIsTrue(exists);
    }

    async uploadFile(fileName: string) {
        const filepath = "//uploads//" + fileName;
        await genericMethod.pause(5000);
        await genericMethod.upload(this.uploadInput, filepath);
    }

    async clickViewButton() {
        await genericMethod.click(this.view, 'View Button');
    }

    async verifyViewPageNavigation() {
        const isDisplayed = await assertions.verifyElementDisplayed(this.bulkBookingViewHeader, 'bulkBookingViewHeader');
        await assertions.verifyConditionIsTrue(isDisplayed);
    }

    async clickCalculateButton() {
        await genericMethod.click(this.calculate, 'Calculate Button');
    }

    async verifyTotalAmount(expectedAmount) {
        var totalElement = element(by.xpath(`//span[text()="${expectedAmount}"]`))
        //var totalElement = element(by.xpath(`//span[text()="${}"]`))
        await genericMethod.waitForElementToBeVisible(totalElement, expectedAmount)
        const actualAmount = await genericMethod.getText(this.totalAmount, 'totalAmount');
        await assertions.verifyEquals(expectedAmount, actualAmount)
    }
    /*async verifyTypeofService(expectedText) {
        var expectedResult = element(by.xpath(`//div[text()="${expectedText}"]`));
        await genericMethod.waitForElementToBeVisible(expectedResult, expectedText)
        const actualText = await genericMethod.getText(this., 'Types of Services');
       console.log(actualText);
       await assertions.verifyEquals(expectedText,actualText);
   }*/

    async clickPayButton() {
        await genericMethod.waitForElementToBeInvisible(this.waitSpinner, 'waitSpinner');
        await genericMethod.click(this.pay, 'Pay Button');
    }

    async verifyPaymentPageNavigation() {
        const isDisplayed = await assertions.verifyElementDisplayed(this.visa, 'visa');
        await assertions.verifyConditionIsTrue(isDisplayed);
    }

    async enterCardName(cardName: string) {
        await genericMethod.sendKeys(this.cardName, cardName, cardName);
    }

    async enterCardNumber(cardNumber: string) {
        await genericMethod.sendKeys(this.cardNumber, cardNumber, cardNumber);
    }

    async enterCardExpiryDate(cardExpiryDate: string) {
        await genericMethod.sendKeys(this.cardExpiryDate, cardExpiryDate, cardExpiryDate);
    }

    async enterCVV(cvv: string) {
        await genericMethod.sendKeys(this.cardCVC, cvv, cvv);
    }

    async enterSavedCVV(cvv: string) {
        await genericMethod.sendKeys(this.savedCardCVC, cvv, cvv);
    }

    async clickAtVisa() {
        await genericMethod.click(this.visa, 'visa');
    }

    async clickUnsaveButton() {
        await genericMethod.click(this.unsave, 'unsave');
    }

    async clickProceedWithPayment() {
        await genericMethod.click(this.proceedWithPayment, 'proceedWithPayment');
    }

    async bulk_pay(cardName: string, cardNumber: string, cardExpiryDate: string, cvv: string) {
        await genericMethod.waitForPageToLoad();
        await this.clickAtVisa();
        const isCardSaved = await assertions.verifyElementDisplayed(this.unsave, 'unsave');

        if (isCardSaved) {
            await this.enterCardName(cardName);
            await this.enterCardNumber(cardNumber);
            await this.enterCardExpiryDate(cardExpiryDate);
            await this.enterCVV(cvv);

            await this.clickUnsaveButton();
        }
        else{
            await this.clickExistingCard();
            await this.enterSavedCVV(cvv);
        }
        await this.clickProceedWithPayment();

        await genericMethod.pause(10000);
        await genericMethod.closeTab(1);
        await genericMethod.pause(2000);
    }

    async verifySuccessfulPayment() {
        const isDisplayed = await assertions.verifyElementDisplayed(this.paymentSuccessMessage, 'paymentSuccessMessage');
        await assertions.verifyConditionIsTrue(isDisplayed);
        const wayBillNumber = await this.getWaybillNumber(this.paymentSuccessMessage, 'paymentSuccessMessage');
        return wayBillNumber;
    }

    async verifyDraftSaved() {
        const isDisplayed = await assertions.verifyElementDisplayed(this.draftSuccessMessage, 'draftSuccessMessage');
        await assertions.verifyConditionIsTrue(isDisplayed);
        const wayBillNumber = await this.getWaybillNumber(this.draftSuccessMessage, 'draftSuccessMessage');
        return wayBillNumber;
    }

    async getWaybillNumber(element: ElementFinder, elementName: string) {
        const wayBillNumber = await (await genericMethod.getText(element, elementName))
            .split('Waybill number')[1].substring(2).trim();
        return wayBillNumber;
    }

    async verifyInvalidTemplateMessage(message: string) {
        const errorMessage = element(by.xpath('//*[contains(text(),"' + message + '")]'));
        const isDisplayed = await assertions.verifyElementDisplayed(errorMessage, message);
        await assertions.verifyConditionIsTrue(isDisplayed);
    }

    async clickEditForFirstRow() {
        await genericMethod.click(this.editDelivery.first(), 'editDelivery');
    }

    async clickEditForLastRow() {
        await genericMethod.click(this.editDelivery.last(), 'editDelivery');
    }

    async enterDeliveryPostalcode(postalCode: string) {
        await genericMethod.sendKeys(this.deliveryPostalcode, postalCode, 'deliveryPostalcode', true);
        await genericMethod.pause(3000);
    }

    async enterWeight(weight: string) {
        await genericMethod.sendKeys(this.weight, weight, 'weight', true);
        await genericMethod.pause(3000);
    }

    async clickSave() {
        await genericMethod.click(this.updateDelivery, 'updateDelivery');
    }

    async clickOk() {
        await genericMethod.mouseHoverAndClick(this.okButton, 'okButton');
    }

    async clickExistingCard() {
        await genericMethod.click(this.existingCard, 'existingCard',true,false);
    }

}
