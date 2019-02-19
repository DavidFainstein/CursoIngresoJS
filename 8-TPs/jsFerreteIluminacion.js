/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidadLamparas;
 	var precioDescuento;
 	var marca;
 	var precioBruto;
 	var descuento;

 	cantidadLamparas=document.getElementById("cantidad").value;
 	marca=document.getElementById("marca").value;
 	precioBruto=cantidadLamparas*35;

 	/*switch(cantidadLamparas), singifica "interructor", me va a redirigir, segun el valor dentro de(), se usa menos procesador.
{
	case "5": valores literarios. NO se usa > o <, ya que no usa logica.
	
 		if(marca=="ArgentinaLuz")
 		{
 			descuento=60;
 		}
 		else
 		{
 			descuento=30;
 	    } 
 	    brwak;

 	    o

 	    {
 	    	cae "Argentinaluz":
 	    	 descuento=60;
 	    	 break;
 	    	 case"felipelamparas":
 	    	 descuento=70;
 	    	 break;// break rompe la instruccion.
	
 	    }

	break;
	case 4 :los case, no llevan llave.

}*/
 	if(cantidadLamparas>5)
 	{ 
 		descuento=precioBruto*50/100
 		precioDescuento=precioBruto-descuento
 		console.log(precioDescuento);
 	}	
 	else 
 	{
 		if(cantidadLamparas==5)
 		{   
 		if(marca=="ArgentinaLuz")
 		{
 			descuento=60;

 			//descuento=precioBruto*40/100, la cuenta tambien la tendria que sacar y remplazar por (decuento=50; o  "si fuese 40 %" seria descuento=60)
 		//precioDescuento=precioBruto-descuento, otra linea repetida, para sacar.
 		//console.log(precioDescuento); los tendriamos que sacar y funcionar igual.
 		}
 		} 
 	}	
 	else
 	{
 			descuento=30;
 	}

 			else 
 			{
 				descuento=20;
 			}

 		}//if lamparas =4

 		if (cantidadLamparas==3) 
 		{
 			if(marca=="ArgentinaLuz")
 			{
 				descuento=15;
 			} 
 			if (marca=="FelipeLamparas") 
 			{
 				descuento=10;
 			}
 			else 
 			{
 				descuento=5;
 			}
 		}//if lamparas =3






 	}//if lamparas>5



}
