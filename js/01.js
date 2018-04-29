$(document).ready(function(){
	
	$("#calcular").click(function executar(){
		 var valordig = document.getElementById("Valordig").value;
		 var promoname = "MundoMu"
		 var fator;
		 var pacote;
		 var vip;
		 var promovalidate = "31/12/2018";
		 var itensbrinde;
		 var creditos;
		 
		 var evilMaineShild = "<li><a href='#' class='linkitens'>Escudo Evill Maine<span><img src = 'img/hell maine shild.png'/></span></a></li>";
		if (valordig >0){
		 if ( valordig < 20) {
		 	itensbrinde = evilMaineShild;
		 	pacote = 1;
		 	fator  = 2;
		 	
		 }
		  if (valordig > 20) {
		 	itensbrinde = evilMaineShild + evilMaineShild;
		 	pacote = 2;
		 	fator  = 3;
		 	

		 }
		 
		   var creditos = (valordig * fator);
		   var mensagem = ("Promoção "+promoname+"<br>Válida até "+promovalidate+"<br>Depositando R$"+valordig+ " Receberá "+creditos+" gold's<br>Itens brinde:<ul class='listaitens'>"+itensbrinde+"</ul>");
		
		document.getElementById("Valordig").value='';
		
		var div = document.getElementById("resp");
		
		div.innerHTML = mensagem;
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
