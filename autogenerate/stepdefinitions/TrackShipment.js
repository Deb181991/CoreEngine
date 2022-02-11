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
const trackShipment_1 = require("../pages/trackShipment");
const GenericMethod_1 = require("../utils/GenericMethod");
const trackshipment = new trackShipment_1.trackShipment();
const address = new AddressBook_1.AddressBookPage();
const genericMethod = new GenericMethod_1.GenericMethod();
cucumber_1.Given('navigate into the OMS website', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield trackshipment.launchUrl();
}));
cucumber_1.Given('provide the Email {string} in the Email field', { timeout: genericMethod.defaultTestTimeout }, (email) => __awaiter(void 0, void 0, void 0, function* () {
    yield trackshipment.enterEmail(email);
}));
cucumber_1.Given('provide the Password {string} in the Password field', { timeout: genericMethod.defaultTestTimeout }, (email) => __awaiter(void 0, void 0, void 0, function* () {
    yield trackshipment.enterPassword(email);
}));
cucumber_1.When('click on the Sign In button', { timeout: genericMethod.defaultTestTimeout }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield trackshipment.clickSubmit();
}));
cucumber_1.When('Mouse hover on the left navigation bar and click on the Track Shipments option', { timeout: genericMethod.defaultTestTimeout }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield trackshipment.ClickTrackShipment();
    });
});
cucumber_1.Then('The user should be able to navigate into the Track Shipments page', { timeout: genericMethod.defaultTestTimeout }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield trackshipment.VerifyShipmentListText();
    });
});
cucumber_1.Then('Enter the Waybill number in tracking number field {string}, {string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, function (file, sheet, row, col) {
    return __awaiter(this, void 0, void 0, function* () {
        yield trackshipment.EnterTrackingNumber(file, sheet, row, col);
    });
});
cucumber_1.Then('Click on the Track button', { timeout: genericMethod.defaultTestTimeout }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield trackshipment.ClickTrack();
    });
});
cucumber_1.Then('user captures Booked date & from and To details', { timeout: genericMethod.defaultTestTimeout }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield trackshipment.CaptureBookingDetailsOMS();
    });
});
cucumber_1.Then('login into Core Engine', { timeout: genericMethod.defaultTestTimeout }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield trackshipment.CELOGIN();
    });
});
cucumber_1.Then('Mouse hovers and Clicks on View and Track', { timeout: genericMethod.defaultTestTimeout }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield trackshipment.ClickViewAndTrack();
    });
});
cucumber_1.Then('clicks on Operation', { timeout: genericMethod.defaultTestTimeout }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield trackshipment.ClickOperation();
    });
});
cucumber_1.Then('Enters the Waybill number in Waybill No field {string}, {string}', { timeout: genericMethod.defaultTestTimeout }, function (fileName, sheetName) {
    return __awaiter(this, void 0, void 0, function* () {
        yield trackshipment.EnterWaybillnumber(fileName, sheetName);
    });
});
cucumber_1.Then('Clicks on Track button', { timeout: genericMethod.defaultTestTimeout }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield trackshipment.Clicktrack();
    });
});
cucumber_1.Then('Captures Booked date & from and To details', { timeout: genericMethod.defaultTestTimeout }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield trackshipment.CaptureBookingDetailsCE();
    });
});
cucumber_1.Then('user verifies booking details', { timeout: genericMethod.defaultTestTimeout }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield trackshipment.VerifyBookingDetails();
    });
});
