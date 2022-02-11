import { Given, Then, When } from "cucumber";
import { updateDRSPage } from "../pages/updateDRS";
import { GenericMethod } from "../utils/GenericMethod";

const DRS: updateDRSPage = new updateDRSPage();
const genericMethod: GenericMethod = new GenericMethod();

Then('Mouse hover on the left side of the page and click on Delivery Module',  {timeout: genericMethod.defaultTestTimeout }, async () => {
    await DRS.clickOnDelivery();
    });

Then('click on DRS SCAN',  {timeout: genericMethod.defaultTestTimeout }, async () => {
    await DRS.clickOnDrsScan();
    });


Then('select vehicle number from dropdown {string}',  {timeout: genericMethod.defaultTestTimeout }, async (vehicle) => {
      await DRS.enterVehicleNo(vehicle);
    });


Then('click on next button',  {timeout: genericMethod.defaultTestTimeout }, async () => {
      await DRS.clickOnNext();
    
    });

Then('select courier from dropdown {string}',  {timeout: genericMethod.defaultTestTimeout }, async (courier) => {
      await DRS.entercourier(courier);
   });


Then('enter starting KMs in {string} field',  {timeout: genericMethod.defaultTestTimeout }, async (KM) => {
      await DRS.enterStratingKM(KM);
    });
Then('click on next',  {timeout: genericMethod.defaultTestTimeout }, async () => {
      await DRS.clickNext();
      
    });

Then('enter waybill number {string},{string},{int},{int}', {timeout: genericMethod.defaultTestTimeout }, async (file,sheet,row,column) => {
    await DRS.enterWaybill(file,sheet,row,column);
});

Then('click on add icon', {timeout: genericMethod.defaultTestTimeout }, async () => {
    await DRS.clickOnAddicon();    
});


Then('Enter Branch code in {string} field', {timeout: genericMethod.defaultTestTimeout }, async (BranchCode) => {
    await DRS.enterBranchCode(BranchCode);    
});

Then('click on ok button',  {timeout: genericMethod.defaultTestTimeout }, async () => {
      await DRS.clickOnOK();
    
});

Then('click on create button',  {timeout: genericMethod.defaultTestTimeout }, async () => {
      await DRS.cliclOnCreate();
      });
Then('fetch DRS number from the popup  {string},{string},{int},{int}',  {timeout: genericMethod.defaultTestTimeout }, async (file,sheet,row,col) => {
        await DRS.fetchDRsno(file,sheet,row,col);
        });
//////////////////////////////////////Manage drs//////////////////////////
  Given('click on Manage DRS', {timeout: genericMethod.defaultTestTimeout }, async () => {
      await DRS.clickOnManageDRS();
      });


//   Given('click on Assignview tab',  {timeout: genericMethod.defaultTestTimeout }, async () => {
//       await DRS.ClickOnAssignTab();
//       });


//   Given('enter waybill number {string},{string},{int},{int}', {timeout: genericMethod.defaultTestTimeout }, async (Filename,sheet,Row,col) => {
//     await DRS.enterwaybillDRS(Filename,sheet,Row,col)    
// });


//   Given('fetch DRS number from the grid {string},{string},,',  {timeout: genericMethod.defaultTestTimeout }, async (file,sheet,row,column) => {
//    await DRS.fetchDRsno(file,sheet,row,column);
//   });
/////////////////////////update drs///////////////////////////////////////

 

Then('Click on Update DRS', {timeout: genericMethod.defaultTestTimeout }, async () => {
    await DRS.clickOnUpdateDRS();    
});


Then('Enter DRS Number in the DRSNumber field {string},{string},{int},{int}', {timeout: genericMethod.defaultTestTimeout }, async (file,sheet,row,col) => {
      await DRS.enterDRSno(file,sheet,row,col)
      });


Then('Click on New button',  {timeout: genericMethod.defaultTestTimeout }, async () => {
    await DRS.ClickOnNew();    
});


Then('click on action button',  {timeout: genericMethod.defaultTestTimeout }, async () => {
    await DRS.clickOnActionbtn();
  });


Then('Click on the update button',  {timeout: genericMethod.defaultTestTimeout }, async () => {
    await DRS.clickOnUpdatebtn();
});


Then('Enter Branch code in {string}', {timeout: genericMethod.defaultTestTimeout }, async (BranchCode) => {
    await DRS.enterbaranchCode(BranchCode);
});


Then('Select {string} from the dropdown', {timeout: genericMethod.defaultTestTimeout }, async (Status) => {
    await DRS.selectStatus(Status);
});


Then('Enter IC number',  {timeout: genericMethod.defaultTestTimeout }, async () => {
    const icNumber = genericMethod.getRandomNumber(8);
    await DRS.enterICno(icNumber);    
});


Then('Enter Remark in {string}',  {timeout: genericMethod.defaultTestTimeout }, async (remark) => {
   await DRS.enterRemark(remark)
  });


Then('Enter Receiver Person name in {string}',  {timeout: genericMethod.defaultTestTimeout }, async (Name) => {
      await DRS.enterName(Name);
     });


Then('Click on edit icon to upload POD {string}', {timeout: genericMethod.defaultTestTimeout }, async (file) => {
    await DRS.uploadPOD(file)    
});


Then('Click on edit icon to upload Signature {string}',  {timeout: genericMethod.defaultTestTimeout }, async (signature) => {
    await DRS.uploadSignature(signature);    
});


Then('Click on Update Item button',  {timeout: genericMethod.defaultTestTimeout }, async () => {
    await DRS.clickonUpdateitem();    
});
//////////////////////////////manual////////////////////////
Given('enter waybill number {string}',  {timeout: genericMethod.defaultTestTimeout }, async (waybill) => {
  await DRS.enterwaybill(waybill);
});
Then('fetch DRS number', {timeout: genericMethod.defaultTestTimeout }, async () => {
    await DRS.clickOnManageDRS();
    await DRS.ClickOnAssignTab();
   
});


Then('enter waybill number in waybill field  {string},{string},{int},{int}',  {timeout: genericMethod.defaultTestTimeout }, async (file,sheet,row,col) => {
    // await DRS.enterWaybillDrs(waybill);
    await DRS.enterwaybillDRS(file,sheet,row,col);
    //await DRS.fetchDRsno(file,sheet,row,col);
});

Then('fetch DRS number from grid {string},{string},{int},{int}',  {timeout: genericMethod.defaultTestTimeout }, async (file,sheet,row,col) => {
    await DRS.fetchDRsno(file,sheet,row,col);
});