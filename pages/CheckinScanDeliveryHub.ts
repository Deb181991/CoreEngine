import { browser, element, by, ElementFinder } from 'protractor';
import { Assertions } from '../utils/Assertions';
import { GenericMethod } from "../utils/GenericMethod";



const assertions: Assertions = new Assertions();
const genericMethod: GenericMethod = new GenericMethod();

export class checkinScanDeliveryHub{ 

    checkinScanDeliveryHub=element(by.xpath('//span[text()="Checkin Scan Delivery Hub"]//parent::a'));
    checkinScanDeliveryHubText=element(by.xpath('//h3[text()="Checkin Scan Delivery Hub"]'));
    status=element(by.xpath('//label[text()="Status :"]/../..//div[text()=" Checked In at Delivery Hub "]'));
    //status=element(by.xpath('//div[contains(text(),"Ready for Delivery ")]'));
    status2 = element(by.xpath('//label[contains(text(),"Status :")]'));

    async clickAtCSDH() {
        await genericMethod.clickUsingJs(this.checkinScanDeliveryHub,'');
    }
    async verifyCheckInScanDeliveryHub(expectedText:string) {
        await genericMethod.pause(10000);
        const actualText=await genericMethod.getText(this.checkinScanDeliveryHubText,'checkin scan Delivery Hub');
        await assertions.verifyEquals(expectedText,actualText); 
    }
    async verifyStatus(expectedText: string) {
        //await genericMethod.scrollIntoView(this.status2,'');
        const actualText=await genericMethod.getText(this.status,'');
        console.log(actualText);
        await assertions.verifyContains(expectedText,actualText);
    }






}
