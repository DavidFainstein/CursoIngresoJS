/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1;
	var numero2;
	var suma;

	numero1=numeroUno.value;
	numero1=parseInt(numero1);
	numero2=numeroDos.value;
	numero2=parseInt(numero2);


	suma=numero1+numero2;
	alert("la suma es: "+suma);
	
}

function restar()
{
	var numero1;
	var numero2;
	var resta;

	numero1=numeroUno.value;
	numero1=parseInt(numero1);
	numero2=numeroDos.value;
	numero2=parseInt(numero2);


	resta=numero1-numero2;
	alert("la resta es: "+resta);
	
}

function multiplicar()
{ 
	var numero1;
	var numero2;
	var multip;

	numero1=numeroUno.value;
	numero1=parseInt(numero1);
	numero2=numeroDos.value;
	numero2=parseInt(numero2);


	multip=(numero1*numero2);
	alert("la multiplicacion es: "+multip);

	
}

function dividir()
{

	var numero1;
	var numero2;
	var div;

	numero1=numeroUno.value;
	numero1=parseInt(numero1);
	numero2=numeroDos.value;
	numero2=parseInt(numero2);


	div=(numero1/numero2);
	alert("la division es: "+div);
	
}

