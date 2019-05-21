import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LionComponent } from './lion/lion.component';
import { CatComponent } from './cat/cat.component';
import { SimbaComponent } from './simba/simba.component';
import { ChildComponent } from './child/child.component';
import { ScarComponent } from './scar/scar.component';
import { NalaComponent } from './nala/nala.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LionComponent,
    CatComponent,
    SimbaComponent,
    ChildComponent,
    ScarComponent,
    NalaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
