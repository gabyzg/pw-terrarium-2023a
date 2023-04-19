//hacinedo que la plnata 1 de mi documento
//sea arrastrable
dragElement(document.getElementById("plant1"));

//implementar la funcion dragelement

function dragElement(terrariumElement){
  //CReando variables que controlan las posiciones 
  //iniciales y finales
  let pos1 = 0,
  pos2 =0,
  pos3 =0,
  pos4 =0

  //Registrar un evento 
  terrariumElement.onpointerdown = pointerDrag

function pointerDrag(event){
    //previene todo comportamiento que tenga por defecto 
    // Previene todo comportamiento
        // que tenga por defecto
        // el evento en cuestion en
        // mi documento
    event.preventDefault();
    console.log("+ on pointer down");

}

  
}