let myMap = new Map();

myMap.set('key1','prop');

myMap.set(1,'prop2');

myMap.set(2,'prop3');


for (let name of myMap) {
    console.log(`Ключ — ${name[0]}, Значение — ${name[1]}`);
}
