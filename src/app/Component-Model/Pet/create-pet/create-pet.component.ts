import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
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
    tag: new FormControl(''),
    status: new FormControl(''),
    photoUrls: new FormControl(''),
  });
  listCategory: any =[];
  listTag: any = [];

  constructor(private fb: FormBuilder, private router: Router, private localStorage: LocalStorageService) { }

  ngOnInit(): void {
    this.listCategory = this.localStorage.get('1');
    this.listTag = this.localStorage.get('2');
  }
  
  addPet(){
  }
  back(){
    this.pet.reset();
  }

}
