let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];

let moreMixedLetters = [...mixedLetters, 'h', 'k', 'g', 'j', 'i', 'l'];
console.log(moreMixedLetters);
const updateSortReverse = (arr, ...letters) => {
    let updateArray = [...arr];
    for (let i of letters){
        updateArray.push(i);
    }
    updateArray.sort();
    return updateArray.reverse();
}

let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o');
console.log(reverseSort);
console.log(moreMixedLetters);