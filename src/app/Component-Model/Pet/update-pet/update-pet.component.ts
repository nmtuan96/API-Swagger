import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from 'src/app/Service/API-Pet/pet.service';
import { LocalStorageService } from 'src/app/Service/local-storage/local-storage.service';

@Component({
  selector: 'app-update-pet',
  templateUrl: './update-pet.component.html',
  styleUrls: ['./update-pet.component.css']
})
export class UpdatePetComponent implements OnInit {
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
  dataPet: any;
  listCategory: any =[];
  listTag: any = [];
  value:Number;
  listPhoto: any = [];
  listCheckBooleanTag: any = [];
  listCheckTag: any = [];
  booleanTag : Boolean= false;
  listPhotoUrls: any = [];
  checkCategory: any;
  idFistCate: Number;
  constructor(private fb: FormBuilder, private router: Router, private localStorage: LocalStorageService, private petService: PetService,private actRoute: ActivatedRoute) {
    this.value= parseInt(this.actRoute.snapshot.params.id);
    this.getDataPet(this.value);
   }

  ngOnInit(): void {
    this.listCategory = this.localStorage.get('1');
    this.listTag = this.localStorage.get('2');
    
  }
  UpdatePet(){
    this.checkCategory= this.pet.value.category;
    if(this.idFistCate !== this.checkCategory){
      this.pet.controls['category'].setValue(this.listCategory[this.checkCategory]);
      this.checkCategory= "";
    }
    if(this.pet.value.photoUrls){
      this.listPhotoUrls.push(this.pet.value.photoUrls);
      this.pet.value.photoUrls=[];
    }
    
    this.pet.controls['id'].setValue(2323);
    this.pet.value.photoUrls = this.listPhotoUrls;
    this.listCheckTag = [];
    this.listPhotoUrls= [];
    this.petService.updatePet(this.pet.value)
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

  getDataPet(id){
    this.petService.detailPet(id)
      .then(res=> {
        this.dataPet = res;
        this.pet.controls['id'].setValue(this.dataPet.id);
        this.pet.controls['name'].setValue(this.dataPet.name);
        this.pet.controls['category'].setValue(this.dataPet.category);
        this.pet.controls['status'].setValue(this.dataPet.status);
        this.pet.controls['tags'].setValue(this.dataPet.tags);
        this.listPhotoUrls = this.dataPet.photoUrls;
        this.idFistCate= this.dataPet.category;
        this.listCheckTag = this.dataPet.tags
        this.FunclistCheckBoolean();
       })
  }


  FunclistCheckBoolean(){
    for(let i = 0; i < this.listTag.length; i++){
      for (let tag of this.listCheckTag) {
        if(this.listTag[i].id === tag.id){
          this.listCheckBooleanTag[i] = true;
          break;
        }else{
          this.listCheckBooleanTag[i] = false;
        }
      }
    }
  }

  changeSelection(i){
    let listCheckTagUpdate = [];
    if(this.listCheckBooleanTag[i]){
      this.listCheckBooleanTag[i] = false;
    }else{
      this.listCheckBooleanTag[i]= true;
    }
    for(let i = 0; i < this.listCheckBooleanTag.length; i++){
      if(this.listCheckBooleanTag[i]){
        listCheckTagUpdate.push(this.listTag[i]);
      }
    }
    this.pet.controls['tags'].setValue(listCheckTagUpdate);
  }
}
