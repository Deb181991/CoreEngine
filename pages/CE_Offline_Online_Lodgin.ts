import internal = require('assert');
import { browser, element, by, ActionSequence, protractor, $ } from 'protractor';
import { Assertions } from '../utils/Assertions';
import { GenericMethod } from "../utils/GenericMethod";

const genericMethod: GenericMethod = new GenericMethod();
const assertions: Assertions = new Assertions();

export class CEOfflineOnlineLodginPage{
    
    Lodgein = element(by.xpath('//span[contains(text(),"Lodge In")]'));
    Online = element(by.xpath('//div[contains(@class, "mat-radio-label-content" ) and text() = "Online"]'));
    Offline = element(by.xpath('//div[contains(@class, "mat-radio-label-content" ) and text() = "Offline"]'));
    AccountNumber = element(by.xpath('//input[@formcontrolname="accountCode"]'));
    Waybill = element(by.xpath('//input[@formcontrolname="WaybillNo"]'));
    NOP = element(by.xpath('//input[@formcontrolname="NoOfPieces"]'));
    Lodgein_Action = element(by.xpath('//mat-icon[contains(text(),"add_circle_outline")]'));
    Branch = element(by.xpath('//input[@formcontrolname="pickupZone"]'));
      TypeBranch = element(by.xpath('//span[contains(@class,"mat-option-text")]'));
      ok = element(by.xpath('//span[contains(text(),"OK")]'));
     WaybillTrack = element(by.xpath('//input[@placeholder="Way Bill No"]'));
     Track_Waybill = element(by.xpath('//span[contains(@class, "mat-button-wrapper" ) and text() = "Track"]'));
     WebsiteTracking = element(by.xpath('//span[contains(text(),"CS Website Tracking")]'));
     Operation = element(by.xpath('(//span[contains(text(),"Operation")])[2]'));

    async LodgeinButton(){
        await genericMethod.mouseHoverAndClick(this.Lodgein,'Lodgein');
    }
    async EnterAccountNumber(AccountNumber:string){
        await genericMethod.click(this.AccountNumber,'AccountNumber');
        await genericMethod.sendKeys(this.AccountNumber,AccountNumber,'AccountNumber');
        await genericMethod.click(this.TypeBranch,'');
    }

    
    async CE_Onlie(){
        await genericMethod.click(this.Online,'Online');
    }

    async EnterWabill(FileName,sheetname,Rowno,columnno){
        await genericMethod.click(this.Waybill,'Waybill');
        var filepath = "//Data//" + FileName;
        var Bill = await genericMethod.Increment(filepath,sheetname,Rowno,columnno);
        await genericMethod.sendKeys(this.Waybill,Bill,'Waybill');
        await genericMethod.WriteData(Bill,filepath,sheetname,Rowno,columnno);
        
    }
/////////////////////////////////////Online//////////////////////////////////////////
    async EnterOnlineWabill(FileName,sheetname,Rowno,columnno){
        await genericMethod.click(this.Waybill,'Waybill');
        var filepath = "//Data//" + FileName;
        var Bill = await genericMethod.getExcelData(filepath,sheetname,Rowno,columnno);
        await genericMethod.sendKeys(this.Waybill,Bill,'Waybill');
        await genericMethod.WriteData(Bill,filepath,sheetname,Rowno,columnno);
        
    }
    async LodginAction(){
        await genericMethod.click(this.Lodgein_Action,'Lodgein_Action');
    }
 
    async EnterNOP(NOP:string){
        await genericMethod.click(this.NOP,'')
        await genericMethod.sendKeys(this.NOP,NOP,'')
    }
    async EnterBranch(Branch:string){
        await genericMethod.click(this.Branch,'Branch');
        await genericMethod.sendKeys(this.Branch,Branch,'')
        await genericMethod.click(this.TypeBranch,'')
    }
    async ClickOnOk(){
        await genericMethod.click(this.ok,'ok');
    }
    async WaybillForTrack(fileName, sheetname,Rowno,columnno){
        
        await genericMethod.click(this.WaybillTrack,'');
        //await genericMethod.clearField(this.WaybillTrack);
        var filepath = "//Data//" + fileName;
         var bill = await genericMethod.getExcelData(filepath,sheetname,Rowno,columnno);        
         await genericMethod.sendKeys(this.WaybillTrack,bill,'');
         await genericMethod.pause(8000);
        //  await genericMethod.click(this.WaybillTrack,'');
        // await genericMethod.clearField(this.WaybillTrack);
    }

    async OnlineWaybillForTrack(FileName, sheetname,Rowno,columnno){
        await genericMethod.refreshPage();   
        await genericMethod.click(this.WaybillTrack,'');
        //await genericMethod.clearField(this.WaybillTrack);
        var filepath = "//Data//" + FileName;
         var bill = await genericMethod.getExcelData(filepath,sheetname,Rowno,columnno);        
         await genericMethod.sendKeys(this.WaybillTrack,bill,'');
         await genericMethod.pause(8000);
    }

 async TrackButton(){
    await genericMethod.click(this.Track_Waybill,'Track_Waybill');
 }
 
 async CEOperationButton(){
    await genericMethod.click(this.WebsiteTracking,'WebsiteTracking');
    await genericMethod.click(this.Operation,'Operation');
 }
}