//this
// console.log('ok');
// console.log(this);
// this.sun = 1;

// console.log(this.sun);
// console.log(window.sun);
// console.log(sun);

// function checkThis() {
//     console.log(this);
// };

// checkThis();

"use strict";


var sun = {
    checkThis: function() {
        console.log(this);
    }
};

//sun.checkThis();
//console.log(sun);
//In use strict mode the default value of this is undefined


var sun1 = {
    checkThis1: function() {
        this.moz = 1.1;
        console.log(this);

        function check() {
            console.log('check', this);
        };

        check();
        console.log('2 ' +
            this.moz);
    }
};

// sun1.checkThis1();
// console.log(sun1);
//this in this situation points to the animal object itself

function v1() {
    console.log(this);
};

v1.muz = 1;
// console.log(v1.length, v1.name);
// console.log(v1.toString());
// console.log(v1.muz);
//console.log(v1.call());

//"use strict"; descomentar no inicio do arquivo 

function v2() {
    console.log(this);
};

//v2.call(); //undefined
//v2.call({}); //obj
//v2.call(13); //13


function v3(b, c, d) {
    console.log(this);
    console.log(b);
    console.log(c);
    console.log(d);
};

//v3.call(1, 2, 3, 4); //1, 2, 3, 4
//v3.apply(1, [2, 3, 4]) //1, 2, 3, 4

/*
call - é uma função capaz de alterar o valor this. 
Por padrão, o primeiro parâmetro que recebe é o valor do this 
e o demais parâmetros são da função que invoca o método Call.

apply - O Apply funciona exatamente como o método Call, 
porém seu segundo parâmetro recebe um Array dos parâmetros da função, 
enquanto o primeiro parâmetro continua recebendo o valor que será atribuído ao this

.*/


var xuxu = function() {
    console.log(this);
}.bind(13);

//xuxu(); //13


var ax = {
    func: xuxu
};

//ax.func()

function v4() {
    console.log(this);
};

v4.bind(1); //nao funciona

var xuxu1 = function v4() {
    console.log(this);
};

xuxu1 = xuxu1.bind(1);
//xuxu1(); //1


//func anomimas
setTimeout(function() {
    //console.log("Setimout called!");
}, 1000);

setTimeout(() => {
    //console.log("Setimout called 2!");
}, 1000);

let cb = () => {
    //console.log("Setimout called 3!");
};

setTimeout(cb, 1000);

let add = function(a, b) {
    return a + b;
};

//console.log(add(1, 2));

let add1 = (a, b) => a + b;
//console.log(add1(2, 3));

let obj = {
    name: "Carl",
    sayLater: function() {
        console.log(`${this.name}`);
    }
};

//obj.sayLater(); //Carl

let obj1 = {
    name: "Carl",
    sayLater: function() {
        setTimeout(function() {
            //console.log(`${this.name}`);
        }, 1000);
    }
};

obj1.sayLater(); // vazio

let obj2 = {
    name: "Carl",
    sayLater: function() {
        setTimeout(() => {
            //console.log(`${this.name}`);
        }, 1000);
    }
};

obj2.sayLater(); // Carl


//Object Orientation

var animal = {
    kind: 'human'
};

//console.log(animal);

var sol = {};

sol.__proto__ = animal;

//console.log(sol.kind);

//console.log(animal.isPrototypeOf(sol));

//animal.kind = 'estrela';
//console.log(sol.kind);
//console.log(animal.kind);

var lua = Object.create(animal, {
    food: {
        value: 'mango'
    }
});

//console.log(lua);

//console.log(lua.kind, lua.food);


// function Person(fname, lname) {
//     this.fname = fname;
//     this.lname = lname;
// };


// Person.prototype.full_name = function() {
//     return `${this.fname} ${this.lname}`;
// };

// function Professional(honorific, fname, lname) {
//     this.fname = fname;
//     this.lname = lname;
//     this.honorific = honorific;
// };


// function Prof(honorific, fname, lname) {
//     Person.call(this, fname, lname);
//     this.honorific = honorific;
// };

//Prof.prototype = Object.create(Person.prototype);

// Prof.prototype.pname = function() {
//     return `${this.honorific} ${this.fname} ${this.lname}`;
// };

//var prof = new Prof('deva', "Maria", "John");
//console.log(prof);
//console.log(prof.pname());
//console.log(prof.full_name()); //erro não tem herança Person full_name
//console.log(prof.full_name());



//class

class Person {
    _firtsName = "";
    _lastName = "";

    constructor(firstName, lastName) {
        this._firtsName = firstName;
        this._lastName = lastName
    }

    get firstName() {
        return this._firtsName;
    }

    set firstName(name) {
        if (name === "") {
            console.error("firstName cannot be blank");
        } else {
            this._firtsName = name;
        }
    }

    fullName() {
        return `${this.firstName} ${this._lastName}`;
    }

    whoAreYou() {
        return `Hi I'm ${this.fullName()}`;
    }

}

class Student extends Person {

    constructor(firstName, lastName, course) {
        super(firstName, lastName);
        this.course = course
    }

    whoAreYou() {
        return `${super.whoAreYou()} and I'm studying ${this.course}`
    }
}


//let namx = new Person("Alex", "Sam");
// console.log(namx.fullName());
// console.log(namx.firstName = "");
// console.log(namx.firstName = "Coven");
// console.log(namx.whoAreYou());

let nam = new Student("Olivia", "Benson", "ADS");
//console.log(nam.whoAreYou());

//callback

function taks(cb) {
    setTimeout(cb, 0)
}

taks(() => console.log(message)); //erro
let message = "Callback";