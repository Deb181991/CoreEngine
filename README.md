# Installation
- Download NodeJS from https://nodejs.org/en/download/
- Use npm to install Protractor globally with:
npm install -g protractor

# Project Setup
- In Visual Studio Code click at Terminal ->New Terminal
- In Terminal type npm install, hit Enter
- Type npm run webdriver-update, hit Enter

# Project Structure
- The scripts are to be written in Typescript
- The feature files are placed under //features/*.feature
- The stepdefinitions are placed under //stepdefinitions/*.ts
- The framework uses chai for assertions

  ## Helper Files
  - Under utils folder there are helper files for Generic Methods that are to be used to write scripts
  - Under utils folder there are helper files for Assertions to assert expected conditions for tests
  - If a file is to be uploaded to the site, it has to be stored under the uploads folder
  - A file from the browser is going to be downloaded under downloads folder

# Configuration
- All project configurations are present in config.ts file
baseUrl -> Provide the url of the application

# Script Execution
- Type npm run webdriver-start, hit Enter
- Click at the + sign in terminal right corner and open another terminal
- Type npm run clean-run, hit Enter

# Reports Creation
- The reports would be present under //reports folder (Currently the reports supported are of type .html and .json)
