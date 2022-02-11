import internal = require('assert');
import { browser, element, by, ActionSequence, protractor, $ } from 'protractor';
import { Assertions } from '../utils/Assertions';
import { GenericMethod } from "../utils/GenericMethod";

const genericMethod: GenericMethod = new GenericMethod();
const assertions: Assertions = new Assertions();

export class TransitCageINOUT{
    
    
    Manifest = element(by.xpath('//span[contains(text(),"Manifest")]'));
    TransitcageoutScan = element(by.xpath('//span[contains(text(),"Transit Cage Out Scan")]'));
    TransitcageInScan = element(by.xpath('//span[contains(text(),"Transit Cage In Scan")]'));
    ScanCategory = element(by.xpath('//span[contains(text(),"Select Scan Category")]'));
    TC_manifestNumber = element(by.xpath('//span[contains(text(),"Manifest Number")]'));    
    TC_BagSealNumber = element(by.xpath('//span[contains(text(),"Manifest Number")]'));
    Manifest_Enter = element(by.xpath('//input[@formcontrolname="txtseachno"]'));
    TC_Sacn = element(by.xpath('//span[contains(@class, "mat-button-wrapper" ) and text() = "Scan"]'));


    async TC_Manifest(){
        await genericMethod.mouseHoverAndClick(this.Manifest,'Lodgein');
    }

    async TC_Out(){
        await genericMethod.click(this.TransitcageoutScan,'TransitcageoutScan');
    }
    async SelectCotegory(){
        await genericMethod.click(this.ScanCategory,'ScanCategory');
        await genericMethod.click(this.TC_manifestNumber,'');
    }


    async Enter_ManifestNumber(FileName,sheetname,Rowno,columnno){
        await genericMethod.click(this.Manifest_Enter,'Manifest Number');
        var filepath = "//Data//" + FileName;
        var ManifestNo = await genericMethod.getExcelData(filepath,sheetname,Rowno,columnno);
        await genericMethod.sendKeys(this.Manifest_Enter,ManifestNo,'ManifestNo');
        
    }

    async TC_SacnButton(){
        await genericMethod.click(this.TC_Sacn,'Scan');
    }
    async TC_In(){
        await genericMethod.click(this.TransitcageInScan,'TransitcageInScan');
    }

}