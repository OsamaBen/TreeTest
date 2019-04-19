import { Component, OnInit } from '@angular/core';
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
  private excelIO;
  constructor() {
    this.excelIO = new Excel.IO();
  }

  ngOnInit() {
  }

  workbookInit(args) {
    const self = this;
    self.spread = args.spread;
    const sheet = self.spread.getActiveSheet();
    sheet.getCell(0, 0).text('').foreColor('black');
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
