
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
            const myDiv = document.querySelector('#myDiv')
            
            data.forEach( async(element) => {

                const container = document.createElement('div')
                const name = document.createElement('h1')
                const description = document.createElement('p')
                const price = document.createElement('span')

                name.innerHTML = await element.name
                description.innerHTML = await element.description
                price.innerHTML = await element.price

                container.append(name, description, price)
                myDiv.append(container) 
            });

        }
    }
}
xhr.open('GET', "https://appworks-school.github.io/Remote-Aassigiment-Data/products")
xhr.send()