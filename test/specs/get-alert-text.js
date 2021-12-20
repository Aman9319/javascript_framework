const { assert } = require('chai');
describe('Upload the file', () => {
   it.skip('upload the first file', () => {
       browser.url('https://the-internet.herokuapp.com/javascript_alerts');
     const jsAlert=  $('ul li:nth-child(1) button');
     jsAlert.click();
     const alert = browser.getAlertText();
     console.log('alert====',alert);
     assert.equal(alert, 'I am a JS Alert');
     browser.pause(5000);
     browser.acceptAlert();
     browser.pause(5000)  
   }) 

   it.skip('Accept the alert', () => {
    browser.url('https://the-internet.herokuapp.com/javascript_alerts');
  const jsAlert=  $('ul li:nth-child(2) button');
  jsAlert.click();
//   const alert = browser.getAlertText();
//   console.log('alert====',alert);
//   assert.equal(alert, 'I am a JS Alert');
  browser.pause(5000);
  browser.acceptAlert();
  browser.pause(5000)  
}) 
it.skip('dismiss the alert', () => {
    browser.url('https://the-internet.herokuapp.com/javascript_alerts');
  const jsAlert=  $('ul li:nth-child(2) button');
  jsAlert.click();
//   const alert = browser.getAlertText();
//   console.log('alert====',alert);
//   assert.equal(alert, 'I am a JS Alert');
  browser.pause(5000);
  browser.dismissAlert();
  browser.pause(5000)  
}) 

it('Enter the tesxt in alert', () => {
    browser.url('https://the-internet.herokuapp.com/javascript_alerts');
  const jsAlert=  $('ul li:nth-child(3) button');
  jsAlert.click();

  browser.pause(5000);
  browser.sendAlertText('hiii how are you');
  browser.pause(10000)  
  browser.acceptAlert();
  browser.pause(10000)      
})
})