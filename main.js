let body = document.body
let div = document.createElement("div")
let gameArea = document.querySelector(".game")
let btn = document.querySelector(".btn")
let message = document.querySelector(".message")

let score = 0
let gamePlay = false

btn.addEventListener("click", () => {
    if (!gamePlay) {
        gamePlay = true
        gameArea.innerHTML = ""
        message.innerHTML = ""
        guess = 0
        gameMaker()
        btn.innerHTML = "Check"
    }
    else {
        let nums = document.querySelectorAll(".num")
        let guess = 0
        for (let i = 0; i < nums.length; i++) {
            if (nums[i].value == nums[i].correct) {
                nums[i].style.backgroundColor = "green"
                guess++
                message.innerHTML = `<h3>You guessed ${guess} numbers correctly!</h3>`
            }
            else {
                nums[i].style.backgroundColor = (nums[i].value > nums[i].correct) ? "red" : "blue"
            }
            if (guess == nums.length) {
                gameEnd()
            }
        }
    }
})

function gameMaker() {
    for (let i = 0; i < 4; i++) {
        let input = document.createElement("input")
        input.setAttribute("type", "number")
        input.max = 9
        input.min = 0
        input.size = 1
        input.classList.add("input")
        input.classList.add("num")
        input.correct = Math.floor(Math.random() * 10)
        input.value = 0
        input.order = i
        gameArea.appendChild(input)
    }
}

function gameEnd() {
    score++
    btn.innerHTML = "Restart"
    message.innerHTML = `<h3>Your score is ${score}</h3><br/><p>Restart the game</p>`
    gamePlay = false
}
