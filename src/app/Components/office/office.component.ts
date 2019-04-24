import {Component, OnInit} from '@angular/core';
import {CompactType, DisplayGrid, GridsterConfig, GridsterItem, GridType} from 'angular-gridster2';
import * as GC from '@grapecity/spread-sheets';
import * as Excel from '@grapecity/spread-excelio';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
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
    this.options = {
      gridType: GridType.Fit,
      compactType: CompactType.None,
      margin: 10,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: null,
      outerMarginLeft: null,
      useTransformPositioning: true,
      mobileBreakpoint: 640,
      minCols: 1,
      maxCols: 100,
      minRows: 1,
      maxRows: 100,
      maxItemCols: 100,
      minItemCols: 1,
      maxItemRows: 100,
      minItemRows: 1,
      maxItemArea: 2500,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 105,
      fixedRowHeight: 105,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      ignoreMarginInRow: false,
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: true,
      },
      swap: false,
      pushItems: true,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: {north: true, east: true, south: true, west: true},
      pushResizeItems: false,
      displayGrid: DisplayGrid.None,
      disableWindowResize: false,
      disableWarnings: false,
      scrollToNewItems: false
    };

    this.dashboard = [
      {cols: 2, rows: 2, y: 0, x: 0, dragEnabled: true, resizeEnabled: true, hasContent: true, ofType: 'cockpit', borderColor: 'blue'},
      {cols: 2, rows: 2, y: 0, x: 2, dragEnabled: true, resizeEnabled: true, hasContent: true, ofType: 'statistics', borderColor: 'purple'},
      {cols: 2, rows: 2, y: 2, x: 0, dragEnabled: true, resizeEnabled: true, hasContent: true, ofType: 'cashFlow', borderColor: 'green'},
      {cols: 2, rows: 2, y: 2, x: 2, dragEnabled: true, resizeEnabled: true, hasContent: true, ofType: 'reporting', borderColor: 'yellow'},
      // {cols: 2, rows: 2, y: 3, x: 5, minItemRows: 2, minItemCols: 2, label: 'Min rows & cols = 2'},
      // {cols: 2, rows: 2, y: 2, x: 0, maxItemRows: 2, maxItemCols: 2, label: 'Max rows & cols = 2'},
      // {cols: 2, rows: 1, y: 2, x: 2, dragEnabled: true, resizeEnabled: true, label: 'Drag&Resize Enabled'},
      // {cols: 1, rows: 1, y: 2, x: 4, dragEnabled: false, resizeEnabled: false, label: 'Drag&Resize Disabled'},
    ];
  }

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({x: 0, y: 0, cols: 1, rows: 1});
  }

  workbookInit(args) {
    const self = this;
    self.spread = args.spread;
    const sheet = self.spread.getActiveSheet();
    sheet.getCell(0, 0).text('').foreColor('black');
  }

  changeTo2Panels() {
    this.dashboard = [
      {cols: 2, rows: 4, y: 0, x: 0, dragEnabled: true, resizeEnabled: true, hasContent: true, ofType: 'cockpit', borderColor: 'blue'},
      {cols: 2, rows: 4, y: 2, x: 0, dragEnabled: true, resizeEnabled: true, hasContent: true, ofType: 'statistics', borderColor: 'purple'},
    ];
  }

  changeTo4Panels() {
    this.dashboard = [
      {cols: 2, rows: 2, y: 0, x: 0, dragEnabled: true, resizeEnabled: true, hasContent: true, ofType: 'cockpit', borderColor: 'blue'},
      {cols: 2, rows: 2, y: 0, x: 2, dragEnabled: true, resizeEnabled: true, hasContent: true, ofType: 'statistics', borderColor: 'purple'},
      {cols: 2, rows: 2, y: 2, x: 0, dragEnabled: true, resizeEnabled: true, hasContent: true, ofType: 'cashFlow', borderColor: 'green'},
      {cols: 2, rows: 2, y: 2, x: 2, dragEnabled: true, resizeEnabled: true, hasContent: true, ofType: 'reporting', borderColor: 'yellow'},
    ];
  }

}
