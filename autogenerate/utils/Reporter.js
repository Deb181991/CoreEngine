"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reporter = require("cucumber-html-reporter");
const fs = require("fs");
const mkdirp = require("mkdirp");
const path = require("path");
const jsonReports = path.join(process.cwd(), "/reports/json");
const htmlReports = path.join(process.cwd(), "/reports/html");
const targetJson = jsonReports + "/CucumberReport.json";
const cucumberReporterOptions = {
    jsonFile: targetJson,
    output: htmlReports + "/CucumberReport.html",
    theme: "bootstrap",
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    metadata: {}
};
class Reporter {
    static createDirectory(dir) {
        if (!fs.existsSync(dir)) {
            mkdirp.sync(dir);
        }
    }
    static createHTMLReport(environment, release, url) {
        try {
            const metadata = {
                "Test Environment": `"${environment}"`,
                "Release": `"${release}"`,
                "Url": `"${url}"`,
            };
            cucumberReporterOptions.metadata = metadata;
            reporter.generate(cucumberReporterOptions);
        }
        catch (err) {
            if (err) {
                throw new Error("Failed to save cucumber test results to json file.");
            }
        }
    }
}
exports.Reporter = Reporter;
