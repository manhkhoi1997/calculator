 function sum (a,b){
	return a + b ;
}
 function minus (a,b){
	return a - b ;
}
 function mult (a,b){
	return a * b ;
}
 function divi (a,b){
	if (b == 0){
	console.log("Error");
	} else 
	return a/b;
}

 var operations = {
    '+': sum,
    '-': minus,
    '*': mult,
    '/': divi
 }

 var calculate = function(a, b, operation){
   return operations[operation](a, b);
 }

console.log(calculate(12,4, '/'));



