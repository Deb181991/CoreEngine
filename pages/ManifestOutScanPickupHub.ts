import { browser, element, by, ElementFinder } from 'protractor';
import { Assertions } from '../utils/Assertions';
import { GenericMethod } from "../utils/GenericMethod";

const assertions: Assertions = new Assertions();
const genericMethod: GenericMethod = new GenericMethod();

export class ManifestOutPickupHub {

    manifestOutScanPickUpHub = element(by.xpath('//span[text()="Manifest Out Scan Pickup hub"]'));
    status = element(by.xpath('//div[text()=" Manifest Out Scan completed at Pickup hub "]'));

    async clickManifestOutScanPickupHub() {
        await genericMethod.click(this.manifestOutScanPickUpHub, 'manifestOutScanPickUpHub', false);
    }

    async verifyStatus(expectedText: string) {
        const actualText = await genericMethod.getText(this.status, '');
        console.log(actualText);
        await assertions.verifyContains(expectedText, actualText);
    }
}

