import { ManifestOutPickup } from "../pages/ManifestOutScanPickup";
import { When, Then } from "cucumber";
import { GenericMethod } from "../utils/GenericMethod";
import { CheckinScanPickup } from "../pages/checkinScanWayBillPickup";
import { ManifestInPickupHub } from "../pages/ManifestInScanPickupHub";
import { ManifestInDeliveryHub } from "../pages/ManifestInScanDeliveryHub";
import { ManifestInDeliveryBranch } from "../pages/ManifestInScanDeliveryBranch";
import { ManifestOutPickupHub } from "../pages/ManifestOutScanPickupHub";
import {ManifestOutDeliverypHub} from "../pages/ManifestOutScanDeliveryHub";


const manifest: ManifestOutPickup = new ManifestOutPickup();
const genericMethod: GenericMethod = new GenericMethod();
const cs: CheckinScanPickup = new CheckinScanPickup();
const manifestInscanPickUpHub: ManifestInPickupHub = new ManifestInPickupHub();
const manifestInscanDeliverHub: ManifestInDeliveryHub = new ManifestInDeliveryHub();
const manifestInscanDeliver: ManifestInDeliveryBranch = new ManifestInDeliveryBranch();
const manifestOutScanPickUpHub: ManifestOutPickupHub = new ManifestOutPickupHub();
const ManifestOutScanDeliverypHub: ManifestOutDeliverypHub = new ManifestOutDeliverypHub();

When('Mousehover and click on Manifest on the left navigation bar', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await manifest.clickManifest();
});

When('Click on Manifest Out Scan Pickup', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await manifest.clickManifestOutScanPickup();
});



When('Select {string} type from Service Type Dropdown', { timeout: genericMethod.defaultTestTimeout }, async (serviceId) => {
    await manifest.enterServiceType(serviceId);
});

When('Enter {string} number in CageId textfield', { timeout: genericMethod.defaultTestTimeout }, async (cageId) => {
    await manifest.enterCageId(cageId);
});

When('Enter {string} Code in Next Hub Code textfield', { timeout: genericMethod.defaultTestTimeout }, async (hub) => {
    await manifest.enterNextHubCode(hub);
});

// When('Enter {string} number in Bag Seal textfield', { timeout: genericMethod.defaultTestTimeout }, async (bagseal) => {
//     await manifest.enterBagSealNum(bagseal);
// });
When('Enter Bag Seal number in Bag Seal textfield {string},{string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, async (fileName, sheetName, row, column) => {
    await manifest.enterBagSealNum(fileName, sheetName, row, column);
});

When('save the Bag Seal number {string},{string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, async (fileName, sheetName, row, column) => {
    await manifest.SaveBagSealNum(fileName, sheetName, row, column);
});

When('Enters the Waybill number in Waybill No field {string},{string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, async (fileName, sheetName, row, column) => {
    await manifest.enterWaybill(fileName, sheetName, row, column);
});

When('Enters the Waybill number in Waybill No field in operation page {string},{string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, async (fileName, sheetName, row, column) => {
    await manifest.enterWaybillOpp(fileName, sheetName, row, column);
});

When('Click on submit', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await manifest.clickSubmit();
});

When('enter branch code and click ok {string}', { timeout: genericMethod.defaultTestTimeout }, async (branch) => {
    await manifest.enterBranch(branch);
    
});

When('verify success message {string},{string},{string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, async (bagseal,fileName,sheetName,row,col) => {
    await manifest.getBagSealNumber(bagseal,fileName, sheetName,row,col);
    await manifest.clickManifest();
});

Then('manifest {string} of the shipments should be completed', { timeout: genericMethod.defaultTestTimeout }, async (status) => {
    await manifest.verifyStatus(status);
    await manifest.Switch_win();

});

When('User Mousehover and click on View and Track on left navigation bar', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await manifest.clickOnViewTrack();

});

When('Click on Manifest In Scan Pickup Hub', { timeout: genericMethod.defaultTestTimeout }, async () => {

    await manifestInscanPickUpHub.clickManifestInScanPickup();

});

When('Select manifest number from Scan Catagory Dropdown', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await manifestInscanPickUpHub.selectCategoryDropdown();

});

When('Enter bag seal number in Manifest textfield {string},{string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, async (fileName,sheetName,row,col) => {
    await manifestInscanPickUpHub.enterBagseal(fileName,sheetName,row,col);

});

When('Click on Scan button', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await manifestInscanPickUpHub.scanManifest();
    //await manifest.clickManifest();

});

Then('The {string} of the shipments should be Manifest In Scan completed at Pickup branch', { timeout: genericMethod.defaultTestTimeout }, async (status) => {
    await manifestInscanPickUpHub.verifyStatus(status);

});

When('Click on Manifest Out Scan Pickup hub', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await manifestOutScanPickUpHub.clickManifestOutScanPickupHub();

});

Then('The {string} of the shipments should be Manifest Out Scan completed at Pickup hub', { timeout: genericMethod.defaultTestTimeout }, async (status) => {
    await manifestOutScanPickUpHub.verifyStatus(status);
});

When('Click on Manifest Out Scan Delivery hub', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await ManifestOutScanDeliverypHub.clickmanifestOutScanDeliveryHub();
    });
    
When('Enter {string} Code in Next branch Code textfield', { timeout: genericMethod.defaultTestTimeout }, async (Nextbranchcode) => {
    await ManifestOutScanDeliverypHub.clickNextbranchcode(Nextbranchcode);
    });
    
Then('The {string} of the shipments should be Manifest Out Scan completed at Delivery hub', { timeout: genericMethod.defaultTestTimeout }, async (status) => {
    await manifestOutScanPickUpHub.verifyStatus(status);
});



When('Click on Manifest In Scan Delivery Hub', { timeout: genericMethod.defaultTestTimeout }, async () => {

    await manifestInscanDeliverHub.clickManifestInScanDeliveryHub();

});


Then('The {string} of the shipments should be Manifest In Scan completed at Delivery Hub', { timeout: genericMethod.defaultTestTimeout }, async (status) => {
    await manifestInscanDeliverHub.verifyStatus(status);

});

When('Click on Manifest In Scan Delivery Branch', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await manifestInscanDeliver.clickManifestInScanDeliveryBranch();

});

Then('The {string} of the shipments should be Manifest In Scan completed at Delivery Branch', { timeout: genericMethod.defaultTestTimeout }, async (status) => {
    await manifestInscanDeliver.verifyStatus(status);

});

When('User click on the Track button', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await manifest.ClickANDTrack();
    //await manifest.CLICKCAGE();click on the Track button
});

When('click on the Track button', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await manifest.TrackButton();
});
When('move to View and track page', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await manifest.MOVETRACKPAGE();

});








