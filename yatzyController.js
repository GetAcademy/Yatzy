function pointsOnePair() {
    currentPoints = nOfAKind(2);
}

function threeOfAKind() {
    currentPoints = nOfAKind(3);
}

function fourOfAKind() {
    currentPoints = nOfAKind(4);
}

function yatzy() {
    currentPoints = nOfAKind(5) > 0 ? 50 : 0;
}


function nOfAKind(n) {
    const frequencyTable = createFrequencyTable(dice);
    let points = 0;
    for (let number = 6; number > 0; number--) {
        if (frequencyTable[number] >= n) {
            points = number * n;
        }
    }
    return points;
}

function createFrequencyTable(numbers) {
    const table = [0, 0, 0, 0, 0, 0, 0];
    for (let number of numbers) {
        table[number]++;
    }
    return table;
}