/* 
Debemos realizar la carga de una compra de 5(cinco) productos de desinfección
de cada una debo obtener los siguientes datos:
el nombre del producto el tipo de producto (validar "ALCOHOL", "IAC" o "QUAT"),
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
el tipo de inflamable("ignífugo", "combustible", "explosivo" ) y la Marca.
Se debe Informar al usuario lo siguiente:
a) El promedio de cantidad por tipo de producto
b) El tipo de inflamable con más cantidad de unidades en total de la compra
c) Cuántas unidades de IAC con precios menos a 200 (inclusive) se compraron en total
d) la marca y tipo del más caro de los productos
*/ 

// VALENTIN LAPLUME - DIVISION: G - PUNTO (1)

function mostrar()
{
	let tipoProductoING;
	let precioING;
	let unidadesCantidadING;
	let tipoInflamableING;
	let marcaING;

	let acumuladorCantAlcohol = 0; //A)
	let acumuladorCantIac = 0;
	let acumuladorCantQuat = 0;

	let contadorAlcohol = 0;
	let contadorIac = 0;
	let contadorQuat = 0;

	let promedioCantAlcohol;
	let promedioCantIac;
	let promedioCantQuat;

	let acumuladorIgnífugo = 0; // B)
	let acumuladorCombustible = 0;
	let acumuladorExplosivo = 0;
	
	let acumuladorIacMenorPrecio = 0; //C)

	let precioCaro; // D)
	let marcaCaro;
	let tipoCaro;
	let flagCaro = 0;

	for (let i=0; i<5; i++)
	{
		tipoProductoING = prompt("Ingrese producto (ALCOHOL , IAC o QUAT):");
		while (tipoProductoING != "ALCOHOL" && tipoProductoING != "IAC" && tipoProductoING != "QUAT")
		{
			tipoProductoING = prompt ("INVALIDO. Ingrese producto (ALCOHOL , IAC , QUAT):");
		}

		precioING = parseFloat(prompt("Ingrese precio de dicho producto (entre 100 y 300):"));
		while (precioING < 100 || precioING > 300 || isNaN(precioING) == true)
		{
			precioING = parseFloat(prompt("INVALIDO. Ingrese precio de dicho producto (entre 100 y 300)"));
		}
		
		unidadesCantidadING = parseInt(prompt("Ingrese cantidad de unidades. (+0 y menor a 1000):"));
		while(unidadesCantidadING < 1 || unidadesCantidadING > 1000 || isNaN(unidadesCantidadING) == true)
		{
			unidadesCantidadING = parseInt(prompt("INVALIDO. Ingrese cantidad de unidades. (+0 y menor a 1000):"));
		}

		tipoInflamableING = prompt("Ingrese el tipo de inflamable (ignífugo , combustible , explosivo:");
		while(tipoInflamableING!="ignifugo" && tipoInflamableING != "combustible" && tipoInflamableING != "explosivo")
		{
			tipoInflamableING = prompt("INVALIDO. Ingrese el tipo de inflamable (ignífugo , combustible , explosivo:");
		}

		marcaING = prompt("Ingrese la marca de dicho producto:");
		while(isNaN(marcaING) == false || marcaING == "")
		{
			marcaING = prompt("INVALIDO. Ingrese la marca de dicho producto:");
		}
		
		if (flagCaro == 0 || precioING > precioCaro)//D)
		{
			precioCaro = precioING;
			tipoCaro = tipoProductoING;
			marcaCaro = marcaING; 
			flagCaro++;
			
		}

		switch(tipoProductoING)
		{
			case "ALCOHOL":
				contadorAlcohol++;
				acumuladorCantAlcohol += unidadesCantidadING;
			break;

			case "IAC":
				contadorIac++;
				acumuladorCantIac += unidadesCantidadING;
				if (precioING <= 200) // C)
				{
					acumuladorIacMenorPrecio += unidadesCantidadING;
				}
			break;

			case "QUAT":
				contadorQuat++;
				acumuladorCantQuat += unidadesCantidadING;
			break;

		}

		switch(tipoInflamableING)
		{
			case "ignífugo":
				acumuladorIgnífugo += unidadesCantidadING;
			break;

			case "combustible":
				acumuladorCombustible += unidadesCantidadING;
			break;

			case "explosivo":
				acumuladorExplosivo += unidadesCantidadING;
			break;
		}

	} // Fin del ciclo.

	if(contadorAlcohol != 0) // A)
	{
		promedioCantAlcohol = acumuladorCantAlcohol / contadorAlcohol;
		document.write("A) Promedio de ALCOHOL: "+promedioCantAlcohol+"<br>");
	}
	else if (contadorIac != 0)
	{
		promedioCantIac = acumuladorCantIac / contadorIac;
		document.write("A) Promedio de IAC: "+promedioCantIac+"<br>");
	}
	else if (contadorQuat != 0)
	{
		promedioCantQuat = acumuladorCantQuat / contadorQuat;
		document.write("A) Promedio de QUAT: "+promedioCantQuat+"<br>");
	}

	if(acumuladorIgnífugo > acumuladorCombustible && acumuladorIgnífugo > acumuladorExplosivo) // B)
	{
		document.write("B) El tipo inflamable con mas unidades es Ignífugo con: "+acumuladorIgnífugo+"<br>");
	}
	else
	{
		if (acumuladorCombustible > acumuladorIgnífugo && acumuladorExplosivo)
		{
			document.write("B) El tipo inflamable con mas unidades es Combustible con: "+acumuladorCombustible+"<br>");
		}
		else
		{
			document.write("B) El tipo inflamable con mas unidades es Explosivo con: "+acumuladorExplosivo+"<br>");
		}
	}

	// C)
	document.write("C) Total unidades de IAC con precios menos a 200 (inclusive): "+acumuladorIacMenorPrecio+"<br>");
	
	// D)
	document.write("D) Tipo mas caro de los productos: "+tipoCaro+ " y su marca: "+marcaCaro+"<br>");



}
