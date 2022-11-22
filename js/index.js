document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", function (event) {
        event.preventDefault();
        let e = event.path.filter(a => a.className == 'card');
        document.getElementById('animal').innerText = e[0].innerText.split('-')[0].trim();
        Array.from(e[0].children).filter(a => a.nodeName == 'AUDIO' || a.className == 'text')
            .forEach(e => {
                if (e.nodeName == 'AUDIO') {
                    e.play();
                } else {
                    document.getElementById('sonidoAnimal').innerText = e.children.animal_sound.value;
                    document.getElementById('tipoVoz').innerText = e.children.type_sound.value;
                }
            })
        document.getElementById('superNina').style = 'display:grid';
        document.getElementById('ninaArriba').style = 'display:none';
        document.getElementById('text_Animal').style = 'display:block';
        document.getElementById('text_inicial').style = 'display:none';
        // document.getElementById('mostradorContainer').style = 'position: relative';
    });
});

window.addEventListener("load", function() {
    document.getElementById('ninaArriba').style = 'display:grid';
});