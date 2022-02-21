import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "./utils/Reporter";

const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: true,

    //baseUrl: "https://uat.lineclearexpressonline.com/",
   // baseUrl: "https://uatcore.lineclearexpressonline.com/core/#/auth/login",
      baseUrl: "https://uat.lineclearexpressonline.com/#/auth/login?returnUrl=dashboard",
      
    params: {
        report:{
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
       "../features/loginTest.feature",
       //////////////////////////////////////////////////
        //   "../features/createShipment.feature",
        //     "../features/loginCE.feature",
        //   "../features/PickupPRS.feature",
        //   "../features/checkinScanPickupBranch.feature", 
        //   "../features/manifestOutScanPickUp.feature",    
        //   "../features/manifestInScanPickUpHub.feature",
        //    "../features/checkinScanPickupHub.feature",
        //      "../features/ManifestOutScanPickupHub.feature",
        //      "../features/manifestInScanDeliveryHub.feature",
        //     "../features/checkinScanDeliveryHub.feature",
        //    "../features/ManifestOutScanDeliveryHub.feature",
        //     "../features/manifestInScanDeliveryBranch.feature",
        //    "../features/checkinScanDelivery.feature",
        //   "../features/updateDRS.feature",

    ],
        
    jasmineNodeOpts: {
        defaultTimeoutInterval: 900000
    },

    onPrepare:async () => {
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
        Reporter.createDirectory(jsonReports);
        
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: ["json:./reports/json/CucumberReport.json"],
        require: ["../autogenerate/stepdefinitions/*.js", "../autogenerate/utils/*.js"],
        strict: true,
        //tags: " @loginPU",
      //tags : "@login4 or @Pickup2",
    },

    onComplete: () => {
        Reporter.createHTMLReport(browser.params.report.environment,
            browser.params.report.release, browser.baseUrl);
    },    
};


