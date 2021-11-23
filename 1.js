let a = +prompt('Что то напишите:');

console.log(a);

if(typeof a === 'number'){
if(a % 2 === 0){
console.log('Ваше число четное')
}else{
console.log('Число нечетное')
}
}
else if (typeof a === 'NaN'){
console.log('Это НАН ЧТО ТО ПОШЛО НЕ ПО ПЛАНУ')
}
else{
console.log('Упс кажется вы ошиблись')
}