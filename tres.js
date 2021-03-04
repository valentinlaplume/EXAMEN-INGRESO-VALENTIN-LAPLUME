/* 
Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Mar del Plata con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
estado civil ("soltero", "casado" o "viudo"),
edad( solo mayores de edad, mas de 17),
temperatura corporal(validar por favor)
y sexo (validar).
NOTA:el precio por pasajero es de $600.
Se debe informar (solo si corresponde):
a) La cantidad de personas con estado "viudo" de mas de 60 años.
b) el nombre y edad de la mujer soltera mas joven.
c) cuanto sale el viaje total sin descuento.
d) si hay mas del 50% del pasaje que tiene mas de. 60 años , el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
Curso de ingreso UTN FRA
*/
// VALENTIN LAPLUME - DIVISION: G - PUNTO (3)

function mostrar()
{
	let nombreING;
	let estadoCivilING;
	let edadING;
	let temperaturaING;
	let sexoING;
	let respuesta;

	let precioInicial = 600;
	let precioBruto;
	let contadorTotalPasajeros = 0; //c)

	let contadorF = 0;
	let contadorM = 0;

	let contadorViejo = 0;

	let flagMujerJoven = 0;
	let nombreMujerJoven;
	let edadMujerJoven;

	let porcentajeTotal;
	let descuento;
	let precioConDescuento;




	do
	{
		nombreING = prompt("Ingrese tu nombre.")
		while(isNaN(nombreING)==false || nombreING == "")
		{
			nombreING = prompt("INVALIDO. Ingrese tu nombre.")
		}

		estadoCivilING = prompt("Ingrese su estado civil (soltero, casado o viudo)");
		while (estadoCivilING != "soltero" && estadoCivilING != "casado" && estadoCivilING != "viudo")
		{
			estadoCivilING = prompt("INVALIDO. Ingrese su estado civil (soltero, casado o viudo)");
		}

		edadING = parseInt(prompt("INgrese su edad. +17"))
		while(edadING < 18 || isNaN(edadING)== true)
		{
			edadING = parseInt(prompt("INVALIDO. Ingrese su edad. +17"))
		}

		temperaturaING = parseInt(prompt("Ingrese su temperatura corporal. +35° y menor a 41°"))
		while (temperaturaING < 36 || temperaturaING > 40 || isNaN (temperaturaING)==true)
		{
			temperaturaING = parseInt(prompt("INVALIDO. Ingrese su temperatura corporal. +35° y menor a 41°"))
		}

		sexoING = prompt("Ingrese su sexo. (f o m)");
		while (sexoING != "f" || sexoING != "m" && isNaN(sexoING) == false)
		{
			sexoING = prompt("INVALIDO. Ingrese su sexo. (f o m)");
		}

		switch (estadoCivilING) 
		{
			case "soltero":
				if (sexoING == "f")
				{
					if (flagMujerJoven == 0 || edadING < edadMujerJoven) // B)
					{
						edadMujerJoven = edadING;
						nombreMujerJoven = nombreING;
						flagMujerJoven++;
					}
				}
				
			break;
			case "casado":
				
			break;
			case "viudo":
				if (edadING > 60)//A)
				{
					contadorViejo++;

				}
				
			break;

		}

		if (sexoING == "f")
		{
			contadorF++;
		}
		
		if (sexoING == "m")
		{
			contadorM++;
		}

		contadorTotalPasajeros += contadorF + contadorM //C)

		respuesta = confirm("Desea ingresar mas pasajeros?");
	}while(respuesta==true); // FIN CICLO.


	precioBruto = precioInicial * contadorTotalPasajeros //C)

	if (edadING > 60) // A)
	{
		document.write("A) Cantidad mayores de 60 viudos: "+ contadorViejo+"<br>");
	}
	else
	{
		document.write("A) No hay mayores de 60 viudos"+"<br>");
	}

	if (flagMujerJoven != 0) //B)
	{
		document.write("B) Nombre mujer soltera mas joven: "+nombreMujerJoven +" su edad: "+edadMujerJoven+"<br>");
	}
	else
	{
		document.write("B) No hay mujeres solteras."+"<br>");
	}

	if (contadorViejo != 0)
	{	
		porcentajeTotal = ((contadorViejo * 100) / contadorTotalPasajeros); 
		if (porcentajeTotal > 50) // D)
		{
			descuento = 25;
			precioConDescuento = precioBruto - (precioBruto * descuento);
			document.write("D) Precio Con descuento por ser de la tercera edad: $"+precioConDescuento+"<br>");

		}
		else
		{
			document.write("D) No hay mas de la mitad de personas de la tercera edad");
		}
	}

	document.write("B) Precio total en bruto: $"+precioBruto+"<br>"); //C)
	
}
