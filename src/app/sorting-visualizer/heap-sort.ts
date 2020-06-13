export function getHeapSortAnimations(array) {
    const animations = [];

    //Generate Max Heap


    for (let i = Math.ceil((array.length - 1) / 2) - 1; i >= 0; i--) {

        let root = i;
        let child = 0;
        let temp = 0;

        while (true) {
            if (2 * root + 1 > array.length - 1) {
                break;
            }

            if (2 * root + 2 > array.length - 1) {
                child = 2 * root + 1;
            }
            else {
                child = (array[2 * root + 1] > array[2 * root + 2]) ? 2 * root + 1 : 2 * root + 2;
            }

            // Comparing root with child
            animations.push(['CMP', [root, child]]);
            animations.push(['REV', [root, child]]);

            if (array[root] < array[child]) {
                temp = array[root];

                animations.push(['REP', [root, array[child]]]);
                animations.push(['REP', [child, temp]])
                array[root] = array[child];
                array[child] = temp;

                root = child;
            }
            else {
                break;
            }
        }

    }


    //Pop Max element and add it to the end
    for (let i = array.length - 1; i >= 0; i--) {

        let root = 0;
        let child = 0;
        let temp = 0;
        let temp1 = 0;

        temp1 = array[0];
        animations.push(['REP', [0, array[i]]]);
        animations.push(['REP', [i, temp1]]);
        animations.push(['FIN', [i, i]]);


        array[0] = array[i];
        array[i] = temp1;

        while (true) {
            if ((2 * root + 1) > i - 1) {
                break;
            }

            if ((2 * root + 2) > i - 1) {
                child = 2 * root + 1;
            }
            else {
                child = (array[2 * root + 1] > array[2 * root + 2]) ? 2 * root + 1 : 2 * root + 2;
            }

            // Comparing root with child

            animations.push(['CMP', [root, child]]);
            animations.push(['REV', [root, child]]);

            if (array[root] < array[child]) {
                temp = array[root];

                animations.push(['REP', [root, array[child]]]);
                animations.push(['REP', [child, temp]])
                array[root] = array[child];
                array[child] = temp;

                root = child;
            }
            else {
                break;
            }

        }

    }

    return animations;
}