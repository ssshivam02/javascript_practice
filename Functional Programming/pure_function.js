// What is a pure function?
// A pure function is a function that always returns the same output given the same inputs and has no
// side effects. In other words, it is a function that is deterministic and does not modify th
// environment in which it is called.

// Impure Function
var a= 10;
function impureFunction(x) {
    console.log(x+a);
}
impureFunction(3)
// Output: 13
// This is impure because if we change a, then value what we get is also getting changed.
// So, it is not a pure function.
// Pure Function
function pureFunction(x) {
    return x + 10;        // This function always returns the same output given the same inputs
    }
    // Output: 13
pureFunction(3)