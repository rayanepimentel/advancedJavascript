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

var asimsVar = 3;
asimVar = 1;
console.log(asimVar);