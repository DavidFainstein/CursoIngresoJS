/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var import1;
	var aumento;
	var valor;

	import1=sueldo.value;
	import1=parseInt(import1);

	valor=import1*10/100;

	aumento=(valor+import1);

    resultado.value=aumento;




	
}
