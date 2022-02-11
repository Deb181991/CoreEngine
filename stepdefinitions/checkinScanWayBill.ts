import { Given, Then, When } from "cucumber";
import { browser } from "protractor";
import { checkinScanDelivery } from "../pages/CheckinScanDelivery";
import { checkinScanDeliveryHub } from "../pages/CheckinScanDeliveryHub";
import { checkinScanPickupHub } from "../pages/CheckinScanPickupHub";
import { CheckinScanPickup } from "../pages/checkinScanWayBillPickup";
import { GenericMethod } from "../utils/GenericMethod";


const genericMethod: GenericMethod = new GenericMethod();

const cs: CheckinScanPickup=new CheckinScanPickup();
const csph:checkinScanPickupHub=new checkinScanPickupHub();
const csdh:checkinScanDeliveryHub=new checkinScanDeliveryHub();
const csd:checkinScanDelivery=new checkinScanDelivery();




Given('Navigate into the CoreEngine website',{ timeout: genericMethod.defaultTestTimeout }, async () => {
    await cs.launchUrl();
  });

Given('Provide the Email {string} in the Email field CE',{ timeout: genericMethod.defaultTestTimeout }, async (email) => {
    await cs.enterEmail(email);
  });

Given('Provide the Password {string} in the Password field CE', { timeout: genericMethod.defaultTestTimeout }, async (password) =>  {
    await cs.enterPassword(password);
  });

When('Click on the Sign In button CE', { timeout: genericMethod.defaultTestTimeout }, async () =>  {
   await cs.clickOnSignIn();
  });

When('User Mousehover and click on Booking option of left navigation bar', { timeout: genericMethod.defaultTestTimeout }, async () =>  {
    await cs.clickOnBooking();
  });



  Then('all the sub-options should be displayed under Booking', { timeout: genericMethod.defaultTestTimeout }, async () =>  {
    
  });



  When('User click on Checkin Scan Pickup Module', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await cs.clickOnCheckinScanPickup();
  });


  Then('User should be navigated to {string} page', { timeout: genericMethod.defaultTestTimeout }, async (csp) =>  {
    await cs.verifyCheckInScanPickup(csp);
  });



  When('User provide valid Waybill Number in the waybill number textfield and press enter {string}, {string}, {int},{int}', { timeout: genericMethod.defaultTestTimeout }, async (fn,sn,row,col) =>  {
    await cs.enterWayBill(fn,sn,row,col);
  });


  Then('a popup should be displayed asking for Branch Code', { timeout: genericMethod.defaultTestTimeout }, async () =>  {
    await cs.clickOnPlusBtn();
  });



  When('Select the {string} in the Branch Code dropdown', { timeout: genericMethod.defaultTestTimeout }, async (branchCode) =>  {
    await cs.enterDataInBranchCode(branchCode);
  });



  Then('The User should be able to select the Branch Code from dropdown', { timeout: genericMethod.defaultTestTimeout }, async () =>  {
    await cs.clickOnDsml();
  });



  When('User click on ok and again click on + icon present on that page', { timeout: genericMethod.defaultTestTimeout }, async () =>  {
    await cs.clickOnOkBtn();
    await cs.clickOnPlusBtn();
    
  });

  Then('The waybill should be scanned successfully and a successful popup should be displayed',{ timeout: genericMethod.defaultTestTimeout }, async () =>  {
    //await cs.verifySuccessPopup();
    await cs.Switch_win();
  });

  Then('checkin {string} of the shipments should be completed',{ timeout: genericMethod.defaultTestTimeout }, async (expectedText) =>  {
    await cs.CheckinverifyStatus(expectedText);
  });

  When('User Mousehover and click on View and Track on left navigation bar,{string} submenu should displayed to User',{ timeout: genericMethod.defaultTestTimeout }, async (op) =>  { 
    await cs.clickOnViewTrack();
    
  });



  When('User click on Operation', { timeout: genericMethod.defaultTestTimeout }, async () =>  {
    await cs.clickOnOperation();
  });



  Then('User should navigate to {string} Page', { timeout: genericMethod.defaultTestTimeout }, async (op) =>  {
    await cs.verifyOperationPage(op);
  });



  When('User provide Waybill Number in the Waybill number textfield  {string}, {string}, {int},{int}', { timeout: genericMethod.defaultTestTimeout }, async (fn,sn,row,col) => {
    await cs.waybill(fn,sn,row,col);
  });



  When('User click on Track button', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await cs.clicktrackBtn();
  });


  Then('The shipments should displayed on that grid', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await cs.verifyShipment();
  });



  When('User click on View button of that shipments', { timeout: genericMethod.defaultTestTimeout }, async () =>{
    await cs.clickOnViewBtn();
  });



  // Then('The {string} of the shipments should be Checked In at Pickup Branch',{ timeout: genericMethod.defaultTestTimeout }, async (status) => {
  //   await cs.verifyStatus(status);
  // });

  When('User click on Checkin Scan Pickup Hub Module', { timeout: genericMethod.defaultTestTimeout }, async () =>  {
    await csph.clickAtCSPH();
  });



  Then('User should be navigated to {string} pickup page',{ timeout: genericMethod.defaultTestTimeout }, async (text) =>  {
    await csph.verifyCheckInScanPickupHub(text);
  });


  Then('The {string} of the shipments should be Checked In at Pickup Hub',{ timeout: genericMethod.defaultTestTimeout }, async (status) =>  {
    await csph.verifyStatus(status);
  });

  When('User click on Checkin Scan Delivery Hub Module', { timeout: genericMethod.defaultTestTimeout }, async () =>  {
    await csdh.clickAtCSDH();
  });



  Then('User should be navigated to {string} Hub page', { timeout: genericMethod.defaultTestTimeout }, async (text) =>  {
    await csdh.verifyCheckInScanDeliveryHub(text);
  });


  Then('The {string} of the shipments should be Checked In at Delivery Hub', { timeout: genericMethod.defaultTestTimeout }, async (status) =>  {
    await csdh.verifyStatus(status);
  });



  When('User Mousehover and click on Delivery option of left navigation bar', { timeout: genericMethod.defaultTestTimeout }, async () =>  {
    await csd.clickAtDelivery();
  });



  Then('all the sub-options should be displayed under Delivery', { timeout: genericMethod.defaultTestTimeout }, async () =>  {
    
  });



  When('User click on Checkin Scan Delivery Module',{ timeout: genericMethod.defaultTestTimeout }, async () => {
    await csd.clickAtCSD();
  });



  Then('User should be navigated to {string}  delivery page', { timeout: genericMethod.defaultTestTimeout }, async (text) =>  {
    await csd.checkinScanDeliveryTextPage(text);
  });

  Then('checkin {string} of the shipments should be Ready for Delivery', { timeout: genericMethod.defaultTestTimeout }, async (status) =>  {
    await csd.verifyStatus(status);
  });
  