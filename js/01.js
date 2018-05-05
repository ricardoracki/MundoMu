$(document).ready(function(){

	function criarItem(name, addres){
		var s = "<li><a href='#' class='linkitens floatapp'>" + name + "<span class='imgitens'><img src = '" + addres + "'/></span></a></li>";
		return s;

	}
	
	$("#valordig").keyup(function executar(){
		 var valordig = $("#valordig").val();
		 var promoname = "MundoMu";
		 var fator;
		 var pacote;
		 var vip;
		 var promovalidate = "31/12/2018";
		 var itensbrinde;
		 var creditos;
		 var brindeAdicoinal;
		 
		 var evilMaineShild = criarItem("Escudo Evill Maine", "img/itens/hell maine shild.png" );
		 var asaNovato = criarItem("Asa Novato", "img/itens/Asa Novato.png");

		
		 /*

		 *Pacotes

		 */
		if (valordig >0){

		 	if ( valordig < 20) {
		 	itensbrinde = evilMaineShild;
		 	pacote = 1;
		 	fator  = 2;
		 	
			}

			  if (valordig > 20) {
		 	itensbrinde = evilMaineShild + asaNovato;
		 	pacote = 2;
		 	fator  = 3;
		 	
		 	}
		 
		    creditos = (valordig * fator);

		   var mensagem1 = "Promoção "+ promoname + "<br />Válida até " + promovalidate + "<br>  Receberá " + creditos + " gold's<br>";
			
			//$("#valordig").val(''); // limpa edit
			$("#display2").html(mensagem1)

			var brindes = "<ul class = 'listaitens'>"+itensbrinde+"</ul>"; //texto de brindes

			$("#display3").html(brindes); //mostra itens brinde

			



		}
		   
	
	
	});
	
	
	
});
 function SomenteNumero(e){
    var tecla=(window.event)?event.keyCode:e.which; 
    if((tecla>47 && tecla<58)) return true;
    else{
	if (tecla==8 || tecla==0 )return true;
	else  return false;
	}
}