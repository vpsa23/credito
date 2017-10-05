do{
  var phrase = prompt("Ingresa tu número de tarjeta");

  if(phrase != ""){
        isValidCard(validar);
  }else{
       alert("Debes ingresar un número");
  }
}while(phrase === '')


function isValidCard(ccNumber,Count){
    var doble = true;
    var numArr = [];
    var sumaTotal = 0;
    for(i=0; i<Count; i++){
        var digitos = parseInt(ccNumber.charAt(i));
 
        if(doble){
            digitos = digitos * 2;
            digitos = toSingle(digitos);
            doble = false;
        } else {
            doble = true;
        }
        numArr.push(digitos);
    }
 
    for(i=0; i<numArr.length; i++){
        sumaTotal += numArr[i];
    }
    var dif = eval(sumaTotal % 10);
    console.log(dif);
    console.log(dif == "0");
    return (dif == "0");
}
