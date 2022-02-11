import { Then, When } from "cucumber";
import { TransitCageINOUT } from "../pages/TransitCage_INOUT";///////////////
import { GenericMethod } from "../utils/GenericMethod";

const TCINOUT: TransitCageINOUT = new TransitCageINOUT();
const genericMethod: GenericMethod = new GenericMethod();

Then('Mouse hover and click on Manifest', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await TCINOUT.TC_Manifest();
});

Then('click on Transit Cage Out Scan', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await TCINOUT.TC_Out();
});

Then('Select scan category from dropdown box', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await TCINOUT.SelectCotegory();
});

Then('Enter ManifestNumber in Manifest field {string}, {string},{int},{int}', { timeout: genericMethod.defaultTestTimeout }, async (FileName,sheetname,Rowno,columnno) => {
    await TCINOUT.Enter_ManifestNumber(FileName,sheetname,Rowno,columnno);
});

Then('Click on scan button', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await TCINOUT.TC_SacnButton();
});

Then('click on Transit Cage In Scan', { timeout: genericMethod.defaultTestTimeout }, async () => {
    await TCINOUT.TC_In();
});

