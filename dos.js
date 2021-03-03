/*
Enunciado:2

Realizar el algoritmo que permita ingresar los datos de los alumnos de una division de la UTN FRA, los datos solicitados son:
nombre
Tipo curasada("libre";"presencial";"remota")
cantidad de materias( mas de cero y menos de 8)
Sexo ( femenino , masculino , no binario)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio que no sea masculino
b) El nombre del mas joven de los alumnos entre los que la dan libre
c) El promedio de nota por sexo
d) La edad y nombre del que cursa mas materias que no sean en forma remota*/
function mostrar()
{
	let nombreING;
	let tipoCursadaING;
	let cantidadMateriasING;
	let sexoING;
	let notaPromedioING;
	let edadING;
	let respuesta;

  let nombreMejorProm; // A)
  let maxMejorProm;
  let flagMejorProm = 0;

	let flagJoven = 0; // B)
	let NombreDelMasJoven;
	let MinEdadJoven;

	let acumuladorNotaF = 0; // C)
	let acumuladorNotaM = 0;
	let acumuladorNotaNB = 0;

	let contadorF = 0;
	let contadorM = 0;
	let contadorNB = 0;

	let promedioF;
	let promedioM;
	let promedioNB;

	let edadMasMateriasRemotas; //D)
	let nombreMasMateriasRemotas;
	let maxMateriasRemotas;
	let flagRemota = 0;

	do
	{
		nombreING = prompt ("Ingrese nombre.");
		while(isNaN(nombreING)==false ||nombreING == "")
		{
			nombreING = prompt ("invalido.Ingrese nombre.");
		}
		tipoCursadaING = prompt("Ingrese tipo de cursada. (libre ; presencial ; remota):");
		while(tipoCursadaING != "libre" && tipoCursadaING != "presencial" && tipoCursadaING != "remota" )
		{
			tipoCursadaING = prompt("INVALIDO. Ingrese tipo de cursada. (libre ; presencial ; remota):");
		}
		cantidadMateriasING = parseInt (prompt("Ingrese cantidad de materias. +0 y menos de 8"));
		while(cantidadMateriasING < 1 || cantidadMateriasING > 8 || isNaN(cantidadMateriasING) == true)
		{
			cantidadMateriasING = parseInt (prompt("INVALIDO. Ingrese cantidad de materias. +0 y menos de 8"));
		}
		sexoING = prompt("Ingrese sexo. ( femenino , masculino , no binario)");
		while (sexoING != "femenino" && sexoING != "masculino" && sexoING != "no binario")
		{
			sexoING = prompt("INVALIDO. Ingrese sexo. ( femenino , masculino , no binario)");
		}
		notaPromedioING = parseInt(prompt("Ingrese su nota promedio (entre 0 y 10)"));
		while(notaPromedioING < 1 || notaPromedioING > 10 || isNaN(notaPromedioING )== true)
		{
			notaPromedioING = parseInt(prompt("INVALIDO. Ingrese su nota promedio (entre 0 y 10)"));
		}
		edadING= parseInt(prompt("Ingrese su edad. +0 -50"));
		while (edadING < 1 || edadING > 50 || isNaN(edadING) ==true )
		{
			edadING= parseInt(prompt("INVALIDO. Ingrese su edad. +0 -50"));
		}
   
		switch(sexoING)
		{
			case "femenino":
				contadorF++;
				acumuladorNotaF += notaPromedioING;
			break;

			case "masculino":
				contadorM++;
				acumuladorNotaM += notaPromedioING;
			break;

			case "no binario":
				contadorNB++;
				acumuladorNotaNB += notaPromedioING;
			break
		}

    if(sexoING != "masculino")// A)
    { 
      if (flagMejorProm == 0 || notaPromedioING > maxMejorProm) 
      {
        maxMejorProm = notaPromedioING;
        nombreMejorProm = nombreING;
        flagMejorProm++;
      }
    }

		if(tipoCursadaING == "libre") // B)
		{
			if(flagJoven == 0 || edadING < MinEdadJoven)
			{
				MinEdadJoven = edadING;
				NombreDelMasJoven = nombreING;
				flagJoven++;
			}
		}

		if (tipoCursadaING != "remota") // D)
		{
			if(flagRemota == 0 || cantidadMateriasING > maxMateriasRemotas)
			{
				maxMateriasRemotas = cantidadMateriasING;
				edadMasMateriasRemotas = edadING;
				nombreMasMateriasRemotas = nombreMasMateriasRemotas;
				flagRemota++;
			}
		}

		respuesta = confirm ("Desea ingresar mas alumnos?")
	}while(respuesta == true);

  if(sexoING != "masculino") // A)
  {
    document.write ("A) Nombre de la mejor nota promedio que no sea masculino: "+nombreMejorProm+"<br>");
  }
  else
  {
    document.write ("A) Solo se ingresaron personas masculinas."+"<br>");
  }

  if(tipoCursadaING == "libre") // B)
	{
    document.write ("B) Nombre del mas joven de los alumnos entre los que la dan libre: "+NombreDelMasJoven+"<br>");
  }
  else
  {
    document.write ("B) No hay personas cursando la materia libre."+"<br>");
  }

	if(contadorF != 0) // C)
	{
		promedioF = acumuladorNotaF / contadorF;
		document.write ("C)promedio femenino: "+ promedioF+"<br>");
	}
	else if(contadorM != 0)
	{
		promedioM = acumuladorNotaM / contadorM;
		document.write ("C)promedio masculino: "+ promedioM+"<br>");
	}
	else if(contadorNB != 0)
	{
		promedioNB = acumuladorNotaNB / contadorNB;
		document.write ("C)promedio no bianrio: "+ promedioNB+"<br>");
	}

  if (tipoCursadaING != "remota") //D)
  {
    document.write ("D) Edad menor cant mat no remotas: "+ edadMasMateriasRemotas+" nombre: "+nombreMasMateriasRemotas+"<br>");
  }
  else
  {
    document.write ("D) No hay cursantes de materias que no sean en forma remota."+"<br>");
  }

		

    
	  
	  
  


}



