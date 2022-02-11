import { browser, element, by, ElementFinder } from 'protractor';
import { Assertions } from '../utils/Assertions';
import { GenericMethod } from "../utils/GenericMethod";



const assertions: Assertions = new Assertions();
const genericMethod: GenericMethod = new GenericMethod();

export class checkinScanPickupHub{
    checkinScanPickupHub=element(by.xpath('//span[text()="Checkin Scan Pickup Hub"]//parent::a'));
    checkinScanPickupHubText=element(by.xpath('//h3[text()="Checkin Scan Pickup Hub"]'));
    status=element(by.xpath('//label[text()="Status :"]/../..//div[text()=" Checked In at Pickup Hub "]'));

    async clickAtCSPH(){
        await genericMethod.clickUsingJs(this.checkinScanPickupHub,'');
    }

    async verifyCheckInScanPickupHub(expectedText:string) {
        await genericMethod.pause(10000);
        const actualText=await genericMethod.getText(this.checkinScanPickupHubText,'checkin scan pickup Hub');
        await assertions.verifyEquals(expectedText,actualText); 
    }
    async verifyStatus(expectedText: string) {
        const actualText=await genericMethod.getText(this.status,'');
        console.log(actualText);
        await assertions.verifyContains(expectedText,actualText);
    }
}