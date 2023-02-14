 function recursiveFactorial(n){
   if (n < 1) {
     return 1
   } else {
     return n * recursiveFactorial(n - 1)
      // 6 * f(5) = 720
      // f(5) * f(4) = 120
      // f(4) * f(3) = 24
      // f(3) * f(2) = 6
      // f(2) * f(1) = 2
      
   }
 }


 console.log(recursiveFactorial(6))