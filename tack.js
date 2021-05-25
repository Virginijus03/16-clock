const a = [2, 3, 1, 4, 2];
let waitingTime = 0;

for (const number of a) {
    waitingTime = 0;
    setTimeout(() => {
        console.log(number);
    }, number * 1000)
}