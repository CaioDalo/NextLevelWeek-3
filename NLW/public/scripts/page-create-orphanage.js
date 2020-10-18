//create map
const map = L.map('mapid', {
    center: [-23.2236931,-45.9032577],
    zoom: 13
});

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker

// create and add marker

map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat
    document.querySelector('[name=lng]').value = lng

    //clear marker
    marker && map.removeLayer(marker)


    //add icon layer
    marker = L.marker([lat, lng], { icon }).addTo(map)
})

//photos upload
function addPhotoField() {
    //pegar container de fotos #images
    const container = document.querySelector('#images')
    //pegar container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //verifica se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if (input.value == "") {
        return 
    }

    //limpar o campo antes de adicionar ao container de imagens
    newFieldContainer.children[0].value = ''

    //adicionar o clone ao container de imagens
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length <= 1) {
        span.parentNode.children[0].value = ''
        return
    }    

    //deletar o campo
    span.parentNode.remove()
}

//select yes or no
function toggleSelect(event) {
    //retirar a classe .active dos botoes
    document.querySelectorAll('.button-select button')
    .forEach(button => button.classList.remove('active'))

    //colocar a classe .active
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open-on-weekends"]')

    //verificar se sim ou não
    input.value = button.dataset.value
}
