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
function table(title, texto, col) {
    let titleWidth = doc.widthOfString(title);//tamaño del titulo
    let contentHeight = doc.heightOfString(texto); //alto del texto
    
    if(col >= 2) {
        contentHeight = contentHeight/2.9    
    }
    
doc.moveDown()    
   .rect(config.marginLeft + titleWidth + 7, doc.y + 7, 612-72-72-titleWidth-10, 1)
   .stroke()
   .text(title)
   .fill('#000')
   .moveDown(0.5);
doc.rect(config.marginLeft, doc.y, 612-config.marginLeft-config.marginRight, contentHeight + 5) 
   .fill('#efefef')
   .stroke()
   .moveDown(0.5)
   .fill('#000')
   .text(texto, config.marginLeft, doc.y, {indent: config.indent, columns: col, columnGap: 15, align: 'justify', height: contentHeight})
   .moveDown(0.5);
doc.rect(config.marginLeft, doc.y, 612-config.marginLeft-config.marginRight, 1) 
   .stroke();
}
//END FUNCTION

let texto = 'Monto solicitado: 500\nPlazo requerido: 24 meses\nObjetivo del crédito solicitado: Comprar un coche\nPlazo para ser fondeado: 6 meses';
    table('DATOS DEL CLIENTE', texto);

    texto = 'Nombre: María Juana Inéz\nApellido Paterno: Zambrano\nApellido Materno: García\nFecha de nacimiento: 29/10/1994\nRFC: QUBJ941029HSP\nNacionalidad: Mexicana';
    table('PERSONAL', texto);
      
    texto = 'Teléfono particular: 017894561236\nTeléfono celular: 7894561230\nCorreo electrónico 1: juanito@hotmail.com\nCorreo electrónico 2: perez@hotmail.com\nCalle y número: San José 1050\nColonia: PRI Chacón\nCiudad: Saltillo\nCódigo postal: 42088\nEstado: Sonora';
    table('CONTACTO', texto, 2);

// end and display the document in the iframe to the right
doc.end();
stream.on('finish', function() {
  iframe.src = stream.toBlobURL('application/pdf');
});

