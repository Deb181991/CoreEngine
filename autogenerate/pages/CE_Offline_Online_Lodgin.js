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
class CEOfflineOnlineLodginPage {
    constructor() {
        this.Lodgein = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"Lodge In")]'));
        this.Online = protractor_1.element(protractor_1.by.xpath('//div[contains(@class, "mat-radio-label-content" ) and text() = "Online"]'));
        this.Offline = protractor_1.element(protractor_1.by.xpath('//div[contains(@class, "mat-radio-label-content" ) and text() = "Offline"]'));
        this.AccountNumber = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="accountCode"]'));
        this.Waybill = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="WaybillNo"]'));
        this.NOP = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="NoOfPieces"]'));
        this.Lodgein_Action = protractor_1.element(protractor_1.by.xpath('//mat-icon[contains(text(),"add_circle_outline")]'));
        this.Branch = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="pickupZone"]'));
        this.TypeBranch = protractor_1.element(protractor_1.by.xpath('//span[contains(@class,"mat-option-text")]'));
        this.ok = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"OK")]'));
        this.WaybillTrack = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Way Bill No"]'));
        this.Track_Waybill = protractor_1.element(protractor_1.by.xpath('//span[contains(@class, "mat-button-wrapper" ) and text() = "Track"]'));
        this.WebsiteTracking = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"CS Website Tracking")]'));
        this.Operation = protractor_1.element(protractor_1.by.xpath('(//span[contains(text(),"Operation")])[2]'));
    }
    LodgeinButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.mouseHoverAndClick(this.Lodgein, 'Lodgein');
        });
    }
    EnterAccountNumber(AccountNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.AccountNumber, 'AccountNumber');
            yield genericMethod.sendKeys(this.AccountNumber, AccountNumber, 'AccountNumber');
            yield genericMethod.click(this.TypeBranch, '');
        });
    }
    CE_Onlie() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.Online, 'Online');
        });
    }
    EnterWabill(FileName, sheetname, Rowno, columnno) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.Waybill, 'Waybill');
            var filepath = "//Data//" + FileName;
            var Bill = yield genericMethod.Increment(filepath, sheetname, Rowno, columnno);
            yield genericMethod.sendKeys(this.Waybill, Bill, 'Waybill');
            yield genericMethod.WriteData(Bill, filepath, sheetname, Rowno, columnno);
        });
    }
    /////////////////////////////////////Online//////////////////////////////////////////
    EnterOnlineWabill(FileName, sheetname, Rowno, columnno) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.Waybill, 'Waybill');
            var filepath = "//Data//" + FileName;
            var Bill = yield genericMethod.getExcelData(filepath, sheetname, Rowno, columnno);
            yield genericMethod.sendKeys(this.Waybill, Bill, 'Waybill');
            yield genericMethod.WriteData(Bill, filepath, sheetname, Rowno, columnno);
        });
    }
    LodginAction() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.Lodgein_Action, 'Lodgein_Action');
        });
    }
    EnterNOP(NOP) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.NOP, '');
            yield genericMethod.sendKeys(this.NOP, NOP, '');
        });
    }
    EnterBranch(Branch) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.Branch, 'Branch');
            yield genericMethod.sendKeys(this.Branch, Branch, '');
            yield genericMethod.click(this.TypeBranch, '');
        });
    }
    ClickOnOk() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.ok, 'ok');
        });
    }
    WaybillForTrack(fileName, sheetname, Rowno, columnno) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.WaybillTrack, '');
            //await genericMethod.clearField(this.WaybillTrack);
            var filepath = "//Data//" + fileName;
            var bill = yield genericMethod.getExcelData(filepath, sheetname, Rowno, columnno);
            yield genericMethod.sendKeys(this.WaybillTrack, bill, '');
            yield genericMethod.pause(8000);
            //  await genericMethod.click(this.WaybillTrack,'');
            // await genericMethod.clearField(this.WaybillTrack);
        });
    }
    OnlineWaybillForTrack(FileName, sheetname, Rowno, columnno) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.refreshPage();
            yield genericMethod.click(this.WaybillTrack, '');
            //await genericMethod.clearField(this.WaybillTrack);
            var filepath = "//Data//" + FileName;
            var bill = yield genericMethod.getExcelData(filepath, sheetname, Rowno, columnno);
            yield genericMethod.sendKeys(this.WaybillTrack, bill, '');
            yield genericMethod.pause(8000);
        });
    }
    TrackButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.Track_Waybill, 'Track_Waybill');
        });
    }
    CEOperationButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.WebsiteTracking, 'WebsiteTracking');
            yield genericMethod.click(this.Operation, 'Operation');
        });
    }
}
exports.CEOfflineOnlineLodginPage = CEOfflineOnlineLodginPage;
