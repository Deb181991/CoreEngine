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
const CheckinScanDelivery_1 = require("../pages/CheckinScanDelivery");
const CheckinScanDeliveryHub_1 = require("../pages/CheckinScanDeliveryHub");
const CheckinScanPickupHub_1 = require("../pages/CheckinScanPickupHub");
const checkinScanWayBillPickup_1 = require("../pages/checkinScanWayBillPickup");
const GenericMethod_1 = require("../utils/GenericMethod");
const genericMethod = new GenericMethod_1.GenericMethod();
const cs = new checkinScanWayBillPickup_1.CheckinScanPickup();
const csph = new CheckinScanPickupHub_1.checkinScanPickupHub();
const csdh = new CheckinScanDeliveryHub_1.checkinScanDeliveryHub();
const csd = new CheckinScanDelivery_1.checkinScanDelivery();
cucumber_1.Given('Navigate into the CoreEngine website', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield cs.launchUrl();
}));
cucumber_1.Given('Provide the Email {string} in the Email field CE', { timeout: genericMethod.defaultTestTimeout }, (email) => __awaiter(void 0, void 0, void 0, function* () {
    yield cs.enterEmail(email);
}));
cucumber_1.Given('Provide the Password {string} in the Password field CE', { timeout: genericMethod.defaultTestTimeout }, (password) => __awaiter(void 0, void 0, void 0, function* () {
    yield cs.enterPassword(password);
}));
cucumber_1.When('Click on the Sign In button CE', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield cs.clickOnSignIn();
}));
cucumber_1.When('User Mousehover and click on Booking option of left navigation bar', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield cs.clickOnBooking();
}));
cucumber_1.Then('all the sub-options should be displayed under Booking', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
}));
cucumber_1.When('User click on Checkin Scan Pickup Module', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield cs.clickOnCheckinScanPickup();
}));
cucumber_1.Then('User should be navigated to {string} page', { timeout: genericMethod.defaultTestTimeout }, (csp) => __awaiter(void 0, void 0, void 0, function* () {
    yield cs.verifyCheckInScanPickup(csp);
}));
cucumber_1.When('User provide valid Waybill Number in the waybill number textfield and press enter {string}, {string}, {int},{int}', { timeout: genericMethod.defaultTestTimeout }, (fn, sn, row, col) => __awaiter(void 0, void 0, void 0, function* () {
    yield cs.enterWayBill(fn, sn, row, col);
}));
cucumber_1.Then('a popup should be displayed asking for Branch Code', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield cs.clickOnPlusBtn();
}));
cucumber_1.When('Select the {string} in the Branch Code dropdown', { timeout: genericMethod.defaultTestTimeout }, (branchCode) => __awaiter(void 0, void 0, void 0, function* () {
    yield cs.enterDataInBranchCode(branchCode);
}));
cucumber_1.Then('The User should be able to select the Branch Code from dropdown', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield cs.clickOnDsml();
}));
cucumber_1.When('User click on ok and again click on + icon present on that page', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield cs.clickOnOkBtn();
    yield cs.clickOnPlusBtn();
}));
cucumber_1.Then('The waybill should be scanned successfully and a successful popup should be displayed', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    //await cs.verifySuccessPopup();
    yield cs.Switch_win();
}));
cucumber_1.Then('checkin {string} of the shipments should be completed', { timeout: genericMethod.defaultTestTimeout }, (expectedText) => __awaiter(void 0, void 0, void 0, function* () {
    yield cs.CheckinverifyStatus(expectedText);
}));
cucumber_1.When('User Mousehover and click on View and Track on left navigation bar,{string} submenu should displayed to User', { timeout: genericMethod.defaultTestTimeout }, (op) => __awaiter(void 0, void 0, void 0, function* () {
    yield cs.clickOnViewTrack();
}));
cucumber_1.When('User click on Operation', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield cs.clickOnOperation();
}));
cucumber_1.Then('User should navigate to {string} Page', { timeout: genericMethod.defaultTestTimeout }, (op) => __awaiter(void 0, void 0, void 0, function* () {
    yield cs.verifyOperationPage(op);
}));
cucumber_1.When('User provide Waybill Number in the Waybill number textfield  {string}, {string}, {int},{int}', { timeout: genericMethod.defaultTestTimeout }, (fn, sn, row, col) => __awaiter(void 0, void 0, void 0, function* () {
    yield cs.waybill(fn, sn, row, col);
}));
cucumber_1.When('User click on Track button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield cs.clicktrackBtn();
}));
cucumber_1.Then('The shipments should displayed on that grid', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield cs.verifyShipment();
}));
cucumber_1.When('User click on View button of that shipments', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield cs.clickOnViewBtn();
}));
// Then('The {string} of the shipments should be Checked In at Pickup Branch',{ timeout: genericMethod.defaultTestTimeout }, async (status) => {
//   await cs.verifyStatus(status);
// });
cucumber_1.When('User click on Checkin Scan Pickup Hub Module', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield csph.clickAtCSPH();
}));
cucumber_1.Then('User should be navigated to {string} pickup page', { timeout: genericMethod.defaultTestTimeout }, (text) => __awaiter(void 0, void 0, void 0, function* () {
    yield csph.verifyCheckInScanPickupHub(text);
}));
cucumber_1.Then('The {string} of the shipments should be Checked In at Pickup Hub', { timeout: genericMethod.defaultTestTimeout }, (status) => __awaiter(void 0, void 0, void 0, function* () {
    yield csph.verifyStatus(status);
}));
cucumber_1.When('User click on Checkin Scan Delivery Hub Module', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield csdh.clickAtCSDH();
}));
cucumber_1.Then('User should be navigated to {string} Hub page', { timeout: genericMethod.defaultTestTimeout }, (text) => __awaiter(void 0, void 0, void 0, function* () {
    yield csdh.verifyCheckInScanDeliveryHub(text);
}));
cucumber_1.Then('The {string} of the shipments should be Checked In at Delivery Hub', { timeout: genericMethod.defaultTestTimeout }, (status) => __awaiter(void 0, void 0, void 0, function* () {
    yield csdh.verifyStatus(status);
}));
cucumber_1.When('User Mousehover and click on Delivery option of left navigation bar', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield csd.clickAtDelivery();
}));
cucumber_1.Then('all the sub-options should be displayed under Delivery', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
}));
cucumber_1.When('User click on Checkin Scan Delivery Module', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield csd.clickAtCSD();
}));
cucumber_1.Then('User should be navigated to {string}  delivery page', { timeout: genericMethod.defaultTestTimeout }, (text) => __awaiter(void 0, void 0, void 0, function* () {
    yield csd.checkinScanDeliveryTextPage(text);
}));
cucumber_1.Then('checkin {string} of the shipments should be Ready for Delivery', { timeout: genericMethod.defaultTestTimeout }, (status) => __awaiter(void 0, void 0, void 0, function* () {
    yield csd.verifyStatus(status);
}));
