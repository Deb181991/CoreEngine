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
class TransitCageINOUT {
    constructor() {
        this.Manifest = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Manifest")]'));
        this.TransitcageoutScan = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Transit Cage Out Scan")]'));
        this.TransitcageInScan = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Transit Cage In Scan")]'));
        this.ScanCategory = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Select Scan Category")]'));
        this.TC_manifestNumber = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Manifest Number")]'));
        this.TC_BagSealNumber = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Manifest Number")]'));
        this.Manifest_Enter = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="txtseachno"]'));
        this.TC_Sacn = protractor_1.element(protractor_1.by.xpath('//span[contains(@class, "mat-button-wrapper" ) and text() = "Scan"]'));
    }
    TC_Manifest() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.mouseHoverAndClick(this.Manifest, 'Lodgein');
        });
    }
    TC_Out() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.TransitcageoutScan, 'TransitcageoutScan');
        });
    }
    SelectCotegory() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.ScanCategory, 'ScanCategory');
            yield genericMethod.click(this.TC_manifestNumber, '');
        });
    }
    Enter_ManifestNumber(FileName, sheetname, Rowno, columnno) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.Manifest_Enter, 'Manifest Number');
            var filepath = "//Data//" + FileName;
            var ManifestNo = yield genericMethod.getExcelData(filepath, sheetname, Rowno, columnno);
            yield genericMethod.sendKeys(this.Manifest_Enter, ManifestNo, 'ManifestNo');
        });
    }
    TC_SacnButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.TC_Sacn, 'Scan');
        });
    }
    TC_In() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.TransitcageInScan, 'TransitcageInScan');
        });
    }
}
exports.TransitCageINOUT = TransitCageINOUT;
