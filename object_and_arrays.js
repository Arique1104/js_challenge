let age = 100
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = 'Wes';
let name2 = name;
console.log(name, name2);
name = 'wesley';
console.log(name, name2);

const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team = players

console.log(players, team);

// team[3] = 'Lux';
// console.log(players, team);


// Making a copy of an array

const team2 = players.slice();
team2[3] = 'Lux'
console.log(team, team2)

const team3 = [].concat(players);

const team4 = [...players];
team4[3] = 'heeee hawww';
console.log(team4);

const team5 = Array.from(players)
team5[3] = 'wooooow';
console.log(team5);


// Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

console.log(person)
// Reference
const captain = person;
captain.number = 105;
console.log(person, captain)

// Copy
const cap2 = Object.assign({}, person, {number: 99, age: 12});
console.log(captain, cap2)



const bianca = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@bianca',
    facebook: 'bianca.develper'
  }
}
// console.clear();
console.log(bianca);

const dev = Object.assign({}, bianca);
dev.name = 'Wesley';
console.log(bianca, dev)

// clone deep, very rarely do you need to clone an object that deep

const dev2 = JSON.parse(JSON.stringify(dev));
dev2.social.twitter = '@coolwoman';
console.log(dev2, dev)
