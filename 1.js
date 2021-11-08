// Задание №1
let newNumber
newNumber = prompt('Введиет число:');
++newNumber;
--newNumber;
if (typeof newNumber === 'number') {
    if (newNumber != NaN){
        if (newNumber%2 == 0) {
            console.log('Ваще число четное');
        }else {
            console.log('Ваше число нечетное');
        }
    }else {
        console.log('Это NaN');
    }
}else{
    console.log('Преобразование к числу невозможно!!!')
}