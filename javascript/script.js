const button = document.getElementById("generateGrid");
const grid = document.querySelector(".grid");

const getRandomNumbers = (quantity) => {
    const array = [];
    while (array.length < quantity) {
        const number = Math.floor(Math.random() * quantity) + 1;
        let check = false
        array.forEach((value) => {
            if (value === number)
                check = true;
        })

        if (!check) {
            array.push(number)
        }

    }
    return array;
}





function createGrid() {
    const randomNumbers = getRandomNumbers(100)
  this.setAttribute("disabled", "");
  console.log("entrato");
  for (let i = 1; i <= 100; i++) {
    const cell = createCell(i);
    grid.append(cell);
  }
}

function clickedColor() {
   this.classList.add((parseInt(this.innerText) % 2 === 0)? "pari" : "dispari")
 }


const createCell = (cellContent) => {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.append(cellContent)
    cell.addEventListener("click", clickedColor)
  return cell;
};




button.addEventListener("click", createGrid);
