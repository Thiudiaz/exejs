const numbers = [1,2,3,4];
const numbersMultipliedByTwo = numbers.map(function(number) {
    return number = 2
});

const ages = [8, 13, 27, 30, 22, 40];

//const evenAges = ages.filter(function(age){
   // return age % 2 === 0;
//})

//console.log(evenAges);

const sumOfAges = ages.reduce(function (age, accumulator){
    return accumulator + age ;
})
console.log(sumOfAges);





//const person  ={
    //firsName = "Thiago"
    //lastName = "Vasconcelos"
   // age = "28"
    //hobbles = ["jogar /fultebol", "ler"],
    //dog: {
      //  name: 'Simba',
        //age: 4
   // }
//};

//const firsName = person.firsName;
//const lastName = person.lastName;
//const age = person.age;
//const hobbles = person.hobbles;

//Mesma coisa que acima
//const {
//firsName: primeiroNome, lastName, age, hobbles, dog{name: dogname}, } = person;

//const read = person.hobbles[2];

//console.log(firsName);
//console.log(lastName);
//console.log(age);
//console.log(hobbles);

//person.dog = "Simba";
//console.log(person.dog.age);
//console.log(dog.name);

const todos = [
    {
     id: 1,
     description: "Estudar programação",
     isCompleted: false
    },
    {
     id: 2,
     description: "Ler"
     isCompleted: true,
    },
    {
     id: 3,
     description: "Trainer",
     isCompleted: true,
    },
],

const descriptionflastTodo = todos[2].description;
console.log(descriptionflastTodo);


