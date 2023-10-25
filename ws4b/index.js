window.onload = () =>{


    
    var divs = document.querySelectorAll('.div');
    for(let i = 0; i<divs.length; i++){
         divs[i].style.backgroundColor=generarColor();
    }

    numAleatorio0y6 = Math.floor(Math.random() * 6);
    divs[numAleatorio0y6].style.backgroundColor=solucion;
    document.getElementById('color').innerHTML=solucion;


    function comprobar(event){
        if (event.target.style.backgroundColor== solucion) {
            for (let i = 0; i < divs.length; i++) {
                divs[i].style.backgroundColor= event.target.style.backgroundColor;
            }
        }


    }

    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click' ,comprobar)
    }



    
    var boton1 = document.getElementById('facil');
    boton1.addEventListener('click', ()=> facil());

    var boton2 = document.getElementById('newColor');
    boton2.addEventListener('click', function(){
        location.reload();
    });

    var boton3 = document.getElementById('dificil');
    boton3.addEventListener('click', function(){
        location.reload();
    })


}


    var solucion = generarColor();

    


    function colorAleatorio(){
        var num = Math.floor(Math.random() * 256);
    
        return num;
    }

    function generarColor(){

        var color = 'rgb('+colorAleatorio()+', '+colorAleatorio()+', '+colorAleatorio()+')';
        return color;
    }

    function facil() {
            generarColor();
            solucion=generarColor();
            document.getElementById('color').innerHTML=solucion;
            var numAleatorio0y3 = Math.floor(Math.random() * 3);
            var divs = document.querySelectorAll('.div');
            for (let i = 0; i < divs.length; i++) {
                divs[i].style.backgroundColor = generarColor();
            }
            divs[3].style.display='none';
            divs[4].style.display='none';
            divs[5].style.display='none';
            divs[numAleatorio0y3].style.backgroundColor = solucion;

            comprobar()
        };
    
    
