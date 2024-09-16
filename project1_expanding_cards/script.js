const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
   // console.log(panel)
    panel.addEventListener('click', ()=> {
        // remove the active class
        removeActiveClass()
        // make the current clicked panel as active
        panel.classList.add('active')
    })
})

// function which get rid of current active class
function removeActiveClass() {
    panels.forEach((panel)=> {
        panel.classList.remove('active')
    })
}
//console.log(panels[0])