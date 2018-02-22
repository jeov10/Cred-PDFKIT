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
const userInfo = 'Nombre: Juanito Pérez\nEmail: villa@alchimia.mx\nNivel: Prestamista\nEstatus: Activo\nReferencia creada: 09/02/2018 03:41:08 am\nÚltima actualización: 19/02/2018 14:30:38 pm\n ';
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
   .text(title, config.marginLeft)
   .fill('#000')
   .moveDown(0.5);
doc.rect(config.marginLeft, doc.y, 612-config.marginLeft-config.marginRight, contentHeight + 10)
   .fill('#efefef')
   .stroke()
   .moveDown(0.5)
   .fill('#000')
   .text(texto, config.marginLeft, doc.y, {indent: config.indent, columns: col, columnGap: 15, align: 'justify', height: contentHeight, lineGap: 5})
   .moveDown(1);
//doc.rect(config.marginLeft, doc.y, 612-config.marginLeft-config.marginRight, 1)
   //.stroke();
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
   .moveDown(2);
//END HEADER
    texto = '¿Cuál es el objeto de invertir en esta plataforma?: Incrementar mi inversión\n¿Cuál es el monto máximo que espera invertir? $50,000 pesos\n¿Es propietario de los recursos que invertirá?: NO\nEn caso de no ser el propietario real de los recursos indique de quien provienen los recursos y cuál es la relación con el propietario de dichos recursos: De los narcos';
    table('PERFIL DE INVERSIÓN', texto, 1);
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
   .moveDown(2);
//END HEADER
doc.fontSize(config.titleSize)
doc.text('INFORMACIÓN PERSONAL', {align: 'center'})
doc.fontSize(config.textSize)
   .moveDown();
    texto = 'Nombre: María Juana Inéz\nApellido Paterno: Zambrano\nApellido Materno: García\nFecha de nacimiento: 29/10/1994\nSexo: Femenino\nRFC: QUBJ941029HSP\nNacionalidad: Mexicana\nEstado Civil: Soltero\nCURP: QUBJ941029HSPJLV05\n ';
    table('PERSONAL', texto, 2);

    texto = 'Teléfono particular: 017894561230\nTeléfono celular: 0447712345698\nCorreo electrónico: juanito@hotmail.com\nCorreo electrónico 2: email@hotmail.com\nCalle y número: San José #105\nColonia: PRI Chacón\nCiudad: Pachuca de Soto\nCódigo postal: 42280\nEstado: HIDALGO\n ';
    table('CONTACTO', texto, 2);

    texto = 'Actividad: Engañosa\nEscolaridad: Primaria\nSituación de vivienda: propia\nTiempo de residir: 10 años';
    table('DEMOGRÁFICO', texto, 2);

    texto = 'Conyuge: Juanito Pérez\nNúmero de dependientes: 21, 10, 12';
    table('OTROS', texto, 2);
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
   .moveDown(2);
//END HEADER
doc.fontSize(config.titleSize)
doc.text('REFERENCIAS ', {align: 'center'});
doc.fontSize(config.textSize)

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
//END HEADER
doc.fontSize(config.titleSize)
doc.text('REFERENCIAS (PRESTAMISTA) ', {align: 'center'});
doc.fontSize(config.textSize)
    texto = 'Nombre: Chanita Flores\nCalle y número: Jacarandas #615\nColonia: El cerrito\nEmail 1: chanita@hotmail.com\nCódigo Postal: 48215\nEstado: HIDALGO\nTeléfono particular: 017894563215\nCiudad: Pachuca de Soto';
    table('FAMILIAR', texto, 2);

    texto = 'Nombre: Chanita Flores\nCalle y número: Jacarandas #615\nColonia: El cerrito\nEmail 1: chanita@hotmail.com\nCódigo Postal: 48215\nEstado: HIDALGO\nTeléfono particular: 017894563215\nCiudad: Pachuca de Soto';
    table('NO FAMILIAR', texto, 2);

    texto = 'Banco: bancomer\nNúmero de cuenta: 1236547896541236\nTipo: débito\n ';
    table('DÉBITO', texto, 2);
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
   .moveDown(2);
//END HEADER
doc.fontSize(config.titleSize)
doc.text('TRABAJO Y FUENTE DE INGRESO', {align: 'center'});
doc.fontSize(config.textSize)

    texto = 'Nombre: Juanelo\nActividad: Lorem\nTipo de contrato: Sueldo\nNombre del jefe: El maistro\nIngreso mensual: $12,000 pesos\nTeléfono particular: 7894562135\nTiempo trabajando: 1 Año 2 Meses\nPosición: Diseño\nOtro ingreso: 2300 pesos\nCalle y número: Santa Matilde #203\nColonia: Carboneras\nEstado: CHIHUACHUA\nCódigo postal: 48576\nCiudad: Somewhere';
    table('EMPLEADO', texto, 2);

    texto = 'Nombre: MILKYMICH\nRFC: QWERTY85\nActividad: Lorem\nTeléfono : 7894562135\nPágina web: www.algo.com.mx\nTiempo trabajando: 3 Año 7 Meses\nPosición: Diseño\nCalle y número: Santa Matilde #203\nColonia: Carboneras\nEstado: CHIHUACHUA\nCódigo postal: 48576\nCiudad: Somewhere';
    table('NEGOCIO PROPIO', texto, 2);
doc.moveDown(1)
   .fontSize(config.titleSize)
   .text('INFORMACIÓN FINANCIERA', {align: 'center'});
doc.fontSize(config.textSize)
    texto = 'Ingreso mensual: $10,000\nVales de despensa: 1\nBonos: 1\nDiversión o entretenimiento: 1\nDeducciones: 1\nPagos de renta o hipoteca: 1\nPagos de seguros: 1\nGastos básicos de vivienda: 1\nPago de auto: 4\nPagos de colegiatura: 1 \nGastos de gasolina o transporte: 1\nPagos de créditos: 1\nOtros gastos: 1\nComida y despensa: 1';
    table('EMPLEADO', texto, 2);
    texto = 'Ingreso mensual: $10,000\nCostos fijos: $5000\nCostos variables: $2000\nUtilidad antes de impuestos: $15,000\nPagos de renta o hipoteca: 1\nGastos básicos: $4000\nPago de auto: 4\nGastos de gasolina o transporte: 1\nPagosde créditos: 1\nPago de tarjeta de crédito: $100\nComida y despensa: 1\nDiversión o entretenimiento: 1\nPagos de seguros: 1\nGastos básicos de vivienda: 1\nPagos de colegiatura: 1\nOtros gastos: 1';
    table('NEGOCIO PROPIO', texto, 2);
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
   .moveDown(2);
//END HEADER
doc.fontSize(config.titleSize)
doc.text('TRABAJO Y FUENTE DE INGRESO (PRESTAMISTA)', {align: 'center'});
doc.fontSize(config.textSize)

    texto = 'Nombre: Juanelo\nActividad: Lorem\nTipo de contrato: Sueldo\nIngreso mensual: $12,000 pesos\nTiempo trabajando: 1 Año 2 Meses\nPosición: Diseño\nOtro ingreso: 2300 pesos\nCalle y número: Santa Matilde #203\nColonia: Carboneras\nEstado: CHIHUACHUA\nCódigo postal: 48576\nCiudad: Somewhere';
    table('EMPLEADO', texto, 2);

    texto = 'Nombre: MILKYMICH\nRFC: QWERTY85\nActividad: Lorem\nTeléfono : 7894562135\nPágina web: www.algo.com.mx\nTiempo trabajando: 3 Año 7 Meses\nPosición: Diseño\nNúmero de empleados: 10\nIngreso Anual: $250000\nOtros Ingresos: N/A\nCalle y número: Santa Matilde #203\nColonia: Carboneras\nEstado: CHIHUACHUA\nCódigo postal: 48576\nCiudad: Somewhere\n ';
    table('NEGOCIO PROPIO', texto, 2);
//END PAGE
// end and display the document in the iframe to the right
doc.end();
stream.on('finish', function() {
  iframe.src = stream.toBlobURL('application/pdf');
});
