// create a document and pipe to a blob
var doc = new PDFDocument();
var stream = doc.pipe(blobStream());

//CONFIG
const config = {
    marginLeft: 72,
    marginRight: 72,
    indent: 15,
    titleSize: 12,
    textSize: 11,
}
//
//HEADER
doc.fontSize(config.textSize)
const companyName = 'CREDINVIERTE';
const companyInfo = 'Working Proyects Advance S.A. de C.V.\nwww.credinvierte.com';
doc.text(companyName ,0,20,{align: 'right', characterSpacing: 4, })
   .text(companyInfo,{align: 'right'})
   .moveDown(0.5)
   .rect(0, doc.y, 612, 2)
   .fill("#000")
   .stroke()
   .restore()
   .moveDown(2);
//INFO GRAL
const userInfo = 'Email: villa@alchimia.mx\nNivel: Prestamista\nVerificado: Si\nReferencia creada: 09/02/2018 03:41:08 am\nÚltima actualización: 19/02/2018 14:30:38 pm\n ';
doc.fontSize(11)
   .text(userInfo,config.marginLeft,doc.y, {columns: 2, columnGap: 15, align: 'justify', height: doc.heightOfString(userInfo)/2})

//TABLE FUNCTION
function table(title, texto, col) {
    let titleWidth = doc.widthOfString(title);//tamaño del titulo
    let contentHeight = doc.heightOfString(texto); //alto del texto

    if(col >= 2) {
        contentHeight = contentHeight/2
    }

doc.moveDown()
   .rect(config.marginLeft + titleWidth + 7, doc.y + 7, 612-72-72-titleWidth-10, 1)
   .stroke()
   .text(title)
   .fill('#000')
   .moveDown(0.5);
doc.rect(config.marginLeft, doc.y, 612-config.marginLeft-config.marginRight, contentHeight + 10)
   .fill('#efefef')
   .stroke()
   .moveDown(0.5)
   .fill('#000')
   .text(texto, config.marginLeft, doc.y, {indent: config.indent, columns: col, columnGap: 15, align: 'justify', height: contentHeight})
   .moveDown(1);
doc.rect(config.marginLeft, doc.y, 612-config.marginLeft-config.marginRight, 1)
   .stroke();
}
//END FUNCTION
let texto = 'Monto solicitado: $5000 Pesos\nPlazo requerido: 24 meses\nObjetivo del crédito solicitado: Comprar un coche\nPlazo para ser fondeado: 30 días';
    table('INFORMACIÓN DEL CRÉDITO SOLICITADO', texto);

//NEW PAGE
    doc.addPage()
//HEADER
doc.text(companyName ,0,20,{align: 'right', characterSpacing: 4, })
   .text(companyInfo,{align: 'right'})
   .moveDown(0.5)
   .rect(0, doc.y, 612, 2)
   .fill("#000")
   .stroke()
   .restore()
   .moveDown(2)
   .text(userInfo,config.marginLeft,doc.y, {columns: 2, columnGap: 15, align: 'justify', height: doc.heightOfString(userInfo)/2})
   .moveDown(1)
//END HEADER
doc.text('INFORMACIÓN PERSONAL', {align: 'center'});
    texto = 'Nombre: María Juana Inéz\nApellido Paterno: Zambrano\nApellido Materno: García\nFecha de nacimiento: 29/10/1994\nSexo: Femenino\nRFC: QUBJ941029HSP\nNacionalidad: Mexicana\nEstado Civil: Soltero\nCURP: QUBJ941029HSPJLV05\n ';
    table('PERSONAL', texto, 2);

    texto = 'Teléfono particular: 017894561230\nTeléfono celular: 0447712345698\nCorreo electrónico: juanito@hotmail.com\nCorreo electrónico 2: email@hotmail.com\nCalle y número: San José #105\nColonia: PRI Chacón\nCiudad: Pachuca de Soto\nCódigo postal: 42280\nEstado: HIDALGO\n ';
    table('CONTACTO', texto, 2);

    texto = 'Actividad: Engañosa\nEscolaridad: Primaria\nSituación de vivienda: propia\nTiempo de residir: 10 años';
    table('DEMOGRÁFICO', texto, 2);

    texto = 'Conyuge: Juanito Pérez\nNúmero de dependientes: 21, 10, 12';
    table('DEMOGRÁFICO', texto, 2);
//END PAGE
//NEW PAGE
    doc.addPage()
//HEADER
doc.text(companyName ,0,20,{align: 'right', characterSpacing: 4, })
   .text(companyInfo,{align: 'right'})
   .moveDown(0.5)
   .rect(0, doc.y, 612, 2)
   .fill("#000")
   .stroke()
   .restore()
   .moveDown(2)
   .text(userInfo,config.marginLeft,doc.y, {columns: 2, columnGap: 15, align: 'justify', height: doc.heightOfString(userInfo)/2})
   .moveDown(1)
//END HEADER
doc.text('REFERENCIAS ', {align: 'center'});

    texto = 'Nombre: Chanita Flores\nCalle y número: Jacarandas #615\nColonia: El cerrito\nEmail 1: chanita@hotmail.com\nCódigo Postal: 48215\nEstado: HIDALGO\nTeléfono particular: 017894563215\nCiudad: Pachuca de Soto';
    table('FAMILIAR', texto, 2);

    texto = 'Nombre: Chanita Flores\nCalle y número: Jacarandas #615\nColonia: El cerrito\nEmail 1: chanita@hotmail.com\nCódigo Postal: 48215\nEstado: HIDALGO\nTeléfono particular: 017894563215\nCiudad: Pachuca de Soto';
    table('NO FAMILIAR', texto, 2);

    texto = 'Banco: bancomer\nNúmero de tarjeta: 1236547896541236\nFecha: 23/05/2018\nTipo: débito\nPago mensual: 3200\n ';
    table('DÉBITO', texto, 2);

    texto = 'Banco: Santander\nNúmero de tarjeta: 1478523698745632\nFecha: 23/05/2018\nTipo: Crédito\nPago mensual: 200\n ';
    table('CRÉDITO', texto, 2);
//END PAGE
//NEW PAGE
    doc.addPage()
//HEADER
doc.text(companyName ,0,20,{align: 'right', characterSpacing: 4, })
   .text(companyInfo,{align: 'right'})
   .moveDown(0.5)
   .rect(0, doc.y, 612, 2)
   .fill("#000")
   .stroke()
   .restore()
   .moveDown(2)
   .text(userInfo,config.marginLeft,doc.y, {columns: 2, columnGap: 15, align: 'justify', height: doc.heightOfString(userInfo)/2})
   .moveDown(1)
//END HEADER
doc.text('REFERENCIAS (PRESTAMISTA) ', {align: 'center'});

    texto = 'Nombre: Chanita Flores\nCalle y número: Jacarandas #615\nColonia: El cerrito\nEmail 1: chanita@hotmail.com\nCódigo Postal: 48215\nEstado: HIDALGO\nTeléfono particular: 017894563215\nCiudad: Pachuca de Soto';
    table('FAMILIAR', texto, 2);

    texto = 'Nombre: Chanita Flores\nCalle y número: Jacarandas #615\nColonia: El cerrito\nEmail 1: chanita@hotmail.com\nCódigo Postal: 48215\nEstado: HIDALGO\nTeléfono particular: 017894563215\nCiudad: Pachuca de Soto';
    table('NO FAMILIAR', texto, 2);

    texto = 'Banco: bancomer\nNúmero de tarjeta: 1236547896541236\nTipo: débito\n ';
    table('DÉBITO', texto, 2);
//END PAGE
// end and display the document in the iframe to the right
doc.end();
stream.on('finish', function() {
  iframe.src = stream.toBlobURL('application/pdf');
});
