console.log('Lodash is loaded:', typeof _ !== 'undefined');

const player1 = {
  name: 'Nic',
  hand: [],
  score: 0
};
const player2 = {
  name: 'Bailey',
  hand: [],
  score: 0
};
const player3 = {
  name: 'John',
  hand: [],
  score: 0
};
const player4 = {
  name: 'Angela',
  hand: [],
  score: 0
};

const deck = [
  { rank: 2, suit: 'clubs', point: 2 },
  { rank: 3, suit: 'clubs', point: 3 },
  { rank: 4, suit: 'clubs', point: 4 },
  { rank: 5, suit: 'clubs', point: 5 },
  { rank: 6, suit: 'clubs', point: 6 },
  { rank: 7, suit: 'clubs', point: 7 },
  { rank: 8, suit: 'clubs', point: 8 },
  { rank: 9, suit: 'clubs', point: 9 },
  { rank: 10, suit: 'clubs', point: 10 },
  { rank: 'J', suit: 'clubs', point: 10 },
  { rank: 'Q', suit: 'clubs', point: 10 },
  { rank: 'K', suit: 'clubs', point: 10 },
  { rank: 'A', suit: 'clubs', point: 11 },
  { rank: 2, suit: 'diamonds', point: 2 },
  { rank: 3, suit: 'diamonds', point: 3 },
  { rank: 4, suit: 'diamonds', point: 4 },
  { rank: 5, suit: 'diamonds', point: 5 },
  { rank: 6, suit: 'diamonds', point: 6 },
  { rank: 7, suit: 'diamonds', point: 7 },
  { rank: 8, suit: 'diamonds', point: 8 },
  { rank: 9, suit: 'diamonds', point: 9 },
  { rank: 10, suit: 'diamonds', point: 10 },
  { rank: 'J', suit: 'diamonds', point: 10 },
  { rank: 'Q', suit: 'diamonds', point: 10 },
  { rank: 'K', suit: 'diamonds', point: 10 },
  { rank: 'A', suit: 'diamonds', point: 11 },
  { rank: 2, suit: 'hearts', point: 2 },
  { rank: 3, suit: 'hearts', point: 3 },
  { rank: 4, suit: 'hearts', point: 4 },
  { rank: 5, suit: 'hearts', point: 5 },
  { rank: 6, suit: 'hearts', point: 6 },
  { rank: 7, suit: 'hearts', point: 7 },
  { rank: 8, suit: 'hearts', point: 8 },
  { rank: 9, suit: 'hearts', point: 9 },
  { rank: 10, suit: 'hearts', point: 10 },
  { rank: 'J', suit: 'hearts', point: 10 },
  { rank: 'Q', suit: 'hearts', point: 10 },
  { rank: 'K', suit: 'hearts', point: 10 },
  { rank: 'A', suit: 'hearts', point: 11 },
  { rank: 2, suit: 'spades', point: 2 },
  { rank: 3, suit: 'spades', point: 3 },
  { rank: 4, suit: 'spades', point: 4 },
  { rank: 5, suit: 'spades', point: 5 },
  { rank: 6, suit: 'spades', point: 6 },
  { rank: 7, suit: 'spades', point: 7 },
  { rank: 8, suit: 'spades', point: 8 },
  { rank: 9, suit: 'spades', point: 9 },
  { rank: 10, suit: 'spades', point: 10 },
  { rank: 'J', suit: 'spades', point: 10 },
  { rank: 'Q', suit: 'spades', point: 10 },
  { rank: 'K', suit: 'spades', point: 10 },
  { rank: 'A', suit: 'spades', point: 11 }
];

const firstRandom = () => {
  return Math.ceil(Math.random() * 52);
};
const secondRandom = () => {
  return Math.ceil(Math.random() * 52);
};

let result1;
let result2;
const startDealing = () => {
  for (let i = 0; i < 4; i++) {
    result1 = firstRandom();
    result2 = secondRandom();
    if (i === 0) {
      player1.hand.push(deck[result1].rank);
      player1.hand.push(deck[result1].suit);
      player1.score += deck[result1].point;
      deck.splice(result1, 1);

      player1.hand.push(deck[result2].rank);
      player1.hand.push(deck[result2].suit);
      player1.score += deck[result2].point;
      deck.splice(result2, 1);
    } else if (i === 1) {

      player2.hand.push(deck[result1].rank);
      player2.hand.push(deck[result1].suit);
      player2.score += deck[result1].point;
      deck.splice(result1, 1);

      player2.hand.push(deck[result2].rank);
      player2.hand.push(deck[result2].suit);
      player2.score += deck[result2].point;
      deck.splice(result2, 1);

    } else if (i === 2) {
      player3.hand.push(deck[result1].rank);
      player3.hand.push(deck[result1].suit);
      player3.score += deck[result1].point;
      deck.splice(result1, 1);

      player3.hand.push(deck[result2].rank);
      player3.hand.push(deck[result2].suit);
      player3.score += deck[result2].point;
      deck.splice(result2, 1);

    } else if (i === 3) {
      player4.hand.push(deck[result1].rank);
      player4.hand.push(deck[result1].suit);
      player4.score += deck[result1].point;
      deck.splice(result1, 1);

      player4.hand.push(deck[result2].rank);
      player4.hand.push(deck[result2].suit);
      player4.score += deck[result2].point;
      deck.splice(result2, 1);

    }

  }
};

startDealing();
console.log(player1.hand, player1.score);
console.log(player2.hand, player2.score);
console.log(player3.hand, player3.score);
console.log(player4.hand, player4.score);
