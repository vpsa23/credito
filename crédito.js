do {
  var phrase = prompt('Ingresa tu número de tarjeta');

  if (phrase !== '') {
    isValidCard(validar);
  } else {
    alert('Debes ingresar un número');
  }
} while (phrase === '');