const buttons = document.querySelectorAll(".key-container .button");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.textContent)
    })
})

function buttonClicked() {
    document
}