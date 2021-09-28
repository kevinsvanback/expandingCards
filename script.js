// Get att the panels and store them in a variable
const panels = document.querySelectorAll('.panel')

// Add the class of 'active' on the panel being clicked
panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active');
  })
})

// Remove the 'active' class from every other panel
const removeActiveClasses = () => {
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}