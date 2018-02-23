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
const userInfo = 'Nombre: ${fields.user.name}\nEmail: ${fields.user.emal}\nNivel: ${fields.user.level}\nEstatus: ${fields.status}\nReferencia creada: ${fields.createdAt}\nÚltima actualización: ${fields.updateAt}\n ';
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
doc.rect(config.marginLeft, doc.y, 612-config.marginLeft-config.marginRight, contentHeight + 30)
   .fill('#efefef')
   .stroke()
   .moveDown(0.5)
   .fill('#000')
   .text(texto, config.marginLeft, doc.y, {indent: config.indent, columns: col, columnGap: 15, align: 'justify', height: contentHeight+25, lineGap: 5})
   .moveDown(1);
}
//END FUNCTION
let texto = 'Monto máximo solicitado: $(fields.requested.amount)\nPlazo requerido: $(fields.requested.term)\nObjetivo del cŕedito: $(fields.requested.objective)\nPlazo para ser fondeado: $(fields.requested.anchorDeadline)\n ';
    table('INFORMACIÓN DEL CRÉDITO SOLICITADO', texto);
doc.text('1/5', config.marginLeft, 707, {align: 'center'});
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
   .moveDown(1);
    texto = 'Nombre: ${fields.personal.name}\nApellido Paterno: ${fields.personal.lastName}\nApellido Materno:	${fields.personal.mothersLastName}\nFecha de nacimiento: ${fields.personal.birthdate}\nSexo: ${fields.personal.gender}\nNacionalidad:	${fields.personal.nationality}\nEstado Civil: ${fields.personal.civilStatus}\nRFC: ${fields.personal.RFC}\nCURP: ${fields.personal.CURP}\n ';
    table('PERSONAL', texto, 2);

    texto = 'Teléfono particular: ${fields.personal.phone}\nTeléfono Celular: ${fields.personal.cellphone}\nCorreo electrónico 1: ${fields.personal.email1}\nCorreo electrónico 2: ${fields.personal.email2}\nCalle y número: ${fields.personal.address.streetAndNumber}\nColonia: ${fields.personal.address.neighborhood}\nCiudad: ${fields.personal.address.town}\nCP: ${fields.personal.address.CP}\nEstado: ${fields.personal.address.estate}\n ';
    table('CONTACTO', texto, 2);

    texto = 'Actividad: ${fields.personal.activity}\nEscolaridad: ${fields.personal.schooling}\nSituación de vivienda: ${fields.personal.housingSituation}\nTiempo de recidir: ${fields.personal.timeInHousing}\n ';
    table('DEMOGRÁFICO', texto, 2);

    texto = 'Conyuge: ${fields.personal.nameSpouse}\nNúmero de dependientes: ${fields.personal.economicDependentAge}\n ';
    table('OTROS', texto);
doc.text('2/5', config.marginLeft, 707, {align: 'center'});
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

    texto = 'Nombre: ${fields.personalReference.name}\nCalle y número: ${fields.personalReference.address.streetAndNumber}\nColonia: ${fields.personalReference.address.neighborhood}\nCP: ${fields.personalReference.address.CP}\nEstado: ${fields.personalReference.address.state}\nTeléfono particular: ${fields.personalReference.phone}\nCiudad: ${fields.personalReference.address.town}\nEmail: ${fields.personalReference.email}\n ';
    table('FAMILIAR', texto, 2);

    texto = 'Nombre: ${fields.nonFamily.name}\nCalle y número: ${fields.nonFamily.address.streetAndNumber}\nColonia: ${fields.nonFamily.address.neighborhood}\nEmail: ${fields.nonFamily.email}\nTeléfono particular: ${fields.nonFamily.phone}\nCP: ${fields.nonFamily.address.CP}\nCiudad: ${fields.nonFamily.address.town}\nEstado: ${fields.nonFamily.address.state}\n ';
    table('NO FAMILIAR', texto, 2);

    texto = 'Banco: ${fields.references.debitAccount.bank}\nNúmero de tarjeta: ${fields.references.debitAccount.number}\nFecha: ${fields.references.debitAccount.dueDate}\nTipo: ${fields.references.debitAccount.type}\nPago mensual: ${fields.references.debitAccount.monthlyPayment}\n ';
    table('DÉBITO', texto, 2);

    texto = 'Banco: ${fields.references.creditAccount.bank}\nNúmero de tarjeta: ${fields.references.creditAccount.number}\nFecha: ${fields.references.creditAccount.dueDate}\nTipo: ${fields.references.creditAccount.type}\nPago mensual: ${fields.references.creditAccount.monthlyPayment}\n ';
    table('CRÉDITO', texto, 2);
doc.text('3/5', config.marginLeft, 707, {align: 'center'});
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

    texto = 'Nombre: ${fields.sourcesOfIncome.employee.name}\nActividad: ${fields.sourcesOfIncome.employee.activity}\nTipo de contrato: ${fields.sourcesOfIncome.employee.typeContracting}\nCalle y número: ${fields.sourcesOfIncome.employee.address.streetAndNumber}}\nColonia: ${fields.sourcesOfIncome.employee.address.neighborhood}\nCiudad: ${fields.sourcesOfIncome.employee.address.town}\nEstado: ${fields.sourcesOfIncome.employee.address.estate}\nCP: ${fields.sourcesOfIncome.employee.address.CP}\nPosición:  ${fields.sourcesOfIncome.employee.position}\nTiempo trabajando: ${fields.sourcesOfIncome.employee.timeWorked}\nNombre del jefe: ${fields.sourcesOfIncome.employee.bossName}\nTeléfono: ${fields.sourcesOfIncome.employee.phone}\nIngreso mensual: ${fields.sourcesOfIncome.employee.monthlyIncome}\nOtro ingreso: ${fields.sourcesOfIncome.employee.otherIncome}\n ';
    table('EMPLEADO', texto, 2);

    texto = 'Nombre ${fields.sourcesOfIncome.ownBusiness.name}\nRFC ${fields.sourcesOfIncome.ownBusiness.RFC}\nActividad ${fields.sourcesOfIncome.ownBusiness.activity}\nCalle y número ${fields.sourcesOfIncome.ownBusiness.address.streetAndNumber}}\nColonia ${fields.sourcesOfIncome.ownBusiness.address.neighborhood}\nCiudad ${fields.sourcesOfIncome.ownBusiness.address.town}\nEstado ${fields.sourcesOfIncome.ownBusiness.address.estate}\nCP ${fields.sourcesOfIncome.ownBusiness.address.CP}\nTeléfono ${fields.sourcesOfIncome.ownBusiness.phone}\nPágina web ${fields.sourcesOfIncome.ownBusiness.web}\nPosición ${fields.sourcesOfIncome.ownBusiness.position}\nAntigüedad del negocio ${fields.sourcesOfIncome.ownBusiness.businessAge}\nEmpleados ${fields.sourcesOfIncome.ownBusiness.employees}\nIngreso anual ${fields.sourcesOfIncome.ownBusiness.annualIncome}\nOtro ingreso ${fields.sourcesOfIncome.ownBusiness.otherIncome}\n ';
    table('NEGOCIO PROPIO', texto, 2);
doc.moveDown(1)
   .fontSize(config.titleSize)
   .text('INFORMACIÓN FINANCIERA', {align: 'center'});
doc.fontSize(config.textSize)
    texto = 'Ingreso mensual: ${fields.financialInformation.employee.monthlyIncome}\nVales de despensa: ${fields.financialInformation.employee.pantryVouchers}\nBonos: ${fields.financialInformation.employee.bonuses}\nDeducciones: ${fields.financialInformation.employee.deductions}\nPagos de renta o hipotéca: ${fields.financialInformation.employee.rentOrMortgage}\nGastos básicos de vivienda: ${fields.financialInformation.employee.basicHousingExpenses}\nPagos de auto: ${fields.financialInformation.employee.carPayment}\nGastos de gasolina o transporte: ${fields.financialInformation.employee.transportCost}\nPagos de créditos: ${fields.financialInformation.employee.paymentOfCredits}\nComida y despensa: ${fields.financialInformation.employee.foodAndPantry}\nDiversión o entretenimiento: ${fields.financialInformation.employee.funAndEntertainment}\nPagos de seguro: ${fields.financialInformation.employee.insurancePayment}\nPagos de colegiatura: ${fields.financialInformation.employee.tuitionPayment}\nOtros gastos: ${fields.financialInformation.employee.otherExpenses}\n '
    table('EMPLEADO', texto, 2);
    texto = 'Ingreso mensual: ${fields.financialInformation.ownBusiness.monthlyIncome}\nGastos fijos: ${fields.financialInformation.ownBusiness.fixedCosts}\nGastos variables: ${fields.financialInformation.ownBusiness.variableCosts}\nUtilidad: ${fields.financialInformation.ownBusiness.utility}\nPagos de renta o hipotéca: ${fields.financialInformation.ownBusiness.rentOrMortgage}\nGastos básicos de vivienda: ${fields.financialInformation.ownBusiness.basicHousingExpenses}\nPagos de auto: ${fields.financialInformation.ownBusiness.carPayment}\nGastos de gasolina o transporte: ${fields.financialInformation.ownBusiness.transportCost}\nPagos de créditos: ${fields.financialInformation.ownBusiness.paymentOfCredits}\nComida y despensa: ${fields.financialInformation.ownBusiness.foodAndPantry}\nDiversión o entretenimiento: ${fields.financialInformation.ownBusiness.funAndEntertainment}\nPagos de seguro: ${fields.financialInformation.ownBusiness.insurancePayment}\nPagos de colegiatura: ${fields.financialInformation.ownBusiness.tuitionPayment}\nOtros gastos: ${fields.financialInformation.ownBusiness.otherExpenses}\n '
    table('NEGOCIO PROPIO', texto, 2);
doc.text('4/5', config.marginLeft, 707, {align: 'center'});
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

    texto = 'Ingreso mensual: ${fields.financialInformation.employee.monthlyIncome}\nVales de despensa: ${fields.financialInformation.employee.pantryVouchers}\nBonos: ${fields.financialInformation.employee.bonuses}\nDeducciones: ${fields.financialInformation.employee.deductions}\nPagos de renta o hipotéca: ${fields.financialInformation.employee.rentOrMortgage}\nGastos básicos de vivienda: ${fields.financialInformation.employee.basicHousingExpenses}\nPagos de auto: ${fields.financialInformation.employee.carPayment}\nGastos de gasolina o transporte: ${fields.financialInformation.employee.transportCost}\nPagos de créditos: ${fields.financialInformation.employee.paymentOfCredits}\nComida y despensa: ${fields.financialInformation.employee.foodAndPantry}\nDiversión o entretenimiento: ${fields.financialInformation.employee.funAndEntertainment}\nPagos de seguro: ${fields.financialInformation.employee.insurancePayment}\nPagos de colegiatura: ${fields.financialInformation.employee.tuitionPayment}\nOtros gastos: ${fields.financialInformation.employee.otherExpenses}\n ';
    table('EMPLEADO', texto, 2);

    texto = 'Ingreso mensual: ${fields.financialInformation.ownBusiness.monthlyIncome}\nGastos fijos: ${fields.financialInformation.ownBusiness.fixedCosts}\nGastos variables: ${fields.financialInformation.ownBusiness.variableCosts}\nUtilidad: ${fields.financialInformation.ownBusiness.utility}\nPagos de renta o hipotéca: ${fields.financialInformation.ownBusiness.rentOrMortgage}\nGastos básicos de vivienda: ${fields.financialInformation.ownBusiness.basicHousingExpenses}\nPagos de auto: ${fields.financialInformation.ownBusiness.carPayment}\nGastos de gasolina o transporte: ${fields.financialInformation.ownBusiness.transportCost}\nPagos de créditos: ${fields.financialInformation.ownBusiness.paymentOfCredits}\nComida y despensa: ${fields.financialInformation.ownBusiness.foodAndPantry}\nDiversión o entretenimiento: ${fields.financialInformation.ownBusiness.funAndEntertainment}\nPagos de seguro: ${fields.financialInformation.ownBusiness.insurancePayment}\nPagos de colegiatura: ${fields.financialInformation.ownBusiness.tuitionPayment}\nOtros gastos: ${fields.financialInformation.ownBusiness.otherExpenses}\n ';
    table('NEGOCIO PROPIO', texto, 2);
doc.text('5/5', config.marginLeft, 707, {align: 'center'});
//END PAGE
// end and display the document in the iframe to the right
doc.end();
stream.on('finish', function() {
  iframe.src = stream.toBlobURL('application/pdf');
});
