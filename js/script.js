let color;
let colors = document.querySelectorAll('.list-colors li');
let lousa = [];
let numberColors = 7 * 5

const handleChoiseColor = (e) => {
  color = e.style.background
  document.querySelector('.choisedColor span').style.background = color
}

const handleChangeRange = (e) => {
  numberColors = e.target.value * (e.target.value - 2)
  changeLiWidth()
  updateLousa()
}

const handleClickLousa = (e) => {
  e.style.background = color
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
  range.addEventListener('input', handleChangeRange)
  document.querySelector('.button button').addEventListener('click', cleanLousa)
})

