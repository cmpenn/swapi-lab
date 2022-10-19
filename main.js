let button = document.querySelector('button')

let baseURL = 'http://swapi.dev/api/'

function clicked(){
    axios.get(baseURL + 'planets/2')
    .then((response) => {
        for(let i = 0; i < response.data.residents.length; i++){
            console.log(response.data.residents[i])
          axios.get(response.data.residents[i])
          .then((response) => {
            let theResidents = document.createElement('h2')
            theResidents.innerHTML = response.data.name
            document.getElementById('test').appendChild(theResidents)
          })  
        }
    })
    .catch((error) => {
        console.log(error)
    })
    
}

button.addEventListener('click', clicked)