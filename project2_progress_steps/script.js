const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

// in case next button is clicked
next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length){
        currentActive = circles.length
    }
    //console.log(currentActive)
    update()
})

// in case prev button is clicked
prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1){
        currentActive = 1
    }
    //console.log(currentActive)
    update()
})

// update function which runs when prev or next buttons are clicked
function update() {
    // making circles turn into green
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')

    // making line turn into green
    progress.style.width = ((actives.length - 1) / (circles.length-1)) * 100 + '%'
    //console.log((actives.length / circles.length) * 100)

    // check where the current active is and change enabled or disabled the prev and next buttons
    if(currentActive === 1) {
        prev.disabled = true;
    } else if(currentActive===circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}