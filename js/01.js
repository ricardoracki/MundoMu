$(document).ready(function(){

	function criarItem(name, addres){
		var s = "<li><a href='#simulador' class='linkitens floatapp'>" + name + "<span class='imgitens'><img src = '" + addres + "'/></span></a></li>";
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
			if (valordig < 50){
				pacote = 0;
				bonus = 0;
				vip = "";
			} else {
				$("#display2").html('<span class = "titulos" ><b> Itens brinde: </b></span>');

			}			

		 	if ( valordig >= 50 && valordig <= 59) {
		 		pacote = 1;
		 		bonus = 15;
		 		vip = "";
		 		itensbrinde = asaNovato;
		 		
			}

			if (valordig >= 60 && valordig <= 99) {
		 		pacote = 2;
		 		bonus  = 25;
		 		vip = " + 60 dias Vip Ouro";
		 		itensbrinde = evilMaineShild + asaNovato;
		 	}

		 	if (valordig >= 100) {
		 		pacote = 3;
		 		bonus  = 35;
		 		vip = " + 90 dias Vip Ouro";
		 		itensbrinde = evilMaineShild + asaNovato + evilMaineShild;
		 	}
		 
		 	

		    creditos = (+valordig) + (+bonus);

		   var mensagem1 = "<span class = 'titulos' ><b> Ganho em créditos:</b></span><br />Promoção "+ promoname + "<br />Válida até " + promovalidate + "<br>  Receberá " + creditos + " Créditos<br> " + vip;
			
			//$("#valordig").val(''); // limpa edit
			$("#display2").html(mensagem1);

			
			if (itensbrinde !== undefined){

			var brindes = "<span class = 'titulos' ><b> Itens brinde: </b></span><ul class = 'listaitens'>"+itensbrinde+"</ul>"; //texto de brindes

			$("#display3").html(brindes); //mostra itens brinde

			} else {
				$("#display3").html('<span class = "titulos" ><b> Itens brinde: </b></span>')
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
