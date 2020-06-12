/*
Definicion de variable de control de tiempo 
funciones para manejo de forma color dimension

*/
let start = new Date().getTime(); //Alcance global

function getRandomColor() {

    let letters = '0123456789ABCDEF'.split('');

    let color = '#';

    for (var i = 0; i < 6; i++) {

        color += letters[Math.floor(Math.random() * 16)];

    }

    return color;

}

function appearShape() 
{
    let top = Math.random() * 400;
    
    let left = Math.random() * 400;

    let width = (Math.random() * 200) + 100;

    if (Math.random() > 0.5) {

        document.getElementById("shape").style.borderRadius = '50%';

    } else {

        document.getElementById("shape").style.borderRadius = '0';

    }

    document.getElementById("shape").style.backgroundColor = getRandomColor();

    document.getElementById("shape").style.width = `${width}px`;

    document.getElementById("shape").style.height = `${width}px`;

    document.getElementById("shape").style.top = `${top}px`;

    document.getElementById("shape").style.left = `${left}px`;
    document.getElementById('shape').style.display = 'block';

    start = new Date().getTime();

}

/*
Segunda parte donde se maneja todo lo referente al estilo display 
tiempo de ejecucion


*/


function appearAfterDelay()
{
    setTimeout(appearShape, Math.random() * 2000);
}

appearAfterDelay();

document.getElementById('shape').onclick = function()
{
    document.getElementById('shape').style.display = 'none';

    let end = new Date().getTime();

    let difference = (end - start)/1000;

    document.getElementById('reactionTime').innerHTML = `${difference}s`;

    appearAfterDelay()

    //setTimeout(appearShape,2000);
}
