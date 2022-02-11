"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const fs = require("fs");
cucumber_1.Before((scenario) => {
    //browser.executeScript('window.localStorage.clear();');
    console.log('*********************************************************************************');
    console.log(`Starting scenario ${scenario.sourceLocation.uri}:${scenario.sourceLocation.line} (${scenario.pickle.name})`);
});
cucumber_1.After(function (scenario, done) {
    var path = require('path');
    try {
        const world = this;
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            protractor_1.browser.takeScreenshot().then(function (stream) {
                let decodedImage = Buffer.from(stream.replace(/^data:image\/(png|gif|jpeg|jpg);base64,/, ''), 'base64');
                var p = world.attach(decodedImage, "image/png");
                // protractor.browser.takeScreenshot().then(function(screenshot) {
                const screenshots = path.join(process.cwd(), './Screenshot');
                fs.writeFile(screenshots + '/test.png', stream, 'base64', function (err) {
                    if (err) {
                        throw err;
                    }
                    console.log('File saved.' + Date());
                });
            });
        }
        else {
            done();
        }
    }
    // browser.driver.manage().deleteAllCookies();
    // //browser.actions().keyDown(protractor.Key.CONTROL).sendKeys(protractor.Key.F5).perform();
    // browser.executeScript('window.sessionStorage.clear();');
    // browser.executeScript('window.localStorage.clear();');
    // //browser.refresh();
    // browser.restart()
    catch (err) {
        console.log('Error occurred in after block' + err);
    }
});
