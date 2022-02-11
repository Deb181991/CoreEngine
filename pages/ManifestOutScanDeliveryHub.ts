import { browser, element, by, ElementFinder } from 'protractor';
import { Assertions } from '../utils/Assertions';
import { GenericMethod } from "../utils/GenericMethod";

const assertions: Assertions = new Assertions();
const genericMethod: GenericMethod = new GenericMethod();

export class ManifestOutDeliverypHub {

    manifestOutScanDeliveryHub = element(by.xpath('//span[text()="Manifest Out Scan Delivery Hub"]'));
    NextBranchCode = element(by.xpath('//input[@formcontrolname= "brnchCode"]'));
    HubBrachclick = element(by.xpath('//span[contains(@class,"mat-option-text")]'));
    branchCodeOkButton = element(by.xpath('//span[contains(text(),"OK")]'));
    submit = element(by.xpath('//button[@type="Submit"]'));
    status = element(by.xpath('//div[text()=" Manifest Out Scan completed at Delivery hub "]'));

    async clickmanifestOutScanDeliveryHub() {
        await genericMethod.click(this.manifestOutScanDeliveryHub, 'manifestOutScanDeliveryHub', false);
    }

    async verifyStatus(expectedText: string) {
        const actualText = await genericMethod.getText(this.status, '');
        console.log(actualText);
        await assertions.verifyContains(expectedText, actualText);
    }

    async clickNextbranchcode(Nextbranchcode: string) {
        await genericMethod.clickAndSendKeys(this.NextBranchCode,Nextbranchcode, 'NextBranchCode');
        await genericMethod.click(this.HubBrachclick,'');
        //await genericMethod.click(this.branchCodeOkButton, 'branchCodeOkButton');
        //await genericMethod.click(this.submit, 'submit');
        //await genericMethod.pause(7000);
        
    }

}

