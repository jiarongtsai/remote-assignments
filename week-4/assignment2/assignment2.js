
/*
function ajax(src, callback){
    // your code here
    const xhr = new XMLhttpRequest
    xhr.onreadystatechange = ()=>{
        if (xhr.readyState === 4) {   // xhrRequest.DONE == 4
            if (xhr.status === 200) {
                document.getElementById("myDiv").innerHTML = xhr.responseText;
            }
         }
    }
    xhr.open('GET', src)
    xhr.send()
}
function render(data){
    // your code here.
    // document.createElement() and appendChild() are preferred. No innerHTML or 
    // something alike
    console.log(data)
} 
    
ajax(
    "https://appworks-school.github.io/Remote-Aassigiment-Data/products", 
    function(response){
        render(response); 
    }
); // you should get product information in JSON format and render data in the page
*/


const xhr = new XMLHttpRequest()

xhr.onreadystatechange = ()=>{
    if (xhr.readyState === 4) {  
        if (xhr.status === 200) {
            document.getElementById("myDiv").innerHTML = xhr.responseText
        }
    }
}
xhr.open('GET', "https://appworks-school.github.io/Remote-Aassigiment-Data/products")
xhr.send()