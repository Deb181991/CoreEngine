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
const assertions = new Assertions_1.Assertions();
const genericMethod = new GenericMethod_1.GenericMethod();
class checkinScanDeliveryHub {
    constructor() {
        this.checkinScanDeliveryHub = protractor_1.element(protractor_1.by.xpath('//span[text()="Checkin Scan Delivery Hub"]//parent::a'));
        this.checkinScanDeliveryHubText = protractor_1.element(protractor_1.by.xpath('//h3[text()="Checkin Scan Delivery Hub"]'));
        this.status = protractor_1.element(protractor_1.by.xpath('//label[text()="Status :"]/../..//div[text()=" Checked In at Delivery Hub "]'));
        //status=element(by.xpath('//div[contains(text(),"Ready for Delivery ")]'));
        this.status2 = protractor_1.element(protractor_1.by.xpath('//label[contains(text(),"Status :")]'));
    }
    clickAtCSDH() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.checkinScanDeliveryHub, '');
        });
    }
    verifyCheckInScanDeliveryHub(expectedText) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.pause(10000);
            const actualText = yield genericMethod.getText(this.checkinScanDeliveryHubText, 'checkin scan Delivery Hub');
            yield assertions.verifyEquals(expectedText, actualText);
        });
    }
    verifyStatus(expectedText) {
        return __awaiter(this, void 0, void 0, function* () {
            //await genericMethod.scrollIntoView(this.status2,'');
            const actualText = yield genericMethod.getText(this.status, '');
            console.log(actualText);
            yield assertions.verifyContains(expectedText, actualText);
        });
    }
}
exports.checkinScanDeliveryHub = checkinScanDeliveryHub;
