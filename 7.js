let aray = [1,2,3,0]
let chetnoe = 0
let nechet = 0
let zero = 0
aray.forEach(function(item,index,array){
  if (typeof item === 'number'){
    if(item === 0 ){
      zero += 1;
    }else if (item % 2 === 0){
      chetnoe += 1;
    }else {
      nechet += 1;
    }
  }else{
    console.log('Это не число')
  }})


console.log(`Четное количество элементов: ${chetnoe}\n Нечетное количяество элементов: ${nechet}\n Нулевых элементов: ${zero}`)