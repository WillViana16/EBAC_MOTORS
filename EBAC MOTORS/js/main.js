$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true,
        arrows:false
    })

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email:true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required:true
            },
            veiculoDeInteresse: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome.',
            email: 'Por favor, insira seu e-mail.',
            telefone: 'Por favor, insira seu numero de telefone.',
            mensagem: 'Por favor, digite sua mensagem.',
            veiculoDeInteresse: 'Por favor, insira seu carro de interesse.',
        },
        submitHandler: function(form) {
            
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }           
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})