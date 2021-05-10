let color;
let colors = document.querySelectorAll('.list-colors li');
let lousa = [];
let numberColors = 9 * 5
//let numberColors = 1000 * 5
let pintando = false

const handleChoiseColor = (e) => {
  color = e.style.background
  document.querySelector('.choisedColor span').style.background = color
}

const handleClickLousa = (e) => {
  e.style.background = color
}

const handleOverLousa = (e) => {
  console.log(e)
  console.log(pintando)
    e.addEventListener('mousedown', () => pintando = true)
    e.addEventListener('mouseup', () => pintando = false)
    e.addEventListener('mousemove', () => {
      if(pintando){
        handleClickLousa(e)
      }
    })
  
}

const cleanLousa = () => {
  lousa.forEach(e => e.style.background = '')
}

const updateLousa = () => {
  for(i=0;i < numberColors; i++){
    let li = document.createElement('li')
    document.querySelector('.lousa').appendChild(li)
    lousa.push(li)
  }
}

window.addEventListener('load', () => {
  updateLousa()
  colors.forEach((e) => e.addEventListener('click', () => handleChoiseColor(e)))
  lousa.forEach((e) => e.addEventListener('click', () => handleClickLousa(e)))
  lousa.forEach((e) => e.addEventListener('mouseover', () => handleOverLousa(e)))
  
  /*
  lousa.forEach(e => e.addEventListener('mousedown', () => pintando = true))
  lousa.forEach(e => e.addEventListener('mouseup', () => pintando = false))*/
  document.querySelector('.button button').addEventListener('click', cleanLousa)
})

