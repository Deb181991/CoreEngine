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
class checkinScanDelivery {
    constructor() {
        this.delivery = protractor_1.element(protractor_1.by.xpath('//span[text()="Delivery"]//parent::a'));
        this.checkinScanDelivery = protractor_1.element(protractor_1.by.xpath('//span[text()="Checkin Scan Delivery"]//parent::a'));
        this.checkinScanDeliveryText = protractor_1.element(protractor_1.by.xpath('//h3[text()="Checkin Scan Delivery"]'));
        this.status = protractor_1.element(protractor_1.by.xpath('//label[text()="Status :"]/../..//div[text()=" Ready for Delivery "]'));
    }
    clickAtDelivery() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.refreshPage();
            yield genericMethod.clickUsingJs(this.delivery, '');
        });
    }
    clickAtCSD() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.checkinScanDelivery, '');
        });
    }
    checkinScanDeliveryTextPage(expectedText) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.pause(10000);
            const actualText = yield genericMethod.getText(this.checkinScanDeliveryText, 'checkin scan pickup');
            yield assertions.verifyEquals(expectedText, actualText);
        });
    }
    verifyStatus(expectedText) {
        return __awaiter(this, void 0, void 0, function* () {
            const actualText = yield genericMethod.getText(this.status, '');
            console.log(actualText);
            yield assertions.verifyContains(expectedText, actualText);
            yield genericMethod.pause(2000);
            yield genericMethod.switchToTab(0);
        });
    }
}
exports.checkinScanDelivery = checkinScanDelivery;
