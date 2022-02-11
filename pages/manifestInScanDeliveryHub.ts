import { browser, element, by, ElementFinder } from 'protractor';
import { Assertions } from '../utils/Assertions';
import { GenericMethod } from "../utils/GenericMethod";

const assertions: Assertions = new Assertions();
const genericMethod: GenericMethod = new GenericMethod();

export class ManifestInDeliveryHub {

  
    manifestInScanDelivery = element(by.xpath('//span[text()="Manifest In Scan Delivery Hub"]'));
    status = element.all(by.xpath('//div[contains(text(),"Manifest In Scan completed at Delivery Hub")]'));


    async clickManifestInScanDeliveryHub() {
        await genericMethod.click(this.manifestInScanDelivery, 'manifestInScanDelivery', false);
    }


    async verifyStatus(expectedText: string) {

        await genericMethod.scrollIntoView(this.status.first(), 'status');
        const actualText = await genericMethod.getText(this.status.first(), '');
        console.log(actualText);
        await assertions.verifyContains(expectedText, actualText);
    }










}
