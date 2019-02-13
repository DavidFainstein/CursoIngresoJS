function mostrar()
{
	var precio;
	var recargo;
	var metododepago;
	var preciofinal;

	precio=elNombre.value;
	precio=parseInt(precio);
	metododepago=laLocalidad.value;
	recargo=parseInt(recargo);

	recargo=precio*10/100;

	preciofinal=precio+recargo;

	alert("el precio del producto en efectivo es: $"+precio+", con tarjeta tiene un recargo del 10% que seria "+recargo+" de recargo, costandole final $"+preciofinal);
   
}
