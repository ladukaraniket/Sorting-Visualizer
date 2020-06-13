export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            //Comparing jth element with element at j+1. add animations
            animations.push(['CMP', [j, j+1]]);
            animations.push(['REV', [j, j+1]]);
           // animations.push(['REV', [j, j]]);
            //animations.push(['REV', [j+1, j+1]]); 

            if (array[j+1] < array[j]) {
                const temp = array[j];
                animations.push(['REP', [j, array[j+1]]]);
                animations.push(['REP', [j+1, temp]]);
                array[j] = array[j+1];
                array[j+1] = temp;

            }
        }
        animations.push(['FIN',[array.length -i -1,array.length -i -1]]);
    }
    return animations;
}