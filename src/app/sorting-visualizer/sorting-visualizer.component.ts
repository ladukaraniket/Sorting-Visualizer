import { RadixSort } from './radix-sort';
import { QuickSort } from './quick-sort';
import { MergeSort } from './merge-sort';
import { BubbleSort } from './bubble-sort';
import { SelectionSort } from './selection-sort';
import { HeapSort } from './heap-sort';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sorting-visualizer',
  templateUrl: './sorting-visualizer.component.html',
  styleUrls: ['./sorting-visualizer.component.css']
})
export class SortingVisualizerComponent implements OnInit {

  algolist = ["Selection Sort", "Bubble Sort", "Merge Sort", "Quick Sort", "Radix Sort", "Heap Sort"];
  numberList = []
  animations = []
  selectedAlgo = '';

  randomArray() {
    this.numberList = [];
    for (let i = 0; i < 220; i++) {
      this.numberList.push(this.randomIntFromInterval(30, 600));
    }

    this.animations = [['STD', [1]], ['CMP', [3, 45]], ['SWP', [3, 45]], ['UNS', [90]]];
    this.animate(this.animations);
  }

  setAlgo(algo: string) {
    this.selectedAlgo = algo.split(' ')[0];
    console.log(this.selectedAlgo);
  }

  startSort() {
    switch (this.selectedAlgo) {
      case 'Selection': this.animations = new SelectionSort().selectionSort([1,2,3]);
                        this.animate(this.animations);
        break;
      case 'Bubble':
        break;
      case 'Merge':
        break;
      case 'Quick':
        break;
      case 'Radix':
        break;
      case 'Heap':
        break;
    }
  }

  animate(animations: any[]) {

    let anim = [];

    while (animations.length > 0) {
      anim = animations.shift();

      switch (anim[0]) {
        //Unsorted
        case 'UNS': console.log("Unsorted");
          break;
        //Compare
        case 'CMP': console.log("Compare");
          break;
        //Swap
        case 'SWP': console.log("Swap");
          break;
        //Sorted
        case 'STD': console.log("Sorted");
          break;
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

  randomIntFromInterval(min, max): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
