import { Component, OnInit } from '@angular/core';
import * as GC from '@grapecity/spread-sheets';
import * as Excel from '@grapecity/spread-excelio';

@Component({
  selector: 'app-excel-tabset-merge',
  templateUrl: './excel-tabset-merge.component.html',
  styleUrls: ['./excel-tabset-merge.component.css']
})
export class ExcelTabsetMergeComponent implements OnInit {

  spreadBackColor = 'white';
  spreadForeColor = 'grey';
  hostStyle = {
    width: '90vw',
    height: '80vh'
  };

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
    sheet.getCell(0, 0).text('').foreColor('black');}
}
