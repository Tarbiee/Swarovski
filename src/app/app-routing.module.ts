import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JewelsComponent } from './jewels/jewels.component';
import { AddJewelComponent } from './add-jewel/add-jewel.component';
import { EditJewelsComponent } from './edit-jewels/edit-jewels.component';

const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'jewels',
    component:JewelsComponent
  },
  {
    path: 'addjewel',
    component:AddJewelComponent
  },
  {
    path: 'editjewel/:id',
    component:EditJewelsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
