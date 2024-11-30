$(document).ready(function () {
    $('#cenas #galeria').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
            titleSrc: function(item) {
				return item.el.attr('title');
			}
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    });
    // Mostrar o botão ao rolar a página
    window.addEventListener('scroll', () => {
        const backToTop = document.getElementById('top');
        if (window.scrollY > 300) {
            backToTop.style.display = 'block'; // Exibe o botão
        } else {
            backToTop.style.display = 'none'; // Esconde o botão
        }
    });
    // Rolar para o topo ao clicar no botão
    document.getElementById('top').addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Rola suavemente para o topo
        });
    });
});