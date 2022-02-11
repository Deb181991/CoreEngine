import { Given, Then, When } from "cucumber";
import { CEOfflineOnlineLodginPage } from "../pages/CE_Offline_Online_Lodgin";
import { GenericMethod } from "../utils/GenericMethod";

const Lodgein: CEOfflineOnlineLodginPage = new CEOfflineOnlineLodginPage();
const genericMethod: GenericMethod = new GenericMethod();

Then('Mouse hover and click on Lodge in', {timeout: genericMethod.defaultTestTimeout }, async () => {
    await Lodgein.LodgeinButton();
    });

Then('Click on Online mode option', {timeout: genericMethod.defaultTestTimeout }, async () => {
        await Lodgein.CE_Onlie();
        });
        
Then('Enter {string} in account number field', {timeout: genericMethod.defaultTestTimeout }, async (AccountNumber) => {
        await Lodgein.EnterAccountNumber(AccountNumber);
        });

        //////////////////////
Then('Enter waybill number in the Waybill Number field {string}, {string},{int},{int}', {timeout: genericMethod.defaultTestTimeout }, async (FileName,sheetname,Rowno,columnno) => {
        await Lodgein.EnterWabill(FileName,sheetname,Rowno,columnno);
        });

Then('Enter onlinewaybill number in the online Waybill Number field {string}, {string},{int},{int}', {timeout: genericMethod.defaultTestTimeout }, async (FileName,sheetname,Rowno,columnno) => {
        await Lodgein.EnterOnlineWabill(FileName,sheetname,Rowno,columnno);
        });
        

Then('Click on Lodge In icon button', {timeout: genericMethod.defaultTestTimeout }, async () => {
    await Lodgein.LodginAction();
    });
    
Then('Enter {string} in the Branch', {timeout: genericMethod.defaultTestTimeout }, async (Branch) => {
    await Lodgein.EnterBranch(Branch);
    });
    
Then('Enter the {string} in number piece field', {timeout: genericMethod.defaultTestTimeout }, async (NOP) => {
        await Lodgein.EnterNOP(NOP);
        });
    

Then('Click on OK', {timeout: genericMethod.defaultTestTimeout }, async () => {
        await Lodgein.ClickOnOk();
        });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
Then('Enters the TrackWaybill number in Waybill No field for Track {string}, {string},{int},{int}', {timeout: genericMethod.defaultTestTimeout }, async (FileName,sheetname,Rowno,columnno) => {
        await Lodgein.WaybillForTrack(FileName,sheetname,Rowno,columnno);
        });
Then('Clicks on CE Track button', {timeout: genericMethod.defaultTestTimeout }, async () => {
        await Lodgein.TrackButton();
        });
///////////////////////////////////////////////////////////////////////////////////////////////
Then('click on CE Operation', {timeout: genericMethod.defaultTestTimeout }, async () => {
        await Lodgein.CEOperationButton();
        });
        
Then('Enters the OnlineTrackWaybill number in Waybill No field for Track {string}, {string},{int},{int}', {timeout: genericMethod.defaultTestTimeout }, async (FileName,sheetname,Rowno,columnno) => {
        await Lodgein.OnlineWaybillForTrack(FileName,sheetname,Rowno,columnno);
         });
        