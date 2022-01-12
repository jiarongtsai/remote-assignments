const welcomeDiv = document.querySelector('.welcome')
const welcomeMsg = welcomeDiv.children[0]

const showButton = document.querySelector('#showContentBox')
const contentBoxWrapper_fixed = document.querySelectorAll('.content-box-wrapper')[1] 

const addButton = document.querySelector('#addContentBox')
const contentBoxWrapper = document.querySelector('.content-box-wrapper')

let newContentBox, newText, count, showContent, trackWelcome
count = 5
showContent = false
trackWelcome = true

//rq 1
function changeText(){
    if(trackWelcome){
        welcomeMsg.innerHTML = "Have a Good Time!"
        trackWelcome = false
    }else{
        welcomeMsg.innerHTML = "Welcome Message"
        trackWelcome = true
    }   
}

//rq 2

//rq 3
function toggleContentBox(){
    contentBoxWrapper_fixed.classList.toggle('display-none')
    
    if(!showContent){
        showButton.innerText = 'Hide Boxes'
        showContent = true
    }else{
        showButton.innerText = 'Show More Boxes'
        showContent = false
    }
    
}

//rq 3.5
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
showButton.addEventListener('click', toggleContentBox)
addButton.addEventListener('click', addContentBox)
