import {Component, HostListener, OnInit} from '@angular/core';
import * as GC from '@grapecity/spread-sheets';
import * as Excel from '@grapecity/spread-excelio';

@Component({
  selector: 'app-spread-js',
  templateUrl: './spread-js.component.html',
  styleUrls: ['./spread-js.component.css']
})
export class SpreadJsComponent implements OnInit {

  // spreadBackColor = 'aliceblue';
  // hostStyle = {
  //   width: '95vw',
  //   height: '80vh'
  // };

  x: number;
  y: number;
  px: number;
  py: number;
  width: number;
  height: number;
  minArea: number;
  draggingCorner: boolean;
  draggingWindow: boolean;
  resizer: Function;

  myDiv: HTMLElement;
  spreadBackColor = 'aliceblue';
  spreadForeColor = 'blue';
  hostStyle = {
    width: '800px',
    height: '600px'
  };
  // sheetName = 'Goods List';
  // data = [
  //   {Name: 'Apple', Category: 'Fruit', Price: 1, 'Shopping Place': 'Wal-Mart'},
  //   {Name: 'Potato', Category: 'Fruit', Price: 2.01, 'Shopping Place': 'Other'},
  //   {Name: 'Tomato', Category: 'Vegetable', Price: 3.21, 'Shopping Place': 'Other'},
  //   {Name: 'Sandwich', Category: 'Food', Price: 2, 'Shopping Place': 'Wal-Mart'},
  //   {Name: 'Hamburger', Category: 'Food', Price: 2, 'Shopping Place': 'Wal-Mart'},
  //   {Name: 'Grape', Category: 'Fruit', Price: 4, 'Shopping Place': 'Sun Store'}
  // ];
  // columnWidth = 100;

  private spread: GC.Spread.Sheets.Workbook;
  mySpread: GC.Spread.Sheets.Workbook;
  private excelIO;

  constructor() {
    this.x = 300;
    this.y = 100;
    this.px = 0;
    this.py = 0;
    this.width = 600;
    this.height = 300;
    this.draggingCorner = false;
    this.draggingWindow = false;
    this.minArea = 20000 ;

    this.excelIO = new Excel.IO();
  }

  ngOnInit() {
    this.mySpread = new GC.Spread.Sheets.Workbook(document.getElementById('ss'), {
      sheetCount: 1
    });
  }

  workbookInit(args) {
    const self = this;
    self.spread = args.spread;
    const sheet = self.spread.getActiveSheet();
    sheet.getCell(0, 0).text('').foreColor('black');
  }

  area() {
    return this.width * this.height;
  }

  onWindowPress(event: MouseEvent) {
    this.draggingWindow = true;
    this.px = event.clientX;
    this.py = event.clientY;
  }

  onWindowDrag(event: MouseEvent) {
    if (!this.draggingWindow) {
      return;
    }
    const offsetX = event.clientX - this.px;
    console.log(offsetX);
    this.width += offsetX;
  }

  onCornerClick(event: MouseEvent, resizer?: Function ) {
    this.draggingCorner = true;
    this.px = event.clientX;
    this.py = event.clientY;
    this.resizer = resizer;
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('document:mousemove', ['$event'])
  onMove(event: MouseEvent) {
    if (!this.draggingCorner) {
      return;
    }
    console.log('aaa');
    const offsetX = event.clientX - this.px;
    const offsetY = event.clientY - this.py;
    const lastX = this.x;
    const pWidth = this.width;

    this.resizer(offsetX, offsetY);
    if (this.area() < this.minArea) {
      this.x = lastX;
      this.width = pWidth;
    }
    this.px = event.clientX;
  }

  @HostListener('document:mouseup', ['$event'])
  onRelease(event: MouseEvent) {
    this.draggingWindow = false;
    this.draggingCorner = false;
  }

  // onFileChange(args) {
  //   const self = this, file = args.target && args.target.files && args.target.files[0];
  //   if (self.spread && file) {
  //     self.excelIO.open(file, (json) => {
  //       self.spread.fromJSON(json, {});
  //       setTimeout(() => {
  //         alert('load successfully');
  //       }, 0);
  //     }, (error) => {
  //       alert('load fail');
  //     });
  //   }
  // }

}
