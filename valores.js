let values = ['Amor','Paciencia', 'Tolerancia','Honestidad','Respeto','Trabajo en equipo'];

const values = document.getElementsByClassName("values");
for(x=0; x<values.length;x++){
    text= values[x]
    
}
function slideShow(){
    setTimeout(slideShow, 2500);
    var x;
    const img = document.getElementsByClassName("slider");
    for(x = 0; x < img.length; x++){
      img[x].style.display = "none";
    }
    indexValue++;
    if(indexValue > img.length){indexValue = 1}
    img[indexValue -1].style.display = "block";
  }
  slideShow();