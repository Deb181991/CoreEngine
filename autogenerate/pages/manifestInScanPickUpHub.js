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
class ManifestInPickupHub {
    constructor() {
        this.manifest = protractor_1.element.all(protractor_1.by.xpath('//span[text()="Manifest"]')).first();
        this.manifestInScanPickup = protractor_1.element(protractor_1.by.xpath('//span[text()="Manifest In Scan Pickup Hub"]'));
        this.selectCategory = protractor_1.element(protractor_1.by.xpath('//span[text()="Select Scan Category"]'));
        this.bagsealDropdown = protractor_1.element(protractor_1.by.xpath('//span[text()="Bag Seal Number"]'));
        this.manifestInput = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname= "txtseachno"]'));
        this.scan = protractor_1.element(protractor_1.by.xpath('//span[text()="Scan"]'));
        this.status = protractor_1.element.all(protractor_1.by.xpath('//div[contains(text(),"Manifest In Scan completed at Pickup Hub")]'));
    }
    clickManifestInScanPickup() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.refreshPage();
            yield genericMethod.click(this.manifestInScanPickup, 'manifestInScanPickup', false);
        });
    }
    selectCategoryDropdown() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.selectCategory, 'selectCategory', false);
            yield genericMethod.click(this.bagsealDropdown, 'manifestDropdown', false);
        });
    }
    // async enterManifestNo(fileName: string, sheetName: string) {
    //     var filepath = "//Data//" + fileName;
    //     var manifest = await genericMethod.getExcelData(filepath, sheetName, 2, 13);
    //     console.log(manifest);
    //     await genericMethod.sendKeys(this.manifestInput, manifest, 'manifest');
    // }
    scanManifest() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.scan, 'scan');
            yield genericMethod.pause(5000);
            yield genericMethod.switchToTab(1);
        });
    }
    enterBagseal(fileName, sheetName, row, column) {
        return __awaiter(this, void 0, void 0, function* () {
            var filepath = "//Data//" + fileName;
            var bagseal = yield genericMethod.getExcelData(filepath, sheetName, row, column);
            console.log(bagseal);
            yield genericMethod.sendKeys(this.manifestInput, bagseal, 'bagseal');
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
exports.ManifestInPickupHub = ManifestInPickupHub;
