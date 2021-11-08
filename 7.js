// Задание №7
let myArray = [3,4,5,7,8,3,5,6,0,5,6,8,12,0];
let numChet = 0;
let numNeChet = 0;
let numZero = 0;

myArray.forEach(function(item, index, array) {
    if (typeof item === 'number') {
        if (item === 0) {
            numZero += 1;
        }else if (item === NaN) {
            console.log('Элемент с индексом:'+index+', не является числом.')
        }else{
            if (item%2 ===0){
                numChet += 1;
            }else {
                numNeChet += 1;
            }
        }
    }else {
        console.log('Элемент с индексом:'+index+', не является числом.')
    }
})

console.log('В этом массиве '+numChet+' четных чисел');
console.log('В этом массиве '+numNeChet+' нечетных чисел');
console.log('В этом массиве '+numZero+' нулей');
