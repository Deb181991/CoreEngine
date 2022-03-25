import { LoginPage } from "../pages/Login";
import { Given, Then, When } from "cucumber";
import { GenericMethod } from "../utils/GenericMethod";

const login: LoginPage = new LoginPage();
const genericMethod: GenericMethod = new GenericMethod();

Given('Navigate into the OMS website', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await login.launchUrl();
});

Then('The user should be able to navigate into the login page', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await login.verifyNavigation();
});

Given('Provide the Email {string} in the Email field', { timeout: genericMethod.defaultTestTimeout }, async (email) => {
    await login.enterEmail(email);
});
Given('verify {string}', { timeout: genericMethod.defaultTestTimeout }, async (pickup) => {
    await login.pickupCheck(pickup);
});


Given('Provide the Password {string} in the Password field', { timeout: genericMethod.defaultTestTimeout }, async (email) => {
    await login.enterPassword(email);
});

When('Click on the Sign In button', {timeout: 100 * 1000}, async ()=>{
  await login.clickSubmit();
});
When('Click on the CE Sign In button', {timeout: 100 * 1000}, async ()=>{
    await login.CEclickSubmit();
  });

Then('The user should be navigated to {string} page', { timeout: 150 * 1000 }, async (page) => {
    await login.verifyLoggedInPageUrl(page);
});

Then('Click on the Sign Out button', { timeout: 150 * 1000 }, async () => {
    await login.logout();

});
Then('Click on the Profile button', { timeout: 150 * 1000 }, async () => {
    await login.Profilebutton();

});
Then('Login into Core Engine', { timeout: 150 * 1000 }, async () => {
    await login.CELOGIN();
});
Then('Check the waybill {string},{string},{int},{int}',{ timeout: genericMethod.defaultTestTimeout } ,async ( fileName , sheetName, rowNum, columnNum ) => {
    await login.Exceldata(fileName , sheetName, rowNum, columnNum);
});
Then('write outcome data {string},{string},{int},{int}',{ timeout: genericMethod.defaultTestTimeout } ,async ( fileName , sheetName, rowNum, columnNum ) => {
    await login.WriteData(fileName , sheetName, rowNum, columnNum);
});

Then('{string} should be displayed', { timeout: 150 * 1000 }, async (un) => {
    await login.verifySignIn(un);
});
