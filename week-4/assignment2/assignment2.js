const myDiv = document.getElementById("myDiv")

function ajax(src, callback){
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange =()=>{
        if (xhr.readyState === 4) {  
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText)
                callback(data)
            }
        }
    }
    xhr.open('GET', src)
    xhr.send()
}
function render(data){
    data.forEach( async(element) => {
        const container = document.createElement('div')
        const name = document.createElement('h1')
        const description = document.createElement('p')
        const price = document.createElement('span')

        name.textContent = await element.name
        description.textContent = await element.description
        price.textContent = await element.price

        container.append(name, description, price)
        myDiv.appendChild(container) 
    })
} 
    
ajax(
    "https://appworks-school.github.io/Remote-Aassigiment-Data/products", 
    function(response){
        render(response)
    }
)



