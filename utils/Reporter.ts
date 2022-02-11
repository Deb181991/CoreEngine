import * as reporter from "cucumber-html-reporter";
import * as fs from "fs";
import * as mkdirp from "mkdirp";
import * as path from "path";


const jsonReports = path.join(process.cwd(), "/reports/json");
const htmlReports = path.join(process.cwd(), "/reports/html");
const targetJson = jsonReports + "/CucumberReport.json";

const cucumberReporterOptions = {
    jsonFile: targetJson,
    output: htmlReports + "/CucumberReport.html",
    theme: "bootstrap",
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    metadata: {
    }
};

export class Reporter {

    public static createDirectory(dir: string) {
        if (!fs.existsSync(dir)) {
            mkdirp.sync(dir);
        }
    }

    public static createHTMLReport(environment: string, release: string, url: string) {
        try {
            const metadata =   {
                "Test Environment": `"${environment}"`,
                "Release": `"${release}"`,
                "Url": `"${url}"`,
            };
            cucumberReporterOptions.metadata = metadata;
            
            reporter.generate(cucumberReporterOptions);
        } catch (err) {
            if (err) {
                throw new Error("Failed to save cucumber test results to json file.");
            }
        }
    }
}
