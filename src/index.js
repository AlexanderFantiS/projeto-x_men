
const personagens = document.querySelectorAll('.Personagem');

personagens.forEach((Personagem) => {
    Personagem.addEventListener('mouseenter', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }

        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')

        Personagem.classList.add('selecionado')

        const imagemPersonagemGrande = document.querySelector('.personagem-grande')

        const idPersonagem = Personagem.attributes.id.value
        imagemPersonagemGrande.src = `src/img/${idPersonagem}.jpg`

        const nomePersonagem = document.getElementById('nome-personagem')
        nomePersonagem.innerText = Personagem.getAttribute('data-name')

        const descricaoPersonagem = document.getElementById('descricao-personagem')
        descricaoPersonagem.innerText = Personagem.getAttribute('data-description')
    })
})



