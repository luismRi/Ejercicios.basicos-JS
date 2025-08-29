/*Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10. */

const contarCaracteres = (texto = "") =>
  !texto
    ? console.warn("No ingresaste ningún texto")
    : console.info(`EL texto: ${texto}, tiene ${texto.length} caracteres.`);

//contarCaracteres();
//contarCaracteres("hola mundo");

/*Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
 */

const recortarTexto = (cadena = "", longitud = undefined) =>
  !cadena
    ? console.warn("No ingresaste una cadena de texto")
    : longitud === undefined
    ? console.warn("No ingresaste la longitud para cortar el texto")
    : console.info(cadena.slice(0, longitud));

//recortarTexto("Hola hola");
//recortarTexto();
//recortarTexto("hola que tal", 6);

/* Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/

const cadenaAArreglo = (string = "", separador = undefined) =>
  !string
    ? console.warn("No ingresaste un texto para separar")
    : separador === undefined
    ? console.warn("No ingresaste el separador")
    : console.info(string.split(separador));

//cadenaAArreglo();
//cadenaAArreglo("hola mundo");
//cadenaAArreglo("ene, feb, mar, abr", ",");

/*Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

const repetirTexto = (texto = "", veces = undefined) => {
  if (!texto) return console.warn("Olvidaste poner el texto");

  if (veces === undefined)
    return console.warn("No ingresaste el número de veces");

  if (veces === 0) return console.error("El número de veces no puede ser 0");

  if (Math.sign(veces) === -1)
    return console.error("El número de veces no puedes ser negativo");

  for (let i = 1; i <= veces; i++) console.info(`${texto}, ${i}`);
};

//repetirTexto("mariposa");
//repetirTexto("mariposa", 0);
//repetirTexto();
//repetirTexto("mariposa", -3);
//repetirTexto("mariposa", 10);

/*5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/

const invertirCadena = (cadena = "") => {
  !cadena
    ? console.warn("No ingresaste una cadena de texto")
    : console.info(cadena.split("").reverse().join(""));
};

//invertirCadena();
//invertirCadena("Lo voy a pensar");

/*6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/

const textoEnCadena = (cadena = "", texto = "") => {
  if (!cadena) return console.warn("No ingresaste el texto largo");

  if (!texto) return console.warn("No ingresaste la palabra a evaluar");

  let i = 0,
    contador = 0;

  while (i !== -1) {
    i = cadena.indexOf(texto, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }
  return console.info(`La Palabra ${texto}, se repite: ${contador} veces.`);
};

//textoEnCadena();
//textoEnCadena("El mundo es enorme, mundo");
//textoEnCadena("El mundo es enorme, mundoy si agrego otro mundo", "mundo");

/*7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/

const palindromo = (palabra = "") => {
  if (!palabra) return console.warn("No pusiste la palabra a evaluar");

  palabra = palabra.toLowerCase();

  let alReves = palabra.split("").reverse().join("");

  return palabra === alReves
    ? console.info(`Si es Palindromo: ${palabra} es igual a ${alReves}.`)
    : console.info(`No es Palindromo: ${palabra} no es igual a ${alReves}.`);
};

//palindromo();
//palindromo("palindromo");
//palindromo("Menem");

/*8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/

const eliminarCaracteres = (texto = "", patron = "") =>
  !texto
    ? console.warn("No ingresaste el texto a examinar")
    : !patron
    ? console.warn("Olvidaste poner el patron a eliminar")
    : console.info(texto.replace(new RegExp(patron, "ig"), ""));

//eliminarCaracteres();
//eliminarCaracteres("laberinto");
//eliminarCaracteres("xyz1, xyz2, xyz3, xyz4", "xy");

/*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.*/

const aleatorio = () => console.info(Math.round(Math.random() * 100) + 500);
//aleatorio();
//aleatorio();

/*10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.*/

const capicua = (numero = 0) => {
  if (!numero) return console.error("No ingresaste un número");

  if (typeof numero !== "number")
    return console.warn(`El dato ingresado ${numero}, no es un número`);

  numero = numero.toString();
  let alReves = numero.split("").reverse().join("");

  return numero === alReves
    ? console.info(`Si es Capicua ${numero} es igual a ${alReves}`)
    : console.info(`No es Capicua: ${numero}, no es igual a ${alReves}`);
};

//capicua();
//capicua("6");
//capicua(6006);
//capicua(723);

/*11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.*/

const factorial = (numero = undefined) => {
  if (numero === undefined) return console.error("No ingresaste un número.");

  if (typeof numero !== "number")
    return console.warn("El dato ingresado no es válido.");

  if (numero === 0) return console.warn("El número no puede ser 0.");

  if (Math.sign(numero) === -1)
    return console.error("El número no puede ser negativo.");

  let factorial = 1;

  for (let i = numero; i > 1; i--) {
    factorial *= i;
  }

  return console.info(`El factorial de ${numero} es: ${factorial}`);
};

//factorial();
//factorial("cuarenta");
//factorial(0);
//factorial(-45);
//factorial(8);

/*12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.*/

const numeroPrimo = (numero = undefined) => {
  if (numero === undefined) return console.warn("Se te olvidó poner el número");

  if (typeof numero !== "number")
    return console.error("El dato ingresado debe ser un número");

  if (numero === 0) return console.error("El número no puede ser 0");

  if (numero === 1) return console.error("El número no puede ser 1");

  if (Math.sign(numero) === -1)
    return console.error("El número no puede ser negativo");

  let divisible = false;

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      divisible = true;
      break;
    }
  }
  return divisible
    ? console.info(`El Número: ${numero}, No es Primo`)
    : console.info(`El Número: ${numero}, si es Primo`);
};

//numeroPrimo();
//numeroPrimo([]);
//numeroPrimo(0);
//numeroPrimo(-23);
//numeroPrimo(1);
//numeroPrimo(17);
//numeroPrimo(20);

/*13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.*/

const numeroParImpar = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un número");

  if (typeof numero !== "number")
    return console.error("El dato debe ser un número");

  return numero % 2 === 0
    ? console.info(`${numero} es Par`)
    : console.info(`${numero} es Impar`);
};
//numeroParImpar();
//numeroParImpar("tu");
//numeroParImpar(78);
//numeroParImpar(-33);

/*14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.*/

const convertirGrados = (grados = undefined, unidad = undefined) => {
  if (grados === undefined)
    return console.warn("No ingresaste los Grados a convertir");

  if (typeof grados !== "number")
    return console.error("El dato ingresado debe ser un número");

  if (unidad === undefined)
    return console.warn("Debe pasar la Unidad a convertir");

  if (typeof unidad !== "string")
    return console.error(`El valor '${grados}' debe ser una letra`);

  if (unidad.length !== 1 || !/(C|F)/.test(unidad))
    return console.error(`"${unidad}"": Valor de Unidad no reconocido `);

  if (unidad === "C")
    return console.info(
      `${grados}°C es = ${Math.round(grados * (9 / 5) + 32)}°F`
    );
  else if (unidad === "F")
    return console.info(
      `${grados}°F es = ${Math.round((grados - 32) * (5 / 9))}°C`
    );
};
//convertirGrados();
//convertirGrados({});
//convertirGrados(2);
//convertirGrados(2, 2);
//convertirGrados(3, "m");
//convertirGrados(32, "C");
//convertirGrados(32, "F");

/*15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.*/

const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un número");

  if (typeof numero !== "number")
    return console.error("El dato ingresado no es un número");

  if (base === undefined)
    return console.warn("No ingresaste la base a convertir");

  if (typeof base !== "number")
    return console.error("La base a convertir debe ser un número");

  if (base === 2) {
    return console.info(
      `${numero} Base ${base} es = ${parseInt(numero, base)} Base 10`
    );
  } else if (base === 10) {
    return console.info(
      `${numero} Base ${base} es = ${numero.toString(base)} Base 2`
    );
  } else {
    return console.info("El tipo de base a convertir no es válido.");
  }
};

/* convertirBinarioDecimal();
                              convertirBinarioDecimal("No es un numero");
                              convertirBinarioDecimal(100);
                              convertirBinarioDecimal(100, "Tampoco este");
                              convertirBinarioDecimal(100, 2);
                              convertirBinarioDecimal(4, 10);
                              convertirBinarioDecimal(3, 6); */

/*16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.*/

const aplicarDescuento = (monto = undefined, descuento = 0) => {
  if (monto === undefined) return console.warn("No ingresaste ningun Monto.");

  if (typeof monto !== "number")
    return console.error("El monto debe ser un Número.");

  if (monto === 0) return console.warn("El Monto no puede ser 0.");

  if (Math.sign(monto) === -1)
    return console.error("El monto no puede ser Negativo.");

  if (typeof descuento !== "number")
    return console.error("El descuento debe ser un Número");

  if (Math.sign(descuento) === -1)
    return console.error("El descuento no puede ser Negativo.");

  return console.info(
    `$${monto} - ${descuento}% es= $${monto - (monto * descuento) / 100}`
  );
};

/* aplicarDescuento();
                              aplicarDescuento("doce", 20);
                              aplicarDescuento(0, 100);
                              aplicarDescuento(-500, 50);
                              aplicarDescuento(1000, "no se");
                              aplicarDescuento(1000, -100);
                              aplicarDescuento(1000, 20); */

/*17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).*/

const calcularAnios = (fecha = undefined) => {
  if (fecha === undefined) return console.warn("No ingresaste la fecha");

  if (!(fecha instanceof Date))
    return console.warn("El valor que ingresaste no es una fecha válida.");

  let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosEnMS = 1000 * 60 * 60 * 24 * 365,
    aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

  return Math.sign(aniosHumanos) === -1
    ? console.info(
        `Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`
      )
    : Math.sign(aniosHumanos) === 1
    ? console.info(
        `Han pasado ${aniosHumanos} años desde ${fecha.getFullYear()}`
      )
    : console.info(`Estamos en el año ${fecha.getFullYear()}`);
};

//calcularAnios();
//calcularAnios("coseno");
//calcularAnios(new Date());
//calcularAnios(new Date(1969, 6, 23));

/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.*/

const contarLetras = (cadena = "") => {
  if (!cadena) return console.warn("No ingresaste una cadena de texto.");

  if (typeof cadena !== "string")
    return console.error("El dato ingresado no es una cadena de texto.");

  let vocales = 0,
    consonantes = 0;

  cadena = cadena.toLocaleLowerCase();

  for (let letra of cadena) {
    if (/[aeiouáéíóúü]/.test(letra)) vocales++;

    if (/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++;
  }
  return console.info({
    cadena,
    vocales,
    consonantes,
  });
};

//contarLetras();
//contarLetras([1, 2, 3]);
//contarLetras("EL paisaje no era un pasaje");

/*19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.*/

const validarNombre = (nombre = "") => {
  if (!nombre) return console.warn("No ingresaste un nombre");

  if (typeof nombre !== "string")
    return console.error(
      `El valor ${nombre} ingresado no es una cadena de texto`
    );

  let expReg = /^[A-Za-záÁéÉíÍóÓúÚüÜñÑ\s]+$/g.test(nombre);

  return expReg
    ? console.info(`"${nombre}", Es un nombre válido`)
    : console.info(`"${nombre}", No es un nombre válido`);
};

//validarNombre();
//validarNombre(4);
//validarNombre("Luis Alberto");
//validarNombre("Lui4s Ignacio");

/*20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */

const validarCorreo = (email = "") => {
  if (!email) return console.warn("No ingresaste un Email.");

  if (typeof email !== "string")
    return console.error(`El dato ingresado ${email}, No es válido`);

  let expReg =
    /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
      email
    );

  return expReg
    ? console.info(`"${email}", Es un email válido`)
    : console.info(`"${email}", No es un email válido`);
};

//validarCorreo();
//validarCorreo(45);
//validarCorreo("lmr69r@gmail.com");
//validarCorreo("lmr69r.@gmail_.com");

/*fusion 19 y 20*/

const evaluarPatron = (cadena = "", patron = undefined) => {
  if (!cadena) return console.warn("No ingresaste una cadena a evaluar.");

  if (typeof cadena !== "string")
    return console.error(`El dato ingresado ${cadena}, No es válido.`);

  if (patron === undefined)
    return console.warn("No ingresaste el patron a evaluar.");

  if (!(patron instanceof RegExp))
    return console.error(`El valor "${patron}", No es un patron válido`);

  let expReg = patron.test(cadena);

  return expReg
    ? console.info(`${cadena}, cumple con el patron ingresado`)
    : console.info(`${cadena}, No cumple con el patron ingresado`);
};

//evaluarPatron();
//evaluarPatron(34);
//evaluarPatron("Luis", 33);
//evaluarPatron("Luis", /^[A-Za-záÁéÉíÍóÓúÚüÜñÑ\s]+$/g);
//evaluarPatron(
// "lmr69rgmail.com",
///[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
//);

/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].*/

const devolverCuadrado = (arr = undefined) => {
  if (arr === undefined) return console.warn("No ingresaste un arreglo.");

  if (!(arr instanceof Array))
    return console.error("El dato ingresado no es un arreglo.");

  if (arr.length === 0) return console.warn("El arreglo no puede estar vacío");

  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor = ${num} no es un número.`);
  }

  const newArray = arr.map((el) => el * el);

  return console.info(
    `Arreglo original: ${arr}, Arreglo elvedado al cuadrado: ${newArray}`
  );
};

//devolverCuadrado();
//devolverCuadrado("Santa");
//devolverCuadrado([]);
//devolverCuadrado(["chilindrina", 2, 3]);
//devolverCuadrado([1, 2, 3, 4]);

/*22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].*/

const arrayMinMax = (arr = undefined) => {
  if (arr === undefined) return console.warn("No ingresaste un arreglo.");

  if (arr.length === 0)
    return console.error("El arreglo no puede estar vacío.");

  if (!(arr instanceof Array))
    return console.error("El dato ingresado no es un arreglo.");

  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor: ${num} no es un número.`);
  }

  return console.info(
    `Arreglo original ${arr}\n Valor Máximo: ${Math.max(
      ...arr
    )}\n Valor Mínimo: ${Math.min(...arr)}`
  );
};

//arrayMinMax();
//arrayMinMax("string");
//arrayMinMax([]);
//arrayMinMax(["cuarentena", 2, 3]);
//arrayMinMax([-4, 5, 8, 200]);

/*23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.*/

const separarParImpar = (arr = undefined) => {
  if (arr === undefined) return console.warn("No ingresaste un arreglo.");

  if (arr.length === 0) return console.warn("El arreglo no puede estar vacío.");

  if (!(arr instanceof Array))
    return console.error("El dato ingresado no es un arreglo.");

  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor ingresado "${num}", no es un número.`);
  }
  return console.info({
    Arreglo: arr,
    Pares: arr.filter((num) => num % 2 === 0),
    Impares: arr.filter((num) => num % 2 === 1),
  });
};

//separarParImpar();
//separarParImpar([]);
//separarParImpar({});
//separarParImpar([4, 6, "No es un numero"]);
//separarParImpar([1, 2, 3, 4]);

/*La expresión regular que uso para el email en este video /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i */

/*24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.*/

const ordenarArreglo = (arr = undefined) => {
  if (arr === undefined) return console.warn("No ingresaste un arreglo");

  if (!(arr instanceof Array))
    return console.error("El dato ingresado no es un arreglo.");

  if (arr.length === 0) return console.error("El arreglo no puede estar vacío");

  for (let num of arr) {
    if (typeof num !== "number")
      return console.warn(`El valor ingresado "${num}", no es un número`);
  }

  return console.info({
    Arreglo: arr,
    Ascendente: arr.map((el) => el).sort(),
    Descendente: arr
      .map((el) => el)
      .sort()
      .reverse(),
  });
};

//ordenarArreglo();
//rdenarArreglo("Si");
//ordenarArreglo([]);
//ordenarArreglo([1, 2, 3, "colado"]);
//ordenarArreglo([7, 5, 7, 8, 6]);

/*25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].*/

const quitarDuplicados = (arr = undefined) => {
  if (arr === undefined) return console.warn("No ingresaste un arreglo.");

  if (arr.length === 0)
    return console.error("El arreglo no puede estar vacío.");

  if (arr.length === 1)
    return console.warn("El arreglo debe tener por lo menos 2 elementos.");

  if (!(arr instanceof Array))
    return console.error("El dato ingresado no es un arreglo.");

  return console.info({
    Original: arr,
    SinDuplidados: arr.filter(
      (value, index, self) => self.indexOf(value) === index
    ),
  });
};

//quitarDuplicados();
//quitarDuplicados("No");
//quitarDuplicados([]);
//quitarDuplicados([true]);
//quitarDuplicados([true, false, false, 2, 4, 2, "yo"]);

const sacarDuplicados = (arr = undefined) => {
  if (arr === undefined) return console.warn("No ingresaste un arreglo.");

  if (arr.length === 0)
    return console.error("El arreglo no puede estar vacío.");

  if (arr.length === 1)
    return console.warn("El arreglo debe tener por lo menos 2 elementos.");

  if (!(arr instanceof Array))
    return console.error("El dato ingresado no es un arreglo.");

  return console.info({
    Original: arr,
    SinDuplidados: [...new Set(arr)],
  });
};
//sacarDuplicados();
//sacarDuplicados([]);
//sacarDuplicados("verde");
//sacarDuplicados([[]]);
//sacarDuplicados([2, 3, 2, true, {}, true]);

/*26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.*/

const promedio = (arr = undefined) => {
  if (arr === undefined) return console.warn("No ingresaste un arreglo.");

  if (arr.length === 0) return console.warn("El arreglo no puede estar vacío.");

  if (!(arr instanceof Array))
    return console.error("El dato ingresado no es un arreglo");

  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El dato ingresado "${num}", no es un número.`);
  }
  return console.info(
    arr.reduce((total, num, index, arr) => {
      total += num;
      if (index === arr.length - 1) {
        return `El promedio de ${arr.join(" + ")} es ${total / arr.length}`;
      } else {
        return total;
      }
    })
  );
};

//promedio();
//promedio([]);
//promedio(true);
//promedio([48, 3, 5, false]);
//promedio([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

/*27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
Todos los datos del objeto son obligatorios.
Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los
7 restantes números.
Valida que el título no rebase los 100 caracteres.
Valida que el director no rebase los 50 caracteres.
Valida que el año de estreno sea un número entero de 4 dígitos.Valida que el país o paises sea introducidos en forma de arreglo.
Valida que los géneros sean introducidos en forma de arreglo.
Valida que los géneros introducidos esten dentro de los géneros aceptados*.
Crea un método estático que devuelva los géneros aceptados*.
Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
Crea un método que devuelva toda la ficha técnica de la película.
Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica
de cada película.

Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.*/

class Pelicula {
  constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }

  static get listaGeneros() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  static generosAceptados() {
    return console.info(
      `Los géneros aceptados son: ${Pelicula.listaGeneros.join(", ")}`
    );
  }

  validarCadena(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" está vacío.`);

    if (typeof valor !== "string")
      return console.error(
        `${propiedad} "${valor}" ingresado no es una cadena de texto.`
      );

    return true;
  }

  validarPais(pais) {
    this.validarArreglo("País", pais);
  }

  validarGeneros(generos) {
    if (this.validarArreglo("Géneros", generos)) {
      for (let genero of generos) {
        //console.log(genero, Pelicula.listaGeneros.includes(genero));
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(`Género/s incorrecto/s "${generos.join(", ")}"`);
          Pelicula.generosAceptados();
        }
      }
    }
  }

  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.error(
        `${propiedad} "${valor}" exede el número de caracteres permitidos ${longitud}.`
      );

    return true;
  }

  validarNumero(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}"  está vacío.`);

    if (typeof valor !== "number")
      return console.error(
        `${propiedad} "${valor}" ingresado no es un número.`
      );

    return true;
  }

  validarArreglo(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}", está vacío.`);
    if (!(valor instanceof Array))
      return console.error(
        `${propiedad} "${valor}" ingresado, no es un arreglo.`
      );

    if (valor.length === 0)
      return console.error(`${propiedad} "${valor}" no tiene datos.`);

    for (let cadena of valor) {
      if (typeof cadena !== "string")
        return console.error(
          `El valor ingresado "${cadena}", no es una adena de texto.`
        );
    }
    return true;
  }

  validarIMDB(id) {
    if (this.validarCadena("IMDB id", id))
      if (!/^([a-z]){2}([0-9]){7}$/.test(id))
        return console.error(
          `IMDB id "${id}", no es válido, debe tener 9 caracteres: 2 letras minúsculas y 7 números.`
        );
  }

  validarTitulo(titulo) {
    if (this.validarCadena("Título", titulo))
      this.validarLongitudCadena("Título", titulo, 100);
  }

  validarDirector(director) {
    if (this.validarCadena("Director", director))
      this.validarLongitudCadena("Director", director, 50);
  }

  validarEstreno(estreno) {
    if (this.validarNumero("Año de estreno", estreno))
      if (!/^([0-9]){4}$/.test(estreno))
        return console.error(
          `Año de estreno "${estreno}", no es válido, debe ser un número de 4 dígitos.`
        );
  }
  validarCalificacion(calificacion) {
    if (this.validarNumero("Calificación", calificacion))
      return calificacion < 0 || calificacion > 10
        ? console.error("La calificación debe estar en un rango entre 0 y 10")
        : (this.calificacion = calificacion.toFixed(1));
  }

  fichaTecnica() {
    console.info(
      `Ficha Técnica:\nTítulo: "${this.titulo}"\nDirector: "${
        this.director
      }"\nAño: "${this.estreno}"\nPaís: "${this.pais.join(
        "-"
      )}"\nGéneros: "${this.generos.join(", ")}"\nCalificación: "${
        this.calificacion
      }"\nIMDB id: "${this.id}"`
    );
  }
}

//Pelicula.generosAceptados();

/*  const peli = new Pelicula({
        id: "tt2737337",
        titulo: "The walking dead",
        director: "charlie sheen",
        estreno: 2025,
        pais: ["EEUU"],
        generos: ["Comedy"],
        calificacion: 5,
      });

      peli.fichaTecnica(); */

const misPelis = [
  {
    id: "tt2737337",
    titulo: "The walking dead",
    director: "charlie sheen",
    estreno: 2025,
    pais: ["EEUU"],
    generos: ["Comedy"],
    calificacion: 5,
  },
  {
    id: "tt3456788",
    titulo: "Top Gun",
    director: "Tom Cruise",
    estreno: 1985,
    pais: ["EEUU"],
    generos: ["Action"],
    calificacion: 10,
  },
  {
    id: "tt9999999",
    titulo: "Rocky",
    director: "Silvester Stallone",
    estreno: 1980,
    pais: ["Estados Unidos"],
    generos: ["Drama"],
    calificacion: 10,
  },
];

//misPelis.forEach((el) => new Pelicula(el).fichaTecnica());
