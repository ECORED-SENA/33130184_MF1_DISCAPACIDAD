/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.2.3.min.js",
            js+"jquery-ui.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'fondo_parteverde',
                            display: 'block',
                            type: 'image',
                            rect: ['1279px', '118px', '318px', '481px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fondo_parteverde.svg",'0px','0px'],
                            transform: [[],['50']]
                        },
                        {
                            id: 'fondo_partenaranja',
                            display: 'block',
                            type: 'image',
                            rect: ['-175px', '167px', '183px', '302px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fondo_partenaranja.svg",'0px','0px'],
                            transform: [[],['50']]
                        },
                        {
                            id: 'fondo',
                            type: 'image',
                            rect: ['0px', '0px', '1280px', '600px', 'auto', 'auto'],
                            opacity: '0.0071942446043165',
                            fill: ["rgba(0,0,0,0)",im+"fondo.svg",'0px','0px']
                        },
                        {
                            id: 'titulo',
                            display: 'block',
                            type: 'image',
                            rect: ['966px', '600px', '1271px', '206px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"titulo.svg",'0px','0px']
                        },
                        {
                            id: 'logos',
                            type: 'image',
                            rect: ['1067px', '-139px', '187px', '125px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logos.svg",'0px','0px']
                        },
                        {
                            id: 'personaje',
                            symbolName: 'personaje',
                            display: 'block',
                            type: 'rect',
                            rect: ['1339px', '50px', '165', '521', 'auto', 'auto']
                        },
                        {
                            id: 'intro',
                            symbolName: 'intro',
                            display: 'block',
                            type: 'rect',
                            rect: ['193', '162', '533', '386', 'auto', 'auto'],
                            clip: 'rect(0px -1.146484375px 386px 0px)'
                        },
                        {
                            id: 'linea_tiempo',
                            display: 'none',
                            type: 'image',
                            rect: ['513px', '499px', '211px', '49px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"linea_tiempo.svg",'0px','0px']
                        },
                        {
                            id: 'btn_iniciar',
                            display: 'block',
                            type: 'image',
                            rect: ['193px', '499px', '211px', '49px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"btn_iniciar.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'btn_iniciar_sobre',
                            display: 'none',
                            type: 'image',
                            rect: ['191px', '499', '211px', '49px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"btn_iniciar_sobre.svg",'0px','0px']
                        },
                        {
                            id: 'intro_linea_tiempo',
                            display: 'none',
                            type: 'image',
                            rect: ['160px', '317px', '673px', '80px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"intro_linea_tiempo.svg",'0px','0px']
                        },
                        {
                            id: 'circ_tiempo',
                            symbolName: 'circ_tiempo',
                            display: 'none',
                            type: 'rect',
                            rect: ['463px', '335px', '47', '47', 'auto', 'auto']
                        },
                        {
                            id: 'circ_tiempoCopy3',
                            symbolName: 'circ_tiempo',
                            display: 'none',
                            type: 'rect',
                            rect: ['537', '334', '47', '47', 'auto', 'auto']
                        },
                        {
                            id: 'circ_tiempoCopy2',
                            symbolName: 'circ_tiempo',
                            display: 'none',
                            type: 'rect',
                            rect: ['688px', '333px', '47', '47', 'auto', 'auto']
                        },
                        {
                            id: 'circ_tiempoCopy4',
                            symbolName: 'circ_tiempo',
                            display: 'none',
                            type: 'rect',
                            rect: ['762px', '334px', '47', '47', 'auto', 'auto']
                        },
                        {
                            id: 'circ_tiempoCopy',
                            symbolName: 'circ_tiempo',
                            display: 'none',
                            type: 'rect',
                            rect: ['612px', '333px', '47', '47', 'auto', 'auto']
                        },
                        {
                            id: 'intro_linea_tiempo1',
                            symbolName: 'intro_linea_tiempo1',
                            display: 'none',
                            type: 'rect',
                            rect: ['350', '356', '308', '198', 'auto', 'auto'],
                            clip: 'rect(0px 308px 43px 0px)'
                        },
                        {
                            id: 'intro_linea_tiempo2',
                            symbolName: 'intro_linea_tiempo2',
                            display: 'none',
                            type: 'rect',
                            rect: ['422', '167', '419', '189', 'auto', 'auto'],
                            clip: 'rect(147.5px 419px 189px 0px)'
                        },
                        {
                            id: 'intro_linea_tiempo3',
                            symbolName: 'intro_linea_tiempo3',
                            display: 'none',
                            type: 'rect',
                            rect: ['507', '356', '358', '191', 'auto', 'auto'],
                            clip: 'rect(0px 367.701171875px 198px 0px)'
                        },
                        {
                            id: 'intro_linea_tiempo4',
                            symbolName: 'intro_linea_tiempo4',
                            type: 'rect',
                            rect: ['366', '167', '626', '190', 'auto', 'auto'],
                            clip: 'rect(-16.41796875px 626.462890625px 189px 0px)'
                        },
                        {
                            id: 'intro_linea_tiempo5',
                            symbolName: 'intro_linea_tiempo5',
                            type: 'rect',
                            rect: ['535', '356', '460', '191', 'auto', 'auto'],
                            clip: 'rect(0px 475.1640625px 198px 0px)'
                        },
                        {
                            id: 'intro_linea_tiempo6',
                            symbolName: 'intro_linea_tiempo6',
                            type: 'rect',
                            rect: ['472', '167', '385', '189', 'auto', 'auto']
                        },
                        {
                            id: 'uni1_titulo',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '1px', '691px', '166px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"uni1_titulo.svg",'0px','0px']
                        },
                        {
                            id: 'uni1_menu-01',
                            display: 'block',
                            type: 'image',
                            rect: ['1286px', '223', '179px', '58px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uni1_menu-01.svg",'0px','0px']
                        },
                        {
                            id: 'uni1_menu-02',
                            display: 'block',
                            type: 'image',
                            rect: ['1101', '288', '179px', '58px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uni1_menu-02.svg",'0px','0px']
                        },
                        {
                            id: 'uni1_menu-03',
                            display: 'block',
                            type: 'image',
                            rect: ['1102px', '353px', '179px', '58px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uni1_menu-03.svg",'0px','0px']
                        },
                        {
                            id: 'uni1_menu',
                            display: 'none',
                            type: 'image',
                            rect: ['1101px', '226px', '179px', '181px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uni1_menu.svg",'0px','0px']
                        },
                        {
                            id: 'uni1_comprension',
                            symbolName: 'uni1_comprension',
                            display: 'none',
                            type: 'rect',
                            rect: ['210', '210', '565', '272', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'uni1_compr_modelo',
                            symbolName: 'uni1_compr_modelo',
                            display: 'none',
                            type: 'rect',
                            rect: ['233', '173', '528', '329', 'auto', 'auto']
                        },
                        {
                            id: 'uni1_compr_normaliza',
                            symbolName: 'uni1_compr_normaliza',
                            display: 'none',
                            type: 'rect',
                            rect: ['233', '173', '528', '329', 'auto', 'auto']
                        },
                        {
                            id: 'uni1_compr_social',
                            symbolName: 'uni1_compr_social',
                            display: 'none',
                            type: 'rect',
                            rect: ['233', '173', '528', '329', 'auto', 'auto']
                        },
                        {
                            id: 'uni1_bio_text',
                            symbolName: 'uni1_bio_text',
                            display: 'none',
                            type: 'rect',
                            rect: ['193', '226', '566', '322', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'uni1_bio_text1',
                            symbolName: 'uni1_bio_text1',
                            display: 'none',
                            type: 'rect',
                            rect: ['239', '343', '444', '205', 'auto', 'auto'],
                            clip: 'rect(0px 1.77783203125px 205px 0px)'
                        },
                        {
                            id: 'uni1_bio_text2',
                            symbolName: 'uni1_bio_text2',
                            type: 'rect',
                            rect: ['239', '343', '444', '205', 'auto', 'auto']
                        },
                        {
                            id: 'uni1_bio_text3',
                            symbolName: 'uni1_bio_text3',
                            type: 'rect',
                            rect: ['239', '343', '444', '205', 'auto', 'auto']
                        },
                        {
                            id: 'uni1_bio_text4',
                            symbolName: 'uni1_bio_text4',
                            type: 'rect',
                            rect: ['239', '343', '444', '210', 'auto', 'auto']
                        },
                        {
                            id: 'uni1_bio_text5',
                            symbolName: 'uni1_bio_text5',
                            type: 'rect',
                            rect: ['239', '343', '444', '205', 'auto', 'auto']
                        },
                        {
                            id: 'uni1_cif_text',
                            symbolName: 'uni1_cif_text',
                            display: 'none',
                            type: 'rect',
                            rect: ['187', '210', '567', '347', 'auto', 'auto']
                        },
                        {
                            id: 'uni2_titulo',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '1px', '691px', '166px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uni2_titulo.svg",'0px','0px']
                        },
                        {
                            id: 'uni2_menu-02',
                            type: 'image',
                            rect: ['1101', '255px', '179px', '58px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uni2_menu-02.svg",'0px','0px']
                        },
                        {
                            id: 'uni2_menu-03',
                            type: 'image',
                            rect: ['1101', '321px', '179px', '58px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uni2_menu-03.svg",'0px','0px']
                        },
                        {
                            id: 'uni2_menu',
                            display: 'none',
                            type: 'image',
                            rect: ['1101px', '257px', '179px', '130px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"uni2_menu.svg",'0px','0px']
                        },
                        {
                            id: 'uni2_disca_text',
                            symbolName: 'uni2_disca_text',
                            display: 'none',
                            type: 'rect',
                            rect: ['200', '225', '565', '323', 'auto', 'auto']
                        },
                        {
                            id: 'uni2_disca_text1',
                            symbolName: 'uni2_disca_text1',
                            type: 'rect',
                            rect: ['247', '343', '444', '205', 'auto', 'auto']
                        },
                        {
                            id: 'uni2_disca_text2',
                            symbolName: 'uni2_disca_text2',
                            type: 'rect',
                            rect: ['247', '343', '444', '206', 'auto', 'auto']
                        },
                        {
                            id: 'uni2_disca_text3',
                            symbolName: 'uni2_disca_text3',
                            type: 'rect',
                            rect: ['247', '343', '444', '210', 'auto', 'auto']
                        },
                        {
                            id: 'uni2_disca_reflexion',
                            symbolName: 'uni2_disca_reflexion',
                            display: 'none',
                            type: 'rect',
                            rect: ['180', '162', '634', '395', 'auto', 'auto']
                        },
                        {
                            id: 'uni2_pobreza',
                            symbolName: 'uni2_pobreza',
                            display: 'none',
                            type: 'rect',
                            rect: ['180', '228', '603', '280', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'uni2_pobreza_text-02',
                            display: 'none',
                            type: 'image',
                            rect: ['179px', '327px', '136px', '123px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"uni2_pobreza_text-02.svg",'0px','0px'],
                            transform: [[],['180']]
                        },
                        {
                            id: 'uni2_pobreza_text-03',
                            type: 'image',
                            rect: ['627', '606px', '155px', '37px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"uni2_pobreza_text-03.svg",'0px','0px']
                        },
                        {
                            id: 'uni2_pobreza_text-04',
                            type: 'image',
                            rect: ['627', '329px', '155px', '37px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"uni2_pobreza_text-04.svg",'0px','0px']
                        },
                        {
                            id: 'uni2_pobreza_text-05',
                            type: 'image',
                            rect: ['627', '376', '155px', '37px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"uni2_pobreza_text-05.svg",'0px','0px']
                        },
                        {
                            id: 'uni2_pobreza_text-06',
                            type: 'image',
                            rect: ['627', '425', '155px', '37px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"uni2_pobreza_text-06.svg",'0px','0px']
                        },
                        {
                            id: 'uni2_pobreza_text-07',
                            type: 'image',
                            rect: ['627', '471', '155px', '37px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"uni2_pobreza_text-07.svg",'0px','0px']
                        },
                        {
                            id: 'ver_info',
                            display: 'none',
                            type: 'rect',
                            rect: ['170px', '314px', '134px', '130px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'uni2_pobreza_circulo',
                            symbolName: 'uni2_pobreza_circulo',
                            display: 'none',
                            type: 'rect',
                            rect: ['226', '190', '528', '329', 'auto', 'auto']
                        },
                        {
                            id: 'uni2_pobreza_edu',
                            symbolName: 'uni2_pobreza_edu',
                            display: 'none',
                            type: 'rect',
                            rect: ['226', '190', '528', '329', 'auto', 'auto']
                        },
                        {
                            id: 'uni2_pobreza_trabajo',
                            symbolName: 'uni2_pobreza_trabajo',
                            display: 'none',
                            type: 'rect',
                            rect: ['226', '190', '528', '329', 'auto', 'auto']
                        },
                        {
                            id: 'uni2_pobreza_salud',
                            symbolName: 'uni2_pobreza_salud',
                            display: 'none',
                            type: 'rect',
                            rect: ['226', '190', '528', '329', 'auto', 'auto']
                        },
                        {
                            id: 'uni2_pobreza_oms',
                            symbolName: 'uni2_pobreza_oms',
                            display: 'none',
                            type: 'rect',
                            rect: ['137', '190', '677', '329', 'auto', 'auto']
                        },
                        {
                            id: 'uni3_titulo',
                            type: 'image',
                            rect: ['0px', '1px', '691px', '166px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uni3_titulo.svg",'0px','0px']
                        },
                        {
                            id: 'uni5_btn_inicio',
                            display: 'none',
                            type: 'image',
                            rect: ['1280px', '248px', '198px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"uni5_btn_inicio.svg",'0px','0px']
                        },
                        {
                            id: 'uni3_intro',
                            display: 'none',
                            type: 'text',
                            rect: ['199px', '191px', '560px', '322px', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-weight: 700;\">En Colombia, de acuerdo con el Censo de 2005 (DANE, 2007) el 6,3% de la población presenta limitaciones permanentes en las actividades, es decir  aproximadamente 2.624.898</span> personas colombianas, quienes, al entrar en interacción con las barreras del entorno configuran una situación de discapacidad.&nbsp;\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Desde el año 2002 se implementa un sistema de información <span style=\"font-weight: 600;\">(el Registro para la Localización y Caracterización de las Personas con Discapacidad - RLCPD</span>) que permite recolectar datos de las personas con discapacidad con el fin de localizarlas y caracterizarlas en los departamentos, distritos, municipios y localidades del país y así disponer de información actualizada para la toma de decisiones en todo el país. <span style=\"font-weight: 600;\">Con corte a mayo de 2018 mediante el RLCPD se ha logrado caracterizar a 1.411.515 PCD, correspondiente al 52 % del dato de referencia del DANE 2005.</span>\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">El RLCPD cuenta con información confiable que permite desde variables personales y sociodemográficas comprender las situaciones específicas que viven las PCD en Colombia. Lo anterior se logra a partir de la información que las PCD brindan al momento de diligenciar o actualizar la información del RLCPD, en una ventana de tiempo que va del año 2002 a la fecha, luego, los datos deben ser entendidos como el estado de las personas con discapacidad al momento de registrase.</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(60,60,59,1.00)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.22857']]
                        },
                        {
                            id: 'uni3_menu-02',
                            display: 'block',
                            type: 'image',
                            rect: ['1289px', '185px', '198px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"uni3_menu-02.svg",'0px','0px']
                        },
                        {
                            id: 'uni5_btn_inicio3',
                            display: 'none',
                            type: 'image',
                            rect: ['1285px', '141px', '198px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"uni5_btn_inicio.svg",'0px','0px']
                        },
                        {
                            id: 'uni3_menu-03',
                            display: 'block',
                            type: 'image',
                            rect: ['1081px', '227px', '198px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"uni3_menu-03.svg",'0px','0px']
                        },
                        {
                            id: 'uni3_menu-04',
                            display: 'block',
                            type: 'image',
                            rect: ['1081', '268', '198px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"uni3_menu-04.svg",'0px','0px']
                        },
                        {
                            id: 'uni3_menu-05',
                            display: 'block',
                            type: 'image',
                            rect: ['1081', '310px', '198px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"uni3_menu-05.svg",'0px','0px']
                        },
                        {
                            id: 'uni3_menu-06',
                            display: 'block',
                            type: 'image',
                            rect: ['1081', '355px', '198px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"uni3_menu-06.svg",'0px','0px']
                        },
                        {
                            id: 'uni3_menu-07',
                            display: 'block',
                            type: 'image',
                            rect: ['1081', '397px', '198px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"uni3_menu-07.svg",'0px','0px']
                        },
                        {
                            id: 'uni3_menu-08',
                            display: 'block',
                            type: 'image',
                            rect: ['1081', '439', '198px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"uni3_menu-08.svg",'0px','0px']
                        },
                        {
                            id: 'uni3_menu-09',
                            display: 'block',
                            type: 'image',
                            rect: ['1081', '482', '198px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"uni3_menu-09.svg",'0px','0px']
                        },
                        {
                            id: 'uni3_sexo',
                            symbolName: 'uni3_sexo',
                            display: 'none',
                            type: 'rect',
                            rect: ['335px', '257px', '498', '214', 'auto', 'auto'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 17, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'uni3_edad',
                            symbolName: 'uni3_edad',
                            type: 'rect',
                            rect: ['247', '192', '619', '329', 'auto', 'auto']
                        },
                        {
                            id: 'uni3_edad_grafica2',
                            symbolName: 'uni3_edad_grafica2',
                            display: 'none',
                            type: 'rect',
                            rect: ['216', '147', '735', '414', 'auto', 'auto']
                        },
                        {
                            id: 'uni3_geogra',
                            symbolName: 'uni3_geogra',
                            type: 'rect',
                            rect: ['233', '194', '619', '286', 'auto', 'auto']
                        },
                        {
                            id: 'uni3_geogra_g4',
                            symbolName: 'uni3_geogra_g4',
                            display: 'none',
                            type: 'rect',
                            rect: ['205', '157', '735', '414', 'auto', 'auto']
                        },
                        {
                            id: 'uni3_vivienda',
                            symbolName: 'uni3_vivienda',
                            type: 'rect',
                            rect: ['220', '191', '729', '356', 'auto', 'auto']
                        },
                        {
                            id: 'uni3_estudio',
                            symbolName: 'uni3_estudio',
                            type: 'rect',
                            rect: ['200', '181', '766', '376', 'auto', 'auto']
                        },
                        {
                            id: 'uni3_trabajo',
                            symbolName: 'uni3_trabajo',
                            type: 'rect',
                            rect: ['215', '223', '483', '227', 'auto', 'auto']
                        },
                        {
                            id: 'uni3_trabajo_g72',
                            symbolName: 'uni3_trabajo_g7',
                            display: 'none',
                            type: 'rect',
                            rect: ['199', '149', '735', '414', 'auto', 'auto']
                        },
                        {
                            id: 'uni3_trabajo_reflex',
                            symbolName: 'uni3_trabajo_reflex',
                            display: 'none',
                            type: 'rect',
                            rect: ['180', '153', '819', '395', 'auto', 'auto']
                        },
                        {
                            id: 'uni3_salud',
                            symbolName: 'uni3_salud',
                            type: 'rect',
                            rect: ['205', '184', '754', '371', 'auto', 'auto']
                        },
                        {
                            id: 'uni3_rehab',
                            symbolName: 'uni3_rehab',
                            type: 'rect',
                            rect: ['302', '224', '560', '291', 'auto', 'auto']
                        },
                        {
                            id: 'uni4_titulo',
                            type: 'image',
                            rect: ['0px', '1px', '691px', '166px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uni4_titulo.svg",'0px','0px']
                        },
                        {
                            id: 'uni4_text',
                            symbolName: 'uni4_text',
                            display: 'none',
                            type: 'rect',
                            rect: ['210', '194', '505', '331', 'auto', 'auto'],
                            transform: [[],[],[],['1','0.23867']]
                        },
                        {
                            id: 'uni4_antecede',
                            symbolName: 'uni4_antecede',
                            display: 'none',
                            type: 'rect',
                            rect: ['230', '198', '652', '331', 'auto', 'auto']
                        },
                        {
                            id: 'uni4_btn_volverCopy',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '523px', '134px', '50px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"uni4_btn_volver.svg",'0px','0px']
                        },
                        {
                            id: 'uni5_titulo',
                            type: 'image',
                            rect: ['0px', '1px', '691px', '166px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uni5_titulo.svg",'0px','0px']
                        },
                        {
                            id: 'uni5_menu',
                            display: 'block',
                            type: 'image',
                            rect: ['1082px', '296px', '198px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"uni5_menu.svg",'0px','0px']
                        },
                        {
                            id: 'uni5_text',
                            display: 'none',
                            type: 'text',
                            rect: ['-343px', '251px', '301px', '20px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​La Constitución Política de Colombia de 1991:</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(60,60,59,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'uni5_consti_1',
                            symbolName: 'uni5_consti_1',
                            display: 'none',
                            type: 'rect',
                            rect: ['1320px', '300px', '552', '196', 'auto', 'auto']
                        },
                        {
                            id: 'uni5_consti_2',
                            symbolName: 'uni5_consti_2',
                            type: 'rect',
                            rect: ['207', '266', '732', '196', 'auto', 'auto']
                        },
                        {
                            id: 'uni5_consti_3',
                            type: 'image',
                            rect: ['207px', '266px', '732px', '196px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uni5_consti_3.svg",'0px','0px']
                        },
                        {
                            id: 'Rectangle',
                            display: 'none',
                            type: 'rect',
                            rect: ['543px', '344px', '129px', '28px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(44,90,103,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'uni5_consti_3dig',
                            symbolName: 'uni5_consti_3dig',
                            display: 'none',
                            type: 'rect',
                            rect: ['466', '384', '316', '110', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'uni5_consti_4',
                            symbolName: 'uni5_consti_4',
                            type: 'rect',
                            rect: ['207', '267', '732', '196', 'auto', 'auto']
                        },
                        {
                            id: 'uni5_consti_5',
                            symbolName: 'uni5_consti_5',
                            type: 'rect',
                            rect: ['207', '168', '679', '403', 'auto', 'auto']
                        },
                        {
                            id: 'uni5_mandatos',
                            symbolName: 'uni5_mandatos',
                            type: 'rect',
                            rect: ['220', '224', '431', '270', 'auto', 'auto']
                        },
                        {
                            id: 'uni5_mandatos_atencion',
                            symbolName: 'uni5_mandatos_atencion',
                            display: 'none',
                            type: 'rect',
                            rect: ['199', '195', '528', '329', 'auto', 'auto']
                        },
                        {
                            id: 'uni6_titulo',
                            type: 'image',
                            rect: ['0px', '-2px', '691px', '166px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"uni6_titulo.svg",'0px','0px']
                        },
                        {
                            id: 'uni6_menu-02',
                            type: 'image',
                            rect: ['1082', '251', '198px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"uni6_menu-02.svg",'0px','0px']
                        },
                        {
                            id: 'uni6_menu-03',
                            type: 'image',
                            rect: ['1082', '294', '198px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"uni6_menu-03.svg",'0px','0px']
                        },
                        {
                            id: 'uni6_menu-04',
                            type: 'image',
                            rect: ['1082', '338', '198px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"uni6_menu-04.svg",'0px','0px']
                        },
                        {
                            id: 'uni6_marco_text',
                            symbolName: 'uni6_marco_text',
                            display: 'none',
                            type: 'rect',
                            rect: ['215', '223', '693', '326', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'uni6_marco_text1_2',
                            symbolName: 'uni6_marco_text1_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['312', '319', '599', '230', 'auto', 'auto'],
                            clip: 'rect(0px 1.94140625px 230px 0px)'
                        },
                        {
                            id: 'uni6_marco_text1_3',
                            symbolName: 'uni6_marco_text1_3',
                            type: 'rect',
                            rect: ['309', '320', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'uni6_marco_text3',
                            symbolName: 'uni6_marco_text3',
                            type: 'rect',
                            rect: ['309', '320', '599', '230', 'auto', 'auto']
                        },
                        {
                            id: 'uni6_marco_text4',
                            symbolName: 'uni6_marco_text4',
                            type: 'rect',
                            rect: ['309', '320', '599', '230', 'auto', 'auto']
                        },
                        {
                            id: 'uni6_marco_text5',
                            symbolName: 'uni6_marco_text5',
                            type: 'rect',
                            rect: ['309', '320', '599', '230', 'auto', 'auto']
                        },
                        {
                            id: 'uni6_marco_text6',
                            symbolName: 'uni6_marco_text6',
                            type: 'rect',
                            rect: ['309', '320', '599', '230', 'auto', 'auto']
                        },
                        {
                            id: 'uni6_norma_text',
                            symbolName: 'uni6_norma_text',
                            display: 'none',
                            type: 'rect',
                            rect: ['207', '214', '692', '359', 'auto', 'auto']
                        },
                        {
                            id: 'uni6_norma_text1',
                            symbolName: 'uni6_norma_text1',
                            display: 'none',
                            type: 'rect',
                            rect: ['208', '387', '690', '187', 'auto', 'auto'],
                            clip: 'rect(0px 690px -0.6923828125px 0px)'
                        },
                        {
                            id: 'uni6_norma_text2',
                            symbolName: 'uni6_norma_text2',
                            type: 'rect',
                            rect: ['208', '387', '690', '187', 'auto', 'auto']
                        },
                        {
                            id: 'uni6_norma_text3',
                            symbolName: 'uni6_norma_text3',
                            type: 'rect',
                            rect: ['208', '387', '690', '187', 'auto', 'auto']
                        },
                        {
                            id: 'uni6_norma_text4',
                            symbolName: 'uni6_norma_text4',
                            type: 'rect',
                            rect: ['208', '387', '690', '187', 'auto', 'auto']
                        },
                        {
                            id: 'uni6_norma_text5',
                            symbolName: 'uni6_norma_text5',
                            type: 'rect',
                            rect: ['208', '387', '690', '187', 'auto', 'auto']
                        },
                        {
                            id: 'uni6_norma_text6',
                            symbolName: 'uni6_norma_text6',
                            type: 'rect',
                            rect: ['208', '387', '690', '187', 'auto', 'auto']
                        },
                        {
                            id: 'uni6_norma_text7',
                            symbolName: 'uni6_norma_text7',
                            type: 'rect',
                            rect: ['208', '386', '690', '188', 'auto', 'auto']
                        },
                        {
                            id: 'uni6_norma_text8',
                            symbolName: 'uni6_norma_text8',
                            type: 'rect',
                            rect: ['208', '386', '690', '188', 'auto', 'auto']
                        },
                        {
                            id: 'uni6_norma_text9',
                            symbolName: 'uni6_norma_text9',
                            type: 'rect',
                            rect: ['208', '386', '690', '188', 'auto', 'auto']
                        },
                        {
                            id: 'uni6_conside',
                            symbolName: 'uni6_conside',
                            type: 'rect',
                            rect: ['216', '145', '716', '276', 'auto', 'auto'],
                            clip: 'rect(0px 716px 550px 0px)'
                        },
                        {
                            id: 'btn_atencion',
                            display: 'none',
                            type: 'image',
                            rect: ['736px', '62px', '65px', '65px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"btn_atencion.svg",'0px','0px']
                        },
                        {
                            id: 'sabias2',
                            symbolName: 'sabias',
                            display: 'none',
                            type: 'rect',
                            rect: ['741', '60', '56', '70', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0'
                        },
                        {
                            id: 'sabias_sobre',
                            display: 'none',
                            type: 'image',
                            rect: ['741', '60', '56px', '70px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sabias_sobre.svg",'0px','0px']
                        },
                        {
                            id: 'btn_unidades',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '203px', '89px', '182px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"btn_unidades.svg",'0px','0px']
                        },
                        {
                            id: 'marcador',
                            display: 'none',
                            type: 'image',
                            rect: ['1092px', '309px', '17px', '20px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador.svg",'0px','0px']
                        },
                        {
                            id: 'marcadorCopy',
                            display: 'none',
                            type: 'image',
                            rect: ['1092px', '281px', '17px', '20px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador.svg",'0px','0px']
                        },
                        {
                            id: 'marcadorCopy2',
                            display: 'none',
                            type: 'image',
                            rect: ['1092px', '341px', '17px', '20px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador.svg",'0px','0px']
                        },
                        {
                            id: 'marcadorCopy3',
                            display: 'none',
                            type: 'image',
                            rect: ['1077px', '198px', '17px', '20px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador.svg",'0px','0px']
                        },
                        {
                            id: 'marcadorCopy7',
                            display: 'none',
                            type: 'image',
                            rect: ['1077px', '239px', '17px', '20px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador.svg",'0px','0px']
                        },
                        {
                            id: 'marcadorCopy8',
                            display: 'none',
                            type: 'image',
                            rect: ['1077px', '283px', '17px', '20px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador.svg",'0px','0px']
                        },
                        {
                            id: 'marcadorCopy9',
                            display: 'none',
                            type: 'image',
                            rect: ['1077px', '324px', '17px', '20px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador.svg",'0px','0px']
                        },
                        {
                            id: 'marcadorCopy10',
                            display: 'none',
                            type: 'image',
                            rect: ['1077px', '369px', '17px', '20px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador.svg",'0px','0px']
                        },
                        {
                            id: 'marcadorCopy11',
                            display: 'none',
                            type: 'image',
                            rect: ['1077px', '412px', '17px', '20px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador.svg",'0px','0px']
                        },
                        {
                            id: 'marcadorCopy12',
                            display: 'none',
                            type: 'image',
                            rect: ['1077px', '452px', '17px', '20px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador.svg",'0px','0px']
                        },
                        {
                            id: 'marcadorCopy13',
                            display: 'none',
                            type: 'image',
                            rect: ['1077px', '493px', '17px', '20px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador.svg",'0px','0px']
                        },
                        {
                            id: 'marcadorCopy4',
                            display: 'none',
                            type: 'image',
                            rect: ['1077px', '262px', '17px', '20px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador.svg",'0px','0px']
                        },
                        {
                            id: 'marcadorCopy5',
                            display: 'none',
                            type: 'image',
                            rect: ['1077px', '304px', '17px', '20px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador.svg",'0px','0px']
                        },
                        {
                            id: 'marcadorCopy6',
                            display: 'none',
                            type: 'image',
                            rect: ['1077px', '353px', '17px', '20px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador.svg",'0px','0px']
                        },
                        {
                            id: 'marcadorCopy14',
                            display: 'none',
                            type: 'image',
                            rect: ['1075px', '307px', '17px', '20px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"marcador.svg",'0px','0px']
                        },
                        {
                            id: 'botones_unidades',
                            display: 'none',
                            type: 'image',
                            rect: ['81px', '300px', '704px', '242px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"botones_unidades.svg",'0px','0px']
                        },
                        {
                            id: 'botones_unidades-022',
                            display: 'none',
                            type: 'image',
                            rect: ['80px', '310px', '219px', '219px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"botones_unidades-02.svg",'0px','0px']
                        },
                        {
                            id: 'botones_unidades-02-6',
                            display: 'none',
                            type: 'image',
                            rect: ['673px', '316px', '219px', '219px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"botones_unidades-02-6-02.svg",'0px','0px']
                        },
                        {
                            id: 'botones_unidades-02-5',
                            display: 'none',
                            type: 'image',
                            rect: ['540px', '313px', '219px', '219px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"botones_unidades-02-5-02.svg",'0px','0px']
                        },
                        {
                            id: 'botones_unidades-02-4',
                            display: 'none',
                            type: 'image',
                            rect: ['421px', '314', '219px', '219px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"botones_unidades-02-4-02.svg",'0px','0px']
                        },
                        {
                            id: 'botones_unidades-02-3',
                            display: 'none',
                            type: 'image',
                            rect: ['316px', '316px', '219px', '219px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"botones_unidades-02-3-02-02.svg",'0px','0px']
                        },
                        {
                            id: 'botones_unidades-02-02',
                            display: 'none',
                            type: 'image',
                            rect: ['207px', '316px', '219px', '219px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"botones_unidades-02-02.svg",'0px','0px']
                        },
                        {
                            id: 'btn_lineaTiempo',
                            display: 'none',
                            type: 'rect',
                            rect: ['507px', '493px', '240px', '65px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'btn_inicio',
                            display: 'none',
                            type: 'rect',
                            rect: ['186px', '490px', '240px', '65px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'intro_sabias',
                            symbolName: 'intro_sabias',
                            display: 'none',
                            type: 'rect',
                            rect: ['210', '137', '634', '403', 'auto', 'auto']
                        },
                        {
                            id: 'btn_sabias',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['741px', '60px', '56px', '56px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(44,90,103,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'btn_sabiasCopy',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['741px', '60px', '56px', '56px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(44,90,103,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'btn_sabiasCopy2',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['741px', '60px', '56px', '56px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(44,90,103,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'btn_sabiasCopy3',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['741px', '60px', '56px', '56px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(44,90,103,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'screen-change',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"screen-change.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'linea_1-2',
                            display: 'none',
                            type: 'rect',
                            rect: ['367px', '316px', '83px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(44,90,103,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'linea_1-2Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['456px', '316px', '64px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(44,90,103,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'linea_1-2Copy5',
                            display: 'none',
                            type: 'rect',
                            rect: ['530px', '313px', '64px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(44,90,103,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'linea_1-2Copy7',
                            display: 'none',
                            type: 'rect',
                            rect: ['608px', '318px', '64px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(44,90,103,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'linea_1-2Copy8',
                            display: 'none',
                            type: 'rect',
                            rect: ['685px', '318px', '64px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(44,90,103,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'linea_1-2Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['757px', '318px', '64px', '80px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(44,90,103,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'uni4_btn_volverCopy2',
                            display: 'none',
                            type: 'image',
                            rect: ['-154px', '529px', '134px', '50px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"uni4_btn_volver.svg",'0px','0px']
                        },
                        {
                            id: 'btn_uni1',
                            display: 'none',
                            type: 'rect',
                            rect: ['111px', '317px', '103px', '212px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'btn_uni1Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['225px', '317px', '103px', '212px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'btn_uni1Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['341px', '321px', '103px', '212px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'btn_uni1Copy3',
                            display: 'none',
                            type: 'rect',
                            rect: ['462px', '317px', '103px', '212px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'btn_uni1Copy4',
                            display: 'none',
                            type: 'rect',
                            rect: ['570px', '310px', '103px', '212px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'btn_uni1Copy5',
                            display: 'none',
                            type: 'rect',
                            rect: ['694px', '321px', '103px', '212px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4',
                            display: 'none',
                            type: 'rect',
                            rect: ['200px', '417px', '193px', '68px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['395px', '417px', '193px', '68px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['588px', '417px', '193px', '68px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4Copy3',
                            display: 'none',
                            type: 'rect',
                            rect: ['1100px', '287px', '193px', '57px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4Copy5',
                            display: 'none',
                            type: 'rect',
                            rect: ['1093px', '226px', '193px', '57px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4Copy4',
                            display: 'none',
                            type: 'rect',
                            rect: ['1093px', '350px', '193px', '57px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle9',
                            display: 'none',
                            type: 'rect',
                            rect: ['199px', '350px', '47px', '28px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle9Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['199px', '389px', '47px', '28px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle9Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['199px', '429px', '47px', '28px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle9Copy3',
                            display: 'none',
                            type: 'rect',
                            rect: ['199px', '467px', '47px', '28px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle9Copy4',
                            display: 'none',
                            type: 'rect',
                            rect: ['199px', '513px', '47px', '28px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle8',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '182px', '89px', '198px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'unidades',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '182px', '89px', '198px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle10',
                            display: 'none',
                            type: 'rect',
                            rect: ['1101px', '319px', '179px', '49px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle10Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['1101px', '265px', '179px', '49px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle11',
                            display: 'none',
                            type: 'rect',
                            rect: ['200px', '343px', '56px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle11Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['200px', '383px', '56px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle11Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['200px', '425px', '56px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'unidadesCopy',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '182px', '89px', '198px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle21',
                            display: 'none',
                            type: 'rect',
                            rect: ['714px', '236px', '152px', '125px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle21Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['714px', '397px', '152px', '125px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle21Copy3',
                            display: 'none',
                            type: 'rect',
                            rect: ['700px', '194px', '152px', '125px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle21Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['710px', '354px', '152px', '125px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle21Copy4',
                            display: 'none',
                            type: 'rect',
                            rect: ['574px', '287px', '152px', '125px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle7',
                            display: 'none',
                            type: 'rect',
                            rect: ['215px', '467px', '242px', '56px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(44,90,103,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'flecha_dere2',
                            display: 'none',
                            type: 'image',
                            rect: ['707', '458', '40px', '40px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"flecha_dere.svg",'0px','0px']
                        },
                        {
                            id: 'Rectangle13',
                            display: 'none',
                            type: 'rect',
                            rect: ['691px', '455px', '49px', '50px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(44,90,103,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle14',
                            display: 'none',
                            type: 'rect',
                            rect: ['727px', '300px', '164px', '147px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(44,90,103,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'flecha_dere',
                            display: 'none',
                            type: 'image',
                            rect: ['900', '448', '40px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"flecha_dere.svg",'0px','0px']
                        },
                        {
                            id: 'flecha_dereCopy',
                            display: 'none',
                            type: 'image',
                            rect: ['900', '448', '40px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"flecha_dere.svg",'0px','0px']
                        },
                        {
                            id: 'flecha_izq',
                            display: 'none',
                            type: 'image',
                            rect: ['207px', '448px', '40px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"flecha_izq.svg",'0px','0px']
                        },
                        {
                            id: 'flecha_dereCopy2',
                            display: 'none',
                            type: 'image',
                            rect: ['900', '448', '40px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"flecha_dere.svg",'0px','0px']
                        },
                        {
                            id: 'flecha_izqCopy',
                            display: 'none',
                            type: 'image',
                            rect: ['207px', '448px', '40px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"flecha_izq.svg",'0px','0px']
                        },
                        {
                            id: 'flecha_dereCopy3',
                            display: 'none',
                            type: 'image',
                            rect: ['900', '448', '40px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"flecha_dere.svg",'0px','0px']
                        },
                        {
                            id: 'flecha_izqCopy2',
                            display: 'none',
                            type: 'image',
                            rect: ['207px', '448px', '40px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"flecha_izq.svg",'0px','0px']
                        },
                        {
                            id: 'flecha_izqCopy3',
                            display: 'none',
                            type: 'image',
                            rect: ['207px', '448px', '40px', '40px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"flecha_izq.svg",'0px','0px']
                        },
                        {
                            id: 'Rectangle18',
                            display: 'none',
                            type: 'rect',
                            rect: ['208px', '378px', '105px', '111px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(44,90,103,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle18Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['378px', '378px', '105px', '111px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(44,90,103,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle18Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['549px', '378px', '105px', '111px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(44,90,103,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle24',
                            display: 'none',
                            type: 'rect',
                            rect: ['215px', '321px', '101px', '30px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(44,90,103,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'uni5_mandatos_salud',
                            symbolName: 'uni5_mandatos_salud',
                            display: 'none',
                            type: 'rect',
                            rect: ['199', '195', '528', '329', 'auto', 'auto']
                        },
                        {
                            id: 'uni5_mandatos_trabajo',
                            symbolName: 'uni5_mandatos_trabajo',
                            type: 'rect',
                            rect: ['199', '195', '528', '329', 'auto', 'auto']
                        },
                        {
                            id: 'uni5_mandatos_educ',
                            symbolName: 'uni5_mandatos_educ',
                            display: 'none',
                            type: 'rect',
                            rect: ['199', '195', '528', '329', 'auto', 'auto']
                        },
                        {
                            id: 'Rectangle24Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['215px', '357px', '101px', '30px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(44,90,103,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle24Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['215px', '395px', '101px', '30px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(44,90,103,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle24Copy3',
                            display: 'none',
                            type: 'rect',
                            rect: ['215px', '431px', '101px', '30px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(44,90,103,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle24Copy4',
                            display: 'none',
                            type: 'rect',
                            rect: ['215px', '467px', '101px', '30px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(44,90,103,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle24Copy5',
                            display: 'none',
                            type: 'rect',
                            rect: ['215px', '504px', '101px', '30px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(44,90,103,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle25',
                            display: 'none',
                            type: 'rect',
                            rect: ['208px', '363px', '24px', '26px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(44,90,103,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle25Copy',
                            display: 'none',
                            type: 'rect',
                            rect: ['242px', '363px', '24px', '26px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(44,90,103,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle25Copy2',
                            display: 'none',
                            type: 'rect',
                            rect: ['279px', '363px', '24px', '26px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(44,90,103,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle25Copy3',
                            display: 'none',
                            type: 'rect',
                            rect: ['315px', '363px', '24px', '26px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(44,90,103,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle25Copy4',
                            display: 'none',
                            type: 'rect',
                            rect: ['351px', '363px', '24px', '26px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(44,90,103,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle25Copy5',
                            display: 'none',
                            type: 'rect',
                            rect: ['387px', '363px', '24px', '26px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(44,90,103,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle25Copy6',
                            display: 'none',
                            type: 'rect',
                            rect: ['423px', '363px', '24px', '26px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(44,90,103,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle25Copy7',
                            display: 'none',
                            type: 'rect',
                            rect: ['458px', '363px', '24px', '26px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(44,90,103,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle25Copy8',
                            display: 'none',
                            type: 'rect',
                            rect: ['495px', '363px', '24px', '26px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(44,90,103,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'uni4_sabias',
                            symbolName: 'uni4_sabias',
                            display: 'none',
                            type: 'rect',
                            rect: ['200', '154', '634', '395', 'auto', 'auto']
                        },
                        {
                            id: 'opciones',
                            symbolName: 'opciones',
                            type: 'rect',
                            rect: ['1300px', '548px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'menu_opciones',
                            symbolName: 'menu_opciones',
                            display: 'none',
                            type: 'rect',
                            rect: ['1003px', '205px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'info',
                            symbolName: 'info',
                            display: 'none',
                            type: 'rect',
                            rect: ['-7', '0', '1286', '602', 'auto', 'auto']
                        },
                        {
                            id: 'uni4_ante_g9',
                            symbolName: 'uni4_ante_g9',
                            display: 'none',
                            type: 'rect',
                            rect: ['45', '23', '1225', '555', 'auto', 'auto']
                        },
                        {
                            id: 'uni3_edad_grafica1',
                            symbolName: 'uni3_edad_grafica1',
                            display: 'none',
                            type: 'rect',
                            rect: ['1', '-1', '1278', '603', 'auto', 'auto']
                        },
                        {
                            id: 'uni3_geogra_grafica3',
                            symbolName: 'uni3_geogra_grafica3',
                            display: 'none',
                            type: 'rect',
                            rect: ['205', '157', '735', '414', 'auto', 'auto']
                        },
                        {
                            id: 'mapa',
                            symbolName: 'mapa',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1280', '600', 'auto', 'auto']
                        },
                        {
                            id: 'creditos',
                            symbolName: 'creditos',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1280', '600', 'auto', 'auto']
                        },
                        {
                            id: 'cc',
                            symbolName: 'cc',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '1280', '600', 'auto', 'auto']
                        },
                        {
                            id: 'actividad',
                            symbolName: 'actividad',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'pista_2_modificada',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"pista%202_modificada.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'clic_ai',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"clic_ai.mp3"],
                            preload: 'auto'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1280px', '600px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 98000,
                    autoPlay: true,
                    labels: {
                        "inicio": 4000,
                        "LineaTiempo": 5000,
                        "LT1": 6000,
                        "LT1-1": 7474,
                        "LT2": 8826,
                        "LT2-1": 10326,
                        "LT3": 11750,
                        "LT3-1": 13077,
                        "Unidades": 14576,
                        "Uni1": 16750,
                        "mod": 19500,
                        "enfoque": 20887,
                        "enfoque1": 21923,
                        "enfoque2": 23000,
                        "enfoque3": 24500,
                        "enfoque4": 26086,
                        "enfoque5": 27619,
                        "cif": 29250,
                        "Uni2": 32000,
                        "discapacidad1": 34500,
                        "discapacidad2": 36000,
                        "discapacidad3": 37500,
                        "situaciones": 39000,
                        "Uni3": 44000,
                        "intro3": 49147,
                        "sexo": 49997,
                        "edad": 51500,
                        "geografica": 53000,
                        "vivienda": 54500,
                        "estudio": 56016,
                        "trabajo": 57500,
                        "salud": 59022,
                        "rehabilitacion": 60500,
                        "Uni4": 62750,
                        "antecentes": 63685,
                        "Uni5": 64830,
                        "consti1": 65255,
                        "consti2": 66500,
                        "consti3": 67758,
                        "dignidad": 69250,
                        "consti4": 70020,
                        "consti5": 71245,
                        "mandatos": 72502,
                        "Uni6": 73735,
                        "ley361": 77000,
                        "ley1098": 78250,
                        "ley1145": 79493,
                        "1348": 80750,
                        "ley1818": 82000,
                        "compes": 83250,
                        "normatividad": 84500,
                        "n1": 86006,
                        "n2": 86821,
                        "n3": 88000,
                        "n4": 89228,
                        "n5": 90510,
                        "n6": 91780,
                        "n7": 92997,
                        "n8": 94250,
                        "n9": 95492,
                        "consideraciones": 96837
                    },
                    data: [
                        [
                            "eid446",
                            "left",
                            49147,
                            505,
                            "easeInElastic",
                            "${uni3_menu-09}",
                            '1288px',
                            '1081px'
                        ],
                        [
                            "eid457",
                            "display",
                            62317,
                            0,
                            "easeInElastic",
                            "${uni3_menu-04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid534",
                            "top",
                            67745,
                            1090,
                            "linear",
                            "${uni5_consti_3}",
                            '299px',
                            '266px'
                        ],
                        [
                            "eid635",
                            "display",
                            95500,
                            0,
                            "easeInElastic",
                            "${uni6_norma_text9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid636",
                            "display",
                            96750,
                            0,
                            "easeInElastic",
                            "${uni6_norma_text9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1105",
                            "display",
                            97000,
                            0,
                            "easeInElastic",
                            "${marcadorCopy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid558",
                            "display",
                            73735,
                            0,
                            "easeInElastic",
                            "${uni6_titulo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1387",
                            "display",
                            0,
                            0,
                            "linear",
                            "${actividad}",
                            'none',
                            'none'
                        ],
                        [
                            "eid577",
                            "display",
                            73735,
                            0,
                            "easeInElastic",
                            "${uni6_marco_text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid607",
                            "display",
                            84500,
                            0,
                            "easeInElastic",
                            "${uni6_marco_text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1223",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_iniciar_sobre}",
                            'none',
                            'none'
                        ],
                        [
                            "eid404",
                            "rotateZ",
                            42750,
                            750,
                            "linear",
                            "${uni2_pobreza_text-02}",
                            '180deg',
                            '0deg'
                        ],
                        [
                            "eid1056",
                            "display",
                            67250,
                            0,
                            "easeInElastic",
                            "${flecha_dereCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1057",
                            "display",
                            67769,
                            0,
                            "easeInElastic",
                            "${flecha_dereCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid366",
                            "clip",
                            34500,
                            1250,
                            "linear",
                            "${uni2_disca_text1}",
                            [0,1.77783203125,205,0],
                            [0,444,205,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid330",
                            "top",
                            20887,
                            951,
                            "linear",
                            "${marcador}",
                            '247px',
                            '309px'
                        ],
                        [
                            "eid332",
                            "top",
                            29238,
                            762,
                            "linear",
                            "${marcador}",
                            '309px',
                            '375px'
                        ],
                        [
                            "eid395",
                            "display",
                            39000,
                            0,
                            "linear",
                            "${uni2_pobreza_text-02}",
                            'none',
                            'block'
                        ],
                        [
                            "eid418",
                            "display",
                            44000,
                            0,
                            "easeInElastic",
                            "${uni2_pobreza_text-02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid510",
                            "scaleY",
                            63562,
                            1000,
                            "easeInElastic",
                            "${uni4_antecede}",
                            '0.23867',
                            '1'
                        ],
                        [
                            "eid396",
                            "display",
                            39000,
                            0,
                            "linear",
                            "${uni2_pobreza_text-03}",
                            'none',
                            'block'
                        ],
                        [
                            "eid423",
                            "display",
                            44000,
                            0,
                            "easeInElastic",
                            "${uni2_pobreza_text-03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid299",
                            "display",
                            18250,
                            0,
                            "easeInElastic",
                            "${uni1_comprension}",
                            'none',
                            'block'
                        ],
                        [
                            "eid302",
                            "display",
                            20887,
                            0,
                            "easeInElastic",
                            "${uni1_comprension}",
                            'block',
                            'none'
                        ],
                        [
                            "eid550",
                            "top",
                            72490,
                            1090,
                            "linear",
                            "${uni5_mandatos}",
                            '257px',
                            '224px'
                        ],
                        [
                            "eid565",
                            "left",
                            75495,
                            505,
                            "easeInElastic",
                            "${uni6_menu-04}",
                            '1289px',
                            '1082px'
                        ],
                        [
                            "eid1102",
                            "display",
                            84500,
                            0,
                            "easeInElastic",
                            "${marcadorCopy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1103",
                            "display",
                            96750,
                            0,
                            "easeInElastic",
                            "${marcadorCopy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid530",
                            "top",
                            66500,
                            1090,
                            "linear",
                            "${uni5_consti_2}",
                            '299px',
                            '266px'
                        ],
                        [
                            "eid255",
                            "display",
                            13077,
                            0,
                            "linear",
                            "${intro_linea_tiempo6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid256",
                            "display",
                            14576,
                            0,
                            "linear",
                            "${intro_linea_tiempo6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid461",
                            "display",
                            62250,
                            0,
                            "easeInElastic",
                            "${uni3_menu-08}",
                            'block',
                            'none'
                        ],
                        [
                            "eid312",
                            "clip",
                            21923,
                            954,
                            "linear",
                            "${uni1_bio_text1}",
                            [0,1.77783203125,205,0],
                            [0,444,205,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid472",
                            "display",
                            51500,
                            0,
                            "easeInElastic",
                            "${uni3_edad}",
                            'none',
                            'block'
                        ],
                        [
                            "eid473",
                            "display",
                            53000,
                            0,
                            "easeInElastic",
                            "${uni3_edad}",
                            'block',
                            'none'
                        ],
                        [
                            "eid316",
                            "clip",
                            23000,
                            1250,
                            "linear",
                            "${uni1_bio_text2}",
                            [0,1.77783203125,205,0],
                            [0,444,205,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid246",
                            "clip",
                            10326,
                            1000,
                            "linear",
                            "${intro_linea_tiempo4}",
                            [147.5,626.462890625,189,0],
                            [-16.41796875,626.462890625,189,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid611",
                            "clip",
                            85500,
                            1000,
                            "easeInElastic",
                            "${uni6_norma_text1}",
                            [0,690,-0.6923828125,0],
                            [0,690,187,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid552",
                            "display",
                            72490,
                            0,
                            "linear",
                            "${uni5_mandatos}",
                            'none',
                            'block'
                        ],
                        [
                            "eid553",
                            "display",
                            73735,
                            0,
                            "linear",
                            "${uni5_mandatos}",
                            'block',
                            'none'
                        ],
                        [
                            "eid237",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${intro_linea_tiempo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid262",
                            "display",
                            14576,
                            0,
                            "linear",
                            "${intro_linea_tiempo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1036",
                            "display",
                            63969,
                            0,
                            "easeOutBack",
                            "${uni4_btn_volverCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1037",
                            "display",
                            64830,
                            0,
                            "easeOutBack",
                            "${uni4_btn_volverCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1034",
                            "top",
                            63969,
                            496,
                            "easeOutBack",
                            "${uni4_btn_volverCopy}",
                            '529px',
                            '523px'
                        ],
                        [
                            "eid730",
                            "display",
                            20155,
                            0,
                            "easeOutBack",
                            "${Rectangle4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid731",
                            "display",
                            20820,
                            0,
                            "easeOutBack",
                            "${Rectangle4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1072",
                            "display",
                            73612,
                            0,
                            "easeInElastic",
                            "${Rectangle18Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1073",
                            "display",
                            73733,
                            0,
                            "easeInElastic",
                            "${Rectangle18Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid795",
                            "display",
                            36004,
                            0,
                            "easeOutBack",
                            "${Rectangle11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid796",
                            "display",
                            38997,
                            0,
                            "easeOutBack",
                            "${Rectangle11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid495",
                            "filter.blur",
                            59000,
                            1000,
                            "easeInElastic",
                            "${uni3_salud}",
                            '17px',
                            '0px'
                        ],
                        [
                            "eid460",
                            "display",
                            62250,
                            0,
                            "easeInElastic",
                            "${uni3_menu-07}",
                            'block',
                            'none'
                        ],
                        [
                            "eid172",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${fondo_parteverde}",
                            '118px',
                            '116px'
                        ],
                        [
                            "eid609",
                            "display",
                            85500,
                            0,
                            "easeInElastic",
                            "${uni6_norma_text1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid612",
                            "display",
                            86750,
                            0,
                            "easeInElastic",
                            "${uni6_norma_text1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid976",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_trabajo_g72}",
                            'none',
                            'none'
                        ],
                        [
                            "eid322",
                            "clip",
                            26086,
                            1414,
                            "linear",
                            "${uni1_bio_text4}",
                            [0,1.77783203125,205,0],
                            [0,444,205,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid480",
                            "display",
                            0,
                            0,
                            "easeInElastic",
                            "${uni3_geogra_grafica3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid499",
                            "display",
                            62000,
                            0,
                            "easeInElastic",
                            "${uni4_titulo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid500",
                            "display",
                            65000,
                            0,
                            "linear",
                            "${uni4_titulo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid254",
                            "clip",
                            13077,
                            1000,
                            "linear",
                            "${intro_linea_tiempo6}",
                            [147.5,419,189,0],
                            [0,419,189,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid503",
                            "display",
                            62000,
                            0,
                            "easeInElastic",
                            "${uni4_text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid509",
                            "display",
                            63500,
                            0,
                            "easeInElastic",
                            "${uni4_text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid543",
                            "left",
                            70000,
                            1090,
                            "linear",
                            "${uni5_consti_4}",
                            '1140px',
                            '207px'
                        ],
                        [
                            "eid462",
                            "display",
                            62250,
                            0,
                            "easeInElastic",
                            "${uni3_menu-09}",
                            'block',
                            'none'
                        ],
                        [
                            "eid243",
                            "clip",
                            8826,
                            1000,
                            "linear",
                            "${intro_linea_tiempo3}",
                            [0,446.8056640625,43,0],
                            [0,367.701171875,198,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1053",
                            "top",
                            73250,
                            433,
                            "easeInElastic",
                            "${uni5_btn_inicio}",
                            '248px',
                            '241px'
                        ],
                        [
                            "eid387",
                            "display",
                            0,
                            0,
                            "linear",
                            "${uni2_pobreza_oms}",
                            'none',
                            'none'
                        ],
                        [
                            "eid398",
                            "display",
                            39000,
                            0,
                            "linear",
                            "${uni2_pobreza_text-05}",
                            'none',
                            'block'
                        ],
                        [
                            "eid421",
                            "display",
                            44000,
                            0,
                            "easeInElastic",
                            "${uni2_pobreza_text-05}",
                            'block',
                            'none'
                        ],
                        [
                            "eid310",
                            "opacity",
                            20887,
                            1036,
                            "easeInElastic",
                            "${uni1_bio_text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid619",
                            "clip",
                            89250,
                            1000,
                            "easeInElastic",
                            "${uni6_norma_text4}",
                            [0,690,-0.6923828125,0],
                            [0,690,187,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid732",
                            "display",
                            20155,
                            0,
                            "easeOutBack",
                            "${Rectangle4Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid733",
                            "display",
                            20820,
                            0,
                            "easeOutBack",
                            "${Rectangle4Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid230",
                            "opacity",
                            5000,
                            1000,
                            "linear",
                            "${intro_linea_tiempo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1180",
                            "display",
                            55425,
                            0,
                            "easeInElastic",
                            "${marcadorCopy9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1181",
                            "display",
                            55903,
                            0,
                            "easeInElastic",
                            "${marcadorCopy9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid402",
                            "opacity",
                            39000,
                            1500,
                            "linear",
                            "${uni2_pobreza}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1155",
                            "display",
                            86500,
                            0,
                            "easeInElastic",
                            "${Rectangle25Copy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1156",
                            "display",
                            96729,
                            0,
                            "easeInElastic",
                            "${Rectangle25Copy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid390",
                            "top",
                            39750,
                            750,
                            "linear",
                            "${uni2_pobreza_text-04}",
                            '652px',
                            '329px'
                        ],
                        [
                            "eid278",
                            "display",
                            16750,
                            0,
                            "easeOutSine",
                            "${uni1_titulo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid411",
                            "display",
                            31500,
                            0,
                            "easeInElastic",
                            "${uni1_titulo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid560",
                            "opacity",
                            73735,
                            750,
                            "easeInElastic",
                            "${uni6_titulo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid515",
                            "opacity",
                            64830,
                            505,
                            "easeInElastic",
                            "${uni5_titulo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid516",
                            "opacity",
                            73735,
                            750,
                            "easeInElastic",
                            "${uni5_titulo}",
                            '1',
                            '0'
                        ],
                        [
                            "eid595",
                            "display",
                            79500,
                            0,
                            "easeInElastic",
                            "${uni6_marco_text3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid596",
                            "display",
                            80750,
                            0,
                            "easeInElastic",
                            "${uni6_marco_text3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1146",
                            "display",
                            86500,
                            0,
                            "easeInElastic",
                            "${Rectangle25Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1147",
                            "display",
                            96729,
                            0,
                            "easeInElastic",
                            "${Rectangle25Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid389",
                            "top",
                            39000,
                            750,
                            "linear",
                            "${uni2_pobreza_text-03}",
                            '606px',
                            '283px'
                        ],
                        [
                            "eid772",
                            "display",
                            22328,
                            0,
                            "easeOutBack",
                            "${Rectangle9Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid773",
                            "display",
                            24500,
                            0,
                            "easeOutBack",
                            "${Rectangle9Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid774",
                            "display",
                            26086,
                            0,
                            "easeOutBack",
                            "${Rectangle9Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid775",
                            "display",
                            29206,
                            0,
                            "easeOutBack",
                            "${Rectangle9Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid523",
                            "left",
                            65255,
                            1090,
                            "linear",
                            "${uni5_consti_1}",
                            '1320px',
                            '387px'
                        ],
                        [
                            "eid802",
                            "display",
                            35500,
                            0,
                            "easeOutBack",
                            "${Rectangle11Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid803",
                            "display",
                            37500,
                            0,
                            "easeOutBack",
                            "${Rectangle11Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid340",
                            "display",
                            30750,
                            0,
                            "easeInElastic",
                            "${uni2_titulo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid407",
                            "display",
                            45250,
                            0,
                            "linear",
                            "${uni2_titulo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1333",
                            "display",
                            68666,
                            0,
                            "easeInElastic",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1334",
                            "display",
                            69250,
                            0,
                            "easeInElastic",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1112",
                            "display",
                            78000,
                            0,
                            "easeInElastic",
                            "${Rectangle24Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1113",
                            "display",
                            84500,
                            0,
                            "easeInElastic",
                            "${Rectangle24Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid623",
                            "display",
                            90500,
                            0,
                            "easeInElastic",
                            "${uni6_norma_text5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid624",
                            "display",
                            91750,
                            0,
                            "easeInElastic",
                            "${uni6_norma_text5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid376",
                            "display",
                            37500,
                            0,
                            "easeInElastic",
                            "${uni2_disca_text3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid377",
                            "display",
                            39000,
                            0,
                            "easeInElastic",
                            "${uni2_disca_text3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid736",
                            "display",
                            20155,
                            0,
                            "easeOutBack",
                            "${Rectangle4Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid737",
                            "display",
                            20820,
                            0,
                            "easeOutBack",
                            "${Rectangle4Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid811",
                            "display",
                            44750,
                            0,
                            "easeOutBack",
                            "${unidadesCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid790",
                            "display",
                            35840,
                            0,
                            "easeOutBack",
                            "${Rectangle10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid791",
                            "display",
                            38983,
                            0,
                            "easeOutBack",
                            "${Rectangle10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid440",
                            "left",
                            46117,
                            505,
                            "easeInElastic",
                            "${uni3_menu-03}",
                            '1288px',
                            '1081px'
                        ],
                        [
                            "eid190",
                            "left",
                            1500,
                            1000,
                            "linear",
                            "${titulo}",
                            '966px',
                            '0px'
                        ],
                        [
                            "eid290",
                            "left",
                            17500,
                            750,
                            "easeInElastic",
                            "${uni1_menu-01}",
                            '1286px',
                            '1101px'
                        ],
                        [
                            "eid1294",
                            "display",
                            9826,
                            0,
                            "linear",
                            "${circ_tiempoCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1295",
                            "display",
                            10300,
                            0,
                            "linear",
                            "${circ_tiempoCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid375",
                            "clip",
                            37500,
                            1250,
                            "linear",
                            "${uni2_disca_text3}",
                            [0,1.77783203125,205,0],
                            [0,444,205,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid683",
                            "display",
                            6249,
                            0,
                            "linear",
                            "${linea_1-2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid691",
                            "display",
                            14576,
                            0,
                            "linear",
                            "${linea_1-2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid626",
                            "display",
                            91750,
                            0,
                            "easeInElastic",
                            "${uni6_norma_text6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid627",
                            "display",
                            93000,
                            0,
                            "easeInElastic",
                            "${uni6_norma_text6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid406",
                            "opacity",
                            42750,
                            750,
                            "linear",
                            "${uni2_pobreza_text-02}",
                            '0',
                            '1'
                        ],
                        [
                            "eid641",
                            "display",
                            0,
                            0,
                            "easeInElastic",
                            "${creditos}",
                            'none',
                            'none'
                        ],
                        [
                            "eid861",
                            "display",
                            54203,
                            0,
                            "easeInElastic",
                            "${Rectangle21Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid862",
                            "display",
                            54653,
                            0,
                            "easeInElastic",
                            "${Rectangle21Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid564",
                            "left",
                            74990,
                            505,
                            "easeInElastic",
                            "${uni6_menu-03}",
                            '1289px',
                            '1082px'
                        ],
                        [
                            "eid1204",
                            "display",
                            0,
                            0,
                            "linear",
                            "${menu_opciones}",
                            'none',
                            'none'
                        ],
                        [
                            "eid519",
                            "left",
                            65255,
                            1090,
                            "linear",
                            "${uni5_text}",
                            '-343px',
                            '462px'
                        ],
                        [
                            "eid551",
                            "left",
                            72490,
                            1090,
                            "linear",
                            "${uni5_mandatos}",
                            '1153px',
                            '220px'
                        ],
                        [
                            "eid765",
                            "display",
                            24000,
                            0,
                            "easeOutBack",
                            "${Rectangle9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid766",
                            "display",
                            29206,
                            0,
                            "easeOutBack",
                            "${Rectangle9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1142",
                            "display",
                            86500,
                            0,
                            "easeInElastic",
                            "${Rectangle25Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1143",
                            "display",
                            96729,
                            0,
                            "easeInElastic",
                            "${Rectangle25Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1172",
                            "display",
                            52500,
                            0,
                            "easeInElastic",
                            "${marcadorCopy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1173",
                            "display",
                            52978,
                            0,
                            "easeInElastic",
                            "${marcadorCopy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid303",
                            "display",
                            20000,
                            0,
                            "easeInElastic",
                            "${marcador}",
                            'none',
                            'block'
                        ],
                        [
                            "eid344",
                            "display",
                            30750,
                            0,
                            "easeInElastic",
                            "${marcador}",
                            'block',
                            'none'
                        ],
                        [
                            "eid178",
                            "rotateZ",
                            0,
                            1000,
                            "linear",
                            "${fondo_parteverde}",
                            '50deg',
                            '0deg'
                        ],
                        [
                            "eid1076",
                            "display",
                            73612,
                            0,
                            "easeInElastic",
                            "${Rectangle18Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1077",
                            "display",
                            73733,
                            0,
                            "easeInElastic",
                            "${Rectangle18Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid487",
                            "filter.blur",
                            56000,
                            1000,
                            "easeInElastic",
                            "${uni3_estudio}",
                            '17px',
                            '0px'
                        ],
                        [
                            "eid226",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${intro}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1249",
                            "display",
                            8500,
                            0,
                            "linear",
                            "${circ_tiempoCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1250",
                            "display",
                            8825,
                            0,
                            "linear",
                            "${circ_tiempoCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1219",
                            "display",
                            3849,
                            0,
                            "linear",
                            "${btn_inicio}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1220",
                            "display",
                            4780,
                            0,
                            "linear",
                            "${btn_inicio}",
                            'block',
                            'none'
                        ],
                        [
                            "eid535",
                            "left",
                            67745,
                            1090,
                            "linear",
                            "${uni5_consti_3}",
                            '1140px',
                            '207px'
                        ],
                        [
                            "eid1064",
                            "display",
                            70750,
                            0,
                            "easeInElastic",
                            "${flecha_izqCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1065",
                            "display",
                            71279,
                            0,
                            "easeInElastic",
                            "${flecha_izqCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid481",
                            "display",
                            0,
                            0,
                            "easeInElastic",
                            "${uni3_geogra_g4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1098",
                            "display",
                            77500,
                            0,
                            "easeInElastic",
                            "${marcadorCopy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1099",
                            "display",
                            84500,
                            0,
                            "easeInElastic",
                            "${marcadorCopy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1233",
                            "display",
                            11500,
                            0,
                            "linear",
                            "${circ_tiempoCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1234",
                            "display",
                            11974,
                            0,
                            "linear",
                            "${circ_tiempoCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid567",
                            "opacity",
                            76000,
                            1000,
                            "easeInElastic",
                            "${uni6_marco_text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid616",
                            "clip",
                            88000,
                            1000,
                            "easeInElastic",
                            "${uni6_norma_text3}",
                            [0,690,-0.6923828125,0],
                            [0,690,187,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid479",
                            "filter.blur",
                            53000,
                            1000,
                            "easeInElastic",
                            "${uni3_geogra}",
                            '17px',
                            '0px'
                        ],
                        [
                            "eid1066",
                            "display",
                            70750,
                            0,
                            "easeInElastic",
                            "${flecha_dereCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1067",
                            "display",
                            71269,
                            0,
                            "easeInElastic",
                            "${flecha_dereCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid291",
                            "left",
                            18250,
                            750,
                            "easeInElastic",
                            "${uni1_menu-02}",
                            '1286px',
                            '1101px'
                        ],
                        [
                            "eid1228",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${circ_tiempo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1230",
                            "display",
                            7325,
                            0,
                            "linear",
                            "${circ_tiempo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid591",
                            "clip",
                            78250,
                            1000,
                            "easeInElastic",
                            "${uni6_marco_text1_3}",
                            [0,1.94140625,230,0],
                            [0,599,230,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid726",
                            "display",
                            16000,
                            0,
                            "easeOutBack",
                            "${btn_uni1Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid727",
                            "display",
                            16717,
                            0,
                            "easeOutBack",
                            "${btn_uni1Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid188",
                            "width",
                            1500,
                            1000,
                            "linear",
                            "${titulo}",
                            '1271px',
                            '691px'
                        ],
                        [
                            "eid1070",
                            "display",
                            73612,
                            0,
                            "easeInElastic",
                            "${Rectangle18}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1071",
                            "display",
                            73733,
                            0,
                            "easeInElastic",
                            "${Rectangle18}",
                            'block',
                            'none'
                        ],
                        [
                            "eid557",
                            "display",
                            0,
                            0,
                            "linear",
                            "${uni5_mandatos_educ}",
                            'none',
                            'none'
                        ],
                        [
                            "eid284",
                            "display",
                            19750,
                            0,
                            "easeOutSine",
                            "${uni1_menu}",
                            'none',
                            'block'
                        ],
                        [
                            "eid343",
                            "display",
                            30750,
                            0,
                            "easeInElastic",
                            "${uni1_menu}",
                            'block',
                            'none'
                        ],
                        [
                            "eid525",
                            "top",
                            65255,
                            1090,
                            "linear",
                            "${uni5_consti_1}",
                            '300px',
                            '267px'
                        ],
                        [
                            "eid532",
                            "display",
                            66500,
                            0,
                            "linear",
                            "${uni5_consti_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid533",
                            "display",
                            67745,
                            0,
                            "linear",
                            "${uni5_consti_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid554",
                            "display",
                            0,
                            0,
                            "linear",
                            "${uni5_mandatos_atencion}",
                            'none',
                            'none'
                        ],
                        [
                            "eid813",
                            "display",
                            41746,
                            0,
                            "easeOutBack",
                            "${ver_info}",
                            'none',
                            'block'
                        ],
                        [
                            "eid814",
                            "display",
                            43919,
                            0,
                            "easeOutBack",
                            "${ver_info}",
                            'block',
                            'none'
                        ],
                        [
                            "eid358",
                            "left",
                            32000,
                            750,
                            "easeInElastic",
                            "${uni2_menu-02}",
                            '1286px',
                            '1101px'
                        ],
                        [
                            "eid174",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${fondo_partenaranja}",
                            '-175px',
                            '-3px'
                        ],
                        [
                            "eid628",
                            "clip",
                            93000,
                            1000,
                            "easeInElastic",
                            "${uni6_norma_text7}",
                            [0,690,-0.6923828125,0],
                            [0,690,187,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid597",
                            "clip",
                            80750,
                            1000,
                            "easeInElastic",
                            "${uni6_marco_text4}",
                            [0,1.94140625,230,0],
                            [0,599,230,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1051",
                            "left",
                            73250,
                            433,
                            "easeInElastic",
                            "${uni5_btn_inicio}",
                            '1280px',
                            '1082px'
                        ],
                        [
                            "eid781",
                            "display",
                            22328,
                            0,
                            "easeOutBack",
                            "${Rectangle9Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid782",
                            "display",
                            27750,
                            0,
                            "easeOutBack",
                            "${Rectangle9Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid708",
                            "display",
                            4896,
                            0,
                            "easeOutBack",
                            "${btn_iniciar}",
                            'block',
                            'none'
                        ],
                        [
                            "eid328",
                            "display",
                            29238,
                            0,
                            "linear",
                            "${uni1_cif_text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid363",
                            "display",
                            30750,
                            0,
                            "easeInElastic",
                            "${uni1_cif_text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid705",
                            "scaleX",
                            4000,
                            500,
                            "easeOutBack",
                            "${btn_iniciar}",
                            '0',
                            '1'
                        ],
                        [
                            "eid400",
                            "display",
                            39000,
                            0,
                            "linear",
                            "${uni2_pobreza_text-07}",
                            'none',
                            'block'
                        ],
                        [
                            "eid419",
                            "display",
                            44000,
                            0,
                            "easeInElastic",
                            "${uni2_pobreza_text-07}",
                            'block',
                            'none'
                        ],
                        [
                            "eid501",
                            "opacity",
                            62000,
                            750,
                            "easeInElastic",
                            "${uni4_titulo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid384",
                            "display",
                            0,
                            0,
                            "linear",
                            "${uni2_pobreza_edu}",
                            'none',
                            'none'
                        ],
                        [
                            "eid542",
                            "top",
                            70000,
                            1090,
                            "linear",
                            "${uni5_consti_4}",
                            '300px',
                            '267px'
                        ],
                        [
                            "eid622",
                            "clip",
                            90500,
                            1000,
                            "easeInElastic",
                            "${uni6_norma_text5}",
                            [0,690,-0.6923828125,0],
                            [0,690,187,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid296",
                            "opacity",
                            16750,
                            750,
                            "easeInElastic",
                            "${uni1_titulo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid342",
                            "opacity",
                            30750,
                            750,
                            "easeInElastic",
                            "${uni1_titulo}",
                            '1',
                            '0'
                        ],
                        [
                            "eid632",
                            "display",
                            94250,
                            0,
                            "easeInElastic",
                            "${uni6_norma_text8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid633",
                            "display",
                            95500,
                            0,
                            "easeInElastic",
                            "${uni6_norma_text8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid600",
                            "clip",
                            82000,
                            1000,
                            "easeInElastic",
                            "${uni6_marco_text5}",
                            [0,1.94140625,230,0],
                            [0,599,230,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid638",
                            "display",
                            96750,
                            0,
                            "easeInElastic",
                            "${uni6_conside}",
                            'none',
                            'block'
                        ],
                        [
                            "eid639",
                            "display",
                            98000,
                            0,
                            "easeInElastic",
                            "${uni6_conside}",
                            'block',
                            'none'
                        ],
                        [
                            "eid386",
                            "display",
                            0,
                            0,
                            "linear",
                            "${uni2_pobreza_salud}",
                            'none',
                            'none'
                        ],
                        [
                            "eid539",
                            "opacity",
                            69335,
                            509,
                            "linear",
                            "${uni5_consti_3dig}",
                            '0',
                            '1'
                        ],
                        [
                            "eid788",
                            "display",
                            31500,
                            0,
                            "easeOutBack",
                            "${unidades}",
                            'none',
                            'block'
                        ],
                        [
                            "eid789",
                            "display",
                            44236,
                            0,
                            "easeOutBack",
                            "${unidades}",
                            'block',
                            'none'
                        ],
                        [
                            "eid508",
                            "display",
                            63562,
                            0,
                            "easeInElastic",
                            "${uni4_antecede}",
                            'none',
                            'block'
                        ],
                        [
                            "eid511",
                            "display",
                            64830,
                            0,
                            "easeInElastic",
                            "${uni4_antecede}",
                            'block',
                            'none'
                        ],
                        [
                            "eid341",
                            "opacity",
                            30750,
                            750,
                            "easeInElastic",
                            "${uni2_titulo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid412",
                            "opacity",
                            44000,
                            750,
                            "easeInElastic",
                            "${uni2_titulo}",
                            '1',
                            '0'
                        ],
                        [
                            "eid770",
                            "display",
                            22328,
                            0,
                            "easeOutBack",
                            "${Rectangle9Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid771",
                            "display",
                            22952,
                            0,
                            "easeOutBack",
                            "${Rectangle9Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid767",
                            "display",
                            24500,
                            0,
                            "easeOutBack",
                            "${Rectangle9Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid768",
                            "display",
                            29206,
                            0,
                            "easeOutBack",
                            "${Rectangle9Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid458",
                            "display",
                            62317,
                            0,
                            "easeInElastic",
                            "${uni3_menu-05}",
                            'block',
                            'none'
                        ],
                        [
                            "eid443",
                            "left",
                            47632,
                            505,
                            "easeInElastic",
                            "${uni3_menu-06}",
                            '1288px',
                            '1081px'
                        ],
                        [
                            "eid482",
                            "display",
                            54500,
                            0,
                            "easeInElastic",
                            "${uni3_vivienda}",
                            'none',
                            'block'
                        ],
                        [
                            "eid483",
                            "display",
                            56000,
                            0,
                            "easeInElastic",
                            "${uni3_vivienda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid360",
                            "left",
                            32750,
                            750,
                            "easeInElastic",
                            "${uni2_menu-03}",
                            '1286px',
                            '1101px'
                        ],
                        [
                            "eid563",
                            "left",
                            74485,
                            505,
                            "easeInElastic",
                            "${uni6_menu-02}",
                            '1289px',
                            '1082px'
                        ],
                        [
                            "eid492",
                            "display",
                            0,
                            0,
                            "easeInElastic",
                            "${uni3_trabajo_reflex}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1120",
                            "display",
                            78000,
                            0,
                            "easeInElastic",
                            "${Rectangle24Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1121",
                            "display",
                            84500,
                            0,
                            "easeInElastic",
                            "${Rectangle24Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid339",
                            "opacity",
                            2500,
                            500,
                            "easeInElastic",
                            "${sabias2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid526",
                            "display",
                            65255,
                            0,
                            "linear",
                            "${uni5_consti_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid528",
                            "display",
                            66500,
                            0,
                            "linear",
                            "${uni5_consti_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid236",
                            "clip",
                            7500,
                            1000,
                            "linear",
                            "${intro_linea_tiempo2}",
                            [147.5,419,189,0],
                            [0,419,189,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid319",
                            "clip",
                            24500,
                            1400,
                            "linear",
                            "${uni1_bio_text3}",
                            [0,1.77783203125,205,0],
                            [0,444,205,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid485",
                            "display",
                            56000,
                            0,
                            "easeInElastic",
                            "${uni3_estudio}",
                            'none',
                            'block'
                        ],
                        [
                            "eid486",
                            "display",
                            57500,
                            0,
                            "easeInElastic",
                            "${uni3_estudio}",
                            'block',
                            'none'
                        ],
                        [
                            "eid199",
                            "left",
                            2071,
                            1778,
                            "linear",
                            "${personaje}",
                            '1339px',
                            '801px'
                        ],
                        [
                            "eid272",
                            "left",
                            14576,
                            1924,
                            "easeOutSine",
                            "${personaje}",
                            '2023px',
                            '801px'
                        ],
                        [
                            "eid749",
                            "display",
                            20155,
                            0,
                            "easeOutBack",
                            "${Rectangle4Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid750",
                            "display",
                            20820,
                            0,
                            "easeOutBack",
                            "${Rectangle4Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid763",
                            "display",
                            30162,
                            0,
                            "easeOutBack",
                            "${Rectangle4Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid764",
                            "display",
                            30699,
                            0,
                            "easeOutBack",
                            "${Rectangle4Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid445",
                            "left",
                            48642,
                            505,
                            "easeInElastic",
                            "${uni3_menu-08}",
                            '1288px',
                            '1081px'
                        ],
                        [
                            "eid498",
                            "filter.blur",
                            60500,
                            1000,
                            "easeInElastic",
                            "${uni3_rehab}",
                            '17px',
                            '0px'
                        ],
                        [
                            "eid201",
                            "top",
                            2071,
                            1778,
                            "linear",
                            "${personaje}",
                            '50px',
                            '40px'
                        ],
                        [
                            "eid274",
                            "top",
                            14576,
                            0,
                            "easeOutSine",
                            "${personaje}",
                            '40px',
                            '40px'
                        ],
                        [
                            "eid275",
                            "top",
                            16500,
                            0,
                            "easeOutSine",
                            "${personaje}",
                            '40px',
                            '40px'
                        ],
                        [
                            "eid455",
                            "display",
                            62317,
                            0,
                            "easeInElastic",
                            "${uni3_menu-02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid194",
                            "clip",
                            2500,
                            1000,
                            "linear",
                            "${intro}",
                            [0,-1.146484375,386,0],
                            [0,533,386,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid476",
                            "display",
                            0,
                            0,
                            "easeInElastic",
                            "${uni3_edad_grafica2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid703",
                            "top",
                            7720,
                            780,
                            "easeOutBack",
                            "${uni4_btn_volverCopy2}",
                            '529px',
                            '523px'
                        ],
                        [
                            "eid527",
                            "display",
                            65255,
                            0,
                            "linear",
                            "${uni5_text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid529",
                            "display",
                            66500,
                            0,
                            "linear",
                            "${uni5_text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1195",
                            "display",
                            61364,
                            0,
                            "easeInElastic",
                            "${marcadorCopy13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1196",
                            "display",
                            61842,
                            0,
                            "easeInElastic",
                            "${marcadorCopy13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid306",
                            "display",
                            0,
                            0,
                            "easeInElastic",
                            "${uni1_compr_modelo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid373",
                            "display",
                            36000,
                            0,
                            "easeInElastic",
                            "${uni2_disca_text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid374",
                            "display",
                            37500,
                            0,
                            "easeInElastic",
                            "${uni2_disca_text2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1032",
                            "display",
                            7720,
                            0,
                            "easeOutBack",
                            "${uni4_btn_volverCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1033",
                            "display",
                            14501,
                            0,
                            "easeOutBack",
                            "${uni4_btn_volverCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid977",
                            "display",
                            58500,
                            0,
                            "easeInElastic",
                            "${Rectangle21Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid978",
                            "display",
                            58950,
                            0,
                            "easeInElastic",
                            "${Rectangle21Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid227",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${personaje}",
                            'block',
                            'none'
                        ],
                        [
                            "eid269",
                            "display",
                            14576,
                            0,
                            "easeOutSine",
                            "${personaje}",
                            'none',
                            'block'
                        ],
                        [
                            "eid415",
                            "display",
                            39000,
                            0,
                            "easeInElastic",
                            "${personaje}",
                            'block',
                            'none'
                        ],
                        [
                            "eid983",
                            "display",
                            58243,
                            0,
                            "easeOutBack",
                            "${personaje}",
                            'none',
                            'block'
                        ],
                        [
                            "eid984",
                            "display",
                            58950,
                            0,
                            "easeOutBack",
                            "${personaje}",
                            'block',
                            'none'
                        ],
                        [
                            "eid507",
                            "display",
                            62000,
                            0,
                            "easeInElastic",
                            "${personaje}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1004",
                            "display",
                            63453,
                            0,
                            "easeOutBack",
                            "${personaje}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1079",
                            "display",
                            73376,
                            0,
                            "easeInElastic",
                            "${personaje}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1080",
                            "display",
                            73701,
                            0,
                            "easeInElastic",
                            "${personaje}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1315",
                            "left",
                            50853,
                            397,
                            "easeInElastic",
                            "${uni5_btn_inicio3}",
                            '1285px',
                            '1082px'
                        ],
                        [
                            "eid521",
                            "top",
                            65255,
                            1090,
                            "linear",
                            "${uni5_text}",
                            '251px',
                            '268px'
                        ],
                        [
                            "eid180",
                            "opacity",
                            1000,
                            945,
                            "linear",
                            "${fondo}",
                            '0.0071942446043165',
                            '1'
                        ],
                        [
                            "eid604",
                            "display",
                            83250,
                            0,
                            "easeInElastic",
                            "${uni6_marco_text6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid605",
                            "display",
                            84500,
                            0,
                            "easeInElastic",
                            "${uni6_marco_text6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid225",
                            "display",
                            0,
                            0,
                            "linear",
                            "${linea_tiempo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1201",
                            "clip",
                            96920,
                            830,
                            "linear",
                            "${uni6_conside}",
                            [0,0,276,0],
                            [0,716,500,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid317",
                            "display",
                            23000,
                            0,
                            "easeInElastic",
                            "${uni1_bio_text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid318",
                            "display",
                            24500,
                            0,
                            "easeInElastic",
                            "${uni1_bio_text2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1206",
                            "left",
                            3500,
                            1000,
                            "linear",
                            "${opciones}",
                            '1300px',
                            '989px'
                        ],
                        [
                            "eid1054",
                            "display",
                            73250,
                            0,
                            "easeInElastic",
                            "${uni5_btn_inicio}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1055",
                            "display",
                            73726,
                            0,
                            "easeInElastic",
                            "${uni5_btn_inicio}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1245",
                            "display",
                            0,
                            0,
                            "linear",
                            "${botones_unidades-02-5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid629",
                            "display",
                            93000,
                            0,
                            "easeInElastic",
                            "${uni6_norma_text7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid630",
                            "display",
                            94250,
                            0,
                            "easeInElastic",
                            "${uni6_norma_text7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid987",
                            "display",
                            58000,
                            0,
                            "linear",
                            "${btn_sabiasCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid988",
                            "display",
                            59151,
                            0,
                            "linear",
                            "${btn_sabiasCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1150",
                            "display",
                            86500,
                            0,
                            "easeInElastic",
                            "${Rectangle25Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1151",
                            "display",
                            96729,
                            0,
                            "easeInElastic",
                            "${Rectangle25Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid617",
                            "display",
                            88000,
                            0,
                            "easeInElastic",
                            "${uni6_norma_text3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid618",
                            "display",
                            89250,
                            0,
                            "easeInElastic",
                            "${uni6_norma_text3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid268",
                            "left",
                            14576,
                            1924,
                            "easeOutSine",
                            "${botones_unidades}",
                            '1296px',
                            '86px'
                        ],
                        [
                            "eid1247",
                            "display",
                            0,
                            0,
                            "linear",
                            "${botones_unidades-02-3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid364",
                            "opacity",
                            32000,
                            2405,
                            "linear",
                            "${uni2_disca_text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid397",
                            "display",
                            39000,
                            0,
                            "linear",
                            "${uni2_pobreza_text-04}",
                            'none',
                            'block'
                        ],
                        [
                            "eid422",
                            "display",
                            44000,
                            0,
                            "easeInElastic",
                            "${uni2_pobreza_text-04}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1060",
                            "display",
                            68666,
                            0,
                            "easeInElastic",
                            "${flecha_izqCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1061",
                            "display",
                            70029,
                            0,
                            "easeInElastic",
                            "${flecha_izqCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid326",
                            "display",
                            27619,
                            0,
                            "easeInElastic",
                            "${uni1_bio_text5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid327",
                            "display",
                            29250,
                            0,
                            "easeInElastic",
                            "${uni1_bio_text5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1191",
                            "display",
                            60000,
                            0,
                            "easeInElastic",
                            "${marcadorCopy12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1192",
                            "display",
                            60478,
                            0,
                            "easeInElastic",
                            "${marcadorCopy12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid465",
                            "filter.blur",
                            50000,
                            1000,
                            "easeInElastic",
                            "${uni3_sexo}",
                            '17px',
                            '0px'
                        ],
                        [
                            "eid305",
                            "display",
                            20887,
                            0,
                            "easeInElastic",
                            "${uni1_bio_text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid329",
                            "display",
                            29250,
                            0,
                            "linear",
                            "${uni1_bio_text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid361",
                            "display",
                            34750,
                            0,
                            "easeInElastic",
                            "${uni2_menu-03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid613",
                            "clip",
                            86750,
                            1000,
                            "easeInElastic",
                            "${uni6_norma_text2}",
                            [0,690,-0.6923828125,0],
                            [0,690,187,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid392",
                            "top",
                            41250,
                            750,
                            "linear",
                            "${uni2_pobreza_text-06}",
                            '748px',
                            '425px'
                        ],
                        [
                            "eid493",
                            "display",
                            59000,
                            0,
                            "easeInElastic",
                            "${uni3_salud}",
                            'none',
                            'block'
                        ],
                        [
                            "eid494",
                            "display",
                            60500,
                            0,
                            "easeInElastic",
                            "${uni3_salud}",
                            'block',
                            'none'
                        ],
                        [
                            "eid540",
                            "display",
                            67745,
                            0,
                            "linear",
                            "${uni5_consti_3dig}",
                            'none',
                            'block'
                        ],
                        [
                            "eid541",
                            "display",
                            70000,
                            0,
                            "linear",
                            "${uni5_consti_3dig}",
                            'block',
                            'none'
                        ],
                        [
                            "eid359",
                            "display",
                            34750,
                            0,
                            "easeInElastic",
                            "${uni2_menu-02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid222",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sabias_sobre}",
                            'none',
                            'none'
                        ],
                        [
                            "eid456",
                            "display",
                            62317,
                            0,
                            "easeInElastic",
                            "${uni3_menu-03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid512",
                            "display",
                            0,
                            0,
                            "easeInElastic",
                            "${uni4_ante_g9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid555",
                            "display",
                            0,
                            0,
                            "linear",
                            "${uni5_mandatos_salud}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1290",
                            "display",
                            6249,
                            0,
                            "linear",
                            "${linea_1-2Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1291",
                            "display",
                            14576,
                            0,
                            "linear",
                            "${linea_1-2Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid707",
                            "scaleY",
                            4000,
                            500,
                            "easeOutBack",
                            "${btn_iniciar}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1115",
                            "display",
                            78000,
                            0,
                            "easeInElastic",
                            "${Rectangle24Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1116",
                            "display",
                            84500,
                            0,
                            "easeInElastic",
                            "${Rectangle24Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid714",
                            "display",
                            16000,
                            0,
                            "easeOutBack",
                            "${btn_uni1Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid715",
                            "display",
                            16717,
                            0,
                            "easeOutBack",
                            "${btn_uni1Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1035",
                            "left",
                            63969,
                            496,
                            "easeOutBack",
                            "${uni4_btn_volverCopy}",
                            '-154px',
                            '0px'
                        ],
                        [
                            "eid851",
                            "display",
                            41746,
                            0,
                            "easeInElastic",
                            "${marcadorCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid852",
                            "display",
                            43996,
                            0,
                            "easeInElastic",
                            "${marcadorCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid547",
                            "left",
                            71245,
                            1090,
                            "linear",
                            "${uni5_consti_5}",
                            '1140px',
                            '207px'
                        ],
                        [
                            "eid1183",
                            "display",
                            57000,
                            0,
                            "easeInElastic",
                            "${marcadorCopy10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1184",
                            "display",
                            57478,
                            0,
                            "easeInElastic",
                            "${marcadorCopy10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid382",
                            "display",
                            0,
                            0,
                            "linear",
                            "${uni2_pobreza_circulo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid379",
                            "display",
                            0,
                            0,
                            "linear",
                            "${uni2_disca_reflexion}",
                            'none',
                            'none'
                        ],
                        [
                            "eid650",
                            "display",
                            3849,
                            0,
                            "linear",
                            "${btn_lineaTiempo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid651",
                            "display",
                            4780,
                            0,
                            "linear",
                            "${btn_lineaTiempo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid544",
                            "display",
                            70000,
                            0,
                            "linear",
                            "${uni5_consti_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid545",
                            "display",
                            71245,
                            0,
                            "linear",
                            "${uni5_consti_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid531",
                            "left",
                            66500,
                            1090,
                            "linear",
                            "${uni5_consti_2}",
                            '1140px',
                            '207px'
                        ],
                        [
                            "eid294",
                            "display",
                            16750,
                            0,
                            "easeInElastic",
                            "${btn_unidades}",
                            'none',
                            'block'
                        ],
                        [
                            "eid496",
                            "display",
                            60500,
                            0,
                            "easeInElastic",
                            "${uni3_rehab}",
                            'none',
                            'block'
                        ],
                        [
                            "eid497",
                            "display",
                            62000,
                            0,
                            "easeInElastic",
                            "${uni3_rehab}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1248",
                            "display",
                            0,
                            0,
                            "linear",
                            "${botones_unidades-02-02}",
                            'none',
                            'none'
                        ],
                        [
                            "eid234",
                            "clip",
                            6000,
                            1000,
                            "linear",
                            "${intro_linea_tiempo1}",
                            [0,308,43,0],
                            [0,308,198,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1208",
                            "top",
                            3500,
                            1000,
                            "linear",
                            "${opciones}",
                            '548px',
                            '536px'
                        ],
                        [
                            "eid1109",
                            "display",
                            78000,
                            0,
                            "easeInElastic",
                            "${Rectangle24}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1110",
                            "display",
                            84500,
                            0,
                            "easeInElastic",
                            "${Rectangle24}",
                            'block',
                            'none'
                        ],
                        [
                            "eid261",
                            "display",
                            14576,
                            0,
                            "linear",
                            "${botones_unidades}",
                            'none',
                            'block'
                        ],
                        [
                            "eid293",
                            "display",
                            18500,
                            0,
                            "easeInElastic",
                            "${botones_unidades}",
                            'block',
                            'none'
                        ],
                        [
                            "eid645",
                            "display",
                            0,
                            0,
                            "easeInElastic",
                            "${intro_sabias}",
                            'none',
                            'none'
                        ],
                        [
                            "eid586",
                            "display",
                            77000,
                            0,
                            "easeInElastic",
                            "${uni6_marco_text1_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid587",
                            "display",
                            78250,
                            0,
                            "easeInElastic",
                            "${uni6_marco_text1_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid441",
                            "left",
                            46622,
                            505,
                            "easeInElastic",
                            "${uni3_menu-04}",
                            '1288px',
                            '1081px'
                        ],
                        [
                            "eid355",
                            "display",
                            30750,
                            0,
                            "easeInElastic",
                            "${marcadorCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid356",
                            "display",
                            39500,
                            0,
                            "easeInElastic",
                            "${marcadorCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid238",
                            "display",
                            5900,
                            0,
                            "linear",
                            "${intro_linea_tiempo1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid241",
                            "display",
                            8826,
                            0,
                            "linear",
                            "${intro_linea_tiempo1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid643",
                            "display",
                            0,
                            0,
                            "easeInElastic",
                            "${cc}",
                            'none',
                            'none'
                        ],
                        [
                            "eid308",
                            "display",
                            0,
                            0,
                            "easeInElastic",
                            "${uni1_compr_social}",
                            'none',
                            'none'
                        ],
                        [
                            "eid249",
                            "display",
                            11750,
                            0,
                            "linear",
                            "${intro_linea_tiempo5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid250",
                            "display",
                            14576,
                            0,
                            "linear",
                            "${intro_linea_tiempo5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid634",
                            "clip",
                            95500,
                            1000,
                            "easeInElastic",
                            "${uni6_norma_text9}",
                            [0,690,-0.6923828125,0],
                            [0,690,187,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid759",
                            "display",
                            22500,
                            0,
                            "easeOutBack",
                            "${Rectangle4Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid760",
                            "display",
                            30750,
                            0,
                            "easeOutBack",
                            "${Rectangle4Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid598",
                            "display",
                            80750,
                            0,
                            "easeInElastic",
                            "${uni6_marco_text4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid599",
                            "display",
                            82000,
                            0,
                            "easeInElastic",
                            "${uni6_marco_text4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1246",
                            "display",
                            0,
                            0,
                            "linear",
                            "${botones_unidades-02-4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid754",
                            "display",
                            20155,
                            0,
                            "easeOutBack",
                            "${Rectangle4Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid755",
                            "display",
                            29238,
                            0,
                            "easeOutBack",
                            "${Rectangle4Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid186",
                            "height",
                            1500,
                            1000,
                            "linear",
                            "${titulo}",
                            '206px',
                            '112px'
                        ],
                        [
                            "eid459",
                            "display",
                            62250,
                            0,
                            "easeInElastic",
                            "${uni3_menu-06}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1068",
                            "display",
                            71961,
                            0,
                            "easeInElastic",
                            "${flecha_izqCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1069",
                            "display",
                            72490,
                            0,
                            "easeInElastic",
                            "${flecha_izqCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid614",
                            "display",
                            86750,
                            0,
                            "easeInElastic",
                            "${uni6_norma_text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid615",
                            "display",
                            88000,
                            0,
                            "easeInElastic",
                            "${uni6_norma_text2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid367",
                            "display",
                            34500,
                            0,
                            "easeInElastic",
                            "${uni2_disca_text1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid368",
                            "display",
                            36000,
                            0,
                            "easeInElastic",
                            "${uni2_disca_text1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid709",
                            "display",
                            16000,
                            0,
                            "easeOutBack",
                            "${btn_uni1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid710",
                            "display",
                            16717,
                            0,
                            "easeOutBack",
                            "${btn_uni1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid477",
                            "display",
                            53000,
                            0,
                            "easeInElastic",
                            "${uni3_geogra}",
                            'none',
                            'block'
                        ],
                        [
                            "eid478",
                            "display",
                            54500,
                            0,
                            "easeInElastic",
                            "${uni3_geogra}",
                            'block',
                            'none'
                        ],
                        [
                            "eid437",
                            "scaleX",
                            44000,
                            1500,
                            "easeInElastic",
                            "${uni3_intro}",
                            '0.22857',
                            '1'
                        ],
                        [
                            "eid1279",
                            "display",
                            6249,
                            0,
                            "linear",
                            "${linea_1-2Copy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1280",
                            "display",
                            14576,
                            0,
                            "linear",
                            "${linea_1-2Copy8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid394",
                            "display",
                            39000,
                            0,
                            "linear",
                            "${uni2_pobreza}",
                            'none',
                            'block'
                        ],
                        [
                            "eid417",
                            "display",
                            44000,
                            0,
                            "easeInElastic",
                            "${uni2_pobreza}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1177",
                            "display",
                            54022,
                            0,
                            "easeInElastic",
                            "${marcadorCopy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1178",
                            "display",
                            54500,
                            0,
                            "easeInElastic",
                            "${marcadorCopy8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1257",
                            "display",
                            6249,
                            0,
                            "linear",
                            "${linea_1-2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1258",
                            "display",
                            14576,
                            0,
                            "linear",
                            "${linea_1-2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid631",
                            "clip",
                            94250,
                            1000,
                            "easeInElastic",
                            "${uni6_norma_text8}",
                            [0,690,-0.6923828125,0],
                            [0,690,187,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1298",
                            "display",
                            12750,
                            0,
                            "linear",
                            "${circ_tiempoCopy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1299",
                            "display",
                            13224,
                            0,
                            "linear",
                            "${circ_tiempoCopy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1009",
                            "display",
                            64497,
                            0,
                            "easeOutBack",
                            "${Rectangle14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1010",
                            "display",
                            64768,
                            0,
                            "easeOutBack",
                            "${Rectangle14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid858",
                            "display",
                            52528,
                            0,
                            "easeInElastic",
                            "${Rectangle21Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid859",
                            "display",
                            52978,
                            0,
                            "easeInElastic",
                            "${Rectangle21Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1139",
                            "display",
                            86500,
                            0,
                            "easeInElastic",
                            "${Rectangle25Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1140",
                            "display",
                            96729,
                            0,
                            "easeInElastic",
                            "${Rectangle25Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid410",
                            "opacity",
                            44000,
                            750,
                            "easeInElastic",
                            "${uni3_titulo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid413",
                            "opacity",
                            62000,
                            750,
                            "easeInElastic",
                            "${uni3_titulo}",
                            '1',
                            '0'
                        ],
                        [
                            "eid301",
                            "opacity",
                            18250,
                            750,
                            "easeInElastic",
                            "${uni1_comprension}",
                            '0',
                            '1'
                        ],
                        [
                            "eid606",
                            "display",
                            84500,
                            0,
                            "easeInElastic",
                            "${uni6_norma_text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1097",
                            "display",
                            96763,
                            0,
                            "easeOutBack",
                            "${uni6_norma_text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid192",
                            "top",
                            1500,
                            1000,
                            "linear",
                            "${titulo}",
                            '600px',
                            '25px'
                        ],
                        [
                            "eid1007",
                            "display",
                            63273,
                            0,
                            "easeOutBack",
                            "${Rectangle13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1008",
                            "display",
                            63479,
                            0,
                            "easeOutBack",
                            "${Rectangle13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid466",
                            "display",
                            50000,
                            0,
                            "easeInElastic",
                            "${uni3_sexo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid471",
                            "display",
                            51500,
                            0,
                            "easeInElastic",
                            "${uni3_sexo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid442",
                            "left",
                            47127,
                            505,
                            "easeInElastic",
                            "${uni3_menu-05}",
                            '1288px',
                            '1081px'
                        ],
                        [
                            "eid620",
                            "display",
                            89250,
                            0,
                            "easeInElastic",
                            "${uni6_norma_text4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid621",
                            "display",
                            90500,
                            0,
                            "easeInElastic",
                            "${uni6_norma_text4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid383",
                            "display",
                            0,
                            0,
                            "linear",
                            "${uni2_pobreza_trabajo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid335",
                            "display",
                            19750,
                            0,
                            "easeInElastic",
                            "${uni1_menu-03}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1002",
                            "display",
                            62750,
                            0,
                            "linear",
                            "${btn_sabiasCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1003",
                            "display",
                            63468,
                            0,
                            "linear",
                            "${btn_sabiasCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid513",
                            "display",
                            64830,
                            0,
                            "easeInElastic",
                            "${uni5_titulo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid514",
                            "display",
                            74532,
                            0,
                            "linear",
                            "${uni5_titulo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid248",
                            "clip",
                            11750,
                            1000,
                            "linear",
                            "${intro_linea_tiempo5}",
                            [0,461.7314453125,43,0],
                            [0,475.1640625,198,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid505",
                            "scaleY",
                            62000,
                            1000,
                            "easeInElastic",
                            "${uni4_text}",
                            '0.23867',
                            '1'
                        ],
                        [
                            "eid603",
                            "clip",
                            83250,
                            1000,
                            "easeInElastic",
                            "${uni6_marco_text6}",
                            [0,1.94140625,230,0],
                            [0,599,230,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid242",
                            "display",
                            8826,
                            0,
                            "linear",
                            "${intro_linea_tiempo3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid247",
                            "display",
                            11750,
                            0,
                            "linear",
                            "${intro_linea_tiempo3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid981",
                            "display",
                            35000,
                            0,
                            "linear",
                            "${btn_sabiasCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid982",
                            "display",
                            43919,
                            0,
                            "linear",
                            "${btn_sabiasCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid484",
                            "filter.blur",
                            54500,
                            1000,
                            "easeInElastic",
                            "${uni3_vivienda}",
                            '17px',
                            '0px'
                        ],
                        [
                            "eid314",
                            "display",
                            21923,
                            0,
                            "easeInElastic",
                            "${uni1_bio_text1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid315",
                            "display",
                            23000,
                            0,
                            "easeInElastic",
                            "${uni1_bio_text1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid334",
                            "display",
                            19750,
                            0,
                            "easeInElastic",
                            "${uni1_menu-02}",
                            'block',
                            'none'
                        ],
                        [
                            "eid517",
                            "left",
                            64750,
                            505,
                            "easeInElastic",
                            "${uni5_menu}",
                            '1289px',
                            '1082px'
                        ],
                        [
                            "eid474",
                            "filter.blur",
                            51500,
                            1000,
                            "easeInElastic",
                            "${uni3_edad}",
                            '17px',
                            '0px'
                        ],
                        [
                            "eid232",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${fondo_parteverde}",
                            'block',
                            'none'
                        ],
                        [
                            "eid722",
                            "display",
                            16000,
                            0,
                            "easeOutBack",
                            "${btn_uni1Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid723",
                            "display",
                            16717,
                            0,
                            "easeOutBack",
                            "${btn_uni1Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid475",
                            "display",
                            0,
                            0,
                            "easeInElastic",
                            "${uni3_edad_grafica1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid594",
                            "clip",
                            79500,
                            1000,
                            "easeInElastic",
                            "${uni6_marco_text3}",
                            [0,1.94140625,230,0],
                            [0,599,230,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1277",
                            "display",
                            6249,
                            0,
                            "linear",
                            "${linea_1-2Copy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1278",
                            "display",
                            14576,
                            0,
                            "linear",
                            "${linea_1-2Copy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid365",
                            "display",
                            32000,
                            0,
                            "easeInElastic",
                            "${uni2_disca_text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid380",
                            "display",
                            39000,
                            0,
                            "linear",
                            "${uni2_disca_text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1209",
                            "display",
                            73376,
                            0,
                            "easeInElastic",
                            "${marcadorCopy14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1210",
                            "display",
                            73731,
                            0,
                            "linear",
                            "${marcadorCopy14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid718",
                            "display",
                            16000,
                            0,
                            "easeOutBack",
                            "${btn_uni1Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid719",
                            "display",
                            16717,
                            0,
                            "easeOutBack",
                            "${btn_uni1Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid408",
                            "display",
                            44000,
                            0,
                            "easeInElastic",
                            "${uni3_titulo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid409",
                            "display",
                            62797,
                            0,
                            "linear",
                            "${uni3_titulo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid711",
                            "display",
                            16000,
                            0,
                            "easeOutBack",
                            "${btn_uni1Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid712",
                            "display",
                            16717,
                            0,
                            "easeOutBack",
                            "${btn_uni1Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid546",
                            "top",
                            71245,
                            1090,
                            "linear",
                            "${uni5_consti_5}",
                            '201px',
                            '168px'
                        ],
                        [
                            "eid625",
                            "clip",
                            91750,
                            1000,
                            "easeInElastic",
                            "${uni6_norma_text6}",
                            [0,690,-0.6923828125,0],
                            [0,690,187,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid608",
                            "opacity",
                            84500,
                            1000,
                            "easeInElastic",
                            "${uni6_norma_text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1243",
                            "display",
                            0,
                            0,
                            "linear",
                            "${botones_unidades-022}",
                            'none',
                            'none'
                        ],
                        [
                            "eid585",
                            "clip",
                            77000,
                            1000,
                            "easeInElastic",
                            "${uni6_marco_text1_2}",
                            [0,1.94140625,230,0],
                            [0,599,230,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid244",
                            "display",
                            10326,
                            0,
                            "linear",
                            "${intro_linea_tiempo4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid245",
                            "display",
                            11750,
                            0,
                            "linear",
                            "${intro_linea_tiempo4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid320",
                            "display",
                            24500,
                            0,
                            "easeInElastic",
                            "${uni1_bio_text3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid321",
                            "display",
                            26086,
                            0,
                            "easeInElastic",
                            "${uni1_bio_text3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid425",
                            "display",
                            44000,
                            0,
                            "easeInElastic",
                            "${uni3_intro}",
                            'none',
                            'block'
                        ],
                        [
                            "eid463",
                            "display",
                            50000,
                            0,
                            "easeInElastic",
                            "${uni3_intro}",
                            'block',
                            'none'
                        ],
                        [
                            "eid391",
                            "top",
                            40500,
                            750,
                            "linear",
                            "${uni2_pobreza_text-05}",
                            '699px',
                            '376px'
                        ],
                        [
                            "eid292",
                            "left",
                            19000,
                            750,
                            "easeInElastic",
                            "${uni1_menu-03}",
                            '1287px',
                            '1102px'
                        ],
                        [
                            "eid1311",
                            "display",
                            50000,
                            0,
                            "easeInElastic",
                            "${uni5_btn_inicio3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1312",
                            "display",
                            62750,
                            0,
                            "easeInElastic",
                            "${uni5_btn_inicio3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid323",
                            "display",
                            26086,
                            0,
                            "easeInElastic",
                            "${uni1_bio_text4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid324",
                            "display",
                            27619,
                            0,
                            "easeInElastic",
                            "${uni1_bio_text4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid646",
                            "display",
                            72490,
                            0,
                            "easeInElastic",
                            "${btn_atencion}",
                            'none',
                            'block'
                        ],
                        [
                            "eid647",
                            "display",
                            73735,
                            0,
                            "easeInElastic",
                            "${btn_atencion}",
                            'block',
                            'none'
                        ],
                        [
                            "eid548",
                            "display",
                            71245,
                            0,
                            "linear",
                            "${uni5_consti_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid549",
                            "display",
                            72490,
                            0,
                            "linear",
                            "${uni5_consti_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid797",
                            "display",
                            35500,
                            0,
                            "easeOutBack",
                            "${Rectangle11Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid798",
                            "display",
                            36000,
                            0,
                            "easeOutBack",
                            "${Rectangle11Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid799",
                            "display",
                            37534,
                            0,
                            "easeOutBack",
                            "${Rectangle11Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid800",
                            "display",
                            39024,
                            0,
                            "easeOutBack",
                            "${Rectangle11Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid399",
                            "display",
                            39000,
                            0,
                            "linear",
                            "${uni2_pobreza_text-06}",
                            'none',
                            'block'
                        ],
                        [
                            "eid420",
                            "display",
                            44000,
                            0,
                            "easeInElastic",
                            "${uni2_pobreza_text-06}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1187",
                            "display",
                            58451,
                            0,
                            "easeInElastic",
                            "${marcadorCopy11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1188",
                            "display",
                            58929,
                            0,
                            "easeInElastic",
                            "${marcadorCopy11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid701",
                            "left",
                            7720,
                            780,
                            "easeOutBack",
                            "${uni4_btn_volverCopy2}",
                            '-154px',
                            '0px'
                        ],
                        [
                            "eid556",
                            "display",
                            0,
                            0,
                            "linear",
                            "${uni5_mandatos_trabajo}",
                            'none',
                            'none'
                        ],
                        [
                            "eid777",
                            "display",
                            22328,
                            0,
                            "easeOutBack",
                            "${Rectangle9Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid778",
                            "display",
                            26086,
                            0,
                            "easeOutBack",
                            "${Rectangle9Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid779",
                            "display",
                            27750,
                            0,
                            "easeOutBack",
                            "${Rectangle9Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid780",
                            "display",
                            29206,
                            0,
                            "easeOutBack",
                            "${Rectangle9Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid239",
                            "display",
                            7500,
                            0,
                            "linear",
                            "${intro_linea_tiempo2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid240",
                            "display",
                            8826,
                            0,
                            "linear",
                            "${intro_linea_tiempo2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid536",
                            "display",
                            67745,
                            0,
                            "linear",
                            "${uni5_consti_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid537",
                            "display",
                            70000,
                            0,
                            "linear",
                            "${uni5_consti_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1128",
                            "display",
                            78000,
                            0,
                            "easeInElastic",
                            "${Rectangle24Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1129",
                            "display",
                            84500,
                            0,
                            "easeInElastic",
                            "${Rectangle24Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid506",
                            "display",
                            0,
                            0,
                            "easeInElastic",
                            "${uni4_sabias}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1135",
                            "display",
                            86500,
                            0,
                            "easeInElastic",
                            "${Rectangle25Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1136",
                            "display",
                            96729,
                            0,
                            "easeInElastic",
                            "${Rectangle25Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid863",
                            "display",
                            54203,
                            0,
                            "easeInElastic",
                            "${Rectangle21Copy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid864",
                            "display",
                            54653,
                            0,
                            "easeInElastic",
                            "${Rectangle21Copy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1271",
                            "display",
                            6249,
                            0,
                            "linear",
                            "${linea_1-2Copy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1272",
                            "display",
                            14576,
                            0,
                            "linear",
                            "${linea_1-2Copy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid792",
                            "display",
                            41000,
                            0,
                            "easeOutBack",
                            "${Rectangle10Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid793",
                            "display",
                            44143,
                            0,
                            "easeOutBack",
                            "${Rectangle10Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid592",
                            "display",
                            78250,
                            0,
                            "easeInElastic",
                            "${uni6_marco_text1_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid593",
                            "display",
                            79500,
                            0,
                            "easeInElastic",
                            "${uni6_marco_text1_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid176",
                            "rotateZ",
                            0,
                            1000,
                            "linear",
                            "${fondo_partenaranja}",
                            '50deg',
                            '0deg'
                        ],
                        [
                            "eid642",
                            "display",
                            0,
                            0,
                            "easeInElastic",
                            "${mapa}",
                            'none',
                            'none'
                        ],
                        [
                            "eid393",
                            "top",
                            42000,
                            750,
                            "linear",
                            "${uni2_pobreza_text-07}",
                            '794px',
                            '471px'
                        ],
                        [
                            "eid601",
                            "display",
                            82000,
                            0,
                            "easeInElastic",
                            "${uni6_marco_text5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid602",
                            "display",
                            83250,
                            0,
                            "easeInElastic",
                            "${uni6_marco_text5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid223",
                            "display",
                            3849,
                            0,
                            "linear",
                            "${btn_sabias}",
                            'none',
                            'block'
                        ],
                        [
                            "eid224",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${btn_sabias}",
                            'block',
                            'none'
                        ],
                        [
                            "eid307",
                            "display",
                            0,
                            0,
                            "easeInElastic",
                            "${uni1_compr_normaliza}",
                            'none',
                            'none'
                        ],
                        [
                            "eid298",
                            "top",
                            16750,
                            1000,
                            "easeInElastic",
                            "${botones_unidades}",
                            '300px',
                            '620px'
                        ],
                        [
                            "eid325",
                            "clip",
                            27619,
                            1500,
                            "linear",
                            "${uni1_bio_text5}",
                            [0,1.77783203125,205,0],
                            [0,444,205,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid362",
                            "display",
                            34750,
                            0,
                            "easeInElastic",
                            "${uni2_menu}",
                            'none',
                            'block'
                        ],
                        [
                            "eid414",
                            "display",
                            44000,
                            0,
                            "easeInElastic",
                            "${uni2_menu}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1321",
                            "display",
                            63167,
                            0,
                            "easeInElastic",
                            "${flecha_dere2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1322",
                            "display",
                            63685,
                            0,
                            "easeInElastic",
                            "${flecha_dere2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid490",
                            "filter.blur",
                            57500,
                            1000,
                            "easeInElastic",
                            "${uni3_trabajo}",
                            '17px',
                            '0px'
                        ],
                        [
                            "eid219",
                            "top",
                            3849,
                            651,
                            "easeOutBounce",
                            "${logos}",
                            '-139px',
                            '12px'
                        ],
                        [
                            "eid444",
                            "left",
                            48137,
                            505,
                            "easeInElastic",
                            "${uni3_menu-07}",
                            '1288px',
                            '1081px'
                        ],
                        [
                            "eid1244",
                            "display",
                            0,
                            0,
                            "linear",
                            "${botones_unidades-02-6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid333",
                            "display",
                            19750,
                            0,
                            "easeInElastic",
                            "${uni1_menu-01}",
                            'block',
                            'none'
                        ],
                        [
                            "eid385",
                            "display",
                            0,
                            0,
                            "linear",
                            "${info}",
                            'none',
                            'none'
                        ],
                        [
                            "eid336",
                            "display",
                            2500,
                            0,
                            "easeInElastic",
                            "${sabias2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid337",
                            "display",
                            5000,
                            0,
                            "easeInElastic",
                            "${sabias2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid378",
                            "display",
                            33750,
                            0,
                            "linear",
                            "${sabias2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid416",
                            "display",
                            39000,
                            0,
                            "easeInElastic",
                            "${sabias2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid985",
                            "display",
                            58451,
                            0,
                            "easeOutBack",
                            "${sabias2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid986",
                            "display",
                            59073,
                            0,
                            "easeOutBack",
                            "${sabias2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid995",
                            "display",
                            62852,
                            0,
                            "easeOutBack",
                            "${sabias2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid996",
                            "display",
                            63474,
                            0,
                            "easeOutBack",
                            "${sabias2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1062",
                            "display",
                            68666,
                            0,
                            "easeInElastic",
                            "${flecha_dereCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1063",
                            "display",
                            70019,
                            0,
                            "easeInElastic",
                            "${flecha_dereCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid170",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${fondo_parteverde}",
                            '1279px',
                            '961px'
                        ],
                        [
                            "eid758",
                            "display",
                            20214,
                            0,
                            "easeOutBack",
                            "${Rectangle8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid787",
                            "display",
                            30627,
                            0,
                            "easeOutBack",
                            "${Rectangle8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid217",
                            "left",
                            3849,
                            651,
                            "easeOutBounce",
                            "${logos}",
                            '1067px',
                            '1093px'
                        ],
                        [
                            "eid439",
                            "left",
                            45612,
                            505,
                            "easeInElastic",
                            "${uni3_menu-02}",
                            '1289px',
                            '1082px'
                        ],
                        [
                            "eid279",
                            "display",
                            16750,
                            0,
                            "easeOutSine",
                            "${titulo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1123",
                            "display",
                            78000,
                            0,
                            "easeInElastic",
                            "${Rectangle24Copy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1124",
                            "display",
                            84500,
                            0,
                            "easeInElastic",
                            "${Rectangle24Copy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1058",
                            "display",
                            67250,
                            0,
                            "easeInElastic",
                            "${flecha_izq}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1059",
                            "display",
                            67779,
                            0,
                            "easeInElastic",
                            "${flecha_izq}",
                            'block',
                            'none'
                        ],
                        [
                            "eid488",
                            "display",
                            57500,
                            0,
                            "easeInElastic",
                            "${uni3_trabajo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid489",
                            "display",
                            59000,
                            0,
                            "easeInElastic",
                            "${uni3_trabajo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid854",
                            "display",
                            50500,
                            0,
                            "easeInElastic",
                            "${marcadorCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid855",
                            "display",
                            51413,
                            0,
                            "easeInElastic",
                            "${marcadorCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1131",
                            "display",
                            86500,
                            0,
                            "easeInElastic",
                            "${Rectangle25}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1132",
                            "display",
                            96729,
                            0,
                            "easeInElastic",
                            "${Rectangle25}",
                            'block',
                            'none'
                        ],
                        [
                            "eid372",
                            "clip",
                            36000,
                            1250,
                            "linear",
                            "${uni2_disca_text2}",
                            [0,1.77783203125,205,0],
                            [0,444,205,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1159",
                            "display",
                            86500,
                            0,
                            "easeInElastic",
                            "${Rectangle25Copy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1160",
                            "display",
                            96729,
                            0,
                            "easeInElastic",
                            "${Rectangle25Copy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid856",
                            "display",
                            52528,
                            0,
                            "easeInElastic",
                            "${Rectangle21}",
                            'none',
                            'block'
                        ],
                        [
                            "eid857",
                            "display",
                            52978,
                            0,
                            "easeInElastic",
                            "${Rectangle21}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1048",
                            "display",
                            66000,
                            0,
                            "easeInElastic",
                            "${flecha_dere}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1049",
                            "display",
                            66519,
                            0,
                            "easeInElastic",
                            "${flecha_dere}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1175",
                            "top",
                            50853,
                            0,
                            "easeInElastic",
                            "${marcadorCopy7}",
                            '239px',
                            '239px'
                        ],
                        [
                            "eid1164",
                            "display",
                            86500,
                            0,
                            "easeInElastic",
                            "${Rectangle25Copy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1165",
                            "display",
                            96729,
                            0,
                            "easeInElastic",
                            "${Rectangle25Copy8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid231",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${fondo_partenaranja}",
                            'block',
                            'none'
                        ],
                        [
                            "eid562",
                            "display",
                            73735,
                            0,
                            "easeInElastic",
                            "${uni5_menu}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1005",
                            "display",
                            63273,
                            0,
                            "easeOutBack",
                            "${Rectangle7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1006",
                            "display",
                            63505,
                            0,
                            "easeOutBack",
                            "${Rectangle7}",
                            'block',
                            'none'
                        ],
                            [ "eid144", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${personaje}', [] ] ],
                            [ "eid648", "trigger", 3000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sabias2}', [0] ] ],
                            [ "eid197", "trigger", 3500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${intro}', [] ] ],
                            [ "eid1229", "trigger", 7000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${circ_tiempo}', [] ] ],
                            [ "eid1256", "trigger", 8500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${circ_tiempoCopy3}', [] ] ],
                            [ "eid1300", "trigger", 9826, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${circ_tiempoCopy}', [] ] ],
                            [ "eid1235", "trigger", 11500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${circ_tiempoCopy2}', [] ] ],
                            [ "eid1301", "trigger", 12750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${circ_tiempoCopy4}', [] ] ],
                            [ "eid989", "trigger", 34405, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sabias2}', [0] ] ],
                            [ "eid990", "trigger", 58568, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sabias2}', [0] ] ],
                            [ "eid999", "trigger", 62969, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sabias2}', [0] ] ],
                            [ "eid1332", "trigger", 69000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${uni3_geogra_grafica3}', [0] ] ]
                    ]
                }
            },
            "personaje": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '165px', '521px', 'auto', 'auto'],
                            id: 'personaje',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/personaje.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '165px', '521px', 'auto', 'auto'],
                            id: 'personaje_ojos_c',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/personaje_ojos_c.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '165px', '521px', 'auto', 'auto'],
                            id: 'personaje_ojos_a',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/personaje_ojos_a.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'personaje_boca_c',
                            opacity: '0',
                            rect: ['0px', '0px', '165px', '521px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/personaje_boca_c.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'personaje_boca_a',
                            opacity: '0',
                            rect: ['0px', '0px', '165px', '521px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/personaje_boca_a.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '165px', '521px']
                        }
                    }
                },
                timeline: {
                    duration: 29010,
                    autoPlay: false,
                    data: [
                        [
                            "eid65",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid66",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid67",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid68",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid69",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid70",
                            "display",
                            5500,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid71",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid72",
                            "display",
                            6500,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid73",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid74",
                            "display",
                            9500,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid75",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid76",
                            "display",
                            10500,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid77",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid78",
                            "display",
                            13500,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid79",
                            "display",
                            14000,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid80",
                            "display",
                            14500,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid81",
                            "display",
                            16000,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid82",
                            "display",
                            16500,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid83",
                            "display",
                            17000,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid84",
                            "display",
                            17500,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid85",
                            "display",
                            20000,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid86",
                            "display",
                            20500,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid87",
                            "display",
                            21000,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid88",
                            "display",
                            21500,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid89",
                            "display",
                            24000,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid90",
                            "display",
                            24500,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid91",
                            "display",
                            25000,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid92",
                            "display",
                            25500,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid93",
                            "display",
                            27500,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid94",
                            "display",
                            28000,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid95",
                            "display",
                            28500,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'block',
                            'none'
                        ],
                        [
                            "eid96",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${personaje_ojos_a}",
                            'none',
                            'block'
                        ],
                        [
                            "eid131",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${personaje_boca_c}",
                            '1',
                            '0'
                        ],
                        [
                            "eid137",
                            "opacity",
                            1750,
                            250,
                            "linear",
                            "${personaje_boca_c}",
                            '0',
                            '1'
                        ],
                        [
                            "eid140",
                            "opacity",
                            24512,
                            250,
                            "linear",
                            "${personaje_boca_c}",
                            '1',
                            '0'
                        ],
                        [
                            "eid141",
                            "opacity",
                            26012,
                            250,
                            "linear",
                            "${personaje_boca_c}",
                            '0',
                            '1'
                        ],
                        [
                            "eid97",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid98",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid99",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid100",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid101",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid102",
                            "display",
                            5500,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid103",
                            "display",
                            6000,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid104",
                            "display",
                            6500,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid105",
                            "display",
                            9000,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid106",
                            "display",
                            9500,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid107",
                            "display",
                            10000,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid108",
                            "display",
                            10500,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid109",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid110",
                            "display",
                            13500,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid111",
                            "display",
                            14000,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid112",
                            "display",
                            14500,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid113",
                            "display",
                            16000,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid114",
                            "display",
                            16500,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid115",
                            "display",
                            17000,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid116",
                            "display",
                            17500,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid117",
                            "display",
                            20000,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid118",
                            "display",
                            20500,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid119",
                            "display",
                            21000,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid120",
                            "display",
                            21500,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid121",
                            "display",
                            24000,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid122",
                            "display",
                            24500,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid123",
                            "display",
                            25000,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid124",
                            "display",
                            25500,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid125",
                            "display",
                            27500,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid126",
                            "display",
                            28000,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid127",
                            "display",
                            28500,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'none',
                            'block'
                        ],
                        [
                            "eid128",
                            "display",
                            29000,
                            0,
                            "linear",
                            "${personaje_ojos_c}",
                            'block',
                            'none'
                        ],
                        [
                            "eid133",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${personaje_boca_a}",
                            '0',
                            '1'
                        ],
                        [
                            "eid136",
                            "opacity",
                            1750,
                            250,
                            "linear",
                            "${personaje_boca_a}",
                            '1',
                            '0'
                        ],
                        [
                            "eid138",
                            "opacity",
                            24512,
                            250,
                            "linear",
                            "${personaje_boca_a}",
                            '0',
                            '1'
                        ],
                        [
                            "eid139",
                            "opacity",
                            26012,
                            250,
                            "linear",
                            "${personaje_boca_a}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "intro": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '531px', '386px', 'auto', 'auto'],
                            id: 'intro',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/intro.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'intro-022',
                            opacity: '0',
                            rect: ['322px', '337px', '211px', '49px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/intro-02.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(60,60,59,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Registrar la historia de la discapacidad es retomar la historia de la humanidad y de las civilizaciones. Al dar una rápida revisión sobre diferentes culturas y épocas, es posible encontrar tanto en su legado escrito como en sus piezas artísticas, claras alusiones a lo que hoy llamamos discapacidad y, más aún, a la representación social que cada sociedad ha tenido frente a quienes la vivían.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\"><span style=\"font-size: 12px;\">​</span></p><p style=\"margin: 0px;\">No existe ni ha existido un tipo de respuesta universalmente positiva o universalmente negativa, sino que más bien esta depende de un amplio conjunto de factores, entre los que se destacan: el sistema de producción y el sistema de valores que rigen en cada sociedad, o dicho de otra forma, de la economía y la cultura de cada sociedad.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\"><span style=\"font-size: 12px;\">​</span></p><p style=\"margin: 0px;\">La cultura occidental es el escenario principal que enmarca los desarrollos actuales del campo de estudios en discapacidad; sin embargo, en las civilizaciones islámicas, orientales y precolombinas, entre otras,  también, se cuenta con vestigios de la representación cultural frente a la discapacidad.&nbsp;<span style=\"font-size: 12px;\">​</span></p>',
                            type: 'text',
                            rect: ['2px', '57px', '531px', '271px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '533px', '386px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid207",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${intro-022}",
                            '337px',
                            '337px'
                        ],
                        [
                            "eid196",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${intro-022}",
                            '0',
                            '1'
                        ],
                        [
                            "eid206",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${intro-022}",
                            '322px',
                            '322px'
                        ]
                    ]
                }
            },
            "intro_sabias_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '634px', '395px', 'auto', 'auto'],
                            id: 'intro_sabias_1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/intro_sabias_1.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​El gran dios griego Hefesto, dios del fuego y la metalurgia, nació con defectos en las piernas, además de esto, su apariencia física hizo que Hera, su madre, lo lanzara del Olimpo. Aunque algunas versiones aseguran que fue su padre, Zeus. Sin embargo, fue salvado por Eurínome, hija de Neptuno, y por la diosa Tetis, quienes le enseñaron todos los secretos del arte de los trabajos manuales y de metalurgia. Con estos conocimientos y sus habilidades diseñó una silla de ruedas anfibia (puede verse en la ilustración).&nbsp;</p>',
                            rect: ['266px', '119px', '293px', '203px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '634px', '395px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "intro_sabias_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'intro_sabias_3',
                            rect: ['0px', '0px', '634px', '395px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/intro_sabias_3.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​“La primera descripción en Colombia de la presencia de individuos con síndrome de Down, data de hace 2000 años, donde habitantes de la cultura Tumaco-Tolita que habitaron la Costa Pacífica Colombiana y Ecuatoriana representaban figuras antropomorfas de cerámicas con características de individuos con esta condición”.</p>',
                            id: 'Text4',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            rect: ['324px', '143px', '232px', '170px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '634px', '395px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "intro_sabias_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'intro_sabias_2',
                            rect: ['0px', '0px', '634px', '395px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/intro_sabias_2.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​En esta estela fechada hacia 1403-1365 a.C un sacerdote llamado Rom realiza una ofrenda. La visible deficiencia en sus miembros inferiores podría ser el más antiguo testimonio de la polio.</p>',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            rect: ['267px', '92px', '289px', '80px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '634px', '395px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "intro_linea_tiempo1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'intro_linea_tiempo1',
                            rect: ['8px', '0px', '299px', '186px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/intro_linea_tiempo1.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(60,60,59,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​En su desarrollo político y filosófico se otorgó un lugar de privilegio a la perfección del cuerpo, tanto en lo estético como en lo bélico,  lo cual se veía reflejado en el rechazo e infanticidio de los niños considerados “débiles”.&nbsp;</p>',
                            id: 'Text5',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            rect: ['0px', '101px', '308px', '97px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '308px', '198px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "intro_linea_tiempo2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'intro_linea_tiempo2',
                            rect: ['0px', '0px', '419px', '189px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/intro_linea_tiempo2.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​En su determinante influencia en el plano religioso y moral, se destaca su visión de las alteraciones en el cuerpo como castigo por los pecados cometidos y su percepción de las personas con discapacidad como merecedoras de compasión y caridad, y como vehículos para la expiación de los pecados del prójimo.</p>',
                            id: 'Text6',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            rect: ['0px', '1px', '419px', '97px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '419px', '189px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "intro_linea_tiempo3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'intro_linea_tiempo3',
                            rect: ['0px', '0px', '358px', '186px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/intro_linea_tiempo3.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​Con su retroceso en los avances alcanzados por las antiguas civilizaciones y la acentuación de las ideas religiosas, <span style=\"font-weight: 700;\">nacen los asilos y se inicia  la persecución de aquellas a quienes se tildan de brujas, en muchas ocasiones, mujeres con enfermedad mental.</span></p>',
                            id: 'Text7',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            rect: ['0px', '94px', '358px', '97px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '358px', '191px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "intro_linea_tiempo4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'intro_linea_tiempo4',
                            rect: ['0px', '1px', '625px', '189px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/intro_linea_tiempo4.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​Este periodo histórico trae consigo una nueva forma de entender y explicar el mundo a través del <span style=\"font-weight: 700;\">método científico</span>. Se inicia la investigación para entender la anatomía y fisiología humanas, y se empiezan a buscar las causas y algunas posibles soluciones para las enfermedades físicas y mentales. En el plano social se aumenta el número de asilos y manicomios, aunque las personas con discapacidad empiezan a ser percibidas como merecedoras de compasión y benevolencia.</p>',
                            id: 'Text8',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            rect: ['1px', '0px', '625px', '97px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '626px', '190px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "intro_linea_tiempo5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'intro_linea_tiempo5',
                            rect: ['0px', '0px', '459px', '186px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/intro_linea_tiempo5.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​Con sus nuevos modos de producción y de reproducción de capitales, se evidencia una marcada<span style=\"font-weight: 700;\"> exclusión de las personas</span> con deficiencias corporales, pues difícilmente logran adaptarse a los ritmos de trabajo que demanda la producción fabril y al contrario, continúan siendo recluidas en sitios especializados para su exclusión y estigmatización.</p>',
                            id: 'Text9',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            rect: ['1px', '94px', '459px', '97px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '460px', '191px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "intro_linea_tiempo6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'intro_linea_tiempo6',
                            rect: ['8px', '0px', '374px', '189px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/intro_linea_tiempo6.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​Con su desaforado desarrollo y transformación económica, cultural, política y social, es una época marcada para las personas con discapacidad por dos grandes movimientos: el modelo rehabilitador, o mejor conocido como <span style=\"font-style: italic;\">modelo biomédico</span> y el modelo social de la discapacidad.</p>',
                            id: 'Text10',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            rect: ['0px', '1px', '385px', '97px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '385px', '189px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni1_comprension": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '565px', '272px', 'auto', 'auto'],
                            id: 'uni1_comprension',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni1_comprension.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '85px', '565px', '112px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'Text11',
                            text: '<p style=\"margin: 0px; text-align: left;\">​Palacios (2008) sugiere que la evolución de los conceptos de discapacidad, pueden agruparse en <span style=\"font-weight: 700;\">tres modelos: el de la prescindencia, el normalizador y el modelo social de la discapacidad,</span> sin que uno sea necesariamente substitutivo del otro, y sin que ninguno, aún en nuestros días, haya desaparecido totalmente. Es importante entender que cada modelo, cada forma de entender la discapacidad es el reflejo de las condiciones sociales, políticas, económicas, culturales y científicas de la época en que fue concebido.&nbsp;</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '565px', '272px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni1_compr_modelo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '528px', '329px', 'auto', 'auto'],
                            id: 'uni1_compr_modelo',
                            transform: [[], [], [], ['1', '0']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni1_compr_modelo.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['1', '0']],
                            id: 'Text12',
                            text: '<p style=\"margin: 0px;\">​“Supone que las causas que dan origen a la discapacidad tienen un <span style=\"font-weight: 700;\">motivo religioso</span>, y  que las personas con discapacidad se consideran innecesarias por diferentes razones: porque se estima que no contribuyen a las necesidades de la comunidad, que albergan mensajes diabólicos, que son la consecuencia del enojo de los dioses, o que —por lo desgraciadas<span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 14px; color: rgb(255, 255, 255); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">—</span>, sus vidas no merecen la pena ser vividas” (Palacios, 2008, p.26). Como resultado de este pensamiento la sociedad excluye y prescinde de las personas con discapacidad y les considera sujetos objeto de caridad y asistencia.</p>',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            rect: ['44px', '111px', '428px', '166px', 'auto', 'auto'],
                            align: 'left',
                            textStyle: ['', '', '', '', 'none']
                        },
                        {
                            type: 'rect',
                            rect: ['472px', '8px', '58px', '38px', 'auto', 'auto'],
                            id: 'Rectangle5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '528px', '329px']
                        }
                    }
                },
                timeline: {
                    duration: 1783,
                    autoPlay: false,
                    data: [
                        [
                            "eid740",
                            "scaleY",
                            0,
                            1783,
                            "easeOutBack",
                            "${uni1_compr_modelo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid742",
                            "scaleY",
                            0,
                            1783,
                            "easeOutBack",
                            "${Text12}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "uni1_compr_normaliza": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '528px', '329px', 'auto', 'auto'],
                            id: 'uni1_compr_normaliza',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni1_compr_normaliza.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text14',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Asume que las causas de la discapacidad son derivadas únicamente de las limitaciones individuales de las personas. Las personas con discapacidad ya no son consideradas inútiles o innecesarias, pero siempre en la medida en que sean normalizadas. Este modelo tiene el propósito de normalizar a las personas de manera que sean aceptadas por la sociedad.</p>',
                            rect: ['44px', '139px', '419px', '112px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            rect: ['490px', '6px', '44px', '40px', 'auto', 'auto'],
                            id: 'Rectangle6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '528px', '329px']
                        }
                    }
                },
                timeline: {
                    duration: 1783,
                    autoPlay: false,
                    data: [
                        [
                            "eid745",
                            "scaleY",
                            0,
                            1783,
                            "easeOutBack",
                            "${Text14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid746",
                            "scaleY",
                            0,
                            1783,
                            "easeOutBack",
                            "${uni1_compr_normaliza}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "uni1_compr_social": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '528px', '329px', 'auto', 'auto'],
                            id: 'uni1_compr_social',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni1_compr_social.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text15',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Sostiene que “las causas que originan la discapacidad no son ni religiosas, ni científicas, sino que son, en gran medida, sociales; desde esta filosofía se insiste en que las personas con discapacidad pueden aportar a la sociedad en igual medida que el resto de personas —sin discapacidad—, pero siempre desde la valoración y el respeto de la diferencia” (Palacios, p. 26).</p>',
                            rect: ['44px', '131px', '419px', '135px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            rect: ['477px', '6px', '51px', '38px', 'auto', 'auto'],
                            id: 'Rectangle7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '528px', '329px']
                        }
                    }
                },
                timeline: {
                    duration: 1783,
                    autoPlay: false,
                    data: [
                        [
                            "eid747",
                            "scaleY",
                            0,
                            1783,
                            "easeOutBack",
                            "${Text15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid748",
                            "scaleY",
                            0,
                            1783,
                            "easeOutBack",
                            "${uni1_compr_social}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "uni1_bio_text": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni1_bio_text',
                            rect: ['0px', '0px', '565px', '322px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni1_bio_text.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(60,60,59,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​El modelo médico-rehabilitador y el modelo social de la discapacidad se configuran aparentemente como visiones opuestas respecto al mismo fenómeno, no obstante, sus diferencias ponen en evidencia la necesaria complementariedad que hay entre los dos. Del anterior análisis surge el <span style=\"font-weight: 700;\">enfoque biopsicosocial.​</span></p>',
                            id: 'Text16',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            rect: ['1px', '41px', '565px', '65px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '566px', '322px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni1_bio_text1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '444px', '205px', 'auto', 'auto'],
                            id: 'uni1_bio_text1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni1_bio_text1.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'Text17',
                            text: '<p style=\"margin: 0px;\">​\"En este enfoque cada dimensión de la discapacidad es analizada en términos de <span style=\"font-weight: 700;\">interacción entre el individuo y su ambiente físico y social” </span> (Fougeyrollas &amp; Beauregard, 2001).&nbsp;</p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['50px', '64px', '358px', '80px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '444px', '205px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni1_bio_text2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni1_bio_text2',
                            rect: ['0px', '0px', '444px', '205px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni1_bio_text2.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​“No existe un solo tipo de intervención para el manejo de la discapacidad, sino que más bien <span style=\"font-weight: 700;\">asume que diferentes tipos de intervenciones son apropiadas para las diferentes dimensiones de la discapacidad”</span> (MSPS, 2013)&nbsp;</p>',
                            id: 'Text18',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            rect: ['61px', '55px', '347px', '80px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '444px', '205px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni1_bio_text3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '444px', '205px', 'auto', 'auto'],
                            id: 'uni1_bio_text3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni1_bio_text3.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'Text19',
                            text: '<p style=\"margin: 0px;\">​Gracias a este enfoque “es posible establecer un lazo entre los distintos niveles (biológico, personal y social) que sustentan la discapacidad y desarrollar políticas y actuaciones dirigidas a incidir de manera equilibrada y complementaria sobre cada uno de ellos\" (UIPCS-IMSERSO, 2003).</p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['61px', '55px', '336px', '95px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '444px', '205px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni1_bio_text4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '444px', '210px', 'auto', 'auto'],
                            id: 'uni1_bio_text4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni1_bio_text4.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'center',
                            id: 'Text20',
                            text: '<p style=\"margin: 0px;\">​\"Se facilita el establecimiento de una diferenciación entre los distintos componentes de la discapacidad, por ejemplo entre las deficiencias, las actividades personales y la participación en la sociedad, lo cual nos clarifica la naturaleza de las actuaciones que son requeridas y los niveles a los que dichas actuaciones han de estar dirigidas” (MSPS, 2013)</p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['51px', '43px', '358px', '125px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '444px', '210px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni1_bio_text5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni1_bio_text5',
                            rect: ['0px', '0px', '444px', '205px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni1_bio_text5.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​Constituye una opción para impulsar el enfoque holístico de la atención integral a las personas con discapacidad. En este contexto, el modelo trasciende al enfoque biomédico y aborda a la persona en forma integral, desde el reconocimiento de los derechos humanos, la autonomía, la integración, las capacidades y los apoyos, enfatizando en la interacción de la persona con discapacidad y el ambiente donde vive, considerando las determinantes sociales que influyen y condicionan la discapacidad. (Organización Panamericana de la Salud, 2011)</p>',
                            id: 'Text21',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            rect: ['32px', '18px', '380px', '181px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '444px', '205px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni1_cif_text": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni1_cif_text',
                            rect: ['0px', '0px', '559px', '343px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni1_cif_text.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​El enfoque biopsicosocial fundamenta conceptualmente la Clasificación Internacional del Funcionamiento y la Discapacidad -CIF- 2001 y ofrece una base sólida para desarrollar los aspectos operativos de la misma, permitiendo “proporcionar una visión coherente de las diferentes dimensiones de la salud desde una perspectiva biológica, individual y social” (OMS 2001).\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\"><span style=\"font-weight: 700;\">“La CIF no es en absoluto una clasificación de personas.</span> Es una clasificación de <span style=\"font-weight: 700;\">las características de la salud de las personas</span> dentro del contexto de las situaciones individuales de sus vidas y de los efectos ambientales” (OMS 2001). De tal manera  es sustancial comprender que los individuos no pueden ser reducidos o caracterizados solo sobre la base de sus deficiencias, limitaciones en la actividad o restricciones en la participación. Por ejemplo, en lugar de referirse a \"una persona mentalmente discapacitada\", la clasificación utiliza la frase \"persona con una limitación en las actividades de aprendizaje\". La CIF asegura esto evitando cualquier referencia a una persona en términos de discapacidad o de una condición de salud, y utilizando un lenguaje neutral, positivo, y concreto.</p>',
                            id: 'Text22',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            rect: ['1px', '75px', '566px', '272px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '567px', '347px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni2_disca_text": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni2_disca_text',
                            rect: ['0px', '0px', '565px', '323px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni2_disca_text.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​La discapacidad es la resultante de <span style=\"font-weight: 700;\">la interacción entre las deficiencias que presenta una persona y las barreras físicas y sociales que se encuentran en su entorno, interacción que tiene como resultado limitaciones en la actividad y restricciones en la participación (OMS, 2001).</span></p>',
                            id: 'Text23',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            rect: ['0px', '42px', '565px', '80px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '565px', '323px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni2_disca_text1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni2_disca_text1',
                            rect: ['0px', '0px', '444px', '205px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni2_disca_text1.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​Esta condición tiene como consecuencia una alta prevalencia de  personas con discapacidad en el mundo que se encuentra en situación de exclusión de  diversos ámbitos de la vida social, lo cual impacta de forma severa sus condiciones socioeconómicas, sus posibilidades de desarrollar el proyecto de vida que considera valioso y su posibilidad de contribuir al desarrollo de sus familias y comunidades.&nbsp;</p>',
                            id: 'Text24',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            rect: ['53px', '33px', '344px', '141px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '444px', '205px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni2_disca_text2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni2_disca_text2',
                            rect: ['0px', '0px', '444px', '206px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni2_disca_text2.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​De acuerdo con el Informe Mundial sobre la Discapacidad, publicado en 2011 por la Organización Mundial de la Salud –OMS- y el Banco Mundial, se estima que más de mil millones de personas en el mundo, es decir el 15% de la población mundial, vive con algún tipo de discapacidad. Entre ellos, 95 millones son niños. En términos de severidad y gravedad de la condición, el mismo Informe estima que entre el 2.2 y 3.8% viven condiciones que comprometen significativamente su funcionamiento, lo cual impacta significativamente en la vida de las personas con discapacidad y sus familias.&nbsp;</p>',
                            id: 'Text25',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            rect: ['29px', '10px', '385px', '181px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '444px', '206px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni2_disca_text3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni2_disca_text3',
                            rect: ['0px', '0px', '444px', '210px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni2_disca_text3.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​Los datos que arroja dicho Informe en relación con los países de bajos y medianos ingresos en la Región de las Américas, reflejan que la prevalencia de discapacidad es de 14.1% de la población total, siendo el grupo etario más representativo el de personas de 60 o más años, con un 44.3%. En relación con el género, en el grupo de 15 a 59 años se observa una mayor prevalencia entre las mujeres (21.3%) que entre los hombres (16.4%).</p>',
                            id: 'Text26',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            rect: ['65px', '15px', '308px', '166px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '444px', '210px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni2_disca_reflexion": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni2_disca_reflexion',
                            rect: ['0px', '0px', '634px', '395px', 'auto', 'auto'],
                            transform: [[], [], [], ['0']],
                            fill: ['rgba(0,0,0,0)', 'images/uni2_disca_reflexion.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0']],
                            id: 'Text27',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['157px', '118px', '385px', '125px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​¿Cree usted que es lo mismo tener una discapacidad y vivir en Jamaica o en Inglaterra? ¿Puede la pobreza aumentar el riesgo de discapacidad? El entorno económico, legislativo, físico y social de un país ¿puede crear o mantener barreras que dificulten la participación de las personas con discapacidad en la vida económica, cívica y social?\nVeamos el siguiente video</p>',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['584px', '8px', '50px', '43px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle12',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['250px', '266px', '132px', '70px', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            type: 'rect',
                            id: 'RoundRect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '634px', '395px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid808",
                            "scaleX",
                            0,
                            1000,
                            "easeOutBack",
                            "${uni2_disca_reflexion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid810",
                            "scaleX",
                            0,
                            1000,
                            "easeOutBack",
                            "${Text27}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "uni2_pobreza_circulo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['-177px', '-78px', '833px', '469px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            id: 'uni2_pobreza_circulo',
                            type: 'image',
                            rect: ['0px', '0px', '528px', '329px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni2_pobreza_circulo.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            id: 'Text28',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            rect: ['42px', '133px', '419px', '130px', 'auto', 'auto'],
                            align: 'left',
                            text: '<p style=\"margin: 0px;\">​A partir de las estimaciones de la OMS en el Informe Mundial de Discapacidad (2011), respecto a que el 15 % de la población mundial presenta esta condición, se suma que también el 20% de las personas con discapacidad –PCD- representan los más pobres del mundo (Elwan, 1999). Bajo esta perspectiva es posible afirmar que existe un círculo vicioso entre la discapacidad y la pobreza, en el cual cada una es causa y consecuencia de la otra (Department for International Development, 2000; ONU, 2011).&nbsp;\n</p>'
                        },
                        {
                            type: 'rect',
                            rect: ['486px', '6px', '42px', '36px', 'auto', 'auto'],
                            id: 'Rectangle16',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '528px', '329px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid824",
                            "scaleX",
                            0,
                            2000,
                            "easeInOutBack",
                            "${uni2_pobreza_circulo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid830",
                            "scaleY",
                            0,
                            2000,
                            "easeInOutBack",
                            "${Text28}",
                            '0',
                            '1'
                        ],
                        [
                            "eid828",
                            "scaleX",
                            0,
                            2000,
                            "easeInOutBack",
                            "${Text28}",
                            '0',
                            '1'
                        ],
                        [
                            "eid826",
                            "scaleY",
                            0,
                            2000,
                            "easeInOutBack",
                            "${uni2_pobreza_circulo}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "uni2_pobreza_edu": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-87px', '-38px', '701px', '399px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['0px', '0px', '528px', '329px', 'auto', 'auto'],
                            id: 'uni2_pobreza_edu',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni2_pobreza_edu.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text29',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​La discapacidad puede llevar a que los niños no estén incluidos en el sistema escolar, lo cual tiene un impacto sobre la acumulación de capital humano y restringe las oportunidades laborales durante la vida adulta, esta situación puede conducir a llegar a la pobreza, mantenerla y exacerbarla.</p>',
                            rect: ['42px', '150px', '432px', '90px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            rect: ['474px', '0px', '50px', '46px', 'auto', 'auto'],
                            id: 'Rectangle17',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '528px', '329px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid836",
                            "scaleX",
                            0,
                            2000,
                            "easeInOutBack",
                            "${Text29}",
                            '0',
                            '1'
                        ],
                        [
                            "eid838",
                            "scaleX",
                            0,
                            2000,
                            "easeInOutBack",
                            "${uni2_pobreza_edu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid835",
                            "scaleY",
                            0,
                            2000,
                            "easeInOutBack",
                            "${Text29}",
                            '0',
                            '1'
                        ],
                        [
                            "eid837",
                            "scaleY",
                            0,
                            2000,
                            "easeInOutBack",
                            "${uni2_pobreza_edu}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "uni2_pobreza_trabajo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-139px', '-53px', '839px', '388px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['0px', '0px', '528px', '329px', 'auto', 'auto'],
                            id: 'uni2_pobreza_trabajo',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni2_pobreza_trabajo.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text30',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Cerca de 750 millones de PCD están en edad de trabajar y de ellas el 60% en América Latina se encuentran desempleadas (CEPAL, 2012). Según el Informe Mundial de Discapacidad (OMS, 2011) cuando las PCD logran acceder al empleo, generalmente reciben menores ingresos en comparación con la población sin discapacidad que realiza el mismo trabajo; por otra parte, frecuentemente las PCD desarrollan actividades como trabajadores informales (ONU, 2011).</p>',
                            rect: ['43px', '128px', '432px', '145px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            rect: ['469px', '0px', '59px', '40px', 'auto', 'auto'],
                            id: 'Rectangle18',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '528px', '329px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid842",
                            "scaleX",
                            0,
                            2000,
                            "easeInOutBack",
                            "${uni2_pobreza_trabajo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid839",
                            "scaleY",
                            0,
                            2000,
                            "easeInOutBack",
                            "${Text30}",
                            '0',
                            '1'
                        ],
                        [
                            "eid841",
                            "scaleY",
                            0,
                            2000,
                            "easeInOutBack",
                            "${uni2_pobreza_trabajo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid840",
                            "scaleX",
                            0,
                            2000,
                            "easeInOutBack",
                            "${Text30}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "uni2_pobreza_salud": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['-109px', '-15px', '770px', '344px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            rect: ['0px', '0px', '528px', '329px', 'auto', 'auto'],
                            id: 'uni2_pobreza_salud',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni2_pobreza_salud.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text31',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​En la región de las Américas, y específicamente en los sistemas de seguridad social que en esta operan, se encuentra que el acceso a seguridad social en salud está estrechamente relacionado con la vinculación laboral (IDRM, 2004 citado por CEPAL, 2011), razón por la cual, en la medida en que las PCD, se encuentren fuera del mercado laboral, también lo estarán del sistema de seguridad social. Esta situación se suma a que, como resultado de las condiciones complejas de vulnerabilidad socioeconómica de la población con discapacidad a nivel mundial, hay evidencia creciente de que las personas con esta condición tienen peores niveles de salud que la población general (OMS, 2011), lo cual impacta su calidad de vida y exacerba la vulnerabilidad respecto al total de la población.</p>',
                            rect: ['41px', '77px', '419px', '221px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            rect: ['478px', '0px', '50px', '40px', 'auto', 'auto'],
                            id: 'Rectangle19',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '528px', '329px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid843",
                            "scaleY",
                            0,
                            2000,
                            "easeInOutBack",
                            "${Text31}",
                            '0',
                            '1'
                        ],
                        [
                            "eid845",
                            "scaleY",
                            0,
                            2000,
                            "easeInOutBack",
                            "${uni2_pobreza_salud}",
                            '0',
                            '1'
                        ],
                        [
                            "eid846",
                            "scaleX",
                            0,
                            2000,
                            "easeInOutBack",
                            "${uni2_pobreza_salud}",
                            '0',
                            '1'
                        ],
                        [
                            "eid844",
                            "scaleX",
                            0,
                            2000,
                            "easeInOutBack",
                            "${Text31}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "uni2_pobreza_oms": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '677px', '329px', 'auto', 'auto'],
                            id: 'uni2_pobreza_oms',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni2_pobreza_oms.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text32',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Posibilitar el acceso de toda la población con discapacidad a los servicios y sistemas convencionales por la vía del diseño universal y las acomodaciones razonables. &nbsp;</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Invertir en programas y servicios específicos para las personas con discapacidad, servicios como la rehabilitación (incluyendo la provisión de ayudas técnicas) y los programas de formación y rehabilitación profesional.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Mejorar la recopilación de datos sobre la discapacidad, que debería estar basada en los conceptos y herramientas proporcionados por la Clasificación Internacional del Funcionamiento, la Discapacidad y la Salud - CIF-.</p>',
                            rect: ['222px', '73px', '407px', '221px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            rect: ['629px', '0px', '51px', '48px', 'auto', 'auto'],
                            id: 'Rectangle20',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '677px', '329px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid848",
                            "scaleX",
                            0,
                            2000,
                            "easeInOutBack",
                            "${Text32}",
                            '0',
                            '1'
                        ],
                        [
                            "eid849",
                            "scaleY",
                            0,
                            2000,
                            "easeInOutBack",
                            "${uni2_pobreza_oms}",
                            '0',
                            '1'
                        ],
                        [
                            "eid850",
                            "scaleX",
                            0,
                            2000,
                            "easeInOutBack",
                            "${uni2_pobreza_oms}",
                            '0',
                            '1'
                        ],
                        [
                            "eid847",
                            "scaleY",
                            0,
                            2000,
                            "easeInOutBack",
                            "${Text32}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "uni3_sexo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '494px', '214px', 'auto', 'auto'],
                            id: 'uni3_sexo',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_sexo.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['190px', '48px', '308px', '166px', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text36',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​A partir de los datos del RLCPD es posible ver que <span style=\"font-weight: 700;\">no existen diferencias notorias entre hombres y mujeres</span> y coincide con la configuración del total de la población con discapacidad en Colombia entregados por el censo del DANE 2005 que plantea que la prevalencia de discapacidad nacional en hombres es <span style=\"font-weight: 700;\">6,6%; mientras que en mujeres es de 6,1%.&nbsp;</span></p>',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '498px', '214px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni3_edad": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '619px', '326px', 'auto', 'auto'],
                            id: 'uni3_edad',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_edad.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '57px', '430px', '272px', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text37',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Frente a las <span style=\"font-weight: 600;\">etapas de ciclo vital</span> encontramos que la mayor parte de PCD registradas<span style=\"font-weight: 700;\"> están en el grupo de edad de 60 años o más con un reporte correspondiente al 45%,</span> seguidos por el grupo de edad de los 45 a 59 años con un 18%. Esta situación coincide con los datos del informe mundial de discapacidad (ONU del 2011) que plantea que el envejecimiento de la población mundial ejerce una influencia muy importante en las tendencias de la discapacidad. En este caso, la relación es directa:<span style=\"font-weight: 700;\"> el riesgo de discapacidad es más alto a una edad más avanzada, y las poblaciones nacionales están envejeciendo a un ritmo sin precedentes.</span> Las tasas de discapacidad más elevadas en los adultos mayores reflejan una acumulación de riesgos de salud a lo largo de la vida: enfermedades, lesiones y enfermedades crónicas. La prevalencia de la discapacidad en las personas de 45 años o más en los países de ingreso bajo es más alta que en los países de ingreso alto, y es más elevada en las mujeres.</p>',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '619px', '329px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni3_geogra": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni3_geogra',
                            rect: ['0px', '0px', '619px', '286px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​En la gráfica 3 se observa la distribución geográfica de las PcD registradas. En Bogotá Distrito Capital es en donde más población se ha registrado, mientras que Vaupés es el departamento en donde menos población ha surtido dicho proceso, esta situación se relaciona directamente con el número total de habitantes que tiene cada territorio pero además con la disponibilidad de oferta de la red de prestadores de servicios de salud que permite la implementación del RLCPD con mayor oportunidad.</p>',
                            id: 'Text38',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            rect: ['1px', '92px', '427px', '142px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '619px', '286px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni3_geogra_g4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            id: 'uni3_geogra_g4',
                            transform: [[], [], [], ['1', '0']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g4.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['1', '0']],
                            id: 'Text39',
                            text: '<p style=\"margin: 0px;\">​Sobre la distribución por zona geográfica en la gráfica 4 se puede observar que existen una mayor presencia de personas registradas en la zona urbana que en la zona Rural y en los centros poblados, situación que nuevamente debe analizarse sin perder de vista el hecho que donde mayor acceso hay al RLCPD es en los centros urbanos.</p>',
                            rect: ['418px', '149px', '229px', '182px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['676px', '0px', '59px', '62px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '735px', '414px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid971",
                            "scaleY",
                            0,
                            3000,
                            "easeOutBack",
                            "${Text39}",
                            '0',
                            '1'
                        ],
                        [
                            "eid969",
                            "scaleY",
                            0,
                            3000,
                            "easeOutBack",
                            "${uni3_geogra_g4}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "uni3_vivienda": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni3_vivienda',
                            rect: ['0px', '0px', '724px', '356px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_vivienda.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(60,60,59,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​Solo el 40% de la población manifiesta que habita en una vivienda propia, seguido de vivienda familiar sin pagar arriendo que corresponde a un 21%</p>',
                            id: 'Text40',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            rect: ['504px', '231px', '225px', '80px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '729px', '356px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni3_estudio": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '765px', '376px', 'auto', 'auto'],
                            id: 'uni3_estudio',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_estudio.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['504px', '157px', '262px', '182px', 'auto', 'auto'],
                            align: 'left',
                            id: 'Text41',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​Un 41% de la población registrada ha culminado la educación básica primaria, seguido del 32 % de población que reporta no tener ningún nivel de estudios. Este dato se complementa con la tasa de alfabetización del 65% que reporta el RLCPD para esta población, mientras que ese mismo indicador es de 94% para la población general. Así mismo, el 37 % de personas en edad escolar reportan no asistir a los establecimientos educativos.</p>',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '766px', '376px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni3_trabajo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni3_trabajo',
                            rect: ['0px', '0px', '483px', '223px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_trabajo.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text42',
                            text: '<p style=\"margin: 0px;\">​Solo el 12% de las personas con discapacidad manifiestan encontrarse trabajando, situación que coincide con el porcentaje de afiliación de las PcD al Sistema de Riesgos Laborales.De lo anterior se puede inferir que la fuente de ingresos derivada de la actividad laboral es baja, situación que repercute en el aumento de los niveles de dependencia económica tanto de las personas como de las familias.</p>',
                            align: 'left',
                            rect: ['1px', '37px', '344px', '190px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '483px', '227px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni3_trabajo_reflex": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni3_trabajo_reflex',
                            rect: ['0px', '0px', '819px', '395px', 'auto', 'auto'],
                            transform: [[], [], [], ['0']],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_trabajo_reflex.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0']],
                            id: 'Text43',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['394px', '121px', '259px', '242px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​¿Si usted tuviera una empresa, contrataría personas con discapacidad? ¿Por qué si o por qué no?\n\nDe acuerdo con Trabajando.com la Comunidad Laboral Líder de Iberoamérica presente en 11 países, que consultó a más de 2.100 líderes empresariales de diferentes compañías &nbsp;en las principales ciudades del país, <span style=\"font-weight: 700;\">el (55%) de los encuestados respondió no contratar este tipo de personal en su compañía, por su parte, el (45%) afirmo hacerlo.</span></p>',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['772px', '12px', '47px', '42px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(44,90,103,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '819px', '395px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid994",
                            "scaleX",
                            0,
                            2000,
                            "easeOutBack",
                            "${Text43}",
                            '0',
                            '1'
                        ],
                        [
                            "eid992",
                            "scaleX",
                            0,
                            2000,
                            "easeOutBack",
                            "${uni3_trabajo_reflex}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "uni3_salud": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni3_salud',
                            rect: ['0px', '0px', '754px', '371px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_salud.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(60,60,59,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text44',
                            text: '<p style=\"margin: 0px;\">​La cobertura en salud está distribuida un 69% en el régimen subsidiado y un 31 % de régimen contributivo, situación que es coherente con el nivel de ingresos y falta de vinculación laboral de las personas con discapacidad. En el régimen subsidiado la Empresa Administradora de Planes de Beneficios EAPB que cuenta con mayor número de PcD afiliadas es Capital Salud con un total de  80.778 personas correspondientes al 7 % de la población inscrita en RLCPD, mientras que, en el régimen contributivo es Nueva EPS la que tiene el mayor número de afiliados con discapacidad con un número total de 104.120 personas que equivale a un 9%  de la población del RLCPD&nbsp;</p>',
                            align: 'left',
                            rect: ['356px', '118px', '396px', '190px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '754px', '371px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni3_rehab": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni3_rehab',
                            rect: ['0px', '0px', '560px', '291px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_rehab.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​El <span style=\"font-weight: 600; font-size: 19px;\">42% de la población manifiesta</span> que no asiste actualmente a servicios de rehabilitación, siendo la principal causa la falta de dinero. Cabe resaltar además que el <span style=\"font-weight: 600; font-size: 19px;\">41% de la población requiere</span> la ayuda permanente de otra persona para realizar sus actividades de la vida diaria.</p>',
                            id: 'Text45',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            rect: ['191px', '39px', '364px', '125px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '560px', '291px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni4_text": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni4_text',
                            rect: ['0px', '0px', '504px', '331px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni4_text.svg', '0px', '0px']
                        },
                        {
                            rect: ['1px', '0px', '504px', '253px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text46',
                            text: '<p style=\"margin: 0px;\">​Como respuesta a las adversas condiciones a las que se ha visto enfrentada históricamente la población con discapacidad, se ha reconocido por consenso internacional la necesidad de <span style=\"font-weight: 600;\">generar instrumentos normativos rectores que orienten la acción mundial hacia la promoción, protección y aseguramiento de los derechos humanos y las libertades fundamentales de las personas con discapacidad.</span>\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Dentro de este marco normativo a nivel mundial se han empezado a formular, implementar y ejecutar mecanismos políticos, normativos y administrativos para el reconocimiento de los derechos humanos de este colectivo, que buscan el ejercicio pleno y goce de estos en igualdad de condiciones a los demás.\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Los procesos de certificación de discapacidad y de generación y sostenimiento de sistemas de información respecto a esta población es una de las medidas que se han tomado.&nbsp;</p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '505px', '331px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni4_sabias": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0', '0']],
                            id: 'uni4_sabias',
                            type: 'image',
                            rect: ['0px', '0px', '634px', '395px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni4_sabias.svg', '0px', '0px', '100%', '100%', 'no-repeat']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            id: 'Text49',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            rect: ['95px', '100px', '431px', '125px', 'auto', 'auto'],
                            align: 'left',
                            text: '<p style=\"margin: 0px;\">​Jillian Mercado es modelo y activista. Tiene distrofia muscular y desde los 12 años usa una silla de ruedas con la que se mueve por Nueva York. Se entrevistó con el Secretario General de Naciones Unidas y le preguntó cómo promueve la ONU la inclusión de las personas con discapacidad y, en el caso que a ella le interesa, la discriminación múltiple por ser mujer. Aquí su conversación:\n</p>'
                        },
                        {
                            type: 'rect',
                            rect: ['585px', '6px', '41px', '37px', 'auto', 'auto'],
                            id: 'Rectangle17',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(44,90,103,0)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            rect: ['221px', '219px', '165px', '80px', 'auto', 'auto'],
                            id: 'RoundRect2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(44,90,103,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '634px', '395px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid1047",
                            "scaleY",
                            0,
                            1500,
                            "easeOutBack",
                            "${Text49}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1041",
                            "scaleX",
                            0,
                            1500,
                            "easeOutBack",
                            "${uni4_sabias}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1043",
                            "scaleY",
                            0,
                            1500,
                            "easeOutBack",
                            "${uni4_sabias}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1045",
                            "scaleX",
                            0,
                            1500,
                            "easeOutBack",
                            "${Text49}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "uni4_antecede": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '652px', '331px', 'auto', 'auto'],
                            id: 'uni4_antecede',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni4_antecede.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(60,60,59,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text50',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​De particular importancia para Colombia resulta la Convención sobre los Derechos de las Personas con Discapacidad, que en el país toma cuerpo mediante la Ley 1346 de 2009, y es ratificada mediante la Sentencia C-293/10 de la Honorable Corte Constitucional. Se trata de la primera convención de derechos del siglo XXI, cuyo propósito es <span style=\"font-weight: 600; font-style: italic;\">“promover, proteger y asegurar el goce pleno y en condiciones de igualdad de todos los derechos humanos y libertades fundamentales por todas las personas con discapacidad, y promover el respeto de su dignidad inherente”.&nbsp;</span>\n</p><p style=\"margin: 0px;\">\n</p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Al hacer parte del bloque de constitucionalidad (artículo 93 de la Constitución Política de Colombia), la Convención tiene la misma fuerza de ley que las normas constitucionales y, por lo tanto, con su ratificación el Estado colombiano se comprometió a reformar todas las leyes, normas y políticas a través de las cuales se discrimine a las personas con discapacidad.&nbsp;</p>',
                            rect: ['0px', '56px', '460px', '272px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(242,150,28,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            align: 'left',
                            id: 'Text',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​ANTECEDENTES NORMATIVOS INTERNACIONALES</p>',
                            rect: ['6px', '17', 'auto', 'auto', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '652px', '331px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni5_consti_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni5_consti_1',
                            rect: ['0px', '0px', '552px', '196px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni5_consti_1.svg', '0px', '0px']
                        },
                        {
                            rect: ['75px', '51px', '316px', '65px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text52',
                            text: '<p style=\"margin: 0px;\">​Es el hito que marca el inicio de la era de cambio y desarrollo del corpus normativo cuya finalidad es la promoción y garantía de los derechos de las personas con discapacidad.&nbsp;</p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '552px', '196px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni5_consti_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni5_consti_2',
                            rect: ['0px', '0px', '732px', '196px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni5_consti_2.svg', '0px', '0px']
                        },
                        {
                            rect: ['257px', '57px', '308px', '65px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text54',
                            text: '<p style=\"margin: 0px;\">​Compromete al Estado Nacional a asegurar para sus ciudadanos los derechos fundamentales en condiciones de igualdad y justicia.&nbsp;</p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '732px', '196px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni5_consti_3dig": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni5_consti_3dig',
                            rect: ['0px', '0px', '316px', '110px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni5_consti_3dig.svg', '0px', '0px']
                        },
                        {
                            rect: ['7px', '4px', '301px', '101px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text55',
                            text: '<p style=\"margin: 0px;\">​De acuerdo con Martha Nussbaum (Las Fronteras de la Justicia. Consideraciones sobre la Exclusión), la dignidad humana se entiende como un rasgo inherente a todas las personas, independientemente de sus capacidades o aportes reales o potenciales a la sociedad.&nbsp;</p>',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '316px', '110px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni5_consti_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni5_consti_4',
                            rect: ['0px', '0px', '732px', '196px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni5_consti_4.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​Desde sus principios y su articulado sobre discapacidad permite proteger los derechos de las personas con discapacidad y propender por el respeto de su dignidad humana mediante i) la lucha contra la discriminación, ii) el reconocimiento de algunos derechos específicos para esta población y iii) la comprensión de los derechos y necesidades de forma integral y holística.\n</p>',
                            id: 'Text56',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            rect: ['256px', '35px', '308px', '150px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '732px', '196px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni5_consti_5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni5_consti_5',
                            rect: ['0px', '0px', '679px', '403px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni5_consti_5.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​La Constitución Política de Colombia de 1991:</p>',
                            id: 'uni5_textCopy',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            rect: ['368px', '0px', '301px', '20px', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​Se consagra el principio de igualdad para todos ciudadanos colombianos. Todas las personas nacen libres e iguales ante la ley y, en esta medida, deben recibir la misma protección y trato de las autoridades y gozar de los mismos derechos, libertades y oportunidades sin ninguna discriminación por razones de sexo, raza, origen nacional o familiar, lengua, religión, opinión política o filosófica. Asimismo, se consagra que el Estado debe promover las condiciones para que la igualdad sea real y efectiva y deberá entonces adoptar medidas en favor de los grupos discriminados o marginados. Según este mandato, el Estado también debe proteger a aquellas personas que por su condición económica, física o mental se encuentren en circunstancia de debilidad manifiesta.&nbsp;\n</p>',
                            id: 'Text58',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            rect: ['367px', '42px', '301px', '301px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '679px', '403px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni5_mandatos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '431px', '270px', 'auto', 'auto'],
                            id: 'uni5_mandatos',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni5_mandatos.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text59',
                            text: '<p style=\"margin: 0px;\">​En la Constitución se establecen mandatos específicos sobre los derechos a la salud, al trabajo, a la educación, a la participación y a la cultura de las personas con discapacidad, consagrando así la responsabilidad del Estado de eliminar las barreras que limitan su participación y plena inclusión social.</p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['1px', '55px', '419px', '80px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '431px', '270px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni5_mandatos_atencion": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0', '0']],
                            id: 'uni5_mandatos_atencion',
                            type: 'image',
                            rect: ['0px', '0px', '528px', '329px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni5_mandatos_atencion.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            id: 'Text60',
                            text: '<p style=\"margin: 0px;\">​Cabe mencionar que los artículos constitucionales utilizan un lenguaje que no se adapta a los postulados de la Convención sobre los Derechos de las Personas con Discapacidad. En repetidas ocasiones se utilizan expresiones como “minusválido”, las cuales han sido objeto de revisión constitucional al considerar que atentan contra la dignidad humana de las personas con discapacidad.</p>',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            rect: ['168px', '127px', '291px', '166px', 'auto', 'auto'],
                            align: 'left',
                            textStyle: ['', '', '', '', 'none']
                        },
                        {
                            type: 'rect',
                            rect: ['483px', '6px', '50px', '33px', 'auto', 'auto'],
                            id: 'Rectangle19',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(44,90,103,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '528px', '329px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: false,
                    data: [
                        [
                            "eid1086",
                            "scaleX",
                            0,
                            2500,
                            "easeInElastic",
                            "${Text60}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1088",
                            "scaleY",
                            0,
                            2500,
                            "easeInElastic",
                            "${Text60}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1084",
                            "scaleY",
                            0,
                            2500,
                            "easeInElastic",
                            "${uni5_mandatos_atencion}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1082",
                            "scaleX",
                            0,
                            2500,
                            "easeInElastic",
                            "${uni5_mandatos_atencion}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "uni5_mandatos_salud": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni5_mandatos_salud',
                            rect: ['0px', '-340px', '528px', '329px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni5_mandatos_salud.svg', '0px', '0px']
                        },
                        {
                            rect: ['169px', '-212px', '291px', '142px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text61',
                            text: '<p style=\"margin: 0px;\">​En los artículos 47, 48 y 49 de la Constitución se determinó que el Estado debe adelantar una política de previsión, rehabilitación e inclusión social para las personas con discapacidad y que se debe garantizar el acceso a la seguridad social y a servicios médicos oportunos y de calidad para todos los ciudadanos.\n</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['475px', '0px', '58px', '43px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle20',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(44,90,103,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '528px', '329px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid1090",
                            "top",
                            0,
                            3000,
                            "easeOutBack",
                            "${uni5_mandatos_salud}",
                            '-340px',
                            '0px'
                        ],
                        [
                            "eid1092",
                            "top",
                            0,
                            3000,
                            "easeOutBack",
                            "${Text61}",
                            '-212px',
                            '128px'
                        ]
                    ]
                }
            },
            "uni5_mandatos_trabajo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni5_mandatos_trabajo',
                            rect: ['0px', '0px', '528px', '329px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni5_mandatos_trabajo.svg', '0px', '0px']
                        },
                        {
                            rect: ['169px', '127px', '301px', '153px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            textStyle: ['', '', '', '', 'none'],
                            id: 'Text62',
                            text: '<p style=\"margin: 0px;\">​En el artículo 54 se establece que el Estado debe garantizar el derecho de las personas con discapacidad “a un trabajo acorde con sus condiciones de salud” y consagra que este se debe desarrollar en condiciones dignas y justas. En la Constitución se define entonces que el derecho al trabajo es tanto una obligación social como un derecho fundamental.</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['476px', '0px', '52px', '43px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle22',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(44,90,103,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '528px', '329px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid1093",
                            "top",
                            0,
                            3000,
                            "easeOutBack",
                            "${Text62}",
                            '-213px',
                            '127px'
                        ],
                        [
                            "eid1094",
                            "top",
                            0,
                            3000,
                            "easeOutBack",
                            "${uni5_mandatos_trabajo}",
                            '-340px',
                            '0px'
                        ]
                    ]
                }
            },
            "uni5_mandatos_educ": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '528px', '329px', 'auto', 'auto'],
                            id: 'uni5_mandatos_educ',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni5_mandatos_educ.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text63',
                            text: '<p style=\"margin: 0px;\">​En el artículo 68 se consagra que el Estado tiene la obligación de erradicar el analfabetismo y debe garantizar el acceso a educación de calidad a las personas con discapacidad. A la vez, se establece que la educación es un derecho fundamental de todos los niños y niñas y, en esta medida, se debe garantizar no solo el acceso, sino la permanencia y los ajustes que requieran para que la experiencia educativa sea exitosa.  En relación con el acceso a la cultura, en la Carta Política se consagró el derecho de todos los ciudadanos a la recreación, el deporte y las actividades culturales (artículos 52 y 70).</p>',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['169px', '73px', '291px', '242px', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            rect: ['480px', '0px', '48px', '51px', 'auto', 'auto'],
                            id: 'Rectangle23',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(44,90,103,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '528px', '329px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid1095",
                            "top",
                            0,
                            3000,
                            "easeOutBack",
                            "${Text63}",
                            '-267px',
                            '73px'
                        ],
                        [
                            "eid1096",
                            "top",
                            0,
                            3000,
                            "easeOutBack",
                            "${uni5_mandatos_educ}",
                            '-340px',
                            '0px'
                        ]
                    ]
                }
            },
            "uni6_marco_text": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni6_marco_text',
                            rect: ['0px', '0px', '693px', '326px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni6_marco_text.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '42px', '692px', '50px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​A partir de la expedición de la Constitución de 1991 se ha venido consolidando un marco jurídico que determina y busca garantizar los derechos de las  personas con discapacidad y al mismo tiempo establece las obligaciones del Estado y la sociedad para con ellos.&nbsp;</p>',
                            id: 'Text64',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(60,60,59,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '693px', '326px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni6_marco_text1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'uni6_marco_text1',
                            type: 'image',
                            rect: ['0px', '0px', '599px', '230px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni6_marco_text1.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['129px', '65px', '385px', '65px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Primer instrumento normativo a nivel nacional que busca reconocer y establecer mecanismos para la garantía de los derechos y promover la inclusión social de las personas con discapacidad.&nbsp;</p>',
                            id: 'Text65',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '599px', '230px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni6_marco_text2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'uni6_marco_text4',
                            type: 'image',
                            rect: ['0px', '0px', '599px', '230px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni6_marco_text4.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['49px', '19px', '522px', '191px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Código de la  Infancia y la Adolescencia. En su artículo 36 establece los derechos de los niños, niñas y adolescentes con discapacidad: “además de los derechos consagrados en la Constitución Política y en los tratados y convenios internacionales, los niños, las niñas y los adolescentes con discapacidad tienen derecho a gozar de una calidad de vida plena, y a que se les proporcionen las condiciones necesarias por parte del Estado para que puedan valerse por sí mismos, e integrarse a la sociedad”. De forma específica define que tienen derecho “al respeto por la diferencia y a disfrutar de una vida digna en condiciones de igualdad con las demás personas”, “a recibir atención, diagnóstico, tratamiento especializado, rehabilitación y cuidados especiales en salud, educación, orientación y apoyo a los miembros de la familia o a las personas responsables de su cuidado y atención”, “a la educación gratuita en las entidades especializadas para el efecto” y “a ser destinatarios de acciones y de oportunidades para reducir su vulnerabilidad y permitir la participación”.</p>',
                            id: 'Text67',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '599px', '230px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni6_marco_text3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni6_marco_text5',
                            rect: ['0px', '0px', '599px', '230px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni6_marco_text5.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​Por la cual se organiza el Sistema Nacional de Discapacidad, cuyo objeto es “impulsar la formulación e implementación de la política pública en discapacidad, en forma coordinada entre las entidades públicas del orden nacional, regional y local, las organizaciones de personas con y en situación de discapacidad y la sociedad civil, con el fin de promocionar y garantizar sus derechos fundamentales, en el marco de los Derechos Humanos” (Artículo 1º).</p>',
                            id: 'Text68',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            rect: ['113px', '50px', '419px', '112px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '599px', '230px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni6_marco_text4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni6_marco_text6',
                            rect: ['0px', '0px', '599px', '230px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni6_marco_text6.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​Por la cual se aprueba la Convención sobre los Derechos de las Personas con Discapacidad y es ratificada mediante la Sentencia C-293/10 de la Honorable Corte Constitucional. Al hacer parte del bloque de constitucionalidad (artículo 93 de la Constitución Política de Colombia), la Convención tiene la misma fuerza de ley que las normas constitucionales.</p>',
                            id: 'Text69',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            rect: ['113px', '50px', '422px', '95px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '599px', '230px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni6_marco_text5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni6_marco_text7',
                            rect: ['0px', '0px', '599px', '230px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni6_marco_text7.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            text: '<p style=\"margin: 0px;\">​Tiene por objetivo garantizar y asegurar el ejercicio efectivo de los derechos de las personas con discapacidad, mediante la adopción de medidas de inclusión, de acciones afirmativas, de ajustes razonables y de la eliminación de toda forma de discriminación por razón de discapacidad. El gran avance de esta ley está en el hecho de que se asignan responsabilidades concretas a actores específicos en relación con la expedición de políticas, acciones y programas o con la ejecución de ajustes razonables que contribuyan a garantizar el ejercicio de los derechos de las personas con discapacidad y su inclusión plena. Igualmente contempla acciones transversales que comprometen a los diferentes sectores, al igual que establece deberes para la sociedad civil.&nbsp;</p>',
                            id: 'Text70',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            rect: ['68px', '34px', '475px', '166px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '599px', '230px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni6_marco_text6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni6_marco_text8',
                            rect: ['0px', '0px', '599px', '230px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni6_marco_text8.svg', '0px', '0px']
                        },
                        {
                            rect: ['72px', '18px', '483px', '196px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            text: '<p style=\"margin: 0px;\">​Mediante el cual se adopta la <span style=\"font-style: italic;\">Política Pública Nacional de Discapacidad e Inclusión Social 2013 - 2022.</span> El objetivo de la Política Pública es “garantizar el goce pleno, y en condiciones de igualdad, de todos los derechos humanos y libertades fundamentales de las personas con discapacidad” (Conpes, 2013), a través de cinco ejes estratégicos, estos son: i) transformación de lo público; ii) garantía jurídica; iii) participación en la vida política y pública; iv) desarrollo de la capacidad, y v) reconocimiento a la diversidad. Cada una de estas estrategias cuenta con un conjunto de acciones asociadas que buscan dar cumplimiento a los objetivos de la Política Pública. Lo que se espera es que en el nivel territorial (departamental, distrital y municipal) se generen políticas públicas que se sustenten sobre esta misma base normativa y se direccione al cumplimiento de los mismos objetivos que se plantean para el nivel nacional.</p>',
                            id: 'Text71',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '599px', '230px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni6_norma_text": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '692px', '359px', 'auto', 'auto'],
                            id: 'uni6_norma_text',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni6_norma_text.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '64px', '692px', '80px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(60,60,59,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'left',
                            id: 'Text',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​La implementación del proceso de “Certificación de Discapacidad y RLCPD” se desarrolla con base en los numerales 23 y  30 del artículo 2º del Decreto 4107 de 2011, por medio del cual se determinan los objetivos y la estructura del Ministerio de Salud y Protección Social y se integra el Sector Administrativo de Salud y Protección Social. Los principales instrumentos normativos que otorgan la competencia para la expedición del proceso de certificación de discapacidad y el RLCPD son:</p>',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '692px', '359px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni6_norma_text1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '690px', '187px', 'auto', 'auto'],
                            id: 'uni6_norma_text1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni6_norma_text1.svg', '0px', '0px']
                        },
                        {
                            rect: ['101px', '53px', '483px', '100px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​La Convención sobre los Derechos de las Personas con Discapacidad, incorporada al orden interno mediante la Ley 1346 de 2009, establece, en su artículo 1, que las personas con discapacidad incluyen a aquellas que tengan <span style=\"font-weight: 700;\">deficiencias físicas, mentales, intelectuales o sensoriales a largo plazo que, al interactuar con diversas barreras, puedan impedir su participación plena y efectiva en la sociedad, en igualdad de condiciones con las demás.</span></p>',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '690px', '187px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni6_norma_text2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '690px', '187px', 'auto', 'auto'],
                            id: 'uni6_norma_text2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni6_norma_text2.svg', '0px', '0px']
                        },
                        {
                            rect: ['108px', '61px', '498px', '100px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'Text3',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​En su artículo 31, la Convención determina que una de las obligaciones de los Estados Partes es <span style=\"font-weight: 600;\">recopilar información estadística adecuada, que permita la formulación y aplicación de las políticas dirigidas a la población con discapacidad</span> y que tal información se utilizará para identificar y eliminar las barreras con que se enfrentan las personas con discapacidad en el ejercicio de sus derechos.</p>',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '690px', '187px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni6_norma_text3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '690px', '187px', 'auto', 'auto'],
                            id: 'uni6_norma_text3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni6_norma_text3.svg', '0px', '0px']
                        },
                        {
                            rect: ['81px', '40px', '552px', '130px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'Text4',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​El artículo 26 de la mencionada Convención define que los Estados Partes adoptarán medidas para que las personas con discapacidad puedan <span style=\"font-weight: 700;\">lograr y mantener la máxima independencia, capacidad física, mental, social y vocacional, y la inclusión y participación plena en todos los aspectos de la vida;</span> y que a tal fin, se organizarán, intensificarán y ampliarán servicios y programas generales de habilitación y rehabilitación, en particular en los ámbitos de la salud, el empleo, la educación y los servicios sociales, de forma que esos servicios y programas se basen en una evaluación multidisciplinar de las necesidades y capacidades de la persona.&nbsp;</p>',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '690px', '187px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni6_norma_text4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '690px', '187px', 'auto', 'auto'],
                            id: 'uni6_norma_text4',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni6_norma_text4.svg', '0px', '0px']
                        },
                        {
                            rect: ['92px', '40px', '533px', '125px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'Text5',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​La Ley Estatutaria 1618 de 2013 en los numerales 5 y 13 de su artículo 5, dispone que es responsabilidad de las entidades públicas de los diferentes niveles territoriales en el marco del Sistema Nacional de Discapacidad, implementar mecanismos para <span style=\"font-weight: 600;\">mantener actualizado el RLCPD</span> integrado en el sistema de información  de la  protección social,  administrado por el  Ministerio de Salud y Protección Social. Así mismo es deber de las entidades territoriales incluir en sus planes de desarrollo, acciones para fortalecerlo e incorporar la variable discapacidad en los demás sistemas de protección social y sus registros administrativos.&nbsp;</p>',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '690px', '187px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni6_norma_text5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '690px', '187px', 'auto', 'auto'],
                            id: 'uni6_norma_text5',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni6_norma_text5.svg', '0px', '0px']
                        },
                        {
                            rect: ['114px', '59px', '498px', '88px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'Text6',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\margin-top: -37px;\">​El numeral 10 del artículo 5 de la Ley Estatutaria 1618 de 2013, estableció que las entidades del orden territorial deben incluir en sus presupuestos los recursos para la implementación de acciones en favor del ejercicio de los derechos de las personas con discapacidad.</p><br><p style=\"margin: 0px;\">​El numeral 12 del artículo 5 de la Ley Estatutaria 1618 de 2013 establece que el Departamento Nacional de Planeación adoptará las medidas pertinentes para que <span style=\"font-weight: 600;\">el puntaje en la clasificación socioeconómica de las familias con miembros con discapacidad</span> <span style=\"font-weight: 600;\">esté acorde con el resultado de la certificación de discapacidad, </span>facilitándoles el registro en el SISBEN y el acceso a programas sociales.</p>',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '690px', '187px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni6_norma_text6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '690px', '187px', 'auto', 'auto'],
                            id: 'uni6_norma_text6',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni6_norma_text6.svg', '0px', '0px']
                        },
                        {
                            rect: ['94px', '59px', '528px', '100px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'Text7',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​En el numeral 7 del artículo 9 de la citada Ley Estatutaria 1618 de 2013, se hace referencia al <span style=\"font-weight: 600;\">derecho a la habilitación y rehabilitación integral</span>, determinando que “el Ministerio de Salud y Protección Social o quien haga sus veces, asegurará que las entidades públicas y privadas que presten servicios de salud, implementen programas y servicios de detección y atención integral temprana de la discapacidad a las características físicas, sensoriales, mentales y otras que puedan producir discapacidad”.</p>',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '690px', '187px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni6_norma_text7": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '690px', '188px', 'auto', 'auto'],
                            id: 'uni6_norma_text7',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni6_norma_text7.svg', '0px', '0px']
                        },
                        {
                            rect: ['31px', '36px', '619px', '125px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'Text8',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​La Ley 1753 de 2015, por la cual se expide el Plan Nacional de Desarrollo 2014-2018 “Todos por un Nuevo País”, en su Artículo 81 determina que se diseñará una <span style=\"font-weight: 700;\">ruta de atención intersectorial para personas con discapacidad.</span> En el parágrafo de dicho artículo se establece que para efectos de este proceso, el Ministerio de Salud y Protección Social implementará la Certificación de Discapacidad como medio para la inclusión y redireccionamiento a la oferta programática institucional. Así mismo, dentro de las bases del Plan Nacional de Desarrollo se establece que una de las acciones a ser implementadas para el logro de la Inclusión social a través de la garantía de los derechos de las personas con discapacidad es el aumento significativo en la cobertura del Registro de Discapacidad.\n</p>',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '690px', '188px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni6_norma_text8": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '690px', '188px', 'auto', 'auto'],
                            id: 'uni6_norma_text8',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni6_norma_text8.svg', '0px', '0px']
                        },
                        {
                            rect: ['165px', '50px', '419px', '100px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'Text9',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​El Documento Conpes Social 166 de 2013, por medio del cual se adopta la Política Pública Nacional de Discapacidad e Inclusión Social 2013-2022, solicita al Ministerio de Salud y Protección Social, <span style=\"font-weight: 600;\">ampliar la cobertura del RLCPD y promover la actualización y el uso de la información;</span> y garantizar dentro del Plan de Beneficios en Salud, entre otras cosas, la certificación de discapacidad.</p>',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '690px', '188px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "uni6_norma_text9": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni6_norma_text9',
                            rect: ['0px', '0px', '690px', '188px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni6_norma_text9.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['45px', '41px', '588px', '125px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​La Resolución 429 de 2016 adoptó la Política de Atención Integral en Salud -PAIS-, que fue modificada mediante la Resolución 2626 de 2019. Esta última resolución adopta el Modelo de Acción Integral Territorial-MAITE, la cual establece que para la prestación de servicios de salud se deben implementar Redes Integrales de Prestadores de Servicios de Salud –RIPSS- habilitadas; estas deben contar con una organización funcional conformada por un componente primario y un componente complementario. En relación con el talento humano en salud, en el marco de las RIPSS, se deberán gestionar, organizar y poner en operación los diferentes perfiles en equipos multidisciplinarios de salud, particularmente en el componente primario.</p>',
                            id: 'Text10',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '690px', '188px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni6_conside": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni6_conside',
                            rect: ['0px', '0px', '707px', '275px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni6_conside.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['0px', '62px', '339px', '214px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Teniendo en cuenta el actual marco normativo y técnico científico, es preciso contar con un mecanismo de certificación de discapacidad que permita dar cuenta de las limitaciones en la actividad y las restricciones en la participación, originadas por la condición de salud que presenta una persona. Así mismo y para efectos de la recopilación de información estadística y administrativa que permita el seguimiento y la trazabilidad de la situación de cada persona con discapacidad, es necesario establecer la organización y la operación del Registro de Discapacidad, registro administrativo articulado al Sistema Integral de Información de la Protección Social <span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 600; font-style: normal; text-decoration: none; font-size: 13px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">–</span>SISPRO<span style=\"font-family: Arial, Helvetica, sans-serif; font-weight: 600; font-style: normal; text-decoration: none; font-size: 13px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">–</span>.&nbsp;\n</p><br><p style=\"margin: 0px;\">​Bajo estas consideraciones y partiendo del reconocimiento de las condiciones socioeconómicas que enfrenta la población con discapacidad en Colombia, el 26 de febrero de 2018 se expidió la Resolución 583 de 2018 por la cual se implementa la Certificación de Discapacidad y el Registro de Localización y Caracterización de Personas con Discapacidad. </p>',
                            id: 'Text11',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(60,60,59,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['368px', '62px', '348px', '150px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Tras un análisis de la naturaleza y usos potenciales de la certificación de discapacidad, se determinó que su financiación no debe corresponder exclusivamente a los recursos del sector salud. Bajo esta perspectiva, fue necesaria la expedición de la Resolución 113 de 2020, por la cual se dictan disposiciones en relación con la certificación de discapacidad y el Registro de Localización y Caracterización de Personas con Discapacidad. </p><br><p style=\"margin: 0px;\">​Esta resolución derogó la Resolución 583 de 2018, reglamentando cambios importantes en relación la fuente de financiación y los responsables de la implementación del procedimiento de certificación de discapacidad, sin embargo, adopta los aspectos técnicos de dicho procedimiento, establecidos desde 2018.</p><br><p style=\"margin: 0px;\">​La implementación de las disposiciones de la Resolución 113 de 2020 es la razón de ser del presente proceso de formación.</p>',
                            id: 'Text12',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(60,60,59,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '716px', '276px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "intro_sabias": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '634px', '403px', 'auto', 'auto'],
                            id: 'intro_sabias_fondo',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/intro_sabias_fondo.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'intro_sabias_1',
                            display: 'block',
                            symbolName: 'intro_sabias_1',
                            rect: ['-316px', '-193px', '634', '395', 'auto', 'auto'],
                            transform: [[], [], [], ['0.00079', '0.00127']]
                        },
                        {
                            type: 'rect',
                            id: 'intro_sabias_2',
                            symbolName: 'intro_sabias_2',
                            display: 'none',
                            rect: ['0px', '5px', '634', '395', 'auto', 'auto']
                        },
                        {
                            rect: ['0px', '5px', '634', '395', 'auto', 'auto'],
                            id: 'intro_sabias_3',
                            symbolName: 'intro_sabias_3',
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            rect: ['571px', '7px', '71px', '45px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(44,90,103,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['162px', '344px', '90px', '40px', 'auto', 'auto'],
                            display: 'none',
                            id: 'Rectangle12',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(44,90,103,0)']
                        },
                        {
                            type: 'image',
                            rect: ['520', '337', '40px', '40px', 'auto', 'auto'],
                            display: 'none',
                            id: 'flecha_dere2',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/flecha_dere.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['520', '342px', '40px', '40px', 'auto', 'auto'],
                            display: 'none',
                            id: 'flecha_dere2Copy',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/flecha_dere.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['12', '344px', '40px', '40px', 'auto', 'auto'],
                            display: 'none',
                            id: 'flecha_izq2',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/flecha_izq.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['12', '344px', '40px', '40px', 'auto', 'auto'],
                            display: 'none',
                            id: 'flecha_izq2Copy',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/flecha_izq.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '634px', '403px']
                        }
                    }
                },
                timeline: {
                    duration: 7781,
                    autoPlay: false,
                    labels: {
                        "0": 2000,
                        "1": 3000,
                        "11": 5000,
                        "2": 5384
                    },
                    data: [
                        [
                            "eid678",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${flecha_izq2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid679",
                            "display",
                            7781,
                            0,
                            "linear",
                            "${flecha_izq2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid661",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${intro_sabias_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid671",
                            "display",
                            5281,
                            0,
                            "linear",
                            "${intro_sabias_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid669",
                            "left",
                            5384,
                            1116,
                            "linear",
                            "${intro_sabias_3}",
                            '-316px',
                            '0px'
                        ],
                        [
                            "eid676",
                            "display",
                            4500,
                            0,
                            "linear",
                            "${flecha_izq2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid677",
                            "display",
                            5281,
                            0,
                            "linear",
                            "${flecha_izq2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid665",
                            "top",
                            3000,
                            1250,
                            "linear",
                            "${intro_sabias_2}",
                            '-192px',
                            '5px'
                        ],
                        [
                            "eid666",
                            "top",
                            5384,
                            1116,
                            "linear",
                            "${intro_sabias_3}",
                            '-192px',
                            '5px'
                        ],
                        [
                            "eid668",
                            "scaleX",
                            5384,
                            1116,
                            "linear",
                            "${intro_sabias_3}",
                            '0.00079',
                            '1'
                        ],
                        [
                            "eid667",
                            "scaleY",
                            5384,
                            1116,
                            "linear",
                            "${intro_sabias_3}",
                            '0.00127',
                            '1'
                        ],
                        [
                            "eid659",
                            "top",
                            0,
                            1250,
                            "linear",
                            "${intro_sabias_1}",
                            '-193px',
                            '4px'
                        ],
                        [
                            "eid657",
                            "left",
                            0,
                            1250,
                            "linear",
                            "${intro_sabias_1}",
                            '-316px',
                            '0px'
                        ],
                        [
                            "eid672",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${flecha_dere2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid673",
                            "display",
                            2675,
                            0,
                            "linear",
                            "${flecha_dere2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1000",
                            "display",
                            4966,
                            0,
                            "easeOutBack",
                            "${Rectangle12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1001",
                            "display",
                            5258,
                            0,
                            "easeOutBack",
                            "${Rectangle12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid670",
                            "display",
                            5384,
                            0,
                            "linear",
                            "${intro_sabias_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid655",
                            "scaleY",
                            0,
                            1250,
                            "linear",
                            "${intro_sabias_1}",
                            '0.00127',
                            '1'
                        ],
                        [
                            "eid674",
                            "display",
                            4500,
                            0,
                            "linear",
                            "${flecha_dere2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid675",
                            "display",
                            5281,
                            0,
                            "linear",
                            "${flecha_dere2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid660",
                            "display",
                            2743,
                            0,
                            "linear",
                            "${intro_sabias_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid663",
                            "left",
                            3000,
                            1250,
                            "linear",
                            "${intro_sabias_2}",
                            '-316px',
                            '0px'
                        ],
                        [
                            "eid662",
                            "scaleX",
                            3000,
                            1250,
                            "linear",
                            "${intro_sabias_2}",
                            '0.00079',
                            '1'
                        ],
                        [
                            "eid664",
                            "scaleY",
                            3000,
                            1237,
                            "linear",
                            "${intro_sabias_2}",
                            '0.00127',
                            '1'
                        ],
                        [
                            "eid653",
                            "scaleX",
                            0,
                            1250,
                            "linear",
                            "${intro_sabias_1}",
                            '0.00079',
                            '1'
                        ]
                    ]
                }
            },
            "sabias": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '56px', '56px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Ellipse',
                            opacity: '1',
                            type: 'ellipse',
                            fill: ['rgba(44,90,103,1.00)', [50, 50, 'true', 'farthest-corner', [['rgba(44,90,103,1.00)', 59], ['rgba(255,255,255,1.00)', 100]]]]
                        },
                        {
                            type: 'image',
                            id: 'sabias',
                            rect: ['0px', '0px', '56px', '70px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/sabias.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '56px', '70px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid221",
                            "background-image",
                            0,
                            1000,
                            "linear",
                            "${Ellipse}",
                            [50,50,true,'farthest-corner',[['rgba(44,90,103,1.00)',59],['rgba(255,255,255,1.00)',100]]],
                            [50,50,true,'farthest-corner',[['rgba(44,90,103,1.00)',0],['rgba(255,255,255,1.00)',100]]]
                        ]
                    ]
                }
            },
            "info": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['-1310px', '0px', '1278px', '602px', 'auto', 'auto'],
                            id: 'uni2_pobreza_info',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni2_pobreza_info.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['13px', '0px', '1271px', '602px', 'auto', 'auto'],
                            id: 'uni2_pobreza_info1',
                            fill: ['rgba(0,0,0,0)', 'images/uni2_pobreza_info1.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0px', '0px', '1278px', '602px', 'auto', 'auto'],
                            id: 'uni2_pobreza_info2',
                            fill: ['rgba(0,0,0,0)', 'images/uni2_pobreza_info2.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['32px', '317px', '40px', '40px', 'auto', 'auto'],
                            display: 'none',
                            id: 'flecha_izqCopy',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/flecha_izq.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['1161px', '317px', '40px', '40px', 'auto', 'auto'],
                            display: 'block',
                            id: 'flecha_dereCopy',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/flecha_dere.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['1236px', '12px', '40px', '40px', 'auto', 'auto'],
                            id: 'Rectangle15',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1286px', '602px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    labels: {
                        "1": 2113,
                        "2": 3000
                    },
                    data: [
                        [
                            "eid819",
                            "display",
                            2686,
                            0,
                            "easeInOutBack",
                            "${uni2_pobreza_info1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid816",
                            "left",
                            0,
                            750,
                            "easeInOutBack",
                            "${uni2_pobreza_info}",
                            '-1310px',
                            '8px'
                        ],
                        [
                            "eid820",
                            "display",
                            3000,
                            0,
                            "easeInOutBack",
                            "${uni2_pobreza_info2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid818",
                            "left",
                            0,
                            750,
                            "easeInOutBack",
                            "${uni2_pobreza_info1}",
                            '-1305px',
                            '13px'
                        ],
                        [
                            "eid1216",
                            "display",
                            1000,
                            0,
                            "easeInOutBack",
                            "${flecha_dereCopy}",
                            'block',
                            'block'
                        ],
                        [
                            "eid822",
                            "display",
                            2686,
                            0,
                            "easeInOutBack",
                            "${flecha_dereCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid821",
                            "display",
                            3000,
                            0,
                            "easeInOutBack",
                            "${flecha_izqCopy}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "uni2_pobreza": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '603px', '280px', 'auto', 'auto'],
                            id: 'uni2_pobreza_text-01',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni2_pobreza_text-01.svg', '0px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'normal'],
                            type: 'text',
                            align: 'left',
                            id: 'Text27',
                            textStyle: ['', '', '', '', 'none'],
                            text: '<p style=\"margin: 0px;\">​La condición más difícil que deben</p><p style=\"margin: 0px;\">enfrentar las personas con discapacidad</p><p style=\"margin: 0px;\">no es su discapacidad específica, sino</p><p style=\"margin: 0px;\">la inaccesibilidad a los derechos y</p><p style=\"margin: 0px;\">servicios como el cuidado de la salud, la</p><p style=\"margin: 0px;\">educación, el empleo, los sistemas de</p><p style=\"margin: 0px;\">apoyo social, lo cual genera como</p><p style=\"margin: 0px;\">resultado que las personas con</p><p style=\"margin: 0px;\">discapacidad tengan unas tasas</p><p style=\"margin: 0px;\">desproporcionadamente altas de</p><p style=\"margin: 0px;\">pobreza y severas dificultades en</p><p style=\"margin: 0px;\">algunos casos para lograr cubrir sus</p><p style=\"margin: 0px;\">necesidades básicas.</p>',
                            rect: ['161px', '52px', '260px', '196px', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '603px', '280px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni3_edad_grafica1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['1278px', '0px', '1278px', '602px', 'auto', 'auto'],
                            id: 'uni3_edad_g1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_edad_g1.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['0px', '0px', '1278px', '602px', 'auto', 'auto'],
                            id: 'uni3_edad_g1_1',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_edad_g1_1.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0px', '1px', '1278px', '602px', 'auto', 'auto'],
                            id: 'uni3_edad_g1_2',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_edad_g1_2.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0px', '0px', '1278px', '602px', 'auto', 'auto'],
                            id: 'uni3_edad_g1_3',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_edad_g1_3.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0px', '0px', '1278px', '602px', 'auto', 'auto'],
                            id: 'uni3_edad_g1_4',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_edad_g1_4.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0px', '0px', '1278px', '602px', 'auto', 'auto'],
                            id: 'uni3_edad_g1_5',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_edad_g1_5.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['0px', '0px', '1278px', '602px', 'auto', 'auto'],
                            id: 'uni3_edad_g1_6',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_edad_g1_6.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['52px', '454px', '40px', '40px', 'auto', 'auto'],
                            display: 'none',
                            id: 'flecha_abajo',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/flecha_abajo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['52', '138', '40px', '40px', 'auto', 'auto'],
                            display: 'none',
                            id: 'flecha_arriba',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/flecha_arriba.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['52px', '454px', '40px', '40px', 'auto', 'auto'],
                            display: 'none',
                            id: 'flecha_abajoCopy',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/flecha_abajo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['52', '138', '40px', '40px', 'auto', 'auto'],
                            display: 'none',
                            id: 'flecha_arribaCopy',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/flecha_arriba.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['52px', '454px', '40px', '40px', 'auto', 'auto'],
                            display: 'none',
                            id: 'flecha_abajoCopy2',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/flecha_abajo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['52', '138', '40px', '40px', 'auto', 'auto'],
                            display: 'none',
                            id: 'flecha_arribaCopy2',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/flecha_arriba.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['52px', '454px', '40px', '40px', 'auto', 'auto'],
                            display: 'none',
                            id: 'flecha_abajoCopy3',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/flecha_abajo.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['52', '138', '40px', '40px', 'auto', 'auto'],
                            display: 'none',
                            id: 'flecha_arribaCopy3',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/flecha_arriba.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['52', '138', '40px', '40px', 'auto', 'auto'],
                            display: 'none',
                            id: 'flecha_arribaCopy4',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/flecha_arriba.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['52px', '454px', '40px', '40px', 'auto', 'auto'],
                            display: 'none',
                            id: 'flecha_abajoCopy4',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/flecha_abajo.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['1030px', '8px', '64px', '58px', 'auto', 'auto'],
                            id: 'Rectangle22',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1278px', '603px']
                        }
                    }
                },
                timeline: {
                    duration: 15548,
                    autoPlay: false,
                    labels: {
                        "1": 2175,
                        "2": 2675,
                        "3": 5224,
                        "4": 7799,
                        "5": 10399,
                        "6": 12998
                    },
                    data: [
                        [
                            "eid926",
                            "display",
                            15000,
                            0,
                            "linear",
                            "${flecha_arribaCopy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid927",
                            "display",
                            15548,
                            0,
                            "linear",
                            "${flecha_arribaCopy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid924",
                            "display",
                            12249,
                            0,
                            "linear",
                            "${flecha_arribaCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid925",
                            "display",
                            12724,
                            0,
                            "linear",
                            "${flecha_arribaCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid922",
                            "display",
                            12249,
                            0,
                            "linear",
                            "${flecha_abajoCopy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid923",
                            "display",
                            12724,
                            0,
                            "linear",
                            "${flecha_abajoCopy4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid911",
                            "display",
                            4474,
                            0,
                            "linear",
                            "${flecha_abajoCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid912",
                            "display",
                            4949,
                            0,
                            "linear",
                            "${flecha_abajoCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid920",
                            "display",
                            9874,
                            0,
                            "linear",
                            "${flecha_arribaCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid921",
                            "display",
                            10349,
                            0,
                            "linear",
                            "${flecha_arribaCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid905",
                            "top",
                            12998,
                            2075,
                            "linear",
                            "${uni3_edad_g1_6}",
                            '602px',
                            '0px'
                        ],
                        [
                            "eid873",
                            "top",
                            0,
                            2000,
                            "linear",
                            "${uni3_edad_g1_1}",
                            '-1px',
                            '0px'
                        ],
                        [
                            "eid876",
                            "display",
                            2500,
                            0,
                            "easeInElastic",
                            "${uni3_edad_g1_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid909",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${flecha_abajo}",
                            'none',
                            'block'
                        ],
                        [
                            "eid910",
                            "display",
                            2475,
                            0,
                            "linear",
                            "${flecha_abajo}",
                            'block',
                            'none'
                        ],
                        [
                            "eid914",
                            "display",
                            7250,
                            0,
                            "linear",
                            "${flecha_abajoCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid915",
                            "display",
                            7725,
                            0,
                            "linear",
                            "${flecha_abajoCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid874",
                            "left",
                            0,
                            2000,
                            "linear",
                            "${uni3_edad_g1_1}",
                            '1278px',
                            '0px'
                        ],
                        [
                            "eid877",
                            "display",
                            0,
                            0,
                            "easeInElastic",
                            "${uni3_edad_g1_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid893",
                            "display",
                            5250,
                            0,
                            "easeInElastic",
                            "${uni3_edad_g1_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid894",
                            "display",
                            7575,
                            0,
                            "linear",
                            "${uni3_edad_g1_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid908",
                            "display",
                            4474,
                            0,
                            "linear",
                            "${flecha_arriba}",
                            'none',
                            'block'
                        ],
                        [
                            "eid913",
                            "display",
                            4949,
                            0,
                            "linear",
                            "${flecha_arriba}",
                            'block',
                            'none'
                        ],
                        [
                            "eid891",
                            "top",
                            2675,
                            2075,
                            "linear",
                            "${uni3_edad_g1_2}",
                            '603px',
                            '1px'
                        ],
                        [
                            "eid916",
                            "display",
                            7250,
                            0,
                            "linear",
                            "${flecha_arribaCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid917",
                            "display",
                            7725,
                            0,
                            "linear",
                            "${flecha_arribaCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid872",
                            "top",
                            0,
                            2000,
                            "linear",
                            "${uni3_edad_g1}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid881",
                            "display",
                            0,
                            0,
                            "easeInElastic",
                            "${uni3_edad_g1_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid882",
                            "display",
                            2675,
                            0,
                            "easeInElastic",
                            "${uni3_edad_g1_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid892",
                            "display",
                            5000,
                            0,
                            "linear",
                            "${uni3_edad_g1_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid870",
                            "left",
                            0,
                            2000,
                            "linear",
                            "${uni3_edad_g1}",
                            '1278px',
                            '0px'
                        ],
                        [
                            "eid878",
                            "display",
                            0,
                            0,
                            "easeInElastic",
                            "${uni3_edad_g1_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid897",
                            "display",
                            7799,
                            0,
                            "easeInElastic",
                            "${uni3_edad_g1_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid898",
                            "display",
                            10124,
                            0,
                            "linear",
                            "${uni3_edad_g1_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid880",
                            "display",
                            0,
                            0,
                            "easeInElastic",
                            "${uni3_edad_g1_6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid906",
                            "display",
                            12998,
                            0,
                            "easeInElastic",
                            "${uni3_edad_g1_6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid907",
                            "display",
                            15323,
                            0,
                            "linear",
                            "${uni3_edad_g1_6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid879",
                            "display",
                            0,
                            0,
                            "easeInElastic",
                            "${uni3_edad_g1_5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid903",
                            "display",
                            10399,
                            0,
                            "easeInElastic",
                            "${uni3_edad_g1_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid904",
                            "display",
                            12724,
                            0,
                            "linear",
                            "${uni3_edad_g1_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid918",
                            "display",
                            9874,
                            0,
                            "linear",
                            "${flecha_abajoCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid919",
                            "display",
                            10349,
                            0,
                            "linear",
                            "${flecha_abajoCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid895",
                            "top",
                            5250,
                            2075,
                            "linear",
                            "${uni3_edad_g1_3}",
                            '602px',
                            '0px'
                        ],
                        [
                            "eid902",
                            "top",
                            10399,
                            2075,
                            "linear",
                            "${uni3_edad_g1_5}",
                            '602px',
                            '0px'
                        ],
                        [
                            "eid896",
                            "top",
                            7799,
                            2075,
                            "linear",
                            "${uni3_edad_g1_4}",
                            '602px',
                            '0px'
                        ]
                    ]
                }
            },
            "uni3_edad_grafica2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            id: 'uni3_edad_g2',
                            transform: [[], [], [], ['0', '0']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/uni3_edad_g2.svg', '0px', '0px']
                        },
                        {
                            rect: ['648px', '6px', '92px', '54px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle23',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '735px', '414px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid929",
                            "scaleX",
                            0,
                            1000,
                            "easeOutBack",
                            "${uni3_edad_g2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid931",
                            "scaleY",
                            0,
                            1000,
                            "easeOutBack",
                            "${uni3_edad_g2}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "uni3_geogra_grafica3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['0']],
                            id: 'uni3_geogra_g3',
                            type: 'image',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_1',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_1.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_2',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_2.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_3',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_3.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_4',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_4.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_5',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_5.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_6',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_6.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_7',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_7.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_8',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_8.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_9',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_9.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_10',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_10.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_11',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_11.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_12',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_12.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_13',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_13.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_14',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_14.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_15',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_15.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_16',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_16.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_17',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_17.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_18',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_18.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_19',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_19.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_20',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_20.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_21',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_21.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_22',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_22.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_23',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_23.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_24',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_24.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_25',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_25.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_26',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_26.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_27',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_27.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_28',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_28.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_29',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_29.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_30',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_30.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_31',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_31.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_32',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_32.svg', '0px', '0px']
                        },
                        {
                            userClass: 'imagen',
                            type: 'image',
                            id: 'uni3_geogra_g3_33',
                            display: 'none',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_geogra_g3_33.svg', '0px', '0px']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['312px', '271px', '16px', '25px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['338px', '180px', '35px', '25px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['150px', '61px', '27px', '25px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['273px', '253px', '27px', '18px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['285px', '329px', '35px', '18px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['169px', '167px', '16px', '25px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['303px', '144px', '27px', '11px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['197px', '290px', '16px', '18px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['227px', '271px', '27px', '25px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['269px', '32px', '16px', '11px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_10',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['287px', '167px', '16px', '18px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_11',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['197px', '196px', '16px', '11px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_12',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['256px', '214px', '27px', '18px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_13',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['207px', '176px', '16px', '11px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_14',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['191px', '176px', '14px', '11px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_15',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['169px', '244px', '22px', '11px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_16',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['263px', '101px', '14px', '18px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_17',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['213px', '86px', '14px', '18px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_18',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['249px', '68px', '14px', '18px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_19',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['197px', '104px', '14px', '18px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_20',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['213px', '43px', '14px', '18px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_21',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['211px', '207px', '14px', '18px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_22',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['255px', '174px', '16px', '11px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_23',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['227px', '61px', '14px', '18px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_24',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['237px', '179px', '14px', '11px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_25',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['234px', '110px', '14px', '11px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_26',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['205px', '232px', '14px', '18px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_27',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['148px', '255px', '16px', '25px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_28',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['250px', '137px', '16px', '25px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_29',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['177px', '214px', '14px', '11px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_30',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['197px', '137px', '27px', '25px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_31',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['234px', '205px', '14px', '11px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_32',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            userClass: 'cla',
                            type: 'rect',
                            rect: ['348px', '232px', '30px', '18px', 'auto', 'auto'],
                            id: 'bto_geogra_g3_33',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['660px', '0px', '75px', '58px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '735px', '414px']
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: false,
                    data: [
                        [
                            "eid949",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_geogra_g3_18}",
                            'none',
                            'none'
                        ],
                        [
                            "eid946",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_geogra_g3_15}",
                            'none',
                            'none'
                        ],
                        [
                            "eid935",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_geogra_g3_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid947",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_geogra_g3_16}",
                            'none',
                            'none'
                        ],
                        [
                            "eid957",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_geogra_g3_26}",
                            'none',
                            'none'
                        ],
                        [
                            "eid941",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_geogra_g3_10}",
                            'none',
                            'none'
                        ],
                        [
                            "eid962",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_geogra_g3_31}",
                            'none',
                            'none'
                        ],
                        [
                            "eid945",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_geogra_g3_14}",
                            'none',
                            'none'
                        ],
                        [
                            "eid951",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_geogra_g3_20}",
                            'none',
                            'none'
                        ],
                        [
                            "eid954",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_geogra_g3_23}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1331",
                            "display",
                            0,
                            0,
                            "easeInElastic",
                            "${uni3_geogra_g3_33}",
                            'none',
                            'none'
                        ],
                        [
                            "eid944",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_geogra_g3_13}",
                            'none',
                            'none'
                        ],
                        [
                            "eid937",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_geogra_g3_6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid948",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_geogra_g3_17}",
                            'none',
                            'none'
                        ],
                        [
                            "eid956",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_geogra_g3_25}",
                            'none',
                            'none'
                        ],
                        [
                            "eid964",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_geogra_g3_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid967",
                            "scaleX",
                            0,
                            2500,
                            "easeOutBack",
                            "${uni3_geogra_g3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid943",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_geogra_g3_12}",
                            'none',
                            'none'
                        ],
                        [
                            "eid938",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_geogra_g3_7}",
                            'none',
                            'none'
                        ],
                        [
                            "eid959",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_geogra_g3_28}",
                            'none',
                            'none'
                        ],
                        [
                            "eid939",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_geogra_g3_8}",
                            'none',
                            'none'
                        ],
                        [
                            "eid932",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_geogra_g3_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid960",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_geogra_g3_29}",
                            'none',
                            'none'
                        ],
                        [
                            "eid950",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_geogra_g3_19}",
                            'none',
                            'none'
                        ],
                        [
                            "eid963",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_geogra_g3_32}",
                            'none',
                            'none'
                        ],
                        [
                            "eid958",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_geogra_g3_27}",
                            'none',
                            'none'
                        ],
                        [
                            "eid940",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_geogra_g3_9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid953",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_geogra_g3_22}",
                            'none',
                            'none'
                        ],
                        [
                            "eid936",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_geogra_g3_5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid934",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_geogra_g3_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid955",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_geogra_g3_24}",
                            'none',
                            'none'
                        ],
                        [
                            "eid961",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_geogra_g3_30}",
                            'none',
                            'none'
                        ],
                        [
                            "eid952",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_geogra_g3_21}",
                            'none',
                            'none'
                        ],
                        [
                            "eid942",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni3_geogra_g3_11}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "uni4_ante_g9": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni4_antecede_g9',
                            rect: ['-1237px', '0px', '1225px', '555px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni4_antecede_g9.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '1225px', '555px', 'auto', 'auto'],
                            id: 'uni4_antecede_g9_1',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/uni4_antecede_g9_1.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '1225px', '555px', 'auto', 'auto'],
                            id: 'uni4_antecede_g9_2',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/uni4_antecede_g9_2.svg', '0px', '0px', '100%', '0%', 'no-repeat']
                        },
                        {
                            rect: ['0px', '0px', '1225px', '555px', 'auto', 'auto'],
                            id: 'uni4_antecede_g9_3',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/uni4_antecede_g9_3.svg', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '1225px', '555px', 'auto', 'auto'],
                            id: 'uni4_antecede_g9_4',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/uni4_antecede_g9_4.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'uni4_antecede_g9_0',
                            rect: ['0px', '0px', '1225px', '555px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni4_antecede_g9_0.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'uni4_antecede_g9_5',
                            rect: ['0px', '2px', '1225px', '555px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni4_antecede_g9_5.svg', '0px', '0px']
                        },
                        {
                            rect: ['378px', '248px', '142px', '61px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle16',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(44,90,103,0)']
                        },
                        {
                            rect: ['378px', '149px', '142px', '61px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle16Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(44,90,103,0)']
                        },
                        {
                            rect: ['378px', '339px', '142px', '36px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle16Copy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(44,90,103,0)']
                        },
                        {
                            rect: ['542px', '148px', '142px', '61px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle16Copy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(44,90,103,0)']
                        },
                        {
                            rect: ['547px', '248px', '142px', '74px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle16Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(44,90,103,0)']
                        },
                        {
                            rect: ['1151px', '0px', '74px', '80px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle15',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(44,90,103,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1225px', '555px']
                        }
                    }
                },
                timeline: {
                    duration: 4529.0549909628,
                    autoPlay: false,
                    labels: {
                        "1": 851,
                        "2": 1096,
                        "3": 1750,
                        "4": 2404,
                        "5": 3058,
                        "0": 3837
                    },
                    data: [
                        [
                            "eid1011",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni4_antecede_g9_1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1019",
                            "display",
                            1031,
                            0,
                            "easeOutBack",
                            "${uni4_antecede_g9_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1028",
                            "background-size",
                            2404,
                            404,
                            "easeOutBack",
                            "${uni4_antecede_g9_4}",
                            [100,0],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1392",
                            "background-size",
                            3837,
                            404,
                            "easeOutBack",
                            "${uni4_antecede_g9_0}",
                            [100,0],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1012",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni4_antecede_g9_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1018",
                            "display",
                            1096,
                            0,
                            "easeOutBack",
                            "${uni4_antecede_g9_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1022",
                            "display",
                            1701,
                            0,
                            "easeOutBack",
                            "${uni4_antecede_g9_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1391",
                            "background-size",
                            3058,
                            404,
                            "easeOutBack",
                            "${uni4_antecede_g9_5}",
                            [100,0],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1390",
                            "display",
                            3837,
                            0,
                            "easeOutBack",
                            "${uni4_antecede_g9_0}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1030",
                            "display",
                            4442,
                            0,
                            "easeOutBack",
                            "${uni4_antecede_g9_0}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1388",
                            "display",
                            3058,
                            0,
                            "easeOutBack",
                            "${uni4_antecede_g9_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1389",
                            "display",
                            3663,
                            0,
                            "easeOutBack",
                            "${uni4_antecede_g9_5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1017",
                            "left",
                            0,
                            851,
                            "easeOutBack",
                            "${uni4_antecede_g9_1}",
                            '-1237px',
                            '0px'
                        ],
                        [
                            "eid1013",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni4_antecede_g9_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1023",
                            "display",
                            1750,
                            0,
                            "easeOutBack",
                            "${uni4_antecede_g9_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1024",
                            "display",
                            2355,
                            0,
                            "easeOutBack",
                            "${uni4_antecede_g9_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1025",
                            "background-size",
                            1750,
                            404,
                            "easeOutBack",
                            "${uni4_antecede_g9_3}",
                            [100,0],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1014",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${uni4_antecede_g9_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid1026",
                            "display",
                            2404,
                            0,
                            "easeOutBack",
                            "${uni4_antecede_g9_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1027",
                            "display",
                            3009,
                            0,
                            "easeOutBack",
                            "${uni4_antecede_g9_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1016",
                            "left",
                            0,
                            851,
                            "easeOutBack",
                            "${uni4_antecede_g9}",
                            '-1237px',
                            '0px'
                        ],
                        [
                            "eid1021",
                            "background-size",
                            1096,
                            404,
                            "easeOutBack",
                            "${uni4_antecede_g9_2}",
                            [100,0],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            },
            "uni6_marco_text1_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'uni6_marco_text12',
                            type: 'image',
                            rect: ['0px', '0px', '599px', '230px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni6_marco_text1.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['96px', '83px', '385px', '65px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Primer instrumento normativo a nivel nacional que busca reconocer y establecer mecanismos para la garantía de los derechos y promover la inclusión social de las personas con discapacidad.&nbsp;</p>',
                            id: 'Text65',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '599px', '230px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni6_marco_text1_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni6_marco_text13',
                            rect: ['0px', '0px', '599px', '230px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni6_marco_text1.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['122px', '75px', '385px', '65px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Primer instrumento normativo a nivel nacional que busca reconocer y establecer mecanismos para la garantía de los derechos y promover la inclusión social de las personas con discapacidad.&nbsp;</p>',
                            id: 'Text65Copy',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '599px', '230px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "uni6_marco_text1_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni6_marco_text13',
                            rect: ['0px', '0px', '599px', '230px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni6_marco_text4.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['49px', '8px', '522px', '191px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Código de la  Infancia y la Adolescencia. En su artículo 36 establece los derechos de los niños, niñas y adolescentes con discapacidad: “además de los derechos consagrados en la Constitución Política y en los tratados y convenios internacionales, los niños, las niñas y los adolescentes con discapacidad tienen derecho a gozar de una calidad de vida plena, y a que se les proporcionen las condiciones necesarias por parte del Estado para que puedan valerse por sí mismos, e integrarse a la sociedad”. De forma específica define que tienen derecho “al respeto por la diferencia y a disfrutar de una vida digna en condiciones de igualdad con las demás personas”, “a recibir atención, diagnóstico, tratamiento especializado, rehabilitación y cuidados especiales en salud, educación, orientación y apoyo a los miembros de la familia o a las personas responsables de su cuidado y atención”, “a la educación gratuita en las entidades especializadas para el efecto” y “a ser destinatarios de acciones y de oportunidades para reducir su vulnerabilidad y permitir la participación”.</p>',
                            id: 'Text67',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [13, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '599px', '230px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "cc": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1280px', '600px', 'auto', 'auto'],
                            id: 'cortina_cc',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cortina_cc.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['1218px', '159px', '53px', '60px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(44,90,103,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "creditos": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1280px', '600px', 'auto', 'auto'],
                            id: 'cortina_creditos',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cortina_creditos.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['1220px', '155px', '51px', '55px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(44,90,103,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "mapa": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1280px', '600px', 'auto', 'auto'],
                            id: 'cortina_mapa',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/cortina_mapa.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['1218px', '159px', '53px', '60px', 'auto', 'auto'],
                            id: 'Rectangle3Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(44,90,103,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "uni3_trabajo_g7": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'uni3_trabajo_g7',
                            rect: ['0px', '0px', '735px', '414px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/uni3_trabajo_g7.svg', '0px', '0px', '0%', '0%', 'no-repeat']
                        },
                        {
                            rect: ['667px', '5px', '68px', '62px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '735px', '414px']
                        }
                    }
                },
                timeline: {
                    duration: 2750,
                    autoPlay: false,
                    data: [
                        [
                            "eid975",
                            "background-size",
                            0,
                            2750,
                            "easeOutBack",
                            "${uni3_trabajo_g7}",
                            [0,0],
                            [100,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ]
                    ]
                }
            },
            "menu_opciones": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'menu_opciones',
                            rect: ['0px', '0px', '193px', '331px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/menu_opciones.svg', '0px', '0px']
                        },
                        {
                            rect: ['120px', '41px', '40px', '26px', 'auto', 'auto'],
                            type: 'rect',
                            display: 'none',
                            id: 'btn_ocultar',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(215,20,20,0.00)']
                        },
                        {
                            type: 'rect',
                            id: 'btn_cc',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['13px', '198px', '151px', '45px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], ['-4'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            id: 'btn_actividad',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['29px', '286px', '167px', '45px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], ['-4'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            id: 'btn_creditos',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['25px', '245px', '161px', '39px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], ['-4'], ['28'], ['0.94047']],
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            id: 'btn_mapa',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['-19px', '110px', '254px', '45px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], ['-1'], [], ['0.6585']],
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            id: 'btn_bibliografia',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['-3px', '154px', '167px', '45px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], ['-1'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            id: 'btn_descargarpdf',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['26px', '69px', '151px', '45px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], ['-6'], ['7'], [1, 1, 1]],
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '193px', '331px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [
                        [
                            "eid650",
                            "display",
                            0,
                            0,
                            "linear",
                            "${menu_opciones}",
                            'none',
                            'block'
                        ],
                        [
                            "eid654",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_bibliografia}",
                            'none',
                            'block'
                        ],
                        [
                            "eid773",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_actividad}",
                            'none',
                            'block'
                        ],
                        [
                            "eid655",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_mapa}",
                            'none',
                            'block'
                        ],
                        [
                            "eid658",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_ocultar}",
                            'none',
                            'block'
                        ],
                        [
                            "eid652",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_descargarpdf}",
                            'none',
                            'block'
                        ],
                        [
                            "eid656",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_creditos}",
                            'none',
                            'block'
                        ],
                        [
                            "eid657",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_cc}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "opciones": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'btn_opciones',
                            rect: ['0px', '0px', '207px', '49px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/btn_opciones2.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '54px', '50px', 'auto', 'auto'],
                            transform: [[], [], ['25'], [1, 1, 1]],
                            id: 'btn_home',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'rect',
                            rect: ['49px', '0px', '155px', '49px', 'auto', 'auto'],
                            transform: [[], [], ['25'], [1, 1, 1]],
                            id: 'btn_desplegar_cintilla',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '207px', '49px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "circ_tiempo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '47px', '47px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [1, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(223,223,223,0.41)', [50, 50, 'true', 'farthest-corner', [['rgba(76,71,83,0.41)', 0], ['rgba(255,255,255,0.68)', 100]]]]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '47px', '47px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid1227",
                            "background-image",
                            0,
                            500,
                            "linear",
                            "${Ellipse}",
                            [50,50,true,'farthest-corner',[['rgba(76,71,83,0.41)',0],['rgba(255,255,255,0.68)',100]]],
                            [50,50,true,'farthest-corner',[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]
                        ]
                    ]
                }
            },
            "actividad": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'cortina_cc',
                            rect: ['0px', '0px', '1280px', '600px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cortina_actividad.svg', '0px', '0px']
                        },
                        {
                            rect: ['1218px', '159px', '53px', '60px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(44,90,103,0)']
                        },
                        {
                            rect: ['581px', '377px', '146px', '122px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(44,90,103,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-232466824");
