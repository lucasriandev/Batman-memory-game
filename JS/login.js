const input = document.querySelector('.login_input')
const button = document.querySelector('.login_button')
const form = document.querySelector('.login-form')

//target é para pegar o valor do usuario
input.addEventListener('input', function({target}){
    
    if(target.value.length > 2){
        button.removeAttribute('disabled')
        return
    } 
    button.setAttribute('disabled', '')
})

form.addEventListener('submit', function(event){
    event.preventDefault()
    
    localStorage.setItem('Player', input.value)
    //jogando o usuario para outra pagina
    window.location = 'PAGINAS/jogo.html'
})
