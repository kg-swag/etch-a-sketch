const canvas = document.querySelector("#canvas");
const clear = document.querySelector('#clear');
const submit = document.querySelector('#submit');
let gridDimensions = document.querySelector('#gridSize').value;
let ifClick = false;
let color = '#000000';


// create canvas using input number
function activateCanvas(gridSize){
    for (i=0; i < (gridSize * gridSize); i++){
        let squareDivs = document.createElement('div');
        squareDivs.className = 'square-div';
        let squareSize = 100 / gridSize;
        squareDivs.style.width = `${squareSize}%`;
        squareDivs.style.height = `${squareSize}%`;
        canvas.appendChild(squareDivs);

        //change input color
        document.querySelector('#color').addEventListener('input', function(){
            color = this.value;
        })
        
        squareDivs.addEventListener("mousedown", (event) => {
            if (event.button === 0) {
                ifClick = true;
            }
        })

        //hover and change cell colors
        squareDivs.addEventListener("mouseover", () => {
            if (ifClick){
                squareDivs.style.backgroundColor = color;
                squareDivs.style.borderColor = color;
            }
        })

        squareDivs.addEventListener("mouseup", (event) => {
            ifClick = false;
        })
    }
}

//reset canvas to white
function clearCanvas(){
    squareDivs = canvas.children;
    childrenLength = squareDivs.length;

    for(i = 0; i < childrenLength; i++){
        squareDivs[i].style.backgroundColor = "white";
        squareDivs[i].style.borderColor = "lightgrey";
    }
}

//clears canvas with clear canvas button
clear.addEventListener('click', () => clearCanvas())

//resets the canvas with new grid size
submit.addEventListener('click', () => {
    clearCanvas()
    while (canvas.firstChild){
        canvas.removeChild(canvas.lastChild);
    }
    gridDimensions = document.querySelector('#gridSize').value;
    activateCanvas(gridDimensions);
})

activateCanvas(gridDimensions);


