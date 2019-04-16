let Person  = require( './person.js');
let person_1 = new Person(23, "Junior");
let person_2 = new Person(18, "Sweetbeard");
let person_3 = new Person(25, "Bobby");
let people = [person_1, person_2, person_3]

for (var i = 0; i < 2; i++)
    for(j= 0; j < people.length; j++)
        people[j].saySomething();