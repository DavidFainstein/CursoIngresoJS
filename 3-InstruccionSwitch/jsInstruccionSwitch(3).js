function mostrar()
{
//tomo la edad  
var mesDelAño;
var Mensaje;

mesDelAño=mes.value;
console.log(mesDelAño);

switch(mesDelAño)
{
	case"Febrero":
	Mensaje=("Este mes no tiene más de 29 días");
	break;
	default:
	Mensaje=("Este mes tiene 30 o más días");
	break;

}

alert(Mensaje);
//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN