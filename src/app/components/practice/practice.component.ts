import { Component, OnInit } from '@angular/core';
import { RecurseVisitor } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  constructor() { }
 
  array = Array(20*20).fill(0)
  twoDArray =  Array(20)
  plotMode:boolean = false;

  ngOnInit(): void {
     for(var i=0;i<this.twoDArray.length;i++)
        this.twoDArray[i] = Array(20).fill(0)
   }
   updateClass(i) {
     if(this.plotMode){
        this.array[i] = 1;
        this.twoDArray[this.getRow(i)][this.getColumn(i)] = 1
        
     }

   }
   plotStart(){
     this.plotMode = true;
   }
   setClass(i) {
     if(this.twoDArray[this.getRow(i)][this.getColumn(i)] == 0) {
       return 'box'
     }else if(this.twoDArray[this.getRow(i)][this.getColumn(i)] == 2) {
       return 'box-path'
     }
     return 'box-clicked'
   }
   p = 309
   setBoxPath() {
     this.plotMode = false
     var x = this.getRow(this.p);
     var y = this.getColumn(this.p);
     this.recursion(x, y);
   }
   recursion(x, y) {

    if(x<0 || x>=20 || y<0 || y>=20) {
      return;
    }
    this.twoDArray[x][y] = 2
    this.recursion(x-1, y);
    this.recursion(x, y+1);
    this.recursion(x+1, y);
    this.recursion(x, y-1);
   }
   getRow(i) {
     var row = Math.floor(i/20)
     return row;
   }
   getColumn(i) {
     return i%20;
   }
  

   reset() {
    //  this.array = Array(20*20).fill(0)
    //  this.twoDArray = Array(20).fill(Array(20).fill(0))
    //  this.plotMode = false 
    
   }
  
  
}
