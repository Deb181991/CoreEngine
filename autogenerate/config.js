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
const Reporter_1 = require("./utils/Reporter");
const jsonReports = process.cwd() + "/reports/json";
exports.config = {
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: true,
    //baseUrl: "https://uat.lineclearexpressonline.com/",
    // baseUrl: "https://uatcore.lineclearexpressonline.com/core/#/auth/login",
    baseUrl: "https://uat.lineclearexpressonline.com/#/auth/login?returnUrl=dashboard",
    params: {
        report: {
            environment: 'UAT',
            release: '1.1'
        },
        login: {
        //user: 'shaikhrehan@esspl.com',
        //user: 'debadatta@esspl.com',
        //user: 'ayasam@esspl.com',
        //user: 'santosh@esspl.com',
        //password: 'Test@123',
        },
        card: {
            cardName: 'Shaikh Rehan Ahmed',
            cardNumber: '5123450000000008',
            cardExpiryDate: '05/21',
            cvv: '100'
        }
    },
    allScriptsTimeout: 500000,
    capabilities: {
        browserName: "chrome",
        chromeOptions: {
            prefs: {
                download: {
                    prompt_for_download: false,
                    directory_upgrade: true,
                    default_directory: process.cwd() + "\\downloads"
                }
            }
        }
    },
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    specs: [
        //"../features/login.feature",
        //"../features/Testings.feature",
        //"../features/bulkBooking.feature",
        //"../features/Reprintwaybill.feature",
        // "../features/addressBook.feature",
        //"../features/Lodgin.feature",
        //"../features/Pickup.feature",
        //"../features/trackShipment.feature",
        //"../features/CE_Offline_Online_Lodgin.feature",
        //"../features/TransitCage_INOUT.feature",
        // "../features/loginCE.feature",
        ////////////////////////////////////////////////////
        //"../features/loginTest.feature",
        //////////////////////////////////////////////////
        // "../features/createShipment.feature",
        "../features/loginCE.feature",
        "../features/PickupPRS.feature",
        "../features/checkinScanPickupBranch.feature",
        "../features/manifestOutScanPickUp.feature",
        "../features/manifestInScanPickUpHub.feature",
        "../features/checkinScanPickupHub.feature",
        "../features/ManifestOutScanPickupHub.feature",
        "../features/manifestInScanDeliveryHub.feature",
        "../features/checkinScanDeliveryHub.feature",
        "../features/ManifestOutScanDeliveryHub.feature",
        "../features/manifestInScanDeliveryBranch.feature",
        "../features/checkinScanDelivery.feature",
        "../features/updateDRS.feature",
    ],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 900000
    },
    onPrepare: () => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.manage().timeouts().implicitlyWait(5000);
        Reporter_1.Reporter.createDirectory(jsonReports);
    }),
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: ["json:./reports/json/CucumberReport.json"],
        require: ["../autogenerate/stepdefinitions/*.js", "../autogenerate/utils/*.js"],
        strict: true,
    },
    onComplete: () => {
        Reporter_1.Reporter.createHTMLReport(protractor_1.browser.params.report.environment, protractor_1.browser.params.report.release, protractor_1.browser.baseUrl);
    },
};
