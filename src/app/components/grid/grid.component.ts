import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  cols = Array(1200/30).fill(0);
  rows = Array(510/30).fill(0);
  constructor() { }

  ngOnInit(): void {
  }

  makeWall(r,c) {
   this.rows[r] = 1
   this.cols[c] = 1
  }
  getColors(r,c){
    if(this.rows[r] == 1 && this.cols[c] == 1)
      return 'bg-dark'
    else 
      return ''
  }

}
