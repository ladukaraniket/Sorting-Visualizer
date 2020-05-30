export function getSelectionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;

    for (let i = 0; i < array.length; i++) {
        let minidx = i;
        animations.push(['MIN', [minidx, minidx]]);

        for (let j = i + 1; j < array.length; j++) {
            //Comparing jth element with element at minidx. add animations
            animations.push(['CMP', [j, j]]);
            animations.push(['REV', [j, j]]);

            if (array[j] < array[minidx]) {
                //Replace the old min with new min. add animations
                animations.push(['REV', [minidx, minidx]]);
                minidx = j;
                animations.push(['MIN', [minidx, minidx]]);

            }
        }

        //Swapping operations. added animations accordingly
        const temp = array[minidx];
        animations.push(['REV', [minidx, minidx]]);
        animations.push(['REP', [minidx, array[i]]]);
        animations.push(['REP', [i, temp]]);
        array[minidx] = array[i];
        array[i] = temp;

    }

    return animations;
}