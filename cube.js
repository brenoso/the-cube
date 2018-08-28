
function changeColor(){

    unColor();

    let littleCube;

    let topValue = document.getElementById('topSelect').value;
    let leftValue = document.getElementById('leftSelect').value;
    let rightValue = document.getElementById('rightSelect').value;

    if (leftValue > 0)
        for (let i=0; i < leftValue; i++){
            littleCube = '#left' + (i+1);
            $(littleCube).css('background-color', 'green');
        }

    if (topValue > 0)
        for (let i=0; i < topValue; i++){
            littleCube = '#top' + (i+1);
            $(littleCube).css('background-color', 'blue');
        }

    if (rightValue > 0)
        for (let i=0; i < rightValue; i++){
            littleCube = '#right' + (i+1);
            $(littleCube).css('background-color', 'red');
        }
}

function unColor() {

    let littleCube;

    for (let i=0; i < 9; i++){
            littleCube = '#left' + (i+1);
            $(littleCube).css('background-color', 'gray');
    }

    for (let i=0; i < 9; i++){
            littleCube = '#right' + (i+1);
            $(littleCube).css('background-color', 'gray');
    }

    for (let i=0; i < 9; i++){
            littleCube = '#top' + (i+1);
            $(littleCube).css('background-color', 'gray');
    }
}