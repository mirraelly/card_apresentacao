
// function transformCard() {

//     let content = document.getElementById('content');
//     let bioParagraph = document.createElement('p');
//     const returnLink = document.createElement('a');

//     bioParagraph.textContent = "Este é o texto"
//     returnLink.textContent = "Retornar"

//     content.style.display = 'none';
//     content.classList.add('presentation');

//     content.appendChild(bioParagraph);
//     content.appendChild(returnLink);

// }

// function removeCard() {
//     content.classList.remove(''); // retornar para minha foto
// }




// function transformCard() {
//     let content = document.getElementById('content');
//     content.textContent = `Olá! Tudo bem? Meu nome é Mirraely e sou desenvolvedora front-end. 
//             Sou uma mente curiosa e apaixonada pelo conhecimento, pelas pessoas e pela tecnologia; 
//             um ser humano em constante desenvolvimento e em busca de soluções.
//             Aqui estão alguns dos meus projetos e meios para um futuro contato. Obrigada por sua visita e até breve!👋`;
            
//     // content.style.display = 'block'; 
//     content.classList.add('presentation');
//     content.style.display = 'flex'; // mostrar conteúdo sobreposto? 
// }




function transformCard(card.fill, data.fill) { 
    let showAbout = document.getElementById('showAbout');

    showAbout.textContent = card.myBio;
    showAbout.style.display = 'block';

}

function removeCard() {
    let removeAbout = document.getElementById('removebout');
    showAbout.style.display = 'none';
}

// function transformCard(card) {
//     let showAbout = document.getElementById('showAbout');

//     showAbout.innerHTML = `
//         <p>${data.card.myBio}</p>
//         <button onclick="removeCard()">x</button>
//     `;
//     showAbout.style.display = 'block'; 
// } 

// function removeCard() {
//     let showAbout = document.getElementById('showAbout');
//     showAbout.style.display = 'none'; 
// }