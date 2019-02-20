function mostrar()
{
//tomo la edad  
var edad1;
var mensaje;

 edad1=edad.value;
 edad1=parseInt(edad1);

 if(edad1>12 && edad1<18)
 {
 	mensaje=("Usted es Adolescente");
 }
 else
 {
 	if(edad1>17)
 	{
 		mensaje=("Usted es Mayor de edad");
 	}
 	else
 		{
 			mensaje=("Usted es un niño");
 		}
 	
 }

 alert(mensaje);




}//FIN DE LA FUNCIÓN