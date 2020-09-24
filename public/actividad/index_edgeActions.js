/***********************
* Acciones de composición de Adobe Edge Animate
*
* Editar este archivo con precaución, teniendo cuidado de conservar 
* las firmas de función y los comentarios que comienzan con "Edge" para mantener la 
* capacidad de interactuar con estas acciones en Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // los alias más comunes para las clases de Edge

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // introducir aquí código que se debe ejecutar cuando la composición está totalmente cargada
         Preguntas=(["preg_1","preg_2","preg_3","preg_4","preg_5"]);
         
         
         Preguntas=  Preguntas.sort(function() {return Math.random() - 0.5});
         Posicion=0;
         Correctas=0;
         Siguiente="";
         seleccionadas=[];
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3530, function(sym, e) {
         // introducir código aquí
         Posicion=0;
         sym.$(Preguntas[0]).show("slide", { direction: "right" }, 1000);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // introducir código aquí
         Siguiente="preg2";
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_si}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         // Mostrar un elemento 
         sym.$("si_sobre").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_si}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         // Ocultar un elemento 
         sym.$("si_sobre").hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_si}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         switch(Preguntas[Posicion]) {
             case 'preg_1':
         		if(sym.getSymbol("resp").$("resp_1").is(":visible")){
         		seleccionadas[Posicion]="si";
         		var pro=Posicion+1;
         		sym.$('bien_'+pro).attr('src','images/bien_'+pro+'.svg');	
         		sym.$('bien_'+pro).show();
         
         		Correctas++;
         		// Reproducir una pista de audio 
         		sym.$("success")[0].play();
         
             }else{
         		// Mostrar un elemento 
         		seleccionadas[Posicion]="no";
         		var pro=Posicion+1;
         		sym.$('bien_'+pro).attr('src','images/mal_'+pro+'.svg');	
         		sym.$('bien_'+pro).show();
         		sym.$("fail")[0].play();
             } 
            sym.play(Siguiente);   
         	break;
         	case 'preg_2':
         		if(sym.getSymbol("resp").$("resp_2").is(":visible")){
         		seleccionadas[Posicion]="si";
         		var pro=Posicion+1;
         		sym.$('bien_'+pro).attr('src','images/bien_'+pro+'.svg');	
         		sym.$('bien_'+pro).show();
         		Correctas++;
         		// Reproducir una pista de audio 
         		sym.$("success")[0].play();
         
             }else{
         		// Mostrar un elemento 
         		seleccionadas[Posicion]="no";
         		var pro=Posicion+1;
         		sym.$('bien_'+pro).attr('src','images/mal_'+pro+'.svg');	
         		sym.$('bien_'+pro).show();	
         		sym.$("fail")[0].play();
             }    
             sym.play(Siguiente);  
         	break;
         	case 'preg_3':
         		if(sym.getSymbol("resp").$("resp_3").is(":visible")){
         		seleccionadas[Posicion]="si";
         		var pro=Posicion+1;
         		sym.$('bien_'+pro).attr('src','images/bien_'+pro+'.svg');	
         		sym.$('bien_'+pro).show();
         		Correctas++;
         		// Reproducir una pista de audio 
         		sym.$("success")[0].play();
         
             }else{
         		// Mostrar un elemento 
         		seleccionadas[Posicion]="no";
         		var pro=Posicion+1;
         		sym.$('bien_'+pro).attr('src','images/mal_'+pro+'.svg');	
         		sym.$('bien_'+pro).show();		
         		sym.$("fail")[0].play();
             }    
             sym.play(Siguiente);  
         	break;
         	case 'preg_4':
         		if(sym.getSymbol("resp").$("resp_4").is(":visible")){
         		seleccionadas[Posicion]="si";
         		var pro=Posicion+1;
         		sym.$('bien_'+pro).attr('src','images/bien_'+pro+'.svg');	
         		sym.$('bien_'+pro).show();
         		Correctas++;
         		// Reproducir una pista de audio 
         		sym.$("success")[0].play();
         
             }else{
         		seleccionadas[Posicion]="no";
         		// Mostrar un elemento 
         		var pro=Posicion+1;
         		sym.$('bien_'+pro).attr('src','images/mal_'+pro+'.svg');	
         		sym.$('bien_'+pro).show();		
         		sym.$("fail")[0].play();
             }    
             sym.play(Siguiente);  
         	break;
         	case 'preg_5':
         		if(sym.getSymbol("resp").$("resp_5").is(":visible")){
         		seleccionadas[Posicion]="si";
         		var pro=Posicion+1;
         		sym.$('bien_'+pro).attr('src','images/bien_'+pro+'.svg');	
         		sym.$('bien_'+pro).show();	
         		Correctas++;
         		// Reproducir una pista de audio 
         		sym.$("success")[0].play();
         
             }else{
         		// Mostrar un elemento 
         		seleccionadas[Posicion]="no";
         		var pro=Posicion+1;
         		sym.$('bien_'+pro).attr('src','images/mal_'+pro+'.svg');	
         		sym.$('bien_'+pro).show();		
         		sym.$("fail")[0].play();
             }    
             sym.play(Siguiente);  
         	break;
          }  

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4161, function(sym, e) {
         
         
         for (var i=0; i<4; i++) {
         var pro=i+1;
         if (seleccionadas[i]=="si"){
         		sym.$('bien_'+pro).attr('src','images/bien_'+pro+'.svg');    
         	}else{
         		sym.$('bien_'+pro).attr('src','images/mal_'+pro+'.svg');    
         	}
         }
         Posicion=1;
         //Siguiente="preg3";
         sym.$(Preguntas[1]).show("slide", { direction: "right" }, 1000);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4639, function(sym, e) {
         // introducir código aquí
         Siguiente="preg3";
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4780, function(sym, e) {
         // introducir código aquí
         
         for (var i=0; i<4; i++) {
         var pro=i+1;
         if (seleccionadas[i]=="si"){
         		sym.$('bien_'+pro).attr('src','images/bien_'+pro+'.svg');    
         	}else{
         		sym.$('bien_'+pro).attr('src','images/mal_'+pro+'.svg');    
         	}
         }
         
         Posicion=2;
         sym.$(Preguntas[2]).show("slide", { direction: "right" }, 1000);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         // introducir código aquí
         Siguiente="preg4";
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5395, function(sym, e) {
         for (var i=0; i<4; i++) {
         var pro=i+1;
         if (seleccionadas[i]=="si"){
         		sym.$('bien_'+pro).attr('src','images/bien_'+pro+'.svg');    
         	}else{
         		sym.$('bien_'+pro).attr('src','images/mal_'+pro+'.svg');    
         	}
         }
         Posicion=3;
         
         sym.$(Preguntas[3]).show("slide", { direction: "right" }, 1000);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5865, function(sym, e) {
         // introducir código aquí
         Siguiente="preg5";
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5952, function(sym, e) {
         for (var i=0; i<4; i++) {
         var pro=i+1;
         if (seleccionadas[i]=="si"){
         		sym.$('bien_'+pro).attr('src','images/bien_'+pro+'.svg');    
         	}else{
         		sym.$('bien_'+pro).attr('src','images/mal_'+pro+'.svg');    
         	}
         }
         Posicion=4;
         sym.$(Preguntas[4]).show("slide", { direction: "right" }, 1000);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6433, function(sym, e) {
         // introducir código aquí
         Siguiente="final";
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6750, function(sym, e) {
         // introducir código aquí
         for (var i=0; i<4; i++) {
         var pro=i+1;
         
         if (seleccionadas[i]=="si"){
         		sym.$('bien_'+pro).attr('src','images/bien_'+pro+'.svg');    
         	}else{
         		sym.$('bien_'+pro).attr('src','images/mal_'+pro+'.svg');    
         	}
         }
         Posicion=5;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bt_instrucciones}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento 
         sym.$("instrucciones2").show();
         
         sym.getSymbol("instrucciones2").play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6897, function(sym, e) {
         // introducir código aquí
         if(Correctas==5){
         	// Mostrar un elemento 
         	sym.$("bien").show();	
         	sym.getSymbol("bien").play(0);
         
         	// Reproducir una pista de audio 
         	sym.$("aplauso_largo")[0].play();
         
         
         }else{
         	sym.$("mal").show();	
         	sym.getSymbol("mal").play(0);
         
         	// Reproducir una pista de audio 
         	sym.$("abucheo")[0].play();
         
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'instrucciones'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Ellipse}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("instrucciones");
   //Edge symbol end:'instrucciones'

   //=========================================================
   
   //Edge symbol: 'resp'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 958, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1975, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2962, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3966, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_derecha}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play('resp2');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_derechaCopy}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play('resp3');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_derechaCopy2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play('resp4');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_derechaCopy3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play('resp5');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_izquierda}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play('resp1');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_izquierdaCopy}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play('resp2');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_izquierdaCopy2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play('resp3');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_izquierdaCopy3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play('resp4');
         

      });
      //Edge binding end

   })("resp");
   //Edge symbol end:'resp'

   //=========================================================
   
   //Edge symbol: 'bien'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         window.close();

      });
      //Edge binding end

   })("bien");
   //Edge symbol end:'bien'

   //=========================================================
   
   //Edge symbol: 'mal'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         location.reload();

      });
      //Edge binding end

   })("mal");
   //Edge symbol end:'mal'

   //=========================================================
   
   //Edge symbol: 'Precargador'
   (function(symbolName) {   
   
   })("Precargador");
   //Edge symbol end:'Precargador'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-2178516587");