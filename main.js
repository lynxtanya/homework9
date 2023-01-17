'use strict';

// 1. Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.

const myArr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
console.log(myArr);
let sum1 = 0;
let n1 = 0;

for (const arrItem of myArr) {

    if(arrItem >= 0) {
        sum1 = sum1 + arrItem;
        n1 = n1 + 1;
    }

}

console.log('Сума позитивних елементів ' + sum1);
console.log('Kількість позитивних елементів ' + n1);


// 2. Знайти мінімальний елемент масиву та його порядковий номер.

let min = myArr[0];
let numMin = 0;

for(let i = 0; i < myArr.length; i++) {

    if (myArr[i] <= min) {
        
        min = myArr[i];

        numMin = i;
        
    }

}

console.log('Mінімальний елемент масиву ' + min + ' та його порядковий номер ' + numMin);


// 3. Знайти максимальний елемент масиву та його порядковий номер.

let max = myArr[0];
let numMax = 0;

for(let i = 0; i < myArr.length; i++) {

    if (myArr[i] >= max) {
        
        max = myArr[i];

        numMax = i;
        
    }

}

console.log('Mаксимальний елемент масиву ' + max + ' та його порядковий номер ' + numMax);

// 4. Визначити кількість негативних елементів.

let n4 = 0;

for (const arrItem of myArr) {

    if(arrItem < 0) {
        n4 = n4 + 1;
    }

}

console.log('Kількість негативних елементів ' + n4);

// 5. Знайти кількість непарних позитивних елементів.

let n5 = 0;

for (const arrItem of myArr) {

    if(arrItem >= 0) {
        if(arrItem % 2 !== 0) {
            n5 = n5 + 1;
        }
    }

}

console.log('Kількість непарних позитивних елементів ' + n5);

// 6. Знайти кількість парних позитивних елементів.

let n6 = 0;

for (const arrItem of myArr) {

    if(arrItem >= 0) {
        if(arrItem % 2 === 0) {
            n6 = n6 + 1;
        }
    }

}

console.log('Kількість парних позитивних елементів ' + n6);

// 7. Знайти суму парних позитивних елементів.

let sum7 = 0;

for (const arrItem of myArr) {

    if(arrItem >= 0) {
        if(arrItem % 2 === 0) {
            sum7 = sum7 + arrItem;
        }
    }

}

console.log('Cумa парних позитивних елементів ' + sum7);

// 8. Знайти суму непарних позитивних елементів.

let sum8 = 0;

for (const arrItem of myArr) {

    if(arrItem >= 0) {
        if(arrItem % 2 !== 0) {
            sum8 = sum8 + arrItem;
        }
    }

}

console.log('Cумa непарних позитивних елементів ' + sum8);

// 9. Знайти добуток позитивних елементів.

let d9 = 1;

for (const arrItem of myArr) {

    if(arrItem >= 0) {
        d9 = d9 * arrItem;
    }

}

console.log('Добуток позитивних елементів ' + d9);

// 10. Знайти найбільший серед елементів масиву, остальні обнулити

let max10 = myArr[0];
let maxI = 0;

for(let i = 1; i < myArr.length; i++) {

    if (myArr[i] > max10) {
        
        max10 = myArr[i];
        myArr[maxI] = 0 ;
        maxI = i ;
        
    } else {
        myArr[i] = 0;
    }

}

console.log(myArr);







  












