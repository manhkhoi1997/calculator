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
	if (y == 0){
	console.log("Error");
	} else 
	return x/y;
}

 var operations = {
    '+': plus,
    '-': subs,
    '*': mult,
    '/': divi
 }

 var calculate = function(x, y, operation){
   return operations[operation](x, y);
 }

console.log(calculate(12,4, '/'));



