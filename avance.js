// create a document and pipe to a blob
var doc = new PDFDocument();
var stream = doc.pipe(blobStream());
    

//HEADER
doc.fontSize(11)
   .text('CREDINVIERTE',0,20,{
       align: 'right',
       characterSpacing: 4
    })
   .text('Working Proyects Advance S.A. de C.V.', { align: 'right' })
   .text('www.credinvierte.com', { align: 'right' })
   .rect(0, 70, 612, 2)
   .fill("#000")
   .stroke()
   .restore();
//INFO GRAL 
doc.fontSize(11)
   .text('Email: villa@alchimia.mx',72,100, {align: 'left'})
   .text('Nivel: Prestamista',72,110, {align: 'left'})
   .text('Verificado: Si',72,120, {align: 'left'})
   .text('Referencia creada: 09/02/2018 03:41:08 am',72,100, {align: 'right'})
   .text('Última actualización: 19/02/2018 14:30:38 pm',72,110, {align: 'right'});
//CONFIG
const config = {
    marginLeft: 72,
    marginRight: 72,
    indent: 15,
}
//
//TABLE FUNCTION      
function table(title, texto, initialPoint, col) {
    titleWidth = doc.widthOfString(title);//tamaño del titulo
    contentHeight = doc.heightOfString(texto); //alto del texto
    
    if(col >= 2) {
        contentHeight = contentHeight/2    
    }
    
doc.rect(config.marginLeft + titleWidth + 7, initialPoint + 7, 612-72-72-titleWidth-10, 1)
   .stroke()
doc.rect(config.marginLeft, initialPoint + 20, 612-config.marginLeft-config.marginRight, contentHeight + 10) 
   .fill('#efefef')
   .stroke()
   .fill('#000')
   .moveDown()
   .text(title, config.marginLeft, initialPoint)
   .text(texto, config.marginLeft, initialPoint + 25, {indent: config.indent, columns: col, columnGap: 15, align: 'justify', height: contentHeight});
   y = doc.y;
doc.rect(config.marginLeft, y + 15, 612-config.marginLeft-config.marginRight, 1) 
   .stroke();
}
//END FUNCTION

      texto = 'Monto solicitado: 500\nPlazo requerido: 24 meses\nObjetivo del crédito solicitado: Comprar un coche\nPlazo para ser fondeado: 6 meses';
      table('DATOS DEL CLIENTE', texto, 160)
      endTable = doc.y; //aquí termina la tabla
      //doc.text(endTable);
      endTable += 50; //donde terminó la tabla más 50 puntos
      texto = 'Nombre: María Juana Inéz\nApellido Paterno: Zambrano\nApellido Materno: García\nFecha de nacimiento: 29/10/1994\nRFC: QUBJ941029HSP\nNacionalidad: Mexicana';
      table('PERSONAL', texto, endTable)
      endTable = doc.y;
      endTable += 50;
      
      texto = 'Teléfono particular: 017894561236\nTeléfono celular: 7894561230\nCorreo electrónico 1: juanito@hotmail.com\nCorreo electrónico 2: perez@hotmail.com\nCalle y número: San José 1050\nColonia: PRI Chacón\nCiudad: Saltillo\nCódigo postal: 42088\nEstado: Sonora';
      table('CONTACTO', texto, endTable, 2)
      endTable = doc.y;
      endTable += 50;

// end and display the document in the iframe to the right
doc.end();
stream.on('finish', function() {
  iframe.src = stream.toBlobURL('application/pdf');
});
// create a document and pipe to a blob
var doc = new PDFDocument();
var stream = doc.pipe(blobStream());
    

//HEADER
doc.fontSize(11)
   .text('CREDINVIERTE',0,20,{
       align: 'right',
       characterSpacing: 4
    })
   .text('Working Proyects Advance S.A. de C.V.', { align: 'right' })
   .text('www.credinvierte.com', { align: 'right' })
   .rect(0, 70, 612, 2)
   .fill("#000")
   .stroke()
   .restore();
//INFO GRAL 
doc.fontSize(11)
   .text('Email: villa@alchimia.mx',72,100, {align: 'left'})
   .text('Nivel: Prestamista',72,110, {align: 'left'})
   .text('Verificado: Si',72,120, {align: 'left'})
   .text('Referencia creada: 09/02/2018 03:41:08 am',72,100, {align: 'right'})
   .text('Última actualización: 19/02/2018 14:30:38 pm',72,110, {align: 'right'});
//CONFIG
const config = {
    marginLeft: 72,
    marginRight: 72,
    indent: 15,
}
//
//TABLE FUNCTION      
function table(title, texto, initialPoint, col) {
    titleWidth = doc.widthOfString(title);//tamaño del titulo
    contentHeight = doc.heightOfString(texto); //alto del texto
    
    if(col >= 2) {
        contentHeight = contentHeight/2    
    }
    
doc.rect(config.marginLeft + titleWidth + 7, initialPoint + 7, 612-72-72-titleWidth-10, 1)
   .stroke()
doc.rect(config.marginLeft, initialPoint + 20, 612-config.marginLeft-config.marginRight, contentHeight + 10) 
   .fill('#efefef')
   .stroke()
   .fill('#000')
   .moveDown()
   .text(title, config.marginLeft, initialPoint)
   .text(texto, config.marginLeft, initialPoint + 25, {indent: config.indent, columns: col, columnGap: 15, align: 'justify', height: contentHeight});
   y = doc.y;
doc.rect(config.marginLeft, y + 15, 612-config.marginLeft-config.marginRight, 1) 
   .stroke();
}
//END FUNCTION

      texto = 'Monto solicitado: 500\nPlazo requerido: 24 meses\nObjetivo del crédito solicitado: Comprar un coche\nPlazo para ser fondeado: 6 meses';
      table('DATOS DEL CLIENTE', texto, 160)
      endTable = doc.y; //aquí termina la tabla
      //doc.text(endTable);
      endTable += 50; //donde terminó la tabla más 50 puntos
      texto = 'Nombre: María Juana Inéz\nApellido Paterno: Zambrano\nApellido Materno: García\nFecha de nacimiento: 29/10/1994\nRFC: QUBJ941029HSP\nNacionalidad: Mexicana';
      table('PERSONAL', texto, endTable)
      endTable = doc.y;
      endTable += 50;
      
      texto = 'Teléfono particular: 017894561236\nTeléfono celular: 7894561230\nCorreo electrónico 1: juanito@hotmail.com\nCorreo electrónico 2: perez@hotmail.com\nCalle y número: San José 1050\nColonia: PRI Chacón\nCiudad: Saltillo\nCódigo postal: 42088\nEstado: Sonora';
      table('CONTACTO', texto, endTable, 2)
      endTable = doc.y;
      endTable += 50;

// end and display the document in the iframe to the right
doc.end();
stream.on('finish', function() {
  iframe.src = stream.toBlobURL('application/pdf');
});

