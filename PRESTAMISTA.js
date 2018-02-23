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
let texto = '¿Cuál es el objetivo de invertir en esta plataforma?: ${fields.references.investmentProfile.goal}\n¿Cuál es el monto máximo que espera invertir?: ${fields.references.investmentProfile.maximumAmoun}\n¿Es propietario de los recursos que invertirá?: ${fields.references.investmentProfile.isOwner}\nProcedencia de recursos y relación: ${fields.references.investmentProfile.relationshipOwne}\n ';
    table('PERFIL DE INVERSIÓN', texto);
doc.text('1/4', config.marginLeft, 707, {align: 'center'});
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
    texto = 'Nombre: ${fields.references.personal.name}\nApellido Paterno: ${fields.references.personal.lastName}\nApellido Materno: ${fields.references.personal.mothersLastName}\nFecha de nacimiento: ${fields.references.personal.birthdate}\nSexo: ${fields.references.personal.gender}\nNacionalidad: ${fields.references.personal.nationality}\nEstado Civil: ${fields.references.personal.civilStatus}\nRFC: ${fields.references.personal.RFC}\nCURP: ${fields.references.personal.CURP}\n ';
    table('PERSONAL', texto, 2);

    texto = 'Teléfono particular: ${fields.references.personal.phone}\neléfono Celular: ${fields.references.personal.cellphone}\norreo electrónico 1: ${fields.references.personal.email1}\norreo electrónico 2: ${fields.references.personal.email2}\nalle y número: ${fields.references.personal.address.streetAndNumber}\nolonia: ${fields.references.personal.address.neighborhood}\niudad: ${fields.references.personal.address.town}\nCP: ${fields.references.personal.address.CP}\nstado: ${fields.references.personal.address.estate}\n ';
    table('CONTACTO', texto, 2);

    texto = 'Actividad: ${fields.personal.activity}\nEscolaridad: ${fields.personal.schooling}\nSituación de vivienda: ${fields.personal.housingSituation}\nTiempo de recidir: ${fields.personal.timeInHousing}\n ';
    table('DEMOGRÁFICO', texto, 2);

    texto = 'Actividad: ${fields.references.personal.activity}\nEscolaridad: ${fields.references.personal.schooling}\nSituación de vivienda: ${fields.references.personal.housingSituation}\nTiempo de recidir: ${fields.references.personal.timeInHousing}\n ';
    table('OTROS', texto);
doc.text('2/4', config.marginLeft, 707, {align: 'center'});
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

    texto = 'Nombre: ${fields.references.personalReference.name}\nCalle y número: ${fields.references.personalReference.address.streetAndNumber}\nColonia: ${fields.references.personalReference.address.neighborhood}\nCP: ${fields.references.personalReference.address.CP}\nEstado: ${fields.references.personalReference.address.state}\nTeléfono particular: ${fields.references.personalReference.phone}\nCiudad: ${fields.references.personalReference.address.town}\nEmail: ${fields.references.personalReference.email}\n ';
    table('FAMILIAR', texto, 2);

    texto = 'Nombre:	${fields.references.nonFamily.name}\nCalle y número:	${fields.references.nonFamily.address.streetAndNumber}\nColonia:	${fields.references.nonFamily.address.neighborhood}\nEmail:	${fields.references.nonFamily.email}\nTeléfono particular:	${fields.references.nonFamily.phone}\nCP:	${fields.references.nonFamily.address.CP}\nCiudad:	${fields.references.nonFamily.address.town}\nEstado:	${fields.references.nonFamily.address.state}\n ';
    table('NO FAMILIAR', texto, 2);

    texto = 'Banco: ${fields.references.debitAccount.bank}\nNúmero de tarjeta: ${fields.references.debitAccount.number}\nFecha: ${fields.references.debitAccount.dueDate}\nTipo: ${fields.references.debitAccount.type}\nPago mensual: ${fields.references.debitAccount.monthlyPayment}\n ';
    table('DÉBITO', texto, 2);
doc.text('3/4', config.marginLeft, 707, {align: 'center'});
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

    texto = 'Nombre: ${fields.references.sourcesOfIncome.employee.name}\nActividad: ${fields.references.sourcesOfIncome.employee.activity}\nTipo de contrato: ${fields.references.sourcesOfIncome.employee.typeContracting}\nCalle y número: ${fields.references.sourcesOfIncome.employee.address.streetAndNumber}}\nColonia: ${fields.references.sourcesOfIncome.employee.address.neighborhood}\nCiudad: ${fields.references.sourcesOfIncome.employee.address.town}\nEstado: ${fields.references.sourcesOfIncome.employee.address.estate}\nCP: ${fields.references.sourcesOfIncome.employee.address.CP}\nPosición: ${fields.references.sourcesOfIncome.employee.position}\nTiempo trabajando: ${fields.references.sourcesOfIncome.employee.timeWorked}\nIngreso mensual: ${fields.references.sourcesOfIncome.employee.monthlyIncome}\nOtro ingreso: ${fields.references.sourcesOfIncome.employee.otherIncome}\n ';
    table('EMPLEADO', texto, 2);

    texto = 'Nombre: ${fields.references.sourcesOfIncome.ownBusiness.name}\nRFC: ${fields.references.sourcesOfIncome.ownBusiness.RFC}\nActividad: ${fields.references.sourcesOfIncome.ownBusiness.activity}\nCalle y número: ${fields.references.sourcesOfIncome.ownBusiness.address.streetAndNumber}}\nColonia: ${fields.references.sourcesOfIncome.ownBusiness.address.neighborhood}\nCiudad: ${fields.references.sourcesOfIncome.ownBusiness.address.town}\nEstado: ${fields.references.sourcesOfIncome.ownBusiness.address.estate}\nCP: ${fields.references.sourcesOfIncome.ownBusiness.address.CP}\nTeléfono: ${fields.references.sourcesOfIncome.ownBusiness.phone}\nPágina web: ${fields.references.sourcesOfIncome.ownBusiness.web}\nPosición: ${fields.references.sourcesOfIncome.ownBusiness.position}\nAntigüedad del negocio: ${fields.references.sourcesOfIncome.ownBusiness.businessAge}\nEmpleados: ${fields.references.sourcesOfIncome.ownBusiness.employees}\nIngreso anual: ${fields.references.sourcesOfIncome.ownBusiness.annualIncome}\nOtro ingreso: ${fields.references.sourcesOfIncome.ownBusiness.otherIncome}\n '
    table('NEGOCIO PROPIO', texto, 2);
doc.moveDown(1)
   .fontSize(config.titleSize)
   .text('INFORMACIÓN FINANCIERA', {align: 'center'});
doc.fontSize(config.textSize)
    texto = 'Ingreso mensual: ${fields.financialInformation.employee.monthlyIncome}\nVales de despensa: ${fields.financialInformation.employee.pantryVouchers}\nBonos: ${fields.financialInformation.employee.bonuses}\nDeducciones: ${fields.financialInformation.employee.deductions}\nPagos de renta o hipotéca: ${fields.financialInformation.employee.rentOrMortgage}\nGastos básicos de vivienda: ${fields.financialInformation.employee.basicHousingExpenses}\nPagos de auto: ${fields.financialInformation.employee.carPayment}\nGastos de gasolina o transporte: ${fields.financialInformation.employee.transportCost}\nPagos de créditos: ${fields.financialInformation.employee.paymentOfCredits}\nComida y despensa: ${fields.financialInformation.employee.foodAndPantry}\nDiversión o entretenimiento: ${fields.financialInformation.employee.funAndEntertainment}\nPagos de seguro: ${fields.financialInformation.employee.insurancePayment}\nPagos de colegiatura: ${fields.financialInformation.employee.tuitionPayment}\nOtros gastos: ${fields.financialInformation.employee.otherExpenses}\n '
    table('EMPLEADO', texto, 2);
    texto = 'Ingreso mensual: ${fields.financialInformation.ownBusiness.monthlyIncome}\nGastos fijos: ${fields.financialInformation.ownBusiness.fixedCosts}\nGastos variables: ${fields.financialInformation.ownBusiness.variableCosts}\nUtilidad: ${fields.financialInformation.ownBusiness.utility}\nPagos de renta o hipotéca: ${fields.financialInformation.ownBusiness.rentOrMortgage}\nGastos básicos de vivienda: ${fields.financialInformation.ownBusiness.basicHousingExpenses}\nPagos de auto: ${fields.financialInformation.ownBusiness.carPayment}\nGastos de gasolina o transporte: ${fields.financialInformation.ownBusiness.transportCost}\nPagos de créditos: ${fields.financialInformation.ownBusiness.paymentOfCredits}\nComida y despensa: ${fields.financialInformation.ownBusiness.foodAndPantry}\nDiversión o entretenimiento: ${fields.financialInformation.ownBusiness.funAndEntertainment}\nPagos de seguro: ${fields.financialInformation.ownBusiness.insurancePayment}\nPagos de colegiatura: ${fields.financialInformation.ownBusiness.tuitionPayment}\nOtros gastos: ${fields.financialInformation.ownBusiness.otherExpenses}\n '
    table('NEGOCIO PROPIO', texto, 2);
doc.text('4/4', config.marginLeft, 707, {align: 'center'});
//END PAGE
// end and display the document in the iframe to the right
doc.end();
stream.on('finish', function() {
  iframe.src = stream.toBlobURL('application/pdf');
});
