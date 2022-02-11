import { browser, ElementFinder } from "protractor";
import { Workbook, Row, Cell, Worksheet, CellValue } from 'exceljs';
import { GenericMethod } from "./GenericMethod";

const defaultTimeout = 20000;
const path = require("path");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const genericMethod: GenericMethod = new GenericMethod();

export class Assertions {

    /**
     * Verify Value Equals
     * @param expectedValue
     * @param actualValue
     */
    async verifyEquals(expectedValue, actualValue) {
        console.log(`Verifying ${actualValue} equals ${expectedValue}`);
        await expect(actualValue).to.equal(expectedValue);
        //console.log(actualValue)
    }

    /**
     * Verify Value Not Equals
     * @param expectedValue
     * @param actualValue
     */
    async verifyNotEquals(expectedValue, actualValue) {
        console.log(`Verifying ${actualValue} does not equal ${expectedValue}`);
        await expect(actualValue).to.not.equal(expectedValue);
    }

    /**
     * Verify condition to be true
     * @param expectedValue
     * @param actualValue
     */
    async verifyConditionIsTrue(condition) {
        console.log(`Verifying ${condition} is true`);
        await expect(condition).to.be.true;
    }

    /**
    * Verify condition to be false
    * @param expectedValue
    * @param actualValue
    */
    async verifyConditionIsFalse(condition) {
        console.log(`Verifying ${condition} is false`);
        await expect(condition).to.be.false;
    }

    /**
     * Verify File Exists
     * @param fileName
     */

    async verifyFileExists(fileName: string) {
        console.log('Verifying file exists in folder');
        const file = process.cwd() + fileName;
        var fs = require('fs');

        await browser.sleep(5000);
        var exists = fs.existsSync(file);
        return exists;
    }

    /**
     * Verify element is displayed
     * @param element
     * @param elementName
     * @param toWait
     */

    async verifyElementDisplayed(element: ElementFinder, elementName: string, toWait = true) {
        console.log(`Verifying ${elementName} is displayed in page`);
        await genericMethod.waitForPageToLoad();
        
        try {
            if (toWait) {
                await genericMethod.waitForElementToBeVisible(element, elementName);
            }
            if (await element.isDisplayed()) {
                console.log(`${elementName} is displayed in page`);
                return true;
            }
            else {
                console.log(`${elementName} is not displayed in page`);
                return false;
            }
        } catch (err) {
            console.log(`${elementName} is not displayed in page`);
            return false;
        }
    }

    /**
    * Verify value contains
    * @param expectedValue
    * @param actualValue
    */
    async verifyContains(expectedValue, actualValue) {
        console.log(`Verifying ${actualValue} contains ${expectedValue}`);
        await expect(actualValue).to.include(expectedValue);
    }

    /**
    * Verify value does not contain
    * @param expectedValue
    * @param actualValue
    */
    async verifyDoesNotContains(expectedValue, actualValue) {
        console.log(`Verifying ${actualValue} does not contain ${expectedValue}`);
        await expect(actualValue).to.not.include(expectedValue);
    }

    /**
    * Verify element is present
    * @param element
    * @param elementName
    */

    async verifyElementPresent(element: ElementFinder, elementName: string) {
        console.log(`Verifying ${elementName} is present in page`);
        try {
            if (await element.isPresent()) {
                console.log(`${elementName} is present in page`);
                return true;
            }
            else {
                console.log(`${elementName} is not present in page`);
                return false;
            }
        } catch (err) {
            console.log(`${elementName} is not present in page`);
            return false;
        }
    }

    /**
     * Verify either of the condition is true
     * @param condition1 
     * @param condition2 
     */
    async verifyEitherConditionIsTrue(condition1: boolean, condition2: boolean) {
        console.log(`Verifying ${condition1} or ${condition2} is true`);
        const condition = condition1 || condition2;
        await this.verifyConditionIsTrue(condition);
    }

    /**
     * Verify both conditions are true
     * @param condition1 
     * @param condition2 
     */
    async verifyBothConditionsAreTrue(condition1: boolean, condition2: boolean) {
        console.log(`Verifying ${condition1} and ${condition2} are true`);
        const condition = condition1 && condition2;
        await this.verifyConditionIsTrue(condition);
    }

    /**
    * Verify string contains
    * @param expectedString 
    * @param actualString 
    */
    async verifyStringContains(expectedString: string, actualString: string) {
        console.log(`Verifying ${expectedString} contains ${actualString}`);
        const condition = await expectedString.includes(actualString);
        return condition;
    }

    /**
     * Verify text is not null
     * @param text 
     */
    async verifyTextNotNull(text: string) {
        console.log('Verifying text is not null');
        const condition = await text !== null;
        return condition;
    }



    /*async recordexcel(sheetName: string, rowNum: number, columnNum: number){
        var path = "./Data/data.xlsx";
        var wb: Workbook = new Workbook();
        var cellData;
        //console.log('Reading file data');
        await wb.xlsx.readFile(path).then(async () => {
            let sheet: Worksheet = await wb.getWorksheet(sheetName);
            let rowObject: Row = await sheet.getRow(rowNum);
            let cellObject: Cell = await rowObject.getCell(columnNum);
            cellData = await cellObject.value;
            //console.log(`Retrived cell data is ${cellData}`);
            console.log(cellData);
        });
        //return cellData;
    }*/

   
   /* async PU(element: ElementFinder)//,actualValue)
    {
       
      //var data = "Your pick up request PU/HKLA/2109/000221 has been successfully created . Thank you."
      var data = await genericMethod.recordexcel("dummy",3,2);
      //var sliced = actualValue.slice(22,46);
       //var data = await 
        var sliced = data.slice(21,-43);
        await element.sendKeys(sliced);
        console.log(sliced);
        //console.log(data);    
    }*/

}