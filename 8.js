// Задание №8
let myMap = new Map();
myMap.set('key1','value1');
myMap.set('key2','value2');
myMap.set('key3','value3');
myMap.set('key4','value4');
myMap.set('key5','value5');
myMap.set('key6','value6');
myMap.set('key7','value7');

for (let elem of myMap) {
    console.log(`result (key-value): ${ elem[0] } - ${ elem[1] }`);
}
