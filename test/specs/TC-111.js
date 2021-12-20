const { assert } = require('chai');
const basePage = require('../pageobjects/pages/base-page');
const testData = require('../pageobjects/lib/url');
const addContractor = require('../pageobjects/pages/add-contractor-page');
const dashBord = require('../pageobjects/pages/dashbord-page');
const selectContractor = require('../pageobjects/pages/contractor-page');
const contractorDetail = require('../pageobjects/pages/contractor-details-page');
const testdata = require('../pageobjects/lib/contractor-test-data');

// const userName = 'kittupotnis@gmail.com';
// const passWord =  'Samhith@20';

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url(testData.url);
        // browser.pause(6000);
        basePage.enterUserName(testData.testData.userName);
        basePage.enterPassword(testData.testData.passWord);
        basePage.clickOnLogInButton();
        dashBord.clickOnboardArrow();
        selectContractor.clickOnMultipleContractor();
        addContractor.clickOnAddIndivisual();
        contractorDetail.enterTheContractorDetails(testdata.constractr1);
        // browser.pause(15000);
        // const actualname = contractorDetail.contractorList.getText();
        const actualEmail = contractorDetail.getTheContractorEmail();
        // console.log('actualname==', actualName)
        assert.equal(actualEmail, testdata.constractr1.emailId, 'Contractor did mot match');
    })
})