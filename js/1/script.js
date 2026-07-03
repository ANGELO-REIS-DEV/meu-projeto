const meusprojetos = [
    {
        titulo:"projeto 1 -portifolio",
        descrição:"projeto feito com HTML,CSS e javascript",
        link:"https://github.com/"
    },
    {
        titulo:"projeto 02 - segundo portifolio",
        descrição:"portifolio bem mais estrturado",
        link:"https://github.com/"
    }
];
const containerProjetos = document.querySelector('#projetos');

containerProjetos.innerHTML='<h2>meus projetos</h2>'

meusprojetos.forEach(projeto => {
    const cardHTML = `
      <article class="card-projeto">
       <h3>${projeto.titulo}</h3>
       <p>${projeto.descrição}</p>
       <a href="${projeto.link}" target="_blank">acessar no github</a>
      </article>
    `;
    containerProjetos.innerHTML += cardHTML;
});
const formulario = document.querySelector('#contatos'); 

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();  
    alert('Mensagem enviada com sucesso!');  
    formulario.reset(); 
});

const btnTema = document.querySelector('#btn-tema');
const body = document.body;


btnTema.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('tema', 'escuro');
    } else {
        localStorage.setItem('tema', 'claro');
    }
});
const temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'escuro') {
    body.classList.add('dark-theme');
}



