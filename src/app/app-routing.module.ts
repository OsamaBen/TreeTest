import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {TreeComponentComponent} from './Components/tree-component/tree-component.component';
import {MyTreeComponent} from './Components/my-tree/my-tree.component';

const routes: Routes = [
  {
    path: '',
    component : TreeComponentComponent
  },
  {
    path: 'tree',
    component : MyTreeComponent
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
