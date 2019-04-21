import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TreeModule} from 'angular-tree-component';
import { TreeComponentComponent } from './Components/tree-component/tree-component.component';
import { FormsModule } from '@angular/forms';
import {NgZorroAntdModule, NZ_I18N, en_US} from 'ng-zorro-antd';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {JsPlumbComponent} from './Components/js-plumb/js-plumb.component';
import { GoJsComponent } from './Components/go-js/go-js.component';
import { OfficeComponent } from './Components/office/office.component';
import { SpreadJsComponent } from './Components/spread-js/spread-js.component';
import { SpreadSheetsModule } from '@grapecity/spread-sheets-angular';
import { ExcelTabsetMergeComponent } from './Components/excel-tabset-merge/excel-tabset-merge.component';
import {GrabberDirective, ResizableDirective} from './Components/excel-tabset-merge/resizable-derictives/resizable';
import { ResizableModule } from 'angular-resizable-element';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    TreeComponentComponent,
    JsPlumbComponent,
    GoJsComponent,
    OfficeComponent,
    SpreadJsComponent,
    ExcelTabsetMergeComponent,
    ResizableDirective,
    GrabberDirective
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SpreadSheetsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    NgZorroAntdModule.forRoot(),
    TreeModule.forRoot(),
    NgZorroAntdModule,
    ResizableModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
