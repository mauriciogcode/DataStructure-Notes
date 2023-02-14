function bubbleSort(aInput){
    // el -1 achica la brecha
    // por que al reducir el length se hace mas corto
    // el i++ indica direccion no distancia
  for(var i = 0;i < aInput.length - 1; i++){
      // loop whole array
      // except the last elements (i)
      // i represents the number of already sorted elements
      // -i significa que dejamos afuera a i o al numero que representa
    // -1 es para que no intercambie el ultimo par
      for(var j = 0; j < aInput.length - i - 1; j++){
          //swap
          //a, b
          // el + 1 aumenta el indice que es j
          if(aInput[j] > aInput[j + 1]){
              var temp = aInput[j];
              aInput[j] = aInput[j + 1];
              aInput[j + 1] = temp;
          }
      }
  }
}


var aInput = [100,10,15,23,2,9,28,1,36,1]
console.log(aInput);
bubbleSort(aInput);
console.log(aInput);

// same as bubble sort
// check for swap
// if no swap happens 
// end the algorithm (return)

function bubbleSortOptimalized(aInput){
  for(var i = 0;i < aInput.length - 1; i++){
      // loop whole array
      // except the last i elements
      // i represents the number of already sorted elements
      var swapHappend = false;
      for(var j = 0; j < aInput.length - i - 1; j++){
          //swap
          //a, b
          if(aInput[j] > aInput[j + 1]){
              swapHappend = true;
              var temp = aInput[j];
              aInput[j] = aInput[j + 1];
              aInput[j + 1] = temp;
          }
      }
      if(!swapHappend){
          //the array is sorted
          console.log('already ordered')
          return;
      }
  }
}

console.log(aInput);
bubbleSortOptimalized(aInput);
console.log(aInput);