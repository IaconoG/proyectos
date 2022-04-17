const btnModal = document.getElementById('modal-btn')
const modal = document.querySelector('.modal-overlay')
const btnClose = document.querySelector('.close-btn')


btnModal.addEventListener('click', () => {
  modal.classList.add('open-modal')
})

btnClose.addEventListener('click', () => {
  modal.classList.remove('open-modal')
})

const paletaColores = ['#babdb7', '#b1b1ae', '#969994', '#748978', '#7d8261', '#d2c4b1', '#ab9378','#5b3a20', '#452717', '#ca9f72', '#8e4a2a', '#201b15'];

const contenerColores = document.getElementById('colors-container')





paletaColores.forEach(hex => {
  let newElement = document.createElement('div')
  contenerColores.appendChild(newElement)
  let newTextElement = document.createTextNode(hex)  
  newElement.appendChild(newTextElement)

  newElement.classList.add("color")
  newElement.id = `color-${hex}`;

  newElement.style.backgroundColor = hex
  if (hex[1] <= 5)
    newElement.style.color = '#d2c4b1' 

});

