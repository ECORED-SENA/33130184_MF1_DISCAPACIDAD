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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4612, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_sabias}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         // Reproducir una pista de audio 
         sym.$("clic_ai")[0].play();
         
         // Mostrar un elemento 
         sym.$("intro_sabias").show();
         
         sym.getSymbol("intro_sabias").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_sabias}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         // Mostrar un elemento 
         sym.$("sabias_sobre").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_lineaTiempo}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play('LineaTiempo');
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_lineaTiempo}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         // Mostrar un elemento 
         sym.$("linea_tiempo").show();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8653, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11649, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14425, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16614, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20637, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 22877, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 24358, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 25900, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 27500, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29119, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30510, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 35889, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 37419, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 38925, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 43750, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 49813, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 51250, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_lineaTiempo}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("linea_tiempo").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_sabias}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("sabias_sobre").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // introducir aquí código que se debe ejecutar cuando la composición está totalmente cargada
         
         // Reproducir una pista de audio 
         
         // Reproducir una pista de audio 
         sym.$("pista_2_modificada")[0].play();
         
         
         $('.cla').click(function(event) { 	
             var boton =$(this).attr('id');
             var imagen=boton.substr(41,2);
         	sym.$('.imagen').hide();
             // Mostrar un elemento 
             sym.getSymbol("uni3_geogra_grafica3").$("uni3_geogra_g3_"+imagen).show();
          });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${linea_1-2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // introducir aquí código para clic de ratón
         sym.$("audio").trigger("pause");
         sym.$("audio").prop("currentTime", 0);
         sym.play("LT1");

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${uni4_btn_volverCopy2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("inicio");

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${btn_uni1}", "click", function(sym, e) {
         sym.play("Uni1");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_uni1Copy}", "click", function(sym, e) {
         sym.play("Uni2");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_uni1Copy2}", "click", function(sym, e) {
         sym.play("Uni3");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_uni1Copy3}", "click", function(sym, e) {
         sym.play("Uni4");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_uni1Copy4}", "click", function(sym, e) {
         sym.play("Uni5");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_uni1Copy5}", "click", function(sym, e) {
         sym.play("Uni6");
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle4}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento 
         sym.$("uni1_compr_modelo").show();
         
         sym.getSymbol("uni1_compr_modelo").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle4Copy}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento 
         sym.$("uni1_compr_normaliza").show();
         
         sym.getSymbol("uni1_compr_normaliza").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle4Copy2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento 
         sym.$("uni1_compr_social").show();
         
         sym.getSymbol("uni1_compr_social").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle4Copy3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("enfoque");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle4Copy4}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("cif");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle8}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("Unidades");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle4Copy5}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("mod");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle9}", "click", function(sym, e) {
         sym.play("enfoque1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle9Copy}", "click", function(sym, e) {
         sym.play("enfoque2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle9Copy2}", "click", function(sym, e) {
         sym.play("enfoque3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle9Copy3}", "click", function(sym, e) {
         sym.play("enfoque4");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle9Copy4}", "click", function(sym, e) {
         sym.play("enfoque5");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${unidades}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("Unidades");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle10}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("situaciones");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle10Copy}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("discapacidad1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle11}", "click", function(sym, e) {
         
         sym.play("discapacidad1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle11Copy}", "click", function(sym, e) {
         
         sym.play("discapacidad2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle11Copy2}", "click", function(sym, e) {
         
         sym.play("discapacidad3");

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${unidadesCopy}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("Unidades");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 63402, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${uni2_pobreza_text-03}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento 
         sym.$("uni2_pobreza_circulo").show();
         
         sym.getSymbol("uni2_pobreza_circulo").play();
         
         sym.$("uni2_pobreza_edu").hide();
         sym.$("uni2_pobreza_trabajo").hide();
         sym.$("uni2_pobreza_salud").hide();
         sym.$("uni2_pobreza_oms").hide();
         sym.$("info").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${uni2_pobreza_text-04}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento 
         sym.$("uni2_pobreza_edu").show();
         
         sym.getSymbol("uni2_pobreza_edu").play();
         
         sym.$("uni2_pobreza_circulo").hide();
         sym.$("uni2_pobreza_trabajo").hide();
         sym.$("uni2_pobreza_salud").hide();
         sym.$("uni2_pobreza_oms").hide();
         sym.$("info").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${uni2_pobreza_text-05}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento 
         sym.$("uni2_pobreza_trabajo").show();
         
         sym.getSymbol("uni2_pobreza_trabajo").play();
         
         sym.$("uni2_pobreza_edu").hide();
         sym.$("uni2_pobreza_circulo").hide();
         sym.$("uni2_pobreza_salud").hide();
         sym.$("uni2_pobreza_oms").hide();
         sym.$("info").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${uni2_pobreza_text-06}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento 
         sym.$("uni2_pobreza_salud").show();
         
         sym.getSymbol("uni2_pobreza_salud").play();
         
         sym.$("uni2_pobreza_edu").hide();
         sym.$("uni2_pobreza_trabajo").hide();
         sym.$("uni2_pobreza_circulo").hide();
         sym.$("uni2_pobreza_oms").hide();
         sym.$("info").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${uni2_pobreza_text-07}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento 
         sym.$("uni2_pobreza_oms").show();
         
         sym.getSymbol("uni2_pobreza_oms").play();
         
         sym.$("uni2_pobreza_edu").hide();
         sym.$("uni2_pobreza_trabajo").hide();
         sym.$("uni2_pobreza_salud").hide();
         sym.$("uni2_pobreza_circulo").hide();
         sym.$("info").hide();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 52867, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 54384, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 55788, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 57289, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 58842, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 60295, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 61714, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${uni3_menu-02}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("sexo");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${uni3_menu-03}", "click", function(sym, e) {
         sym.play("edad");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${uni3_menu-04}", "click", function(sym, e) {
         sym.play("geografica");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${uni3_menu-05}", "click", function(sym, e) {
         sym.play("vivienda");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${uni3_menu-06}", "click", function(sym, e) {
         sym.play("estudio");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${uni3_menu-07}", "click", function(sym, e) {
         sym.play("trabajo");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${uni3_menu-08}", "click", function(sym, e) {
         sym.play("salud");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${uni3_menu-09}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("rehabilitacion");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle21}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         // Mostrar un elemento 
         sym.$("uni3_edad_grafica1").show();
         
         sym.getSymbol("uni3_edad_grafica1").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle21Copy}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         // Mostrar un elemento 
         sym.$("uni3_edad_grafica2").show();
         
         sym.getSymbol("uni3_edad_grafica2").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle21Copy2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         // Mostrar un elemento 
         sym.$("uni3_geogra_g4").show();
         
         sym.getSymbol("uni3_geogra_g4").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle21Copy3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         // Mostrar un elemento 
         sym.$("uni3_geogra_grafica3").show();
         
         sym.getSymbol("uni3_geogra_grafica3").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle21Copy4}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         
         // Mostrar un elemento 
         sym.$("uni3_trabajo_g72").show();
         
         sym.getSymbol("uni3_trabajo_g72").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ver_info}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento 
         sym.$("info").show();
         
         sym.getSymbol("info").play();
         
         sym.$("uni2_pobreza_edu").hide();
         sym.$("uni2_pobreza_trabajo").hide();
         sym.$("uni2_pobreza_salud").hide();
         sym.$("uni2_pobreza_oms").hide();
         sym.$("uni2_pobreza_circulo").hide();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_sabiasCopy}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.$("clic_ai")[0].play();
         // Mostrar un elemento 
         sym.$("uni2_disca_reflexion").show();
         
         sym.getSymbol("uni2_disca_reflexion").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_sabiasCopy}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         // Mostrar un elemento 
         sym.$("sabias_sobre").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_sabiasCopy}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("sabias_sobre").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_sabiasCopy2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.$("clic_ai")[0].play();
         // Mostrar un elemento 
         sym.$("uni3_trabajo_reflex").show();
         
         sym.getSymbol("uni3_trabajo_reflex").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_sabiasCopy2}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         // Mostrar un elemento 
         sym.$("sabias_sobre").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_sabiasCopy2}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("sabias_sobre").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle7}", "click", function(sym, e) {
         window.open("doc/tabla_antecedentes.pdf", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_sabiasCopy3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.$("clic_ai")[0].play();
         // Mostrar un elemento 
         sym.$("uni4_sabias").show();
         
         sym.getSymbol("uni4_sabias").play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_sabiasCopy3}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         // Mostrar un elemento 
         sym.$("sabias_sobre").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_sabiasCopy3}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("sabias_sobre").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 64750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle13}", "click", function(sym, e) {
         sym.play("antecedentes");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle14}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento 
         sym.$("uni4_ante_g9").show();
         
         sym.getSymbol("uni4_ante_g9").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${uni4_btn_volverCopy}", "click", function(sym, e) {
         sym.play("Uni4");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 66427, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${flecha_dere}", "click", function(sym, e) {
         sym.play("consti2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 67693, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 69938, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 71168, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 72372, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 73683, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${uni5_menu}", "click", function(sym, e) {
         sym.play("mandatos");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${uni5_btn_inicio}", "click", function(sym, e) {
         sym.play("consti1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${flecha_dereCopy}", "click", function(sym, e) {
         sym.play("consti3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${flecha_izq}", "click", function(sym, e) {
         sym.play("consti1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${flecha_izqCopy}", "click", function(sym, e) {
         sym.play("consti2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${flecha_dereCopy2}", "click", function(sym, e) {
         sym.play("consti4");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${flecha_izqCopy2}", "click", function(sym, e) {
         sym.play("consti3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${flecha_dereCopy3}", "click", function(sym, e) {
         sym.play("consti5");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${flecha_izqCopy3}", "click", function(sym, e) {
         sym.play("consti4");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle18}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento 
         sym.$("uni5_mandatos_salud").show();
         
         sym.getSymbol("uni5_mandatos_salud").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle18Copy}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento 
         sym.$("uni5_mandatos_trabajo").show();
         
         sym.getSymbol("uni5_mandatos_trabajo").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle18Copy2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento 
         sym.$("uni5_mandatos_educ").show();
         
         sym.getSymbol("uni5_mandatos_educ").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_atencion}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Mostrar un elemento 
         
         // Reproducir una pista de audio 
         sym.$("clic_ai")[0].play();
         
         sym.$("uni5_mandatos_atencion").show();
         
         sym.getSymbol("uni5_mandatos_atencion").play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 78151, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 79344, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 80669, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 81818, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 83121, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 84358, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 86675, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 87815, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 89074, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 90345, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 91654, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 92874, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 94125, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 95383, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 96617, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 97883, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${uni6_menu-02}", "click", function(sym, e) {
         sym.play("ley361");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${uni6_menu-03}", "click", function(sym, e) {
         sym.play("normatividad");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${uni6_menu-04}", "click", function(sym, e) {
         sym.play("consideraciones");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle24}", "click", function(sym, e) {
         sym.play("ley361");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle24Copy}", "click", function(sym, e) {
         sym.play("ley1098");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle24Copy2}", "click", function(sym, e) {
         sym.play("ley1145");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle24Copy3}", "click", function(sym, e) {
         sym.play("1348");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle24Copy4}", "click", function(sym, e) {
         sym.play("ley1818");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle24Copy5}", "click", function(sym, e) {
         sym.play("compes");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle25}", "click", function(sym, e) {
         sym.play("n1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle25Copy}", "click", function(sym, e) {
         sym.play("n2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle25Copy2}", "click", function(sym, e) {
         sym.play("n3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle25Copy3}", "click", function(sym, e) {
         sym.play("n4");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle25Copy4}", "click", function(sym, e) {
         sym.play("n5");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle25Copy5}", "click", function(sym, e) {
         sym.play("n6");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle25Copy6}", "click", function(sym, e) {
         sym.play("n7");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle25Copy7}", "click", function(sym, e) {
         sym.play("n8");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle25Copy8}", "click", function(sym, e) {
         sym.play("n9");

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "${btn_inicio}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // introducir aquí código para clic de ratón
         sym.$("audio").trigger("pause");
         sym.$("audio").prop("currentTime", 0);
         
         sym.play("Unidades");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_inicio}", "mouseover", function(sym, e) {
         sym.$("btn_iniciar_sobre").show();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_inicio}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         // Mostrar un elemento 
         sym.$("btn_iniciar_sobre").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_uni1}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         // Mostrar un elemento 
         sym.$("botones_unidades-022").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_uni1}", "mouseout", function(sym, e) {
         // introducir código que se ejecute cuando el ratón se mueva fuera del objeto
         sym.$("botones_unidades-022").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_uni1Copy}", "mouseover", function(sym, e) {
         // introducir código que se ejecute cuando se sitúe el ratón sobre el objeto
         // Mostrar un elemento 
         sym.$("botones_unidades-02-02").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_uni1Copy2}", "mouseover", function(sym, e) {
         sym.$("botones_unidades-02-3").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_uni1Copy3}", "mouseover", function(sym, e) {
         sym.$("botones_unidades-02-4").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_uni1Copy4}", "mouseover", function(sym, e) {
         sym.$("botones_unidades-02-5").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_uni1Copy5}", "mouseover", function(sym, e) {
         sym.$("botones_unidades-02-6").show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_uni1Copy}", "mouseout", function(sym, e) {
         sym.$("botones_unidades-02-02").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_uni1Copy2}", "mouseout", function(sym, e) {
         sym.$("botones_unidades-02-3").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_uni1Copy3}", "mouseout", function(sym, e) {
         sym.$("botones_unidades-02-4").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_uni1Copy4}", "mouseout", function(sym, e) {
         sym.$("botones_unidades-02-5").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_uni1Copy5}", "mouseout", function(sym, e) {
         sym.$("botones_unidades-02-6").hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7194, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${linea_1-2Copy}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // introducir aquí código para clic de ratón
         sym.$("audio").trigger("pause");
         sym.$("audio").prop("currentTime", 0);
         sym.play("LT1-1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${linea_1-2Copy5}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // introducir aquí código para clic de ratón
         sym.$("audio").trigger("pause");
         sym.$("audio").prop("currentTime", 0);
         sym.play("LT2");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${linea_1-2Copy7}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // introducir aquí código para clic de ratón
         sym.$("audio").trigger("pause");
         sym.$("audio").prop("currentTime", 0);
         sym.play("LT2-1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${linea_1-2Copy8}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // introducir aquí código para clic de ratón
         sym.$("audio").trigger("pause");
         sym.$("audio").prop("currentTime", 0);
         sym.play("LT3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${linea_1-2Copy2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // introducir aquí código para clic de ratón
         sym.$("audio").trigger("pause");
         sym.$("audio").prop("currentTime", 0);
         sym.play("LT3-1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         // introducir código aquí
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${uni5_btn_inicio3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play('intro3');
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 69000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play('dignidad');
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'personaje'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29010, function(sym, e) {
         // introducir código aquí
         sym.play(0);

      });
      //Edge binding end

   })("personaje");
   //Edge symbol end:'personaje'

   //=========================================================
   
   //Edge symbol: 'intro'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         
         sym.playReverse();

      });
      //Edge binding end

   })("intro");
   //Edge symbol end:'intro'

   //=========================================================
   
   //Edge symbol: 'intro_sabias_1'
   (function(symbolName) {   
   
   })("intro_sabias_1");
   //Edge symbol end:'intro_sabias_1'

   //=========================================================
   
   //Edge symbol: 'intro_sabias_3'
   (function(symbolName) {   
   
   })("intro_sabias_3");
   //Edge symbol end:'intro_sabias_3'

   //=========================================================
   
   //Edge symbol: 'intro_sabias_2'
   (function(symbolName) {   
   
   })("intro_sabias_2");
   //Edge symbol end:'intro_sabias_2'

   //=========================================================
   
   //Edge symbol: 'intro_linea_tiempo1'
   (function(symbolName) {   
   
   })("intro_linea_tiempo1");
   //Edge symbol end:'intro_linea_tiempo1'

   //=========================================================
   
   //Edge symbol: 'intro_linea_tiempo2'
   (function(symbolName) {   
   
   })("intro_linea_tiempo2");
   //Edge symbol end:'intro_linea_tiempo2'

   //=========================================================
   
   //Edge symbol: 'intro_linea_tiempo3'
   (function(symbolName) {   
   
   })("intro_linea_tiempo3");
   //Edge symbol end:'intro_linea_tiempo3'

   //=========================================================
   
   //Edge symbol: 'intro_linea_tiempo4'
   (function(symbolName) {   
   
   })("intro_linea_tiempo4");
   //Edge symbol end:'intro_linea_tiempo4'

   //=========================================================
   
   //Edge symbol: 'intro_linea_tiempo5'
   (function(symbolName) {   
   
   })("intro_linea_tiempo5");
   //Edge symbol end:'intro_linea_tiempo5'

   //=========================================================
   
   //Edge symbol: 'intro_linea_tiempo6'
   (function(symbolName) {   
   
   })("intro_linea_tiempo6");
   //Edge symbol end:'intro_linea_tiempo6'

   //=========================================================
   
   //Edge symbol: 'uni1_comprension'
   (function(symbolName) {   
   
   })("uni1_comprension");
   //Edge symbol end:'uni1_comprension'

   //=========================================================
   
   //Edge symbol: 'uni1_compr_modelo'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle5}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("uni1_compr_modelo");
   //Edge symbol end:'uni1_compr_modelo'

   //=========================================================
   
   //Edge symbol: 'uni1_compr_normaliza'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle6}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("uni1_compr_normaliza");
   //Edge symbol end:'uni1_compr_normaliza'

   //=========================================================
   
   //Edge symbol: 'uni1_compr_social'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle7}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("uni1_compr_social");
   //Edge symbol end:'uni1_compr_social'

   //=========================================================
   
   //Edge symbol: 'uni1_bio_text'
   (function(symbolName) {   
   
   })("uni1_bio_text");
   //Edge symbol end:'uni1_bio_text'

   //=========================================================
   
   //Edge symbol: 'uni1_bio_text1'
   (function(symbolName) {   
   
   })("uni1_bio_text1");
   //Edge symbol end:'uni1_bio_text1'

   //=========================================================
   
   //Edge symbol: 'uni1_bio_text2'
   (function(symbolName) {   
   
   })("uni1_bio_text2");
   //Edge symbol end:'uni1_bio_text2'

   //=========================================================
   
   //Edge symbol: 'uni1_bio_text3'
   (function(symbolName) {   
   
   })("uni1_bio_text3");
   //Edge symbol end:'uni1_bio_text3'

   //=========================================================
   
   //Edge symbol: 'uni1_bio_text4'
   (function(symbolName) {   
   
   })("uni1_bio_text4");
   //Edge symbol end:'uni1_bio_text4'

   //=========================================================
   
   //Edge symbol: 'uni1_bio_text5'
   (function(symbolName) {   
   
   })("uni1_bio_text5");
   //Edge symbol end:'uni1_bio_text5'

   //=========================================================
   
   //Edge symbol: 'uni1_cif_text'
   (function(symbolName) {   
   
   })("uni1_cif_text");
   //Edge symbol end:'uni1_cif_text'

   //=========================================================
   
   //Edge symbol: 'uni2_disca_text'
   (function(symbolName) {   
   
   })("uni2_disca_text");
   //Edge symbol end:'uni2_disca_text'

   //=========================================================
   
   //Edge symbol: 'uni2_disca_text1'
   (function(symbolName) {   
   
   })("uni2_disca_text1");
   //Edge symbol end:'uni2_disca_text1'

   //=========================================================
   
   //Edge symbol: 'uni2_disca_text2'
   (function(symbolName) {   
   
   })("uni2_disca_text2");
   //Edge symbol end:'uni2_disca_text2'

   //=========================================================
   
   //Edge symbol: 'uni2_disca_text3'
   (function(symbolName) {   
   
   })("uni2_disca_text3");
   //Edge symbol end:'uni2_disca_text3'

   //=========================================================
   
   //Edge symbol: 'uni2_disca_reflexion'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle12}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRect}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ir a una nueva dirección URL en una nueva ventana
         // (sustituya "_blank" por el atributo de destino correspondiente)
         window.open("http://www.bancomundial.org/es/news/video/2017/07/05/disabled-filmmaker-in-jamaica", "_blank");
         

      });
      //Edge binding end

   })("uni2_disca_reflexion");
   //Edge symbol end:'uni2_disca_reflexion'

   //=========================================================
   
   //Edge symbol: 'uni2_pobreza_circulo'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle16}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("uni2_pobreza_circulo");
   //Edge symbol end:'uni2_pobreza_circulo'

   //=========================================================
   
   //Edge symbol: 'uni2_pobreza_edu'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle17}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("uni2_pobreza_edu");
   //Edge symbol end:'uni2_pobreza_edu'

   //=========================================================
   
   //Edge symbol: 'uni2_pobreza_trabajo'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle18}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("uni2_pobreza_trabajo");
   //Edge symbol end:'uni2_pobreza_trabajo'

   //=========================================================
   
   //Edge symbol: 'uni2_pobreza_salud'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle19}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("uni2_pobreza_salud");
   //Edge symbol end:'uni2_pobreza_salud'

   //=========================================================
   
   //Edge symbol: 'uni2_pobreza_oms'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle20}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("uni2_pobreza_oms");
   //Edge symbol end:'uni2_pobreza_oms'

   //=========================================================
   
   //Edge symbol: 'uni3_sexo'
   (function(symbolName) {   
   
   })("uni3_sexo");
   //Edge symbol end:'uni3_sexo'

   //=========================================================
   
   //Edge symbol: 'uni3_edad'
   (function(symbolName) {   
   
   })("uni3_edad");
   //Edge symbol end:'uni3_edad'

   //=========================================================
   
   //Edge symbol: 'uni3_geogra'
   (function(symbolName) {   
   
   })("uni3_geogra");
   //Edge symbol end:'uni3_geogra'

   //=========================================================
   
   //Edge symbol: 'uni3_geogra_g4'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("uni3_geogra_g4");
   //Edge symbol end:'uni3_geogra_g4'

   //=========================================================
   
   //Edge symbol: 'uni3_vivienda'
   (function(symbolName) {   
   
   })("uni3_vivienda");
   //Edge symbol end:'uni3_vivienda'

   //=========================================================
   
   //Edge symbol: 'uni3_estudio'
   (function(symbolName) {   
   
   })("uni3_estudio");
   //Edge symbol end:'uni3_estudio'

   //=========================================================
   
   //Edge symbol: 'uni3_trabajo'
   (function(symbolName) {   
   
   })("uni3_trabajo");
   //Edge symbol end:'uni3_trabajo'

   //=========================================================
   
   //Edge symbol: 'uni3_trabajo_reflex'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle5}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("uni3_trabajo_reflex");
   //Edge symbol end:'uni3_trabajo_reflex'

   //=========================================================
   
   //Edge symbol: 'uni3_salud'
   (function(symbolName) {   
   
   })("uni3_salud");
   //Edge symbol end:'uni3_salud'

   //=========================================================
   
   //Edge symbol: 'uni3_rehab'
   (function(symbolName) {   
   
   })("uni3_rehab");
   //Edge symbol end:'uni3_rehab'

   //=========================================================
   
   //Edge symbol: 'uni4_text'
   (function(symbolName) {   
   
   })("uni4_text");
   //Edge symbol end:'uni4_text'

   //=========================================================
   
   //Edge symbol: 'uni4_sabias'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle17}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${RoundRect2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ir a una nueva dirección URL en una nueva ventana
         // (sustituya "_blank" por el atributo de destino correspondiente)
         window.open("http://webtv.un.org/en/ga/watch/jillian-mercado-modelo-activista-y-tiene-distrofia-muscular/5797732373001/?term=&lan=spanish", "_blank");
         

      });
      //Edge binding end

   })("uni4_sabias");
   //Edge symbol end:'uni4_sabias'

   //=========================================================
   
   //Edge symbol: 'uni4_antecede'
   (function(symbolName) {   
   
   })("uni4_antecede");
   //Edge symbol end:'uni4_antecede'

   //=========================================================
   
   //Edge symbol: 'uni5_consti_1'
   (function(symbolName) {   
   
   })("uni5_consti_1");
   //Edge symbol end:'uni5_consti_1'

   //=========================================================
   
   //Edge symbol: 'uni5_consti_2'
   (function(symbolName) {   
   
   })("uni5_consti_2");
   //Edge symbol end:'uni5_consti_2'

   //=========================================================
   
   //Edge symbol: 'uni5_consti_3dig'
   (function(symbolName) {   
   
   })("uni5_consti_3dig");
   //Edge symbol end:'uni5_consti_3dig'

   //=========================================================
   
   //Edge symbol: 'uni5_consti_4'
   (function(symbolName) {   
   
   })("uni5_consti_4");
   //Edge symbol end:'uni5_consti_4'

   //=========================================================
   
   //Edge symbol: 'uni5_consti_5'
   (function(symbolName) {   
   
   })("uni5_consti_5");
   //Edge symbol end:'uni5_consti_5'

   //=========================================================
   
   //Edge symbol: 'uni5_mandatos'
   (function(symbolName) {   
   
   })("uni5_mandatos");
   //Edge symbol end:'uni5_mandatos'

   //=========================================================
   
   //Edge symbol: 'uni5_mandatos_atencion'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle19}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("uni5_mandatos_atencion");
   //Edge symbol end:'uni5_mandatos_atencion'

   //=========================================================
   
   //Edge symbol: 'uni5_mandatos_salud'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle20}", "click", function(sym, e) {
         
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("uni5_mandatos_salud");
   //Edge symbol end:'uni5_mandatos_salud'

   //=========================================================
   
   //Edge symbol: 'uni5_mandatos_trabajo'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle22}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("uni5_mandatos_trabajo");
   //Edge symbol end:'uni5_mandatos_trabajo'

   //=========================================================
   
   //Edge symbol: 'uni5_mandatos_educ'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle23}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("uni5_mandatos_educ");
   //Edge symbol end:'uni5_mandatos_educ'

   //=========================================================
   
   //Edge symbol: 'uni6_marco_text'
   (function(symbolName) {   
   
   })("uni6_marco_text");
   //Edge symbol end:'uni6_marco_text'

   //=========================================================
   
   //Edge symbol: 'uni6_marco_text1'
   (function(symbolName) {   
   
   })("uni6_marco_text1");
   //Edge symbol end:'uni6_marco_text1'

   //=========================================================
   
   //Edge symbol: 'uni6_marco_text2'
   (function(symbolName) {   
   
   })("uni6_marco_text2");
   //Edge symbol end:'uni6_marco_text2'

   //=========================================================
   
   //Edge symbol: 'uni6_marco_text3'
   (function(symbolName) {   
   
   })("uni6_marco_text3");
   //Edge symbol end:'uni6_marco_text3'

   //=========================================================
   
   //Edge symbol: 'uni6_marco_text4'
   (function(symbolName) {   
   
   })("uni6_marco_text4");
   //Edge symbol end:'uni6_marco_text4'

   //=========================================================
   
   //Edge symbol: 'uni6_marco_text5'
   (function(symbolName) {   
   
   })("uni6_marco_text5");
   //Edge symbol end:'uni6_marco_text5'

   //=========================================================
   
   //Edge symbol: 'uni6_marco_text6'
   (function(symbolName) {   
   
   })("uni6_marco_text6");
   //Edge symbol end:'uni6_marco_text6'

   //=========================================================
   
   //Edge symbol: 'uni6_norma_text'
   (function(symbolName) {   
   
   })("uni6_norma_text");
   //Edge symbol end:'uni6_norma_text'

   //=========================================================
   
   //Edge symbol: 'uni6_norma_text1'
   (function(symbolName) {   
   
   })("uni6_norma_text1");
   //Edge symbol end:'uni6_norma_text1'

   //=========================================================
   
   //Edge symbol: 'uni6_norma_text2'
   (function(symbolName) {   
   
   })("uni6_norma_text2");
   //Edge symbol end:'uni6_norma_text2'

   //=========================================================
   
   //Edge symbol: 'uni6_norma_text3'
   (function(symbolName) {   
   
   })("uni6_norma_text3");
   //Edge symbol end:'uni6_norma_text3'

   //=========================================================
   
   //Edge symbol: 'uni6_norma_text4'
   (function(symbolName) {   
   
   })("uni6_norma_text4");
   //Edge symbol end:'uni6_norma_text4'

   //=========================================================
   
   //Edge symbol: 'uni6_norma_text5'
   (function(symbolName) {   
   
   })("uni6_norma_text5");
   //Edge symbol end:'uni6_norma_text5'

   //=========================================================
   
   //Edge symbol: 'uni6_norma_text6'
   (function(symbolName) {   
   
   })("uni6_norma_text6");
   //Edge symbol end:'uni6_norma_text6'

   //=========================================================
   
   //Edge symbol: 'uni6_norma_text7'
   (function(symbolName) {   
   
   })("uni6_norma_text7");
   //Edge symbol end:'uni6_norma_text7'

   //=========================================================
   
   //Edge symbol: 'uni6_norma_text8'
   (function(symbolName) {   
   
   })("uni6_norma_text8");
   //Edge symbol end:'uni6_norma_text8'

   //=========================================================
   
   //Edge symbol: 'uni6_norma_text9'
   (function(symbolName) {   
   
   })("uni6_norma_text9");
   //Edge symbol end:'uni6_norma_text9'

   //=========================================================
   
   //Edge symbol: 'uni6_conside'
   (function(symbolName) {   
   
   })("uni6_conside");
   //Edge symbol end:'uni6_conside'

   //=========================================================
   
   //Edge symbol: 'intro_sabias'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2263, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5144, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${flecha_dere2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${flecha_dere2Copy}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${flecha_izq2}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("0");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${flecha_izq2Copy}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         sym.play("11");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7579, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle12}", "click", function(sym, e) {
         
         // Ir a una nueva dirección URL en una nueva ventana
         // (sustituya "_blank" por el atributo de destino correspondiente)
         window.open("http://valledellili.org/wp-content/uploads/2018/04/pdf-252-cartadelasalud-mayo2017.pdf", "_blank");
         

      });
      //Edge binding end

   })("intro_sabias");
   //Edge symbol end:'intro_sabias'

   //=========================================================
   
   //Edge symbol: 'sabias'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // introducir código aquí
         sym.play(0);

      });
      //Edge binding end

   })("sabias");
   //Edge symbol end:'sabias'

   //=========================================================
   
   //Edge symbol: 'info'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle15}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2354, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${flecha_izqCopy}", "click", function(sym, e) {
         sym.play("1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${flecha_dereCopy}", "click", function(sym, e) {
         sym.play("2");

      });
      //Edge binding end

   })("info");
   //Edge symbol end:'info'

   //=========================================================
   
   //Edge symbol: 'uni2_pobreza'
   (function(symbolName) {   
   
   })("uni2_pobreza");
   //Edge symbol end:'uni2_pobreza'

   //=========================================================
   
   //Edge symbol: 'uni3_edad_grafica1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle22}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7424, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9973, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12573, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15172, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${flecha_abajo}", "click", function(sym, e) {
         sym.play("2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${flecha_abajoCopy}", "click", function(sym, e) {
         sym.play("3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${flecha_arriba}", "click", function(sym, e) {
         sym.play("1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${flecha_abajoCopy2}", "click", function(sym, e) {
         sym.play("4");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${flecha_arribaCopy}", "click", function(sym, e) {
         sym.play("2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${flecha_abajoCopy3}", "click", function(sym, e) {
         sym.play("5");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${flecha_arribaCopy2}", "click", function(sym, e) {
         sym.play("3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${flecha_abajoCopy4}", "click", function(sym, e) {
         sym.play("6");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${flecha_arribaCopy3}", "click", function(sym, e) {
         sym.play("4");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${flecha_arribaCopy4}", "click", function(sym, e) {
         sym.play("5");

      });
      //Edge binding end

   })("uni3_edad_grafica1");
   //Edge symbol end:'uni3_edad_grafica1'

   //=========================================================
   
   //Edge symbol: 'uni3_edad_grafica2'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle23}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("uni3_edad_grafica2");
   //Edge symbol end:'uni3_edad_grafica2'

   //=========================================================
   
   //Edge symbol: 'uni3_geogra_grafica3'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("uni3_geogra_grafica3");
   //Edge symbol end:'uni3_geogra_grafica3'

   //=========================================================
   
   //Edge symbol: 'uni4_ante_g9'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle15}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 941, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1598, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2252, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2906, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3560, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle16}", "click", function(sym, e) {
         sym.play("1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle16Copy}", "click", function(sym, e) {
         sym.play("5");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle16Copy2}", "click", function(sym, e) {
         sym.play("2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle16Copy3}", "click", function(sym, e) {
         sym.play("3");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Rectangle16Copy4}", "click", function(sym, e) {
         sym.play("4");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4529, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("uni4_ante_g9");
   //Edge symbol end:'uni4_ante_g9'

   //=========================================================
   
   //Edge symbol: 'uni6_marco_text1_1'
   (function(symbolName) {   
   
   })("uni6_marco_text1_1");
   //Edge symbol end:'uni6_marco_text1_1'

   //=========================================================
   
   //Edge symbol: 'uni6_marco_text1_2'
   (function(symbolName) {   
   
   })("uni6_marco_text1_2");
   //Edge symbol end:'uni6_marco_text1_2'

   //=========================================================
   
   //Edge symbol: 'uni6_marco_text1_3'
   (function(symbolName) {   
   
   })("uni6_marco_text1_3");
   //Edge symbol end:'uni6_marco_text1_3'

   //=========================================================
   
   //Edge symbol: 'cc'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("cc");
   //Edge symbol end:'cc'

   //=========================================================
   
   //Edge symbol: 'creditos'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("creditos");
   //Edge symbol end:'creditos'

   //=========================================================
   
   //Edge symbol: 'mapa'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle3Copy}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("mapa");
   //Edge symbol end:'mapa'

   //=========================================================
   
   //Edge symbol: 'uni3_trabajo_g7'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
      //Edge binding end

   })("uni3_trabajo_g7");
   //Edge symbol end:'uni3_trabajo_g7'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'menu_opciones'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${btn_descargarpdf}", "click", function(sym, e) {
         sym.$("audio").trigger("pause");
         sym.$("audio").prop("currentTime", 0);
         
         
         window.open("doc/material_formacion_1.pdf", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_bibliografia}", "click", function(sym, e) {
         //sym.getComposition().getStage().getSymbol("personaje_1").stop();
         sym.$("audio").trigger("pause");
         sym.$("audio").prop("currentTime", 0);
         
         
         window.open("doc/bibliografia.pdf", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_mapa}", "click", function(sym, e) {
         sym.$("audio").trigger("pause");
         sym.$("audio").prop("currentTime", 0);
         
         
         
         sym.getComposition().getStage().$("mapa").show("slide", { direction: "up" }, 1000);
         
         sym.getComposition().getStage().getSymbol("mapa").play();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_creditos}", "click", function(sym, e) {
         sym.$("audio").trigger("pause");
         sym.$("audio").prop("currentTime", 0);
         
         sym.getComposition().getStage().$("creditos").show("slide", { direction: "up" }, 1000);
         
         sym.getComposition().getStage().getSymbol("creditos").play();
         
         
         
         /*sym.getComposition().getStage().getSymbol("personaje_1").stop();*/

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_cc}", "click", function(sym, e) {
         sym.$("audio").trigger("pause");
         sym.$("audio").prop("currentTime", 0);
         
         sym.getComposition().getStage().$("cc").show("slide", { direction: "up" }, 1000);
         
         sym.getComposition().getStage().getSymbol("cc").play();
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_ocultar}", "click", function(sym, e) {
         
         
         sym.getComposition().getStage().$("menu_opciones").hide("slide", { direction: "down" }, 2000);
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_actividad}", "click", function(sym, e) {
         
         sym.getComposition().getStage().$("actividad").show("slide", { direction: "up" }, 1000);
         
         sym.getComposition().getStage().getSymbol("actividad").play();
         
         
         

      });
      //Edge binding end

      

   })("menu_opciones");
   //Edge symbol end:'menu_opciones'

   //=========================================================

   //=========================================================
   
   //Edge symbol: 'opciones'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${btn_desplegar_cintilla}", "click", function(sym, e) {
         
         
         
         sym.getComposition().getStage().$("menu_opciones").show("slide", { direction: "down" }, 1000);
         
         sym.getComposition().getStage().getSymbol("menu_opciones").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_home}", "click", function(sym, e) {
         sym.$("audio").trigger("pause");
         sym.$("audio").prop("currentTime", 0);
         // insert code for mouse click here
         sym.getComposition().getStage().play(0);
         
         
         
         
         

      });
      //Edge binding end

   })("opciones");
   //Edge symbol end:'opciones'

   //=========================================================
   
   //Edge symbol: 'Precargador'
   (function(symbolName) {   
   
   })("Precargador");
   //Edge symbol end:'Precargador'

   //=========================================================
   
   //Edge symbol: 'circ_tiempo'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // introducir código aquí
         sym.play(0);

      });
      //Edge binding end

   })("circ_tiempo");
   //Edge symbol end:'circ_tiempo'

   //=========================================================
   
   //Edge symbol: 'cc_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle3}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ocultar un elemento 
         sym.getSymbolElement().hide();
         

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Ellipse}", "click", function(sym, e) {
         // introducir aquí código para clic de ratón
         // Ir a una nueva dirección URL en una nueva ventana
         // (sustituya "_blank" por el atributo de destino correspondiente)
         window.open("actividad/index.html", "_blank");
         

      });
      //Edge binding end

      })("actividad");
   //Edge symbol end:'actividad'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-232466824");