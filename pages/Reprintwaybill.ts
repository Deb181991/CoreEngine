import { browser, by, element, ElementFinder } from "protractor";
import { Assertions } from "../utils/Assertions";
import { GenericMethod } from "../utils/GenericMethod";


const assertions: Assertions = new Assertions();
const genericMethod: GenericMethod = new GenericMethod();

export class Reprintwaybill {

    uName = element(by.xpath('//*[@formcontrolname="email"]'));
    pword = element(by.xpath('//*[@formcontrolname="password"]'));
    signin = element(by.id('kt_login_signin_submit'));

    Reprintwaybill = element(by.xpath('//span[contains(text(),"Re-print Waybill")]'));
    ShipmentListText = element(by.xpath('//h3[contains(@class,"kt-portlet__head-title ng-star-inserted")]'));
    Waybillnum = element(by.xpath('//input[@formcontrolname="waybillNumber"]'));
    Searchbutton = element(by.xpath('//span[contains( @class, "mat-button-wrapper") and text() =" Search "]'));
    Printwaybill = element(by.xpath('//span[contains( @class, "mat-button-wrapper") and text() =" Print Waybill "]'));
    ShipmentService = element(by.xpath('//mat-select[@formcontrolname="shipmentService"]'));
    StandardDelivery = element(by.xpath('//span[contains( @class, "mat-option-text") and text() =" Standard Delivery "]'));
    checkbox = element(by.xpath('(//div[contains(@class, "mat-checkbox-inner-container mat-checkbox-inner-container-no-side-margin" )])[1]'));
    PrintIcon = element(by.xpath('//mat-icon[contains(@class, "mat-icon notranslate material-icons mat-icon-no-color" )]'));
    SenderNamePrintwaybill = element(by.xpath('//*[@class="mat-cell cdk-column-SenderName mat-column-SenderName ng-star-inserted"]//span'));
    RcvrNamePrintwaybill = element(by.xpath('//*[@class="mat-cell cdk-column-RecipientName mat-column-RecipientName ng-star-inserted"]//span'));

    shipmentManagement = element(by.xpath('//span[contains(text(),"Shipment Management")]'));
   // wayBilNumberTextfield = element(by.xpath('//input[@formcontrolname="waybillNumber"]'));
    searchBtn = element(by.xpath('//span[contains(text(),"Search")]'));
    ellipseBtn = element(by.xpath('//mat-icon[contains(text(),"more_vert")]'));
    optionPannel = element(by.xpath('//div[@ng-reflect-klass="mat-menu-panel"]'));
    ViewButton = element(by.xpath('//button[@ng-reflect-message="View Shipment"]'));
    OKpopupbutton = element(by.xpath('//span[contains( @class, "mat-button-wrapper") and text() =" OK "]'));
    RefNo= element(by.xpath('//*[@formcontrolname="referenceNumber"]'));

    async launchUrl() {
        await browser.waitForAngularEnabled(false);
        await genericMethod.navigateTo(browser.baseUrl);
    }

    async enterEmail(userName: string) {
        await genericMethod.sendKeys(this.uName, userName, 'userName');
    }

    async enterPassword(password: string) {
        await genericMethod.sendKeys(this.pword, password, 'password');
    }

    async clickSubmit() {
        await genericMethod.click(this.signin, 'submit');
        await genericMethod.pause(5000);

    }

    async clickReprintwaybill() {
        await genericMethod.mouseHoverAndClick(this.Reprintwaybill, 'Reprintwaybill button');
    }

    async VerifyShipmentListText() {
        await genericMethod.waitForElementToBeVisible(this.ShipmentListText, 'ShipmentList Text Present');
    }

    async EnterWaybillno(fileName: string, sheetName: string, RowNum: number, columnNum: number) {

        await genericMethod.clickUsingJs(this.Waybillnum, 'Waybillnum');
        const filepath = "//Data//" + fileName;
        const waybill = await genericMethod.getExcelData(filepath, sheetName, RowNum, columnNum);
        await genericMethod.sendKeys(this.Waybillnum, waybill, 'Waybillnum');
        await genericMethod.clickUsingJs(this.Searchbutton, 'Searchbutton button');
        await genericMethod.clickUsingJs(this.checkbox, 'checkbox button');
    }

    async clickprintwaybill() {
        await genericMethod.clickUsingJs(this.Printwaybill, 'Printwaybill button');
        await genericMethod.pause(5000);
        await genericMethod.closeTab(1);
        await genericMethod.pause(5000);
        await genericMethod.clearField(this.Waybillnum);
    }

    async SelectShipmentService() {
        await genericMethod.pause(8000);
        await genericMethod.clickUsingJs(this.ShipmentService, 'ShipmentService button');
        await genericMethod.clickUsingJs(this.StandardDelivery, 'StandardDelivery');
    }

    async clickSearch() {
        await genericMethod.clickUsingJs(this.Searchbutton, 'Searchbutton button');
        await genericMethod.clickUsingJs(this.checkbox, 'checkbox button');
    }

    async clickPrintIcon() {
        await genericMethod.click(this.PrintIcon, 'PrintIcon button');
        await genericMethod.pause(5000);
        await genericMethod.closeTab(1);
    }

    async clickShipmentManagement() {
        await genericMethod.pause(5000);
        await genericMethod.mouseHoverAndClick(this.shipmentManagement, 'shipmentManagement button');
    }

    async Enterwaybill() {
        await genericMethod.clickUsingJs(this.Waybillnum, 'wayBilNumberTextfield button');
        await genericMethod.clearField(this.Waybillnum);
       const waybill = await genericMethod.getExcelData("//Data//data.xlsx", "dummy", 3, 5);
       await genericMethod.sendKeys(this.Waybillnum, waybill, 'Waybillnum');

        
    }

    async clickonSearch() {
        await genericMethod.clickUsingJs(this.searchBtn, 'searchBtn button');
        await genericMethod.clickUsingJs(this.RefNo, 'RefNo');
    }

    async clickElipseIcon() {
        await genericMethod.clickUsingJs(this.ellipseBtn, 'ellipseBtn button');
        await genericMethod.pause(3000);
        await genericMethod.clickUsingJs(this.ellipseBtn, 'ellipseBtn button');
        await genericMethod.clickUsingJs(this.ViewButton, 'ViewButton ');
        await genericMethod.click(this.OKpopupbutton, 'OKpopupbutton ');
     }


}