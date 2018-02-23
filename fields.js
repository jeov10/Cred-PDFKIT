INFO GRAL - PRESTATARIO
texto = 'Nombre: ${fields.user.name}\nEmail: ${fields.user.emal}\nNivel: ${fields.user.level}\nEstatus: ${fields.status}\nReferencia creada: ${fields.createdAt}\nÚltima actualización: ${fields.updateAt}\n ';
INFORMACIÓN DEL CRÉDITO SOLICITADO
texto = 'Monto máximo solicitado: $(fields.requested.amount)\nPlazo requerido: $(fields.requested.term)\nObjetivo del cŕedito: $(fields.requested.objective)\nPlazo para ser fondeado: $(fields.requested.anchorDeadline)\n ';
PERFIL DE INVERSIÓN (prestamista)
texto = '¿Cuál es el objetivo de invertir en esta plataforma?\n${fields.investmentProfile.goal}\n¿Cuál es el monto máximo que espera invertir?	${fields.investmentProfile.maximumAmoun}\n¿Es propietario de los recursos que invertirá?	${fields.investmentProfile.isOwner}\nProcedencia de recursos y relación	${fields.investmentProfile.relationshipOwne}\n '
INFORMACIÓN PERSONAL (ambos)
PERSONAL
texto = 'Nombre: ${fields.personal.name}\nApellido Paterno: ${fields.personal.lastName}\nApellido Materno:	${fields.personal.mothersLastName}\nFecha de nacimiento: ${fields.personal.birthdate}\nSexo: ${fields.personal.gender}\nNacionalidad:	${fields.personal.nationality}\nEstado Civil: ${fields.personal.civilStatus}\nRFC: ${fields.personal.RFC}\nCURP: ${fields.personal.CURP}\n ';
CONTACTO
texto = 'Teléfono particular: ${fields.personal.phone}\nTeléfono Celular: ${fields.personal.cellphone}\nCorreo electrónico 1: ${fields.personal.email1}\nCorreo electrónico 2: ${fields.personal.email2}\nCalle y número: ${fields.personal.address.streetAndNumber}\nColonia: ${fields.personal.address.neighborhood}\nCiudad: ${fields.personal.address.town}\nCP: ${fields.personal.address.CP}\nEstado: ${fields.personal.address.estate}\n ';
DEMOGRÁFICO
texto = 'Actividad: ${fields.personal.activity}\nEscolaridad: ${fields.personal.schooling}\nSituación de vivienda: ${fields.personal.housingSituation}\nTiempo de recidir: ${fields.personal.timeInHousing}\n ';
OTROS
texto: 'Conyuge: ${fields.personal.nameSpouse}\nNúmero de dependientes: ${fields.personal.economicDependentAge}\n ';
REFERENCIAS
FAMILIAR (ambos)
texto = 'Nombre: ${fields.personalReference.name}\nCalle y número: ${fields.personalReference.address.streetAndNumber}\nColonia: ${fields.personalReference.address.neighborhood}\nCP: ${fields.personalReference.address.CP}\nEstado: ${fields.personalReference.address.state}\nTeléfono particular: ${fields.personalReference.phone}\nCiudad: ${fields.personalReference.address.town}\nEmail: ${fields.personalReference.email}\n ';
NO FAMILIAR (ambos)
texto = 'Nombre: ${fields.nonFamily.name}\nCalle y número: ${fields.nonFamily.address.streetAndNumber}\nColonia: ${fields.nonFamily.address.neighborhood}\nEmail: ${fields.nonFamily.email}\nTeléfono particular: ${fields.nonFamily.phone}\nCP: ${fields.nonFamily.address.CP}\nCiudad: ${fields.nonFamily.address.town}\nEstado: ${fields.nonFamily.address.state}\n ';
DÉBITO (ambos)
texto = 'Banco: ${fields.references.debitAccount.bank}\nNúmero de tarjeta: ${fields.references.debitAccount.number}\nFecha: ${fields.references.debitAccount.dueDate}\nTipo: ${fields.references.debitAccount.type}\nPago mensual: ${fields.references.debitAccount.monthlyPayment}\n ';
CRÉDITO (prestatario)
texto = 'Banco: ${fields.references.creditAccount.bank}\nNúmero de tarjeta: ${fields.references.creditAccount.number}\nFecha: ${fields.references.creditAccount.dueDate}\nTipo: ${fields.references.creditAccount.type}\nPago mensual: ${fields.references.creditAccount.monthlyPayment}\n ';
FUENTE DE INGRESO
EMPLEADO
texto = 'Nombre: ${fields.sourcesOfIncome.employee.name}\nActividad: ${fields.sourcesOfIncome.employee.activity}\nTipo de contrato: ${fields.sourcesOfIncome.employee.typeContracting}\nCalle y número: ${fields.sourcesOfIncome.employee.address.streetAndNumber}}\nColonia: ${fields.sourcesOfIncome.employee.address.neighborhood}\nCiudad: ${fields.sourcesOfIncome.employee.address.town}\nEstado: ${fields.sourcesOfIncome.employee.address.estate}\nCP: ${fields.sourcesOfIncome.employee.address.CP}\nPosición:  ${fields.sourcesOfIncome.employee.position}\nTiempo trabajando: ${fields.sourcesOfIncome.employee.timeWorked}\nNombre del jefe: ${fields.sourcesOfIncome.employee.bossName}\nTeléfono: ${fields.sourcesOfIncome.employee.phone}\nIngreso mensual: ${fields.sourcesOfIncome.employee.monthlyIncome}\nOtro ingreso: ${fields.sourcesOfIncome.employee.otherIncome}\n ';
EMPLEADO (Prestamista)
texto = 'Nombre ${fields.sourcesOfIncome.employee.name}\nActividad ${fields.sourcesOfIncome.employee.activity}\nTipo de contrato ${fields.sourcesOfIncome.employee.typeContracting}\nCalle y número ${fields.sourcesOfIncome.employee.address.streetAndNumber}}\nColonia ${fields.sourcesOfIncome.employee.address.neighborhood}\nCiudad ${fields.sourcesOfIncome.employee.address.town}\nEstado ${fields.sourcesOfIncome.employee.address.estate}\nCP ${fields.sourcesOfIncome.employee.address.CP}\nPosición ${fields.sourcesOfIncome.employee.position}\nTiempo trabajando ${fields.sourcesOfIncome.employee.timeWorked}\nIngreso mensual ${fields.sourcesOfIncome.employee.monthlyIncome}\nOtro ingreso ${fields.sourcesOfIncome.employee.otherIncome}\n';
NEGOCIO PROPIO	ambos
texto = 'Nombre ${fields.sourcesOfIncome.ownBusiness.name}\nRFC ${fields.sourcesOfIncome.ownBusiness.RFC}\nActividad ${fields.sourcesOfIncome.ownBusiness.activity}\nCalle y número ${fields.sourcesOfIncome.ownBusiness.address.streetAndNumber}}\nColonia ${fields.sourcesOfIncome.ownBusiness.address.neighborhood}\nCiudad ${fields.sourcesOfIncome.ownBusiness.address.town}\nEstado ${fields.sourcesOfIncome.ownBusiness.address.estate}\nCP ${fields.sourcesOfIncome.ownBusiness.address.CP}\nTeléfono ${fields.sourcesOfIncome.ownBusiness.phone}\nPágina web ${fields.sourcesOfIncome.ownBusiness.web}\nPosición ${fields.sourcesOfIncome.ownBusiness.position}\nAntigüedad del negocio ${fields.sourcesOfIncome.ownBusiness.businessAge}\nEmpleados ${fields.sourcesOfIncome.ownBusiness.employees}\nIngreso anual ${fields.sourcesOfIncome.ownBusiness.annualIncome}\nOtro ingreso ${fields.sourcesOfIncome.ownBusiness.otherIncome}\n ';
INFORMACIÓN FINANCIERA
EMPLEADO	prestatario
texto = 'Ingreso mensual: ${fields.financialInformation.employee.monthlyIncome}\nVales de despensa: ${fields.financialInformation.employee.pantryVouchers}\nBonos: ${fields.financialInformation.employee.bonuses}\nDeducciones: ${fields.financialInformation.employee.deductions}\nPagos de renta o hipotéca: ${fields.financialInformation.employee.rentOrMortgage}\nGastos básicos de vivienda: ${fields.financialInformation.employee.basicHousingExpenses}\nPagos de auto: ${fields.financialInformation.employee.carPayment}\nGastos de gasolina o transporte: ${fields.financialInformation.employee.transportCost}\nPagos de créditos: ${fields.financialInformation.employee.paymentOfCredits}\nComida y despensa: ${fields.financialInformation.employee.foodAndPantry}\nDiversión o entretenimiento: ${fields.financialInformation.employee.funAndEntertainment}\nPagos de seguro: ${fields.financialInformation.employee.insurancePayment}\nPagos de colegiatura: ${fields.financialInformation.employee.tuitionPayment}\nOtros gastos: ${fields.financialInformation.employee.otherExpenses}\n '
NEGOCIO PROPIO	prestatario
texto = 'Ingreso mensual: ${fields.financialInformation.ownBusiness.monthlyIncome}\nGastos fijos: ${fields.financialInformation.ownBusiness.fixedCosts}\nGastos variables: ${fields.financialInformation.ownBusiness.variableCosts}\nUtilidad: ${fields.financialInformation.ownBusiness.utility}\nPagos de renta o hipotéca: ${fields.financialInformation.ownBusiness.rentOrMortgage}\nGastos básicos de vivienda: ${fields.financialInformation.ownBusiness.basicHousingExpenses}\nPagos de auto: ${fields.financialInformation.ownBusiness.carPayment}\nGastos de gasolina o transporte: ${fields.financialInformation.ownBusiness.transportCost}\nPagos de créditos: ${fields.financialInformation.ownBusiness.paymentOfCredits}\nComida y despensa: ${fields.financialInformation.ownBusiness.foodAndPantry}\nDiversión o entretenimiento: ${fields.financialInformation.ownBusiness.funAndEntertainment}\nPagos de seguro: ${fields.financialInformation.ownBusiness.insurancePayment}\nPagos de colegiatura: ${fields.financialInformation.ownBusiness.tuitionPayment}\nOtros gastos: ${fields.financialInformation.ownBusiness.otherExpenses}\n '

texto = 'Ingreso mensual: ${fields.financialInformation.employee.monthlyIncome}\nVales de despensa: ${fields.financialInformation.employee.pantryVouchers}\nBonos: ${fields.financialInformation.employee.bonuses}\nDeducciones: ${fields.financialInformation.employee.deductions}\nPagos de renta o hipotéca: ${fields.financialInformation.employee.rentOrMortgage}\nGastos básicos de vivienda: ${fields.financialInformation.employee.basicHousingExpenses}\nPagos de auto: ${fields.financialInformation.employee.carPayment}\nGastos de gasolina o transporte: ${fields.financialInformation.employee.transportCost}\nPagos de créditos: ${fields.financialInformation.employee.paymentOfCredits}\nComida y despensa: ${fields.financialInformation.employee.foodAndPantry}\nDiversión o entretenimiento: ${fields.financialInformation.employee.funAndEntertainment}\nPagos de seguro: ${fields.financialInformation.employee.insurancePayment}\nPagos de colegiatura: ${fields.financialInformation.employee.tuitionPayment}\nOtros gastos: ${fields.financialInformation.employee.otherExpenses}\n ';

texto = 'Ingreso mensual: ${fields.financialInformation.ownBusiness.monthlyIncome}\nGastos fijos: ${fields.financialInformation.ownBusiness.fixedCosts}\nGastos variables: ${fields.financialInformation.ownBusiness.variableCosts}\nUtilidad: ${fields.financialInformation.ownBusiness.utility}\nPagos de renta o hipotéca: ${fields.financialInformation.ownBusiness.rentOrMortgage}\nGastos básicos de vivienda: ${fields.financialInformation.ownBusiness.basicHousingExpenses}\nPagos de auto: ${fields.financialInformation.ownBusiness.carPayment}\nGastos de gasolina o transporte: ${fields.financialInformation.ownBusiness.transportCost}\nPagos de créditos: ${fields.financialInformation.ownBusiness.paymentOfCredits}\nComida y despensa: ${fields.financialInformation.ownBusiness.foodAndPantry}\nDiversión o entretenimiento: ${fields.financialInformation.ownBusiness.funAndEntertainment}\nPagos de seguro: ${fields.financialInformation.ownBusiness.insurancePayment}\nPagos de colegiatura: ${fields.financialInformation.ownBusiness.tuitionPayment}\nOtros gastos: ${fields.financialInformation.ownBusiness.otherExpenses}\n ';



INFO GRAL - PRESTAMISTA
texto = 'Nombre: ${fields.user.name}\nEmail: ${fields.user.emal}\nNivel: ${fields.user.level}\nEstatus: ${fields.status}\nReferencia creada: ${fields.references.createdAt}\nÚltima actualización: ${fields.references.updateAt}\n ';
PERFIL DE INVERSIÓN
texto = '¿Cuál es el objetivo de invertir en esta plataforma?: ${fields.references.investmentProfile.goal}\n¿Cuál es el monto máximo que espera invertir?: ${fields.references.investmentProfile.maximumAmoun}\n¿Es propietario de los recursos que invertirá?: ${fields.references.investmentProfile.isOwner}\nProcedencia de recursos y relación: ${fields.references.investmentProfile.relationshipOwne}\n ';
PERSONAL
texto = 'Nombre: ${fields.references.personal.name}\nApellido Paterno: ${fields.references.personal.lastName}\nApellido Materno: ${fields.references.personal.mothersLastName}\nFecha de nacimiento: ${fields.references.personal.birthdate}\nSexo: ${fields.references.personal.gender}\nNacionalidad: ${fields.references.personal.nationality}\nEstado Civil: ${fields.references.personal.civilStatus}\nRFC: ${fields.references.personal.RFC}\nCURP: ${fields.references.personal.CURP}\n ';
CONTACTO
texto = 'Teléfono particular: ${fields.references.personal.phone}\neléfono Celular: ${fields.references.personal.cellphone}\norreo electrónico 1: ${fields.references.personal.email1}\norreo electrónico 2: ${fields.references.personal.email2}\nalle y número: ${fields.references.personal.address.streetAndNumber}\nolonia: ${fields.references.personal.address.neighborhood}\niudad: ${fields.references.personal.address.town}\nCP: ${fields.references.personal.address.CP}\nstado: ${fields.references.personal.address.estate}\n ';
DEMOGRÁFICO
texto = 'Actividad: ${fields.references.personal.activity}\nEscolaridad: ${fields.references.personal.schooling}\nSituación de vivienda: ${fields.references.personal.housingSituation}\nTiempo de recidir: ${fields.references.personal.timeInHousing}\n ';
OTROS
texto = 'Conyuge: ${fields.references.personal.nameSpouse}\nNúmero de dependientes: ${fields.references.personal.economicDependentAge}\n ';
REFERENCIAS
FAMILIAR
texto = 'Nombre: ${fields.references.personalReference.name}\nCalle y número: ${fields.references.personalReference.address.streetAndNumber}\nColonia: ${fields.references.personalReference.address.neighborhood}\nCP: ${fields.references.personalReference.address.CP}\nEstado: ${fields.references.personalReference.address.state}\nTeléfono particular: ${fields.references.personalReference.phone}\nCiudad: ${fields.references.personalReference.address.town}\nEmail: ${fields.references.personalReference.email}\n ';
NO FAMILIAR
texto = 'Nombre:	${fields.references.nonFamily.name}\nCalle y número:	${fields.references.nonFamily.address.streetAndNumber}\nColonia:	${fields.references.nonFamily.address.neighborhood}\nEmail:	${fields.references.nonFamily.email}\nTeléfono particular:	${fields.references.nonFamily.phone}\nCP:	${fields.references.nonFamily.address.CP}\nCiudad:	${fields.references.nonFamily.address.town}\nEstado:	${fields.references.nonFamily.address.state}\n ';
DÉBITO
texto = 'Banco: ${fields.references.debitAccount.bank}\nNúmero de tarjeta: ${fields.references.debitAccount.number}\nFecha: ${fields.references.debitAccount.dueDate}\nTipo: ${fields.references.debitAccount.type}\nPago mensual: ${fields.references.debitAccount.monthlyPayment}\n '
FUENTE DE INGRESO
EMPLEADO
texto = 'Nombre: ${fields.references.sourcesOfIncome.employee.name}\nActividad: ${fields.references.sourcesOfIncome.employee.activity}\nTipo de contrato: ${fields.references.sourcesOfIncome.employee.typeContracting}\nCalle y número: ${fields.references.sourcesOfIncome.employee.address.streetAndNumber}}\nColonia: ${fields.references.sourcesOfIncome.employee.address.neighborhood}\nCiudad: ${fields.references.sourcesOfIncome.employee.address.town}\nEstado: ${fields.references.sourcesOfIncome.employee.address.estate}\nCP: ${fields.references.sourcesOfIncome.employee.address.CP}\nPosición: ${fields.references.sourcesOfIncome.employee.position}\nTiempo trabajando: ${fields.references.sourcesOfIncome.employee.timeWorked}\nIngreso mensual: ${fields.references.sourcesOfIncome.employee.monthlyIncome}\nOtro ingreso: ${fields.references.sourcesOfIncome.employee.otherIncome}\n ';
NEGOCIO PROPIO
texto = 'Nombre: ${fields.references.sourcesOfIncome.ownBusiness.name}\nRFC: ${fields.references.sourcesOfIncome.ownBusiness.RFC}\nActividad: ${fields.references.sourcesOfIncome.ownBusiness.activity}\nCalle y número: ${fields.references.sourcesOfIncome.ownBusiness.address.streetAndNumber}}\nColonia: ${fields.references.sourcesOfIncome.ownBusiness.address.neighborhood}\nCiudad: ${fields.references.sourcesOfIncome.ownBusiness.address.town}\nEstado: ${fields.references.sourcesOfIncome.ownBusiness.address.estate}\nCP: ${fields.references.sourcesOfIncome.ownBusiness.address.CP}\nTeléfono: ${fields.references.sourcesOfIncome.ownBusiness.phone}\nPágina web: ${fields.references.sourcesOfIncome.ownBusiness.web}\nPosición: ${fields.references.sourcesOfIncome.ownBusiness.position}\nAntigüedad del negocio: ${fields.references.sourcesOfIncome.ownBusiness.businessAge}\nEmpleados: ${fields.references.sourcesOfIncome.ownBusiness.employees}\nIngreso anual: ${fields.references.sourcesOfIncome.ownBusiness.annualIncome}\nOtro ingreso: ${fields.references.sourcesOfIncome.ownBusiness.otherIncome}\n '