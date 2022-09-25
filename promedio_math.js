/* const numero1 = document.querySelector(".numero1");
const numero2 = document.querySelector(".numero2");
const numero3 = document.querySelector(".numero3");
const calcular = document.querySelector(".calcular");

const resultado1 = document.querySelector(".resultado1");

calcular.addEventListener("click", calcularTodo);

function calcularTodo() {
  const numerou = Number(numero1.value);
  const numerod = Number(numero2.value);
  const numerot = Number(numero3.value);

  if (!numerou || !numerod || !numerot || !calcular) {
    resultado1.innerText = "por favor llenar el formulario";
    return;
  }
  calcu = (numerou + numerod + numerot) / 3;
  resultado1.innerText = "resultado $" + calcu;
  console.log(calcu);
} */
function calcularPromedio(lista) {
  let sumaLista = 0;
  for (let i = 0; i < lista.length; i++) {
    sumaLista = sumaLista + lista[i];
  }
  const promedio = sumaLista / lista.length;
  console.log(promedio);
  return promedio;
}
