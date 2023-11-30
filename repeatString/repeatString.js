
const repeatString = function(word, num) {
       
    let str = '';

    /** was printed outside the for loop since any number below 0 is 
     * considered faulty in for loop and will make the loop stop in 0, 
     * which returns empty string.
    */

    if (num < 0) str = 'ERROR';

    for(let i=1; i<=num; i++){
        if(num >=1 ) str+=word;
        else if (num === 0) str = ''; 
    }
    
    return str;
};

// Do not edit below this line
module.exports = repeatString;
