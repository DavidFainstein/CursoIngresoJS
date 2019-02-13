function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numerorandom;
	var mensaje;

	numerorandom=Math.floor((Math.random() * 10) + 1);
	mensaje="";

	//alert(numerorandom);
	console.log(numerorandom);

	 if (numerorandom>=9)
	 {
	 	mensaje="EXCELENTE"
	 	else
	 	{
	 		if(numerorandom>4)
	 		{
	 			mensaje="APROBADO"
	 			else
	 			{
	 				mensaje="Vamos, la proxima se puede"
	 			}
	 		}
	 	}
	 }
	


}//FIN DE LA FUNCIÓN