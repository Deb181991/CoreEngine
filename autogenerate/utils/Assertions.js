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
const GenericMethod_1 = require("./GenericMethod");
const defaultTimeout = 20000;
const path = require("path");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const genericMethod = new GenericMethod_1.GenericMethod();
class Assertions {
    /**
     * Verify Value Equals
     * @param expectedValue
     * @param actualValue
     */
    verifyEquals(expectedValue, actualValue) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Verifying ${actualValue} equals ${expectedValue}`);
            yield expect(actualValue).to.equal(expectedValue);
            //console.log(actualValue)
        });
    }
    /**
     * Verify Value Not Equals
     * @param expectedValue
     * @param actualValue
     */
    verifyNotEquals(expectedValue, actualValue) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Verifying ${actualValue} does not equal ${expectedValue}`);
            yield expect(actualValue).to.not.equal(expectedValue);
        });
    }
    /**
     * Verify condition to be true
     * @param expectedValue
     * @param actualValue
     */
    verifyConditionIsTrue(condition) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Verifying ${condition} is true`);
            yield expect(condition).to.be.true;
        });
    }
    /**
    * Verify condition to be false
    * @param expectedValue
    * @param actualValue
    */
    verifyConditionIsFalse(condition) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Verifying ${condition} is false`);
            yield expect(condition).to.be.false;
        });
    }
    /**
     * Verify File Exists
     * @param fileName
     */
    verifyFileExists(fileName) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Verifying file exists in folder');
            const file = process.cwd() + fileName;
            var fs = require('fs');
            yield protractor_1.browser.sleep(5000);
            var exists = fs.existsSync(file);
            return exists;
        });
    }
    /**
     * Verify element is displayed
     * @param element
     * @param elementName
     * @param toWait
     */
    verifyElementDisplayed(element, elementName, toWait = true) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Verifying ${elementName} is displayed in page`);
            yield genericMethod.waitForPageToLoad();
            try {
                if (toWait) {
                    yield genericMethod.waitForElementToBeVisible(element, elementName);
                }
                if (yield element.isDisplayed()) {
                    console.log(`${elementName} is displayed in page`);
                    return true;
                }
                else {
                    console.log(`${elementName} is not displayed in page`);
                    return false;
                }
            }
            catch (err) {
                console.log(`${elementName} is not displayed in page`);
                return false;
            }
        });
    }
    /**
    * Verify value contains
    * @param expectedValue
    * @param actualValue
    */
    verifyContains(expectedValue, actualValue) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Verifying ${actualValue} contains ${expectedValue}`);
            yield expect(actualValue).to.include(expectedValue);
        });
    }
    /**
    * Verify value does not contain
    * @param expectedValue
    * @param actualValue
    */
    verifyDoesNotContains(expectedValue, actualValue) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Verifying ${actualValue} does not contain ${expectedValue}`);
            yield expect(actualValue).to.not.include(expectedValue);
        });
    }
    /**
    * Verify element is present
    * @param element
    * @param elementName
    */
    verifyElementPresent(element, elementName) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Verifying ${elementName} is present in page`);
            try {
                if (yield element.isPresent()) {
                    console.log(`${elementName} is present in page`);
                    return true;
                }
                else {
                    console.log(`${elementName} is not present in page`);
                    return false;
                }
            }
            catch (err) {
                console.log(`${elementName} is not present in page`);
                return false;
            }
        });
    }
    /**
     * Verify either of the condition is true
     * @param condition1
     * @param condition2
     */
    verifyEitherConditionIsTrue(condition1, condition2) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Verifying ${condition1} or ${condition2} is true`);
            const condition = condition1 || condition2;
            yield this.verifyConditionIsTrue(condition);
        });
    }
    /**
     * Verify both conditions are true
     * @param condition1
     * @param condition2
     */
    verifyBothConditionsAreTrue(condition1, condition2) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Verifying ${condition1} and ${condition2} are true`);
            const condition = condition1 && condition2;
            yield this.verifyConditionIsTrue(condition);
        });
    }
    /**
    * Verify string contains
    * @param expectedString
    * @param actualString
    */
    verifyStringContains(expectedString, actualString) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Verifying ${expectedString} contains ${actualString}`);
            const condition = yield expectedString.includes(actualString);
            return condition;
        });
    }
    /**
     * Verify text is not null
     * @param text
     */
    verifyTextNotNull(text) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Verifying text is not null');
            const condition = (yield text) !== null;
            return condition;
        });
    }
}
exports.Assertions = Assertions;
