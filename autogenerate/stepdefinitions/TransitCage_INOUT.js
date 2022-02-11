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
const TransitCage_INOUT_1 = require("../pages/TransitCage_INOUT"); ///////////////
const GenericMethod_1 = require("../utils/GenericMethod");
const TCINOUT = new TransitCage_INOUT_1.TransitCageINOUT();
const genericMethod = new GenericMethod_1.GenericMethod();
cucumber_1.Then('Mouse hover and click on Manifest', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield TCINOUT.TC_Manifest();
}));
cucumber_1.Then('click on Transit Cage Out Scan', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield TCINOUT.TC_Out();
}));
cucumber_1.Then('Select scan category from dropdown box', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield TCINOUT.SelectCotegory();
}));
cucumber_1.Then('Enter ManifestNumber in Manifest field {string}, {string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, (FileName, sheetname, Rowno, columnno) => __awaiter(void 0, void 0, void 0, function* () {
    yield TCINOUT.Enter_ManifestNumber(FileName, sheetname, Rowno, columnno);
}));
cucumber_1.Then('Click on scan button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield TCINOUT.TC_SacnButton();
}));
cucumber_1.Then('click on Transit Cage In Scan', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield TCINOUT.TC_In();
}));
