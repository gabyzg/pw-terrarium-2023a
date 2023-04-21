//hacinedo que la plnata 1 de mi documento
//sea arrastrable
dragElement(document.getElementById("plant1"));
dragElement(document.getElementById("plant2"));
dragElement(document.getElementById("plant3"));
dragElement(document.getElementById("plant4"));
dragElement(document.getElementById("plant5"));
dragElement(document.getElementById("plant6"));
dragElement(document.getElementById("plant7"));
dragElement(document.getElementById("plant8"));
dragElement(document.getElementById("plant9"));
dragElement(document.getElementById("plant10"));
dragElement(document.getElementById("plant11"));
dragElement(document.getElementById("plant12"));
dragElement(document.getElementById("plant13"));
dragElement(document.getElementById("plant14"));

//implementar la funcion dragelement

function dragElement(terrariumElement){
  //CReando variables que controlan las posiciones 
  //iniciales y finales
  let pos1 = 0,
  pos2 =0,
  // pos3 graba posiscion x del mouse al momento de hacer
  // onpointerdown a un elemento 
  
  pos3 =0,
   // pos4 graba posiscion y del mouse al momento de hacer
  // onpointerdown a un elemento 
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
    //vamos a guardar la psocion inicial 
    // que se tiene al momento de hacer e
    // el pointerDrag 
    pos3 = event.clientX;
    pos4 = event.clientY;
    // REGISTRANDO HANDlers para eventos 
    // de arrastre
    document.onpointermove = elementDrag;
    //Registrando handler para evento 
    // de liberacion del botton 
    document.onpointerup = stopElementDrag;

    //creando las funciones 
function elementDrag(event){
    //calcular la nueva posicion 
    //calculando diferencia
    pos1 = pos3 - event.clientX; 
    pos2 = pos4 - event.clientY;
    //actulizamos posiciones orginales 
    pos3 = event.clientX;
    pos4 = event.clientY

    // mover la imgane con las posiciones 
    // calculadas de modo que la imagaen quede 
    // en la nueva posicion del mouse
    terrariumElement.style.left = `${terrariumElement.offsetLeft - pos1}px`;
    terrariumElement.style.top = `${terrariumElement.offsetTop - pos2}px`;

}
function stopElementDrag(event){
  // Eliminando handler para evento
  // de arrastre
  document.onpointermove = null;
   // Eliminando handler para evento
   // de liberación del boton
  document.onpointerup = null;

  

}
   

   
}

  
}