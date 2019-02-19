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
	Mensaje=("tiene 28 dias");
	break;

	case"Marzo":
	case"Abril":
	case"Junio":
	case"Septiembre":
	case"Noviembre":
	Mensaje=("tiene 30 días");
	break;

	default:
	Mensaje=("tiene 31 dias");
	break;

}

alert(Mensaje);

//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN