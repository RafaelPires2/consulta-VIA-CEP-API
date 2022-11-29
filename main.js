const botao = document.getElementById("botao")

const cep = document.getElementById('cep');

const renderResults = document.getElementById('renderResults');

const mensagemErro = 'Digite um CEP válido exemplo: "01153000"' 



function getData(){
  cep.addEventListener('input', () =>{
    if(cep.value.length > 8){  
      cep.value = cep.value.substring(0, 8);
    }
  })

  botao.addEventListener("click",() => {
    const url = `https://viacep.com.br/ws/${cep.value}/json/`
    
    if(cep.length == 8){
      renderResults.innerHTML = `${mensagemErro}` 
      renderResults.style.color = 'red'
      cep.value = ""          
   } 

    axios.get(url)
    .then(res => {
      const data = res.data 
      
      if(data.erro === true){
        
        renderResults.innerHTML = `${mensagemErro}` 
        renderResults.style.color = 'red'

      }else{
          renderResults.innerHTML = `
          Endereço: ${data.logradouro} -
          Bairro: ${data.bairro} -
          CEP: ${data.cep} -
          Cidade: ${data.localidade} -
          Estado: ${data.uf}
          `
          renderResults.style.color = 'green'
          cep.value = ""

      }

    })
      .catch(error => console.log(error))
})
    

}
getData()










