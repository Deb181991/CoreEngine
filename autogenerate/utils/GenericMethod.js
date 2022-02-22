"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
//import { Assertions } from "./Assertions";
const defaultTimeout = 30000;
const path = require("path");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
var EC = protractor_1.browser.ExpectedConditions;
const exceljs_1 = require("exceljs");
//const assertions: Assertions = new Assertions();
var cellData;
class GenericMethod {
    constructor() {
        ///////////////////////////////////////////Login Xpath///////////////////////
        this.email = protractor_1.element(protractor_1.by.xpath('//*[@formcontrolname="email"]'));
        this.password = protractor_1.element(protractor_1.by.xpath('//*[@formcontrolname="password"]'));
        this.submit = protractor_1.element(protractor_1.by.id('kt_login_signin_submit'));
        this.defaultTestTimeout = 200 * 1000;
        this.extraTestTimeout = 600 * 1000;
    }
    /**
    * Generate random string
    * @param characterLength
    * @returns Random string
    */
    getRandomString(characterLength) {
        return __awaiter(this, void 0, void 0, function* () {
            var randomText = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (var i = 0; i < characterLength; i++)
                randomText += possible.charAt(Math.floor(Math.random() * possible.length));
            return randomText;
        });
    }
    ;
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
    }
    ;
    /**
     * Generate random number
     * @returns Random number
     */
    getRandomCharNum() {
        return __awaiter(this, void 0, void 0, function* () {
            var strValues = "123456789";
            var strEmail = "";
            for (var i = 0; i < strValues.length; i++) {
                strEmail = strEmail + strValues.charAt(Math.round(strValues.length * Math.random()));
            }
            var finalEmail = "WB" + strEmail;
            return finalEmail;
        });
    }
    ;
    /**
     * Create New Directory
     * @param dir
     */
    createDirectory(dirName) {
        return __awaiter(this, void 0, void 0, function* () {
            const dir = process.cwd() + `//${dirName}`;
            var fs = require('fs');
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
            }
            yield protractor_1.browser.sleep(5000);
        });
    }
    /**
     * Navigate to url
     * @param url
     */
    navigateTo(url) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Navigating to ${url}`);
            //await this.DeleteCookies();
            yield protractor_1.browser.get(url);
            yield this.waitForPageToLoad();
            yield this.DeleteCookies();
        });
    }
    /**
     * Wait for element to be visible
     * @param element
     * @param elementName
     */
    waitForElementToBeVisible(element, elementName) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Waiting for ${elementName} to be visible`);
            yield protractor_1.browser.wait(EC.visibilityOf(element), defaultTimeout, `Element ${element} not visible`);
        });
    }
    /**
     * Wait for element to be present
     * @param element
     * @param elementName
     */
    waitForElementToBePresent(element, elementName) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Waiting for ${elementName} to be present`);
            yield protractor_1.browser.wait(EC.presenceOf(element), defaultTimeout, `Element ${element} not present`);
        });
    }
    /**
    * Wait for element to be clickable
    * @param element
    * @param elementName
    */
    waitForElementToBeClickable(element, elementName) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Waiting for ${elementName} to be clickable`);
            yield protractor_1.browser.wait(EC.elementToBeClickable(element), defaultTimeout, `Element ${element} not clickable`);
        });
    }
    /**
     * Wait for element to be invisible
     * @param element
     * @param elementName
     */
    waitForElementToBeInvisible(element, elementName) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Waiting for ${elementName} to be invisible`);
            yield protractor_1.browser.wait(EC.invisibilityOf(element), defaultTimeout, `Element ${element} not invisible`);
        });
    }
    /**
     * Wait for page to load
     */
    waitForPageToLoad() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Waiting for page to load');
            var isComplete = () => __awaiter(this, void 0, void 0, function* () {
                return yield protractor_1.browser.executeScript("return document.readyState").then((status) => __awaiter(this, void 0, void 0, function* () {
                    console.log('Page status is: ' + status);
                    return (yield status.toString()) === "complete";
                }));
            });
            yield protractor_1.browser.wait(EC.and(isComplete), defaultTimeout, 'Webpage did not load');
        });
    }
    /**
     * Wait for element count less than
     * @param element
     * @param elementName
     * @param count
     */
    waitForResultCountLessThan(elements, elementName, count) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Waiting for ${elementName} count to be less than ${count}`);
            var countIsLessThan = () => __awaiter(this, void 0, void 0, function* () {
                return yield elements.count().then((size) => __awaiter(this, void 0, void 0, function* () {
                    return size < count;
                }));
            });
            yield protractor_1.browser.wait(EC.and(countIsLessThan), defaultTimeout, `${elementName} count not less than ${count}`);
        });
    }
    /**
     * Wait for element to have value
     * @param element
     * @param elementName
     */
    waitForElementToHaveValue(element, elementName) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Waiting for ${elementName} to have value`);
            var valueIsPresent = () => __awaiter(this, void 0, void 0, function* () {
                return yield (yield element.getWebElement()).getAttribute('value')
                    .then((value) => __awaiter(this, void 0, void 0, function* () {
                    if (value) {
                        return true;
                    }
                    else {
                        return false;
                    }
                    ;
                }));
            });
            yield protractor_1.browser.wait(EC.and(valueIsPresent), defaultTimeout, `${elementName} has no value`);
        });
    }
    /**
     * Wait for element to have text
     * @param element
     * @param elementName
     */
    waitForElementToHaveText(element, elementName) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Waiting for ${elementName} to have text`);
            var elementHasText = () => __awaiter(this, void 0, void 0, function* () {
                return yield (yield element.getWebElement()).getText()
                    .then((text) => __awaiter(this, void 0, void 0, function* () {
                    if (text) {
                        return true;
                    }
                    else {
                        return false;
                    }
                    ;
                }));
            });
            yield protractor_1.browser.wait(EC.and(elementHasText), defaultTimeout, `${elementName} has no text`);
        });
    }
    /**
     * Click using Javascript
     * @param element
     * @param elementName
     * @param toScroll
     * @param toWait
     */
    clickUsingJs(element, elementName, toScroll = true, toWait = false) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForPageToLoad();
            yield this.waitForElementToBeVisible(element, elementName);
            if (toScroll) {
                yield this.scrollIntoView(element, elementName);
            }
            if (toWait) {
                yield this.waitForElementToBeClickable(element, elementName);
            }
            console.log('Clicking at ' + elementName);
            yield this.waitForPageToLoad();
            yield protractor_1.browser.executeScript('arguments[0].click();', element);
        });
    }
    /**
     * Wait for element and click
     * @param element
     * @param elementName
     * @param toScroll
     * @param toWait
     */
    click(element, elementName, toScroll = true, toWait = true) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForPageToLoad();
            yield this.waitForElementToBeVisible(element, elementName);
            if (toScroll) {
                yield this.scrollIntoView(element, elementName);
            }
            if (toWait) {
                yield this.waitForElementToBeClickable(element, elementName);
            }
            console.log('Clicking at ' + elementName);
            yield this.waitForPageToLoad();
            yield element.click();
        });
    }
    /**
     * Wait for element and click if displayed
     * @param element
     * @param elementName
     * @param toScroll
     * @param toWait
     */
    clickIfDisplayed(element, elementName, toScroll = true, toWait = true) {
        return __awaiter(this, void 0, void 0, function* () {
            var isDisplayed = false;
            yield this.waitForPageToLoad();
            try {
                isDisplayed = yield element.isDisplayed();
            }
            catch (err) {
                isDisplayed = false;
            }
            if (isDisplayed) {
                yield this.click(element, elementName, toScroll, toWait);
            }
        });
    }
    /**
     * Wait for element and click if present
     * @param element
     * @param elementName
     * @param toScroll
     * @param toWait
     */
    clickIfPresent(element, elementName, toScroll = true, toWait = true) {
        return __awaiter(this, void 0, void 0, function* () {
            var isPresent = false;
            yield this.waitForPageToLoad();
            try {
                isPresent = yield element.isPresent();
            }
            catch (err) {
                isPresent = false;
            }
            if (isPresent) {
                yield this.click(element, elementName, toScroll, toWait);
            }
        });
    }
    /**
     * Wait for element mousehover and click if present
     * @param element
     * @param elementName
    */
    mouseHoverAndClickIfPresent(element, elementName) {
        return __awaiter(this, void 0, void 0, function* () {
            var isPresent = false;
            yield this.waitForPageToLoad();
            try {
                isPresent = yield element.isPresent();
            }
            catch (err) {
                isPresent = false;
            }
            if (isPresent) {
                yield this.mouseHoverAndClick(element, elementName);
            }
        });
    }
    /**
     * Click and wait for element to disappear
     * @param element
     * @param elementName
     * @param toScroll
     * @param toWait
     */
    clickAndWaitForElementToDisappear(element, elementName, toScroll = true, toWait = true) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(element, elementName, toScroll, toWait);
            yield this.waitForElementToBeInvisible(element, elementName);
        });
    }
    /**
     * Wait for element and send keys to text field
     * @param element
     * @param text
     * @param elementName
     * @param pressTab
     */
    sendKeys(element, text, elementName, pressTab = false) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForPageToLoad();
            yield this.waitForElementToBeVisible(element, elementName);
            console.log('Clearing Text');
            yield element.clear();
            yield protractor_1.browser.sleep(1000);
            console.log('Sending value ' + text);
            yield element.sendKeys(text);
            if (pressTab) {
                yield element.sendKeys(protractor_1.Key.TAB);
            }
        });
    }
    /**
     * Wait for element and send keys to text field
     * @param element
     * @param elementName
     * @param pressTab
     */
    clickAndSendKeys(element, text, elementName, pressTab = false) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForPageToLoad();
            yield this.waitForElementToBeVisible(element, elementName);
            console.log('Clicking at Text Field');
            yield element.click();
            yield protractor_1.browser.sleep(1000);
            yield this.sendKeys(element, text, elementName, pressTab);
        });
    }
    /**
     * Clear Field
     * @param element
     */
    clearField(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForPageToLoad();
            console.log('Hitting Backspace Key');
            yield element.sendKeys(protractor_1.Key.chord(protractor_1.Key.CONTROL, "a", protractor_1.Key.DELETE));
        });
    }
    /**
     * Close Current window
     * @param windowCount
     */
    closeTab(windowCount) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.sleep(5000);
            console.log('Closing current tab');
            var count = yield (yield protractor_1.browser.getAllWindowHandles()).length;
            console.log('count is ' + count);
            if (count > 1) {
                yield protractor_1.browser.getAllWindowHandles().then((handles) => __awaiter(this, void 0, void 0, function* () {
                    yield protractor_1.browser.switchTo().window(handles[windowCount]).then(() => __awaiter(this, void 0, void 0, function* () {
                        yield protractor_1.browser.close();
                        yield protractor_1.browser.switchTo().window(handles[0]);
                    }));
                }));
            }
            yield protractor_1.browser.switchTo().defaultContent();
        });
    }
    /**
     * Get current window title
     * @returns page title
     */
    getTitle() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForPageToLoad();
            console.log('Getting browser title');
            var title = yield protractor_1.browser.getTitle();
            console.log('Page Title is: ' + title);
            return title;
        });
    }
    /**
    * Return Text Message
    * @param element
    * @param elementName
    * @returns text
    */
    getText(element, elementName, toWait = true) {
        return __awaiter(this, void 0, void 0, function* () {
            //await this.waitForPageToLoad();
            yield this.waitForElementToBeVisible(element, elementName);
            if (toWait) {
                yield this.waitForElementToHaveText(element, elementName);
            }
            console.log('Retrieving text');
            var text = yield element.getText();
            console.log('Text Retrieved is: ' + text);
            return text;
        });
    }
    /**
    * Return value
    * @param element
    * @param elementName
    * @returns text
    */
    getValue(element, elementName, toWait = true) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForPageToLoad();
            yield this.waitForElementToBeVisible(element, elementName);
            if (toWait) {
                yield this.waitForElementToHaveValue(element, elementName);
            }
            console.log('Retrieving value');
            var text = yield (yield element.getWebElement()).getAttribute('value');
            console.log('Value Retrieved is: ' + text);
            return text;
        });
    }
    /**
         * Get Excel Cell Data
         * @param filePath
         * @param sheetName
         * @param rowNum
         * @param columnNum
         */
    getExcelData(filePath, sheetName, rowNum, columnNum) {
        return __awaiter(this, void 0, void 0, function* () {
            var wb = new exceljs_1.Workbook();
            //var fullPath = process.cwd() + filePath;
            var fullPath = process.cwd() + filePath;
            var cellData;
            console.log('Reading file data');
            yield wb.xlsx.readFile(fullPath).then(() => __awaiter(this, void 0, void 0, function* () {
                let sheet = yield wb.getWorksheet(sheetName);
                let rowObject = yield sheet.getRow(rowNum);
                let cellObject = yield rowObject.getCell(columnNum);
                cellData = yield cellObject.value;
                console.log(`Retrived cell data is ${cellData}`);
            }));
            return cellData;
        });
    }
    /**
      * @param actualValue
      * @param sheetName
      * @param rowNum
      * @param columnNum
      * @returns
      */
    WriteData(actualValue, filePath, sheetName, rowNum, columnNum) {
        return __awaiter(this, void 0, void 0, function* () {
            var wb = new exceljs_1.Workbook();
            var fullPath = process.cwd() + filePath;
            //var filePath = "./Data/data.xlsx";
            var cellData;
            console.log('Write file data');
            yield wb.xlsx.readFile(fullPath).then(() => __awaiter(this, void 0, void 0, function* () {
                var sheet = yield wb.getWorksheet(sheetName);
                var rowObject = yield sheet.getRow(rowNum);
                let cellObject = yield rowObject.getCell(columnNum);
                cellObject.value = yield actualValue;
                cellData = yield cellObject.value;
                console.log(cellData);
            }));
            return wb.xlsx.writeFile(fullPath);
        });
    }
    /**
     *
     * @param filePath
     * @param sheetName
     * @param rowNum
     * @param columnNum
     * @returns
     */
    Increment(filePath, sheetName, rowNum, columnNum) {
        return __awaiter(this, void 0, void 0, function* () {
            var wb = new exceljs_1.Workbook();
            var fullPath = process.cwd() + filePath;
            var cellData;
            yield wb.xlsx.readFile(fullPath).then(() => __awaiter(this, void 0, void 0, function* () {
                let sheet = yield wb.getWorksheet(sheetName);
                let rowObject = yield sheet.getRow(rowNum);
                let cellObject = yield rowObject.getCell(columnNum);
                cellData = yield cellObject.value;
                console.log(cellData);
                cellData++;
                //cellData--; 
                console.log("Value of num2 after decrement " + cellData);
            }));
            return cellData;
        });
    }
    /**
     * Get current window url
     * @returns url
     */
    getPageUrl() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForPageToLoad();
            console.log('Retrieving current url');
            var url = yield protractor_1.browser.getCurrentUrl();
            console.log('Page url is: ' + url);
            return url;
        });
    }
    /**
     * Switch to Window
     * @param windowCount
     */
    switchToTab(windowCount) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Switching to tab');
            console.log(yield protractor_1.browser.getAllWindowHandles());
            yield protractor_1.browser.getAllWindowHandles().then((handles) => __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.switchTo().window(handles[windowCount]);
                console.log('Browser Title is: ' + (yield protractor_1.browser.getTitle()));
            }));
        });
    }
    /**
     * Switch to default content
     */
    switchToDefaultContent() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.switchTo().defaultContent();
        });
    }
    /**
     * Switch to active element
     */
    switchToActiveElement() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.switchTo().activeElement();
        });
    }
    /**
    * Wait for element and send keys to file upload field
    * @param element
    * @param filepath
    */
    upload(element, filePath) {
        return __awaiter(this, void 0, void 0, function* () {
            var fullPath = process.cwd() + filePath;
            yield this.waitForPageToLoad();
            console.log('Upload File path is: ' + fullPath);
            yield element.sendKeys(fullPath);
        });
    }
    /**
     * Scroll to element
     * @param element
     * @param elementName
     */
    scrollIntoView(element, elementName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForPageToLoad();
            yield this.waitForElementToBeVisible(element, elementName);
            console.log(`Scrolling to element`);
            yield protractor_1.browser.executeScript('arguments[0].scrollIntoView(true)', element.getWebElement());
            yield protractor_1.browser.sleep(3000);
        });
    }
    /**
     * Mouse Hover at element
     * @param element
     * @param elementName
     */
    mouseHover(element, elementName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForPageToLoad();
            yield this.waitForElementToBePresent(element, elementName);
            console.log(`Mouse Hover ${elementName}`);
            yield protractor_1.browser.actions().mouseMove(element).perform();
            yield protractor_1.browser.sleep(3000);
        });
    }
    /**
     * MouseHover and click
     * @param elementName
     * @param element
     */
    mouseHoverAndClick(element, elementName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForPageToLoad();
            yield protractor_1.browser.sleep(3000);
            yield this.waitForElementToBePresent(element, elementName);
            yield this.mouseHover(element, elementName);
            yield this.waitForPageToLoad();
            console.log('Clicking at ' + elementName);
            yield protractor_1.browser.sleep(3000);
            yield protractor_1.browser.executeScript('arguments[0].click();', element);
            yield protractor_1.browser.sleep(3000);
        });
    }
    /**
     * Refresh Page
     */
    refreshPage() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Refreshing the page');
            yield protractor_1.browser.refresh();
        });
    }
    /**
     * Pause for specified seconds
     */
    pause(timeout) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.sleep(timeout);
        });
    }
    /**
  * Replace all space in string
  * @param toReplace
  */
    replaceAllSpace(toReplace) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Replacing space');
            var replacedString = yield toReplace.replace(/[\r\n\s]+/g, "");
            console.log(`String after replacing space ${replacedString}`);
            return replacedString;
        });
    }
    /**
     * Screenshot
     */
    Takescreenshot() {
        return __awaiter(this, void 0, void 0, function* () {
            //var filePath = "./Screenshot" + dm;
            // var fullPath = process.cwd() + filePath;
            var date = new Date();
            var fs = require('fs');
            // var dm = date.getMonth() + 1 + '-' + date.getDate() + '-' + date.getFullYear(); 
            // //var d = "./Screenshot2" + dm;
            // var timestamp =  date.getMonth() + 1 + '-' + date.getDate() + '-' + date.getFullYear() + ' ' +
            // date.getHours() + '-' + date.getMinutes() + '-' + date.getSeconds() ;//+ date.getMilliseconds() + 'ms';
            // console.log(timestamp); 
            //var path = "./Screenshot/ image" +' '+ timestamp +".jpg";
            var path = "./Screenshot/ image" + ".jpg";
            //var Screenshot = await browser.takeScreenshot()
            var path = "E:/Testing/My-Script/CoreEngine/Screenshot/ image" + ".jpg";
            yield protractor_1.browser.takeScreenshot().then(function (deba) {
                var stream = fs.createWriteStream(path);
                stream.write(new Buffer(deba, 'base64'));
                stream.end();
            });
        });
    }
    //TrimFunction      
    trim(element) {
        return __awaiter(this, void 0, void 0, function* () {
            var actualValue;
            var sliced = actualValue.slice(3, -2); //Left, Right 
            var s1 = actualValue.slice(3); //left
            var s2 = actualValue.slice(0, -2); //Right
            var s3 = actualValue.slice(-2); //Right
            console.log(sliced);
            console.log(s1);
            console.log(s2);
            console.log(s3);
            yield element.sendKeys(s3);
        });
    }
    Split() {
        return __awaiter(this, void 0, void 0, function* () {
            var actualValue = "Your PRS PRS/DSML/2111/000322 has been successfully created and assigned to ZURIYATI BINTI ZULKAFLI";
            var a = actualValue.split(' ');
            console.log(a);
        });
    }
    type(element) {
        return __awaiter(this, void 0, void 0, function* () {
            var c = "deeeeeeeee";
            yield element.sendKeys(c);
            console.log(c);
        });
    }
    currentdate() {
        return __awaiter(this, void 0, void 0, function* () {
            const date = new Date();
            console.log("Date = " + date);
        });
    }
    CE_URL() {
        return __awaiter(this, void 0, void 0, function* () {
            //var url = "https://uatcore.lineclearexpressonline.com/core/#/auth/login";
            var url = "https://uat.lineclearexpressonline.com/core/#/dashboard";
            yield this.navigateTo(url);
        });
    }
    navigation(url) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Navigating to ${url}`);
            yield protractor_1.browser.get(url);
            yield this.waitForPageToLoad();
        });
    }
    duplicateTAB(windowCount) {
        return __awaiter(this, void 0, void 0, function* () {
            var a = yield this.getPageUrl();
            console.log(a);
            yield protractor_1.browser.executeScript(`window.open()`);
            let windows = yield protractor_1.browser.getAllWindowHandles();
            protractor_1.browser.switchTo().window(windows[windowCount]);
            var b = yield this.navigation(a);
        });
    }
    DeleteCookies() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.driver.manage().deleteAllCookies();
            //browser.actions().keyDown(protractor.Key.CONTROL).sendKeys(protractor.Key.F5).perform();
            yield protractor_1.browser.executeScript('window.sessionStorage.clear();');
            yield protractor_1.browser.executeScript('window.localStorage.clear();');
            yield protractor_1.browser.refresh();
        });
    }
    arithmaticlogic() {
        return __awaiter(this, void 0, void 0, function* () {
            var num1 = 10;
            var num2 = 2;
            var res = 0;
            var TestA = 0;
            var v;
            //TestA = v
            TestA = TestA + 10;
            console.log("Sum:        " + TestA);
            //var v = TestA
            var w = console.log("Value:  " + v);
            res = num1 - num2;
            console.log("Difference: " + res);
            res = num1 * num2;
            console.log("Product:    " + res);
            res = num1 / num2;
            console.log("Quotient:   " + res);
            res = num1 % num2;
            console.log("Remainder:   " + res);
            //cellData++;
            //console.log("Value of num1 after increment "+v)
            //cellData-- 
            //console.log("Value of num2 after decrement "+cellData)
            //await element.sendKeys(v);
            //return cellData;
        });
    }
    b() {
        return __awaiter(this, void 0, void 0, function* () {
            var i = 10;
            i++;
            var b = i;
            var data = b;
            console.log(i);
            console.log(b);
            function log(data) {
                console.log(data);
                return data;
            }
        });
    }
}
exports.GenericMethod = GenericMethod;
