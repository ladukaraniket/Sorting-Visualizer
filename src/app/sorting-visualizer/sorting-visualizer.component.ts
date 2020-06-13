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
  selectedButton: HTMLButtonElement ;

  //PRIMARY_COLOR = '#8b8473';
  PRIMARY_COLOR = 'black';
  SECONDARY_COLOR = 'white';
  //SECONDARY_COLOR = '#fff1cf';
  //SECONDARY_COLOR = 'aquamarine';
  
  TERTIARY_COLOR = '#ffd369';
  QUATERNARY_COLOR = 'pink';
  SORTED_COLOR = '#fff1cf';

  ANIMATION_DELAY_MS = 30;

  randomArray() {
    this.numberList = [];
    for (let i = 0; i < 100; i++) {
      this.numberList.push(this.randomIntFromInterval(60, 600));
    }
  }

  setAlgo(algo: string) {
    this.selectedAlgo = algo.split(' ')[0];
        
    try{
    this.selectedButton.style.boxShadow = "";
    }
    catch{    }
    
    this.selectedButton = document.getElementsByName(algo)[0] as HTMLButtonElement;
    this.selectedButton.style.boxShadow = "2px 2px 4px #667579";
  }

  startSort() {
    switch (this.selectedAlgo) {
      case 'Selection':
        this.animations = getSelectionSortAnimations(this.numberList.slice());
        break;

      case 'Bubble':
        this.animations = getBubbleSortAnimations(this.numberList.slice());
        
        break;

      case 'Merge':
        this.animations = getMergeSortAnimations(this.numberList.slice());
        break;

      case 'Quick':
        this.animations = getQuickSortAnimations(this.numberList.slice());
        
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
          break;

        case 'PVT':
          setTimeout(() => {
            bars[num1].style.backgroundColor = this.QUATERNARY_COLOR;
          }, i * this.ANIMATION_DELAY_MS);
          break;

        case 'FIN':
          setTimeout(() => {
            bars[num1].style.backgroundColor = this.SORTED_COLOR;
          }, i * this.ANIMATION_DELAY_MS);
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
