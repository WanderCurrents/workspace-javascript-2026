function randInt(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

console.log(randInt(100,200));

let M = randInt(500,700);
document.getElementById("M").textContent = M.toString();