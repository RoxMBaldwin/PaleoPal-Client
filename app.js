$(document).ready(function() {
  //console.log('working')
  $.get(baseURL)
    .then(startClick)
})

//const baseURL = 'https://sleepy-fjord-67656.herokuapp.com/PaleoPal/'
const baseURL = 'http://localhost:3000/PaleoPal/'

function getDinos(event, data){
  //console.log(data[1])
  $('.info').empty()
  
  for(var i = 0; i < data.length; i++){
    console.log(data[i].dinoName)

    let name = data[i].dinoName
    let nameGroup = `
    <div class = "${name}">
      <h3>${name}</h3>
    </div>`

    $('.info').append(nameGroup)
  }
}

function startClick(data){
  console.log(data)
  $('button.getAllButton').click((event) => {
    getDinos(event, data)
  })
}
