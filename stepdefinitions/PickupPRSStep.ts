import { Given,Then, When } from "cucumber";
import { PickupPage } from "../pages/PickupPage";
import { GenericMethod } from "../utils/GenericMethod";

const pickup: PickupPage = new PickupPage();
const genericMethod: GenericMethod = new GenericMethod();

When('Mouse hover on the Pickup option of left panel and click on the Pickup option', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await pickup.navigateToPickup();
});
Then('Mouse Hover and Click on Manage PRS tab', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await pickup.manageprs();
});

When('Mouse Hover and click on PickUp request tab', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await pickup.pickuprequest();
});
Then('Provide the  WaybillNumber {string},{string},{int},{int} in the Waybill number field', { timeout: genericMethod.defaultTestTimeout }, async ( fileName , sheetName, rowNum, columnNum) => {
    await pickup.waybillsearch(fileName , sheetName, rowNum, columnNum);
});

Then('Get the PU number {string},{string},{int},{int} from the PU Number field', { timeout: genericMethod.defaultTestTimeout }, async (fileName , sheetName, rowNum, columnNum) => {
    await pickup.FetchPUNumber(fileName , sheetName, rowNum, columnNum);   
    });

Then('Mouse Hover and Click on Create PRS tab', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await pickup.createprs();
});

Then('Provide the BranchCode {string} in the BranchCode field', { timeout: genericMethod.defaultTestTimeout }, async (BranchCodePRS) => {
    await pickup.branchcodeclick(BranchCodePRS);
});

Then('Provide the Customer {string} in the Customer field', { timeout: genericMethod.defaultTestTimeout }, async (customer) => {
    await pickup.Customer(customer);
});

Then('Click on Search Button', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await pickup.Searchbtn();
});

Then('Check the PU {string},{string},{int},{int} in field and click checkbox', { timeout: genericMethod.defaultTestTimeout }, async (fileName , sheetName, rowNum, columnNum) => {
    await pickup.checkbox(fileName , sheetName, rowNum, columnNum);
});

Then('Click on Create and Assign button', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await pickup.createandassign();
});

Then('Click on Select From other Branch', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await pickup.crcheckbox();
}); 

Then('Provide the Courier {string} in the Courier number field', { timeout: genericMethod.defaultTestTimeout }, async (courier) => {
    await pickup.selectcourier(courier);
}); 


Then('Click on Create button', { timeout: genericMethod.defaultTestTimeout }, async () => {
  await pickup.createbutton();
}); 

Then('Select the branch {string} in the branch code list', { timeout: genericMethod.defaultTestTimeout }, async (branch) => {
  await pickup.EnterBranch(branch);
}); 
Then('Click on the OK button', { timeout: genericMethod.defaultTestTimeout }, async () => {
  await pickup.okbutton();
}); 

Then('Click on the Create Button', { timeout: genericMethod.defaultTestTimeout }, async () => {
  await pickup.createbutton();
}); 

// Then('Verify that the Successful message {string},{string},{int},{int} for Create PRS is displayed', { timeout: genericMethod.defaultTestTimeout }, async (fileName, sheetName, rowNum, columnNum) => {
//   await pickup.VerifySuccessmessage(fileName, sheetName, rowNum, columnNum);
// }); 

Then('Fetch the Created PRS Number and save it in {string},{string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, async (fileName, sheetName, rowNum, columnNum) => {
   await pickup.managePRScheck();
   await pickup.waybillsearch(fileName , sheetName, rowNum, columnNum);
   await pickup.FetchPRS(fileName, sheetName, rowNum, columnNum);
  }); 


Then('Mouse Hover and Click on Update PU tab', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await pickup.updatepu();
  }); 

Then('Provide the PU Number {string},{string},{int},{int} in the PRS Number field', { timeout: genericMethod.defaultTestTimeout }, async (fileName, sheetName, rowNum, columnNum) => {
    await pickup.SearchPUNumber(fileName, sheetName, rowNum, columnNum);
});

Then('Click on the PU number to view details', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await pickup.clickpu();
}); 

Then('Click on the action button', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await pickup.actionbtn();
}); 

Then('Click on the Scan button', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await pickup.scanbtn();
}); 

Then('Select the PickuP message from Pickup dropdown', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await pickup.pickupstatus();
}); 

Then('Enter the WaybillNumber {string},{string},{int},{int} in the Waybill number field', { timeout: genericMethod.defaultTestTimeout }, async (fileName, sheetName, rowNum, columnNum) => {
    await pickup.sendwaybill(fileName, sheetName, rowNum, columnNum);
}); 

Then('Provide the Contact Name {string} in the Contact name Field', { timeout: genericMethod.defaultTestTimeout }, async (contactname) => {
    await pickup.sendcontactname(contactname);
}); 

Then('Provide the Contact IC Number {string} in the Contact IC Number Field', { timeout: genericMethod.defaultTestTimeout }, async (icnumber) => {
    await pickup.sendicnumber(icnumber);
}); 

Then('Upload the Pick Up Proof file {string} in the Upload Pickup Proof Field', { timeout: genericMethod.defaultTestTimeout }, async (fileName) => {
    await pickup.sendicnumber(fileName);
}); 

Then('Click on the final submit button', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await pickup.clickpicksubmit();
}); 