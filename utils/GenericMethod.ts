import { browser, ElementFinder, Key, ElementArrayFinder, element,protractor,by } from "protractor";
import { Alert } from 'selenium-webdriver';
//import { Assertions } from "./Assertions";

const defaultTimeout = 30000;
const path = require("path");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
var EC = browser.ExpectedConditions;

import { Workbook, Row, Cell, Worksheet, CellValue } from 'exceljs';
import { isBuffer } from "util";
import { log, time } from "console";
import { createConnectFile } from "selenium-webdriver/safari";
import { createConnection } from "net";
import { connect } from "http2";
import { symlinkSync } from "fs";

//const assertions: Assertions = new Assertions();
var cellData;



export class GenericMethod {

///////////////////////////////////////////Login Xpath///////////////////////
    email = element(by.xpath('//*[@formcontrolname="email"]'));
    password = element(by.xpath('//*[@formcontrolname="password"]'));
    submit = element(by.id('kt_login_signin_submit'));

    defaultTestTimeout = 200 * 1000;
    extraTestTimeout = 600 * 1000;
    
    /**
    * Generate random string
    * @param characterLength
    * @returns Random string
    */
    async getRandomString(characterLength) {
        var randomText = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < characterLength; i++)
            randomText += possible.charAt(Math.floor(Math.random() * possible.length));
        return randomText;
    };

    /**
    * Generate random number
    * @param numberLength
    * @returns Random number
    */
    getRandomNumber(numberLength) {
        var randomNumber = "";
        var possible = "0123456789";
        for (var i = 0; i < numberLength; i++)
            randomNumber += possible.charAt(Math.floor(Math.random() * possible.length));
        return randomNumber;
        console.log(randomNumber);
    };

    /**
     * Generate random number
     * @returns Random number
     */
    async getRandomCharNum() {
        var strValues = "123456789";
        var strEmail = "";
        for (var i = 0; i < strValues.length; i++) {
            strEmail = strEmail + strValues.charAt(Math.round(strValues.length * Math.random()));
        }
        var finalEmail = "WB" + strEmail;
        return finalEmail;
    };

    /**
     * Create New Directory
     * @param dir 
     */
    async createDirectory(dirName: string) {
        const dir = process.cwd() + `//${dirName}`
        var fs = require('fs');

        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        await browser.sleep(5000)
    }

    /**
     * Navigate to url
     * @param url 
     */
    async navigateTo(url: string) {
        console.log(`Navigating to ${url}`);
        //await this.DeleteCookies();
        await browser.get(url);
        await this.waitForPageToLoad();
        await this.DeleteCookies();
    }

    /**
     * Wait for element to be visible
     * @param element
     * @param elementName 
     */
    async waitForElementToBeVisible(element: ElementFinder, elementName: string) {
        console.log(`Waiting for ${elementName} to be visible`);
        await browser.wait(EC.visibilityOf(element),
            defaultTimeout, `Element ${element} not visible`);
    }

    /**
     * Wait for element to be present
     * @param element
     * @param elementName 
     */
    async waitForElementToBePresent(element: ElementFinder, elementName: string) {
        console.log(`Waiting for ${elementName} to be present`);
        await browser.wait(EC.presenceOf(element),
            defaultTimeout, `Element ${element} not present`);
    }

    /**
    * Wait for element to be clickable
    * @param element
    * @param elementName 
    */
    async waitForElementToBeClickable(element: ElementFinder, elementName: string) {
        console.log(`Waiting for ${elementName} to be clickable`);
        await browser.wait(EC.elementToBeClickable(element),
            defaultTimeout, `Element ${element} not clickable`);
    }

    /**
     * Wait for element to be invisible
     * @param element 
     * @param elementName 
     */
    async waitForElementToBeInvisible(element: ElementFinder, elementName: string) {
        console.log(`Waiting for ${elementName} to be invisible`);
        await browser.wait(EC.invisibilityOf(element),
            defaultTimeout, `Element ${element} not invisible`);
    }

    /**
     * Wait for page to load
     */
    async waitForPageToLoad() {
        console.log('Waiting for page to load');
        var isComplete =async () => {
            return await browser.executeScript("return document.readyState").then(async (status) => {
               console.log('Page status is: '+status);
               return await status.toString() === "complete";
            });
        };

        await browser.wait(EC.and(isComplete),
                defaultTimeout,
                'Webpage did not load'
        );
    }

    /**
     * Wait for element count less than
     * @param element 
     * @param elementName 
     * @param count
     */
    async waitForResultCountLessThan(elements: ElementArrayFinder, elementName: string, count: number) {
        console.log(`Waiting for ${elementName} count to be less than ${count}`);
        var countIsLessThan = async () => {
            return await elements.count().then(async (size) => {
                return size < count;
            });
          };


        await browser.wait(EC.and(countIsLessThan),
                defaultTimeout,
                `${elementName} count not less than ${count}`
        );
    }

    /**
     * Wait for element to have value
     * @param element 
     * @param elementName
     */
    async waitForElementToHaveValue(element: ElementFinder, elementName: string) {
        console.log(`Waiting for ${elementName} to have value`);
        var valueIsPresent = async () => {
            return await (await element.getWebElement()).getAttribute('value')
                .then(async (value) => {
                    if (value) {
                        return true;
                    }
                    else {
                        return false;
                    };
                });
            };
        
        await browser.wait(EC.and(valueIsPresent),
                defaultTimeout,
                `${elementName} has no value`
        );
    }

    /**
     * Wait for element to have text
     * @param element 
     * @param elementName
     */
    async waitForElementToHaveText(element: ElementFinder, elementName: string) {
        console.log(`Waiting for ${elementName} to have text`);
        var elementHasText = async () => {
            return await (await element.getWebElement()).getText()
                .then(async (text) => {
                    if (text) {
                        return true;
                    }
                    else {
                        return false;
                    };
                });
            };
        
        await browser.wait(EC.and(elementHasText),
                defaultTimeout,
                `${elementName} has no text`
        );
    }

    /**
     * Click using Javascript
     * @param element 
     * @param elementName 
     * @param toScroll 
     * @param toWait 
     */
    async clickUsingJs(element: ElementFinder, elementName: string, toScroll = true, toWait = false) {
        await this.waitForPageToLoad();
        await this.waitForElementToBeVisible(element, elementName);

        if (toScroll) {
            await this.scrollIntoView(element, elementName);
        }

        if (toWait) {
            await this.waitForElementToBeClickable(element, elementName);
        }

        console.log('Clicking at ' + elementName);
        await this.waitForPageToLoad();
        await browser.executeScript('arguments[0].click();', element);
    }

    /**
     * Wait for element and click
     * @param element 
     * @param elementName 
     * @param toScroll 
     * @param toWait 
     */
    async click(element: ElementFinder, elementName: string, toScroll = true, toWait = true) {
        await this.waitForPageToLoad();
        await this.waitForElementToBeVisible(element, elementName);

        if (toScroll) {
            await this.scrollIntoView(element, elementName);
        }

        if (toWait) {
            await this.waitForElementToBeClickable(element, elementName);
        }

        console.log('Clicking at ' + elementName);
        await this.waitForPageToLoad();
        await element.click();
    }


    /**
     * Wait for element and click if displayed
     * @param element 
     * @param elementName 
     * @param toScroll 
     * @param toWait 
     */
    async clickIfDisplayed(element: ElementFinder, elementName: string, toScroll = true, toWait = true) {
        var isDisplayed = false;
        await this.waitForPageToLoad();

        try {
            isDisplayed = await element.isDisplayed();
        } catch (err) {
            isDisplayed = false;
        }
        if (isDisplayed) {
            await this.click(element, elementName, toScroll, toWait);
        }
    }

    /**
     * Wait for element and click if present
     * @param element 
     * @param elementName 
     * @param toScroll 
     * @param toWait 
     */
    async clickIfPresent(element: ElementFinder, elementName: string, toScroll = true, toWait = true) {
        var isPresent = false;
        await this.waitForPageToLoad();

        try {
            isPresent = await element.isPresent();
        } catch (err) {
            isPresent = false;
        }
        if (isPresent) {
            await this.click(element, elementName, toScroll, toWait);
        }
    }

    /**
     * Wait for element mousehover and click if present
     * @param element
     * @param elementName
    */
    async mouseHoverAndClickIfPresent(element: ElementFinder, elementName: string) {
        var isPresent = false;
        await this.waitForPageToLoad();

        try {
            isPresent = await element.isPresent();
        } catch (err) {
            isPresent = false;
        }
        if (isPresent) {
            await this.mouseHoverAndClick(element, elementName);
        }
    }

    /**
     * Click and wait for element to disappear
     * @param element 
     * @param elementName 
     * @param toScroll 
     * @param toWait 
     */
    async clickAndWaitForElementToDisappear(element: ElementFinder, elementName: string,
        toScroll = true, toWait = true) {
        await this.click(element, elementName, toScroll, toWait);
        await this.waitForElementToBeInvisible(element, elementName);
    }

    /**
     * Wait for element and send keys to text field
     * @param element
     * @param text
     * @param elementName
     * @param pressTab
     */
    async sendKeys(element: ElementFinder, text: string, elementName: string, pressTab = false) {
        await this.waitForPageToLoad();
        await this.waitForElementToBeVisible(element, elementName);

        console.log('Clearing Text');
        await element.clear();
        await browser.sleep(1000);

        console.log('Sending value ' + text);
        await element.sendKeys(text);

        if (pressTab) {
            await element.sendKeys(Key.TAB);
        }
    }

    /**
     * Wait for element and send keys to text field
     * @param element
     * @param elementName
     * @param pressTab
     */
    async clickAndSendKeys(element: ElementFinder, text: string, elementName: string, pressTab = false) {
        await this.waitForPageToLoad();
        await this.waitForElementToBeVisible(element, elementName);

        console.log('Clicking at Text Field');
        await element.click();
        await browser.sleep(1000);

        await this.sendKeys(element, text, elementName, pressTab);
    }

    /**
     * Clear Field
     * @param element 
     */
    async clearField(element: ElementFinder) {
        await this.waitForPageToLoad();

        console.log('Hitting Backspace Key');
        await element.sendKeys(Key.chord(Key.CONTROL, "a", Key.DELETE));
    }

    /**
     * Close Current window
     * @param windowCount 
     */

    async closeTab(windowCount) {
        await browser.sleep(5000);
        console.log('Closing current tab');
        var count = await (await browser.getAllWindowHandles()).length;

        console.log('count is ' + count);
        if (count > 1) {
            await browser.getAllWindowHandles().then(async (handles) => {
                await browser.switchTo().window(handles[windowCount]).then(async () => {
                    await browser.close();
                    await browser.switchTo().window(handles[0]);
                });
            });
        }

        await browser.switchTo().defaultContent();
    }

    /**
     * Get current window title
     * @returns page title
     */
    async getTitle() {
        await this.waitForPageToLoad();
        console.log('Getting browser title');
        var title = await browser.getTitle();

        console.log('Page Title is: ' + title);
        return title;
    }

    /**
    * Return Text Message
    * @param element
    * @param elementName
    * @returns text
    */
    async getText(element: ElementFinder, elementName: string, toWait = true) {
        //await this.waitForPageToLoad();
        await this.waitForElementToBeVisible(element, elementName);
        if(toWait){
        await this.waitForElementToHaveText(element, elementName);
        }

        console.log('Retrieving text');
        var text = await element.getText();
        console.log('Text Retrieved is: ' + text);
        return text;
    }

    
     
    /**
    * Return value
    * @param element
    * @param elementName
    * @returns text
    */
    async getValue(element: ElementFinder, elementName: string, toWait = true) {
        await this.waitForPageToLoad();
        await this.waitForElementToBeVisible(element, elementName);
        if(toWait){
        await this.waitForElementToHaveValue(element, elementName);
        }

        console.log('Retrieving value');
        var text = await (await element.getWebElement()).getAttribute('value');
        console.log('Value Retrieved is: ' + text);
        return text;
    }

/**
     * Get Excel Cell Data
     * @param filePath 
     * @param sheetName 
     * @param rowNum 
     * @param columnNum 
     */
    async getExcelData(filePath: string, sheetName: string, rowNum: number, columnNum: number) {
            var wb: Workbook = new Workbook();
            var fullPath = process.cwd() + filePath;
            var cellData;
            console.log('Reading file data');
            await wb.xlsx.readFile(fullPath).then(async () => {
                let sheet: Worksheet = await wb.getWorksheet(sheetName);
                let rowObject: Row = await sheet.getRow(rowNum);
                let cellObject: Cell = await rowObject.getCell(columnNum);
                cellData = await cellObject.value;
                console.log(`Retrived cell data is ${cellData}`);
            });
            return cellData;
        }
/**
  * @param actualValue 
  * @param sheetName 
  * @param rowNum 
  * @param columnNum 
  * @returns 
  */
 async WriteData(actualValue: string, filePath: string,sheetName: string, rowNum: number,columnNum: number){
    var wb: Workbook = new Workbook();
    var fullPath = process.cwd() + filePath;
    //var filePath = "./Data/data.xlsx";
    var cellData;
    console.log('Write file data');
        await wb.xlsx.readFile(fullPath).then(async () => {   
        var sheet: Worksheet = await wb.getWorksheet(sheetName);
        var rowObject: Row = await sheet.getRow(rowNum);
        let cellObject: Cell = await rowObject.getCell(columnNum);
        cellObject.value = await actualValue;
        cellData = await cellObject.value;            
        console.log(cellData);            
   });
     return wb.xlsx.writeFile(fullPath);
}
/**
 * 
 * @param filePath 
 * @param sheetName 
 * @param rowNum 
 * @param columnNum 
 * @returns 
 */
  
async Increment(filePath: string, sheetName: string, rowNum: number, columnNum: number){

    var wb: Workbook = new Workbook();
    var fullPath = process.cwd() + filePath;
    var cellData;
    await wb.xlsx.readFile(fullPath).then(async () => {
    let sheet: Worksheet = await wb.getWorksheet(sheetName);
    let rowObject: Row = await sheet.getRow(rowNum);
    let cellObject: Cell = await rowObject.getCell(columnNum);
    cellData = await cellObject.value;
    console.log(cellData);
    
    cellData++; 
    //cellData--; 
    console.log("Value of num2 after decrement "+cellData)
    
      });
    return cellData;
    }   

    async Increment2(){
    
            var fs = require('fs');
            var csvModule = require('papaparse')
            var filePath = "./Data/CSVData.csv";
            var cellData;
            var d = fs.readFileSync(filePath, 'utf8')
            //var d = fs.readFile(filePath)
                csvModule.parse(d,{
                   complete:(csvValues)=>{
                     console.log("*************************")
                     cellData =  csvValues.data[1][2]
                     cellData++;
                     console.log("Value of num2 after decrement "+cellData)
                }   
             })
             return cellData
        }   
      
     async WriteIncrement2(actualValue: string){
            var fs = require('fs');
            var csvModule = require('papaparse')
            var filePath = "./Data/CSVData.csv";
            var cellData;
            var str = "saregama"
            fs.writeFileSync("./Data/CSVData12.csv",str)
        }   
    
        ////////////////////////////////////////////////////////
        async ReadExcel(){
            var fs = require('fs');
            var wb: Workbook = new Workbook();
            var filePath = "./Data/CSVData12.csv";
            //var d = fs.readFile(filePath)
            //var fullPath = process.cwd() + filePath;
            var cellData;
    fs.readFileSync(filePath).then(function(){
        console.log(wb.getWorksheet("dummy").getRow(3).getCell(4).value)
    })
    
            // await wb.csv.readFile(filePath).then(async (actualValue) => {
    //     var W = wb.getWorksheet("dummy").getRow(3).getCell(4).value;
    // // let sheet: Worksheet = await wb.getWorksheet("dummy");
    // // let rowObject: Row = await sheet.getRow(3);
    // // let cellObject: Cell = await rowObject.getCell(4);
    // // cellData = await cellObject.value;
    // console.log("@@@@@@@@@@@@@"+W);
    
    //cellData++; 
    //cellData--; 
    //console.log("Value of num2 after decrement "+cellData)
    
    //  });
   // return cellData;
  
            }
        
        async WriteExcel(actualValue){
                    
                    var path = "./Data/CSVData12.csv";  
                    var wb = new Workbook();
                    var W = wb.addWorksheet("dummy").getRow(6).getCell(7);
                    W.value = await actualValue;
                    await wb.csv.writeFile( path );               
                }
        ///////////////////////////////////////////////////////
    


    /**
     * Get current window url
     * @returns url
     */
    async getPageUrl() {
        await this.waitForPageToLoad();

        console.log('Retrieving current url');
        var url = await browser.getCurrentUrl();
        console.log('Page url is: ' + url);
        return url;
    }

    /**
     * Switch to Window
     * @param windowCount 
     */
    async switchToTab(windowCount) {
        console.log('Switching to tab')
        console.log(await browser.getAllWindowHandles());

        await browser.getAllWindowHandles().then(async (handles) => {
            await browser.switchTo().window(handles[windowCount]);
            console.log('Browser Title is: ' + await browser.getTitle());
        });
    }

    /**
     * Switch to default content
     */
    async switchToDefaultContent() {
        browser.switchTo().defaultContent();
    }

    /**
     * Switch to active element
     */
    async switchToActiveElement() {
        browser.switchTo().activeElement();
    }

    /**
    * Wait for element and send keys to file upload field
    * @param element 
    * @param filepath
    */
    async upload(element: ElementFinder, filePath: string) {
        var fullPath = process.cwd() + filePath;
        await this.waitForPageToLoad();

        console.log('Upload File path is: ' + fullPath);
        await element.sendKeys(fullPath);
    }

    /**
     * Scroll to element
     * @param element 
     * @param elementName 
     */
    async scrollIntoView(element: ElementFinder, elementName: string) {
        await this.waitForPageToLoad();
        await this.waitForElementToBeVisible(element, elementName);

        console.log(`Scrolling to element`);
        await browser.executeScript('arguments[0].scrollIntoView(true)', element.getWebElement());
        await browser.sleep(3000);
    }

    /**
     * Mouse Hover at element
     * @param element 
     * @param elementName 
     */
    async mouseHover(element: ElementFinder, elementName: string) {
        await this.waitForPageToLoad();
        await this.waitForElementToBePresent(element, elementName);

        console.log(`Mouse Hover ${elementName}`);
        await browser.actions().mouseMove(element).perform();
        await browser.sleep(3000);
    }

    /**
     * MouseHover and click
     * @param elementName
     * @param element
     */
    async mouseHoverAndClick(element: ElementFinder, elementName: string) {
        await this.waitForPageToLoad();
        await browser.sleep(3000);
        await this.waitForElementToBePresent(element, elementName);

        await this.mouseHover(element, elementName);

        await this.waitForPageToLoad();
        console.log('Clicking at ' + elementName);
        await browser.sleep(3000);
        await browser.executeScript('arguments[0].click();', element);
        await browser.sleep(3000);
    }

    /**
     * Refresh Page
     */
    async refreshPage() {
        console.log('Refreshing the page');
        await browser.refresh();
    }

    /**
     * Pause for specified seconds
     */
    async pause(timeout: number) {
        await browser.sleep(timeout);
    }

  /**
* Replace all space in string
* @param toReplace
*/
async replaceAllSpace(toReplace:string){
    console.log('Replacing space');
    var replacedString = await toReplace.replace(/[\r\n\s]+/g, "");
    console.log(`String after replacing space ${replacedString}`);
    return replacedString;
    }
/**
 * Screenshot
 */
    async Takescreenshot(){
        //var filePath = "./Screenshot" + dm;
       // var fullPath = process.cwd() + filePath;
        var date = new Date();
        var fs= require('fs'); 
        // var dm = date.getMonth() + 1 + '-' + date.getDate() + '-' + date.getFullYear(); 
        
        // //var d = "./Screenshot2" + dm;
        // var timestamp =  date.getMonth() + 1 + '-' + date.getDate() + '-' + date.getFullYear() + ' ' +
        // date.getHours() + '-' + date.getMinutes() + '-' + date.getSeconds() ;//+ date.getMilliseconds() + 'ms';
        // console.log(timestamp); 
        //var path = "./Screenshot/ image" +' '+ timestamp +".jpg";
        var path = "./Screenshot/ image" +".jpg";
        //var Screenshot = await browser.takeScreenshot()
        var path = "E:/Testing/My-Script/CoreEngine/Screenshot/ image" +".jpg";
        
        await browser.takeScreenshot().then(function(deba){
        var stream = fs.createWriteStream(path);
        stream.write(new Buffer(deba, 'base64'));
        stream.end();

            })
        }
 
  //TrimFunction      
        async trim(element: ElementFinder){
            var actualValue;   
            var sliced = actualValue.slice(3,-2); //Left, Right 
               var s1 = actualValue.slice(3); //left
               var s2 = actualValue.slice(0,-2); //Right
               var s3 = actualValue.slice(-2);     //Right
               console.log(sliced); 
               console.log(s1);
               console.log(s2); 
               console.log(s3);   
               await element.sendKeys(s3);
          }       
        async Split(){
            var actualValue = "Your PRS PRS/DSML/2111/000322 has been successfully created and assigned to ZURIYATI BINTI ZULKAFLI"
            var a = actualValue.split(' ');  
            console.log(a);  
       

       }       
       async type(element: ElementFinder){
        var c = "deeeeeeeee"
        await element.sendKeys(c);
        console.log(c);

       }

    async currentdate(){
            const date:Date = new Date();
            console.log("Date = " + date);
        }

    async CE_URL(){
            //var url = "https://uatcore.lineclearexpressonline.com/core/#/auth/login";
            var url = "https://uat.lineclearexpressonline.com/core/#/dashboard";
            await this.navigateTo(url);

        }
 
        async navigation(url: string) {
            console.log(`Navigating to ${url}`);
            await browser.get(url);
            await this.waitForPageToLoad();
            
        }

    async duplicateTAB(windowCount){
              var a = await this.getPageUrl();
              console.log(a);
              await browser.executeScript(`window.open()`);
              let windows = await browser.getAllWindowHandles();
              browser.switchTo().window(windows[windowCount]);
              var b = await this.navigation(a); 
        }
         
    async DeleteCookies(){

               await browser.driver.manage().deleteAllCookies();
                //browser.actions().keyDown(protractor.Key.CONTROL).sendKeys(protractor.Key.F5).perform();
               await browser.executeScript('window.sessionStorage.clear();');
               await browser.executeScript('window.localStorage.clear();');
               await browser.refresh();
            
        }
        async arithmaticlogic(){

            var num1 = 10 
            var num2 = 2
            var res = 0
            var TestA = 0
            var v 
            //TestA = v
            TestA = TestA + 10 
            console.log("Sum:        "+TestA); 
  
             //var v = TestA
           var w = console.log("Value:  "+v) 


            res = num1 - num2; 
            console.log("Difference: "+res) 

            res = num1*num2 
            console.log("Product:    "+res) 

            res = num1/num2 
            console.log("Quotient:   "+res)
            
            res = num1%num2 
            console.log("Remainder:   "+res) 
            
            
            //cellData++;
            //console.log("Value of num1 after increment "+v)

            //cellData-- 
            //console.log("Value of num2 after decrement "+cellData)
            //await element.sendKeys(v);
            

        
        //return cellData;
    }   

async b(){
    var i=10;
    i++;
  var b = i;
  var data =b;
  console.log(i)
  console.log(b)
  
    }    

    async csv(){
        const papa = require('papaparse');
	const fs = require('fs');
	const file = fs.readFileSync('D:Pathabc.csv', 'utf8');

	papa.parse(file, {
		complete: (result) =>{
			console.log("@@@@@ Complete CSV file : "+result.data)
			console.log("###### row: "+result.data[0])
			console.log("****** value in a row: "+result.data[0][2])
		}
	});

    }
 }

 