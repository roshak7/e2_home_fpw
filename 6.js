// Задание №6
let myArray = [3,4,5,7,8,3,5,6,0,5,6,8,12,0];
let checkResult = false;

for (let i = 0; i < myArray.length; i++){
    for (let j = 0; j < myArray.length; j++){
        if (myArray[i] == myArray[j] && i != j){
            checkResult = true;
            break;
        }
    }
    if (checkResult == true) {
        break;
    }
}
console.log(checkResult);
