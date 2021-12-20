const path = require('path');
describe('Upload the file', () => {
   it('upload the first file', () => {
       browser.url('https://the-internet.herokuapp.com/upload');
       const fileUpload = $('#file-upload');
       const submitButton = $('#file-submit');
       const filePath = path.join(__dirname, '../pageobjects/image/1.png');
       console.log('=====',filePath);
       browser.pause(5000);
      const remoteFilePath =  browser.uploadFile(filePath);
      fileUpload.setValue(remoteFilePath);
      submitButton.click();
      browser.pause(5000);
   }) 
})