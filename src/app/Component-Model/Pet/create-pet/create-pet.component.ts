import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PetService } from 'src/app/Service/API-Pet/pet.service';
import { LocalStorageService } from 'src/app/Service/local-storage/local-storage.service';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.css']
})
export class CreatePetComponent implements OnInit {
  pet: any = this.fb.group({
    id: new FormControl(''),
    name: new FormControl(''),
    category: {
      id: new FormControl(''),
    },
    tags: new FormControl(''),
    status: new FormControl(''),
    photoUrls: new FormControl(''),
  });
  listCategory: any =[];
  listTag: any = [];
  listCheckTag: any = [];
  booleanTag : Boolean= false;
  checkCategory: any;
  
  listPhotoUrls: any = [];

  constructor(private fb: FormBuilder, private router: Router, private localStorage: LocalStorageService, private petService: PetService) { }

  ngOnInit(): void {
    this.listCategory = this.localStorage.get('1');
    this.listTag = this.localStorage.get('2');
  }
  
  addPet(){
    this.checkCategory= this.pet.value.category;
    this.listPhotoUrls.push(this.pet.value.photoUrls);
    this.pet.value.photoUrls=[];
    this.pet.controls['tags'].setValue(this.listCheckTag);
    this.pet.controls['category'].setValue(this.listCategory[this.checkCategory]);
    this.pet.controls['id'].setValue(2323);
    this.pet.value.photoUrls = this.listPhotoUrls;
    this.checkCategory= "";
    this.listCheckTag = [];
    this.listPhotoUrls= [];
    this.petService.addPet(this.pet.value)
      .then(res => {
        this.pet.reset();
        this.router.navigateByUrl("/pets");
        })
      .catch(e => {
        this.pet.reset();
        window.alert('Connection Error!'); })
  }
  back(){
    this.pet.reset();
    this.router.navigateByUrl('/pets');
  }

  changeSelection(i){
    for (let checktag of this.listCheckTag) {
      if(checktag == this.listTag[i]){
        this.booleanTag = true;
      }
    }
    if(this.booleanTag){
      this.listCheckTag.splice(i, 1);
      this.booleanTag = false;
    }else{
      this.listCheckTag.push(this.listTag[i]);
    }
  }


}
