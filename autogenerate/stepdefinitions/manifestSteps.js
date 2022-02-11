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
const ManifestOutScanPickup_1 = require("../pages/ManifestOutScanPickup");
const cucumber_1 = require("cucumber");
const GenericMethod_1 = require("../utils/GenericMethod");
const checkinScanWayBillPickup_1 = require("../pages/checkinScanWayBillPickup");
const ManifestInScanPickupHub_1 = require("../pages/ManifestInScanPickupHub");
const ManifestInScanDeliveryHub_1 = require("../pages/ManifestInScanDeliveryHub");
const ManifestInScanDeliveryBranch_1 = require("../pages/ManifestInScanDeliveryBranch");
const ManifestOutScanPickupHub_1 = require("../pages/ManifestOutScanPickupHub");
const ManifestOutScanDeliveryHub_1 = require("../pages/ManifestOutScanDeliveryHub");
const manifest = new ManifestOutScanPickup_1.ManifestOutPickup();
const genericMethod = new GenericMethod_1.GenericMethod();
const cs = new checkinScanWayBillPickup_1.CheckinScanPickup();
const manifestInscanPickUpHub = new ManifestInScanPickupHub_1.ManifestInPickupHub();
const manifestInscanDeliverHub = new ManifestInScanDeliveryHub_1.ManifestInDeliveryHub();
const manifestInscanDeliver = new ManifestInScanDeliveryBranch_1.ManifestInDeliveryBranch();
const manifestOutScanPickUpHub = new ManifestOutScanPickupHub_1.ManifestOutPickupHub();
const ManifestOutScanDeliverypHub = new ManifestOutScanDeliveryHub_1.ManifestOutDeliverypHub();
cucumber_1.When('Mousehover and click on Manifest on the left navigation bar', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield manifest.clickManifest();
}));
cucumber_1.When('Click on Manifest Out Scan Pickup', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield manifest.clickManifestOutScanPickup();
}));
cucumber_1.When('Select {string} type from Service Type Dropdown', { timeout: genericMethod.defaultTestTimeout }, (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    yield manifest.enterServiceType(serviceId);
}));
cucumber_1.When('Enter {string} number in CageId textfield', { timeout: genericMethod.defaultTestTimeout }, (cageId) => __awaiter(void 0, void 0, void 0, function* () {
    yield manifest.enterCageId(cageId);
}));
cucumber_1.When('Enter {string} Code in Next Hub Code textfield', { timeout: genericMethod.defaultTestTimeout }, (hub) => __awaiter(void 0, void 0, void 0, function* () {
    yield manifest.enterNextHubCode(hub);
}));
// When('Enter {string} number in Bag Seal textfield', { timeout: genericMethod.defaultTestTimeout }, async (bagseal) => {
//     await manifest.enterBagSealNum(bagseal);
// });
cucumber_1.When('Enter Bag Seal number in Bag Seal textfield {string},{string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, (fileName, sheetName, row, column) => __awaiter(void 0, void 0, void 0, function* () {
    yield manifest.enterBagSealNum(fileName, sheetName, row, column);
}));
cucumber_1.When('save the Bag Seal number {string},{string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, (fileName, sheetName, row, column) => __awaiter(void 0, void 0, void 0, function* () {
    yield manifest.SaveBagSealNum(fileName, sheetName, row, column);
}));
cucumber_1.When('Enters the Waybill number in Waybill No field {string},{string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, (fileName, sheetName, row, column) => __awaiter(void 0, void 0, void 0, function* () {
    yield manifest.enterWaybill(fileName, sheetName, row, column);
}));
cucumber_1.When('Enters the Waybill number in Waybill No field in operation page {string},{string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, (fileName, sheetName, row, column) => __awaiter(void 0, void 0, void 0, function* () {
    yield manifest.enterWaybillOpp(fileName, sheetName, row, column);
}));
cucumber_1.When('Click on submit', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield manifest.clickSubmit();
}));
cucumber_1.When('enter branch code and click ok {string}', { timeout: genericMethod.defaultTestTimeout }, (branch) => __awaiter(void 0, void 0, void 0, function* () {
    yield manifest.enterBranch(branch);
}));
cucumber_1.When('verify success message {string},{string},{string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, (bagseal, fileName, sheetName, row, col) => __awaiter(void 0, void 0, void 0, function* () {
    yield manifest.getBagSealNumber(bagseal, fileName, sheetName, row, col);
    yield manifest.clickManifest();
}));
cucumber_1.Then('manifest {string} of the shipments should be completed', { timeout: genericMethod.defaultTestTimeout }, (status) => __awaiter(void 0, void 0, void 0, function* () {
    yield manifest.verifyStatus(status);
    yield manifest.Switch_win();
}));
cucumber_1.When('User Mousehover and click on View and Track on left navigation bar', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield manifest.clickOnViewTrack();
}));
cucumber_1.When('Click on Manifest In Scan Pickup Hub', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield manifestInscanPickUpHub.clickManifestInScanPickup();
}));
cucumber_1.When('Select manifest number from Scan Catagory Dropdown', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield manifestInscanPickUpHub.selectCategoryDropdown();
}));
cucumber_1.When('Enter bag seal number in Manifest textfield {string},{string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, (fileName, sheetName, row, col) => __awaiter(void 0, void 0, void 0, function* () {
    yield manifestInscanPickUpHub.enterBagseal(fileName, sheetName, row, col);
}));
cucumber_1.When('Click on Scan button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield manifestInscanPickUpHub.scanManifest();
    //await manifest.clickManifest();
}));
cucumber_1.Then('The {string} of the shipments should be Manifest In Scan completed at Pickup branch', { timeout: genericMethod.defaultTestTimeout }, (status) => __awaiter(void 0, void 0, void 0, function* () {
    yield manifestInscanPickUpHub.verifyStatus(status);
}));
cucumber_1.When('Click on Manifest Out Scan Pickup hub', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield manifestOutScanPickUpHub.clickManifestOutScanPickupHub();
}));
cucumber_1.Then('The {string} of the shipments should be Manifest Out Scan completed at Pickup hub', { timeout: genericMethod.defaultTestTimeout }, (status) => __awaiter(void 0, void 0, void 0, function* () {
    yield manifestOutScanPickUpHub.verifyStatus(status);
}));
cucumber_1.When('Click on Manifest Out Scan Delivery hub', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield ManifestOutScanDeliverypHub.clickmanifestOutScanDeliveryHub();
}));
cucumber_1.When('Enter {string} Code in Next branch Code textfield', { timeout: genericMethod.defaultTestTimeout }, (Nextbranchcode) => __awaiter(void 0, void 0, void 0, function* () {
    yield ManifestOutScanDeliverypHub.clickNextbranchcode(Nextbranchcode);
}));
cucumber_1.Then('The {string} of the shipments should be Manifest Out Scan completed at Delivery hub', { timeout: genericMethod.defaultTestTimeout }, (status) => __awaiter(void 0, void 0, void 0, function* () {
    yield manifestOutScanPickUpHub.verifyStatus(status);
}));
cucumber_1.When('Click on Manifest In Scan Delivery Hub', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield manifestInscanDeliverHub.clickManifestInScanDeliveryHub();
}));
cucumber_1.Then('The {string} of the shipments should be Manifest In Scan completed at Delivery Hub', { timeout: genericMethod.defaultTestTimeout }, (status) => __awaiter(void 0, void 0, void 0, function* () {
    yield manifestInscanDeliverHub.verifyStatus(status);
}));
cucumber_1.When('Click on Manifest In Scan Delivery Branch', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield manifestInscanDeliver.clickManifestInScanDeliveryBranch();
}));
cucumber_1.Then('The {string} of the shipments should be Manifest In Scan completed at Delivery Branch', { timeout: genericMethod.defaultTestTimeout }, (status) => __awaiter(void 0, void 0, void 0, function* () {
    yield manifestInscanDeliver.verifyStatus(status);
}));
cucumber_1.When('User click on the Track button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield manifest.ClickANDTrack();
    //await manifest.CLICKCAGE();click on the Track button
}));
cucumber_1.When('click on the Track button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield manifest.TrackButton();
}));
cucumber_1.When('move to View and track page', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield manifest.MOVETRACKPAGE();
}));
