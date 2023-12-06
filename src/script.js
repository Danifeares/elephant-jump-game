const elephant = document.querySelector('.elephant')
const obstacle = document.querySelector('.obstacle')

const jump = () => {
  elephant.classList.add('jump')

  setTimeout(() => {

    elephant.classList.remove('jump')

  }, 500)
}

const loop = setInterval(() => {
  
  const obstaclePosition = obstacle.offsetLeft;
  const elephantPosition = +window.getComputedStyle(elephant).bottom.replace('px', '')

  if (obstaclePosition <= 120 && obstaclePosition > 25 && elephantPosition < 80) {
    obstacle.style.animation = 'none'
    obstacle.style.left = `${obstaclePosition}px`
 
    elephant.style.animation = 'none'
    elephant.style.bottom = `${elephantPosition}px`

    elephant.src = './images/game-over.png'
    elephant.style.width = '140px'
    elephant.style.marginLeft = '40x' 

    clearInterval(loop)
  }

}, 10)

document.addEventListener('keydown', jump)