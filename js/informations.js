// Show datas
async function loadData() {
    try {
        const response = await fetch('./assets/data.json');
        const data = await response.json();

        fill(data.commonItems, data.ptCard);

        // Change language
        document.getElementById('languages').addEventListener('change', function () {
            let languagenOptions = this.value;
            switch (languagenOptions) {
                case 'pt':
                    fill(data.commonItems, data.ptCard);
                    break;
                case 'en':
                    fill(data.commonItems, data.enCard);
                    break;
                case 'es':
                    fill(data.commonItems, data.esCard);
                    break;
                case 'fr':
                    fill(data.commonItems, data.frCard);
                    break;
                default:
                    window.location.href = '/';
            }
        });

    } catch (error) {
        console.error('Erro ao carregar dados:', error);
    }
}

loadData();

function fill(commonItems, card) {
    document.getElementById('photo').src = commonItems.photo;
    document.getElementById('avatar').src = commonItems.avatar;
    document.getElementById('name').innerHTML = commonItems.name;
    document.getElementById('devSkill').innerHTML = card.devSkill;
    // document.getElementById('techUxSkill').innerHTML = card.techUxSkill;
    document.getElementById('lawTourismSkill').innerHTML = card.lawTourismSkill;
    document.getElementById('supervisorSkill').innerHTML = card.supervisorSkill;
    document.getElementById('close').innerHTML = commonItems.x;

    document.getElementById('pt').innerHTML = commonItems.pt;
    document.getElementById('en').innerHTML = commonItems.en;
    document.getElementById('es').innerHTML = commonItems.es;
    document.getElementById('fr').innerHTML = commonItems.fr;

    document.getElementById('myBio').textContent = commonItems.myBio;
    document.getElementById('myBio').innerHTML = commonItems.myBio;
    document.getElementById('myBio').innerText = card.sobreMim;
    document.getElementById('portfolioLink').innerHTML = card.portfolio;
    document.getElementById('portfolioLink').href = commonItems.portfolioLink;
    document.getElementById('linkedinLink').innerHTML = card.linkedin;
    document.getElementById('linkedinLink').href = commonItems.linkedinLink;
    document.getElementById('githubLink').innerHTML = card.github;
    document.getElementById('githubLink').href = commonItems.githubLink;
    document.getElementById('instagramLink').innerHTML = card.instagram;
    document.getElementById('instagramLink').href = commonItems.instagramLink;
    document.getElementById('gameDevLink').innerHTML = card.gameDev;
    document.getElementById('gameDevLink').href = commonItems.gameDevLink;
    document.getElementById('taskBoardLink').innerHTML = card.taskBoard;
    document.getElementById('taskBoardLink').href = commonItems.taskBoardLink;
    document.getElementById('raizesDaCuraLink').innerHTML = card.raizesDaCura;
    document.getElementById('raizesDaCuraLink').href = commonItems.raizesDaCuraLink;
    document.getElementById('nasaHackathonLink').innerHTML = card.nasaHackathon;
    document.getElementById('nasaHackathonLink').href = commonItems.nasaHackathonLink;
    document.querySelector('.newContent').innerHTML = card.myBio;
}

// Show about 
function transformCard() {
    document.getElementById('sobreMim').addEventListener('click', function () {
        document.querySelector('.profile-container').style.display = 'none';

        document.getElementById('showAbout').style.display = 'flex';
    });
}

transformCard();

// Remove about
function removeCard() {
    document.getElementById('showAbout').style.display = 'none';
    document.querySelector('.profile-container').style.display = 'block';
}