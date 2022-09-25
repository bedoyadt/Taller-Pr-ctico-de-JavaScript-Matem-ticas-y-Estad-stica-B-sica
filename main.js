//console.log("Hello, JS");

const valor1 = document.querySelector(".valor");
const descuento1 = document.querySelector(".descuento");
const calcular1 = document.querySelector(".calcular");
const resultado1 = document.querySelector(".resultado");

calcular1.addEventListener("click", calcularTodo);


const cupomania = {
  BIENBENIDO: 80,
  SEGUNDACOMPRA: 50,
  TERCERACOMPRA: 30,
};
function calcularTodo() {
  const valor = Number(valor1.value);
  const descuento = descuento1.value;

  if (!valor || !descuento) {
    resultado1.innerText = "por favor llenar el formulario";
    return;
  }

  let cupon;

  if (cupomania[descuento]) {
    cupon = cupomania[descuento];
  } else {
    resultado1.innerText = "El Cupom No Esvalido";
    return;
  }
  /* 
  switch (descuento) {
    case "BIENBENIDO":
      cupon;
      break;
    case "SEGUNDACOMPRA":
      cupon;
      break;
    case "TERCERACOMPRA":
      cupon;
      break;
    default:
      resultado1.innerText = "El Cupon No Esvalido";
      return;
  }
 */
  calcu = (valor * (100 - cupon)) / 100;
  resultado1.innerText = "resultado $" + calcu;
}
//console.log(calcu);
