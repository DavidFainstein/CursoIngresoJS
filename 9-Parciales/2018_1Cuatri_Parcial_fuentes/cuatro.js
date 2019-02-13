function mostrar()
{
	var producto1;
	var preciodelproducto;
	var descuento;
	var descadd;
	var metododepago;
	var preciofinal;
	var recargo;
	var mensaje;

	producto1=prompt("ingrese la cantidad de productos que desea comprar","");
	producto1=parseInt(producto1);
	preciodelproducto=prompt("ingrese el valor del producto","");
	preciodelproducto=parseInt(preciodelproducto);

	mensaje="precio a pagar es de $";

	if(producto1>2)
	{ 
		descuento=preciodelproducto*10/100;
		preciofinal=preciofinal-descuento;

	 else(preciodelproducto>1999) 
	 {  

	 	descadd=preciodelproducto*15/100;
		preciofinal=preciofinal-descadd;
	 }	

	  alert(mensaje+preciofinal);

	}	
		metododepago=prompt("ingrese metodo de pago, ya sea tarjeta o efectivo","");

		if(metododepago=="tarjeta")
		{	

			recargo=preciofinal*10/100;
			preciofinal=preciofinal+recargo;

			alert(mensaje+preciofinal);


		}	





}
