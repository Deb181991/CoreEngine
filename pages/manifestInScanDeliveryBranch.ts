import { browser, element, by, ElementFinder } from 'protractor';
import { Assertions } from '../utils/Assertions';
import { GenericMethod } from "../utils/GenericMethod";

const assertions: Assertions = new Assertions();
const genericMethod: GenericMethod = new GenericMethod();

export class ManifestInDeliveryBranch {

  
    manifestInScanDeliveryBranch= element(by.xpath('//span[text()="Manifest In Scan Delivery Branch"]'));
    status = element.all(by.xpath('//div[contains(text(),"Manifest In Scan completed at Delivery Branch")]'));


    async clickManifestInScanDeliveryBranch() {
        await genericMethod.click(this.manifestInScanDeliveryBranch, 'manifestInScanDeliveryBranch', false);
    }


    async verifyStatus(expectedText: string) {

        await genericMethod.scrollIntoView(this.status.first(), 'status');
        const actualText = await genericMethod.getText(this.status.first(), '');
        console.log(actualText);
        await assertions.verifyContains(expectedText, actualText);
    }










}
