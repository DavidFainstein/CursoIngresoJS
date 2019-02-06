/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//· PRIMER COMANDO DE CONSOLA    ·/

	var import1;
	var descuento;
	var valor;

	import1=importe.value;
	import1=parseInt(import1);

	valor=import1*10/100;

	descuento=import1-valor;

    resultado.value=descuento;


}
