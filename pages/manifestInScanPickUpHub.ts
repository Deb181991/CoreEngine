import { browser, element, by, ElementFinder } from 'protractor';
import { Assertions } from '../utils/Assertions';
import { GenericMethod } from "../utils/GenericMethod";

const assertions: Assertions = new Assertions();
const genericMethod: GenericMethod = new GenericMethod();

export class ManifestInPickupHub {

    manifest = element.all(by.xpath('//span[text()="Manifest"]')).first();
    manifestInScanPickup = element(by.xpath('//span[text()="Manifest In Scan Pickup Hub"]'));
    selectCategory = element(by.xpath('//span[text()="Select Scan Category"]'));
    bagsealDropdown = element(by.xpath('//span[text()="Bag Seal Number"]'));
    manifestInput = element(by.xpath('//input[@formcontrolname= "txtseachno"]'));
    scan = element(by.xpath('//span[text()="Scan"]'));
    status = element.all(by.xpath('//div[contains(text(),"Manifest In Scan completed at Pickup Hub")]'));


    async clickManifestInScanPickup() {
        await genericMethod.refreshPage();
        await genericMethod.click(this.manifestInScanPickup, 'manifestInScanPickup', false);
    }

    async selectCategoryDropdown() {
        await genericMethod.click(this.selectCategory, 'selectCategory', false);
        await genericMethod.click(this.bagsealDropdown, 'manifestDropdown', false);

    }

    // async enterManifestNo(fileName: string, sheetName: string) {

    //     var filepath = "//Data//" + fileName;
    //     var manifest = await genericMethod.getExcelData(filepath, sheetName, 2, 13);
    //     console.log(manifest);
    //     await genericMethod.sendKeys(this.manifestInput, manifest, 'manifest');

    // }

    async scanManifest() {
        await genericMethod.click(this.scan, 'scan');
        await genericMethod.pause(5000);
        await genericMethod.switchToTab(1);


    }

    async enterBagseal(fileName: string, sheetName: string,row: number, column: number) {
        var filepath = "//Data//" + fileName;
        var bagseal = await genericMethod.getExcelData(filepath, sheetName,row,column);
        console.log(bagseal);
        await genericMethod.sendKeys(this.manifestInput, bagseal, 'bagseal');

    }


    async verifyStatus(expectedText: string) {

        await genericMethod.scrollIntoView(this.status.first(), 'status');
        const actualText = await genericMethod.getText(this.status.first(), '');
        console.log(actualText);
        await assertions.verifyContains(expectedText, actualText);
    }










}
