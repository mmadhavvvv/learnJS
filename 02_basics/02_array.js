const marvelHeroes = ["Thor", "Ironman", "Spiderman"]
const dcHeroes = ["Superman", "Flash", "Batman"]

marvelHeroes.push(dcHeroes)

console.log(marvelHeroes);

const allHeroes = [...marvelHeroes, ...dcHeroes]
console.log(allHeroes);

