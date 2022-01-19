// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}


function appendCat(name) {
    const newCats = [...cats]; // copy of the original cats (memory point)
    newCats.push(name);

    return newCats;
}

function prependCat(name) {
    const newCats = [...cats];
    newCats.unshift(name);

    return newCats;
}

function removeLastCat() {
    const newCats = [...cats];
    newCats.pop();

    return newCats;
}

function removeFirstCat() {
    const newCats = [...cats];
    newCats.shift();

    return newCats;
}