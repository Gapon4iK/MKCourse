const player1 = {
    name: 'scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['knife', 'hammer'],
    attack: function () {
        console.log(player1.name + ' ' + 'Fight...');
    }
}


const player2 = {
    name: 'sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['knife', 'dagger'],
    attack: function () {
        console.log(player2.name + ' ' + 'Fight...');
    }
}

const arenas = document.querySelector('.arenas');

function createPlayer(player, obj) {
    const $player = document.createElement('div');
    $player.classList.add(player);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $life = document.createElement('div');
    $life.classList.add('life')
    $life.style.width = obj.hp + '%';

    const $name = document.createElement('div');
    $name.classList.add('name')
    $name.innerHTML = obj.name;

    const $img = document.createElement('img');
    $img.src = obj.img;
    const arenas = document.querySelector('.arenas');
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
    $player.appendChild($progressbar);
    $player.appendChild($character);

    arenas.appendChild($player);
};
createPlayer('player1', player1);
createPlayer('player2', player2);


