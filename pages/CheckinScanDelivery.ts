import { browser, element, by, ElementFinder } from 'protractor';
import { Assertions } from '../utils/Assertions';
import { GenericMethod } from "../utils/GenericMethod";



const assertions: Assertions = new Assertions();
const genericMethod: GenericMethod = new GenericMethod();

export class checkinScanDelivery{ 
    delivery=element(by.xpath('//span[text()="Delivery"]//parent::a'));
    checkinScanDelivery=element(by.xpath('//span[text()="Checkin Scan Delivery"]//parent::a'));
    checkinScanDeliveryText=element(by.xpath('//h3[text()="Checkin Scan Delivery"]'));
    status=element(by.xpath('//label[text()="Status :"]/../..//div[text()=" Ready for Delivery "]'));

    async clickAtDelivery() {
        await genericMethod.refreshPage();
        await genericMethod.clickUsingJs(this.delivery,'');
    }

    async clickAtCSD() {
        await genericMethod.clickUsingJs(this.checkinScanDelivery,'');
    }

    async checkinScanDeliveryTextPage(expectedText:string) {
        await genericMethod.pause(10000);
        const actualText=await genericMethod.getText(this.checkinScanDeliveryText,'checkin scan pickup');
        await assertions.verifyEquals(expectedText,actualText); 
    }

    async verifyStatus(expectedText: string) {
        const actualText=await genericMethod.getText(this.status,'');
        console.log(actualText);
        await assertions.verifyContains(expectedText,actualText);
        await genericMethod.pause(2000);
        await genericMethod.switchToTab(0)

    }
}
