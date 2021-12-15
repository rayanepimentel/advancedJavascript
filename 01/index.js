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

var arg1 = ['t', 1, 2];
var arg2 = [4, 6, ...arg1];
var arg3 = [3, 5, ...arg1, 20, 30];
console.log(`
${arg1}
${arg2}
${arg3}`);

var metho = 'twitter';
var opts = ['key, callbackUrl'];

function acLogin(method, ...options) {
    console.log(method);
    console.log(options)
};

acLogin(metho, opts) // Array [(1) [...]], uma array com outra array
acLogin(metho, 'key, callbackUrl') //Array [ 'key, callbackUrl' ]
acLogin(metho, ...opts) //Array [ 'key, callbackUrl' ]



//10 - strings

function h1(str) {
    return "<h1>" + str[0] + "</h1>";
};

console.log(h1 `hello`);

function foos(strings) {
    console.log(strings[0])
};
foos `moo${foo}fooii${foo}`

console.log(undefined == null);
console.log(typeof(NaN));
console.log(NaN == '1');

//scope and variables

{
    let a13 = 13;
    const b13 = 13;
    var c13 = 13; {
        console.log(a13);
        console.log(b13);
        console.log(c13);
    };
};

//console.log('let ' + a13); //fora do escopo, error
//console.log('const ' + b13); //fora do escopo, error
console.log('var ' + c13); // variável global, sem error

//scope chain

function chain() {
    //console.log(myvar); //nao t;a disponivel pq nao foi declada antes da chain()
}

var myvar2 = 'chain2'

function goo() {
    var myvar = 'chain1';

    function chain() {
        console.log(myvar);
        console.log(myvar2);
    }
    chain();
}

goo();

//fun closures

function sayHello(name) {
    var text = `Hello ${name}`;
    return function() {
        console.log(text)
    };
};

var says = sayHello("oi")
console.log(says)
says();

var fx = [];
for (var i = 0; i < 10; i++) {
    fx[i] = function() {
        console.log(i);
        return i;
    };
};

console.log(fx[0]()); //10
console.log(fx[1]()); //10
console.log(fx[2]()); //10

var fy = [];
for (var i = 0; i < 10; i++) {
    (function() {
        var y = i;
        // console.log(i);
        fy[i] = function() {
            return y;
        }
    })();
};
console.log("fy");
console.log(fy[0]()); //0
console.log(fy[1]()); //1
console.log(fy[2]()); //2

var fz = [];
for (var i = 0; i < 10; i++) {
    (function(y) {
        fz[i] = function() {
            return y;
        }
    })(i);
};
console.log("fz");
console.log(fz[0]()); //0
console.log(fz[1]()); //1
console.log(fz[2]()); //2

(function() {
    var a = 3;
})();
console.log("a defined? " + (typeof a !== 'undefined'));

console.log((function f(n) { return ((n > 1) ? n * f(n - 1) : n) })(4));
(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);



var salary = "1000$";
(function() {
    console.log("Original salary was " + salary);
    var salary = "5000$";
    console.log("My New Salary " + salary);
})();

function seila() {
    console.log(salary)
}
seila();

//destructuring and looping

const obj = {
    color: 'violet',
    day: 6,
    temp: 'sun',
    app: 'ts'
};
const { color: cl, day: dy } = obj;
const { temp, app } = obj
console.log(cl);

console.log(dy);
console.log(temp, app);

const arrr = ['a', 'b'];
const [ar, br] = arrr;

console.log(ar);
console.log(br);

function ff(options) {
    console.log(options.xj);
};
ff({ xj: 1 }); //1

function fi({
    xl: mxl
}) {
    console.log(mxl);
};
fi({ xl: 1 }); //1

function ffx(x) {
    console.log(x);
};
ffx({ xjx: 1 }); //1

function xf({ x = 0 }) {
    console.log(x);
};
xf({}); //0

function xfv({ x = 0 }) {
    console.log(x);
};
xfv({ x: 4 }); //4


let numArr = [1, 2, 3];

for (let i = 0; i < numArr.length; i++) {
    console.log(numArr[i]);
    //break;
    //continue;
}

numArr.forEach(function(value) {
    //break; nao tem
    //continue; nao tem
    console.log('hi ' + value);
});

function doSomething() {
    numArr.forEach(function(v) {
        console.log(v);
        return;
    });
};

doSomething();

var objs = {
    a: 1,
    b: 3
};

for (let prop in objs) {
    console.log(prop);
};

var arrayNum = [10, 20, 30];
for (let prop in arrayNum) {
    console.log(prop); //0, 1, 2 ??
    console.log(typeof(prop)); //string?
};

for (let prop of arrayNum) {
    console.log(prop); //10, 20, 30
    //continue; //ok
    console.log(typeof(prop)); //number
    //break; //ok
};

var axx = [1, 2, 3]
axx.forEach(function(v) {
    if (v === 2) continue;
    console.log(v)
})