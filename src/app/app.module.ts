import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateAndUpdateCategoryComponent } from './Component-Model/Category/create-and-update-category/create-and-update-category.component';
import { ShowListCategoryComponent } from './Component-Model/Category/show-list-category/show-list-category.component';
import { CreateAndUpdateTagComponent } from './Component-Model/Tag/create-and-update-tag/create-and-update-tag.component';
import { ShowListTagComponent } from './Component-Model/Tag/show-list-tag/show-list-tag.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LocalStorageService } from './Service/local-storage/local-storage.service';
import { HttpClientModule } from '@angular/common/http';
import { ShowListPetComponent } from './Component-Model/Pet/show-list-pet/show-list-pet.component';
import { CreatePetComponent } from './Component-Model/Pet/create-pet/create-pet.component';
import { MatSelectModule } from '@angular/material/select'
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UpdatePetComponent } from './Component-Model/Pet/update-pet/update-pet.component'

@NgModule({
  declarations: [
    AppComponent,
    CreateAndUpdateCategoryComponent,
    ShowListCategoryComponent,
    CreateAndUpdateTagComponent,
    ShowListTagComponent,
    ShowListPetComponent,
    CreatePetComponent,
    UpdatePetComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressBarModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
