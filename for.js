// Note: for loop and while loop same in JavaSctipt

/**
 * For loop Structor
 * 
 * for(variable declaration; loop condition; increment){
 *      code here;
 * }
 * 
 */

//----------------
// even number:
//----------------
// for(let num = 0; num < 25; num += 2){
//     if(num !== 0){
//         console.log(num)
//     }
// }

//-------------
//odd number:
//-------------
// for(let num = 0; num < 25; num += 2){
//     if(num !== 0){
//         console.log(num-1)
//     }
// }

// --------------------
// countdown timer 
// --------------------

// let start = 81;
// let end = 65;

// for(start; start >= end; start--){ //decrement here
//     console.log(start)
// }


// let start = 90;
// let end = 30;

// for(start; start >= end; start--) {
//     console.log("Start time is :", start);
//     setTimeout(()=>{},1000)
// }


//-----------------------

// let start = 81;
// let end = 65;

// let countdown = setInterval(() => {
//   console.log(start);
//   start--;
  
//   if (start < end) {
//     clearInterval(countdown);
//   }
// }, 1000);  // 1000 milliseconds = 1 second



//--------------------------------------------
// Generate a multiplication table for number 9
//--------------------------------------------

// let num = 9

// for(let number = 1; number <= 10; number++){
//     console.log(`${num} x ${number} = ${num * number}`)
// }


// Or, While loop

// let num = 9;
// let number = 1;
// while(number <= 9){
//     console.log(`${num} x ${number} = ${num * number}`)
//     number += 1;
// }


//------------------------------------------------------------
// Give me the lists of numbers btween 1 to 30 divisible by 3;
//------------------------------------------------------------

// for(let number = 0; number <= 150; number++){
//     if(number % 2 === 0 && number !== 0){
//         console.log(number)
//     }
// }


// Give me the lists of odd Number from 200 to 300 divisible by 3 and 5;
//----------------------------------------------------------------------

// for(let number = 200; number <= 300; number++){
//     if(number % 2 !== 0){
//         // 3 and 5 divisible numbers list here:
//         if(number % 3 === 0 && number % 5 === 0){
//             console.log("3 and 5 divisible numbers :", number)
//         }
//         //Only 3 divisible number here:
//         if(number % 3 === 0){
//             console.log("3 divisible numbers: ", number)
//         }

//         if(number % 5 === 0 ){
//             console.log("5 divisible numbers: ", number)
//         }
//     }
// }



