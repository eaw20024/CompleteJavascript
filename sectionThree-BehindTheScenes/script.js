// Hoisting // 

// calcAge(1989)

// function calcAge(year){
//     console.log(2018 - year);
// }

// retirement(1989);

// var retirement = function(year){
//     console.log(65 - (2018 - year));
// }

// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }

// function third() {
//     var d = 'Eric';
//     console.log(a + d);
// }

// third();

// calcAge(1989);

// function calcAge(year){
//     console.log(2018 - year);
//     console.log(this);
// }

var person = {
    name: 'Eric',
    yearOfBirth: 1989,
    calcAge: function(){
        console.log(this);
        console.log(2019 - this.yearOfBirth);

        // function innerFunction(){
        //     console.log(this);
        // }
        // innerFunction();
    }
}

person.calcAge();

var person2 = {
    name: 'Eboni',
    yearOfBirth: 1992
}

person2.calcAge = person.calcAge;
person2.calcAge();