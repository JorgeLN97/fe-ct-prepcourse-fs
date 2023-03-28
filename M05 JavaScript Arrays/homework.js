/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   return (array[0]);
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   var tamaño = (array.length - 1);

   return (array[tamaño]);
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   return (array.length);
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   
   var unoMas = array.map(num => {
      return num + 1;
   });
   return unoMas;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   array.push(elemento);
   return(array);
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   
   var union = palabras.join(" ");
   return union;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   
   if (array.includes(elemento) == true)
   {
      return true;
   }
   else
   {
      return false;
   }
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   
   var suma = 0;
   for (var i = 0; i < arrayOfNums.length; i++)
   {
      suma = suma + arrayOfNums[i];
   }
   return suma;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   
   var suma = 0;
   var promedio = 0;
   for (var i = 0; i < resultadosTest.length; i++)
   {
      suma = suma + resultadosTest[i];
   }
   promedio = suma / resultadosTest.length;

   return promedio;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.

   //var nuevoArray = arrayOfNums.sort();
   //return (nuevoArray[nuevoArray.length - 1]);

   var mayor = 0;
   for (var i = 0; i < arrayOfNums.length; i++)
   {
      if (arrayOfNums[i] > mayor)
      {
         mayor = arrayOfNums[i];
      }
   }
   return mayor;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.

   if (arguments.length == 0)
   {
      return 0;
   }
   else
   {
      var producto = 1;
      
      for (var i = 0; i < arguments.length; i++)
      {
         producto = producto * arguments[i];
      }
      return producto;
   }
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:

   var acum = 0;
   array.forEach (num => {
      if (num > 18)
      {
          acum = acum + 1;
      }
  });
  return acum;
  
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.

   var i = 0;
   do
   {
      if (numeroDeDia === 1 || numeroDeDia === 7)
      {
         return("Es fin de semana");
      }
      else
      {
         return("Es dia laboral");
      }
     i ++;
   } while (i < 7);
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   
   var conversion = num.toString();
   var arrayString = conversion.split("");

   if (arrayString[0] == "9")
   {
      return true;
   }
   else
   {
      return false;
   }
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   /*
   for (var i = 0; i < array.length; i++)
   {
      if (array[i] !== array[i + 1])
      {
         return false;
      }
   }
   return true;
   */
   
   var esIgual = false;

   for (var i = 0; i < (array.length - 1); i++)
   {
      if (array[i] === array[i + 1])
      {
         esIgual = true;
      }
      else
      {
         esIgual = false;
         break;
      }
   }
   return esIgual;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   
   var mesesNuevos = [];
   for (var i = 0; i < array.length; i++)
   {
      if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre")
      {
         mesesNuevos.push(array[i]);
      }
   }
   
   if (mesesNuevos.includes("Enero") && mesesNuevos.includes("Marzo") && mesesNuevos.includes("Noviembre"))
   {
      return mesesNuevos;
   }
   else
   {
      return "No se encontraron los meses pedidos";
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   
   var tablaSeis = [];
   
   for (var i = 0; i <= 10; i++)
   {
      tablaSeis.push(i * 6);
   }
   return tablaSeis;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   
   var mayoresCien = [];

   for (var i = 0; i < array.length; i++)
   {
      if (array[i] > 100)
      {
         mayoresCien.push(array[i]);
      }
   }
   return mayoresCien;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   
   var arreglo = [];
   //var suma = 0;
   
   for (var i = 0; i < 10; i++)
   {
      if (num != i)
      {
         num = num + 2;
         arreglo.push(num);
      }
      else
      {
         return("Se interrumpió la ejecución");
         break;
      }
   }
   return arreglo;
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   
   var arreglo = [];

   for (var i = 1; i <= 10; i++)
   {
      if (i == 5)
      {
         continue;
      }
      num = num + 2;
      arreglo.push(num);
   }
   return arreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
