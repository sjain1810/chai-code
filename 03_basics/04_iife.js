// Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()
 // |
 // |
 // |
//  iife for this
//  |
//  |
//  |

(function chai(){
    console.log(`DB CONNECTED`);
})(); // semicolon is important to end the scope of this iife, with the help 
//       of this we can define more than one iifes simultaneously

( (name) => {
    console.log(`DB TWO CONNECTED, ${name}`);
})("Sahil")