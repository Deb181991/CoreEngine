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
const Login_1 = require("../pages/Login");
const cucumber_1 = require("cucumber");
const GenericMethod_1 = require("../utils/GenericMethod");
const login = new Login_1.LoginPage();
const genericMethod = new GenericMethod_1.GenericMethod();
cucumber_1.Given('Navigate into the OMS website', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield login.launchUrl();
}));
cucumber_1.Then('The user should be able to navigate into the login page', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield login.verifyNavigation();
}));
cucumber_1.Given('Provide the Email {string} in the Email field', { timeout: genericMethod.defaultTestTimeout }, (email) => __awaiter(void 0, void 0, void 0, function* () {
    yield login.enterEmail(email);
}));
cucumber_1.Given('verify {string}', { timeout: genericMethod.defaultTestTimeout }, (pickup) => __awaiter(void 0, void 0, void 0, function* () {
    yield login.pickupCheck(pickup);
}));
cucumber_1.Given('Provide the Password {string} in the Password field', { timeout: genericMethod.defaultTestTimeout }, (email) => __awaiter(void 0, void 0, void 0, function* () {
    yield login.enterPassword(email);
}));
cucumber_1.When('Click on the Sign In button', { timeout: 100 * 1000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield login.clickSubmit();
}));
cucumber_1.When('Click on the CE Sign In button', { timeout: 100 * 1000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield login.CEclickSubmit();
}));
cucumber_1.Then('The user should be navigated to {string} page', { timeout: 150 * 1000 }, (page) => __awaiter(void 0, void 0, void 0, function* () {
    yield login.verifyLoggedInPageUrl(page);
}));
cucumber_1.Then('Click on the Sign Out button', { timeout: 150 * 1000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield login.logout();
}));
cucumber_1.Then('Click on the Profile button', { timeout: 150 * 1000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield login.Profilebutton();
}));
cucumber_1.Then('Login into Core Engine', { timeout: 150 * 1000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield login.CELOGIN();
}));
cucumber_1.Then('Check the waybill {string},{string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, (fileName, sheetName, rowNum, columnNum) => __awaiter(void 0, void 0, void 0, function* () {
    yield login.Exceldata(fileName, sheetName, rowNum, columnNum);
}));
cucumber_1.Then('write outcome data {string},{string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, (fileName, sheetName, rowNum, columnNum) => __awaiter(void 0, void 0, void 0, function* () {
    yield login.WriteData(fileName, sheetName, rowNum, columnNum);
}));
cucumber_1.Then('{string} should be displayed', { timeout: 150 * 1000 }, (un) => __awaiter(void 0, void 0, void 0, function* () {
    yield login.verifySignIn(un);
}));
