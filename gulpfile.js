/**
 * @author Luis Felipe Zapata <lacri@misena.edu.co>
 * @version 1.0.0.
 * @description
 */


//#region Declaración de constantes.

let gulp = require('gulp');
const gulpEach = require('gulp-each');
const gulpJsonMinify = require('gulp-json-minify');
const gulpHtmlMinify = require('gulp-htmlmin');
const gulpFile = require('gulp-file');
const gulpCopy = require('gulp-copy');
const gulpZip = require('gulp-zip');
const gulpConcat = require('gulp-concat');
const gulpRename = require('gulp-rename');
const gulpUglify = require('gulp-uglifyjs');
const gulpClean = require('gulp-clean');
const gulpPrompt = require('gulp-prompt');
const gulpReplace = require('gulp-replace');
const clear = require('clear');
const getmac = require('getmac');

//#endregion

//#region Declaración de variables iniciales.

/**
 * @type {String} [folderPublic=public] - Carpeta donde se almacenará el código 
 * de la multimedia lista para producción incluyendo el archivo ZIP con la
 * versión descargable de la multimedia.
 */
let folderPublic = 'public';

/**
 * @type {String} [folderDevelop=develop] - Carpeta donde se almacenará el código 
 * de la multimedia que se utiliza para producción.
 */
let folderDevelop = 'develop';

/**
 * @type {String} [folderJSON=json] - Carpeta donde se almacena los archivos
 * JSON de configuración de plantillas.
 */
let folderJSON = 'json';

/**
 * @type {String} [folderJ=js] - Carpeta donde se almacenara el codigo JS 
 * generado para integrar con los archivos de configuración y HTML.
 */
let folderJS = 'js';

/**
 * @type {String} [folderHTML=texts= - Carpeta donde se almacena los archivos 
 * HTML que realizan la carga del texto.
 */
let folderHTML = 'texts';

/**
 * @type {String} [nameFileConfig=config] - Nombre del archivo JS que almacena las
 * configuraciones y textos HTML que se usan en la multimedia.
 */
let nameFileConfig = 'config';

/**
 * @type {String} [nameFileMain=main] - Nombre del archivo JS que almacena
 * todos los JS minificados y ofuscados.
 */
let nameFileMain = 'main';

/**
 * @type {String} [nameFileDevelop=develop-NO-OPEN] - Nombre del archivo JS
 * que almacena todos los JS que son utilizados para la versión de desarrollo.
 */
let nameFileDevelop = 'develop-NO-OPEN';

/**
 * @type {String} [nameFileZIP=OVA.ZIP] - Nombre del archivo ZIP que contiene
 * la versión descargable de la multimedia.
 */
let nameFileZIP = 'OVA.zip';

/**
 * @type {String} [nameFileZIP=LMS.ZIP] - Nombre del archivo ZIP que contiene
 * la versión que se debe ubicar en el LMS o entrega.
 */
let nameFileZIPLMS = 'LMS.zip';

/**
 * @type {Object<Object>} listFileJSON - Almacena la ruta absoluta del archivo
 * JSON y como valor asigna su contenido.
 */
let listFileJSON = {};

/**
 * @type {Object<String>} listFileHTML - Almacena la ruta absoluta del archivo
 * HTML y asigna como srting el contenido del documento.
 */
let listFileHTML = {};

let address = null;


/**
 * @type {Array<>} filesCombine - Listado de archivos para combinar.
 */
let filesCombine = [
  `./edge_includes/jquery-2.0.3.min.js`,
  `./edge_includes/edge.4.0.1.min.js`,
  `./${folderJS}/soundList.js`,
  `./${folderDevelop}/${nameFileConfig}.js`,
  `./${folderJS}/libs/TweenMax.min.js`,
  `./${folderJS}/libs/CodeCraft.min.js`,
  `./${folderJS}/libs/**/*.js`,
  `./${folderJS}/src/**/Templates.min.js`,
  `./${folderJS}/src/**/*.js`,
  `./${folderJS}/*.js`,
  `index_edge.js`,
  `index_edgeActions.js`
];

//#endregion

//#region Funciones globales o de uso generico.

/**
 * @description
 * Convierte la ruta absoluta en relativa a la carpeta raíz del proyecto.
 * @param {String} path - Ruta absoluta del archivo.
 * @return {String} Ruta utilizada en el código desde la raíz del proyecto.
 */
function getPathFile(path) {
  return path.replace(__dirname, '').substr(1);
}

/**
 * @description
 * Similar a la funcion createContentFileConfigDownload pero asigna el valor false en a variable de 
 * versión descargable para activar la opción de ZIP descargable.````
 * @return {String} Cadena de caracteres con variables utilizadas para
 * indentificar el contenido de los archivos.
 */
function createContentFileConfig() {
  var contentFile = `
  var jsonFiles = ${JSON.stringify(listFileJSON).replace(/(\\\\)/g,'/')};
  var address = ${address};
  var htmlFiles = ${JSON.stringify(listFileHTML).replace(/(\\\\)/g,'/')};
  var versionDownload = false;
  `;
  return contentFile;
}

/**
 * @description
 * Consulta la dirección mac del equipo para realizar la validación de licencias.
 */
gulp.task('setAddress', done => {
  return new Promise(resolve => {
    getmac.getMac(function (err, macAddress) {
      if (err) throw err
      address = `'${macAddress.replace(/[:-]+/g,'').toLocaleLowerCase()}'`;
      resolve(done);
    });
  });
});

/**
 * @description
 * Busca todos los archivos JSON, lee el contenido de cada archivo y lo agrega al objeto 
 * listFileJSON convirtiendo el contenido del archivo en un objeto.
 */
gulp.task('readJson', gulp.series(gulp.parallel('setAddress'), function readJson() {
  return gulp
    .src(`./${folderJSON}/**/*.json`)
    // Minifica el contenido del archivo JSON
    .pipe(gulpJsonMinify())
    .pipe(gulpEach((content, file, callback) => {
      var nameFile = getPathFile(file.history[0]);
      // Si el archivo esta vacio no se agrega en la lista
      if (content.trim() !== '') {
        listFileJSON[nameFile] = JSON.parse(`${content}`);
      }
      callback(null, content);
    }));
}));

/**
 * @description
 * Realiza la creación del listado de los archivos HTML que son utilizados para la inserción del 
 * texto en la multimedia.
 */
gulp.task('readHtml', gulp.series(gulp.parallel('readJson'), function readHtml() {
  return gulp
    .src(`./${folderHTML}/**/*.html`)
    // Minifica el contenido del archivo HTMl
    .pipe(gulpHtmlMinify({
      collapseWhitespace: true
    }))
    .pipe(gulpEach((content, file, callback) => {
      var nameFile = getPathFile(file.history[0]);
      // Si el archivo esta vacio no se agrega en la lista
      if (content.trim() !== '') {
        listFileHTML[nameFile] = content;
      }
      callback(null, content);
    }));
}));

/**
 * @description
 * Crea el archivo de configuración en la carpeta donde se almacena el códgo JS.
 */
gulp.task('createConfig', gulp.series(gulp.parallel('readHtml'), function createConfig() {
  return gulp
    .src(`./${folderJS}/*.js`, {
      read: false
    })
    .pipe(gulpFile(`${nameFileConfig}.js`, createContentFileConfig()))
    .pipe(gulp.dest(`./${folderDevelop}`));
}));

//#endregion

//#region Entorno de desarollo

/**
 * @description
 * Modifica el archivo de Edge que realiza la precarga para cargar todos los archivos JS en un solo 
 * archivo, la configuración es realizada para desarrollo.
 */
gulp.task('modifyPreloadEdgeDevelop', () => {
  return gulp
    .src('./index_edgePreload.js')
    .pipe(gulpReplace(/(aLoader\s\=\s\[\n)((.)+\n)+/g, `aLoader = [\n{ load: './${folderDevelop}/${nameFileDevelop}.js'}];\n\n`))
    .pipe(gulp.dest(`./`));
});

/**
 * @description
 * Combina los archivos para generar el código principal de la code, incluye librerias y archivos 
 * de confirugración.
 */
gulp.task('combineMinifyJsDevelop', gulp.series(gulp.parallel('createConfig'), function combineMinifyJsDevelop() {
  return gulp
    .src(filesCombine)
    .pipe(gulpConcat(`${nameFileDevelop}.js`))
    .pipe(gulp.dest(`./${folderDevelop}`));
}));

/**
 * @description
 * Elimina la carpeta de desarrollo generada anteriomente.
 */
gulp.task('removeOldFilesDevelop', () => {
  return gulp
    .src([`./${folderDevelop}`], {
      read: false,
      allowEmpty: true
    })
    .pipe(gulpClean());
});

/**
 * @description
 * Al detectar cambios sobre archivos JSON, JS y HTML, realiza la publicación
 * de la multimedia y actualiza el servidor web recargando de forma automatica
 * el navegador.
 */
gulp.task('watchChange', () => {
  return gulp
    .watch([
      `./${folderJS}/**/*.js`,
      `./${folderJSON}/**/*.json`,
      `./${folderHTML}/**/*.html`
    ], gulp.parallel('combineMinifyJsDevelop'));
});

//#endregion

//#region Entorno de producción.

/**
 * @description
 * Convierte los objetos que almacena las rutas de los archivos JSON y HTML con su contenido en un 
 * String para ser almacenado en una variable. Esta función agrega la opción  que indica que es la 
 * versión descargable en la configuración del archivo.
 * @return {String} Cadena de caracteres con variables utilizadas para indentificar el contenido de 
 * los archivos.
 */
function createContentFileConfigDownload() {
  var contentFile = `
  var jsonFiles = ${JSON.stringify(listFileJSON).replace(/(\\\\)/g,'/')};
  var versionDownload = true;
  var htmlFiles = ${JSON.stringify(listFileHTML).replace(/(\\\\)/g,'/')};
  var address = ${address};
  `;
  return contentFile;
}

/**
 * @description
 * Elimina la carpeta anterior de publicación para evitar errores en la generación de la multimedia 
 * para producción o desarrollo.
 */
gulp.task('removeOldFilesProduction', () => {
  return gulp
    .src([`./${folderPublic}`], {
      read: false,
      allowEmpty: true
    })
    .pipe(gulpClean());
});

/**
 * @description
 * Modifica el archivo de Edge que realiza la precarga para cargar todos los archivos JS en un solo 
 * archivo con la configuración de producción.
 */
gulp.task('modifyPreloadEdge', () => {
  return gulp
    .src('./index_edgePreload.js')
    .pipe(gulpReplace(/(aLoader\s\=\s\[\n)((.)+\n)+/g, `aLoader = [\n{ load: '${folderJS}/${nameFileMain}.min.js'}];\n\n`))
    .pipe(gulp.dest(`./${folderPublic}`));
});

/**
 * @description
 * Realiza la copia de los archivos que no se pueden combinar y son necesarios para el 
 * funcionamiento de la multimedia en producción.
 */
gulp.task('copyPublic', () => {
  return gulp
    .src([
      'images/**/*.*',
      'css/**/*.*',
      'sounds/**/*.*',
      'ar/**/*.*',
      'download/**/*.*',
      'index.html'
    ])
    .pipe(gulpCopy(`./${folderPublic}`));
});

/**
 * @description
 * Crea la carpeta ZIP con el contenido de la multimedia y lo almacena en la carpeta de descargas.
 */
gulp.task('createZip', gulp.series(gulp.parallel('copyPublic'), function createZip() {
  return gulp
    .src(`./${folderPublic}/**/*.*`)
    .pipe(gulpZip(nameFileZIP))
    .pipe(gulp.dest(`./${folderPublic}/download`));
}));

/**
 * @description
 * Crea la carpeta ZIP para subir a plataforma o realizar entrega de public.
 */
gulp.task('createZipForLMS', () => {
  return gulp
    .src(`./${folderPublic}/**/*.*`)
    .pipe(gulpZip(nameFileZIPLMS))
    .pipe(gulp.dest(`./${folderPublic}`));
});

/**
 * @description
 * Crea el archivo de configuración en la carpeta donde se almacena el códgo JS.
 */
gulp.task('createConfigProduction', gulp.series(gulp.parallel('readHtml'), function createConfigProduction() {
  return gulp
    .src(`./${folderJS}/*.js`, {
      read: false
    })
    .pipe(gulpFile(`${nameFileConfig}.js`, createContentFileConfigDownload()))
    .pipe(gulp.dest(`./${folderDevelop}`));
}));

/**
 * @description
 * Combina todos los archivos pero modifica el archivo config con la opción que indica que es la 
 * versión descargable de la multimedia.
 */
gulp.task('combineMinifyJsProductionDownload', gulp.series(gulp.parallel('createConfigProduction'), function combineMinifyJsProductionDownload() {
  return gulp
    .src(filesCombine)
    .pipe(gulpConcat(`${nameFileDevelop}.js`))
    .pipe(gulp.dest(`./${folderDevelop}`))
    .pipe(gulpUglify(`./${folderPublic}/${folderJS}/${nameFileMain}.js`, {
      compress: true,
      mangle: true
    }))
    .pipe(gulpRename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(`./`));
}));

/**
 * @description
 * Combina todos los archivos para generar la versión de producción.
 */
gulp.task('combineMinifyJsProduction', gulp.series(gulp.parallel('createConfig'), function combineMinifyJsProduction() {
  return gulp
    .src(filesCombine)
    .pipe(gulpConcat(`${nameFileDevelop}.js`))
    .pipe(gulp.dest(`./${folderDevelop}`))
    .pipe(gulpUglify(`./${folderPublic}/${folderJS}/${nameFileMain}.js`, {
      compress: true,
      mangle: true
    }))
    .pipe(gulpRename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(`./`));
}));

//#endregion

//#region Carga del menú de opciones de tareas principales.

/**
 * @description
 * Ejecuta las tareas para el entorno de desarrollo de la multimedia, realiza el
 * llamado a las funciones y tareas requeridas.
 */
gulp.task('develop', gulp.series('removeOldFilesDevelop', 'removeOldFilesProduction', 'modifyPreloadEdgeDevelop', 'combineMinifyJsDevelop', 'watchChange'));

/**
 * @description
 * Ejecuta el entorno de producción de la multimedia, organiza los elementos
 * necesarios para realizar la entrega del paquete para montaje en la plataforma.
 */
gulp.task('production', gulp.series('removeOldFilesProduction', 'removeOldFilesDevelop', 'modifyPreloadEdge', 'combineMinifyJsProductionDownload', 'modifyPreloadEdge', 'createZip', 'combineMinifyJsProduction', 'copyPublic', 'removeOldFilesDevelop', 'createZipForLMS'));

/**
 * @description
 * Inicia la carga del menú definido por defecto con las funciones permitidas.
 */
gulp.task('default', () => {
  clear();
  return gulp
    .src('./package.json')
    .pipe(gulpPrompt.prompt({
      type: 'list',
      name: 'menu',
      message: 'Seleccione una acción:',
      choices: [
        'develop',
        'production',
        'cancelar'
      ],
      pageSize: '3'
    }, (res) => {
      gulp.series(res.menu)();
    }));
});

//#endregion
