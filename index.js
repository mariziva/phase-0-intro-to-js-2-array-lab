// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(Ralph) {
    return cats.push("Ralph");
}
function destructivelyPrependCat(Bob) {
    return cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    return cats.pop();
}
function destructivelyRemoveFirstCat() {
    return cats.shift();
}
function appendCat() {
    return [...cats, "Broom"];
}
function prependCat() {
    return ["Arnold", ...cats]
}
function removeLastCat() {
    return cats.slice(0,2);
}
function removeFirstCat() {
    return cats.slice(1);
}