import './style.css'

//Obtengo los inputs de texto para posteriormente extraer su informacion
const erInput = document.getElementById('er')
const textoInput = document.getElementById('texto')
const divMsj = document.getElementById('divMsj')
const seleccion = document.getElementById('seleccion')

//creo un parrafo donde avisare si hizop match o no
const parrafoNumCoincidencias = document.createElement('p')
const parrafoPalabrasEncontradas = document.createElement('p')


//obtengo el boton por su id y agrego un eventlistener para que funcione con un click
document.getElementById('analizar').addEventListener('click', function ()
{
  event.preventDefault(); //evita que la pagina se recargue despues de un click
  // Si existe el elemento 'mensaje', borrarlo
  const mensajeExistente = document.getElementById('mensaje');
  if (mensajeExistente) 
  {
    mensajeExistente.remove();
  }
  const mensaje = document.createElement('div')
  mensaje.id = "mensaje"
  divMsj.appendChild(mensaje)

  const cadena = textoInput.value; //creo una constante con el texto del input del texto
  const er = erInput.value;//creo una constante con el texto del input de la expresion regular

  //dependiendo que bandera tenga, sera la epresion regular que te de
  if (seleccion.value === "global"){Agregar(er,cadena,"g")}
  else if (seleccion.value === "insensitive"){Agregar(er,cadena,"gi")}

}
)

// Obtén el botón de limpiar por su id y agrega un event listener para que funcione con un click
document.getElementById('limpiar').addEventListener('click', function ()
{
  event.preventDefault(); // Evita que la página se recargue después de un click
  // Limpia los campos de texto
  erInput.value = '';
  textoInput.value = '';
  // Borra el mensaje de resultado
  parrafoNumCoincidencias.textContent = '';
  parrafoPalabrasEncontradas.textContent = '';
  //si existe el div de mensaje, lo borra
  if(mensaje)
  {
    mensaje.remove()
  }
})

//Funciones
function Agregar(er, cadena, flag){
  let expresionRegular = new RegExp(er, flag)
      if(expresionRegular.test(cadena))
      {
        let coincidencias = cadena.match(expresionRegular)
        let palabrasEncontradas = coincidencias.join(", ")

        parrafoNumCoincidencias.textContent= `Coincidencias: ${coincidencias.length}`//mensaje si se pudo
        parrafoPalabrasEncontradas.textContent = `Palabras Encontradas: ${palabrasEncontradas}`
        mensaje.appendChild(parrafoNumCoincidencias)//agrego el mensaje al html
        mensaje.appendChild(parrafoPalabrasEncontradas)
      }
      else{
        
          parrafoNumCoincidencias.textContent='No hizo match'// mensaje si no se pudo
          mensaje.appendChild(parrafoNumCoincidencias)
      }
}



