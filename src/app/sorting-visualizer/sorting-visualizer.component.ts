import { AppRoutingModule } from './../app-routing.module';
import { Component, OnInit } from '@angular/core';
import { getMergeSortAnimations } from './merge-sort';
import { getSelectionSortAnimations } from './selection-sort';
import { getQuickSortAnimations } from './quick-sort';
import { getBubbleSortAnimations } from './bubble-sort';
import { getHeapSortAnimations } from './heap-sort';


@Component({
  selector: 'app-sorting-visualizer',
  templateUrl: './sorting-visualizer.component.html',
  styleUrls: ['./sorting-visualizer.component.css']
})
export class SortingVisualizerComponent implements OnInit {

  algolist = ["Selection Sort", "Bubble Sort", "Merge Sort", "Quick Sort", "Radix Sort", "Heap Sort"];

  numberList = [] // main array
  animations = [] // animations 
  selectedAlgo = ''; //current selected Algorithm

  PRIMARY_COLOR = 'aquamarine';
  SECONDARY_COLOR = 'black';
  TERTIARY_COLOR = 'green';
  QUATERNARY_COLOR = 'pink';

  ANIMATION_DELAY_MS = 30;

  randomArray() {
    this.numberList = [];
    for (let i = 0; i < 100; i++) {
      this.numberList.push(this.randomIntFromInterval(60, 600));
    }
  }

  setAlgo(algo: string) {
    this.selectedAlgo = algo.split(' ')[0];
    console.log(this.selectedAlgo);
  }

  startSort() {
    switch (this.selectedAlgo) {
      case 'Selection':
        this.animations = getSelectionSortAnimations(this.numberList.slice());
        break;

      case 'Bubble':
        this.animations = getBubbleSortAnimations(this.numberList.slice());
        this.animate();
        break;

      case 'Merge':
        this.animations = getMergeSortAnimations(this.numberList.slice());
        break;

      case 'Quick':
        this.animations = getQuickSortAnimations(this.numberList.slice());
        this.animate();
        break;

      case 'Radix':
        break;

      case 'Heap':
        this.animations = getHeapSortAnimations(this.numberList.slice());
        break;
    }
    this.animate();
  }

  animate() {
    for (let i = 0; i < this.animations.length; i++) {

      const bars = document.getElementsByClassName('bar') as HTMLCollectionOf<HTMLDivElement>;
      const [op, [num1, num2]] = this.animations[i];


      switch (op) {
        case 'CMP':
          setTimeout(() => {
            bars[num1].style.backgroundColor = this.SECONDARY_COLOR;
            bars[num2].style.backgroundColor = this.SECONDARY_COLOR;
          }, i * this.ANIMATION_DELAY_MS);
          ;
          break;

        case 'REV':
          setTimeout(() => {
            bars[num1].style.backgroundColor = this.PRIMARY_COLOR;
            bars[num2].style.backgroundColor = this.PRIMARY_COLOR;
          }, i * this.ANIMATION_DELAY_MS);
          ;
          break;

        case 'REP':
          setTimeout(() => {
            this.numberList[num1] = num2;
            bars[num1].style.backgroundColor = this.PRIMARY_COLOR;
          }, i * this.ANIMATION_DELAY_MS);
          break;

        case 'MIN':
          setTimeout(() => {
            bars[num1].style.backgroundColor = this.TERTIARY_COLOR;
          }, i * this.ANIMATION_DELAY_MS);

        case 'PVT':
          setTimeout(() => {
            bars[num1].style.backgroundColor = this.QUATERNARY_COLOR;
          }, i * this.ANIMATION_DELAY_MS);
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
