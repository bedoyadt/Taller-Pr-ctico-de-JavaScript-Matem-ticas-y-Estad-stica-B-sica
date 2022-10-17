//encomtrar persona

function encontrarPersona(personaEnBusqueda) {
  const persona = salarios.find((persona) => {
    return persona.name == personaEnBusqueda;
  });
  return persona;
}

function medianaPorPersona(nombrePersona) {
  const trabajos = encontrarPersona(nombrePersona).trabajos;

  const salarios = trabajos.map(function (elemento) {
    return elemento.salario;
  });

  const medianaSalarios = PlatziMath.calcularMediana(salarios);
  return medianaSalarios;
}

function proyeccionPorPersona(nombrePersona) {
  const trabajos = encontrarPersona(nombrePersona).trabajos;

  let porcentajesCrecimiento = [];

  for (let i = 1; i < trabajos.length; i++) {
    const salarioActual = trabajos[i].salario;
    const salarioPasado = trabajos[i - 1].salario;
    const crecimiento = salarioActual - salarioPasado;
    const porcentajeCrecimiento = crecimiento / salarioPasado;
    porcentajesCrecimiento.push(porcentajeCrecimiento);
  }

  const medianaPorcentajeCrecimiento = PlatziMath.calcularMediana(
    porcentajesCrecimiento
  );
  const ultimoSalario = trabajos[trabajos.length - 1].salario;
  const aumento = ultimoSalario * medianaPorcentajeCrecimiento;
  const nuevosalario = ultimoSalario + aumento;
  return nuevosalario;
}

const empresas = {};
for (persona of salarios) {
  for (trabajo of persona.trabajos) {
    if (!empresas[trabajo.empresa]) {
      //yeaar
      empresas[trabajo.empresa] = {}; //year
    }
    if (!empresas[trabajo.empresa][trabajo.year]) {
      //cambiar empresa por year y year por emprresa
      empresas[trabajo.empresa][trabajo.year] = [];
    }
    empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
  }
}
console.log({ empresas });

const porAno = {};
for (persona of salarios) {
  for (trabajo of persona.trabajos) {
    if (!porAno[trabajo.year]) {
      //yeaar
      porAno[trabajo.year] = {}; //year
    }
    if (!porAno[trabajo.year][trabajo.empresa]) {
      //cambiar empresa por year y year por emprresa
      porAno[trabajo.year][trabajo.empresa] = [];
    }
    porAno[trabajo.year][trabajo.empresa].push(trabajo.salario);
  }
}
console.log({ porAno });
