/* 
! Patrones / Patterns

* Frequency counter
Tenes que verificar la frecuencia de dos array conviene usar un objeto para guardar los valores y frecuencia y asi no tener que hacer un loop dentro de otro. En vez de N^2 es 2N
 Multiple Pointers
Usamos dos pointers y nos vamos acercando mientras comparamos
* Sliding Window

Se trata de hacer una ventana de N numeros (capsula) y moverla o acrecentarla.
En vez de iterar entre todos los numero, se maneja solo con los vecinos
Ejemplo: suma los numeros de array del medio y abre la ventana hacia los dos anteriores para obtener 4.
Es 0(N)

* Divide and Conquer

Dividir los problemas en pedazos o chunks, y realizar el proceso ahi en ese subset.
Dismiye la complejidad del tiempo
Ejemplo: dividir un array ordenado, y hacer la busqueda a la mitad para ganar mas tiempo.
s Log(N)

* Dynamic Programing

* Greedy alg

backtraking
 */

// * Frequency count examples

function validAnagram(first, second) {
  if (first.length !== second.length){
    return false
  }


const lookup = {};

for (let i = 0; i < first.length; i++) {
  const letter = first[i];
  console.log(`first for letter :${letter}`);
  // if letter exist, increment, otherwise set to 1
  lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
}
console.table(lookup);

for (let i = 0; i < second.length; i++) {
let letter = second[i];
console.log(`second for letter: ${letter}`);
if (!lookup[letter]){
  return false;
}else {
  lookup[letter] -= 1;

}
}
console.table(lookup);

return true;

}

console.log(validAnagram('12345', '42313'))

// * Multipoint example

/* 
let array = [1,1,1,2,3,3,4,4,5,6]
let array2;

for (let i = 0; i < array.length; i++) {
  console.log('soy i :' + i)
  for (let j = 0; j < array.length; j++) {
    console.log(j)
  if(array[j] === array[i]) {
    array2[i] = array[j]
  } else {
    continue;
  
  }
}  
}

console.log(array2)
 */

let arr = []
if (arr.length === 0) return 0
const counUniqueValues = (arr) => {
  var i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]){
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
} 

console.log(counUniqueValues(arr));

// nextlecture Colt 041 Why Use Recursion.mp4