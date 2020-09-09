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
                scaleToFit: "width",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'fondo',
                            type: 'image',
                            rect: ['4px', '0px', '1280px', '600px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fondo.svg",'0px','0px'],
                            transform: [[],[],[],['1.39639','1.39639']]
                        },
                        {
                            id: 'titulo',
                            type: 'image',
                            rect: ['-501px', '46px', '501px', '112px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"titulo.svg",'0px','0px']
                        },
                        {
                            id: 'logos',
                            display: 'none',
                            type: 'image',
                            rect: ['1313px', '39px', '187px', '125px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logos.svg",'0px','0px']
                        },
                        {
                            id: 'bt_instrucciones',
                            display: 'none',
                            type: 'image',
                            rect: ['1316px', '368px', '49px', '207px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"bt_instrucciones.svg",'0px','0px']
                        },
                        {
                            id: 'fondo_preguntas',
                            type: 'image',
                            rect: ['157px', '193px', '969px', '330px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"fondo_preguntas.svg",'0px','0px']
                        },
                        {
                            id: 'preg_1',
                            display: 'none',
                            type: 'image',
                            rect: ['215', '261', '273px', '159px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"preg_1.svg",'0px','0px']
                        },
                        {
                            id: 'preg_2',
                            display: 'none',
                            type: 'image',
                            rect: ['198px', '216px', '270px', '278px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"preg_2.svg",'0px','0px']
                        },
                        {
                            id: 'preg_3',
                            display: 'none',
                            type: 'image',
                            rect: ['198', '233px', '273px', '261px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"preg_3.svg",'0px','0px']
                        },
                        {
                            id: 'preg_4',
                            display: 'none',
                            type: 'image',
                            rect: ['198px', '251px', '272px', '200px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"preg_4.svg",'0px','0px']
                        },
                        {
                            id: 'preg_5',
                            display: 'none',
                            type: 'image',
                            rect: ['198px', '265px', '269px', '180px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"preg_5.svg",'0px','0px']
                        },
                        {
                            id: 'resp',
                            symbolName: 'resp',
                            display: 'none',
                            type: 'rect',
                            rect: ['640', '270', '453', '303', 'auto', 'auto']
                        },
                        {
                            id: 'si',
                            type: 'image',
                            rect: ['1103px', '210px', '107px', '60px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"si.svg",'0px','0px']
                        },
                        {
                            id: 'si_sobre',
                            display: 'none',
                            type: 'image',
                            rect: ['1103', '210', '107px', '60px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"si_sobre.svg",'0px','0px']
                        },
                        {
                            id: 'contador',
                            type: 'image',
                            rect: ['176px', '533px', '325px', '57px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"contador.svg",'0px','0px']
                        },
                        {
                            id: 'bien_1',
                            display: 'none',
                            type: 'image',
                            tag: 'img',
                            rect: ['176px', '533px', '57px', '57px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bien_1.svg",'0px','0px']
                        },
                        {
                            id: 'bien_2',
                            display: 'none',
                            type: 'image',
                            tag: 'img',
                            rect: ['242px', '533', '57px', '57px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bien_2.svg",'0px','0px']
                        },
                        {
                            id: 'bien_3',
                            display: 'none',
                            type: 'image',
                            tag: 'img',
                            rect: ['310px', '533px', '57px', '57px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bien_3.svg",'0px','0px']
                        },
                        {
                            id: 'bien_4',
                            display: 'none',
                            type: 'image',
                            tag: 'img',
                            rect: ['377', '533', '57px', '57px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bien_4.svg",'0px','0px']
                        },
                        {
                            id: 'bien_5',
                            display: 'none',
                            type: 'image',
                            tag: 'img',
                            rect: ['445px', '532px', '57px', '57px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bien_5.svg",'0px','0px']
                        },
                        {
                            id: 'instrucciones2',
                            symbolName: 'instrucciones',
                            display: 'none',
                            type: 'rect',
                            rect: ['812', '368', '388', '165', 'auto', 'auto']
                        },
                        {
                            id: 'btn_si',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['1103px', '210px', '136px', '60px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'fail',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"fail.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'success',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"success.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'aplauso_largo',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"aplauso_largo.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'abucheo',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"abucheo.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'mal',
                            symbolName: 'mal',
                            display: 'none',
                            type: 'rect',
                            rect: ['4', '0', '1280', '600', 'auto', 'auto']
                        },
                        {
                            id: 'bien',
                            symbolName: 'bien',
                            display: 'none',
                            type: 'rect',
                            rect: ['4', '0', '1280', '600', 'auto', 'auto']
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
                    duration: 8747,
                    autoPlay: true,
                    labels: {
                        "act": 2500,
                        "preg1": 3500,
                        "preg2": 4139,
                        "preg3": 4750,
                        "preg4": 5365,
                        "preg5": 5933,
                        "final": 6730
                    },
                    data: [
                        [
                            "eid75",
                            "display",
                            0,
                            0,
                            "linear",
                            "${instrucciones2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid68",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bien_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid73",
                            "display",
                            5438,
                            0,
                            "linear",
                            "${bien_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid64",
                            "display",
                            3879,
                            0,
                            "linear",
                            "${btn_si}",
                            'none',
                            'block'
                        ],
                        [
                            "eid66",
                            "left",
                            0,
                            0,
                            "linear",
                            "${fondo}",
                            '4px',
                            '4px'
                        ],
                        [
                            "eid20",
                            "display",
                            0,
                            0,
                            "linear",
                            "${preg_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid22",
                            "display",
                            0,
                            0,
                            "linear",
                            "${preg_5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid60",
                            "display",
                            3678,
                            0,
                            "linear",
                            "${resp}",
                            'none',
                            'block'
                        ],
                        [
                            "eid69",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bien_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid74",
                            "display",
                            5975,
                            0,
                            "linear",
                            "${bien_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid18",
                            "display",
                            0,
                            0,
                            "linear",
                            "${preg_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10",
                            "left",
                            1500,
                            500,
                            "linear",
                            "${logos}",
                            '1313px',
                            '1093px'
                        ],
                        [
                            "eid24",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${logos}",
                            'none',
                            'block'
                        ],
                        [
                            "eid8",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${titulo}",
                            '-501px',
                            '0px'
                        ],
                        [
                            "eid4",
                            "scaleY",
                            0,
                            1000,
                            "linear",
                            "${fondo}",
                            '1.39639',
                            '1'
                        ],
                        [
                            "eid14",
                            "left",
                            2000,
                            500,
                            "linear",
                            "${bt_instrucciones}",
                            '1316px',
                            '1200px'
                        ],
                        [
                            "eid83",
                            "display",
                            0,
                            0,
                            "linear",
                            "${mal}",
                            'none',
                            'none'
                        ],
                        [
                            "eid67",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bien_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid81",
                            "display",
                            4803,
                            0,
                            "linear",
                            "${bien_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid63",
                            "display",
                            0,
                            0,
                            "linear",
                            "${si_sobre}",
                            'none',
                            'none'
                        ],
                        [
                            "eid19",
                            "display",
                            0,
                            0,
                            "linear",
                            "${preg_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid65",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bien_1}",
                            'none',
                            'none'
                        ],
                        [
                            "eid71",
                            "display",
                            4177,
                            0,
                            "linear",
                            "${bien_1}",
                            'none',
                            'block'
                        ],
                        [
                            "eid82",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bien}",
                            'none',
                            'none'
                        ],
                        [
                            "eid12",
                            "top",
                            1500,
                            500,
                            "linear",
                            "${logos}",
                            '39px',
                            '33px'
                        ],
                        [
                            "eid2",
                            "scaleX",
                            0,
                            1000,
                            "linear",
                            "${fondo}",
                            '1.39639',
                            '1'
                        ],
                        [
                            "eid70",
                            "display",
                            0,
                            0,
                            "linear",
                            "${bien_5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid86",
                            "display",
                            6784,
                            0,
                            "linear",
                            "${bien_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17",
                            "opacity",
                            2500,
                            1000,
                            "linear",
                            "${fondo_preguntas}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21",
                            "display",
                            0,
                            0,
                            "linear",
                            "${preg_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid23",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${bt_instrucciones}",
                            'none',
                            'block'
                        ],
                            [ "eid58", "trigger", 3678, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${resp}', [0] ] ]
                    ]
                }
            },
            "instrucciones": {
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
                            id: 'instrucciones',
                            rect: ['0px', '0px', '388px', '165px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/instrucciones.svg', '0px', '0px']
                        },
                        {
                            rect: ['357px', '18px', '22px', '21px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'Ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '388px', '165px']
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
            "resp": {
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
                            display: 'none',
                            rect: ['0px', '270px', '33px', '33px', 'auto', 'auto'],
                            id: 'flecha_izquierda',
                            fill: ['rgba(0,0,0,0)', 'images/flecha_izquierda.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['420px', '270px', '33px', '33px', 'auto', 'auto'],
                            id: 'flecha_derecha',
                            fill: ['rgba(0,0,0,0)', 'images/flecha_derecha.svg', '0px', '0px']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'btn_derecha',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['413px', '270px', '40px', '33px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'btn_derechaCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['413px', '270px', '40px', '33px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'btn_derechaCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['413px', '270px', '40px', '33px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'btn_derechaCopy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['413px', '270px', '40px', '33px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'btn_izquierda',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['-7px', '270px', '40px', '33px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'btn_izquierdaCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['-7px', '270px', '40px', '33px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'btn_izquierdaCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['-7px', '270px', '40px', '33px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'btn_izquierdaCopy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['-7px', '270px', '40px', '33px', 'auto', 'auto'],
                            display: 'none',
                            fill: ['rgba(192,192,192,0)']
                        },
                        {
                            type: 'image',
                            rect: ['24px', '0px', '408px', '180px', 'auto', 'auto'],
                            id: 'resp_1',
                            opacity: '0',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/resp_1.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['27px', '23px', '401px', '118px', 'auto', 'auto'],
                            id: 'resp_2',
                            fill: ['rgba(0,0,0,0)', 'images/resp_2.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['27', '-42', '411px', '261px', 'auto', 'auto'],
                            id: 'resp_3',
                            fill: ['rgba(0,0,0,0)', 'images/resp_3.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['16px', '-31px', '399px', '241px', 'auto', 'auto'],
                            id: 'resp_4',
                            fill: ['rgba(0,0,0,0)', 'images/resp_4.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['30px', '9px', '404px', '159px', 'auto', 'auto'],
                            id: 'resp_5',
                            fill: ['rgba(0,0,0,0)', 'images/resp_5.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '453px', '303px']
                        }
                    }
                },
                timeline: {
                    duration: 5069,
                    autoPlay: false,
                    labels: {
                        "resp1": 0,
                        "resp2": 1000,
                        "resp3": 2000,
                        "resp4": 3005,
                        "resp5": 4000
                    },
                    data: [
                        [
                            "eid27",
                            "opacity",
                            997,
                            930,
                            "linear",
                            "${resp_2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid31",
                            "opacity",
                            4000,
                            930,
                            "linear",
                            "${resp_5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid40",
                            "display",
                            997,
                            0,
                            "linear",
                            "${flecha_izquierda}",
                            'none',
                            'block'
                        ],
                        [
                            "eid41",
                            "display",
                            750,
                            0,
                            "linear",
                            "${btn_derecha}",
                            'none',
                            'block'
                        ],
                        [
                            "eid42",
                            "display",
                            997,
                            0,
                            "linear",
                            "${btn_derecha}",
                            'block',
                            'none'
                        ],
                        [
                            "eid36",
                            "display",
                            997,
                            0,
                            "linear",
                            "${resp_1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid52",
                            "display",
                            2758,
                            0,
                            "linear",
                            "${btn_izquierdaCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid53",
                            "display",
                            3005,
                            0,
                            "linear",
                            "${btn_izquierdaCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid33",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${resp_3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid38",
                            "display",
                            3005,
                            0,
                            "linear",
                            "${resp_3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid49",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${btn_izquierda}",
                            'none',
                            'block'
                        ],
                        [
                            "eid50",
                            "display",
                            1997,
                            0,
                            "linear",
                            "${btn_izquierda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid47",
                            "display",
                            3750,
                            0,
                            "linear",
                            "${btn_derechaCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid48",
                            "display",
                            3997,
                            0,
                            "linear",
                            "${btn_derechaCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid28",
                            "opacity",
                            2000,
                            930,
                            "linear",
                            "${resp_3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid59",
                            "display",
                            3997,
                            0,
                            "linear",
                            "${flecha_derecha}",
                            'block',
                            'none'
                        ],
                        [
                            "eid32",
                            "display",
                            997,
                            0,
                            "linear",
                            "${resp_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid37",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${resp_2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid30",
                            "opacity",
                            3005,
                            930,
                            "linear",
                            "${resp_4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid34",
                            "display",
                            3005,
                            0,
                            "linear",
                            "${resp_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid39",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${resp_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid56",
                            "display",
                            4822,
                            0,
                            "linear",
                            "${btn_izquierdaCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid57",
                            "display",
                            5069,
                            0,
                            "linear",
                            "${btn_izquierdaCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid43",
                            "display",
                            1803,
                            0,
                            "linear",
                            "${btn_derechaCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid44",
                            "display",
                            2050,
                            0,
                            "linear",
                            "${btn_derechaCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid26",
                            "opacity",
                            0,
                            930,
                            "linear",
                            "${resp_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid45",
                            "display",
                            2750,
                            0,
                            "linear",
                            "${btn_derechaCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid46",
                            "display",
                            2997,
                            0,
                            "linear",
                            "${btn_derechaCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid35",
                            "display",
                            4000,
                            0,
                            "linear",
                            "${resp_5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid54",
                            "display",
                            3804,
                            0,
                            "linear",
                            "${btn_izquierdaCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid55",
                            "display",
                            4051,
                            0,
                            "linear",
                            "${btn_izquierdaCopy2}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "bien": {
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
                            id: 'RectangleCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.31)']
                        },
                        {
                            rect: ['414px', '41px', '452px', '519px', 'auto', 'auto'],
                            id: 'aviso_bien',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/aviso_bien.svg', '0px', '0px']
                        },
                        {
                            rect: ['499px', '288px', '169px', '53px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '600px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid85",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${aviso_bien}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "mal": {
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
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,0.31)']
                        },
                        {
                            type: 'image',
                            id: 'aviso_mal',
                            rect: ['414px', '81px', '452px', '519px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/aviso_mal.svg', '0px', '0px']
                        },
                        {
                            rect: ['497px', '324px', '169px', '53px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
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
})("EDGE-2178516587");
