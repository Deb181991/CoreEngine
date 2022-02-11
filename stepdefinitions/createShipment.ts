import { Given, Then, When } from "cucumber";
import { CreateNewShipmentPage } from "../pages/CreateNewShipment";
import { GenericMethod } from "../utils/GenericMethod";

const shipment: CreateNewShipmentPage = new CreateNewShipmentPage();
const genericMethod: GenericMethod = new GenericMethod();

Given('Enter the Name {string} in the Name field', {timeout: genericMethod.defaultTestTimeout }, async (email) => {
    await shipment.enterEmail(email);
    });

  Given('Enter the pw {string} in the pw field',  {timeout: genericMethod.defaultTestTimeout }, async (password) => {
    await shipment.enterPassword(password);
});


  Given('Click on the login button', {timeout: genericMethod.defaultTestTimeout }, async () => {
    await shipment.clickSubmit();
    });

  Given('Mouse hover on the Bookings option of left navigation bar and click on the Create Shipment option', {timeout: genericMethod.defaultTestTimeout }, async () => {
    await shipment.clickOnMousehover();
    await shipment.clickOnBooking();
    await shipment.navigateToCreateNewShipment();
});


  Given('Select the Standard Delivery option',  {timeout: genericMethod.defaultTestTimeout }, async () => {
    await shipment.clickStandardDelivery();
    });


  Given('Click on the Next Step button',  {timeout: genericMethod.defaultTestTimeout }, async () => {
    await shipment.clickNextButton();
    });
    
  Given('Click on the Next Step button of summary',  {timeout: genericMethod.defaultTestTimeout }, async () => {
      await shipment.clickNextButtonSummary();
      });


  Given('Enter the Company Name {string} in Delivery Section', {timeout: genericMethod.defaultTestTimeout }, async (companyName) => {
    await shipment.enterDeliveryCompanyName(companyName);
});


  Given('Enter the Name {string} in Delivery Section', {timeout: genericMethod.defaultTestTimeout }, async (name) => {
    await shipment.enterDeliveryName(name);

});

  Given('Check whether Country {string} is displayed in the Country field in Delivery Section',  {timeout: genericMethod.defaultTestTimeout }, async (country) => {
    await shipment.verifyDeliveryCountry(country);
});


  Given('Enter the Post Code {string} in Delivery Section',  {timeout: genericMethod.defaultTestTimeout }, async (code) => {
    await shipment.enterDeliveryPostalcode(code);
});

  
  Given('Enter the Building or Unit number {string} in Delivery Section',  {timeout: genericMethod.defaultTestTimeout }, async (building) => {
    await shipment.enterDeliveryUnit(building);
});


  Given('Enter the {string} in the Address field in Delivery Section',  {timeout: genericMethod.defaultTestTimeout }, async (address) => {
    await shipment.enterDeliveryAddress(address);
});


Given('user Click on the {string} select option from it in Delivery Section',  {timeout: genericMethod.defaultTestTimeout }, async (address2) => {
    await shipment.enterDeliveryAddress2(address2);
});


  Given('Enter the Email Id {string} in Delivery Section',  {timeout: genericMethod.defaultTestTimeout }, async (email) => {
    await shipment.enterDeliveryEmail(email);
});


  Given('Enter the Mobile number {string} in Delivery Section',  {timeout: genericMethod.defaultTestTimeout }, async (phone) => {
    await shipment.enterDeliveryPhNo(phone);
});


  Given('Enter the IC number in Delivery Section',  {timeout: genericMethod.defaultTestTimeout }, async () => {
    const icNumber = genericMethod.getRandomNumber(8);
    await shipment.enterDeliveryIcNumber(icNumber);

});

Given('click on {string} dropdown and select option from it',  {timeout: genericMethod.defaultTestTimeout }, async (type) => {
  await shipment.selectServiceType(type);
  });

 Given('click on {string} and select option from it',  {timeout: genericMethod.defaultTestTimeout }, async (type) => {
    await shipment.selectServiceTypePU(type);

  });
 
  Given('Click on the Shipment Type {string} dropdown and select option from it',  {timeout: genericMethod.defaultTestTimeout }, async (type) => {
    await shipment.selectShipmentType(type);

});

  Given('Click on the Mode {string} dropdown and select option from it',  {timeout: genericMethod.defaultTestTimeout }, async (mode) => {
    await shipment.selectMode(mode);
});


Given('fetch waybill number from the waybill number field {string}, {string},{int},{int}', {timeout: genericMethod.defaultTestTimeout }, async (FileName,sheetname,Rowno,columnno) => {
   await shipment.FetchWayBill(FileName,sheetname,Rowno,columnno);
  });

  
  Given('Enter the Quantity {string}',  {timeout: genericMethod.defaultTestTimeout }, async (quantity) => {
    await shipment.enterPackageQuantity(quantity);
    });


  Given('Enter the Weight {string}',  {timeout: genericMethod.defaultTestTimeout }, async (weight) => {
    await shipment.enterPackageWeight(weight);
    });


  Given('Check whether the {string} option is displayed in the Packaging Type drop down',  {timeout: genericMethod.defaultTestTimeout }, async (type) => {
    await shipment.verifyPackageType(type);
});


  Given('Enter the Width {string}',{timeout: genericMethod.defaultTestTimeout }, async (width) => {
    await shipment.enterPackageWidth(width);
    });

  Given('Enter the Height {string}', {timeout: genericMethod.defaultTestTimeout }, async (height) => {
    await shipment.enterPackageHeight(height);
    });


  Given('Enter the Length {string}', {timeout: genericMethod.defaultTestTimeout }, async (length) => {
    await shipment.enterPackageLength(length);
    });

  Given('Upload a file by clicking on the Drop Attachment Here file should be uploaded {string}',  {timeout: genericMethod.defaultTestTimeout }, async (img) => {
    await shipment.uploadDropAttachment(img);
});

  

Given('Verify the Amount {string} displayed in the Charges section', {timeout: genericMethod.defaultTestTimeout }, async (amount) => {
    await shipment.verifyTotalAmount(amount);
});
  Given('Verify the {string} displayed in the Charges section', {timeout: genericMethod.defaultTestTimeout }, async (amount) => {
   await shipment.TotalAmount(amount);
 });



  Given('Click on submit button',  {timeout: genericMethod.defaultTestTimeout }, async () => {
      await shipment.clickOnSubmitButton();
    });


  Given('Click on close button of the popup',  {timeout: genericMethod.defaultTestTimeout }, async () => {
      await shipment.clickOnClosebtn();
    });
    Given('Mouse hover on the Shipment Management option of left navigation bar and click on it',  {timeout: genericMethod.defaultTestTimeout }, async () => {
      await shipment.clickOnShipmentmanagement();
      });

  
      Given('click on waybill number field {string}, {string}, {int},{int}',  {timeout: genericMethod.defaultTestTimeout }, async (file,sheet,row,col) => {
  await shipment.enterWaybillnum(file,sheet,row,col);
  });

  Given('Click on Search button', {timeout: genericMethod.defaultTestTimeout }, async () => {
      await shipment.clickOnSearch();
    });


    Given('verify the status in the {string}',  {timeout: genericMethod.defaultTestTimeout }, async (grid) => {
      await shipment.verifyOrderStatus(grid);
    });

Given('click on the Shipment Management option',  {timeout: genericMethod.defaultTestTimeout }, async () => {
  await shipment.clickOnMousehover();
  await shipment.clickOnShipmentmanagement();
});
Given('fetch waybill number from the summary waybill {string}, {string},{int},{int}', {timeout: genericMethod.defaultTestTimeout }, async (file,sheet,row,col) => {
  await shipment.fetchWaybill_summary(file,sheet,row,col);
  });


Given('click on pay button',  {timeout: genericMethod.defaultTestTimeout }, async () => {
    await shipment.clickOnPay();
    });


  Given('select bank from the dropdown {string}', {timeout: genericMethod.defaultTestTimeout }, async (bank) => {
    //await shipment.clickonBank();
    await shipment.clickonBank(bank);
});

Given('click on proceed with bank button', {timeout: genericMethod.defaultTestTimeout }, async () => {
    await shipment.clickOnProceed();
});
