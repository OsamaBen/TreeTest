import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TreeModule} from 'angular-tree-component';
import { TreeComponentComponent } from './Components/tree-component/tree-component.component';
import { MyTreeComponent } from './Components/my-tree/my-tree.component';
import { FormsModule } from '@angular/forms';
import {NgZorroAntdModule, NZ_I18N, en_US} from 'ng-zorro-antd';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    TreeComponentComponent,
    MyTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    HttpClientModule,
    NgZorroAntdModule.forRoot(),
    TreeModule.forRoot(),
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
