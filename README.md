# Loop_JavaSctipt

## For_of Loop.

For_of loop will use for checking of Array every element

    let numbers = [2, 4, 5, 6, 7, 8];

    for(const number of numbers) {
        console.log(number)
    }

---

## while Loop

    let number = 0;
    while(number < 5) {
        console.log("Looooping number is : ", number)
        number += numner
    }

Alawys will use number = number + 1 incrise (Otherwise will be continue infinite looping)

---------------------While_loop task-------------------

Subtask-1:
Find all the odd numbers from 61 to 100.

Subtask-2:
Find all the even numbers from 78 to 98.

Subtask-3:
"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

Subtask-4:
Display sum of all the odd numbers from 81 to 131.

Sutask-5:
Display sum of all the even numbers from 206 to 311.

Sutask-6:
As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

Suntask-7:
Implement a countdown timer that counts down from 21 to 15.

---

## Brack

## Continue (that's mean skip me)

    for(let number = 15; number > 5; number--){
        console.log("number ", number)
        if(number % 2 !== 0){
            continue; // skip
        }
        console.log(number)
    }
