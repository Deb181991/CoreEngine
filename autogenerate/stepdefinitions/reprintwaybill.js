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
const AddressBook_1 = require("../pages/AddressBook");
const Reprintwaybill_1 = require("../pages/Reprintwaybill");
const GenericMethod_1 = require("../utils/GenericMethod");
const reprintwaybill = new Reprintwaybill_1.Reprintwaybill();
const address = new AddressBook_1.AddressBookPage();
const genericMethod = new GenericMethod_1.GenericMethod();
cucumber_1.Given('navigate into OMS website', { timeout: genericMethod.defaultTestTimeout }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield reprintwaybill.launchUrl();
    });
});
cucumber_1.Given('provide Email {string} in the Email field', { timeout: genericMethod.defaultTestTimeout }, function (email) {
    return __awaiter(this, void 0, void 0, function* () {
        yield reprintwaybill.enterEmail(email);
    });
});
cucumber_1.Given('provide Password {string} in the Password field', { timeout: genericMethod.defaultTestTimeout }, function (password) {
    return __awaiter(this, void 0, void 0, function* () {
        yield reprintwaybill.enterPassword(password);
    });
});
cucumber_1.When('click on Sign In button', { timeout: genericMethod.defaultTestTimeout }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield reprintwaybill.clickSubmit();
    });
});
cucumber_1.When('User Mouse hovers on the left navigation bar and click on the Reprint Waybill option', { timeout: genericMethod.defaultTestTimeout }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield reprintwaybill.clickReprintwaybill();
    });
});
cucumber_1.Then('user should be able to navigate into the Reprint Waybill page', { timeout: genericMethod.defaultTestTimeout }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield reprintwaybill.VerifyShipmentListText();
    });
});
cucumber_1.Then('Enters the Waybill number in tracking number field {string}, {string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, function (file, sheet, row, col) {
    return __awaiter(this, void 0, void 0, function* () {
        yield reprintwaybill.EnterWaybillno(file, sheet, row, col);
    });
});
cucumber_1.Then('User Clicks on the Print Waybill button', { timeout: genericMethod.defaultTestTimeout }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield reprintwaybill.clickprintwaybill();
    });
});
cucumber_1.Then('User selects Standard Delivery from the Shipment service dropdown', { timeout: genericMethod.defaultTestTimeout }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield reprintwaybill.SelectShipmentService();
    });
});
cucumber_1.Then('Clicks on the Search button', { timeout: genericMethod.defaultTestTimeout }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield reprintwaybill.clickSearch();
    });
});
cucumber_1.Then('user Clicks on print icon', { timeout: genericMethod.defaultTestTimeout }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield reprintwaybill.clickPrintIcon();
    });
});
cucumber_1.When('user Mousehovers and clicks on Shipment management', { timeout: genericMethod.defaultTestTimeout }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield reprintwaybill.clickShipmentManagement();
    });
});
cucumber_1.Then('enters reference number And waybill number', { timeout: genericMethod.defaultTestTimeout }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield reprintwaybill.Enterwaybill();
    });
});
cucumber_1.Then('User clicks on the Search button', { timeout: genericMethod.defaultTestTimeout }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield reprintwaybill.clickonSearch();
    });
});
cucumber_1.Then('Clicks on the Elipsis icon and clicks on view option', { timeout: genericMethod.defaultTestTimeout }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield reprintwaybill.clickElipseIcon();
    });
});
