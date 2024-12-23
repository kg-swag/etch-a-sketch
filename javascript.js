const canvas = document.querySelector("#canvas");
const clear = document.querySelector('#clear');
const submit = document.querySelector('#submit');
let gridDimensions = document.querySelector('#gridSize').value;
let color = '#000000';


// create canvas using input number
function activateCanvas(gridSize){
    for (i=0; i < (gridSize * gridSize); i++){
        let squareDivs = document.createElement('div');
        squareDivs.className = 'square-div';
        let squareSize = 500 / gridSize;
        squareDivs.style.width = `${squareSize}px`;
        squareDivs.style.height = `${squareSize}px`;
        canvas.appendChild(squareDivs);

        //change input color
        document.querySelector('#color').addEventListener('input', function(){
            color = this.value;
        })
        
        //hover and change cell colors
        squareDivs.addEventListener("mouseover", () => {
            squareDivs.style.backgroundColor = color;
            squareDivs.style.borderColor = color;
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


