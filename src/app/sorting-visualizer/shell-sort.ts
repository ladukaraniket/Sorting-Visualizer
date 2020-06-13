export function getShellSortAnimations(array) {
    const animations = [];

    let sublistcount = Math.floor(array.length/2);
    while (sublistcount > 0){
        for ( let i = sublistcount; i < array.length ; i++ ) {
            let currentVal = array[i];
            let position = i;
            let gap = sublistcount;

            while (position >= gap && array[ position - gap] > currentVal){
                animations.push(['CMP', [ position , position-gap ]]);
                animations.push(['REV', [ position , position-gap ]]);
                animations.push(['REP', [position, array[position-gap]]]);
                array[position] = array[position - gap];
                position = position-  gap;
            }
            
            animations.push(['REP', [position, currentVal]]);
            array[position] = currentVal;
            }
            sublistcount = Math.floor(sublistcount/2);
    }
    return animations;
}
