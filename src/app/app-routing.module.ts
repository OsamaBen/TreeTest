import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {TreeComponentComponent} from './Components/tree-component/tree-component.component';
import {JsPlumbComponent} from './Components/js-plumb/js-plumb.component';
import {GoJsComponent} from './Components/go-js/go-js.component';
import {OfficeComponent} from './Components/office/office.component';
import {SpreadJsComponent} from './Components/spread-js/spread-js.component';
import {ExcelTabsetMergeComponent} from "./Components/excel-tabset-merge/excel-tabset-merge.component";

const routes: Routes = [
  {
    path: '',
    component : TreeComponentComponent
  },
  {
    path: 'jsPlumb',
    component : JsPlumbComponent
  },
  {
    path: 'goJs',
    component : GoJsComponent
  },
  {
    path: 'tabSet',
    component : OfficeComponent
  },
  {
    path: 'spreadJs',
    component : SpreadJsComponent
  },
  {
    path: 'resizable',
    component : ExcelTabsetMergeComponent
  },
  {
    path: '**',
    redirectTo : 'tree',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
