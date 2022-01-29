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
    data.forEach( (element) => {
        const container = document.createElement('div')
        const name = document.createElement('h1')
        const description = document.createElement('p')
        const price = document.createElement('span')

        name.textContent = element.name
        description.textContent = element.description
        price.textContent = `$${element.price}`

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



