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
protractor_1.browser.manage().timeouts().implicitlyWait(40000);
class ManifestOutPickup {
    constructor() {
        this.manifest = protractor_1.element.all(protractor_1.by.xpath('//span[text()="Manifest"]')).first();
        this.manifestOutScanPickup = protractor_1.element(protractor_1.by.xpath('//span[text()="Manifest Out Scan Pickup"]'));
        this.serviceTypeField = protractor_1.element(protractor_1.by.xpath('//mat-select[@placeholder="Service Type"]'));
        this.cageId = protractor_1.element(protractor_1.by.xpath('//input[@placeholder= "Cage Id"]'));
        this.nxtHubCode = protractor_1.element(protractor_1.by.xpath('//input[@placeholder= "Next Hub Code"]'));
        this.bagSealNo = protractor_1.element(protractor_1.by.xpath('//input[@placeholder= "Bag Seal Number"]'));
        this.waybillno = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname= "WaybillNo"]'));
        this.scanWayBill = protractor_1.element(protractor_1.by.xpath('//button[@class="mat-icon-button mat-button-base mat-primary ng-star-inserted"]'));
        this.Remove_action = protractor_1.element(protractor_1.by.xpath('(//mat-icon[contains(text(),"remove_circle_outline")])[1]'));
        this.submit = protractor_1.element(protractor_1.by.xpath('//button[@type="Submit"]'));
        this.manifestText = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"successfully created")]'));
        this.branchCodePopUp = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname="pickupZone"]'));
        this.branchCodeOkButton = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"OK")]'));
        //status = element(by.xpath('//div[contains(text()," Manifest Out Scan completed at Pickup branch ")]'));
        this.status = protractor_1.element(protractor_1.by.xpath('(//div[contains(text(),"Manifest ")])[1]'));
        this.viewBtn = protractor_1.element(protractor_1.by.xpath('//mat-icon[@mattooltip="View"]/..//parent::button'));
        this.trackBtnn = protractor_1.element(protractor_1.by.xpath('//mat-icon[text()=" location_searching"]/..//parent::button'));
        this.viewTrack = protractor_1.element(protractor_1.by.xpath('//span[text()="View and Track"]'));
        this.operation = protractor_1.element(protractor_1.by.xpath('//a[@href="#/view-track/operation"]'));
        //trackBtn=element(by.xpath('//span[text()="Track"]//parent::button'));
        this.trackBtn = protractor_1.element(protractor_1.by.xpath('(//span[contains(text(),"Track")])[3]'));
        this.waybillnoOpp = protractor_1.element(protractor_1.by.xpath('//input[@placeholder="Way Bill No"]'));
        this.HubBrachclick = protractor_1.element(protractor_1.by.xpath('//span[contains(@class,"mat-option-text")]'));
        this.manifestId = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname= "manifestId"]'));
        this.cageId2 = protractor_1.element(protractor_1.by.xpath('//input[@formcontrolname= "cageId"]'));
        this.status2 = protractor_1.element(protractor_1.by.xpath('//label[contains(text(),"Status :")]'));
        // manifestText=element(by.xpath('//simple-snack-bar[@class ="mat-simple-snackbar ng-star-inserted"]'));
        this.booking = protractor_1.element(protractor_1.by.xpath("//span[text()='Booking']//parent::a"));
    }
    clickManifest() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.manifest, 'manifest', false);
        });
    }
    clickManifestOutScanPickup() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.manifestOutScanPickup, 'manifestOutScanPickup', false);
        });
    }
    enterServiceType(serviceType) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.serviceTypeField, 'serviceTypeField');
            yield genericMethod.pause(1000);
            const serviceTypePath = protractor_1.element(protractor_1.by.xpath('//span[contains(text(),"' + serviceType + '")]'));
            yield genericMethod.click(serviceTypePath, 'serviceTypePath');
        });
    }
    enterCageId(cageId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.sendKeys(this.cageId, cageId, 'cageId');
        });
    }
    enterNextHubCode(hubCode) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.sendKeys(this.nxtHubCode, hubCode, 'hubCode');
            yield genericMethod.click(this.HubBrachclick, '');
        });
    }
    enterBagSealNum(fileName, sheetName, row, column) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.bagSealNo, 'bagSealNo');
            var filepath = "//Data//" + fileName;
            var Bagseal = yield genericMethod.Increment(filepath, sheetName, row, column);
            console.log(Bagseal);
            yield genericMethod.sendKeys(this.bagSealNo, Bagseal, 'bagSealNo');
            //await genericMethod.sendKeys(this.bagSealNo, bagSealNo, 'bagSealNo');
            ////////////optional////////////////////
            var bagsealsave = yield genericMethod.getValue(this.bagSealNo, 'bagSealNo');
            var filepath = "//Data//" + fileName;
            yield genericMethod.WriteData(bagsealsave, filepath, sheetName, row, column);
            var c = Bagseal + "Zz";
            console.log(c);
            yield genericMethod.sendKeys(this.bagSealNo, c, 'bagSealNo');
        });
    }
    SaveBagSealNum(fileName, sheetName, row, column) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.bagSealNo, 'bagSealNo');
            var bagsealsave = yield genericMethod.getValue(this.bagSealNo, 'bagSealNo');
            var filepath = "//Data//" + fileName;
            yield genericMethod.WriteData(bagsealsave, filepath, sheetName, row, column);
        });
    }
    enterWaybill(fileName, sheetName, row, column) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.waybillno, 'Waybillnumber');
            var filepath = "//Data//" + fileName;
            var waybill = yield genericMethod.getExcelData(filepath, sheetName, row, column);
            console.log(waybill);
            yield genericMethod.sendKeys(this.waybillno, waybill, 'Waybillnumber');
            yield genericMethod.click(this.scanWayBill, 'scanWayBill');
            yield genericMethod.click(this.Remove_action, '');
        });
    }
    clickSubmit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.submit, 'submit', false);
        });
    }
    enterBranch(branch) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickAndSendKeys(this.branchCodePopUp, branch, 'branch');
            yield genericMethod.click(this.HubBrachclick, '');
            yield genericMethod.click(this.branchCodeOkButton, 'branchCodeOkButton');
            yield genericMethod.click(this.submit, 'submit');
            yield genericMethod.pause(7000);
        });
    }
    getBagSealNumber(bagseal, filename, sheetName, row, column) {
        return __awaiter(this, void 0, void 0, function* () {
            const filepath = "//Data//" + filename;
            yield genericMethod.WriteData(bagseal, filepath, sheetName, row, column);
        });
    }
    clickOnViewTrack() {
        return __awaiter(this, void 0, void 0, function* () {
            //await genericMethod.dupicateTAB(1);
            //await genericMethod.pause(2000);
            //await genericMethod.clickUsingJs(this.booking,'booking');
            //await genericMethod.click(this.manifest,'');
            yield genericMethod.switchToTab(1);
            yield genericMethod.clickUsingJs(this.viewTrack, 'viewTrack');
        });
    }
    clickOnOperation() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.operation, '');
            yield genericMethod.pause(2000);
        });
    }
    enterWaybillOpp(fileName, sheetName, row, column) {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.clickUsingJs(this.waybillnoOpp, 'Waybillnumber');
            var filepath = "//Data//" + fileName;
            var waybill = yield genericMethod.getExcelData(filepath, sheetName, row, column);
            console.log(waybill);
            yield genericMethod.sendKeys(this.waybillnoOpp, waybill, 'Waybillnumber');
            yield genericMethod.click(this.manifestId, '');
        });
    }
    ClickANDTrack() {
        return __awaiter(this, void 0, void 0, function* () {
            //await genericMethod.click(this.manifestId,'');
            yield genericMethod.clickUsingJs(this.trackBtn, '');
            //await genericMethod.clickUsingJs(this.trackBtn, '');
            yield genericMethod.pause(6000);
            //await genericMethod.switchToTab(0)  
        });
    }
    CLICKCAGE() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.click(this.cageId2, '');
        });
    }
    MOVETRACKPAGE() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.switchToTab(1);
            yield genericMethod.refreshPage();
        });
    }
    verifyStatus(expectedText) {
        return __awaiter(this, void 0, void 0, function* () {
            //await genericMethod.click(this.status2,'');
            yield genericMethod.scrollIntoView(this.status2, '');
            const actualText = yield genericMethod.getText(this.status, '');
            console.log(actualText);
            yield assertions.verifyContains(expectedText, actualText);
            yield genericMethod.pause(3000);
        });
    }
    Switch_win() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.switchToTab(0);
        });
    }
    SwitchToMainPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.switchToTab(1);
        });
    }
    TrackButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield genericMethod.switchToTab(1);
            yield genericMethod.clickUsingJs(this.trackBtn, '');
            yield genericMethod.pause(6000);
        });
    }
}
exports.ManifestOutPickup = ManifestOutPickup;
