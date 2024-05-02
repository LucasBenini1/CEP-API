const form = document.querySelector("form")
const cepInput = document.querySelector("#cep")
const addressSpan = document.querySelector("#address")

form.addEventListener("submit", async(event) => {
    event.preventDefault()
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cepInput.value}/json`)
        const data = await response.json()
        if(data.erro){
            throw new Error()
        }
          addressSpan.innerHTML = 
          `${data.logradouro}<br>
          Bairro: ${data.bairro}<br> 
          UF: ${data.localidade} - ${data.uf}<br>
          DDD: ${data.ddd}`
          addressSpan.style.display = 'block'
    } catch (error) {
        addressSpan.innerHTML = "CEP invalido ou não encontrado!"
        addressSpan.style.display = 'block'
    }
})