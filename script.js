const submitButton = document.querySelector('section > button');
const numButtons = document.querySelectorAll('.num-buttons > button')

// Event Listeners
submitButton.addEventListener('click', submit);
numButtons.forEach(button => {
  button.addEventListener('click', addActiveClass)
})

// Funtions
function submit() {
  const active = document.querySelector('.active')
  if(active !== null) {
    document.querySelector('main > section:last-child').style.display = 'grid'
    document.querySelector('main > section:first-child').style.display = 'none'

    document.querySelector('h3 > span').innerHTML = active.textContent;

  }
}

function addActiveClass() {
  numButtons.forEach(button => {
  button.classList.remove('active');
    
  });
  this.classList.add('active');
}