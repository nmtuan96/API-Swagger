import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAndUpdateCategoryComponent } from './Component-Model/Category/create-and-update-category/create-and-update-category.component';
import { ShowListCategoryComponent } from './Component-Model/Category/show-list-category/show-list-category.component';
import { CreatePetComponent } from './Component-Model/Pet/create-pet/create-pet.component';
import { ShowListPetComponent } from './Component-Model/Pet/show-list-pet/show-list-pet.component';
import { CreateAndUpdateTagComponent } from './Component-Model/Tag/create-and-update-tag/create-and-update-tag.component';
import { ShowListTagComponent } from './Component-Model/Tag/show-list-tag/show-list-tag.component';

const routes: Routes = [
  { path: '', redirectTo: 'pets', pathMatch:'full' },
  { path: 'categories', component: ShowListCategoryComponent },
  { path: 'categories/create', component: CreateAndUpdateCategoryComponent },
  { path: 'tags', component: ShowListTagComponent },
  { path: 'tags/create', component: CreateAndUpdateTagComponent },
  { path: 'pets', component: ShowListPetComponent },
  { path: 'pets/create', component: CreatePetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
