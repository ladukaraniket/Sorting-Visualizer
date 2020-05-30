export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const aux = array.slice();
  mergeSort(array, 0, array.length - 1, aux, animations);
  return animations;
}

function mergeSort(
  mainarr,
  start,
  end,
  aux,
  animations,
) {
  if (start === end) return;
  const mid = Math.floor((start + end) / 2);
  mergeSort(aux, start, mid, mainarr, animations);
  mergeSort(aux, mid + 1, end, mainarr, animations);
  merge(mainarr, start, mid, end, aux, animations);
}

function merge(
  mainarr,
  start,
  mid,
  end,
  aux,
  animations
) {
  let k = start;
  let i = start;
  let j = mid + 1;
  while (i <= mid && j <= end) {
    //Comparing values at ith and jth position. 
    //Change color twice. once to highlight. once to revert to original color
    animations.push(['CMP', [i, j]]);
    animations.push(['REV', [i, j]]);
    if (aux[i] <= aux[j]) {
      //Replace value at kth position in mainarr with value at ith position in aux array
      animations.push(['REP', [k, aux[i]]]);
      mainarr[k++] = aux[i++];
    } else {
      //Replace value at kth position in mainarr with value at jth position in aux array
      animations.push(['REP', [k, aux[j]]]);
      mainarr[k++] = aux[j++];
    }
  }
  while (i <= mid) {
    //Comparing values at ith and ith position. 
    //Change color twice. once to highlight. once to revert to original color
    animations.push(['CMP', [i, i]]);
    animations.push(['REV', [i, i]]);
    //Replace value at kth position in mainarr with value at ith position in aux array
    animations.push(['REP', [k, aux[i]]]);
    mainarr[k++] = aux[i++];
  }
  while (j <= end) {
    //Comparing values at jth and jth position. 
    //Change color twice. once to highlight. once to revert to original color
    animations.push(['CMP', [j, j]]);
    animations.push(['REV', [j, j]]);
    //Replace value at kth position in mainarr with value at jth position in aux array
    animations.push(['REP', [k, aux[j]]]);
    mainarr[k++] = aux[j++];
  }
}