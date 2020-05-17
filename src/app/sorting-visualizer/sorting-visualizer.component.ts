import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorting-visualizer',
  templateUrl: './sorting-visualizer.component.html',
  styleUrls: ['./sorting-visualizer.component.css']
})
export class SortingVisualizerComponent implements OnInit {

  algolist =["Selection Sort","Bubble Sort","Merge Sort","Quick Sort","Radix Sort","Heap Sort"];
  numberList=[]

  randomArray(){
    this.numberList=[];
    for (let i=0 ; i <200 ; i++)
    {
      this.numberList.push(this.randomIntFromInterval(30,600));
    }

    console.log(this.numberList);
  }


  constructor() { }

  ngOnInit(): void {
  }

  randomIntFromInterval(min,max): number{
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
