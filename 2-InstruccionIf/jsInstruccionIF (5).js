function mostrar()
{
//tomo la edad  
var edad1;
var mensaje;

 edad1=edad.value;
 edad1=parseInt(edad1);

 if(edad1>12 && edad1<18)
 {
 	mensaje=("");
 }
 else
 {
 	mensaje=("Usted No es adolecente");
 }

 alert(mensaje);


}//FIN DE LA FUNCIÓN