/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   var x = Math.pow(num, 2);
   return x;
}

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   var x = Math.pow(num, 3);
   return x;
}

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   var x = Math.pow(num, exponent);
   return x;
}

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   var x = Math.round(num);
   return x;
}

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   var x = Math.ceil(num);
   return x;
}

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   var x = Math.random();
   return x;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
