const path = require('path');
describe('Upload the file', () => {
   it('upload the first file', () => {
       browser.url('https://the-internet.herokuapp.com/drag_and_drop');
       const saurce = $('#column-a');
       const target = $('#column-b');
       saurce.dragAndDrop(target);
       browser.pause(5000);  
   }) 
})  