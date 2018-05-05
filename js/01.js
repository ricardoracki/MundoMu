$(document).ready(function(){

	function criarItem(name, addres){
		var s = "<li><a href='#' class='linkitens floatapp'>" + name + "<span class='imgitens'><img src = '" + addres + "'/></span></a></li>";
		return s;

	}
	
	$("#valordig").keyup(function executar(){
		 var valordig = ($("#valordig").val()).substr(2);
		 var promoname = "MundoMu";
		 var fator;
		 var pacote;
		 var vip;
		 var promovalidate = "31/12/2018";
		 var itensbrinde;
		 var creditos;
		 var brindeAdicoinal;
		 var bonus;
		 
		 var evilMaineShild = criarItem("Escudo Evill Maine", "img/itens/hell maine shild.png" );
		 var asaNovato = criarItem("Asa Novato", "img/itens/Asa Novato.png");

		$("#valordig").val("R$" + valordig);
		
		 /*

		 *Pacotes

		 */
		if (valordig > 0){

		 	if ( valordig < 20 && valordig < 49) {
		 	//itensbrinde = evilMaineShild;
		 	pacote = 1;
		 	bonus = 10;
		 	
			}

			  if (valordig > 50 && valordig < 99) {
		 	itensbrinde = evilMaineShild;
		 	pacote = 2;
		 	bonus  = 20;
		 	
		 	}

		 		if (valordig > 100) {
		 	itensbrinde = evilMaineShild + asaNovato;
		 	pacote = 2;
		 	bonus  = 50;
		 	
		 	}
		 
		 	

		    creditos = (+valordig) + (+bonus);

		   var mensagem1 = "Promoção "+ promoname + "<br />Válida até " + promovalidate + "<br>  Receberá " + creditos + " Créditos<br> Promoção válida somente para PagSeguro";
			
			//$("#valordig").val(''); // limpa edit
			$("#display2").html(mensagem1)

			
			if (itensbrinde !== undefined){

			var brindes = "<ul class = 'listaitens'>"+itensbrinde+"</ul>"; //texto de brindes

			$("#display3").html(brindes); //mostra itens brinde

			} else {
				$("#display3").html('')
			}



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