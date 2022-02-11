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
class ManifestOutDeliverypHub {
    constructor() {
        this.manifestOutScanDeliveryHub = protractor_1.element(protractor_1.by.xpath('//span[text()="Manifest Out Scan Delivery Hub"]'));
        this.NextBranchCode = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname= "brnchCode"]'));
        this.HubBrachclick = protractor_1.element(protractor_1.by.xpath('//span[contains(@class,"mat-option-text")]'));
        this.branchCodeOkButton = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"OK")]'));
        this.submit = protractor_1.element(protractor_1.by.xpath('//button[@type="Submit"]'));
        this.status = protractor_1.element(protractor_1.by.xpath('//div[text()=" Manifest Out Scan completed at Delivery hub "]'));
    }
    clickmanifestOutScanDeliveryHub() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.manifestOutScanDeliveryHub, 'manifestOutScanDeliveryHub', false);
        });
    }
    verifyStatus(expectedText) {
        return __awaiter(this, void 0, void 0, function* () {
            const actualText = yield genericMethod.getText(this.status, '');
            console.log(actualText);
            yield assertions.verifyContains(expectedText, actualText);
        });
    }
    clickNextbranchcode(Nextbranchcode) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.NextBranchCode, Nextbranchcode, 'NextBranchCode');
            yield genericMethod.click(this.HubBrachclick, '');
            //await genericMethod.click(this.branchCodeOkButton, 'branchCodeOkButton');
            //await genericMethod.click(this.submit, 'submit');
            //await genericMethod.pause(7000);
        });
    }
}
exports.ManifestOutDeliverypHub = ManifestOutDeliverypHub;
