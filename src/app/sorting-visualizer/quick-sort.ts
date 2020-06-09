export function getQuickSortAnimations(array) {
    //array=[40,30,50,21,11,90,70,88,99];
    console.log(array);
    const animations = [];
    if (array.length <= 1) return array;
    quickSort(array, 0, array.length - 1, animations);
    console.log(array);
    return animations;
  }
  
  function quickSort(
    array,
    start,
    end,
    animations,
  ) {
    if ( start >= end) return;
    Quick(array, start, end, animations);
  }
  

function Quick (array, left, right, animations) {

    var pivot = left;
    var low = left + 1;
    var high = right;
    animations.push(['PVT', [pivot, pivot]]);

    while ( low <= high ) {
        animations.push(['CMP', [low, high]]);
        animations.push(['REV', [low, high]]);

        if (array[low] > array[pivot] && array[high] < array[pivot]){
            const temp = array[low];    
            animations.push(['REP', [ low, array[high] ]]);            
            array[low] = array[high];
            array[high] = temp;
            animations.push(['REP', [high, temp]]);
        }

        if ( array[low] <= array[pivot] ){
            animations.push(['CMP', [low, pivot]]);
            animations.push(['REV', [low, pivot]]);
            animations.push(['PVT', [pivot, pivot]]);
            low = low + 1;
        }
        if ( array[high] >= array[pivot] ){
            animations.push(['CMP', [pivot, high]]);
            animations.push(['REV', [pivot, high]]);
            animations.push(['PVT', [pivot, pivot]]);
            high = high - 1;
        }
      
    }
    if (pivot !== high){
        const temp =  array[pivot];
        animations.push(['REP', [ pivot, array[high] ]]);  
        array[pivot] = array[high];
        array[high] = temp;
        animations.push(['REP', [ high, temp ]]);  
    }
    animations.push(['REV', [pivot, pivot]]);
    quickSort(array, left, (high - 1), animations);
    quickSort(array, (high + 1) , right , animations);
    return animations;
}