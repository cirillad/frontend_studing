const body_elem = document.querySelector('div');

let amountOfCards = 9;
let current_attemts = 0;
let max_attemts = 3;
let win_cards = 3;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

class LoteryCard {
    constructor(num, isWinning){
        this.num = num;
        this.isWinning = isWinning;
    }

    // play() {
    //     if (this.isWinning) {
    //         alert('You won!');
    //         location.reload();
    //
    //     }
    //     else {
    //         current_attemts++;
    //
    //         if (current_attemts === max_attemts) {
    //             alert('You lost :(');
    //             current_attemts = 0;
    //             location.reload();
    //         }
    //         else {
    //             alert('Fail attempt!');
    //         }
    //     }
    // }
}

LoteryCard.prototype.play = function () {
    if (this.isWinning) {
        alert('You won!');
        location.reload();

    }
    else {
        current_attemts++;

        if (current_attemts === max_attemts) {
            alert('You lost :(');
            current_attemts = 0;
            location.reload();
        }
        else {
            alert('Fail attempt!');
        }
    }
}

let cards = [];

function randomCards() {
    let cards_numbers = [];
    let win_numbers = [];


    for (let i = 0; i < amountOfCards; i++) {
        let randomNum = getRandomInt(100);

        if (!cards_numbers.includes(randomNum)) {
            cards_numbers.push(randomNum);
        }
        else {
            i--;
        }
    }

    for (let i = 0; i < win_cards; i++) {
        let win_number = getRandomInt(amountOfCards);

        if (!win_numbers.includes(cards_numbers[win_number])) {
            win_numbers.push(cards_numbers[win_number]);
        }
        else {
            i--;
        }
    }

    for (let i = 0; i < amountOfCards; i++) {
        if (win_numbers.includes(cards_numbers[i])) {
            cards.push(new LoteryCard(cards_numbers[i], true));
        }
        else {
            cards.push(new LoteryCard(cards_numbers[i], false));
        }
    }

    console.log(cards);
}

randomCards();

function renderCards() {
    for (const card of cards) {
        const card_element = document.createElement('button');
        card_element.innerText = card.num;
        card_element.classList.add('card');
        body_elem.appendChild(card_element);

        card_element.addEventListener('click', () => {
            if (card.isWinning === false) {
                card_element.style.background = 'red';
            }

            card.play();
        });
    }
}



renderCards();









