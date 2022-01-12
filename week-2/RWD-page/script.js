const welcomeDiv = document.querySelector('.welcome')
const welcomeMsg = welcomeDiv.children[0]

const addButton = document.querySelector('#addContentBox')
const contentBoxWrapper = document.querySelector('.content-box-wrapper')

let newContentBox, newText, count
count = 5

function changeText(){
    //could I toggle the text message
    welcomeMsg.innerHTML = "Have a Good Time!"
}

function addContentBox(){
    //create a new Content Box
    newContentBox = document.createElement('div')
    newContentBox.classList.add('content-box')

    newText = document.createElement('p')
    newText.innerText = "Content Box " + count
    //count the number of the box
    count += 1

    newContentBox.appendChild(newText)
    
    //append to Content Box Wrapper
    contentBoxWrapper.appendChild(newContentBox)
}




welcomeDiv.addEventListener('click', changeText)
addButton.addEventListener('click', addContentBox)