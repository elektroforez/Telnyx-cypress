# Cypress E2E Testing Project

## 📌 Summary
This repository contains an end-to-end testing framework using [Cypress](https://www.cypress.io/).  
The test results are recorded in the Cypress Dashboard for better tracking and reporting.  

## ✅ Requirements
Before running the tests, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (recommended: `>=16`)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [faker.js](https://fakerjs.dev/)
- Cypress Dashboard account (if using the reporting feature)

## 📥 Steps to Install
1. Clone the repository:
   ```sh
   git clone https://github.com/elektroforez/Telnyx-cypress.git
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
   
## 🚀 Steps to Launch
### Run tests in headless mode:
```sh
npx cypress run --record --key <your-dashboard-key>
```
Replace `<your-dashboard-key>` with your actual Cypress Dashboard key.

### Run Cypress with UI:
```sh
npx cypress open
```

### Run a specific test:
```sh
npx cypress run --spec "cypress/e2e/testfile.cy.js"
```

## 📊 Steps to Creating the Report
1. **Enable recording in Cypress Dashboard**  
   - Sign in to [Cypress Dashboard](https://dashboard.cypress.io/)
   - Create a new project and get the `recordKey`
   - Add the key to your environment:
     ```sh
     export CYPRESS_RECORD_KEY=<your-dashboard-key>
     ```
   - Or add it to `cypress.config.js`:
     ```javascript
     module.exports = {
       e2e: {
         env: {
           recordKey: "<your-dashboard-key>"
         }
       }
     };
     ```
   
2. **Run tests with recording enabled**:
   ```sh
   npx cypress run --record
   ```

3. **Check results in Cypress Dashboard**  
   - Visit [Cypress Dashboard](https://dashboard.cypress.io/)
   - Find your project and view detailed test reports

---

📖 **For more information, visit:**  
- [Cypress Documentation](https://docs.cypress.io/)  
- [Cypress Dashboard](https://dashboard.cypress.io/)  


