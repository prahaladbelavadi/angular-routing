import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LionComponent } from './lion/lion.component';
import { CatComponent } from './cat/cat.component';
import { SimbaComponent } from './simba/simba.component';
import { ChildComponent } from './child/child.component';
import { ScarComponent } from './scar/scar.component';
import { NalaComponent } from './nala/nala.component';

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "lion", component: LionComponent },
  { path: "cat", component: CatComponent },
  {
    path: "child", component: ChildComponent, children: [
      { path: "simba", component: SimbaComponent },
      {
        path: "scar", component: ScarComponent, children: [
          { path: "nala", component: NalaComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }