"use strict"

//Task 1

{
    function result(num1, num2, num3) {

        num1 = prompt('Введите первое число');
        num2 = prompt('Введите второе число');
        num3 = prompt('Введите третье число');
        result = ((num1 - num2) / num3);
        console.log(result);
    }

    //result();
}


// Task 2 

{

    function num(numb) {
        numb = prompt('Введите число');
        let degree3 = numb ** 3;
        let degree2 = numb ** 2;
        console.log(degree3);
        console.log(degree2);
    }

    // num();
}


// Task 3

{
    function min(a, b) {
        a = prompt('Введите число a');
        b = prompt('Введите число b');
        if (a > b) {
            console.log('Меньшее число ' + b)
        } else { console.log('Меньшее число ' + a) }
    }

    // min();

    function max(a, b) {
        a = prompt('Введите число a');
        b = prompt('Введите число b');
        if (a < b) {
            console.log('Болшее число ' + b)
        } else console.log('Большее число ' + a)
    }

    // max();
}


// Task 4

{
    let arr = function (length) {
        length = length || 1;
        let array = [];
        for (let i = 1; i <= length; i++) {

            array.push(i);
        }
        return array;
    }

    // arr();

    function arrUser() {

        let addArr = arr(prompt('Введите число :'));
        console.log(addArr);
    }

    // arrUser();
}

// Task 5

{
    function isEven(num) {
        num = num || 1;
        num = prompt('Введите число ');

        if (num % 2 === 0) {
            console.log(true);
            return true;
        } else {
            console.log(false);
            return false;
        }

    }
    //isEven();
}


// Task 7

{
    function piramid(nums) {

        for (let i = 1; i <= nums; i++) {
            let num = '';
            for (let k = 0; k < i; k++) {
                num += i;
            } console.log(num);
        }
    }

    piramid(prompt('Введите число :'));


}