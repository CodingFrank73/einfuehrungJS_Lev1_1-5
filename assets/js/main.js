function intro() {
    let a = 4;
    let b = "Hello World!"


    console.log(a);
    console.log(b);
    console.log("1 + 3 = " + a);
}
intro()

function intro2(paramName) {
    let varName = "SuperCoder";
    console.log("Hi " + varName + ". Mein Name ist " + paramName + ".");
}
intro2('Frank Hauser');


function intro3(name, stadt, alter) {
    console.log("Hallo, mein Name ist " + name + ". Ich bin " + alter + " Jahre alt. Ich komme aus " + stadt + ".");
}
intro3('Frank', 'Köln', 48);

function math(x, y) {
    console.log(x * y);
    console.log(x / y);
}
math(1, 1000)
