import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  constructor() { }
  totalWidth =  600;
  boxWidth: 30;
  array = new Array(20*20).fill(0)

  ngOnInit(): void {
    this.setBoxPath()
   }
   updateClass(i) {
     this.array[i] = 1
   }
   setClass(i) {
     if(this.array[i] == 0) {
       return 'box'
     }else if(this.array[i] == 2) {
       return 'box-path'
     }
     return 'box-clicked'
   }

   setBoxPath() {
     var count = 0;
     var m =0;
     for(var i=0;i<20; i++) {
       setTimeout(() => {
        if(this.array[m+count] == 1)
          return
        this.array[m+count] = 2
        m ++;
        count += 20
       }, i*300)
       
     }
   }
  
  
  
}
