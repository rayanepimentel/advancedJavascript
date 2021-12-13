"use strict"

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

var b = {};

function foo1(b) {
    b.moo = false
};

foo1(b);
console.log(b)
    //{ moo: false}