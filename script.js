 var num = 0;
 const width = window.innerWidth;
 var imagen = [document.getElementById("Imagen"), document.getElementById("Imagen1"), document.getElementById("Imagen2"), document.getElementById("Imagen3"), document.getElementById("Imagen4"), document.getElementById("Imagen5"), document.getElementById("Imagen6"), document.getElementById("Logo")];
 var h1 = [document.getElementById("h1_1"), document.getElementById("h1_2"), document.getElementById("h1_3"), document.getElementById("h1_4"), document.getElementById("h1_5"), document.getElementById("h1_6"), document.getElementById("h1_7"), document.getElementById("h1_8")];
 var h2 = [document.getElementById("h2_1"), document.getElementById("h2_2"), document.getElementById("h2_3"), document.getElementById("h2_4"), document.getElementById("h2_5"), document.getElementById("h2_6"), document.getElementById("h2_7"), document.getElementById("h2_8"), document.getElementById("h2_9"), document.getElementById("h2_10")];
 var pos_inicial = 0;
 var mv = true;

 window.onkeyup = function(e) {
     if (mv == true) {
         if (e.keyCode == 39) {
             num--;
             mv = false;
         }
         if (e.keyCode == 37) {
             num++;
             mv = false;
         }

     }


 }

 function move() {
     if (num > -7 && num < 1) {
         var pos_final = width * num;
         if (pos_inicial < pos_final) {
             pos_inicial += 5;
         }
         if (pos_inicial > pos_final) {
             pos_inicial -= 5;
         }
     } else if (num > -7) {
         mv = true;
         num = num - 1;
     } else if (num < 1) {
         mv = true;
         num = num + 1;
     }

     if (pos_inicial - pos_final <= 0 && pos_inicial - pos_final >= -5) {
         pos_inicial = pos_final + 1
         mv = true;
     }
     
     imagen[0].style.left = pos_inicial + "px";
     imagen[1].style.left = pos_inicial + width + "px";
     imagen[2].style.left = pos_inicial + width * 2 + "px";
     imagen[3].style.left = pos_inicial + width * 3 + "px";
     imagen[4].style.left = pos_inicial + width * 4 + "px";
     imagen[5].style.left = pos_inicial + width * 5 + "px";
     imagen[6].style.left = pos_inicial + width * 6 + "px";
     imagen[7].style.left = (pos_inicial + width - 200) + "px";
     h1[0].style.left = (pos_inicial + width / 2) + "px";
     h2[0].style.left = (pos_inicial + width / 2) + "px";
     h1[1].style.left = (pos_inicial + width + width / 2) + "px";
     h2[1].style.left = (pos_inicial + width + width / 2) + "px";
     h1[2].style.left = (pos_inicial + width * 2 + width / 2) + "px";
     h2[2].style.left = (pos_inicial + width * 2 + width / 2) + "px";
     h1[3].style.left = (pos_inicial + width * 2 + width / 2) + "px";
     h2[3].style.left = (pos_inicial + width * 2 + width / 2) + "px";
     h1[4].style.left = (pos_inicial + width * 3 + width / 2) + "px";
     h2[4].style.left = (pos_inicial + width * 3 + width / 2) + "px";
     h2[5].style.left = (pos_inicial + width * 3 + width / 2) + "px";
     h1[5].style.left = (pos_inicial + width * 4 + width / 2) + "px";
     h2[6].style.left = (pos_inicial + width * 4 + width / 2) + "px";
     h2[7].style.left = (pos_inicial + width * 4 + width / 2) + "px";
     h1[6].style.left = (pos_inicial + width * 5 + width / 2) + "px";
     h2[8].style.left = (pos_inicial + width * 5 + width / 2) + "px";
     h2[9].style.left = (pos_inicial + width * 5 + width / 2) + "px";
     h1[7].style.left = (pos_inicial + width * 6 + width / 2) + "px";


 }
 setInterval(move, 7);
