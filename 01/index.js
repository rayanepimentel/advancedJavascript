"use strict";

//not strict moode.. --> legado
//function newCode() {
//  "use strict";
//strict moode...
//}

// sem strict 
let asim = 1;
console.log(window.asim);

let theval = 0;

//thval = 1
theval = 1

if (theval > 0) {
    console.log("hihiihih");
};


//erro use strict nao permite excluir function

//var foo = 1;

//delete foo;

//function moo() {};
//delete moo;

var a;
a = 1;
//a = true

function foo(a) {
    a = 2;
    //a = false

};
foo(a);
console.log(a);
//11
//true

var b = {
    "moo": "too"
};

function foo1(b) {
    //b = { "too": "moo" }
    b.too = "moo";
    b.doo = "xii";
};

foo1(b);
console.log(b)
    //{ moo: "too" } //nao mudou pq tentamos subistituir b
    //{ moo: false}
    // { moo: "too", too: "moo", doo: "xii"}

var c = 1;
var d = {};

function foo2(c, d) {
    c = 2;
    d.moo = 3;
}

foo2(c, d);
console.log(c + JSON.stringify(d)); // 1 {'moo':3}

//var asimsVar = 3;
//asimVar = 1;
//console.log(asimVar);


function sum(a, b) {
    return a + b;
}

sum(1, 2); //3
console.log(sum(1, 2, 3, 4, 5)); // 3 ignora os d+ params
console.log(sum(1)); //NaN, houve algum problem no calc
//todos os arguments sao passado para função com uma var ou propriedade = os argumentos
//
function sum1(a, b) {
    console.log(arguments);
    return a + b;
}

sum1(2, 6, 8, 12); //array Arguments { 0: 2, 1: 6, 2: 8, 3: 12, callee: f sum1(a,b), length:4}


//exemplo não indicado
//- function nao indica quantos arg (var/propriedade) sao necessarios
//- vc realmente precisa olhar p/ code para entender o que tá acontecendo
//- misturar arg fixos com var 
//array de arg nao é certo
function sum2() {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }

    return total;
}

console.log(sum2(1, 3, 5, 7, 9)) //25

//bom exemplo

function login(method) {
    //var options = arguments.slice(1); //erro, arg nao é uma array
    var options = Array.prototype.slice(arguments, 1); //basicamente arg torna array
    console.log(method);
    console.log(options);
}

login('msn', 1, 2, 3, 4, 5);
//login('twitter', 5, 8, 9)

function login1(...options) {
    //pode add elementos com push
    options.push(11);
    console.log(options);
}

login1('msn1', 0, 3, 6, 9);


function login2(mth, ...options) {
    //pode add elementos com push
    console.log(mth);
    options.push(11);
    console.log(options);
}

login2('msn2', 0, 3, 6, 9);
//o ...rest tem sempre que ficar por 'último'
//nao podemos fazer isso:
/*
function(mth, ...options, moo)
*/