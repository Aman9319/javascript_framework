const PageElement = require('./page-element');


// function checkSelector(selector, selectorObject) {
//     console.log('selector==========');
//     console.log('selectorObject111', selectorObject);
//     return new PageElement(selectorObject[selector]);
// }


function installGetters(selectorObject) {
    // console.log('selectorObject=====', selectorObject);
    for (const key of Object.keys(selectorObject)){
        // console.log('key====',key);
        // if(selectorObject[key] instanceof Object) {
        //     console.log('key------Inside',key);
        //     console.log('this--inside--',this);
            
            
        //     Object.defineProperty(this, key, {
        //         get () {
        //             return checkSelector(key, selectorObject);
        //         },
        //     });
        // } else {
            // console.log('this--else--',this);
            Object.defineProperty(this, key, {
                get () {
                    return new PageElement(selectorObject[key])
                },
            });
        
    }
}

module.exports = installGetters;