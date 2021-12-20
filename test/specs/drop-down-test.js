describe('Upload the file', () => {
   it.skip('upload the first file', () => {
       browser.url('https://www.facebook.com/');
       $('//a[text()="Create New Account"]').click();
       const day = $('#day');
       day.selectByVisibleText('10');
       browser.pause(3000);       
   }) 

   it('upload the first file', () => {
    browser.url('https://www.facebook.com/');
    $('//a[text()="Create New Account"]').click();
    browser.pause(3000);
    let list = $$('#month option');
   console.log('length is ', list.length)
    browser.pause(3000);   
    for(let i = 0; i<list.length; i++){
        const element = list[i].getText();
        console.log(i, element)
        if(list[i].getText() === 'Jul'){
            list[i].click();
            break;
        }
    }  
    browser.pause(5000)  
})
})  