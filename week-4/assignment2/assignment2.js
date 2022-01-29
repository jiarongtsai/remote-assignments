
/*
function ajax(src, callback){
    // your code here
}
function render(data){
    // your code here.
    // document.createElement() and appendChild() are preferred. No innerHTML or 
    something alike
} 
    
ajax(
    "https://appworks-school.github.io/Remote-Aassigiment-Data/products", 
    function(response){
        render(response); 
    }
); // you should get product information in JSON format and render data in the page
*/

const myDiv = document.getElementById("myDiv")

const xhr = new XMLHttpRequest()

xhr.onreadystatechange = ()=>{
    if (xhr.readyState === 4) {  
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText)
            console.log(data)
            myDiv.innerHTML = data[0]
        }
    }
}
xhr.open('GET', "https://appworks-school.github.io/Remote-Aassigiment-Data/products")
xhr.send()