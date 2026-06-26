document.getElementById('form-login').addEventListener('submit', async function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    console.log('1. CHEGUEI NO FORMULARIO')

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    console.log('2. EMAIL:', email, 'SENHA:', password)

    const usuario = await window.api.login(email, password)
})