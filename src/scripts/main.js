document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('formulario').addEventListener('submit',function(evento){
        evento.preventDefault(evento);

        let valorT = document.getElementById('input-valor-total').value;
        let valorM = document.getElementById('input-valor-M').value;

        let valorD = valorT / valorM;

        document.getElementById('resultado-valor-D').innerText = valorD;
        document.getElementById('resultado-valor-Meses').innerText = valorM;
        document.getElementById('resultado-valor-Total').innerText = valorT;
        document.querySelector('.resultado').style.display = 'block';
    })
})

    //digitador

    var string = "Olá, Seja muito Bem-vindo ao simulador de finanças do melhor aluno da EBAC."; /* type your text here */
    var array = string.split("");
    var timer;

    function frameLooper () {
    if (array.length > 0) {
        document.getElementById("text").innerHTML += array.shift();
    } else {
        clearTimeout(timer);
    }
    loopTimer = setTimeout('frameLooper()',70); /* change 70 for speed */

    }
    frameLooper();

    // scroll    
    function boxTop(idBox) {
        var boxOffset = $(idBox).offset().top;
        return boxOffset;
    }
    
    /*$(document).ready(function() {
        var $target = $('.anime'),
                animationClass = 'anime-init',
                windowHeight = $(window).height(),
                offset = windowHeight - (windowHeight / 4);
    
        function animeScroll() {
            var documentTop = $(document).scrollTop();
            $target.each(function() {
                if (documentTop > boxTop(this) - offset) {
                    $(this).addClass(animationClass);
                } else {
                    $(this).removeClass(animationClass);
                }
            });
        }
        animeScroll();
    
        $(document).scroll(function() {
            setTimeout(function() {animeScroll()}, 150);
        });
    });*/