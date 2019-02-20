function mostrar()
{
//tomo la edad  
var edad1;
var mensaje;
var estadocivil;

	estadocivil=estadoCivil.value;
	edad1=edad.value;
 	edad1=parseInt(edad1);

 if(edad1<18 && estadocivil!="Soltero")
 {
 	mensaje=("Es muy pequeño para NO ser soltero");
 	
 }
 	else
 	{
 		mensaje=("")
 	}

 alert(mensaje);


	


}//FIN DE LA FUNCIÓN