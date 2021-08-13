document.getElementById('desliza').addEventListener("mouseenter",()=> {
  document.getElementById('desliza').src = "imagenes/desliza.png";
})
document.getElementById('desliza').addEventListener("mouseleave",()=> {
  document.getElementById('desliza').src = "imagenes/VenAqui.png";
})


document.getElementById('marco').addEventListener("mouseenter",()=> {
  document.getElementById('marco').src = "imagenes/MAR.png";
  document.getElementById('marcotexto').innerHTML = "Marco Arriostrado";
})
document.getElementById('marco').addEventListener("mouseleave",()=> {
  document.getElementById('marco').src = "imagenes/MPE.png";
  document.getElementById('marcotexto').innerHTML = "Marco Perimetral";
})

document.getElementById('circulacion').addEventListener("mouseenter",()=> {
  document.getElementById('circulacion').src = "imagenes/circulacion.jpg";
  document.getElementById('circulacion-text').innerHTML = "Circulacion";
})
document.getElementById('circulacion').addEventListener("mouseleave",()=> {
  document.getElementById('circulacion').src = "imagenes/AXOS.jpg";
  document.getElementById('circulacion-text').innerHTML = "Axonométricas";
})


document.getElementById('photo').addEventListener("mouseenter",()=> {
  document.getElementById('photo').src = "imagenes/FM2.png";
  document.getElementById('photo-caption').innerHTML = "Fachada Norte-Oriente";
})
document.getElementById('photo').addEventListener("mouseleave",()=> {
  document.getElementById('photo').src = "imagenes/FM3.png";
  document.getElementById('photo-caption').innerHTML = "Fachada Norte-Poniente";
})
