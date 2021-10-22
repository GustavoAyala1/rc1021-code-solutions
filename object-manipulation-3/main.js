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
  { rank: 2, suit: 'clubs' },
  { rank: 3, suit: 'clubs' },
  { rank: 4, suit: 'clubs' },
  { rank: 5, suit: 'clubs' },
  { rank: 6, suit: 'clubs' },
  { rank: 7, suit: 'clubs' },
  { rank: 8, suit: 'clubs' },
  { rank: 9, suit: 'clubs' },
  { rank: 10, suit: 'clubs' },
  { rank: 'J', suit: 'clubs' },
  { rank: 'Q', suit: 'clubs' },
  { rank: 'K', suit: 'clubs' },
  { rank: 'A', suit: 'clubs' },
  { rank: 2, suit: 'diamonds' },
  { rank: 3, suit: 'diamonds' },
  { rank: 4, suit: 'diamonds' },
  { rank: 5, suit: 'diamonds' },
  { rank: 6, suit: 'diamonds' },
  { rank: 7, suit: 'diamonds' },
  { rank: 8, suit: 'diamonds' },
  { rank: 9, suit: 'diamonds' },
  { rank: 10, suit: 'diamonds' },
  { rank: 'J', suit: 'diamonds' },
  { rank: 'Q', suit: 'diamonds' },
  { rank: 'K', suit: 'diamonds' },
  { rank: 'A', suit: 'diamonds' },
  { rank: 2, suit: 'hearts' },
  { rank: 3, suit: 'hearts' },
  { rank: 4, suit: 'hearts' },
  { rank: 5, suit: 'hearts' },
  { rank: 6, suit: 'hearts' },
  { rank: 7, suit: 'hearts' },
  { rank: 8, suit: 'hearts' },
  { rank: 9, suit: 'hearts' },
  { rank: 10, suit: 'hearts' },
  { rank: 'J', suit: 'hearts' },
  { rank: 'Q', suit: 'hearts' },
  { rank: 'K', suit: 'hearts' },
  { rank: 'A', suit: 'hearts' },
  { rank: 2, suit: 'spades' },
  { rank: 3, suit: 'spades' },
  { rank: 4, suit: 'spades' },
  { rank: 5, suit: 'spades' },
  { rank: 6, suit: 'spades' },
  { rank: 7, suit: 'spades' },
  { rank: 8, suit: 'spades' },
  { rank: 9, suit: 'spades' },
  { rank: 10, suit: 'spades' },
  { rank: 'J', suit: 'spades' },
  { rank: 'Q', suit: 'spades' },
  { rank: 'K', suit: 'spades' },
  { rank: 'A', suit: 'spades' }
];

const firstRandom = () => {
  return Math.ceil(Math.random() * 52);
};
const secondRandom = () => {
  return Math.ceil(Math.random() * 52);
};

let result1;
let result2;
// const point = 0;

for (let i = 0; i < 4; i++) {
  result1 = firstRandom();
  result2 = secondRandom();
  if (i === 0) {
    player1.hand.push(deck[result1].rank);
    player1.hand.push(deck[result1].suit);

    player1.hand.push(deck[result2].rank);
    player1.hand.push(deck[result2].suit);
  } else if (i === 1) {
    player2.hand.push(deck[result1].rank);
    player2.hand.push(deck[result1].suit);

    player2.hand.push(deck[result2].rank);
    player2.hand.push(deck[result2].suit);
  } else if (i === 2) {
    player3.hand.push(deck[result1].rank);
    player3.hand.push(deck[result1].suit);

    player3.hand.push(deck[result2].rank);
    player3.hand.push(deck[result2].suit);
  } else if (i === 3) {
    player4.hand.push(deck[result1].rank);
    player4.hand.push(deck[result1].suit);

    player4.hand.push(deck[result2].rank);
    player4.hand.push(deck[result2].suit);
  }
  // if (i === 0) {
  // }
}

console.log(player1.hand);
console.log(player2.hand);
console.log(player3.hand);
console.log(player4.hand);
