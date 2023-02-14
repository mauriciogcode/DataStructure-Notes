function selectionSort(aarray){
  
  //Bucle de barrera / Mueve la barrera al achicarse/ 
  
  // El menos 1 achica el bucle para que haya una barrera
  // el -1 achica la brecha
  // por que al reducir el length se hace mas corto
    
  for(var plusoneindex = 0; plusoneindex < aarray.length - 1; plusoneindex++)  {
  var menorindice = plusoneindex


  // Bucle comparador
  // Busca el numero mas chico entre dos. 
  // El mas 1 es para que se compare que el numero siguiente 
  // suma un index of

  for(var i = plusoneindex + 1; i < aarray.length; i++){
    if(aarray[menorindice] > aarray[i]){

      menorindice = i;
    }
  }
  
  //swap
  var temp = aarray[plusoneindex];
  aarray[plusoneindex] = aarray[menorindice]
  aarray[menorindice] = temp

  


}
}

var aarray = [1,10,15,23,2,9,28,1,36,1]
console.log(aarray)
selectionSort(aarray)
console.log(aarray)