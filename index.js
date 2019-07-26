import html2canvas from 'html2canvas';
let div= document.querySelector("#Grafica img");
let canvasPromise = html2canvas(div ,{allowTaint: true});
canvasPromise.then(canvas => {
    document.body.appendChild(canvas)
    canvas.toDataURL();
});
