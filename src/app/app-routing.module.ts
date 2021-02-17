import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAndUpdateCategoryComponent } from './Component-Model/Category/create-and-update-category/create-and-update-category.component';
import { ShowListCategoryComponent } from './Component-Model/Category/show-list-category/show-list-category.component';

const routes: Routes = [
  { path: '', redirectTo: 'categories', pathMatch:'full' },
  { path: 'categories', component: ShowListCategoryComponent},
  { path: 'categories/create', component: CreateAndUpdateCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
