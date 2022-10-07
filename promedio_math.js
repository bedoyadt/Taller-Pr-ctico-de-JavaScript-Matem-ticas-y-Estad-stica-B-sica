/*
const numero1 = document.querySelector(".numero1");
const numero2 = document.querySelector(".numero2");
const numero3 = document.querySelector(".numero3");
const calcular = document.querySelector(".calcular");

const resultado1 = document.querySelector(".resultado1");

calcular.addEventListener("click", calcularTodo);

function calcularTodo() {
  const numerou = Math.floor(numero1.value);
  const numerod = Math.floor(numero2.value);
  const numerot = Math.floor(numero3.value);

  if (!numerou || !numerod || !numerot || !calcular) {
    resultado1.innerText = "por favor llenar el formulario";
    return;
  }
  calcu = (numerou + numerod + numerot) / 3;
  resultado1.innerText = "resultado $" + calcu;
  console.log(calcu);
}  */

const PlatziMath = {};

PlatziMath.calcularPromedio = function calcularPromedio(lista) {
  let sumaLista = 0;
  for (let i = 0; i < lista.length; i++) {
    sumaLista = sumaLista + lista[i];
  }
  const promedio = sumaLista / lista.length;
  console.log(promedio);
  return promedio;
};

PlatziMath.espar = function espar(lista) {
  return !(lista.length % 2);
};

PlatziMath.esinpar = function esinpar(lista) {
  return lista.length % 2;
};

PlatziMath.calcularMediana = function calcularMediana(lista) {
  const listaEsPar = PlatziMath.espar(lista);
  if (listaEsPar) {
    const indexMita1ListaPar = lista.length / 2 - 1;
    const indexMita2ListaPar = lista.length / 2;
    const listaMitades = [lista[indexMita1ListaPar], lista[indexMita2ListaPar]];
    PlatziMath.calcularPromedio(listaMitades);
  } else {
    const indexMitadListaImpar = Math.floor(lista.length / 2);
    const medianaListaImpar = lista[indexMitadListaImpar];
    return medianaListaImpar;
  }
};

PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {
    if (valorAcumulado > nuevoValor) {
      return 1;
    } else if (valorAcumulado == nuevoValor) {
      return 0;
    } else if (valorAcumulado < nuevoValor) {
      return -1;
    }
  }
  const lista = listaDesordenada.sort(ordenarListaSort);
  return lista;
};

PlatziMath.calcularModa = function calcularModa(lista) {
  const listaCount = {};

  for (let i = 0; i < lista.length; i++) {
    const elemento = lista[i];

    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  }
  const listaArray = Object.entries(listaCount);
  const listaOrdenada = PlatziMath.ordenarListaBidimensional(listaArray, 1);
  const listaDesordenadaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
  //console.log("la moda es" + listaDesordenadaMaxNumber[0]);
  const moda = listaDesordenadaMaxNumber[0];
  return moda;
};

PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(
  listaDesordenada,
  i
) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {
    return valorAcumulado[i] - nuevoValor[i];
  }
  const lista = listaDesordenada.sort(ordenarListaSort);
  return lista;
};
