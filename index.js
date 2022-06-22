let person =
{
    firstName: `Kevin`,
    lastName: `Taylor`,
    age : 32,
    favorites:
    {
        movies:
        {
            movie1: `Movie 1`,
            movie2: `Movie 2`,
        },
        
        artists: [`Blink182`, `Motion City Soundtrack`],
    },
    greeting: function()
    {
        console.log("Hello, there!");
    }
}

// console.log(person.favorites.movies.movie2);
// person.greeting();
// console.log(person["favorites"].artists);

// let {age} = person;
// console.log(age);
// console.log(person.age);

// let {firstName, lastName} = person;


// for(let property in person)
// {
//     console.log(`${property}: ${person[property]}`);
// }


class Animals
{
    constructor(name, species, size)
    {
        this.name = name;
        this.species = species;
        this.size = size;
    }

    greeting()
    {
        console.log(`Hi, I am a ${this.species} and my name is ${this.name}`)
    }
}

class Mammals extends Animals
{
    constructor(name, species, size, isHairy)
    {
        super(name, species, size);

        this.isHairy = isHairy;
    }
}

// let snake = new Animals(`Snek`, `Python`, `Big`);

// console.log(snake);
// snake.greeting();

let hippo = new Mammals(`Bessy`, `Hippotamaus`, `Huge`, false);
hippo.greeting();