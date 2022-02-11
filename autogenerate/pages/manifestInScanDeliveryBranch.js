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
class ManifestInDeliveryBranch {
    constructor() {
        this.manifestInScanDeliveryBranch = protractor_1.element(protractor_1.by.xpath('//span[text()="Manifest In Scan Delivery Branch"]'));
        this.status = protractor_1.element.all(protractor_1.by.xpath('//div[contains(text(),"Manifest In Scan completed at Delivery Branch")]'));
    }
    clickManifestInScanDeliveryBranch() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.manifestInScanDeliveryBranch, 'manifestInScanDeliveryBranch', false);
        });
    }
    verifyStatus(expectedText) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.scrollIntoView(this.status.first(), 'status');
            const actualText = yield genericMethod.getText(this.status.first(), '');
            console.log(actualText);
            yield assertions.verifyContains(expectedText, actualText);
        });
    }
}
exports.ManifestInDeliveryBranch = ManifestInDeliveryBranch;
