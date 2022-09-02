const button = document.getElementById("generateGrid");
const grid = document.querySelector(".grid");
const gridSize = 100
/**
 * 
 * @param {*} quantity max dei numeri generati
 * @returns ritorna un array della grandezza richiesta con numeri diversi tra loro
 */
const getRandomNumbers = (quantity) => {
  let array = [];
  // create an array and fill with numbers
  for (let i = 1; i <= quantity; i++) {
    array.push(i);
  }
  //RANDOMIZE ARRAY
  for (let i = array.length - 1; i >= 0; i--) {
    //Pesco un numero a caso che mi servirà a sorteggiare l'indice da scambiare
    let randomNumber = Math.floor(Math.random() * (i + 1));

    //salvo il valore dell'array sull'indice di i corrente
    let temp = array[i];

    //Scambio i valori degli indici tra di loro
    array[i] = array[randomNumber];
    array[randomNumber] = temp;
  }
  return array;
}

const createCell = (cellContent) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.append(cellContent)
    cell.addEventListener("click", clickedColor)
  return cell;
};


function createGrid() {
    const randomNumbers = getRandomNumbers(gridSize)
  this.setAttribute("disabled", "");
  console.log("entrato");
  for (let i = 1; i <= gridSize; i++) {
    const cell = createCell(randomNumbers[i-1]);
    grid.append(cell);
  }
}

function clickedColor() {
    this.classList.add((parseInt(this.innerText) % 2 === 0) ? "pari" : "dispari")
    console.log(this.innerText)
 }






button.addEventListener("click", createGrid);
