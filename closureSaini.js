console.log("closure");
function outer(b) {
    function inner() {
        console.log(`inner function with outer value ${a},${b}`);
    }
    // inner()
    var a = 10;

    return inner
}
outer("hello")()