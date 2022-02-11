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
const cucumber_1 = require("cucumber");
const CE_Offline_Online_Lodgin_1 = require("../pages/CE_Offline_Online_Lodgin");
const GenericMethod_1 = require("../utils/GenericMethod");
const Lodgein = new CE_Offline_Online_Lodgin_1.CEOfflineOnlineLodginPage();
const genericMethod = new GenericMethod_1.GenericMethod();
cucumber_1.Then('Mouse hover and click on Lodge in', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield Lodgein.LodgeinButton();
}));
cucumber_1.Then('Click on Online mode option', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield Lodgein.CE_Onlie();
}));
cucumber_1.Then('Enter {string} in account number field', { timeout: genericMethod.defaultTestTimeout }, (AccountNumber) => __awaiter(void 0, void 0, void 0, function* () {
    yield Lodgein.EnterAccountNumber(AccountNumber);
}));
//////////////////////
cucumber_1.Then('Enter waybill number in the Waybill Number field {string}, {string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, (FileName, sheetname, Rowno, columnno) => __awaiter(void 0, void 0, void 0, function* () {
    yield Lodgein.EnterWabill(FileName, sheetname, Rowno, columnno);
}));
cucumber_1.Then('Enter onlinewaybill number in the online Waybill Number field {string}, {string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, (FileName, sheetname, Rowno, columnno) => __awaiter(void 0, void 0, void 0, function* () {
    yield Lodgein.EnterOnlineWabill(FileName, sheetname, Rowno, columnno);
}));
cucumber_1.Then('Click on Lodge In icon button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield Lodgein.LodginAction();
}));
cucumber_1.Then('Enter {string} in the Branch', { timeout: genericMethod.defaultTestTimeout }, (Branch) => __awaiter(void 0, void 0, void 0, function* () {
    yield Lodgein.EnterBranch(Branch);
}));
cucumber_1.Then('Enter the {string} in number piece field', { timeout: genericMethod.defaultTestTimeout }, (NOP) => __awaiter(void 0, void 0, void 0, function* () {
    yield Lodgein.EnterNOP(NOP);
}));
cucumber_1.Then('Click on OK', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield Lodgein.ClickOnOk();
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
cucumber_1.Then('Enters the TrackWaybill number in Waybill No field for Track {string}, {string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, (FileName, sheetname, Rowno, columnno) => __awaiter(void 0, void 0, void 0, function* () {
    yield Lodgein.WaybillForTrack(FileName, sheetname, Rowno, columnno);
}));
cucumber_1.Then('Clicks on CE Track button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield Lodgein.TrackButton();
}));
///////////////////////////////////////////////////////////////////////////////////////////////
cucumber_1.Then('click on CE Operation', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield Lodgein.CEOperationButton();
}));
cucumber_1.Then('Enters the OnlineTrackWaybill number in Waybill No field for Track {string}, {string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, (FileName, sheetname, Rowno, columnno) => __awaiter(void 0, void 0, void 0, function* () {
    yield Lodgein.OnlineWaybillForTrack(FileName, sheetname, Rowno, columnno);
}));
